// Punjabi — MEDIUM level: from words to simple sentences and first grammar (pronouns, verbs, gender, number).
// Every card answer is written as: how it sounds (English letters) — meaning. A girl's verb forms are used (ਮੈਂ ਜਾਂਦੀ ਹਾਂ).
// Sound spelling: a short, aa "car", i "sit", ee "see", u "put", oo "food", e "cafe", ai "bat", o "go", au "saw"; n = nasal; double letter = ੱ.

// ───────────────────────── 1. Pronouns ─────────────────────────
SWG.addChapter('punjabi', {
  id: 'pa-m01',
  level: 'Medium',
  number: 1,
  title: 'I, You, We · ਪੜਨਾਂਵ',
  icon: '🙋‍♀️',

  topics: {
    who: 'Pronouns (Who?)',
    be: 'To Be: ਹਾਂ ਹੈਂ ਹੈ ਹੋ ਹਨ',
    mine: 'My, Your, Our',
    sent: 'Sentences'
  },

  summary: [
    'A Pronoun · ਪੜਨਾਂਵ (par-naanv) is a word used in place of a Noun · ਨਾਂਵ (naanv): ਮੈਂ (I), ਤੂੰ (you), ਉਹ (he/she), ਅਸੀਂ (we).',
    'Two words for "you": ਤੂੰ (toon) for a close friend or someone younger; ਤੁਸੀਂ (tu-seen) for elders, teachers, guests, or many people. When in doubt, use ਤੁਸੀਂ.',
    'ਉਹ (uh) = he / she / they / that (further away). ਇਹ (ih) = this / he / she (close by). Punjabi uses the same word for "he" and "she"!',
    '"To be" changes with the person: ਮੈਂ ਹਾਂ, ਅਸੀਂ ਹਾਂ · ਤੂੰ ਹੈਂ · ਤੁਸੀਂ ਹੋ · ਉਹ / ਇਹ ਹੈ (one) · ਉਹ / ਇਹ ਹਨ (many).',
    'The verb "to be" comes at the END of the sentence: ਮੈਂ ਖ਼ੁਸ਼ ਹਾਂ। = I happy am.',
    '"My" follows the THING owned, not the owner: ਮੇਰਾ ਘਰ (masculine thing), ਮੇਰੀ ਕਿਤਾਬ (feminine thing), ਮੇਰੇ ਦੋਸਤ (many / respect).',
    'The same -ਾ / -ੀ / -ੇ endings work for ਤੇਰਾ (your, informal), ਤੁਹਾਡਾ (your, respectful) and ਸਾਡਾ (our).'
  ],

  flashcards: [
    { topic: 'who', front: 'ਪੜਨਾਂਵ', back: 'par-naanv — pronoun\nA word used in place of a noun (ਨਾਂਵ, naanv).\nInstead of "Preet is happy" → "She is happy".' },
    { topic: 'who', front: 'ਮੈਂ', back: 'main — I' },
    { topic: 'who', front: 'ਤੂੰ', back: 'toon — you (informal)\nFor a close friend, a younger child or a little sister. Not for elders!' },
    { topic: 'who', front: 'ਤੁਸੀਂ', back: 'tu-seen — you (respectful, or more than one person)\nUse this for teachers, elders and guests.' },
    { topic: 'who', front: 'ਉਹ', back: 'uh — he / she / they / that\n(someone or something further away)' },
    { topic: 'who', front: 'ਇਹ', back: 'ih — this / he / she\n(someone or something close by)' },
    { topic: 'who', front: 'ਅਸੀਂ', back: 'a-seen — we' },
    { topic: 'be', front: 'ਹਾਂ, ਹੈਂ, ਹੈ, ਹੋ, ਹਨ', back: 'haan, hain, hai, ho, han — the forms of "to be" (am / are / is)\nਮੈਂ, ਅਸੀਂ → ਹਾਂ\nਤੂੰ → ਹੈਂ\nਇਹ, ਉਹ (one) → ਹੈ\nਤੁਸੀਂ → ਹੋ\nਇਹ, ਉਹ (many) → ਹਨ' },
    { topic: 'be', front: 'ਮੈਂ ਵਿਦਿਆਰਥਣ ਹਾਂ।', back: 'main vi-di-aar-than haan — I am a student.\nਵਿਦਿਆਰਥਣ = a girl student; ਵਿਦਿਆਰਥੀ (vi-di-aar-thee) = a boy student.' },
    { topic: 'be', front: 'ਤੂੰ ਮੇਰੀ ਸਹੇਲੀ ਹੈਂ।', back: 'toon me-ree sa-he-lee hain — You are my friend.\nਸਹੇਲੀ = a girl\'s girl-friend. ਤੂੰ always takes ਹੈਂ.' },
    { topic: 'be', front: 'ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ?', back: 'tu-seen kit-the ho? — Where are you?\nਤੁਸੀਂ always takes ਹੋ.' },
    { topic: 'be', front: 'ਉਹ ਮੇਰੀ ਭੈਣ ਹੈ।', back: 'uh me-ree bhain hai — She is my sister.' },
    { topic: 'be', front: 'ਉਹ ਮੇਰੇ ਦੋਸਤ ਹਨ।', back: 'uh me-re dost han — They are my friends.\nMany people → ਹਨ (han).' },
    { topic: 'be', front: 'ਅਸੀਂ ਭੈਣਾਂ ਹਾਂ।', back: 'a-seen bhai-naan haan — We are sisters.\nਅਸੀਂ takes ਹਾਂ, just like ਮੈਂ.' },
    { topic: 'mine', front: 'ਮੇਰਾ', back: 'me-raa — my (with a masculine word)\nਮੇਰਾ ਘਰ (me-raa ghar) — my house' },
    { topic: 'mine', front: 'ਮੇਰੀ', back: 'me-ree — my (with a feminine word)\nਮੇਰੀ ਕਿਤਾਬ (me-ree ki-taab) — my book' },
    { topic: 'mine', front: 'ਮੇਰੇ', back: 'me-re — my (with many things, or to show respect)\nਮੇਰੇ ਪਿਤਾ ਜੀ (me-re pi-taa jee) — my father' },
    { topic: 'mine', front: 'ਤੁਹਾਡਾ', back: 'tu-haa-daa — your (respectful)\nਤੁਹਾਡਾ ਨਾਮ (tu-haa-daa naam) — your name\nAlso ਤੁਹਾਡੀ, ਤੁਹਾਡੇ.' },
    { topic: 'mine', front: 'ਤੇਰਾ', back: 'te-raa — your (informal, goes with ਤੂੰ)\nਤੇਰੀ ਕਲਮ (te-ree ka-lam) — your pen' },
    { topic: 'mine', front: 'ਸਾਡਾ', back: 'saa-daa — our\nਸਾਡਾ ਸਕੂਲ (saa-daa sa-kool) — our school\nAlso ਸਾਡੀ, ਸਾਡੇ.' },
    { topic: 'mine', front: 'ਉਸ ਦਾ', back: 'us daa — his / her\nਉਸ ਦਾ ਭਰਾ (us daa bha-raa) — his brother OR her brother\nਉਸ ਦੀ ਮਾਂ (us dee maan) — his / her mother' },
    { topic: 'sent', front: 'ਇਹ ਮੇਰਾ ਘਰ ਹੈ।', back: 'ih me-raa ghar hai — This is my house.' },
    { topic: 'sent', front: 'ਤੁਹਾਡੀ ਭੈਣ ਕਿੱਥੇ ਹੈ?', back: 'tu-haa-dee bhain kit-the hai? — Where is your sister?\nਭੈਣ is feminine → ਤੁਹਾਡੀ.' },
    { topic: 'sent', front: 'ਅਸੀਂ ਖ਼ੁਸ਼ ਹਾਂ।', back: 'a-seen khush haan — We are happy.' }
  ],

  quiz: [
    { topic: 'who', q: 'What does ਅਸੀਂ mean?', options: ['I', 'We', 'They', 'You'], answer: 1, explain: 'ਅਸੀਂ (a-seen) = we. ਮੈਂ (main) = I.' },
    { topic: 'who', q: 'You are talking to your teacher. Which word for "you" do you use?', options: ['ਤੂੰ', 'ਮੈਂ', 'ਤੁਸੀਂ', 'ਇਹ'], answer: 2, explain: 'ਤੁਸੀਂ (tu-seen) is the respectful "you". ਤੂੰ (toon) is only for close friends or younger children.' },
    { topic: 'who', q: 'How do you say ਤੂੰ?', options: ['tu-seen', 'toon', 'tain', 'too-ee'], answer: 1, explain: 'ਤੂੰ = toon = you (informal).' },
    { topic: 'who', q: 'ਉਹ can mean…', options: ['only "he"', 'only "she"', 'he, she, they or that', 'I'], answer: 2, explain: 'ਉਹ (uh) = he / she / they / that. Punjabi uses one word for "he" and "she".' },
    { topic: 'who', q: 'What does ਇਹ mean?', options: ['That (far away)', 'This (close by)', 'We', 'Where'], answer: 1, explain: 'ਇਹ (ih) = this / he / she, for something close by.' },
    { topic: 'be', q: 'Fill in: ਮੈਂ ਠੀਕ ___।', options: ['ਹੈ', 'ਹਨ', 'ਹੋ', 'ਹਾਂ'], answer: 3, explain: 'ਮੈਂ ਠੀਕ ਹਾਂ। (main theek haan) — I am fine. ਮੈਂ always takes ਹਾਂ.' },
    { topic: 'be', q: 'Fill in: ਤੁਸੀਂ ਕਿੱਥੇ ___?', options: ['ਹੋ', 'ਹਾਂ', 'ਹੈਂ', 'ਹੈ'], answer: 0, explain: 'ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ? (tu-seen kit-the ho?) — Where are you? ਤੁਸੀਂ takes ਹੋ.' },
    { topic: 'be', q: 'Fill in: ਉਹ ਮੇਰੇ ਦੋਸਤ ___।  (They are my friends.)', options: ['ਹਾਂ', 'ਹੈਂ', 'ਹਨ', 'ਹੋ'], answer: 2, explain: 'ਉਹ ਮੇਰੇ ਦੋਸਤ ਹਨ। (uh me-re dost han). Many people → ਹਨ.' },
    { topic: 'be', q: 'Fill in: ਤੂੰ ਮੇਰੀ ਸਹੇਲੀ ___।', options: ['ਹੋ', 'ਹੈਂ', 'ਹਾਂ', 'ਹਨ'], answer: 1, explain: 'ਤੂੰ ਮੇਰੀ ਸਹੇਲੀ ਹੈਂ। (toon me-ree sa-he-lee hain) — You are my friend. ਤੂੰ takes ਹੈਂ.' },
    { topic: 'be', q: 'What does ਮੈਂ ਵਿਦਿਆਰਥਣ ਹਾਂ। mean?', options: ['I am a teacher.', 'I am a student.', 'She is a student.', 'We are students.'], answer: 1, explain: 'main vi-di-aar-than haan — I am a (girl) student.' },
    { topic: 'mine', q: 'ਕਿਤਾਬ (book) is a feminine word. "My book" is…', options: ['ਮੇਰਾ ਕਿਤਾਬ', 'ਮੇਰੇ ਕਿਤਾਬ', 'ਮੇਰੀ ਕਿਤਾਬ', 'ਮੈਂ ਕਿਤਾਬ'], answer: 2, explain: 'ਮੇਰੀ ਕਿਤਾਬ (me-ree ki-taab). "My" matches the thing owned.' },
    { topic: 'mine', q: 'ਘਰ (house) is a masculine word. "Our house" is…', options: ['ਸਾਡਾ ਘਰ', 'ਸਾਡੀ ਘਰ', 'ਅਸੀਂ ਘਰ', 'ਤੇਰਾ ਘਰ'], answer: 0, explain: 'ਸਾਡਾ ਘਰ (saa-daa ghar) — our house.' },
    { topic: 'mine', q: 'What does ਤੁਹਾਡਾ mean?', options: ['My', 'Our', 'His', 'Your (respectful)'], answer: 3, explain: 'ਤੁਹਾਡਾ (tu-haa-daa) = your, the respectful form. ਤੇਰਾ (te-raa) is the informal one.' },
    { topic: 'mine', q: 'ਉਸ ਦਾ ਭਰਾ can mean…', options: ['only "his brother"', 'only "her brother"', '"his brother" or "her brother"', '"my brother"'], answer: 2, explain: 'ਉਸ ਦਾ (us daa) = his OR her. ਦਾ matches ਭਰਾ (masculine), not the owner.' },
    { topic: 'sent', q: 'What does ਤੁਹਾਡੀ ਭੈਣ ਕਿੱਥੇ ਹੈ? mean?', options: ['Where is your sister?', 'Who is your sister?', 'Where is my sister?', 'Your sister is here.'], answer: 0, explain: 'tu-haa-dee bhain kit-the hai? — Where is your sister?' }
  ],

  match: [
    { title: 'Who?', pairs: [
      ['ਮੈਂ', 'I'], ['ਅਸੀਂ', 'We'], ['ਤੂੰ', 'You (informal)'],
      ['ਤੁਸੀਂ', 'You (respectful)'], ['ਇਹ', 'This'], ['ਉਹ', 'That / he / she']
    ] },
    { title: 'Pick the "to be"', pairs: [
      ['ਮੈਂ ਠੀਕ ਹਾਂ।', 'I am fine.'], ['ਤੂੰ ਠੀਕ ਹੈਂ।', 'You (friend) are fine.'], ['ਤੁਸੀਂ ਠੀਕ ਹੋ।', 'You (respectful) are fine.'],
      ['ਉਹ ਠੀਕ ਹੈ।', 'He / she is fine.'], ['ਅਸੀਂ ਠੀਕ ਹਾਂ।', 'We are fine.'], ['ਉਹ ਠੀਕ ਹਨ।', 'They are fine.']
    ] },
    { title: 'Whose?', pairs: [
      ['ਮੇਰਾ ਘਰ', 'my house'], ['ਮੇਰੀ ਕਿਤਾਬ', 'my book'], ['ਤੁਹਾਡਾ ਨਾਮ', 'your name'],
      ['ਸਾਡਾ ਸਕੂਲ', 'our school'], ['ਤੇਰੀ ਕਲਮ', 'your pen'], ['ਉਸ ਦੀ ਮਾਂ', 'his / her mother']
    ] }
  ],

  balance: [],
  written: []
});

