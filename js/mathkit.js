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

  return { ri, pick, gcd, lcm, isPrime, factor, sup, fstr, feq, composite, parseFactors, parseNumber };
})();
