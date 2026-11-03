// Helpers for Maths practice generators. A chapter's practice[].gen(mk) receives this object.
window.SWG = window.SWG || {};

SWG.mk = (function () {
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';

  // Random integer from a to b (both included).
  function ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function gcd(a, b) { while (b) [a, b] = [b, a % b]; return Math.abs(a); }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function isPrime(n) {
    if (n < 2) return false;
    for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
    return true;
  }
  // 360 -> { 2: 3, 3: 2, 5: 1 }
  function factor(n) {
    const out = {};
    for (let d = 2; d * d <= n; d++) while (n % d === 0) { out[d] = (out[d] || 0) + 1; n /= d; }
    if (n > 1) out[n] = (out[n] || 0) + 1;
    return out;
  }
  function sup(n) { return String(n).split('').map(c => SUP[c]).join(''); }
  // 360 -> "2³ × 3² × 5"
  function fstr(n) {
    const f = typeof n === 'number' ? factor(n) : n;
    return Object.keys(f).map(Number).sort((a, b) => a - b).map(p => p + (f[p] > 1 ? sup(f[p]) : '')).join(' × ');
  }
  // 360 -> "2³ × 3² × 5 = 360", but 5 -> "5"
  function feq(n) { const f = fstr(n); return f === String(n) ? f : f + ' = ' + n; }
  // A random number made of `count` primes from `primes`, at most `max`.
  function composite(primes, count, max) {
    for (;;) {
      let n = 1;
      for (let k = 0; k < count; k++) n *= pick(primes);
      if (n <= max) return n;
    }
  }

  // Reads "2^2 × 3", "2*2*3", "2² x 3" or "2 2 3" as [{ base, exp }], or null if it can't.
  function parseFactors(s) {
    s = String(s).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, m => '^' + m.split('').map(c => SUP.indexOf(c)).join(''));
    const tokens = s.split(/[×xX*·.,\s]+/).filter(Boolean);
    if (!tokens.length) return null;
    const out = [];
    for (const t of tokens) {
      const m = t.match(/^(\d+)(?:\^(\d+))?$/);
      if (!m) return null;
      out.push({ base: Number(m[1]), exp: Number(m[2] || 1) });
    }
    return out;
  }
  // Reads "36", "-4", "3/4", "2.5", "36 min" as a number (NaN if it can't).
  function parseNumber(s) {
    s = String(s).trim().replace(/[\s,]/g, '').replace(/−/g, '-').replace(/[a-z]+\.?$/i, '');
    const f = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (f) return Number(f[1]) / Number(f[2]);
    return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : NaN;
  }

  // -3 -> "−3" (a proper minus sign)
  function num(n) { return n < 0 ? '−' + -n : String(n); }
  // frac(-6, 4) -> "−3/2", frac(8, 4) -> "2"
  function frac(n, d = 1) {
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d) || 1;
    n /= g; d /= g;
    return d === 1 ? num(n) : num(n) + '/' + d;
  }
  // poly([2, -3, 1]) -> "2x² − 3x + 1". Also takes [coefficient, power] pairs, in the order to show:
  // poly([[3, 0], [-7, 1], [4, 2]]) -> "3 − 7x + 4x²"
  function poly(terms, v = 'x') {
    if (!Array.isArray(terms[0])) terms = terms.map((c, i) => [c, terms.length - 1 - i]);
    let out = '';
    for (const [c, p] of terms) {
      if (!c) continue;
      const a = Math.abs(c);
      const body = (a === 1 && p > 0 ? '' : a) + (p === 0 ? '' : p === 1 ? v : v + sup(p));
      out += out ? (c < 0 ? ' − ' : ' + ') + body : (c < 0 ? '−' : '') + body;
    }
    return out || '0';
  }

  // An SVG graph of y = f(x) for -5 ≤ x ≤ 5. The y-scale fits the curve between lo and hi,
  // so pass the part near the zeroes to make it easy to see.
  function graph(f, lo = -3.5, hi = 3.5) {
    const W = 300, H = 200, X = x => (x + 5) / 10 * W;
    let top = 1;
    for (let x = lo; x <= hi; x += 0.05) top = Math.max(top, Math.abs(f(x)));
    top *= 1.15;
    const Y = y => H / 2 - y / top * (H / 2 - 8);
    const pts = [];
    for (let x = -5; x <= 5.001; x += 0.05) pts.push(X(x).toFixed(1) + ',' + Y(f(x)).toFixed(1));
    let ticks = '';
    for (let x = -4; x <= 4; x++) if (x) ticks += `<line x1="${X(x)}" y1="${H / 2 - 3}" x2="${X(x)}" y2="${H / 2 + 3}"/>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graph of y = p(x)">
      <defs><clipPath id="gclip"><rect width="${W}" height="${H}"/></clipPath></defs>
      <g style="stroke:var(--muted);stroke-width:1">
        <line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}"/><line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H}"/>${ticks}</g>
      <text x="${W - 12}" y="${H / 2 - 6}" style="fill:var(--muted);font-size:12px">x</text>
      <text x="${W / 2 + 6}" y="14" style="fill:var(--muted);font-size:12px">y</text>
      <polyline clip-path="url(#gclip)" points="${pts.join(' ')}" style="fill:none;stroke:var(--accent-2);stroke-width:3;stroke-linejoin:round"/>
    </svg>`;
  }

  return { ri, pick, gcd, lcm, isPrime, factor, sup, fstr, feq, composite, parseFactors, parseNumber, num, frac, poly, graph };
})();