// ───────────────────────── 2. Verbs ─────────────────────────
SWG.addChapter('punjabi', {
  id: 'pa-m02',
  level: 'Medium',
  number: 2,
  title: 'Action Words · ਕਿਰਿਆ',
  icon: '🏃‍♀️',

  topics: {
    verb: 'What is a Verb?',
    daily: 'Everyday Verbs',
    more: 'More Verbs',
    sent: 'Using Verbs'
  },

  summary: [
    'A Verb · ਕਿਰਿਆ (ki-ri-aa) is an action word: eat, go, read, play.',
    'In the dictionary a verb ends in -ਣਾ or -ਨਾ: ਖਾਣਾ (khaa-naa) = to eat, ਪੜ੍ਹਨਾ (parh-naa) = to read. This is like "to ___" in English.',
    'Verbs whose root ends in ਰ, ੜ or ਣ take -ਨਾ (ਕਰਨਾ, ਪੜ੍ਹਨਾ, ਸੁਣਨਾ). Most others take -ਣਾ (ਖਾਣਾ, ਲਿਖਣਾ, ਬੋਲਣਾ).',
    'To say "I eat", drop -ਣਾ / -ਨਾ to get the root (ਖਾ), add -ਦੀ for a girl, then ਹਾਂ: ਮੈਂ ਖਾਂਦੀ ਹਾਂ। A boy says ਮੈਂ ਖਾਂਦਾ ਹਾਂ।',
    'Roots ending in a vowel add a nasal sound: ਖਾ → ਖਾਂਦੀ, ਪੀ → ਪੀਂਦੀ, ਜਾ → ਜਾਂਦੀ, ਆ → ਆਉਂਦੀ.',
    'Word order: the verb comes LAST. ਮੈਂ ਦੁੱਧ ਪੀਂਦੀ ਹਾਂ। = I milk drink.'
  ],

  flashcards: [
    { topic: 'verb', front: 'ਕਿਰਿਆ', back: 'ki-ri-aa — verb (an action word)' },
    { topic: 'verb', front: 'ਖਾਣਾ → ਖਾ → ਖਾਂਦੀ ਹਾਂ', back: 'khaa-naa → khaa → khaan-dee haan — to eat → eat (root) → I eat (girl)\nDrop -ਣਾ, add -ਦੀ (girl) or -ਦਾ (boy), then ਹਾਂ.' },
    { topic: 'daily', front: 'ਖਾਣਾ', back: 'khaa-naa — to eat (also means "food")\nਮੈਂ ਰੋਟੀ ਖਾਂਦੀ ਹਾਂ। (main ro-tee khaan-dee haan) — I eat roti.' },
    { topic: 'daily', front: 'ਪੀਣਾ', back: 'pee-naa — to drink\nਮੈਂ ਦੁੱਧ ਪੀਂਦੀ ਹਾਂ। (main duddh peen-dee haan) — I drink milk.' },
    { topic: 'daily', front: 'ਜਾਣਾ', back: 'jaa-naa — to go\nਮੈਂ ਸਕੂਲ ਜਾਂਦੀ ਹਾਂ। (main sa-kool jaan-dee haan) — I go to school.' },
    { topic: 'daily', front: 'ਆਉਣਾ', back: 'aa-u-naa — to come\nਮਾਂ ਘਰ ਆਉਂਦੀ ਹੈ। (maan ghar aa-un-dee hai) — Mother comes home.' },
    { topic: 'daily', front: 'ਪੜ੍ਹਨਾ', back: 'parh-naa — to read / to study\nਮੈਂ ਕਿਤਾਬ ਪੜ੍ਹਦੀ ਹਾਂ। (main ki-taab parh-dee haan) — I read a book.' },
    { topic: 'daily', front: 'ਲਿਖਣਾ', back: 'likh-naa — to write\nਮੈਂ ਚਿੱਠੀ ਲਿਖਦੀ ਹਾਂ। (main chit-thee likh-dee haan) — I write a letter.' },
    { topic: 'daily', front: 'ਸੌਣਾ', back: 'sau-naa — to sleep\nਮੈਂ ਰਾਤ ਨੂੰ ਸੌਂਦੀ ਹਾਂ। (main raat noon saun-dee haan) — I sleep at night.' },
    { topic: 'daily', front: 'ਉੱਠਣਾ', back: 'utth-naa — to get up / to stand up\nਮੈਂ ਜਲਦੀ ਉੱਠਦੀ ਹਾਂ। (main jal-dee utth-dee haan) — I get up early.' },
    { topic: 'daily', front: 'ਬੈਠਣਾ', back: 'baith-naa — to sit\nਮੈਂ ਕੁਰਸੀ ਉੱਤੇ ਬੈਠਦੀ ਹਾਂ। (main kur-see ut-te baith-dee haan) — I sit on the chair.' },
    { topic: 'daily', front: 'ਨਹਾਉਣਾ', back: 'na-haa-u-naa — to bathe / have a shower\nਮੈਂ ਰੋਜ਼ ਨਹਾਉਂਦੀ ਹਾਂ। (main roz na-haa-un-dee haan) — I bathe every day.' },
    { topic: 'daily', front: 'ਕਰਨਾ', back: 'kar-naa — to do\nਮੈਂ ਕੰਮ ਕਰਦੀ ਹਾਂ। (main kamm kar-dee haan) — I do (my) work.' },
    { topic: 'more', front: 'ਖੇਡਣਾ', back: 'khed-naa — to play\nਬੱਚੇ ਪਾਰਕ ਵਿੱਚ ਖੇਡਦੇ ਹਨ। (bach-che paark vichch khed-de han) — The children play in the park.' },
    { topic: 'more', front: 'ਬੋਲਣਾ', back: 'bol-naa — to speak\nਮੈਂ ਪੰਜਾਬੀ ਬੋਲਦੀ ਹਾਂ। (main pan-jaa-bee bol-dee haan) — I speak Punjabi.' },
    { topic: 'more', front: 'ਦੇਖਣਾ', back: 'dekh-naa — to see / to watch\nਮੈਂ ਟੀਵੀ ਦੇਖਦੀ ਹਾਂ। (main tee-vee dekh-dee haan) — I watch TV.' },
    { topic: 'more', front: 'ਸੁਣਨਾ', back: 'sun-naa — to listen / to hear\nਮੈਂ ਗੀਤ ਸੁਣਦੀ ਹਾਂ। (main geet sun-dee haan) — I listen to songs.' },
    { topic: 'more', front: 'ਗਾਉਣਾ', back: 'gaa-u-naa — to sing\nਉਹ ਗੀਤ ਗਾਉਂਦੀ ਹੈ। (uh geet gaa-un-dee hai) — She sings a song.' },
    { topic: 'more', front: 'ਹੱਸਣਾ', back: 'hass-naa — to laugh\nਬੱਚਾ ਹੱਸਦਾ ਹੈ। (bach-chaa hass-daa hai) — The child laughs.' },
    { topic: 'more', front: 'ਰੋਣਾ', back: 'ro-naa — to cry\nਬੱਚੀ ਰੋਂਦੀ ਹੈ। (bach-chee ron-dee hai) — The little girl cries.' },
    { topic: 'more', front: 'ਤੁਰਨਾ', back: 'tur-naa — to walk\nਦਾਦਾ ਜੀ ਹੌਲੀ ਤੁਰਦੇ ਹਨ। (daa-daa jee hau-lee tur-de han) — Grandpa walks slowly.\n(ਜੀ shows respect, so the verb becomes plural: ਤੁਰਦੇ ਹਨ)' },
    { topic: 'more', front: 'ਦੌੜਨਾ', back: 'daur-naa — to run\nਕੁੱਤਾ ਤੇਜ਼ ਦੌੜਦਾ ਹੈ। (kut-taa tez daur-daa hai) — The dog runs fast.' },
    { topic: 'more', front: 'ਸਿੱਖਣਾ', back: 'sikkh-naa — to learn\nਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖਦੀ ਹਾਂ। (main pan-jaa-bee sikkh-dee haan) — I learn Punjabi.' },
    { topic: 'more', front: 'ਪਕਾਉਣਾ', back: 'pa-kaa-u-naa — to cook\nਪਿਤਾ ਜੀ ਖਾਣਾ ਪਕਾਉਂਦੇ ਹਨ। (pi-taa jee khaa-naa pa-kaa-un-de han) — Father cooks food.' }
  ],

  quiz: [
    { topic: 'verb', q: 'What is ਕਿਰਿਆ in English grammar?', options: ['Noun', 'Verb', 'Pronoun', 'Adjective'], answer: 1, explain: 'ਕਿਰਿਆ (ki-ri-aa) = verb, an action word.' },
    { topic: 'daily', q: 'What does ਪੀਣਾ mean?', options: ['To eat', 'To drink', 'To go', 'To sleep'], answer: 1, explain: 'ਪੀਣਾ (pee-naa) = to drink. ਖਾਣਾ (khaa-naa) = to eat.' },
    { topic: 'daily', q: 'Which word means "to write"?', options: ['ਪੜ੍ਹਨਾ', 'ਬੋਲਣਾ', 'ਲਿਖਣਾ', 'ਸੁਣਨਾ'], answer: 2, explain: 'ਲਿਖਣਾ (likh-naa) = to write. ਪੜ੍ਹਨਾ (parh-naa) = to read.' },
    { topic: 'daily', q: 'What does ਸੌਣਾ mean?', options: ['To sit', 'To get up', 'To bathe', 'To sleep'], answer: 3, explain: 'ਸੌਣਾ (sau-naa) = to sleep.' },
    { topic: 'daily', q: 'How do you say ਆਉਣਾ?', options: ['aa-u-naa', 'jaa-naa', 'gaa-u-naa', 'khaa-naa'], answer: 0, explain: 'ਆਉਣਾ = aa-u-naa = to come.' },
    { topic: 'daily', q: 'ਖਾਣਾ means "to eat". What else can it mean?', options: ['Water', 'Food', 'Kitchen', 'Hungry'], answer: 1, explain: 'ਖਾਣਾ (khaa-naa) = to eat, and also food: ਖਾਣਾ ਤਿਆਰ ਹੈ — food is ready.' },
    { topic: 'more', q: 'What does ਹੱਸਣਾ mean?', options: ['To cry', 'To sing', 'To laugh', 'To run'], answer: 2, explain: 'ਹੱਸਣਾ (hass-naa) = to laugh. ਰੋਣਾ (ro-naa) = to cry.' },
    { topic: 'more', q: 'Which word means "to listen"?', options: ['ਸੁਣਨਾ', 'ਦੇਖਣਾ', 'ਬੋਲਣਾ', 'ਗਾਉਣਾ'], answer: 0, explain: 'ਸੁਣਨਾ (sun-naa) = to listen. ਦੇਖਣਾ (dekh-naa) = to see.' },
    { topic: 'more', q: 'What does ਦੌੜਨਾ mean?', options: ['To walk', 'To sit', 'To play', 'To run'], answer: 3, explain: 'ਦੌੜਨਾ (daur-naa) = to run. ਤੁਰਨਾ (tur-naa) = to walk.' },
    { topic: 'sent', q: 'A girl says "I drink milk". Which is correct?', options: ['ਮੈਂ ਦੁੱਧ ਪੀਂਦਾ ਹਾਂ।', 'ਮੈਂ ਦੁੱਧ ਪੀਂਦੀ ਹਾਂ।', 'ਮੈਂ ਦੁੱਧ ਪੀਂਦੀ ਹੈ।', 'ਮੈਂ ਦੁੱਧ ਪੀਣਾ ਹਾਂ।'], answer: 1, explain: 'ਮੈਂ ਦੁੱਧ ਪੀਂਦੀ ਹਾਂ। (main duddh peen-dee haan). Girl → ਪੀਂਦੀ, and ਮੈਂ → ਹਾਂ.' },
    { topic: 'sent', q: 'What does ਮੈਂ ਪੰਜਾਬੀ ਬੋਲਦੀ ਹਾਂ। mean?', options: ['I read Punjabi.', 'I speak Punjabi.', 'I learn Punjabi.', 'I write Punjabi.'], answer: 1, explain: 'main pan-jaa-bee bol-dee haan — I speak Punjabi. ਬੋਲਣਾ = to speak.' },
    { topic: 'sent', q: 'What is the root of ਲਿਖਣਾ?', options: ['ਲਿਖ', 'ਲਿਖਣ', 'ਣਾ', 'ਲਿ'], answer: 0, explain: 'Drop -ਣਾ: ਲਿਖਣਾ → ਲਿਖ (likh). Then ਲਿਖਦੀ ਹਾਂ (likh-dee haan) = I write.' },
    { topic: 'sent', q: 'What does ਬੱਚੇ ਪਾਰਕ ਵਿੱਚ ਖੇਡਦੇ ਹਨ। mean?', options: ['The child sleeps in the park.', 'The children play in the park.', 'The children run to school.', 'I play in the park.'], answer: 1, explain: 'bach-che paark vichch khed-de han — The children play in the park.' },
    { topic: 'sent', q: 'Where does the verb usually go in a Punjabi sentence?', options: ['At the start', 'After ਮੈਂ', 'At the end', 'Anywhere'], answer: 2, explain: 'The verb comes last: ਮੈਂ ਕਿਤਾਬ ਪੜ੍ਹਦੀ ਹਾਂ। (main ki-taab parh-dee haan) — I read a book.' }
  ],

  match: [
    { title: 'Daily Actions', pairs: [
      ['ਖਾਣਾ', 'to eat'], ['ਪੀਣਾ', 'to drink'], ['ਜਾਣਾ', 'to go'],
      ['ਆਉਣਾ', 'to come'], ['ਸੌਣਾ', 'to sleep'], ['ਉੱਠਣਾ', 'to get up']
    ] },
    { title: 'School Actions', pairs: [
      ['ਪੜ੍ਹਨਾ', 'to read'], ['ਲਿਖਣਾ', 'to write'], ['ਬੋਲਣਾ', 'to speak'],
      ['ਸੁਣਨਾ', 'to listen'], ['ਦੇਖਣਾ', 'to see'], ['ਸਿੱਖਣਾ', 'to learn']
    ] },
    { title: 'Fun Actions', pairs: [
      ['ਖੇਡਣਾ', 'to play'], ['ਗਾਉਣਾ', 'to sing'], ['ਹੱਸਣਾ', 'to laugh'],
      ['ਰੋਣਾ', 'to cry'], ['ਦੌੜਨਾ', 'to run'], ['ਤੁਰਨਾ', 'to walk']
    ] }
  ],

  balance: [],
  written: []
});

