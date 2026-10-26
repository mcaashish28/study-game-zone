(function () {
  'use strict';

  const $app = document.getElementById('app');
  const KEY = 'swg.v1';
  const LEVEL_XP = 150;
  const TITLES = ['Rookie', 'Explorer', 'Learner', 'Thinker', 'Scholar', 'Achiever', 'Champion', 'Master', 'Genius', 'Legend'];
  const AVATARS = ['🦊', '🐼', '🦄', '🐯', '🐱', '🐸', '🐧', '🦋', '🐬', '🌸', '⭐', '🎧'];
  const QUIZ_LEN = 10;
  const QUIZ_SECONDS = 20;
  const AR_SECONDS = 35;  // Assertion–Reason questions need more reading time
  const FLASH_LEN = 10;
  const MOODS = ['😍', '🙂', '😐', '😕', '😫'];
  const MODE_NAMES = { flash: 'Flashcards', quiz: 'Quiz Battle', match: 'Match Up', balance: 'Balance Lab', write: 'Answer Writing' };

  // ---------------------------------------------------------------- state

  function defaultState() {
    return {
      profile: null, xp: 0, sound: true,
      streak: { count: 0, last: null },
      cards: {},      // cardId -> box 0..5 (3+ = mastered)
      missed: {},     // quizId -> true while she keeps getting it wrong
      topics: {},     // chapterId:topic -> { right, wrong }
      best: {},       // chapterId:mode -> best score
      answers: {},    // writtenId -> marks scored
      drafts: {},     // writtenId -> text
      balanced: {},   // balanceId -> true
      badges: [],
      stats: { quizzes: 0, perfect: 0, matches: 0, cardsSeen: 0 },
      days: {},       // yyyy-mm-dd -> xp earned that day
      feedback: [],   // { date, area, mood, text }
      ratings: []     // { date, mode, chapter, mood } — quick taps after each game
    };
  }

  function load() {
    const s = defaultState();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        Object.assign(s, saved);
        s.stats = Object.assign(defaultState().stats, saved.stats);
      }
    } catch (e) { /* storage unavailable — play without saving */ }
    return s;
  }

  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  // ---------------------------------------------------------------- helpers

  const dayStr = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = () => dayStr(new Date());
  const yesterday = () => dayStr(new Date(Date.now() - 864e5));

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  // Escapes text, then shows chemistry numbers as subscripts (H2O -> H₂O) and "->" as an arrow.
  function fmt(s) {
    return esc(s)
      .replace(/-&gt;/g, '→')
      .replace(/([A-Za-z)])(\d+)/g, '$1<sub>$2</sub>')
      .replace(/[਀-੿]+(?:[ ,?!।]+[਀-੿]+)*/g, '<span class="pa">$&</span>') // Gurmukhi a bit larger
      .replace(/\n/g, '<br>');
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const $ = sel => $app.querySelector(sel);
  const $$ = sel => Array.from($app.querySelectorAll(sel));

  function findChapter(id) {
    for (const s of SWG.subjects) for (const c of s.chapters) if (c.id === id) return c;
    return null;
  }
  function allChapters() { return SWG.subjects.flatMap(s => s.chapters); }

  const level = () => Math.floor(S.xp / LEVEL_XP) + 1;
  const title = lv => TITLES[Math.min(lv - 1, TITLES.length - 1)];

  function markActive() {
    const t = today();
    if (S.streak.last !== t) {
      S.streak.count = S.streak.last === yesterday() ? S.streak.count + 1 : 1;
      S.streak.last = t;
    }
  }
  function currentStreak() {
    return (S.streak.last === today() || S.streak.last === yesterday()) ? S.streak.count : 0;
  }

  function addXP(n) {
    if (n <= 0) return;
    const before = level();
    S.xp += n;
    S.days[today()] = (S.days[today()] || 0) + n;
    markActive();
    checkBadges();
    save();
    if (level() > before) {
      setTimeout(() => { toast('🎉 Level up! You are now Level ' + level() + ' — ' + title(level())); confetti(); sfx('win'); }, 400);
    }
  }

  function recordTopic(ch, topic, ok) {
    const k = ch.id + ':' + topic;
    const t = S.topics[k] || (S.topics[k] = { right: 0, wrong: 0 });
    ok ? t.right++ : t.wrong++;
  }

  function cardsMastered(ch) { return ch.flashcards.filter(c => (S.cards[c.id] || 0) >= 3).length; }
  function chapterProgress(ch) {
    const part = (list, done) => list.length ? list.filter(done).length / list.length : null;
    const parts = [
      part(ch.flashcards, c => (S.cards[c.id] || 0) >= 3),
      ch.quiz.length ? Math.min(1, (S.best[ch.id + ':quiz'] || 0) / Math.min(QUIZ_LEN, ch.quiz.length)) : null,
      part(ch.balance, b => S.balanced[b.id]),
      part(ch.written, w => S.answers[w.id] != null)
    ].filter(p => p !== null);
    return parts.length ? Math.round(parts.reduce((a, b) => a + b, 0) / parts.length * 100) : 0;
  }

  // ---------------------------------------------------------------- badges

  const BADGES = [
    { id: 'first', e: '🚀', name: 'First Step', test: () => S.xp > 0 },
    { id: 'cards20', e: '🃏', name: '20 Cards Mastered', test: () => Object.values(S.cards).filter(b => b >= 3).length >= 20 },
    { id: 'quiz5', e: '⚡', name: '5 Quiz Battles', test: () => S.stats.quizzes >= 5 },
    { id: 'perfect', e: '💯', name: 'Perfect Quiz', test: () => S.stats.perfect >= 1 },
    { id: 'match', e: '🧩', name: 'Match Maker', test: () => S.stats.matches >= 3 },
    { id: 'balance', e: '⚖️', name: 'Equation Balancer', test: () => Object.keys(S.balanced).length >= 5 },
    { id: 'writer', e: '✍️', name: 'Answer Writer', test: () => Object.keys(S.answers).length >= 5 },
    { id: 'streak3', e: '🔥', name: '3-Day Streak', test: () => S.streak.count >= 3 },
    { id: 'streak7', e: '🏆', name: '7-Day Streak', test: () => S.streak.count >= 7 },
    { id: 'lv5', e: '👑', name: 'Level 5', test: () => level() >= 5 },
    { id: 'chapter', e: '🎓', name: 'Chapter Champion', test: () => allChapters().some(c => chapterProgress(c) >= 90) },
    { id: 'xp1000', e: '💎', name: '1000 XP', test: () => S.xp >= 1000 }
  ];
  function checkBadges() {
    for (const b of BADGES) {
      if (!S.badges.includes(b.id) && b.test()) {
        S.badges.push(b.id);
        setTimeout(() => { toast(b.e + ' New badge: ' + b.name); sfx('win'); }, 1200);
      }
    }
  }

  // ---------------------------------------------------------------- sound, toast, confetti

  let audio;
  function sfx(kind) {
    if (!S.sound) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const notes = { good: [660, 880], bad: [220, 160], win: [523, 659, 784, 1046], tap: [500] }[kind];
      notes.forEach((f, i) => {
        const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime + i * 0.09;
        o.type = kind === 'bad' ? 'sawtooth' : 'triangle';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.12, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        o.connect(g).connect(audio.destination);
        o.start(t); o.stop(t + 0.2);
      });
    } catch (e) { /* no audio */ }
  }

  let toastTimer;
  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  // ---------------------------------------------------------------- read aloud (Punjabi)

  // Only the Gurmukhi part is spoken: "ਮਾਂ — mother" -> "ਮਾਂ". Sentences stay together;
  // a lone vowel sign like ਾ is skipped.
  const GURMUKHI = /[ਅ-ਹਖ਼-੯ੲ-ੴ][਀-੿]*(?:[ ,?!।]+[਀-੿]+)*[?!।]?/g;
  const gurmukhiIn = s => (String(s).match(GURMUKHI) || []).join('. ');

  // Few phones have a Punjabi voice, but most have Hindi. Gurmukhi and Devanagari sit in
  // parallel Unicode blocks (ਕ U+0A15 -> क U+0915), so a word can be shifted letter by letter.
  function toDevanagari(s) {
    return s
      .replace(/ੲ([ਿੀੇ])/g, (_, v) => ({ 'ਿ': 'इ', 'ੀ': 'ई', 'ੇ': 'ए' }[v]))
      .replace(/ੳ([ੁੂੋ])/g, (_, v) => ({ 'ੁ': 'उ', 'ੂ': 'ऊ', 'ੋ': 'ओ' }[v]))
      .replace(/ੱ([ਕ-ਹਖ਼-ਫ਼])/g, '$1੍$1') // addak doubles the next letter
      .replace(/ੰ/g, 'ਂ') // tippi and bindi are both a nasal 'n'
      .replace(/[ਁ-੯]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x100));
  }

  let voices = [];
  function loadVoices() { try { voices = speechSynthesis.getVoices(); } catch (e) { /* no speech */ } }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  const findVoice = lang => voices.find(v => v.lang.toLowerCase().startsWith(lang));

  function speak(s, rate) {
    const text = gurmukhiIn(s);
    if (!text) return;
    if (!('speechSynthesis' in window)) return toast('This browser cannot read aloud 😕');
    loadVoices();
    const pa = findVoice('pa'), hi = findVoice('hi');
    const u = new SpeechSynthesisUtterance(pa ? text : toDevanagari(text));
    u.lang = pa ? 'pa-IN' : 'hi-IN';
    if (pa || hi) u.voice = pa || hi;
    u.rate = rate || 0.8;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  // 🔊 and 🐢 (slow) buttons for any text that has Gurmukhi in it.
  function sayBtns(s) {
    if (!gurmukhiIn(s)) return '';
    return `<span class="say"><button data-say="${esc(s)}" aria-label="Listen">🔊</button><button data-say="${esc(s)}" data-slow aria-label="Listen slowly">🐢</button></span>`;
  }
  // Capture phase, so tapping 🔊 on a flashcard does not also flip it.
  $app.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (!b) return;
    e.stopPropagation();
    speak(b.dataset.say, b.hasAttribute('data-slow') ? 0.5 : 0.8);
  }, true);

  function confetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = document.getElementById('confetti'), ctx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    const colors = ['#7c5cff', '#22d3ee', '#facc15', '#22c55e', '#f43f5e'];
    const bits = Array.from({ length: 120 }, () => ({
      x: cv.width / 2, y: cv.height / 3, vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 4,
      s: Math.random() * 6 + 4, c: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * 6
    }));
    let frame = 0;
    (function tick() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      bits.forEach(b => {
        b.x += b.vx; b.y += b.vy; b.vy += 0.35; b.r += 0.1;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.c;
        ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6); ctx.restore();
      });
      if (++frame < 120) requestAnimationFrame(tick); else ctx.clearRect(0, 0, cv.width, cv.height);
    })();
  }

  // ---------------------------------------------------------------- router

  let timer = null;
  function cleanup() { clearInterval(timer); timer = null; }

  function go(hash) { location.hash = hash; }
  window.addEventListener('hashchange', route);

  function route() {
    cleanup();
    window.scrollTo(0, 0);
    if (!S.profile) return renderOnboarding();
    const [page, a, b] = location.hash.replace(/^#\/?/, '').split('/');
    const ch = a && findChapter(a);
    if (page === 'subject') return renderSubject(a);
    if (page === 'chapter' && ch) return renderChapter(ch);
    if (page === 'play' && ch) {
      const modes = { flash: renderFlash, quiz: renderQuiz, match: renderMatch, balance: renderBalance, write: renderWriteList };
      if (modes[b]) return modes[b](ch);
    }
    if (page === 'write' && ch) return renderWrite(ch, Number(b));
    if (page === 'progress') return renderProgress();
    if (page === 'feedback') return renderFeedback(a);
    if (page === 'settings') return renderSettings();
    renderHome();
  }

  function topbar(text, backTo, right) {
    return `<div class="topbar">
      <button class="back" data-back="${esc(backTo)}" aria-label="Back">←</button>
      <h1>${text}</h1>${right || ''}</div>`;
  }
  function bindBack() {
    $$('[data-back]').forEach(b => b.onclick = () => go(b.dataset.back));
  }

  // ---------------------------------------------------------------- onboarding

  function renderOnboarding() {
    let avatar = AVATARS[0];
    $app.innerHTML = `
      <div class="center pop" style="margin-top:6vh">
        <div class="big-emoji">🎮</div>
        <h1 style="margin:0">Welcome to<br>Study Game Zone!</h1>
        <p class="muted">Learn your chapters by playing. Earn XP, level up and collect badges.</p>
      </div>
      <div class="panel stack">
        <label for="nm"><b>What's your name?</b></label>
        <input type="text" id="nm" maxlength="20" placeholder="Your name" autocomplete="off">
        <b>Pick your player</b>
        <div class="avatars">${AVATARS.map((a, i) => `<button data-a="${a}" class="${i ? '' : 'sel'}">${a}</button>`).join('')}</div>
      </div>
      <button class="btn block" id="start">Let's play ▶</button>`;
    $$('[data-a]').forEach(b => b.onclick = () => {
      $$('[data-a]').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); avatar = b.dataset.a; sfx('tap');
    });
    $('#start').onclick = () => {
      const name = $('#nm').value.trim();
      if (!name) { $('#nm').focus(); toast('Type your name first 🙂'); return; }
      S.profile = { name, avatar };
      save();
      route();
    };
  }

  // ---------------------------------------------------------------- home

  function renderHome() {
    const lv = level(), into = S.xp % LEVEL_XP;
    const streak = currentStreak();
    $app.innerHTML = `
      <div class="hello">
        <div class="avatar">${esc(S.profile.avatar)}</div>
        <div class="grow"><h1>Hi, ${esc(S.profile.name)}!</h1><div class="muted small">${greeting()}</div></div>
        <span class="pill" title="Day streak">🔥 ${streak}</span>
        <button class="back" data-go="#/settings" aria-label="Settings">⚙️</button>
      </div>

      <div class="panel levelcard">
        <div class="row">
          <div class="grow"><div class="muted small">LEVEL</div><div class="lv">${lv} <span style="font-size:1rem;font-weight:700">${title(lv)}</span></div></div>
          <div class="pill">⭐ ${S.xp} XP</div>
        </div>
        <div class="bar" style="margin-top:12px"><i style="width:${into / LEVEL_XP * 100}%"></i></div>
        <div class="muted small" style="margin-top:6px">${LEVEL_XP - into} XP to Level ${lv + 1} · Today: ${S.days[today()] || 0} XP</div>
      </div>

      <h2 style="font-size:1.05rem;margin:22px 0 10px">Choose your subject</h2>
      <div class="grid">
        ${SWG.subjects.map(s => `
          <button class="tile ${s.chapters.length ? '' : 'locked'}" style="--c:${s.color}" data-go="#/subject/${s.id}">
            <span class="ic">${s.icon}</span><b>${esc(s.name)}</b>
            <span class="muted small">${s.chapters.length ? s.chapters.length + ' chapter' + (s.chapters.length > 1 ? 's' : '') : 'Coming soon 🔒'}</span>
          </button>`).join('')}
        <button class="tile" style="--c:var(--gold)" data-go="#/progress">
          <span class="ic">🏆</span><b>My Progress</b><span class="muted small">${S.badges.length}/${BADGES.length} badges</span>
        </button>
        <button class="tile wide" style="--c:var(--accent-2)" data-go="#/feedback">
          <span class="ic">💬</span><span><b>Tell Papa what you think</b><br><span class="muted small">Ideas, problems, what you like</span></span>
        </button>
      </div>`;
    $$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  }

  function greeting() {
    const h = new Date().getHours();
    const streak = currentStreak();
    if (streak >= 2 && S.streak.last !== today()) return `Keep your ${streak}-day streak alive today! 🔥`;
    if (S.streak.last === today()) return 'Great work today — keep going! 💪';
    return h < 12 ? 'Good morning! Ready to level up?' : h < 17 ? 'Good afternoon! Quick game?' : 'Good evening! 15 minutes of play?';
  }

  // ---------------------------------------------------------------- subject & chapter

  function renderSubject(id) {
    const s = SWG.subjects.find(x => x.id === id);
    if (!s) return renderHome();
    $app.innerHTML = topbar(`${s.icon} ${esc(s.name)}`, '#/') + (s.chapters.length
      ? s.chapters.map(c => `
        <button class="chapter" data-go="#/chapter/${c.id}">
          <span class="num">${c.number}</span>
          <span class="grow"><b>${esc(c.title)}</b>
            <div class="bar" style="margin-top:8px"><i style="width:${chapterProgress(c)}%"></i></div>
            <span class="muted small">${chapterProgress(c)}% complete</span></span>
        </button>`).join('')
      : `<div class="panel center"><div class="big-emoji">🔒</div><b>Coming soon!</b>
         <p class="muted">Chapters for ${esc(s.name)} will be added here.</p></div>`);
    bindBack();
    $$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  }

  function renderChapter(ch) {
    const p = chapterProgress(ch);
    const modes = [
      { m: 'flash', ic: '🃏', name: 'Flashcards', sub: `${cardsMastered(ch)}/${ch.flashcards.length} mastered`, c: '#7c5cff' },
      { m: 'quiz', ic: '⚡', name: 'Quiz Battle', sub: `${ch.quiz.length} questions · Best ${S.best[ch.id + ':quiz'] || 0}/${QUIZ_LEN}`, c: '#facc15' },
      { m: 'match', ic: '🧩', name: 'Match Up', sub: `${ch.match.length} rounds`, c: '#22c55e' },
      { m: 'balance', ic: '⚖️', name: 'Balance Lab', sub: `${ch.balance.filter(b => S.balanced[b.id]).length}/${ch.balance.length} balanced`, c: '#22d3ee' },
      { m: 'write', ic: '✍️', name: 'Answer Writing', sub: `${ch.written.filter(w => S.answers[w.id] != null).length}/${ch.written.length} practised`, c: '#f43f5e' }
    ].filter(x => ({ flash: ch.flashcards, quiz: ch.quiz, match: ch.match, balance: ch.balance, write: ch.written })[x.m].length);
    $app.innerHTML = topbar(`Ch ${ch.number}: ${esc(ch.title)}`, '#/subject/' + ch.subject) + `
      <div class="panel">
        <div class="row"><b class="grow">Chapter progress</b><b>${p}%</b></div>
        <div class="bar" style="margin-top:8px"><i style="width:${p}%"></i></div>
      </div>
      <details class="panel notes">
        <summary>📝 Chapter in 1 minute <span class="muted small">(tap to open)</span></summary>
        <ul>${ch.summary.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>
      </details>
      <div class="grid">
        ${modes.map((x, i) => `
          <button class="tile ${i === modes.length - 1 && modes.length % 2 ? 'wide' : ''}" style="--c:${x.c}" data-go="#/play/${ch.id}/${x.m}">
            <span class="ic">${x.ic}</span><span><b>${x.name}</b><br><span class="muted small">${x.sub}</span></span>
          </button>`).join('')}
      </div>`;
    bindBack();
    $$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  }

  // ---------------------------------------------------------------- results screen

  function renderResult(o) {
    const stars = o.stars != null ? `<div class="stars">${'★'.repeat(o.stars)}<span style="opacity:.25">${'★'.repeat(3 - o.stars)}</span></div>` : '';
    $app.innerHTML = `
      <div class="center pop" style="margin-top:4vh">
        <div class="big-emoji">${o.emoji}</div>
        <h1 style="margin:0 0 6px">${o.title}</h1>
        ${stars}
        <p class="muted">${o.text}</p>
        <div class="pill" style="font-size:1.1rem;margin:6px 0 22px">⭐ +${o.xp} XP</div>
      </div>
      ${o.extra || ''}
      <div class="panel center" id="rate">
        <b>How fun was ${esc(MODE_NAMES[o.mode])}?</b>
        <div class="moods">${MOODS.map((m, k) => `<button data-m="${k}" aria-label="Rating ${5 - k} of 5">${m}</button>`).join('')}</div>
      </div>
      <div class="stack">
        <button class="btn block" id="again">${o.againLabel || '🔁 Play again'}</button>
        <button class="btn ghost block" id="done">Back to chapter</button>
      </div>`;
    $('#again').onclick = o.again;
    $('#done').onclick = () => go('#/chapter/' + o.ch.id);
    $$('[data-m]').forEach(b => b.onclick = () => {
      S.ratings.push({ date: today(), mode: o.mode, chapter: o.ch.id, mood: Number(b.dataset.m) });
      save();
      $('#rate').innerHTML = `<b>Thanks! ${MOODS[b.dataset.m]}</b>
        <div class="muted small">Want to tell Papa more? <a href="#/feedback/${o.mode}">Write feedback 💬</a></div>`;
    });
    if (o.stars >= 2 || o.celebrate) { confetti(); sfx('win'); }
  }

  // ---------------------------------------------------------------- flashcards

  function renderFlash(ch) {
    // Least-known cards first; cards she misses come back later in the same round.
    const order = shuffle(ch.flashcards).sort((a, b) => (S.cards[a.id] || 0) - (S.cards[b.id] || 0));
    const queue = order.slice(0, FLASH_LEN);
    let done = 0, known = 0, xp = 0;
    const total = queue.length;

    function show() {
      if (!queue.length) {
        addXP(xp);
        return renderResult({
          ch, mode: 'flash', emoji: '🃏', title: 'Round complete!', xp,
          text: `You knew ${known} of ${total} cards first time. Mastered in this chapter: ${cardsMastered(ch)}/${ch.flashcards.length}`,
          celebrate: known >= total * 0.7, again: () => renderFlash(ch), againLabel: '🃏 Next 10 cards'
        });
      }
      const c = queue[0];
      $app.innerHTML = topbar('🃏 Flashcards', '#/chapter/' + ch.id, `<span class="pill">${done}/${total}</span>`) + `
        <div class="bar"><i style="width:${done / total * 100}%"></i></div>
        <div class="flip-wrap"><div class="flip" id="card" role="button" tabindex="0" aria-label="Flip card">
          <div class="face side-q"><span class="tag">${esc(ch.topics[c.topic])}</span><div>${fmt(c.front)}</div>${sayBtns(c.front)}<span class="hint">Think of the answer, then tap to flip 👆</span></div>
          <div class="face side-a"><span class="tag">Answer</span><div>${fmt(c.back)}</div>${sayBtns(c.back)}</div>
        </div></div>
        <div class="row" id="rate" style="visibility:hidden">
          <button class="btn bad grow" id="no">😅 Still learning</button>
          <button class="btn good grow" id="yes">😎 Got it!</button>
        </div>`;
      bindBack();
      const card = $('#card');
      const flip = () => { card.classList.toggle('flipped'); $('#rate').style.visibility = 'visible'; sfx('tap'); };
      card.onclick = flip;
      card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
      if (S.sound) speak(c.front);
      $('#yes').onclick = () => rate(c, true);
      $('#no').onclick = () => rate(c, false);
    }

    const firstTry = new Set();
    function rate(c, ok) {
      queue.shift();
      const first = !firstTry.has(c.id);
      firstTry.add(c.id);
      S.stats.cardsSeen++;
      if (first) recordTopic(ch, c.topic, ok);
      if (ok) {
        S.cards[c.id] = Math.min(5, (S.cards[c.id] || 0) + 1);
        if (first) known++;
        done++;
        xp += 3;
        sfx('good');
      } else {
        S.cards[c.id] = 0;
        queue.splice(Math.min(3, queue.length), 0, c); // see it again soon
        xp += 1;
        sfx('bad');
      }
      save();
      show();
    }
    show();
  }

  // ---------------------------------------------------------------- quiz battle

  function renderQuiz(ch) {
    // Questions she got wrong before come first, then random ones.
    const qs = shuffle(ch.quiz).sort((a, b) => (S.missed[b.id] ? 1 : 0) - (S.missed[a.id] ? 1 : 0)).slice(0, QUIZ_LEN);
    let i = 0, points = 0, combo = 0, correct = 0;
    const wrongList = [];

    function show() {
      const q = qs[i];
      const all = q.options.map((t, k) => ({ t, ok: k === q.answer }));
      const opts = q.fixed ? all : shuffle(all); // Assertion–Reason options keep their (a)–(d) order
      const secs = q.fixed ? AR_SECONDS : QUIZ_SECONDS;
      let left = secs, answered = false;
      $app.innerHTML = topbar('⚡ Quiz Battle', '#/chapter/' + ch.id, `<span class="pill">⭐ ${points}</span>`) + `
        <div class="row small muted"><span class="grow">Question ${i + 1} of ${qs.length}</span>
          ${combo >= 2 ? `<span class="combo">🔥 Combo x${combo}</span>` : ''}</div>
        <div class="bar timer" id="tb" style="margin:8px 0 14px"><i id="tf" style="width:100%"></i></div>
        <div class="qtext pop">${fmt(q.q)}${sayBtns(q.q)}</div>
        ${opts.map((o, k) => `<button class="opt" data-k="${k}">${fmt(o.t)}</button>`).join('')}
        <div id="after"></div>`;
      bindBack();

      timer = setInterval(() => {
        left -= 0.1;
        const tf = document.getElementById('tf');
        if (!tf) return cleanup();
        tf.style.width = Math.max(0, left / secs * 100) + '%';
        document.getElementById('tb').classList.toggle('low', left < 5);
        if (left <= 0) answer(-1);
      }, 100);

      $$('.opt').forEach(b => b.onclick = () => answer(Number(b.dataset.k)));
      if (S.sound) speak(q.q);

      function answer(k) {
        if (answered) return;
        answered = true;
        cleanup();
        const ok = k >= 0 && opts[k].ok;
        $$('.opt').forEach((b, j) => {
          b.disabled = true;
          if (opts[j].ok) b.classList.add('right');
          else if (j === k) b.classList.add('wrong');
        });
        recordTopic(ch, q.topic, ok);
        let msg;
        if (ok) {
          combo++; correct++;
          const gain = 10 + Math.min(combo - 1, 5) * 2 + Math.floor(left);
          points += gain;
          delete S.missed[q.id];
          msg = `✅ Correct! +${gain}`;
          sfx('good');
        } else {
          combo = 0;
          S.missed[q.id] = true;
          wrongList.push(q);
          msg = k < 0 ? '⏰ Time\'s up!' : '❌ Not quite!';
          sfx('bad');
        }
        save();
        $('#after').innerHTML = `
          <div class="panel explain pop"><b>${msg}</b><div class="muted" style="margin-top:4px">${fmt(q.explain)}</div></div>
          <button class="btn block" id="next">${i + 1 < qs.length ? 'Next question →' : 'See results 🏁'}</button>`;
        $('#next').onclick = () => { i++; i < qs.length ? show() : finish(); };
        $('#next').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    function finish() {
      S.stats.quizzes++;
      if (correct === qs.length) S.stats.perfect++;
      const key = ch.id + ':quiz';
      const newBest = correct > (S.best[key] || 0);
      if (newBest) S.best[key] = correct;
      const xp = Math.round(points / 2);
      addXP(xp);
      const stars = correct >= 9 ? 3 : correct >= 7 ? 2 : correct >= 5 ? 1 : 0;
      renderResult({
        ch, mode: 'quiz', xp, stars,
        emoji: stars === 3 ? '🏆' : stars === 2 ? '🥳' : stars === 1 ? '🙂' : '💪',
        title: `${correct} / ${qs.length} correct`,
        text: (newBest ? '🎉 New best score! ' : '') + (stars >= 2 ? 'Superb!' : 'Keep practising — wrong questions come back first next time.'),
        extra: wrongList.length ? `<div class="panel"><b>Revise these:</b><ul class="small" style="padding-left:18px;margin:8px 0 0">
          ${wrongList.map(q => `<li style="margin-bottom:6px">${fmt(q.q)}<br><span style="color:var(--good)">→ ${fmt(q.options[q.answer])}</span></li>`).join('')}</ul></div>` : '',
        again: () => renderQuiz(ch)
      });
    }
    show();
  }

  // ---------------------------------------------------------------- match up

  function renderMatch(ch, roundIndex) {
    const r = roundIndex != null ? roundIndex : Math.floor(Math.random() * ch.match.length);
    const set = ch.match[r];
    const left = shuffle(set.pairs.map((p, i) => ({ t: p[0], i })));
    const right = shuffle(set.pairs.map((p, i) => ({ t: p[1], i })));
    let sel = null, matched = 0, mistakes = 0;
    const missed = new Set(); // pair indexes she got wrong at least once
    const start = Date.now();

    $app.innerHTML = topbar('🧩 Match Up', '#/chapter/' + ch.id, `<span class="pill" id="mm">❌ 0</span>`) + `
      <p class="muted small" style="margin-top:-6px">Round ${r + 1} of ${ch.match.length}: <b>${esc(set.title)}</b> — tap one on the left, then its partner on the right.</p>
      <div class="match">
        <div class="col">${left.map(x => `<button class="mi" data-side="L" data-i="${x.i}">${fmt(x.t)}</button>`).join('')}</div>
        <div class="col">${right.map(x => `<button class="mi" data-side="R" data-i="${x.i}">${fmt(x.t)}</button>`).join('')}</div>
      </div>
      <div id="mhint" style="margin-top:14px"></div>`;
    bindBack();

    $$('.mi').forEach(b => b.onclick = () => {
      speak(b.textContent); // Punjabi tiles say the word when tapped
      if (!sel || sel.dataset.side === b.dataset.side) {
        if (sel) sel.classList.remove('sel');
        sel = b; b.classList.add('sel'); sfx('tap');
        return;
      }
      if (sel.dataset.i === b.dataset.i) {
        sel.classList.remove('sel');
        sel.classList.add('done'); b.classList.add('done');
        matched++; sfx('good');
        sel = null;
        if (matched === set.pairs.length) setTimeout(finish, 450);
      } else {
        mistakes++;
        $('#mm').textContent = '❌ ' + mistakes;
        const a = sel;
        [a, b].forEach(x => { x.classList.remove('shake'); void x.offsetWidth; x.classList.add('shake'); });
        a.classList.remove('sel');
        sel = null; sfx('bad');
        // Teach the right pair for the left-side item she picked, and make its partner glow.
        const leftBtn = a.dataset.side === 'L' ? a : b;
        const i = Number(leftBtn.dataset.i);
        missed.add(i);
        $('#mhint').innerHTML = `<div class="panel explain pop small">❌ Not a match.<br>
          ✅ <b>${fmt(set.pairs[i][0])}</b> → <b>${fmt(set.pairs[i][1])}</b></div>`;
        const partner = $(`[data-side="R"][data-i="${i}"]`);
        partner.classList.remove('glow'); void partner.offsetWidth; partner.classList.add('glow');
      }
    });

    function finish() {
      const secs = Math.round((Date.now() - start) / 1000);
      const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
      const xp = set.pairs.length * 3 + (3 - Math.min(3, mistakes)) * 4;
      S.stats.matches++;
      addXP(xp);
      renderResult({
        ch, mode: 'match', xp, stars, emoji: '🧩', title: 'All matched!',
        text: `${secs} seconds · ${mistakes} mistake${mistakes === 1 ? '' : 's'}`,
        extra: `<div class="panel"><b>Remember these pairs:</b>
          ${set.pairs.map((p, i) => `<div class="kp small"><span>${missed.has(i) ? '⚠️' : '✅'}</span>
            <span><b>${fmt(p[0])}</b> → ${fmt(p[1])}</span></div>`).join('')}
          ${missed.size ? '<div class="muted small" style="margin-top:8px">⚠️ = you got this one wrong. Read it once more!</div>' : ''}</div>`,
        again: () => renderMatch(ch, (r + 1) % ch.match.length), againLabel: '🧩 Next round'
      });
    }
  }

  // ---------------------------------------------------------------- balance lab

  // "Pb(NO3)2" -> { Pb: 1, N: 2, O: 6 }
  function parseFormula(f) {
    let i = 0;
    function num() { let s = ''; while (i < f.length && /\d/.test(f[i])) s += f[i++]; return s ? Number(s) : 1; }
    function group() {
      const c = {};
      while (i < f.length) {
        const ch = f[i];
        if (ch === '(') {
          i++;
          const inner = group();
          i++;
          const n = num();
          for (const k in inner) c[k] = (c[k] || 0) + inner[k] * n;
        } else if (ch === ')') {
          return c;
        } else if (/[A-Z]/.test(ch)) {
          let el = ch; i++;
          while (i < f.length && /[a-z]/.test(f[i])) el += f[i++];
          const n = num();
          c[el] = (c[el] || 0) + n;
        } else i++;
      }
      return c;
    }
    return group();
  }

  function renderBalance(ch, index) {
    let idx = index != null ? index : Math.max(0, ch.balance.findIndex(b => !S.balanced[b.id]));
    const eq = ch.balance[idx];
    const terms = eq.reactants.concat(eq.products);
    const coef = terms.map(() => 1);
    const parsed = terms.map(parseFormula);
    let hints = 0;

    function counts() {
      const L = {}, R = {};
      parsed.forEach((p, t) => {
        const side = t < eq.reactants.length ? L : R;
        for (const el in p) side[el] = (side[el] || 0) + p[el] * coef[t];
      });
      return { L, R, els: Array.from(new Set(Object.keys(L).concat(Object.keys(R)))) };
    }

    function draw() {
      const { L, R, els } = counts();
      const term = (t) => `<div class="term">
          <div class="step"><button data-d="-1" data-t="${t}" aria-label="Decrease">−</button><span>${coef[t]}</span><button data-d="1" data-t="${t}" aria-label="Increase">+</button></div>
          <div class="f">${fmt(terms[t])}</div></div>`;
      const side = (from, to) => {
        const out = [];
        for (let t = from; t < to; t++) out.push(term(t));
        return out.join('<span class="op">+</span>');
      };
      $app.innerHTML = topbar('⚖️ Balance Lab', '#/chapter/' + ch.id, `<span class="pill">${idx + 1}/${ch.balance.length}</span>`) + `
        <div class="panel">
          <div class="muted small">${S.balanced[eq.id] ? '✅ ' : ''}${esc(eq.name)}</div>
          <div class="equation"><div class="eqside">${side(0, eq.reactants.length)}</div>
            <div class="eqside"><span class="op">→</span>${side(eq.reactants.length, terms.length)}</div></div>
          <table class="atoms">
            <tr><th>Atom</th><th>Left</th><th>Right</th></tr>
            ${els.map(e => { const ok = L[e] === R[e]; return `<tr><td><b>${e}</b></td><td class="${ok ? 'ok' : 'no'}">${L[e] || 0}</td><td class="${ok ? 'ok' : 'no'}">${R[e] || 0}</td></tr>`; }).join('')}
          </table>
        </div>
        <p class="muted small">Use + and − to change the numbers in front of each formula until every atom is green. Never change the formula itself!</p>
        <div class="stack">
          <button class="btn block" id="check">✔ Check</button>
          <div class="row">
            <button class="btn ghost grow" id="hint">💡 Hint</button>
            <button class="btn ghost grow" id="skip">Next →</button>
          </div>
        </div>`;
      bindBack();
      $$('[data-d]').forEach(b => b.onclick = () => {
        const t = Number(b.dataset.t);
        coef[t] = Math.min(9, Math.max(1, coef[t] + Number(b.dataset.d)));
        sfx('tap');
        draw();
      });
      $('#check').onclick = check;
      $('#hint').onclick = () => {
        const t = coef.findIndex((c, k) => c !== eq.answer[k]);
        if (t < 0) return toast('All numbers are right — press Check!');
        coef[t] = eq.answer[t]; hints++;
        toast(`💡 ${terms[t]} needs ${eq.answer[t]}`);
        draw();
      };
      $('#skip').onclick = () => renderBalance(ch, (idx + 1) % ch.balance.length);
    }

    function check() {
      const { L, R, els } = counts();
      const balanced = els.every(e => L[e] === R[e]);
      const gcd = (a, b) => b ? gcd(b, a % b) : a;
      const smallest = coef.reduce(gcd) === 1;
      if (!balanced) { sfx('bad'); return toast('Not balanced yet — look at the red atoms 🔍'); }
      if (!smallest) { sfx('bad'); return toast('Balanced, but use the smallest whole numbers!'); }
      const first = !S.balanced[eq.id];
      S.balanced[eq.id] = true;
      const xp = first ? Math.max(5, 20 - hints * 5) : 5;
      addXP(xp);
      renderResult({
        ch, mode: 'balance', xp, stars: hints === 0 ? 3 : hints === 1 ? 2 : 1, emoji: '⚖️', title: 'Balanced!',
        text: `<span style="font-size:1.2rem;color:var(--text)">${terms.map((t, k) => (coef[k] > 1 ? coef[k] : '') + fmt(t)).reduce((acc, s, k) => acc + (k === 0 ? '' : k === eq.reactants.length ? ' → ' : ' + ') + s, '')}</span>`,
        again: () => renderBalance(ch, (idx + 1) % ch.balance.length), againLabel: '⚖️ Next equation'
      });
    }
    draw();
  }

  // ---------------------------------------------------------------- answer writing

  function renderWriteList(ch) {
    $app.innerHTML = topbar('✍️ Answer Writing', '#/chapter/' + ch.id) + `
      <p class="muted small" style="margin-top:-6px">Board-exam style questions. Write your answer, then check it against the model answer.</p>
      ${ch.written.map((w, i) => {
        const got = S.answers[w.id];
        return `<button class="chapter" data-i="${i}">
          <span class="num" style="${got != null ? 'background:var(--good)' : ''}">${got != null ? '✓' : i + 1}</span>
          <span class="grow"><span class="marks">${w.marks} mark${w.marks > 1 ? 's' : ''}</span>
            ${got != null ? `<span class="marks" style="color:var(--good)">scored ${got}/${w.marks}</span>` : ''}
            <div style="margin-top:6px">${fmt(w.q)}</div></span>
        </button>`;
      }).join('')}`;
    bindBack();
    $$('[data-i]').forEach(b => b.onclick = () => go(`#/write/${ch.id}/${b.dataset.i}`));
  }

  function renderWrite(ch, i) {
    const w = ch.written[i];
    if (!w) return renderWriteList(ch);
    $app.innerHTML = topbar(`✍️ Question ${i + 1}`, `#/play/${ch.id}/write`, `<span class="marks">${w.marks} mark${w.marks > 1 ? 's' : ''}</span>`) + `
      <div class="qtext">${fmt(w.q)}</div>
      <div class="panel small muted">💡 Tip: ${{ 1: 'one clear sentence is enough.', 2: 'write 2 clear points.', 3: 'write 3 points, and add an equation or example.', 4: 'answer every part (a), (b), (c), (d) separately.', 5: 'write 5 points: definition, explanation, equations, examples.' }[w.marks]}
        Write formulas like H2O — they will show correctly when checked.</div>
      <textarea id="ans" placeholder="Write your answer here…">${esc(S.drafts[w.id] || '')}</textarea>
      <div id="out" style="margin-top:14px"><button class="btn block" id="chk">Check my answer ✔</button></div>`;
    bindBack();
    const ta = $('#ans');
    ta.oninput = () => { S.drafts[w.id] = ta.value; save(); };
    $('#chk').onclick = () => {
      const text = ta.value.trim();
      if (text.length < 10) { toast('Write a little more first ✍️'); return ta.focus(); }
      reveal(text);
    };

    function reveal(text) {
      const norm = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
      const hit = kp => kp.kw.every(g => g.split('|').some(word => norm.includes(word.toLowerCase())));
      $('#out').innerHTML = `
        <div class="panel pop">
          <b>Which points did you write?</b>
          <div class="muted small">We ticked the ones we spotted — fix the ticks honestly 😉</div>
          ${w.keypoints.map((kp, k) => `<label class="kp"><input type="checkbox" data-k="${k}" ${hit(kp) ? 'checked' : ''}><span>${fmt(kp.text)}</span></label>`).join('')}
        </div>
        <div class="panel model pop"><b>📘 Model answer</b><div style="margin-top:6px">${fmt(w.model)}</div></div>
        <button class="btn block" id="score">Save my score</button>`;
      $('#score').onclick = () => {
        const ticked = $$('.kp input').filter(x => x.checked).length;
        const marks = Math.round(ticked / w.keypoints.length * w.marks * 2) / 2;
        const first = S.answers[w.id] == null;
        S.answers[w.id] = Math.max(marks, S.answers[w.id] || 0);
        const xp = Math.round(marks * 8) + (first ? 5 : 0);
        addXP(xp);
        const next = i + 1 < ch.written.length;
        renderResult({
          ch, mode: 'write', xp, emoji: marks === w.marks ? '🌟' : marks > 0 ? '👍' : '📘',
          stars: marks === w.marks ? 3 : marks >= w.marks / 2 ? 2 : marks > 0 ? 1 : 0,
          title: `${marks} / ${w.marks} marks`,
          text: marks === w.marks ? 'Full marks! Exam ready.' : 'Read the model answer once more, then try again later.',
          again: () => go(next ? `#/write/${ch.id}/${i + 1}` : `#/play/${ch.id}/write`),
          againLabel: next ? '✍️ Next question' : '📋 All questions'
        });
      };
    }
  }

  // ---------------------------------------------------------------- progress & parents

  function renderProgress() {
    const lv = level();
    const days7 = Array.from({ length: 7 }, (_, k) => dayStr(new Date(Date.now() - (6 - k) * 864e5)));
    const maxDay = Math.max(20, ...days7.map(d => S.days[d] || 0));
    $app.innerHTML = topbar('🏆 My Progress', '#/') + `
      <div class="panel row">
        <div class="avatar">${esc(S.profile.avatar)}</div>
        <div class="grow"><b>${esc(S.profile.name)}</b><div class="muted small">Level ${lv} ${title(lv)} · ${S.xp} XP</div></div>
        <span class="pill">🔥 ${currentStreak()} day${currentStreak() === 1 ? '' : 's'}</span>
      </div>

      <h2 style="font-size:1.05rem">Badges</h2>
      <div class="badges">${BADGES.map(b => `<div class="badge ${S.badges.includes(b.id) ? '' : 'off'}"><span class="e">${b.e}</span>${b.name}</div>`).join('')}</div>

      <h2 style="font-size:1.05rem;margin-top:24px">👨‍👩‍👧 For parents</h2>
      <div class="panel">
        <b>XP earned — last 7 days</b>
        <div style="display:flex;align-items:flex-end;gap:6px;height:110px;margin-top:12px">
          ${days7.map(d => {
            const v = S.days[d] || 0;
            return `<div style="flex:1;text-align:center">
              <div class="small muted">${v || ''}</div>
              <div style="height:${Math.max(3, v / maxDay * 70)}px;border-radius:6px;background:${v ? 'var(--accent-2)' : 'var(--panel-2)'}"></div>
              <div class="small muted">${new Date(d + 'T12:00').toLocaleDateString('en-IN', { weekday: 'short' }).slice(0, 2)}</div></div>`;
          }).join('')}
        </div>
      </div>
      ${allChapters().map(ch => {
        const rows = Object.keys(ch.topics).map(t => {
          const s = S.topics[ch.id + ':' + t] || { right: 0, wrong: 0 };
          const n = s.right + s.wrong;
          const pct = n ? Math.round(s.right / n * 100) : 0;
          const cls = n < 3 ? '' : pct < 50 ? 'weak' : pct < 75 ? 'ok' : 'strong';
          return { name: ch.topics[t], n, pct, cls };
        });
        const weak = rows.filter(r => r.cls === 'weak').map(r => r.name);
        return `<div class="panel">
          <b>${esc(ch.title)}</b> <span class="muted small">· ${chapterProgress(ch)}% complete</span>
          <div class="muted small" style="margin:4px 0 12px">Cards mastered ${cardsMastered(ch)}/${ch.flashcards.length} ·
            Best quiz ${S.best[ch.id + ':quiz'] || 0}/${QUIZ_LEN} ·
            Answers ${ch.written.filter(w => S.answers[w.id] != null).length}/${ch.written.length}</div>
          ${rows.map(r => `<div class="topicrow"><div class="row small"><span class="grow">${esc(r.name)}</span>
            <span class="muted">${r.n ? r.pct + '% of ' + r.n : 'not tried'}</span></div>
            <div class="bar"><i class="${r.cls}" style="width:${r.n ? Math.max(4, r.pct) : 0}%"></i></div></div>`).join('')}
          ${weak.length ? `<div class="panel explain small" style="margin:12px 0 0">⚠️ Needs practice: <b>${weak.map(esc).join(', ')}</b></div>` : ''}
        </div>`;
      }).join('')}
      <p class="muted small center">Topic scores come from Quiz Battle and Flashcards (first try).</p>
      ${feedbackSummary()}`;
    bindBack();
    const all = $('#sendall');
    if (all) all.onclick = () => sendWhatsApp(feedbackReport());
  }

  // ---------------------------------------------------------------- feedback

  function renderFeedback(area) {
    const areas = Object.assign({ general: 'Whole app' }, MODE_NAMES, { idea: 'New idea 💡', problem: 'Something broken 🐞' });
    let mood = null;
    let pick = areas[area] ? area : 'general';
    $app.innerHTML = topbar('💬 Feedback', '#/') + `
      <div class="panel stack">
        <b>How do you feel about the app?</b>
        <div class="moods">${MOODS.map((m, k) => `<button data-m="${k}" aria-label="Rating ${5 - k} of 5">${m}</button>`).join('')}</div>
      </div>
      <div class="panel stack">
        <b>Which part?</b>
        <div class="chips">${Object.keys(areas).map(k => `<button data-area="${k}" class="${k === pick ? 'sel' : ''}">${esc(areas[k])}</button>`).join('')}</div>
      </div>
      <div class="panel stack">
        <label for="fb"><b>Tell Papa more</b></label>
        <textarea id="fb" placeholder="What do you like? What is boring or hard? What should we add?"></textarea>
      </div>
      <div class="stack">
        <button class="btn block" id="send">📲 Send to Papa on WhatsApp</button>
        <button class="btn ghost block" id="keep">Just save it</button>
      </div>
      ${S.feedback.length ? `<p class="muted small center">You've shared feedback ${S.feedback.length} time${S.feedback.length > 1 ? 's' : ''}. Thank you! 💜</p>` : ''}`;
    bindBack();
    $$('[data-m]').forEach(b => b.onclick = () => {
      $$('[data-m]').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); mood = Number(b.dataset.m); sfx('tap');
    });
    $$('[data-area]').forEach(b => b.onclick = () => {
      $$('[data-area]').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); pick = b.dataset.area;
    });
    function store() {
      const text = $('#fb').value.trim();
      if (mood == null && !text) { toast('Pick a face or write something first 🙂'); return null; }
      const item = { date: today(), area: areas[pick], mood, text };
      S.feedback.push(item);
      if (S.feedback.length === 1) addXP(20); else save();
      return item;
    }
    $('#send').onclick = () => {
      const item = store();
      if (!item) return;
      sendWhatsApp(`💬 Study Game Zone feedback from ${S.profile.name}\n` + feedbackLine(item));
      toast('Thank you! 💜');
      go('#/');
    };
    $('#keep').onclick = () => { if (store()) { toast('Saved — thank you! 💜'); go('#/'); } };
  }

  const feedbackLine = f => `${f.date} · ${f.area}${f.mood != null ? ' · ' + MOODS[f.mood] : ''}${f.text ? '\n' + f.text : ''}`;

  function sendWhatsApp(text) {
    window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
  }

  // Average quick rating per game mode, 5 = loved it.
  function ratingSummary() {
    const out = {};
    for (const r of S.ratings) (out[r.mode] = out[r.mode] || []).push(5 - r.mood);
    return Object.keys(out).map(m => ({ mode: MODE_NAMES[m] || m, n: out[m].length, avg: out[m].reduce((a, b) => a + b, 0) / out[m].length }));
  }

  function feedbackReport() {
    const lines = [`📊 Study Game Zone report — ${S.profile.name}`, `Level ${level()} · ${S.xp} XP · streak ${currentStreak()} days`];
    for (const ch of allChapters()) lines.push(`${ch.title}: ${chapterProgress(ch)}% complete, best quiz ${S.best[ch.id + ':quiz'] || 0}/${QUIZ_LEN}`);
    const rs = ratingSummary();
    if (rs.length) lines.push('', 'Fun ratings (out of 5):', ...rs.map(r => `• ${r.mode}: ${r.avg.toFixed(1)} (${r.n} ratings)`));
    if (S.feedback.length) lines.push('', 'Feedback:', ...S.feedback.map(f => '• ' + feedbackLine(f).replace('\n', ' — ')));
    return lines.join('\n');
  }

  function feedbackSummary() {
    const rs = ratingSummary();
    if (!rs.length && !S.feedback.length) {
      return `<div class="panel small muted">💬 No feedback yet. She can rate each game after playing, or tap "Tell Papa what you think" on the home screen.</div>`;
    }
    return `<div class="panel">
      <b>💬 Her feedback</b>
      ${rs.length ? `<div class="small" style="margin:8px 0">${rs.map(r => `<div class="row"><span class="grow">${esc(r.mode)}</span>
        <span>${'★'.repeat(Math.round(r.avg))}<span class="muted">${'★'.repeat(5 - Math.round(r.avg))}</span> ${r.avg.toFixed(1)} · ${r.n}×</span></div>`).join('')}</div>` : ''}
      ${S.feedback.slice().reverse().map(f => `<div class="kp small"><span>${esc(feedbackLine(f)).replace(/\n/g, '<br>')}</span></div>`).join('')}
      <button class="btn ghost block" id="sendall" style="margin-top:12px">📲 Send full report on WhatsApp</button>
    </div>`;
  }

  function renderSettings() {
    $app.innerHTML = topbar('⚙️ Settings', '#/') + `
      <div class="panel stack">
        <label class="row"><span class="grow">🔊 Sound effects</span><input type="checkbox" id="snd" ${S.sound ? 'checked' : ''} style="width:22px;height:22px"></label>
      </div>
      <div class="panel stack">
        <b>🗣️ Punjabi voice</b>
        <div class="muted small" id="vc"></div>
        <button class="btn ghost block" data-say="ਸਤ ਸ੍ਰੀ ਅਕਾਲ">🔊 Test: ਸਤ ਸ੍ਰੀ ਅਕਾਲ</button>
      </div>
      <div class="panel stack">
        <b>Change name / player</b>
        <input type="text" id="nm" maxlength="20" value="${esc(S.profile.name)}">
        <div class="avatars">${AVATARS.map(a => `<button data-a="${a}" class="${a === S.profile.avatar ? 'sel' : ''}">${a}</button>`).join('')}</div>
        <button class="btn block" id="sv">Save</button>
      </div>
      <div class="panel stack">
        <b>📲 Install on your phone</b>
        <div class="muted small">Android (Chrome): tap ⋮ menu → <b>Install and create shortcut</b> (older Chrome: <b>Add to Home screen</b>), then tap <b>Install</b> if asked.<br>
        iPhone (Safari): tap Share → <b>Add to Home Screen</b>.</div>
      </div>
      <div class="panel stack">
        <b>Reset progress</b>
        <div class="muted small">Deletes all XP, badges and scores on this device.</div>
        <button class="btn bad block" id="rst">Reset everything</button>
      </div>`;
    bindBack();
    $('#snd').onchange = e => { S.sound = e.target.checked; save(); };
    loadVoices();
    const pa = findVoice('pa'), hi = findVoice('hi');
    $('#vc').innerHTML = pa ? `Using Punjabi voice: ${esc(pa.name)}`
      : hi ? `No Punjabi voice on this phone, so a Hindi voice reads the words (${esc(hi.name)}). Pronunciation is close but not perfect.`
      : `No Punjabi or Hindi voice found. On Android: Settings → search <b>Text-to-speech</b> → Google → ⚙️ → <b>Install voice data</b> → Punjabi (or Hindi).`;
    $$('[data-a]').forEach(b => b.onclick = () => { $$('[data-a]').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); });
    $('#sv').onclick = () => {
      const name = $('#nm').value.trim();
      if (name) S.profile.name = name;
      const sel = $('[data-a].sel');
      if (sel) S.profile.avatar = sel.dataset.a;
      save(); toast('Saved ✅'); go('#/');
    };
    $('#rst').onclick = () => {
      if (confirm('Delete ALL progress on this device? This cannot be undone.')) {
        S = defaultState(); save(); go('#/'); route();
      }
    };
  }

  // ---------------------------------------------------------------- start

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  route();
})();