// ───────────────────────── 3. Days & Time ─────────────────────────
SWG.addChapter('punjabi', {
  id: 'pa-m03',
  level: 'Medium',
  number: 3,
  title: 'Days, Months & Time · ਦਿਨ ਅਤੇ ਸਮਾਂ',
  icon: '📅',

  topics: {
    days: 'Days of the Week',
    when: 'Today, Tomorrow…',
    parts: 'Parts of the Day',
    clock: 'Weeks, Months & Clock'
  },

  summary: [
    'Every day name ends in ਵਾਰ (vaar) = day: ਸੋਮਵਾਰ (Monday) … ਐਤਵਾਰ (Sunday).',
    'ਅੱਜ (ajj) = today. ਕੱਲ੍ਹ (kallh) means BOTH yesterday and tomorrow — the verb tells you which: ਕੱਲ੍ਹ ਐਤਵਾਰ ਸੀ (was) / ਕੱਲ੍ਹ ਮੰਗਲਵਾਰ ਹੋਵੇਗਾ (will be).',
    'ਪਰਸੋਂ (par-son) works the same way: the day before yesterday OR the day after tomorrow.',
    'ਸਵੇਰ (morning), ਦੁਪਹਿਰ (afternoon), ਸ਼ਾਮ (evening), ਰਾਤ (night). Add ਨੂੰ for "in the…": ਰਾਤ ਨੂੰ = at night; ਸਵੇਰੇ = in the morning.',
    'Months are the English names, written in Gurmukhi: ਜਨਵਰੀ, ਫ਼ਰਵਰੀ, ਮਾਰਚ…',
    'Time: ਕਿੰਨੇ ਵਜੇ ਹਨ? = What time is it? Answer: ਚਾਰ ਵਜੇ ਹਨ। = It is four o\'clock. ਸਾਢੇ (saa-dhe) = half past: ਸਾਢੇ ਚਾਰ = 4:30.'
  ],

  flashcards: [
    { topic: 'days', front: 'ਸੋਮਵਾਰ', back: 'som-vaar — Monday' },
    { topic: 'days', front: 'ਮੰਗਲਵਾਰ', back: 'man-gal-vaar — Tuesday' },
    { topic: 'days', front: 'ਬੁੱਧਵਾਰ', back: 'buddh-vaar — Wednesday' },
    { topic: 'days', front: 'ਵੀਰਵਾਰ', back: 'veer-vaar — Thursday' },
    { topic: 'days', front: 'ਸ਼ੁੱਕਰਵਾਰ', back: 'shuk-kar-vaar — Friday' },
    { topic: 'days', front: 'ਸ਼ਨਿੱਚਰਵਾਰ', back: 'sha-nich-char-vaar — Saturday\n(also ਸ਼ਨੀਵਾਰ, sha-nee-vaar)' },
    { topic: 'days', front: 'ਐਤਵਾਰ', back: 'ait-vaar — Sunday' },
    { topic: 'when', front: 'ਅੱਜ', back: 'ajj — today\nਅੱਜ ਸੋਮਵਾਰ ਹੈ। (ajj som-vaar hai) — Today is Monday.' },
    { topic: 'when', front: 'ਕੱਲ੍ਹ', back: 'kallh — yesterday OR tomorrow!\nThe verb tells you which:\nਕੱਲ੍ਹ ਐਤਵਾਰ ਸੀ। (kallh ait-vaar see) — Yesterday was Sunday.\nਕੱਲ੍ਹ ਮੰਗਲਵਾਰ ਹੋਵੇਗਾ। (kallh man-gal-vaar ho-ve-gaa) — Tomorrow will be Tuesday.' },
    { topic: 'when', front: 'ਪਰਸੋਂ', back: 'par-son — the day before yesterday OR the day after tomorrow\n(just like ਕੱਲ੍ਹ, the verb tells you which)' },
    { topic: 'when', front: 'ਅੱਜ ਕਿਹੜਾ ਦਿਨ ਹੈ?', back: 'ajj kih-raa din hai? — What day is it today?' },
    { topic: 'parts', front: 'ਸਵੇਰ', back: 'sa-ver — morning\nਸਵੇਰੇ (sa-ve-re) — in the morning' },
    { topic: 'parts', front: 'ਦੁਪਹਿਰ', back: 'du-pehr — afternoon / midday' },
    { topic: 'parts', front: 'ਸ਼ਾਮ', back: 'shaam — evening\nਸ਼ਾਮ ਨੂੰ (shaam noon) — in the evening' },
    { topic: 'parts', front: 'ਰਾਤ', back: 'raat — night\nਰਾਤ ਨੂੰ (raat noon) — at night' },
    { topic: 'clock', front: 'ਦਿਨ', back: 'din — day' },
    { topic: 'clock', front: 'ਹਫ਼ਤਾ', back: 'haf-taa — week\nਇੱਕ ਹਫ਼ਤੇ ਵਿੱਚ ਸੱਤ ਦਿਨ ਹੁੰਦੇ ਹਨ। (ikk haf-te vichch satt din hun-de han) — There are seven days in a week.' },
    { topic: 'clock', front: 'ਮਹੀਨਾ', back: 'ma-hee-naa — month' },
    { topic: 'clock', front: 'ਸਾਲ', back: 'saal — year' },
    { topic: 'clock', front: 'ਘੰਟਾ', back: 'ghan-taa — hour' },
    { topic: 'clock', front: 'ਜਨਵਰੀ, ਫ਼ਰਵਰੀ, ਮਾਰਚ', back: 'jan-va-ree, far-va-ree, maarch — January, February, March\nMonths use the English names, written in Gurmukhi.' },
    { topic: 'clock', front: 'ਕਿੰਨੇ ਵਜੇ ਹਨ?', back: 'kin-ne va-je han? — What time is it?' },
    { topic: 'clock', front: 'ਚਾਰ ਵਜੇ ਹਨ।', back: 'chaar va-je han — It is four o\'clock.\nਵਜੇ (va-je) = o\'clock' },
    { topic: 'clock', front: 'ਸਾਢੇ ਚਾਰ ਵਜੇ', back: 'saa-dhe chaar va-je — half past four (4:30)\nਸਾਢੇ = and a half' }
  ],

  quiz: [
    { topic: 'days', q: 'What day is ਐਤਵਾਰ?', options: ['Monday', 'Friday', 'Saturday', 'Sunday'], answer: 3, explain: 'ਐਤਵਾਰ (ait-vaar) = Sunday.' },
    { topic: 'days', q: 'Which word means "Monday"?', options: ['ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਵੀਰਵਾਰ', 'ਬੁੱਧਵਾਰ'], answer: 0, explain: 'ਸੋਮਵਾਰ (som-vaar) = Monday.' },
    { topic: 'days', q: 'What day is ਬੁੱਧਵਾਰ?', options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], answer: 1, explain: 'ਬੁੱਧਵਾਰ (buddh-vaar) = Wednesday.' },
    { topic: 'days', q: 'What day is ਸ਼ੁੱਕਰਵਾਰ?', options: ['Thursday', 'Saturday', 'Friday', 'Tuesday'], answer: 2, explain: 'ਸ਼ੁੱਕਰਵਾਰ (shuk-kar-vaar) = Friday.' },
    { topic: 'days', q: 'What does ਵਾਰ mean at the end of ਸੋਮਵਾਰ, ਮੰਗਲਵਾਰ…?', options: ['Week', 'Day', 'Time', 'Night'], answer: 1, explain: 'ਵਾਰ (vaar) = day. Every day name ends with it.' },
    { topic: 'when', q: 'What does ਅੱਜ mean?', options: ['Today', 'Tomorrow', 'Yesterday', 'Now'], answer: 0, explain: 'ਅੱਜ (ajj) = today.' },
    { topic: 'when', q: 'ਕੱਲ੍ਹ ਐਤਵਾਰ ਸੀ। Here ਕੱਲ੍ਹ means…', options: ['Today', 'Tomorrow', 'Yesterday', 'Next week'], answer: 2, explain: 'ਸੀ (see) = was, so ਕੱਲ੍ਹ (kallh) here means yesterday: "Yesterday was Sunday."' },
    { topic: 'when', q: 'ਕੱਲ੍ਹ ਮੰਗਲਵਾਰ ਹੋਵੇਗਾ। Here ਕੱਲ੍ਹ means…', options: ['Yesterday', 'Tomorrow', 'Today', 'Every day'], answer: 1, explain: 'ਹੋਵੇਗਾ (ho-ve-gaa) = will be, so ਕੱਲ੍ਹ (kallh) here means tomorrow.' },
    { topic: 'parts', q: 'What does ਸ਼ਾਮ mean?', options: ['Morning', 'Afternoon', 'Night', 'Evening'], answer: 3, explain: 'ਸ਼ਾਮ (shaam) = evening.' },
    { topic: 'parts', q: 'Which word means "morning"?', options: ['ਰਾਤ', 'ਸਵੇਰ', 'ਦੁਪਹਿਰ', 'ਸ਼ਾਮ'], answer: 1, explain: 'ਸਵੇਰ (sa-ver) = morning. ਸਵੇਰੇ (sa-ve-re) = in the morning.' },
    { topic: 'clock', q: 'What does ਹਫ਼ਤਾ mean?', options: ['Day', 'Week', 'Month', 'Year'], answer: 1, explain: 'ਹਫ਼ਤਾ (haf-taa) = week.' },
    { topic: 'clock', q: 'What does ਮਹੀਨਾ mean?', options: ['Month', 'Hour', 'Year', 'Week'], answer: 0, explain: 'ਮਹੀਨਾ (ma-hee-naa) = month. ਸਾਲ (saal) = year.' },
    { topic: 'clock', q: 'What does ਕਿੰਨੇ ਵਜੇ ਹਨ? mean?', options: ['What day is it?', 'How old are you?', 'What time is it?', 'How many are there?'], answer: 2, explain: 'kin-ne va-je han? — What time is it?' },
    { topic: 'clock', q: 'ਸਾਢੇ ਚਾਰ ਵਜੇ is what time?', options: ['4:00', '4:30', '3:30', '4:15'], answer: 1, explain: 'ਸਾਢੇ ਚਾਰ (saa-dhe chaar) = four and a half = 4:30.' },
    { topic: 'clock', q: 'ਜਨਵਰੀ is…', options: ['June', 'July', 'January', 'Sunday'], answer: 2, explain: 'ਜਨਵਰੀ (jan-va-ree) = January.' }
  ],

  match: [
    { title: 'Days of the Week', pairs: [
      ['ਸੋਮਵਾਰ', 'Monday'], ['ਮੰਗਲਵਾਰ', 'Tuesday'], ['ਬੁੱਧਵਾਰ', 'Wednesday'],
      ['ਵੀਰਵਾਰ', 'Thursday'], ['ਸ਼ੁੱਕਰਵਾਰ', 'Friday'], ['ਐਤਵਾਰ', 'Sunday']
    ] },
    { title: 'Times of Day', pairs: [
      ['ਸਵੇਰ', 'Morning'], ['ਦੁਪਹਿਰ', 'Afternoon'], ['ਸ਼ਾਮ', 'Evening'],
      ['ਰਾਤ', 'Night'], ['ਅੱਜ', 'Today'], ['ਘੰਟਾ', 'Hour']
    ] },
    { title: 'Months', pairs: [
      ['ਜਨਵਰੀ', 'January'], ['ਮਾਰਚ', 'March'], ['ਮਈ', 'May'],
      ['ਜੁਲਾਈ', 'July'], ['ਅਕਤੂਬਰ', 'October'], ['ਦਸੰਬਰ', 'December']
    ] },
    { title: 'How Long?', pairs: [
      ['ਦਿਨ', 'Day'], ['ਹਫ਼ਤਾ', 'Week'], ['ਮਹੀਨਾ', 'Month'],
      ['ਸਾਲ', 'Year'], ['ਸਾਢੇ ਚਾਰ ਵਜੇ', '4:30'], ['ਚਾਰ ਵਜੇ', '4:00']
    ] }
  ],

  balance: [],
  written: []
});

// ───────────────────────── 4. Question Words ─────────────────────────
SWG.addChapter('punjabi', {
  id: 'pa-m04',
  level: 'Medium',
  number: 4,
  title: 'Question Words · ਪ੍ਰਸ਼ਨ',
  icon: '❓',

  topics: {
    words: 'Question Words',
    ask: 'Asking & Answering',
    yesno: 'Yes / No Questions'
  },

  summary: [
    'ਪ੍ਰਸ਼ਨ (par-shan) = question. Most question words start with ਕ (k): ਕੀ, ਕੌਣ, ਕਿੱਥੇ, ਕਦੋਂ, ਕਿਉਂ, ਕਿਵੇਂ, ਕਿੰਨਾ, ਕਿਹੜਾ.',
    'The question word usually sits just before the verb: ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? = You where live?',
    'ਕਿੰਨਾ (how much / how many) and ਕਿਹੜਾ (which) change like adjectives: ਕਿੰਨਾ / ਕਿੰਨੀ / ਕਿੰਨੇ, ਕਿਹੜਾ / ਕਿਹੜੀ / ਕਿਹੜੇ.',
    'Put ਕੀ at the START of a sentence to make a yes / no question: ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋ? = Do you speak Punjabi?',
    'Answer ਕਿਉਂ (why) with ਕਿਉਂਕਿ (ki-un-ki) = because.'
  ],

  flashcards: [
    { topic: 'words', front: 'ਪ੍ਰਸ਼ਨ', back: 'par-shan — question\nThe answer is ਉੱਤਰ (ut-tar).' },
    { topic: 'words', front: 'ਕੀ', back: 'kee — what' },
    { topic: 'words', front: 'ਕੌਣ', back: 'kaun — who' },
    { topic: 'words', front: 'ਕਿੱਥੇ', back: 'kit-the — where' },
    { topic: 'words', front: 'ਕਦੋਂ', back: 'ka-don — when' },
    { topic: 'words', front: 'ਕਿਉਂ', back: 'ki-un — why' },
    { topic: 'words', front: 'ਕਿਵੇਂ', back: 'ki-ven — how' },
    { topic: 'words', front: 'ਕਿੰਨਾ', back: 'kin-naa — how much / how many\nਕਿੰਨੀ (kin-nee) with feminine words, ਕਿੰਨੇ (kin-ne) with plurals.' },
    { topic: 'words', front: 'ਕਿਹੜਾ', back: 'kih-raa — which\nਕਿਹੜੀ (kih-ree) with feminine words, ਕਿਹੜੇ (kih-re) with plurals.' },
    { topic: 'ask', front: 'ਇਹ ਕੀ ਹੈ?', back: 'ih kee hai? — What is this?\nAnswer: ਇਹ ਸੇਬ ਹੈ। (ih seb hai) — This is an apple.' },
    { topic: 'ask', front: 'ਉਹ ਕੌਣ ਹੈ?', back: 'uh kaun hai? — Who is she / he?\nAnswer: ਉਹ ਮੇਰੀ ਮਾਸੀ ਹੈ। (uh me-ree maa-see hai) — She is my aunt (mother\'s sister).' },
    { topic: 'ask', front: 'ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ?', back: 'tu-seen kit-the rehn-de ho? — Where do you live?\nAnswer: ਮੈਂ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹਾਂ। (main sin-gaa-pur vichch rehn-dee haan) — I live in Singapore.' },
    { topic: 'ask', front: 'ਤੁਹਾਡਾ ਜਨਮ ਦਿਨ ਕਦੋਂ ਹੈ?', back: 'tu-haa-daa ja-nam din ka-don hai? — When is your birthday?\nAnswer: ਮੇਰਾ ਜਨਮ ਦਿਨ ਮਈ ਵਿੱਚ ਹੈ। (me-raa ja-nam din ma-ee vichch hai) — My birthday is in May.' },
    { topic: 'ask', front: 'ਤੁਸੀਂ ਉਦਾਸ ਕਿਉਂ ਹੋ?', back: 'tu-seen u-daas ki-un ho? — Why are you sad?\nAnswer: ਕਿਉਂਕਿ ਮੈਂ ਬਿਮਾਰ ਹਾਂ। (ki-un-ki main bi-maar haan) — Because I am ill.' },
    { topic: 'ask', front: 'ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?', back: 'tu-seen ki-ven ho? — How are you?\nAnswer: ਮੈਂ ਠੀਕ ਹਾਂ। (main theek haan) — I am fine.' },
    { topic: 'ask', front: 'ਤੁਸੀਂ ਸਕੂਲ ਕਿਵੇਂ ਜਾਂਦੇ ਹੋ?', back: 'tu-seen sa-kool ki-ven jaan-de ho? — How do you go to school?\nAnswer: ਮੈਂ ਬੱਸ ਰਾਹੀਂ ਜਾਂਦੀ ਹਾਂ। (main bass raa-heen jaan-dee haan) — I go by bus.' },
    { topic: 'ask', front: 'ਤੁਹਾਡੀ ਉਮਰ ਕਿੰਨੀ ਹੈ?', back: 'tu-haa-dee u-mar kin-nee hai? — How old are you?\nAnswer: ਮੇਰੀ ਉਮਰ ਪੰਦਰਾਂ ਸਾਲ ਹੈ। (me-ree u-mar pand-raan saal hai) — I am fifteen.\nਉਮਰ (age) is feminine → ਕਿੰਨੀ.' },
    { topic: 'ask', front: 'ਤੁਹਾਡੇ ਕਿੰਨੇ ਭਰਾ ਹਨ?', back: 'tu-haa-de kin-ne bha-raa han? — How many brothers do you have?\nAnswer: ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ। (me-raa ikk bha-raa hai) — I have one brother.' },
    { topic: 'ask', front: 'ਤੁਹਾਡਾ ਮਨਪਸੰਦ ਰੰਗ ਕਿਹੜਾ ਹੈ?', back: 'tu-haa-daa man-pa-sand rang kih-raa hai? — Which is your favourite colour?\nAnswer: ਮੇਰਾ ਮਨਪਸੰਦ ਰੰਗ ਨੀਲਾ ਹੈ। (me-raa man-pa-sand rang nee-laa hai) — My favourite colour is blue.' },
    { topic: 'ask', front: 'ਤੁਸੀਂ ਕਿਹੜੀ ਜਮਾਤ ਵਿੱਚ ਪੜ੍ਹਦੇ ਹੋ?', back: 'tu-seen kih-ree ja-maat vichch parh-de ho? — Which class are you in?\nAnswer: ਮੈਂ ਦਸਵੀਂ ਜਮਾਤ ਵਿੱਚ ਪੜ੍ਹਦੀ ਹਾਂ। (main das-veen ja-maat vichch parh-dee haan) — I study in Class 10.' },
    { topic: 'yesno', front: 'ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋ?', back: 'kee tu-seen pan-jaa-bee bol-de ho? — Do you speak Punjabi?\nਕੀ at the START turns a sentence into a yes / no question.\nAnswer: ਹਾਂ, ਮੈਂ ਥੋੜ੍ਹੀ ਪੰਜਾਬੀ ਬੋਲਦੀ ਹਾਂ। (haan, main thor-hee pan-jaa-bee bol-dee haan) — Yes, I speak a little Punjabi.' },
    { topic: 'yesno', front: 'ਕੀ ਇਹ ਤੁਹਾਡੀ ਕਿਤਾਬ ਹੈ?', back: 'kee ih tu-haa-dee ki-taab hai? — Is this your book?\nAnswer: ਨਹੀਂ, ਇਹ ਮੇਰੇ ਭਰਾ ਦੀ ਹੈ। (na-heen, ih me-re bha-raa dee hai) — No, it is my brother\'s.' },
    { topic: 'yesno', front: 'ਕਿਉਂਕਿ', back: 'ki-un-ki — because\n(the answer word for ਕਿਉਂ, why)' }
  ],

  quiz: [
    { topic: 'words', q: 'What does ਕਿੱਥੇ mean?', options: ['When', 'Where', 'Who', 'Why'], answer: 1, explain: 'ਕਿੱਥੇ (kit-the) = where.' },
    { topic: 'words', q: 'What does ਕੌਣ mean?', options: ['Who', 'What', 'Which', 'How'], answer: 0, explain: 'ਕੌਣ (kaun) = who.' },
    { topic: 'words', q: 'Which word means "when"?', options: ['ਕਿਉਂ', 'ਕਿਵੇਂ', 'ਕਦੋਂ', 'ਕਿੰਨਾ'], answer: 2, explain: 'ਕਦੋਂ (ka-don) = when.' },
    { topic: 'words', q: 'Which word means "why"?', options: ['ਕੀ', 'ਕਿਹੜਾ', 'ਕਿੱਥੇ', 'ਕਿਉਂ'], answer: 3, explain: 'ਕਿਉਂ (ki-un) = why. Answer it with ਕਿਉਂਕਿ (ki-un-ki) = because.' },
    { topic: 'words', q: 'How do you say ਕਿਵੇਂ?', options: ['ka-don', 'ki-ven', 'kaun', 'kin-naa'], answer: 1, explain: 'ਕਿਵੇਂ = ki-ven = how.' },
    { topic: 'words', q: 'What does ਕਿਹੜਾ mean?', options: ['Which', 'How much', 'Who', 'Where'], answer: 0, explain: 'ਕਿਹੜਾ (kih-raa) = which.' },
    { topic: 'ask', q: 'What does ਇਹ ਕੀ ਹੈ? mean?', options: ['Who is this?', 'Where is this?', 'What is this?', 'Why is this?'], answer: 2, explain: 'ih kee hai? — What is this?' },
    { topic: 'ask', q: 'What does ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ? mean?', options: ['How are you?', 'Where do you live?', 'When do you come?', 'Who are you?'], answer: 1, explain: 'tu-seen kit-the rehn-de ho? — Where do you live?' },
    { topic: 'ask', q: 'Someone asks ਤੁਹਾਡੀ ਉਮਰ ਕਿੰਨੀ ਹੈ? What are they asking?', options: ['Your name', 'Your age', 'Your class', 'Your address'], answer: 1, explain: 'tu-haa-dee u-mar kin-nee hai? — How old are you? ਉਮਰ (u-mar) = age.' },
    { topic: 'ask', q: 'Best answer to ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?', options: ['ਮੈਂ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹਾਂ।', 'ਕਿਉਂਕਿ ਮੈਂ ਬਿਮਾਰ ਹਾਂ।', 'ਇਹ ਸੇਬ ਹੈ।', 'ਮੈਂ ਠੀਕ ਹਾਂ।'], answer: 3, explain: 'ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? (How are you?) → ਮੈਂ ਠੀਕ ਹਾਂ। (main theek haan) — I am fine.' },
    { topic: 'ask', q: 'Best answer to ਉਹ ਕੌਣ ਹੈ?', options: ['ਉਹ ਮੇਰੀ ਮਾਸੀ ਹੈ।', 'ਮਈ ਵਿੱਚ।', 'ਨੀਲਾ।', 'ਬੱਸ ਰਾਹੀਂ।'], answer: 0, explain: 'ਉਹ ਕੌਣ ਹੈ? (Who is she?) → ਉਹ ਮੇਰੀ ਮਾਸੀ ਹੈ। (uh me-ree maa-see hai) — She is my aunt.' },
    { topic: 'ask', q: 'ਉਮਰ (age) is feminine. Fill in: ਤੁਹਾਡੀ ਉਮਰ ___ ਹੈ?', options: ['ਕਿੰਨਾ', 'ਕਿੰਨੀ', 'ਕਿੰਨੇ', 'ਕੌਣ'], answer: 1, explain: 'ਤੁਹਾਡੀ ਉਮਰ ਕਿੰਨੀ ਹੈ? (tu-haa-dee u-mar kin-nee hai?) — feminine word → ਕਿੰਨੀ.' },
    { topic: 'yesno', q: 'What does ਕੀ do at the start of ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋ?', options: ['Means "what"', 'Makes it a yes / no question', 'Means "who"', 'Makes it past tense'], answer: 1, explain: 'kee tu-seen pan-jaa-bee bol-de ho? — Do you speak Punjabi? ਕੀ at the start = yes / no question.' },
    { topic: 'yesno', q: 'What does ਕਿਉਂਕਿ mean?', options: ['Why', 'Because', 'When', 'But'], answer: 1, explain: 'ਕਿਉਂਕਿ (ki-un-ki) = because.' }
  ],

  match: [
    { title: 'Question Words', pairs: [
      ['ਕੀ', 'What'], ['ਕੌਣ', 'Who'], ['ਕਿੱਥੇ', 'Where'],
      ['ਕਦੋਂ', 'When'], ['ਕਿਉਂ', 'Why'], ['ਕਿਵੇਂ', 'How']
    ] },
    { title: 'Ask It', pairs: [
      ['ਇਹ ਕੀ ਹੈ?', 'What is this?'], ['ਉਹ ਕੌਣ ਹੈ?', 'Who is she?'], ['ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?', 'How are you?'],
      ['ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ?', 'Where do you live?'], ['ਤੁਸੀਂ ਉਦਾਸ ਕਿਉਂ ਹੋ?', 'Why are you sad?'], ['ਕਿੰਨੇ ਵਜੇ ਹਨ?', 'What time is it?']
    ] },
    { title: 'Say the Sound', pairs: [
      ['ਕਿੰਨਾ', 'kin-naa'], ['ਕਿਹੜਾ', 'kih-raa'], ['ਕਿਉਂਕਿ', 'ki-un-ki'],
      ['ਕਦੋਂ', 'ka-don'], ['ਕੌਣ', 'kaun'], ['ਪ੍ਰਸ਼ਨ', 'par-shan']
    ] }
  ],

  balance: [],
  written: []
});

// ───────────────────────── 5. Opposites ─────────────────────────
SWG.addChapter('punjabi', {
  id: 'pa-m05',
  level: 'Medium',
  number: 5,
  title: 'Opposites · ਵਿਰੋਧੀ ਸ਼ਬਦ',
  icon: '↔️',

  topics: {
    size: 'Size & Shape',
    feel: 'Feel & Taste',
    other: 'More Opposites',
    sent: 'In Sentences'
  },

  summary: [
    'ਵਿਰੋਧੀ ਸ਼ਬਦ (vi-ro-dhee shab-d) = opposite words, e.g. ਵੱਡਾ (big) ↔ ਛੋਟਾ (small).',
    'Many describing words are Adjectives · ਵਿਸ਼ੇਸ਼ਣ (vi-she-shan).',
    'Adjectives ending in -ਾ change for gender and number: ਵੱਡਾ ਘਰ, ਵੱਡੀ ਕਿਤਾਬ, ਵੱਡੇ ਘਰ.',
    'Adjectives NOT ending in -ਾ never change: ਗਰਮ ਚਾਹ, ਗਰਮ ਪਾਣੀ; ਸਾਫ਼ ਕਮਰਾ, ਸਾਫ਼ ਕੁਰਸੀ.',
    'Learn opposites in pairs — say both aloud: ਦਿਨ, ਰਾਤ · ਸੱਚ, ਝੂਠ · ਅਮੀਰ, ਗ਼ਰੀਬ.'
  ],

  flashcards: [
    { topic: 'size', front: 'ਵਿਰੋਧੀ ਸ਼ਬਦ', back: 'vi-ro-dhee shab-d — opposite words\nਸ਼ਬਦ (shab-d) = word' },
    { topic: 'size', front: 'ਵੱਡਾ, ਛੋਟਾ', back: 'vad-daa, chho-taa — big, small' },
    { topic: 'size', front: 'ਉੱਚਾ, ਨੀਵਾਂ', back: 'uch-chaa, nee-vaan — high, low' },
    { topic: 'size', front: 'ਮੋਟਾ, ਪਤਲਾ', back: 'mo-taa, pat-laa — fat / thick, thin' },
    { topic: 'size', front: 'ਹਲਕਾ, ਭਾਰੀ', back: 'hal-kaa, bhaa-ree — light, heavy' },
    { topic: 'size', front: 'ਅੰਦਰ, ਬਾਹਰ', back: 'an-dar, baa-har — inside, outside' },
    { topic: 'size', front: 'ਉੱਪਰ, ਹੇਠਾਂ', back: 'up-par, he-thaan — up / above, down / below' },
    { topic: 'feel', front: 'ਗਰਮ, ਠੰਢਾ', back: 'ga-ram, than-dhaa — hot, cold' },
    { topic: 'feel', front: 'ਮਿੱਠਾ, ਕੌੜਾ', back: 'mit-thaa, kau-raa — sweet, bitter' },
    { topic: 'feel', front: 'ਸੁੱਕਾ, ਗਿੱਲਾ', back: 'suk-kaa, gil-laa — dry, wet' },
    { topic: 'feel', front: 'ਸਾਫ਼, ਗੰਦਾ', back: 'saaf, gan-daa — clean, dirty' },
    { topic: 'feel', front: 'ਖ਼ੁਸ਼, ਉਦਾਸ', back: 'khush, u-daas — happy, sad' },
    { topic: 'other', front: 'ਦਿਨ, ਰਾਤ', back: 'din, raat — day, night' },
    { topic: 'other', front: 'ਸੱਚ, ਝੂਠ', back: 'sachch, jhooth — truth, lie' },
    { topic: 'other', front: 'ਅਮੀਰ, ਗ਼ਰੀਬ', back: 'a-meer, ga-reeb — rich, poor' },
    { topic: 'other', front: 'ਚੰਗਾ, ਮਾੜਾ', back: 'chan-gaa, maa-raa — good, bad' },
    { topic: 'other', front: 'ਨਵਾਂ, ਪੁਰਾਣਾ', back: 'na-vaan, pu-raa-naa — new, old' },
    { topic: 'other', front: 'ਸੌਖਾ, ਔਖਾ', back: 'saukh-aa, aukh-aa — easy, difficult' },
    { topic: 'other', front: 'ਤੇਜ਼, ਹੌਲੀ', back: 'tez, hau-lee — fast, slow' },
    { topic: 'other', front: 'ਜਵਾਨ, ਬੁੱਢਾ', back: 'ja-vaan, budd-haa — young, old (for people)' },
    { topic: 'other', front: 'ਹਨੇਰਾ, ਚਾਨਣ', back: 'ha-ne-raa, chaa-nan — darkness, light' },
    { topic: 'other', front: 'ਜਿੱਤ, ਹਾਰ', back: 'jitt, haar — win, defeat' },
    { topic: 'sent', front: 'ਹਾਥੀ ਵੱਡਾ ਹੈ, ਚੂਹਾ ਛੋਟਾ ਹੈ।', back: 'haa-thee vad-daa hai, choo-haa chho-taa hai — The elephant is big, the mouse is small.' },
    { topic: 'sent', front: 'ਚਾਹ ਗਰਮ ਹੈ, ਪਾਣੀ ਠੰਢਾ ਹੈ।', back: 'chaah ga-ram hai, paa-nee than-dhaa hai — The tea is hot, the water is cold.\nਗਰਮ never changes; ਠੰਢਾ changes (ਠੰਢੀ ਹਵਾ — cold wind).' },
    { topic: 'sent', front: 'ਮੇਰੀ ਕਿਤਾਬ ਨਵੀਂ ਹੈ।', back: 'me-ree ki-taab na-veen hai — My book is new.\nਕਿਤਾਬ is feminine, so ਨਵਾਂ → ਨਵੀਂ.' }
  ],

  quiz: [
    { topic: 'size', q: 'What is the opposite of ਵੱਡਾ (big)?', options: ['ਮੋਟਾ', 'ਛੋਟਾ', 'ਉੱਚਾ', 'ਭਾਰੀ'], answer: 1, explain: 'ਵੱਡਾ (vad-daa) big ↔ ਛੋਟਾ (chho-taa) small.' },
    { topic: 'size', q: 'What does ਭਾਰੀ mean?', options: ['Light', 'Heavy', 'Thin', 'High'], answer: 1, explain: 'ਭਾਰੀ (bhaa-ree) = heavy. Opposite: ਹਲਕਾ (hal-kaa) = light.' },
    { topic: 'size', q: 'What is the opposite of ਅੰਦਰ (inside)?', options: ['ਉੱਪਰ', 'ਹੇਠਾਂ', 'ਬਾਹਰ', 'ਨੀਵਾਂ'], answer: 2, explain: 'ਅੰਦਰ (an-dar) inside ↔ ਬਾਹਰ (baa-har) outside.' },
    { topic: 'feel', q: 'What does ਠੰਢਾ mean?', options: ['Hot', 'Wet', 'Sweet', 'Cold'], answer: 3, explain: 'ਠੰਢਾ (than-dhaa) = cold. Opposite: ਗਰਮ (ga-ram) = hot.' },
    { topic: 'feel', q: 'What is the opposite of ਮਿੱਠਾ (sweet)?', options: ['ਕੌੜਾ', 'ਗੰਦਾ', 'ਸੁੱਕਾ', 'ਮਾੜਾ'], answer: 0, explain: 'ਮਿੱਠਾ (mit-thaa) sweet ↔ ਕੌੜਾ (kau-raa) bitter.' },
    { topic: 'feel', q: 'What does ਉਦਾਸ mean?', options: ['Happy', 'Angry', 'Sad', 'Tired'], answer: 2, explain: 'ਉਦਾਸ (u-daas) = sad. Opposite: ਖ਼ੁਸ਼ (khush) = happy.' },
    { topic: 'feel', q: 'What does ਗਿੱਲਾ mean?', options: ['Dry', 'Wet', 'Dirty', 'Clean'], answer: 1, explain: 'ਗਿੱਲਾ (gil-laa) = wet. Opposite: ਸੁੱਕਾ (suk-kaa) = dry.' },
    { topic: 'other', q: 'What is the opposite of ਸੱਚ (truth)?', options: ['ਝੂਠ', 'ਹਾਰ', 'ਰਾਤ', 'ਮਾੜਾ'], answer: 0, explain: 'ਸੱਚ (sachch) truth ↔ ਝੂਠ (jhooth) lie.' },
    { topic: 'other', q: 'What does ਗ਼ਰੀਬ mean?', options: ['Rich', 'Young', 'Poor', 'Old'], answer: 2, explain: 'ਗ਼ਰੀਬ (ga-reeb) = poor. Opposite: ਅਮੀਰ (a-meer) = rich.' },
    { topic: 'other', q: 'What is the opposite of ਸੌਖਾ (easy)?', options: ['ਹੌਲੀ', 'ਪੁਰਾਣਾ', 'ਭਾਰੀ', 'ਔਖਾ'], answer: 3, explain: 'ਸੌਖਾ (saukh-aa) easy ↔ ਔਖਾ (aukh-aa) difficult.' },
    { topic: 'other', q: 'What does ਪੁਰਾਣਾ mean?', options: ['New', 'Old (things)', 'Slow', 'Big'], answer: 1, explain: 'ਪੁਰਾਣਾ (pu-raa-naa) = old (for things). Opposite: ਨਵਾਂ (na-vaan) = new.' },
    { topic: 'other', q: 'What does ਤੇਜ਼ mean?', options: ['Slow', 'Late', 'Fast', 'Strong'], answer: 2, explain: 'ਤੇਜ਼ (tez) = fast. Opposite: ਹੌਲੀ (hau-lee) = slow.' },
    { topic: 'sent', q: 'ਕਿਤਾਬ is feminine. "My book is new" is…', options: ['ਮੇਰੀ ਕਿਤਾਬ ਨਵਾਂ ਹੈ।', 'ਮੇਰਾ ਕਿਤਾਬ ਨਵੀਂ ਹੈ।', 'ਮੇਰੀ ਕਿਤਾਬ ਨਵੀਂ ਹੈ।', 'ਮੇਰੀ ਕਿਤਾਬ ਨਵੇਂ ਹੈ।'], answer: 2, explain: 'ਮੇਰੀ ਕਿਤਾਬ ਨਵੀਂ ਹੈ। (me-ree ki-taab na-veen hai). Feminine → ਮੇਰੀ and ਨਵੀਂ.' },
    { topic: 'sent', q: 'Which adjective stays the SAME for ਚਾਹ (tea, f.) and ਪਾਣੀ (water, m.)?', options: ['ਠੰਢਾ', 'ਗਰਮ', 'ਮਿੱਠਾ', 'ਚੰਗਾ'], answer: 1, explain: 'ਗਰਮ (ga-ram) does not end in -ਾ, so it never changes: ਗਰਮ ਚਾਹ, ਗਰਮ ਪਾਣੀ.' }
  ],

  match: [
    { title: 'Opposite Pairs 1', pairs: [
      ['ਵੱਡਾ', 'Big'], ['ਛੋਟਾ', 'Small'], ['ਗਰਮ', 'Hot'],
      ['ਠੰਢਾ', 'Cold'], ['ਸੱਚ', 'Truth'], ['ਝੂਠ', 'Lie']
    ] },
    { title: 'What Does It Mean?', pairs: [
      ['ਮਿੱਠਾ', 'Sweet'], ['ਕੌੜਾ', 'Bitter'], ['ਸਾਫ਼', 'Clean'],
      ['ਗੰਦਾ', 'Dirty'], ['ਹਲਕਾ', 'Light (weight)'], ['ਭਾਰੀ', 'Heavy']
    ] },
    { title: 'More Meanings', pairs: [
      ['ਨਵਾਂ', 'New'], ['ਪੁਰਾਣਾ', 'Old (things)'], ['ਸੌਖਾ', 'Easy'],
      ['ਔਖਾ', 'Difficult'], ['ਤੇਜ਼', 'Fast'], ['ਹੌਲੀ', 'Slow']
    ] }
  ],

  balance: [],
  written: []
});
