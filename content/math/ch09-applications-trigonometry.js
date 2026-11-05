// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 9: Some Applications of Trigonometry
// In the syllabus: heights and distances — line of sight, angle of elevation, angle of depression.
// Problems use at most two right triangles, and only the angles 30°, 45° and 60°.
// Note: the app turns a digit after a letter or after ')' into a subscript, so write "tan 30°" (with a space)
// and never put a digit straight after ')'.
(function () {
  const R3 = Math.sqrt(3);

  // ---------- exact numbers of the form a + b√3 (a, b whole numbers), stored as [a, b]
  const val = n => n[0] + n[1] * R3;
  const ok = n => !!n && Number.isInteger(n[0]) && Number.isInteger(n[1]) && val(n) > 0.05;
  const mul3 = n => n && [3 * n[1], n[0]];                                   // n × √3
  const div3 = n => n && (n[0] % 3 ? null : [n[1], n[0] / 3]);               // n ÷ √3
  const half = n => n && (n[0] % 2 || n[1] % 2 ? null : [n[0] / 2, n[1] / 2]);
  const dbl = n => n && [2 * n[0], 2 * n[1]];
  const add = (x, y) => x && y && [x[0] + y[0], x[1] + y[1]];
  const sub = (x, y) => x && y && [x[0] - y[0], x[1] - y[1]];
  const byTan = (n, t) => t === 30 ? div3(n) : t === 45 ? n : mul3(n);       // n × tan t
  const overTan = (n, t) => t === 30 ? mul3(n) : t === 45 ? n : div3(n);     // n ÷ tan t
  const bySin = (n, t) => t === 30 ? half(n) : half(mul3(n));                // n × sin t (t = 30 or 60)
  const byCos = (n, t) => t === 30 ? half(mul3(n)) : half(n);                // n × cos t
  const overSin = (n, t) => t === 30 ? dbl(n) : div3(dbl(n));                // n ÷ sin t
  const overCos = (n, t) => t === 30 ? div3(dbl(n)) : dbl(n);                // n ÷ cos t
  const TAN = { 30: '1/√3', 45: '1', 60: '√3' }, SIN = { 30: '1/2', 60: '√3/2' }, COS = { 30: '√3/2', 60: '1/2' };

  // [7, 7] -> "7(√3 + 1)", [0, 5] -> "5√3", [−75, 75] -> "75(√3 − 1)", [12, 0] -> "12"
  function plain(mk, a, b) {
    if (!b) return mk.num(a);
    const r = (Math.abs(b) === 1 ? '' : Math.abs(b)) + '√3';
    if (!a) return (b < 0 ? '−' : '') + r;
    if (b > 0) return `${r} ${a < 0 ? '−' : '+'} ${Math.abs(a)}`;
    return a > 0 ? `${a} − ${r}` : `−${-a} − ${r}`;
  }
  function S(mk, n) {
    const [a, b] = n, g = a && b ? mk.gcd(a, b) : 1;
    return g > 1 ? `${g}(${plain(mk, a / g, b / g)})` : plain(mk, a, b);
  }
  const P = (mk, n) => n[0] && n[1] ? `(${S(mk, n)})` : S(mk, n);
  // A known length: whole number (mostly) or k√3.
  const given = (mk, lo, hi, surdP = 0.3) => { const k = mk.ri(lo, hi); return Math.random() < surdP ? [0, k] : [k, 0]; };

  // ---------- worked-step text
  function timesTan(mk, n, t) {
    const r = byTan(n, t);
    if (t === 45) return `${P(mk, n)} × 1 = ${S(mk, r)}`;
    if (t === 60) return `${P(mk, n)} × √3 = ${S(mk, r)}`;
    return `${P(mk, n)} × 1/√3 = ` + (n[1] ? S(mk, r) : `${n[0]}/√3 = ${n[0]}√3/3 = ${S(mk, r)}`);
  }
  function overTanText(mk, n, t) {
    const r = overTan(n, t);
    if (t === 45) return `${P(mk, n)} ÷ 1 = ${S(mk, r)}`;
    if (t === 30) return `${P(mk, n)} ÷ (1/√3) = ${P(mk, n)} × √3 = ${S(mk, r)}`;
    return `${P(mk, n)} ÷ √3 = ` + (n[1] ? S(mk, r) : `${n[0]}√3/3 = ${S(mk, r)}`);
  }

  // ---------- turn an answer into a typed field (whole number) or a multiple-choice question (has √3)
  function finish(mk, o) {
    const unit = o.unit || 'm';
    if (!o.ans[1]) return { q: o.q, svg: o.svg, fields: [{ label: `${o.label} (${unit})`, answer: o.ans[0] }], hint: o.hint, steps: o.steps };
    const right = `${S(mk, o.ans)} ${unit}`;
    const a = o.ans;
    const pool = [...(o.wrong || []), [a[1], a[0]], dbl(a), mul3(a), div3(a), half(a), [a[0] + a[1], 0], [a[0], a[1] + 1], [a[0] + 2, a[1]]];
    const seen = new Set([right]), opts = [right];
    for (const n of pool) {
      if (!ok(n) || opts.length === 4) continue;
      const t = `${S(mk, n)} ${unit}`;
      if (!seen.has(t)) { seen.add(t); opts.push(t); }
    }
    const order = opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);
    return { q: o.q, svg: o.svg, choices: order.map(x => x.t), answer: order.findIndex(x => x.k === 0), steps: o.steps };
  }

  // ---------- diagrams. spec: segs [{a:[x,y], b:[x,y], k: kind, label, side}], arcs [{v, p1, p2, label, r}], right [{v, p1, p2}]
  const STY = {
    obj: 'stroke:var(--text);stroke-width:4;stroke-linecap:round',
    obj2: 'stroke:var(--gold);stroke-width:4;stroke-linecap:round',
    ground: 'stroke:var(--muted);stroke-width:2',
    sight: 'stroke:var(--accent-2);stroke-width:2.5',
    slant: 'stroke:var(--accent-2);stroke-width:3.5;stroke-linecap:round',
    hor: 'stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4'
  };
  function draw(spec) {
    const pts = [];
    spec.segs.forEach(g => pts.push(g.a, g.b));
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
    const W = 320, pad = 46, wx = Math.max(maxx - minx, 1e-6), wy = Math.max(maxy - miny, 1e-6);
    const s = Math.min((W - 2 * pad) / wx, (210 - 2 * pad) / wy);
    const H = Math.round(wy * s + 2 * pad), ox = (W - wx * s) / 2;
    const T = p => [ox + (p[0] - minx) * s, pad + (maxy - p[1]) * s];
    const unit = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
    const f = x => x.toFixed(1);
    let lines = '', labels = '', arcs = '';
    for (const g of spec.segs) {
      const A = T(g.a), B = T(g.b);
      lines += `<line x1="${f(A[0])}" y1="${f(A[1])}" x2="${f(B[0])}" y2="${f(B[1])}" style="${STY[g.k]}"/>`;
      if (g.label) {
        const [ux, uy] = unit(A, B), side = g.side || 1;
        const mx = (A[0] + B[0]) / 2 + uy * 16 * side, my = (A[1] + B[1]) / 2 - ux * 16 * side;
        labels += `<text x="${f(mx)}" y="${f(my + 4)}" text-anchor="middle" style="fill:${g.label === '?' ? 'var(--gold)' : 'var(--text)'};font-size:13px;font-weight:700">${g.label}</text>`;
      }
    }
    for (const c of spec.arcs || []) {
      const V = T(c.v), u1 = unit(V, T(c.p1)), u2 = unit(V, T(c.p2)), r = c.r || 22;
      const cross = u1[0] * u2[1] - u1[1] * u2[0];
      arcs += `<path d="M ${f(V[0] + r * u1[0])} ${f(V[1] + r * u1[1])} A ${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${f(V[0] + r * u2[0])} ${f(V[1] + r * u2[1])}" style="fill:none;stroke:var(--gold);stroke-width:1.5"/>`;
      const bx = u1[0] + u2[0], by = u1[1] + u2[1], bl = Math.hypot(bx, by) || 1;
      arcs += `<text x="${f(V[0] + (r + 15) * bx / bl)}" y="${f(V[1] + (r + 15) * by / bl + 4)}" text-anchor="middle" style="fill:var(--gold);font-size:12px;font-weight:700">${c.label}</text>`;
    }
    for (const q of spec.right || []) {
      const V = T(q.v), u1 = unit(V, T(q.p1)), u2 = unit(V, T(q.p2)), k = 8;
      arcs += `<path d="M ${f(V[0] + k * u1[0])} ${f(V[1] + k * u1[1])} L ${f(V[0] + k * u1[0] + k * u2[0])} ${f(V[1] + k * u1[1] + k * u2[1])} L ${f(V[0] + k * u2[0])} ${f(V[1] + k * u2[1])}" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>`;
    }
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Diagram of the problem">${lines}${arcs}${labels}</svg>`;
  }
  // One upright object of height h at x = 0, observer on the ground at x = −d.
  function oneTri(h, d, t, hLab, dLab, slantLab) {
    return draw({
      segs: [{ a: [-d * 1.08, 0], b: [d * 0.08, 0], k: 'ground' }, { a: [-d, 0], b: [0, 0], k: 'hor', label: dLab, side: -1 },
        { a: [0, 0], b: [0, h], k: 'obj', label: hLab, side: -1 }, { a: [-d, 0], b: [0, h], k: slantLab !== undefined ? 'slant' : 'sight', label: slantLab, side: 1 }],
      arcs: [{ v: [-d, 0], p1: [0, 0], p2: [0, h], label: t + '°' }],
      right: [{ v: [0, 0], p1: [-d, 0], p2: [0, h] }]
    });
  }
  // Looking down from the top of a height h at x = 0 to an object at x = −d.
  function depTri(h, d, t, hLab, dLab) {
    return draw({
      segs: [{ a: [-d * 1.08, 0], b: [d * 0.08, 0], k: 'ground' }, { a: [-d, 0], b: [0, 0], k: 'hor', label: dLab, side: -1 },
        { a: [0, 0], b: [0, h], k: 'obj', label: hLab, side: -1 }, { a: [0, h], b: [-d, h], k: 'hor' }, { a: [0, h], b: [-d, 0], k: 'sight' }],
      arcs: [{ v: [0, h], p1: [-d, h], p2: [-d, 0], label: t + '°', r: 26 }],
      right: [{ v: [0, 0], p1: [-d, 0], p2: [0, h] }]
    });
  }

  const OBJ = ['tower', 'tree', 'pole', 'building', 'flagpole', 'minaret'];
  const DEP = [['cliff', 'boat'], ['lighthouse', 'ship'], ['tower', 'car'], ['building', 'scooter'], ['hill', 'hut']];

  SWG.addChapter('math', {
    id: 'math-ch09',
    number: 9,
    title: 'Some Applications of Trigonometry',
    icon: '🗼',

    topics: {
      basics: 'Line of Sight & Angles',
      elev: 'Angle of Elevation',
      dep: 'Angle of Depression',
      two: 'Two-Triangle Problems'
    },

    summary: [
      'The line of sight is the line from the eye of the observer to the object being viewed.',
      'Angle of elevation: the angle between the horizontal and the line of sight when the object is ABOVE eye level (you look up).',
      'Angle of depression: the angle between the horizontal and the line of sight when the object is BELOW eye level (you look down).',
      'The angle of elevation of A seen from B equals the angle of depression of B seen from A (alternate angles, because the horizontals are parallel).',
      'Draw the figure, mark the right angle, then use tan θ = height ÷ horizontal distance. Use sin θ or cos θ when a slanting length (string, ladder, rope) is involved.',
      'Values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3; sin 30° = 1/2, sin 60° = √3/2; cos 30° = √3/2, cos 60° = 1/2. Use √3 ≈ 1.732 only if asked.',
      'As you walk towards an object, its angle of elevation increases. The higher the sun, the shorter the shadow.',
      'If the observer has a height (eye level), subtract it from the height of the object before using the triangle.',
      'Two-triangle problems: write one equation from each right triangle, then solve them together (often by putting one into the other).'
    ],

    flashcards: [
      { topic: 'basics', front: 'What is the line of sight?', back: 'The line drawn from the eye of the observer to the point on the object being viewed.' },
      { topic: 'basics', front: 'What is the angle of elevation?', back: 'The angle between the horizontal line (at eye level) and the line of sight, when the object is ABOVE eye level.\nYou raise your head to look at it.' },
      { topic: 'basics', front: 'What is the angle of depression?', back: 'The angle between the horizontal line (at eye level) and the line of sight, when the object is BELOW eye level.\nYou lower your head to look at it.' },
      { topic: 'basics', front: 'From the top of a cliff, the angle of depression of a boat is 30°. What is the angle of elevation of the cliff top from the boat?', back: '30°.\nThe horizontal at the top is parallel to the ground, so the two angles are alternate angles and are equal.' },
      { topic: 'basics', front: 'Which ratio do you use for height and horizontal distance?', back: 'tan θ = height ÷ horizontal distance\n(opposite ÷ adjacent)' },
      { topic: 'basics', front: 'Which ratio do you use with a slanting length (kite string, ladder, rope)?', back: 'sin θ = height ÷ slanting length\ncos θ = horizontal distance ÷ slanting length' },
      { topic: 'basics', front: 'tan 30°, tan 45°, tan 60°', back: 'tan 30° = 1/√3\ntan 45° = 1\ntan 60° = √3' },
      { topic: 'basics', front: 'sin and cos of 30°, 45°, 60°', back: 'sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2\ncos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2' },
      { topic: 'basics', front: 'How do you simplify 30/√3?', back: 'Multiply top and bottom by √3:\n30/√3 = 30√3/3 = 10√3' },
      { topic: 'basics', front: 'What happens to the angle of elevation as you walk towards a tower?', back: 'It increases. (Walking away, it decreases.)' },
      { topic: 'basics', front: 'What happens to a shadow as the sun rises higher?', back: 'It gets shorter. (Higher sun = bigger angle of elevation of the sun = shorter shadow.)\nAt 45°, the shadow equals the height.' },
      { topic: 'basics', front: 'An observer is 1.5 m tall. How do you use her height?', back: 'The angle is measured from her EYES, 1.5 m above the ground.\nUse (height of object − 1.5) as the height in the triangle, then add 1.5 back if you find the object\'s height.' },

      { topic: 'elev', front: 'A tower stands on the ground. From a point 15 m from its foot, the angle of elevation of the top is 60°. Find its height.', back: 'tan 60° = h/15\n√3 = h/15\nh = 15√3 m' },
      { topic: 'elev', front: 'The angle of elevation of the top of a tower from a point 30 m from its foot is 30°. Find the height.', back: 'tan 30° = h/30\n1/√3 = h/30\nh = 30/√3 = 10√3 m' },
      { topic: 'elev', front: 'An observer 1.5 m tall is 28.5 m from a chimney. The angle of elevation of its top from her eyes is 45°. Find the height of the chimney.', back: 'tan 45° = (h − 1.5)/28.5\n1 = (h − 1.5)/28.5\nh − 1.5 = 28.5 → h = 30 m' },
      { topic: 'elev', front: 'A 20 m rope is tied from the top of a vertical pole to the ground and makes 30° with the ground. Find the height of the pole.', back: 'sin 30° = h/20\n1/2 = h/20\nh = 10 m' },
      { topic: 'elev', front: 'A kite is flying 60 m high. The string makes 60° with the ground. Find the length of the string.', back: 'sin 60° = 60/L\n√3/2 = 60/L\nL = 120/√3 = 40√3 m' },
      { topic: 'elev', front: 'A tree breaks. The top touches the ground 8 m from the foot, making 30° with the ground. Find the original height of the tree.', back: 'Standing part: tan 30° = s/8 → s = 8/√3\nBroken part: cos 30° = 8/b → b = 16/√3\nHeight = s + b = 24/√3 = 8√3 m' },
      { topic: 'elev', front: 'Slides: one has its top 1.5 m high at 30° to the ground; another is 3 m high at 60°. Find their lengths.', back: 'sin 30° = 1.5/L → L = 3 m\nsin 60° = 3/L → L = 6/√3 = 2√3 m' },
      { topic: 'elev', front: 'An electrician must reach 1.3 m below the top of a 5 m pole using a ladder at 60° to the ground. Find the ladder length and how far its foot is from the pole.', back: 'Height to reach = 5 − 1.3 = 3.7 m\nsin 60° = 3.7/L → L = 7.4/√3 ≈ 4.28 m\ntan 60° = 3.7/d → d = 3.7/√3 ≈ 2.14 m' },
      { topic: 'elev', front: 'From a point on the ground, the angles of elevation of the bottom and top of a tower on a 20 m building are 45° and 60°. Find the height of the tower.', back: 'Distance: tan 45° = 20/d → d = 20 m\nTotal height: tan 60° = H/20 → H = 20√3\nTower = 20√3 − 20 = 20(√3 − 1) m' },
      { topic: 'elev', front: 'A flagstaff stands on a 10 m building. From P, the angles of elevation of the building top and flagstaff top are 30° and 45°. Find the flagstaff and the distance of P.', back: 'tan 30° = 10/d → d = 10√3 m\ntan 45° = (10 + f)/d → 10 + f = 10√3\nf = 10(√3 − 1) m ≈ 7.32 m' },
      { topic: 'elev', front: 'A 1.6 m statue stands on a pedestal. From a point, the angles of elevation of the statue top and pedestal top are 60° and 45°. Find the pedestal height h.', back: 'tan 45° = h/d → d = h\ntan 60° = (h + 1.6)/h → h√3 = h + 1.6\nh = 1.6/(√3 − 1) = 0.8(√3 + 1) m' },
      { topic: 'elev', front: 'The angle of elevation of a building top from the foot of a 50 m tower is 30°, and of the tower top from the foot of the building is 60°. Find the building height.', back: 'tan 60° = 50/d → d = 50/√3\ntan 30° = h/d → h = d/√3 = 50/3 m = 16⅔ m' },

      { topic: 'dep', front: 'From the top of a 20 m cliff, the angle of depression of a boat is 30°. How far is the boat from the foot?', back: 'Angle of elevation from the boat = 30°\ntan 30° = 20/d\nd = 20√3 m' },
      { topic: 'dep', front: 'From the top of a 7 m building, the angle of elevation of a cable tower top is 60° and the angle of depression of its foot is 45°. Find the tower height.', back: 'Depression 45°: distance = 7 m\nPart above eye level: tan 60° = x/7 → x = 7√3\nTower = 7 + 7√3 = 7(√3 + 1) m' },
      { topic: 'dep', front: 'From the top of a 75 m lighthouse, the angles of depression of two ships (one behind the other) are 30° and 45°. Find the distance between them.', back: 'Nearer ship (45°): 75 m\nFarther ship (30°): 75√3 m\nDistance = 75√3 − 75 = 75(√3 − 1) m' },
      { topic: 'dep', front: 'From a point on a bridge 3 m above a river, the angles of depression of the two banks (on opposite sides) are 30° and 45°. Find the width of the river.', back: 'One side: 3/tan 30° = 3√3 m\nOther side: 3/tan 45° = 3 m\nWidth = 3√3 + 3 = 3(√3 + 1) m' },
      { topic: 'dep', front: 'From the top of a tall building, the angles of depression of the top and bottom of an 8 m building are 30° and 45°. Find the height H of the tall building.', back: 'Bottom (45°): distance d = H\nTop (30°): tan 30° = (H − 8)/d → H − 8 = H/√3\nH = 8√3/(√3 − 1) = 4(3 + √3) m\nDistance = 4(3 + √3) m too' },
      { topic: 'dep', front: 'A man on a tower sees a car at angle of depression 30°. Six seconds later it is 60°. How much longer until the car reaches the tower?', back: 'Height h. Distances: h√3 and h/√3\nIn 6 s it covers h√3 − h/√3 = 2h/√3\nIt still has h/√3 left = half of that → 3 seconds' },

      { topic: 'two', front: 'The shadow of a tower is 40 m longer when the sun\'s altitude is 30° than when it is 60°. Find the height.', back: 'Shorter shadow x: tan 60° = h/x → h = x√3\nLonger: tan 30° = h/(x + 40) → h√3 = x + 40\n3x = x + 40 → x = 20\nh = 20√3 m' },
      { topic: 'two', front: 'Walking towards a tower, the angle of elevation changes from 30° to 60° after walking s m. What is the height?', back: 'Near distance x = s/2\nHeight h = x√3 = s√3/2' },
      { topic: 'two', front: 'A 1.5 m boy stands near a 30 m building. The angle of elevation of the top from his eyes changes from 30° to 60° as he walks towards it. How far did he walk?', back: 'Height above his eyes = 28.5 m\nFar: 28.5√3 m, near: 28.5/√3 m\nWalked = 28.5√3 − 28.5/√3 = 57/√3 = 19√3 m' },
      { topic: 'two', front: 'Two equal poles stand on opposite sides of an 80 m road. From a point between them, the angles of elevation are 60° and 30°. Find the height and distances.', back: 'h = x√3 and h = (80 − x)/√3\n3x = 80 − x → x = 20\nh = 20√3 m; distances 20 m and 60 m' },
      { topic: 'two', front: 'A TV tower on a canal bank: from the opposite bank the angle of elevation is 60°; from 20 m further back it is 30°. Find the height and the canal width.', back: 'h = x√3 and h√3 = x + 20\n3x = x + 20 → x = 10 m (width)\nh = 10√3 m' },
      { topic: 'two', front: 'A 1.2 m girl sees a balloon at 88.2 m height at 60°; later at 30° (moving level). How far did it travel?', back: 'Height above her eyes = 87 m\nDistances: 87/√3 = 29√3 and 87√3\nTravelled = 87√3 − 29√3 = 58√3 m' }
    ],

    quiz: [
      { topic: 'basics', q: 'The line from the eye of an observer to the object being viewed is the…', options: ['Line of sight', 'Horizontal line', 'Vertical line', 'Base line'], answer: 0, explain: 'That is the definition of line of sight.' },
      { topic: 'basics', q: 'When the object is above the observer\'s eye level, the angle between the line of sight and the horizontal is the angle of…', options: ['Depression', 'Elevation', 'Reflection', 'Rotation'], answer: 1, explain: 'You look UP: elevation.' },
      { topic: 'basics', q: 'When you look down at a boat from a cliff, the angle you measure is the angle of…', options: ['Elevation', 'Depression', 'Incidence', 'Inclination of the cliff'], answer: 1, explain: 'You look DOWN: depression.' },
      { topic: 'basics', q: 'The angle of depression of a boat from a cliff top is 30°. The angle of elevation of the cliff top from the boat is…', options: ['60°', '30°', '90°', '120°'], answer: 1, explain: 'Alternate angles are equal.' },
      { topic: 'basics', q: 'tan 60° = …', options: ['1/√3', '1', '√3', '√3/2'], answer: 2, explain: 'tan 60° = √3' },
      { topic: 'basics', q: 'sin 30° = …', options: ['1/2', '√3/2', '1/√2', '1'], answer: 0, explain: 'sin 30° = 1/2' },
      { topic: 'basics', q: 'To find the height of a tower when you know your distance from its foot, use…', options: ['sin', 'cos', 'tan', 'None of these'], answer: 2, explain: 'tan θ = height ÷ distance' },
      { topic: 'basics', q: 'To find the height of a kite from the length of its string, use…', options: ['tan', 'sin', 'cos', 'None of these'], answer: 1, explain: 'sin θ = height ÷ string length' },
      { topic: 'basics', q: 'As you walk towards a tower, the angle of elevation of its top…', options: ['Increases', 'Decreases', 'Stays the same', 'Becomes 0°'], answer: 0, explain: 'Closer → you look up more steeply.' },
      { topic: 'basics', q: 'If the height of a tower and your distance from it are both doubled, the angle of elevation…', options: ['Doubles', 'Halves', 'Stays the same', 'Becomes 90°'], answer: 2, explain: 'tan θ = 2h/2d = h/d, so θ does not change.' },
      { topic: 'basics', q: 'As the sun rises higher, the shadow of a pole…', options: ['Gets longer', 'Gets shorter', 'Stays the same', 'Points the other way'], answer: 1, explain: 'Bigger angle of the sun → shorter shadow.' },
      { topic: 'basics', q: 'A pole\'s shadow is equal to its height. The sun\'s altitude is…', options: ['30°', '45°', '60°', '90°'], answer: 1, explain: 'tan θ = 1 → θ = 45°' },
      { topic: 'basics', q: 'A pole is √3 times as tall as its shadow. The sun\'s altitude is…', options: ['30°', '45°', '60°', '90°'], answer: 2, explain: 'tan θ = √3 → θ = 60°' },
      { topic: 'basics', q: 'A shadow is √3 times as long as the pole. The sun\'s altitude is…', options: ['30°', '45°', '60°', '90°'], answer: 0, explain: 'tan θ = 1/√3 → θ = 30°' },

      { topic: 'elev', q: 'From a point 15 m from the foot of a tower, the angle of elevation of the top is 60°. The height is…', options: ['15 m', '15√3 m', '5√3 m', '30 m'], answer: 1, explain: 'h = 15 tan 60° = 15√3' },
      { topic: 'elev', q: 'From a point 30 m from the foot of a tower, the angle of elevation of the top is 30°. The height is…', options: ['10√3 m', '30√3 m', '15 m', '10 m'], answer: 0, explain: 'h = 30/√3 = 10√3' },
      { topic: 'elev', q: 'A kite is 60 m high and its string makes 60° with the ground. The string is…', options: ['40√3 m', '60√3 m', '120 m', '30√3 m'], answer: 0, explain: 'L = 60 ÷ (√3/2) = 120/√3 = 40√3' },
      { topic: 'elev', q: 'A 20 m rope from the top of a pole to the ground makes 30° with the ground. The pole is…', options: ['10 m', '10√3 m', '20 m', '40 m'], answer: 0, explain: 'h = 20 sin 30° = 10' },
      { topic: 'elev', q: 'A broken tree\'s top touches the ground 8 m from its foot at 30°. The tree\'s original height was…', options: ['8√3 m', '8 m', '16 m', '16√3 m'], answer: 0, explain: '8/√3 + 16/√3 = 24/√3 = 8√3' },
      { topic: 'elev', q: 'A slide is 1.5 m high and inclined at 30° to the ground. Its length is…', options: ['3 m', '1.5 m', '√3 m', '0.75 m'], answer: 0, explain: 'L = 1.5 ÷ sin 30° = 3' },
      { topic: 'elev', q: 'A slide is 3 m high and inclined at 60° to the ground. Its length is…', options: ['2√3 m', '6 m', '√3 m', '3√3 m'], answer: 0, explain: 'L = 3 ÷ (√3/2) = 6/√3 = 2√3' },
      { topic: 'elev', q: 'A 1.5 m observer, 28.5 m from a chimney, sees its top at 45°. The chimney is…', options: ['28.5 m', '30 m', '27 m', '31.5 m'], answer: 1, explain: '28.5 + 1.5 = 30' },
      { topic: 'elev', q: 'A 10 m ladder leans on a wall making 60° with the ground. It reaches a height of…', options: ['5 m', '5√3 m', '10√3 m', '20 m'], answer: 1, explain: '10 sin 60° = 5√3' },
      { topic: 'elev', q: 'The same 10 m ladder at 60°: its foot is how far from the wall?', options: ['5 m', '5√3 m', '10 m', '2.5 m'], answer: 0, explain: '10 cos 60° = 5' },
      { topic: 'elev', q: 'The angles of elevation of the bottom and top of a tower on a 20 m building are 45° and 60°. The tower is…', options: ['20√3 m', '20(√3 − 1) m', '20 m', '20(√3 + 1) m'], answer: 1, explain: 'd = 20, total = 20√3, tower = 20√3 − 20' },
      { topic: 'elev', q: 'A flagstaff is on a 10 m building. From P the building top is at 30° and the flagstaff top at 45°. The flagstaff is…', options: ['10(√3 − 1) m', '10√3 m', '10 m', '10(√3 + 1) m'], answer: 0, explain: 'd = 10√3, so 10 + f = 10√3' },
      { topic: 'elev', q: 'From the foot of a 50 m tower, a building top is at 30°; from the building\'s foot, the tower top is at 60°. The building is…', options: ['50/3 m', '50√3 m', '25 m', '50 m'], answer: 0, explain: 'd = 50/√3, h = d/√3 = 50/3' },
      { topic: 'elev', q: 'A 1.6 m statue is on a pedestal. Its top is at 60° and the pedestal top at 45° from a point. The pedestal is…', options: ['0.8(√3 + 1) m', '1.6 m', '0.8(√3 − 1) m', '1.6√3 m'], answer: 0, explain: 'h√3 = h + 1.6 → h = 1.6/(√3 − 1)' },

      { topic: 'dep', q: 'From the top of a 75 m lighthouse, a ship is seen at an angle of depression of 45°. The ship is how far from the lighthouse?', options: ['75 m', '75√3 m', '25√3 m', '150 m'], answer: 0, explain: 'tan 45° = 1, so distance = height' },
      { topic: 'dep', q: 'From the top of a 20 m cliff, a boat is seen at an angle of depression of 30°. Its distance from the cliff is…', options: ['20√3 m', '20/√3 m', '20 m', '40 m'], answer: 0, explain: 'd = 20 ÷ tan 30° = 20√3' },
      { topic: 'dep', q: 'From the top of a 60 m tower, a car is seen at an angle of depression of 60°. Its distance from the tower is…', options: ['20√3 m', '60√3 m', '30 m', '60 m'], answer: 0, explain: 'd = 60/√3 = 20√3' },
      { topic: 'dep', q: 'From a 75 m lighthouse, two ships on the same side are seen at 30° and 45°. The distance between them is…', options: ['75(√3 − 1) m', '75(√3 + 1) m', '75√3 m', '75 m'], answer: 0, explain: '75√3 − 75' },
      { topic: 'dep', q: 'From a bridge 3 m above a river, the banks on opposite sides are at angles of depression 30° and 45°. The river is…', options: ['3(√3 + 1) m wide', '3(√3 − 1) m wide', '3√3 m wide', '6 m wide'], answer: 0, explain: '3√3 + 3' },
      { topic: 'dep', q: 'From the top of a 7 m building, a tower top is at 60° (elevation) and its foot at 45° (depression). The tower is…', options: ['7(√3 + 1) m', '7√3 m', '14 m', '7(√3 − 1) m'], answer: 0, explain: '7 + 7√3' },
      { topic: 'dep', q: 'A car moving towards a tower is seen at depression 30°, then 6 seconds later at 60°. It reaches the tower after another…', options: ['3 s', '6 s', '12 s', '2 s'], answer: 0, explain: 'It has half as far left to go as it just travelled.' },
      { topic: 'dep', q: 'From a tall building, an 8 m building\'s top and bottom are at depressions 30° and 45°. The tall building is…', options: ['4(3 + √3) m', '8√3 m', '16 m', '4(√3 + 1) m'], answer: 0, explain: 'H − 8 = H/√3 → H = 4(3 + √3)' },

      { topic: 'two', q: 'A tower\'s shadow is 40 m longer when the sun\'s altitude is 30° than when it is 60°. The tower is…', options: ['20√3 m', '40√3 m', '20 m', '40 m'], answer: 0, explain: 'x = 20, h = 20√3' },
      { topic: 'two', q: 'A 1.5 m boy walks towards a 30 m building; the angle of elevation goes from 30° to 60°. He walked…', options: ['19√3 m', '57 m', '28.5 m', '19 m'], answer: 0, explain: '28.5√3 − 28.5/√3 = 19√3' },
      { topic: 'two', q: 'Two equal poles are on opposite sides of an 80 m road. From a point between them the angles are 60° and 30°. Each pole is…', options: ['20√3 m', '40 m', '20 m', '40√3 m'], answer: 0, explain: 'x = 20, h = 20√3' },
      { topic: 'two', q: 'In the same road problem, the point is how far from each pole?', options: ['20 m and 60 m', '40 m and 40 m', '30 m and 50 m', '10 m and 70 m'], answer: 0, explain: '3x = 80 − x → x = 20' },
      { topic: 'two', q: 'A TV tower on a canal bank is at 60° from the opposite bank and 30° from 20 m further back. The canal is…', options: ['10 m wide', '20 m wide', '10√3 m wide', '30 m wide'], answer: 0, explain: '3x = x + 20 → x = 10' },
      { topic: 'two', q: 'In the canal problem, the tower is…', options: ['10√3 m', '20√3 m', '10 m', '30 m'], answer: 0, explain: 'h = 10 tan 60°' },
      { topic: 'two', q: 'A balloon at 88.2 m is seen by a 1.2 m girl at 60°, later at 30°. It travelled…', options: ['58√3 m', '87 m', '29√3 m', '87√3 m'], answer: 0, explain: '87√3 − 29√3' },
      { topic: 'two', q: 'Walking s m towards a tower changes the angle of elevation from 30° to 60°. The height is…', options: ['s√3/2', 's√3', 's/2', '2s'], answer: 0, explain: 'x = s/2 and h = x√3' }
    ],

    // Practice: each gen(mk) makes a new problem every time. Answers with √3 become multiple choice.
    practice: [
      { topic: 'basics', gen(mk) {
        const v = mk.pick(['alt', 'alt', 'sun', 'sun', 'walk', 'shadow']);
        if (v === 'alt') {
          const t = mk.pick([20, 25, 30, 35, 40, 50, 55, 60, 65, 70]), [A, B] = mk.pick(DEP);
          const opts = [t, 90 - t, 180 - t, 90 + t].map(x => x + '°').sort(() => Math.random() - 0.5);
          return {
            q: `From the top of a ${A}, the angle of depression of a ${B} is ${t}°. What is the angle of elevation of the top of the ${A} as seen from the ${B}?`,
            svg: depTri(3, 3 / Math.tan(t * Math.PI / 180), t, '', ''),
            choices: opts, answer: opts.indexOf(t + '°'),
            steps: `The horizontal line at the top of the ${A} is parallel to the ground.\nThe angle of depression and the angle of elevation are alternate angles, so they are equal.\nAngle of elevation = ${t}°`
          };
        }
        if (v === 'sun') {
          const t = mk.pick([30, 45, 60]), k = mk.ri(2, 15), h = [3 * k, 0], sh = overTan(h, t), obj = mk.pick(['pole', 'tower', 'tree', 'flagpole']);
          return {
            q: `A ${obj} ${3 * k} m tall casts a shadow ${S(mk, sh)} m long on level ground. What is the sun's altitude (the angle of elevation of the sun)?`,
            svg: oneTri(3 * k, val(sh), '?', `${3 * k} m`, `${S(mk, sh)} m`),
            choices: ['30°', '45°', '60°', '90°'], answer: [30, 45, 60].indexOf(t),
            steps: `tan θ = height ÷ shadow = ${3 * k} ÷ ${P(mk, sh)} = ${TAN[t]}\ntan ${t}° = ${TAN[t]}, so the sun's altitude is ${t}°.`
          };
        }
        if (v === 'walk') {
          const away = Math.random() < 0.5, obj = mk.pick(OBJ);
          return {
            q: `You walk ${away ? 'away from' : 'towards'} a ${obj}. What happens to the angle of elevation of its top?`,
            choices: ['It increases', 'It decreases', 'It stays the same', 'It becomes 0°'], answer: away ? 1 : 0,
            steps: away ? 'Further away, you look up less steeply, so the angle of elevation decreases.' : 'Closer, you have to look up more steeply, so the angle of elevation increases.'
          };
        }
        const up = Math.random() < 0.5;
        return {
          q: `The sun's altitude ${up ? 'increases from 30° to 60°' : 'decreases from 60° to 30°'}. What happens to the shadow of a pole?`,
          choices: ['It gets longer', 'It gets shorter', 'It stays the same', 'It disappears'], answer: up ? 1 : 0,
          steps: `Shadow = height ÷ tan θ. tan θ ${up ? 'gets bigger' : 'gets smaller'} as θ ${up ? 'increases' : 'decreases'}, so the shadow gets ${up ? 'shorter' : 'longer'}.\n(At 30° the shadow is h√3; at 60° it is h/√3.)`
        };
      } },
      { topic: 'elev', gen(mk) {
        let t, d, h, askH, obj = mk.pick(OBJ);
        do {
          t = mk.pick([30, 45, 60]); askH = Math.random() < 0.55;
          if (askH) { d = given(mk, 4, 40); h = byTan(d, t); } else { h = given(mk, 4, 40); d = overTan(h, t); }
        } while (!ok(d) || !ok(h) || val(d) > 150 || val(h) > 150);
        const shadow = Math.random() < 0.3;
        const q = shadow
          ? (askH ? `When the sun's altitude is ${t}°, a ${obj} casts a shadow ${S(mk, d)} m long on level ground. Find the height of the ${obj}.`
            : `A ${obj} ${S(mk, h)} m tall stands on level ground. Find the length of its shadow when the sun's altitude is ${t}°.`)
          : (askH ? `A ${obj} stands vertically on level ground. From a point ${S(mk, d)} m from its foot, the angle of elevation of its top is ${t}°. Find the height of the ${obj}.`
            : `The angle of elevation of the top of a ${S(mk, h)} m tall ${obj} from a point on the ground is ${t}°. How far is the point from the foot of the ${obj}?`);
        const dName = shadow ? 'shadow' : 'distance';
        return finish(mk, {
          q, ans: askH ? h : d, label: askH ? 'Height' : shadow ? 'Shadow' : 'Distance',
          svg: oneTri(val(h), val(d), t, askH ? '?' : `${S(mk, h)} m`, askH ? `${S(mk, d)} m` : '?'),
          wrong: askH ? [overTan(d, t), byTan(d, t === 30 ? 60 : 30)] : [byTan(h, t), overTan(h, t === 30 ? 60 : 30)],
          hint: `tan ${t}° = height ÷ ${dName}, and tan ${t}° = ${TAN[t]}.`,
          steps: `tan ${t}° = height ÷ ${dName}\n` + (askH
            ? `${TAN[t]} = h ÷ ${P(mk, d)}\nh = ${timesTan(mk, d, t)} m`
            : `${TAN[t]} = ${P(mk, h)} ÷ x\nx = ${overTanText(mk, h, t)} m`)
        });
      } },
      { topic: 'dep', gen(mk) {
        let t, H, D, askD;
        const [A, B] = mk.pick(DEP);
        do {
          t = mk.pick([30, 45, 60]); askD = Math.random() < 0.6;
          if (askD) { H = given(mk, 6, 90, 0.2); D = overTan(H, t); } else { D = given(mk, 6, 90, 0.3); H = byTan(D, t); }
        } while (!ok(D) || !ok(H) || val(D) > 200 || val(H) > 200);
        return finish(mk, {
          q: askD ? `From the top of a ${S(mk, H)} m high ${A}, the angle of depression of a ${B} is ${t}°. How far is the ${B} from the foot of the ${A}?`
            : `From the top of a ${A}, the angle of depression of a ${B} ${S(mk, D)} m from its foot is ${t}°. Find the height of the ${A}.`,
          ans: askD ? D : H, label: askD ? 'Distance' : 'Height',
          svg: depTri(val(H), val(D), t, askD ? `${S(mk, H)} m` : '?', askD ? '?' : `${S(mk, D)} m`),
          wrong: askD ? [byTan(H, t), overTan(H, t === 30 ? 60 : 30)] : [overTan(D, t), byTan(D, t === 30 ? 60 : 30)],
          hint: `The angle of depression from the top equals the angle of elevation from the ${B} (alternate angles). Then use tan ${t}° = ${TAN[t]}.`,
          steps: `Angle of elevation of the top from the ${B} = ${t}° (alternate angles).\ntan ${t}° = height ÷ distance\n` + (askD
            ? `${TAN[t]} = ${P(mk, H)} ÷ x\nx = ${overTanText(mk, H, t)} m`
            : `${TAN[t]} = h ÷ ${P(mk, D)}\nh = ${timesTan(mk, D, t)} m`)
        });
      } },
      { topic: 'elev', gen(mk) {
        const v = mk.pick(['kite', 'ladder', 'rope', 'tree']);
        let t, a, b, c, o;
        if (v === 'tree') {
          do { t = mk.pick([30, 60]); a = given(mk, 3, 25, 0.3); b = byTan(a, t); c = overCos(a, t); } while (!ok(b) || !ok(c) || val(a) > 80);
          const tot = add(b, c);
          return finish(mk, {
            q: `A tree breaks in a storm. The broken part bends so that its top touches the ground ${S(mk, a)} m from the foot of the tree, making an angle of ${t}° with the ground. Find the original height of the tree.`,
            ans: tot, label: 'Height',
            svg: draw({
              segs: [{ a: [-val(a) * 0.15, 0], b: [val(a) * 1.1, 0], k: 'ground' }, { a: [0, 0], b: [val(a), 0], k: 'hor', label: `${S(mk, a)} m`, side: -1 },
                { a: [0, 0], b: [0, val(b)], k: 'obj', label: 's', side: 1 }, { a: [0, val(b)], b: [val(a), 0], k: 'slant', label: 'b', side: 1 }],
              arcs: [{ v: [val(a), 0], p1: [0, 0], p2: [0, val(b)], label: t + '°' }],
              right: [{ v: [0, 0], p1: [val(a), 0], p2: [0, val(b)] }]
            }),
            wrong: [b, c, byTan(a, 90 - t), add(b, byTan(a, 90 - t))],
            hint: `Standing part: tan ${t}° = standing ÷ ${S(mk, a)}. Broken part: cos ${t}° = ${S(mk, a)} ÷ broken. Height = standing + broken.`,
            steps: `Standing part: tan ${t}° = s ÷ ${P(mk, a)} → s = ${timesTan(mk, a, t)} m\nBroken part: cos ${t}° = ${P(mk, a)} ÷ b → b = ${P(mk, a)} ÷ ${COS[t]} = ${S(mk, c)} m\nHeight = ${S(mk, b)} + ${S(mk, c)} = ${S(mk, tot)} m`
          });
        }
        const askLen = Math.random() < 0.4, useCos = v === 'ladder' && !askLen && Math.random() < 0.5;
        do {
          t = mk.pick([30, 60]);
          if (askLen) { b = given(mk, 3, 40, 0.3); a = overSin(b, t); }
          else { a = given(mk, 4, 50, 0.25); b = useCos ? byCos(a, t) : bySin(a, t); }
        } while (!ok(a) || !ok(b) || val(a) > 120);
        // a = slanting length, b = height (or the ground distance if useCos)
        const L = { kite: ['string', 'kite'], ladder: ['ladder', 'ladder'], rope: ['rope', 'pole'] }[v];
        const q = {
          kite: askLen ? `A kite is flying at a height of ${S(mk, b)} m. Its string is tight and makes an angle of ${t}° with the ground. Find the length of the string.`
            : `A kite is flying on a ${S(mk, a)} m long string that makes an angle of ${t}° with the ground. How high is the kite?`,
          ladder: askLen ? `A ladder leans against a wall and reaches ${S(mk, b)} m up the wall. It makes an angle of ${t}° with the ground. Find the length of the ladder.`
            : useCos ? `A ${S(mk, a)} m ladder leans against a wall, making an angle of ${t}° with the ground. How far is its foot from the wall?`
              : `A ${S(mk, a)} m ladder leans against a wall, making an angle of ${t}° with the ground. How high up the wall does it reach?`,
          rope: askLen ? `A rope is stretched from the top of a ${S(mk, b)} m vertical pole to the ground, making an angle of ${t}° with the ground. Find the length of the rope.`
            : `A ${S(mk, a)} m rope is stretched from the top of a vertical pole to the ground, making an angle of ${t}° with the ground. Find the height of the pole.`
        }[v];
        const height = useCos ? bySin(a, t) : b, ground = useCos ? b : byCos(a, t);
        const fn = useCos ? 'cos' : 'sin', FV = useCos ? COS[t] : SIN[t];
        return finish(mk, {
          q, ans: askLen ? a : b, label: askLen ? 'Length' : useCos ? 'Distance' : 'Height',
          svg: oneTri(val(height), val(ground), t, useCos ? '' : askLen ? `${S(mk, b)} m` : '?', useCos ? '?' : '', askLen ? '?' : `${S(mk, a)} m`),
          wrong: askLen ? [bySin(b, t), overSin(b, 90 - t), b] : [useCos ? bySin(a, t) : byCos(a, t), byTan(a, t), overSin(a, t)],
          hint: useCos ? `cos ${t}° = distance ÷ ladder, and cos ${t}° = ${COS[t]}.` : `sin ${t}° = height ÷ ${L[0]}, and sin ${t}° = ${SIN[t]}.`,
          steps: askLen
            ? `sin ${t}° = height ÷ ${L[0]}\n${SIN[t]} = ${P(mk, b)} ÷ L\nL = ${P(mk, b)} ÷ ${SIN[t]} = ${S(mk, a)} m`
            : `${fn} ${t}° = ${useCos ? 'distance' : 'height'} ÷ ${L[0]}\n${FV} = x ÷ ${P(mk, a)}\nx = ${P(mk, a)} × ${FV} = ${S(mk, b)} m`
        });
      } },
      { topic: 'two', gen(mk) {
        const v = mk.pick(['gap', 'gapShadow', 'near', 'h3060', 'h3045', 'h4560', 'eye']);
        const obj = mk.pick(OBJ);
        const scene = (h, near, far, t1, t2, labs) => draw({
          segs: [{ a: [-far * 1.06, 0], b: [far * 0.06, 0], k: 'ground' }, { a: [-far, 0], b: [-near, 0], k: 'hor', label: labs.gap, side: -1 },
            { a: [-near, 0], b: [0, 0], k: 'hor', label: labs.near, side: -1 }, { a: [0, 0], b: [0, h], k: 'obj', label: labs.h, side: -1 },
            { a: [-far, 0], b: [0, h], k: 'sight' }, { a: [-near, 0], b: [0, h], k: 'sight' }],
          arcs: [{ v: [-far, 0], p1: [0, 0], p2: [0, h], label: t1 + '°' }, { v: [-near, 0], p1: [0, 0], p2: [0, h], label: t2 + '°' }],
          right: [{ v: [0, 0], p1: [-near, 0], p2: [0, h] }]
        });
        if (v === 'gap' || v === 'gapShadow' || v === 'near') {
          const x = mk.ri(3, 30), s = 2 * x, h = [0, x];
          const q = v === 'gapShadow'
            ? `The shadow of a ${obj} on level ground is ${s} m longer when the sun's altitude is 30° than when it is 60°. Find the height of the ${obj}.`
            : `From a point on the ground, the angle of elevation of the top of a ${obj} is 30°. On walking ${s} m towards the ${obj}, the angle of elevation becomes 60°. Find ${v === 'near' ? `the distance of the second point from the foot of the ${obj}` : `the height of the ${obj}`}.`;
          const steps = `Let the height be h m and the nearer point be x m from the foot.\nNear point: tan 60° = h ÷ x → h = x√3\nFar point: tan 30° = h ÷ (x + ${s}) → h√3 = x + ${s}\nPut h = x√3: 3x = x + ${s} → 2x = ${s} → x = ${x}\n` +
            (v === 'near' ? `The second point is ${x} m from the foot.` : `h = ${S(mk, h)} m`);
          return finish(mk, {
            q, ans: v === 'near' ? [x, 0] : h, label: v === 'near' ? 'Distance' : 'Height',
            svg: scene(val(h), x, 3 * x, 30, 60, { gap: `${s} m`, near: v === 'near' ? '?' : 'x', h: v === 'near' ? 'h' : '?' }),
            wrong: [[0, s], [x, 0], [0, 2 * s], [3 * x, 0]],
            hint: 'Use one tan equation for each point: h = x√3 and h√3 = x + (distance walked).',
            steps
          });
        }
        if (v === 'eye') {
          const m = mk.ri(5, 25), eff = 3 * m, e = mk.pick([1.2, 1.5, 1.6]), Hb = Math.round((eff + e) * 10) / 10;
          const near = [0, m], far = [0, 3 * m], gap = [0, 2 * m];
          return finish(mk, {
            q: `A ${e} m tall girl stands some distance from a ${Hb} m tall building. As she walks towards it, the angle of elevation of its top from her eyes changes from 30° to 60°. How far did she walk?`,
            ans: gap, label: 'Distance',
            svg: scene(eff, val(near), val(far), 30, 60, { gap: '?', near: '', h: `${eff} m` }),
            wrong: [[2 * eff, 0], near, far, [0, eff]],
            hint: `Use the height above her eyes: ${Hb} − ${e} = ${eff} m.`,
            steps: `Height above her eyes = ${Hb} − ${e} = ${eff} m\nFar point: tan 30° = ${eff} ÷ d1 → d1 = ${eff}√3 m\nNear point: tan 60° = ${eff} ÷ d2 → d2 = ${eff}/√3 = ${S(mk, near)} m\nDistance walked = ${eff}√3 − ${S(mk, near)} = ${S(mk, gap)} m`.replace(/d1/g, 'D').replace(/d2/g, 'x')
          });
        }
        const pair = { h3060: [30, 60], h3045: [30, 45], h4560: [45, 60] }[v];
        let h; do { h = [mk.ri(4, 40), 0]; } while (!ok(overTan(h, pair[0])) || !ok(overTan(h, pair[1])));
        const far = overTan(h, pair[0]), near = overTan(h, pair[1]), gap = sub(far, near);
        return finish(mk, {
          q: `A ${obj} is ${h[0]} m tall. From a point on the ground, the angle of elevation of its top is ${pair[0]}°. How far must you walk towards the ${obj} for the angle of elevation to become ${pair[1]}°?`,
          ans: gap, label: 'Distance',
          svg: scene(val(h), val(near), val(far), pair[0], pair[1], { gap: '?', near: '', h: `${h[0]} m` }),
          wrong: [far, near, add(far, near), mul3(gap)],
          hint: `Find both distances from the foot using tan ${pair[0]}° and tan ${pair[1]}°, then subtract.`,
          steps: `Far point: distance = ${h[0]} ÷ tan ${pair[0]}° = ${overTanText(mk, h, pair[0])} m\nNear point: distance = ${h[0]} ÷ tan ${pair[1]}° = ${overTanText(mk, h, pair[1])} m\nDistance walked = ${S(mk, far)} − ${S(mk, near)} = ${S(mk, gap)} m`
        });
      } },
      { topic: 'two', gen(mk) {
        const onTop = Math.random() < 0.4;
        let a, b, B, d, x, T;
        do {
          a = mk.pick([30, 45, 60]); b = mk.pick([30, 45, 60]); B = [mk.ri(5, 40), 0];
          if (onTop) { if (a <= b) continue; d = overTan(B, b); T = byTan(d, a); x = sub(T, B); }
          else { d = overTan(B, b); x = byTan(d, a); T = add(B, x); }
        } while (!ok(d) || !x || !ok(x) || !ok(T) || val(d) > 150 || val(T) > 200);
        if (onTop) {
          return finish(mk, {
            q: `A tower stands on top of a ${B[0]} m tall building. From a point on the ground, the angles of elevation of the bottom and the top of the tower are ${b}° and ${a}°. Find the height of the tower.`,
            ans: x, label: 'Height',
            svg: draw({
              segs: [{ a: [-val(d) * 1.08, 0], b: [val(d) * 0.08, 0], k: 'ground' }, { a: [-val(d), 0], b: [0, 0], k: 'hor', side: -1 },
                { a: [0, 0], b: [0, B[0]], k: 'obj', label: `${B[0]} m`, side: -1 }, { a: [0, B[0]], b: [0, val(T)], k: 'obj2', label: '?', side: -1 },
                { a: [-val(d), 0], b: [0, B[0]], k: 'sight' }, { a: [-val(d), 0], b: [0, val(T)], k: 'sight' }],
              arcs: [{ v: [-val(d), 0], p1: [0, 0], p2: [0, B[0]], label: b + '°', r: 26 }, { v: [-val(d), 0], p1: [0, B[0]], p2: [0, val(T)], label: a + '°', r: 50 }],
              right: [{ v: [0, 0], p1: [-val(d), 0], p2: [0, B[0]] }]
            }),
            wrong: [T, d, add(T, B)],
            hint: `First find the distance from the building using tan ${b}°. Then the total height using tan ${a}°. Tower = total − ${B[0]}.`,
            steps: `Bottom of tower: tan ${b}° = ${B[0]} ÷ d → d = ${overTanText(mk, B, b)} m\nTop of tower: tan ${a}° = (${B[0]} + x) ÷ d → ${B[0]} + x = ${timesTan(mk, d, a)}\nx = ${S(mk, T)} − ${B[0]} = ${S(mk, x)} m`
          });
        }
        const askD = Math.random() < 0.3;
        return finish(mk, {
          q: `From the top of a ${B[0]} m high building, the angle of elevation of the top of a tower is ${a}° and the angle of depression of its foot is ${b}°. Find ${askD ? 'the distance between the building and the tower' : 'the height of the tower'}.`,
          ans: askD ? d : T, label: askD ? 'Distance' : 'Height',
          svg: draw({
            segs: [{ a: [-val(d) * 0.1, 0], b: [val(d) * 1.1, 0], k: 'ground' }, { a: [0, 0], b: [0, B[0]], k: 'obj', label: `${B[0]} m`, side: 1 },
              { a: [val(d), 0], b: [val(d), val(T)], k: 'obj2', label: askD ? '' : '?', side: -1 }, { a: [0, 0], b: [val(d), 0], k: 'hor', label: askD ? '?' : '', side: -1 },
              { a: [0, B[0]], b: [val(d), B[0]], k: 'hor' }, { a: [0, B[0]], b: [val(d), val(T)], k: 'sight' }, { a: [0, B[0]], b: [val(d), 0], k: 'sight' }],
            arcs: [{ v: [0, B[0]], p1: [val(d), B[0]], p2: [val(d), val(T)], label: a + '°', r: 26 }, { v: [0, B[0]], p1: [val(d), B[0]], p2: [val(d), 0], label: b + '°', r: 26 }]
          }),
          wrong: askD ? [byTan(B, b), T, x] : [x, add(B, d), add(T, B)],
          hint: `Use the angle of depression ${b}° to find the distance. Then use ${a}° to find the part of the tower above the building top.`,
          steps: `Depression ${b}°: tan ${b}° = ${B[0]} ÷ d → d = ${overTanText(mk, B, b)} m\n` + (askD ? `The building and tower are ${S(mk, d)} m apart.`
            : `Above eye level: tan ${a}° = x ÷ d → x = ${timesTan(mk, d, a)} m\nTower = ${B[0]} + ${S(mk, x)} = ${S(mk, T)} m`)
        });
      } },
      { topic: 'dep', gen(mk) {
        const v = mk.pick(['same', 'opp', 'poles']);
        if (v === 'poles') {
          const k = mk.ri(3, 25), w = 4 * k, h = [0, k], askH = Math.random() < 0.5;
          const q = `Two poles of equal height stand on opposite sides of a ${w} m wide road. From a point on the road between them, the angles of elevation of their tops are 60° and 30°. Find ${askH ? 'the height of the poles' : 'the distance of the point from the pole seen at 60°'}.`;
          return finish(mk, {
            q, ans: askH ? h : [k, 0], label: askH ? 'Height' : 'Distance',
            svg: draw({
              segs: [{ a: [-w * 0.05, 0], b: [w * 1.05, 0], k: 'ground' }, { a: [0, 0], b: [0, k * R3], k: 'obj', label: askH ? '?' : 'h', side: 1 },
                { a: [w, 0], b: [w, k * R3], k: 'obj', label: 'h', side: -1 }, { a: [0, 0], b: [k, 0], k: 'hor', label: askH ? 'x' : '?', side: -1 },
                { a: [k, 0], b: [w, 0], k: 'hor', label: `${w} − x`, side: -1 }, { a: [k, 0], b: [0, k * R3], k: 'sight' }, { a: [k, 0], b: [w, k * R3], k: 'sight' }],
              arcs: [{ v: [k, 0], p1: [0, 0], p2: [0, k * R3], label: '60°' }, { v: [k, 0], p1: [w, 0], p2: [w, k * R3], label: '30°', r: 30 }]
            }),
            wrong: [[0, 3 * k], [k, 0], [3 * k, 0], [0, 2 * k]],
            hint: 'Let the point be x m from the pole at 60°. Then h = x√3 and h = (road − x) ÷ √3.',
            steps: `Let the point be x m from the pole seen at 60°.\ntan 60° = h ÷ x → h = x√3\ntan 30° = h ÷ (${w} − x) → h√3 = ${w} − x\nPut h = x√3: 3x = ${w} − x → 4x = ${w} → x = ${k}\n` +
              (askH ? `h = ${k}√3 m` : `The point is ${k} m from that pole (and ${3 * k} m from the other).`)
          });
        }
        let a, b, H, d1, d2;
        do { [a, b] = mk.pick([[30, 45], [30, 60], [45, 60]]); H = [mk.ri(4, 40), 0]; d1 = overTan(H, a); d2 = overTan(H, b); } while (!ok(d1) || !ok(d2));
        const same = v === 'same', ans = same ? sub(d1, d2) : add(d1, d2);
        const [T, O] = mk.pick([['lighthouse', 'ships'], ['tower', 'cars'], ['cliff', 'boats']]);
        const q = same
          ? `From the top of a ${H[0]} m ${T}, the angles of depression of two ${O}, one exactly behind the other on the same side, are ${a}° and ${b}°. Find the distance between the two ${O}.`
          : `From the top of a ${H[0]} m ${T}, the angles of depression of two ${O} on opposite sides of it are ${a}° and ${b}°. Find the distance between the two ${O}.`;
        const x1 = val(d1), x2 = val(d2), Hv = H[0];
        return finish(mk, {
          q, ans, label: 'Distance',
          svg: draw({
            segs: [{ a: [-x1 * 1.08, 0], b: [same ? x1 * 0.08 : x2 * 1.08, 0], k: 'ground' }, { a: [0, 0], b: [0, Hv], k: 'obj', label: `${Hv} m`, side: same ? -1 : 1 },
              { a: [0, Hv], b: [-x1, Hv], k: 'hor' }, { a: [0, Hv], b: [-x1, 0], k: 'sight' },
              same ? { a: [-x1, 0], b: [-x2, 0], k: 'hor', label: '?', side: -1 } : { a: [-x1, 0], b: [x2, 0], k: 'hor', label: '?', side: -1 },
              same ? { a: [0, Hv], b: [-x2, 0], k: 'sight' } : { a: [0, Hv], b: [x2, 0], k: 'sight' },
              ...(same ? [] : [{ a: [0, Hv], b: [x2, Hv], k: 'hor' }])],
            arcs: same
              ? [{ v: [0, Hv], p1: [-x1, Hv], p2: [-x1, 0], label: a + '°', r: 50 }, { v: [0, Hv], p1: [-x1, Hv], p2: [-x2, 0], label: b + '°', r: 24 }]
              : [{ v: [0, Hv], p1: [-x1, Hv], p2: [-x1, 0], label: a + '°', r: 26 }, { v: [0, Hv], p1: [x2, Hv], p2: [x2, 0], label: b + '°', r: 26 }]
          }),
          wrong: [same ? add(d1, d2) : sub(d1, d2), d1, d2, H],
          hint: `Angles of depression = angles of elevation from the ${O}. Find each distance from the foot with tan, then ${same ? 'subtract' : 'add'}.`,
          steps: `At ${a}°: distance = ${Hv} ÷ tan ${a}° = ${overTanText(mk, H, a)} m\nAt ${b}°: distance = ${Hv} ÷ tan ${b}° = ${overTanText(mk, H, b)} m\n` +
            `${same ? 'Same side, so subtract' : 'Opposite sides, so add'}: ${S(mk, d1)} ${same ? '−' : '+'} ${S(mk, d2)} = ${S(mk, ans)} m`
        });
      } }
    ],

    match: [
      { title: 'Key Words', pairs: [
        ['Line of sight', 'Line from the eye to the object'],
        ['Angle of elevation', 'Object above eye level: you look up'],
        ['Angle of depression', 'Object below eye level: you look down'],
        ['Elevation from B = depression from A', 'Alternate angles'],
        ['Walking towards a tower', 'Angle of elevation increases'],
        ['Sun rises higher', 'Shadow gets shorter']
      ] },
      { title: 'Values', pairs: [
        ['tan 30°', '1/√3'],
        ['tan 45°', '1'],
        ['tan 60°', '√3'],
        ['sin 30°', '1/2'],
        ['sin 60°', '√3/2'],
        ['cos 45°', '1/√2']
      ] },
      { title: 'Problem → Answer', pairs: [
        ['Tower: 15 m away, elevation 60°', '15√3 m'],
        ['Kite 60 m high, string at 60°', 'String 40√3 m'],
        ['20 m rope at 30° to the ground', 'Pole 10 m'],
        ['Shadow 40 m longer at 30° than at 60°', 'Tower 20√3 m'],
        ['75 m lighthouse, ships at 30° and 45°', '75(√3 − 1) m apart'],
        ['7 m building: 60° up, 45° down', 'Tower 7(√3 + 1) m']
      ] },
      { title: 'Which Formula?', pairs: [
        ['Height from distance d', 'h = d tan θ'],
        ['Distance from height h', 'd = h ÷ tan θ'],
        ['Kite height from string L', 'h = L sin θ'],
        ['Ladder foot from wall, ladder L', 'd = L cos θ'],
        ['String length from kite height h', 'L = h ÷ sin θ'],
        ['Observer is 1.5 m tall', 'Use (height − 1.5) in the triangle']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 2, q: 'A tower stands vertically on the ground. From a point on the ground 15 m away from its foot, the angle of elevation of its top is 60°. Find the height of the tower.',
        keypoints: [
          { text: 'tan 60° = h/15', kw: ['tan'] },
          { text: 'h = 15√3 m', kw: ['15√3|15 √3|25.9'] }
        ],
        model: 'Let the height be h m.\ntan 60° = h/15\n√3 = h/15\nh = 15√3 m (≈ 25.98 m)' },
      { marks: 2, q: 'The angle of elevation of the top of a tower from a point on the ground 30 m away from its foot is 30°. Find the height of the tower.',
        keypoints: [
          { text: 'tan 30° = h/30', kw: ['tan'] },
          { text: 'h = 30/√3 = 10√3 m', kw: ['10√3|10 √3|17.3'] }
        ],
        model: 'tan 30° = h/30\n1/√3 = h/30\nh = 30/√3 = 30√3/3 = 10√3 m' },
      { marks: 2, q: 'A circus artist climbs a 20 m long rope tied from the top of a vertical pole to the ground. The rope makes an angle of 30° with the ground. Find the height of the pole.',
        keypoints: [
          { text: 'sin 30° = h/20', kw: ['sin'] },
          { text: 'h = 10 m', kw: ['10'] }
        ],
        model: 'sin 30° = h/20\n1/2 = h/20\nh = 10 m' },
      { marks: 2, q: 'A kite is flying at a height of 60 m. The string attached to it is tied to the ground and makes an angle of 60° with the ground. Find the length of the string, assuming there is no slack.',
        keypoints: [
          { text: 'sin 60° = 60/L', kw: ['sin'] },
          { text: 'L = 120/√3 = 40√3 m', kw: ['40√3|40 √3|69.2'] }
        ],
        model: 'sin 60° = 60/L\n√3/2 = 60/L\nL = 120/√3 = 40√3 m' },
      { marks: 2, q: 'From the top of a 60 m high tower, the angle of depression of a car on the road is 60°. How far is the car from the foot of the tower?',
        keypoints: [
          { text: 'Angle of elevation from the car = 60° (alternate angles)', kw: ['alternate|60'] },
          { text: 'd = 60/√3 = 20√3 m', kw: ['20√3|20 √3|34.6'] }
        ],
        model: 'Angle of elevation of the top from the car = 60° (alternate angles)\ntan 60° = 60/d\n√3 = 60/d\nd = 60/√3 = 20√3 m' },
      { marks: 3, q: 'A contractor puts up two slides in a park. For children below 5, the top of the slide is 1.5 m high and it is inclined at 30° to the ground. For elder children, it is 3 m high and inclined at 60°. Find the length of each slide.',
        keypoints: [
          { text: 'sin 30° = 1.5/L → L = 3 m', kw: ['3 m|3m|= 3'] },
          { text: 'sin 60° = 3/L → L = 6/√3', kw: ['6/√3'] },
          { text: 'L = 2√3 m', kw: ['2√3|2 √3|3.46'] }
        ],
        model: 'First slide: sin 30° = 1.5/L → 1/2 = 1.5/L → L = 3 m\nSecond slide: sin 60° = 3/L → √3/2 = 3/L → L = 6/√3 = 2√3 m' },
      { marks: 3, q: 'A tree breaks due to a storm and the broken part bends so that its top touches the ground, making an angle of 30° with it. The distance between the foot of the tree and the point where the top touches the ground is 8 m. Find the height of the tree.',
        keypoints: [
          { text: 'Standing part: tan 30° = s/8 → s = 8/√3', kw: ['8/√3'] },
          { text: 'Broken part: cos 30° = 8/b → b = 16/√3', kw: ['16/√3'] },
          { text: 'Height = 24/√3 = 8√3 m', kw: ['8√3|8 √3|13.8'] }
        ],
        model: 'Standing part s: tan 30° = s/8 → s = 8/√3 m\nBroken part b: cos 30° = 8/b → b = 16/√3 m\nHeight = s + b = 24/√3 = 8√3 m' },
      { marks: 3, q: 'From a point on the ground, the angles of elevation of the bottom and the top of a transmission tower fixed at the top of a 20 m high building are 45° and 60°. Find the height of the tower.',
        keypoints: [
          { text: 'tan 45° = 20/d → d = 20 m', kw: ['45'] },
          { text: 'tan 60° = (20 + h)/20', kw: ['60'] },
          { text: 'h = 20(√3 − 1) m', kw: ['√3 − 1|√3-1|√3 - 1|14.6'] }
        ],
        model: 'tan 45° = 20/d → d = 20 m\ntan 60° = (20 + h)/20\n20 + h = 20√3\nh = 20√3 − 20 = 20(√3 − 1) m ≈ 14.64 m' },
      { marks: 3, q: 'A statue 1.6 m tall stands on a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and from the same point the angle of elevation of the top of the pedestal is 45°. Find the height of the pedestal.',
        keypoints: [
          { text: 'tan 45° = h/d → d = h', kw: ['d = h|d=h'] },
          { text: 'tan 60° = (h + 1.6)/h → h√3 = h + 1.6', kw: ['1.6'] },
          { text: 'h = 1.6/(√3 − 1) = 0.8(√3 + 1) m', kw: ['0.8|2.18|2.19'] }
        ],
        model: 'Let the pedestal be h m and the point d m away.\ntan 45° = h/d → d = h\ntan 60° = (h + 1.6)/d → h√3 = h + 1.6\nh(√3 − 1) = 1.6\nh = 1.6/(√3 − 1) = 1.6(√3 + 1)/2 = 0.8(√3 + 1) m' },
      { marks: 3, q: 'The angle of elevation of the top of a building from the foot of a tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50 m high, find the height of the building.',
        keypoints: [
          { text: 'tan 60° = 50/d → d = 50/√3', kw: ['50/√3'] },
          { text: 'tan 30° = h/d', kw: ['30'] },
          { text: 'h = 50/3 m = 16⅔ m', kw: ['50/3|16.6|16⅔|16 2/3'] }
        ],
        model: 'Let the distance be d.\nTower: tan 60° = 50/d → d = 50/√3 m\nBuilding: tan 30° = h/d → h = d/√3 = 50/3 m = 16⅔ m' },
      { marks: 3, q: 'As observed from the top of a 75 m high lighthouse, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.',
        keypoints: [
          { text: 'Nearer ship: 75/tan 45° = 75 m', kw: ['75'] },
          { text: 'Farther ship: 75/tan 30° = 75√3 m', kw: ['75√3|75 √3'] },
          { text: 'Distance = 75(√3 − 1) m', kw: ['√3 − 1|√3-1|√3 - 1|54.9'] }
        ],
        model: 'Nearer ship (45°): tan 45° = 75/x → x = 75 m\nFarther ship (30°): tan 30° = 75/y → y = 75√3 m\nDistance = 75√3 − 75 = 75(√3 − 1) m' },
      { marks: 3, q: 'The shadow of a tower standing on level ground is found to be 40 m longer when the sun\'s altitude is 30° than when it is 60°. Find the height of the tower.',
        keypoints: [
          { text: 'tan 60° = h/x → h = x√3', kw: ['x√3'] },
          { text: 'tan 30° = h/(x + 40) → h√3 = x + 40', kw: ['40'] },
          { text: 'x = 20, h = 20√3 m', kw: ['20√3|20 √3|34.6'] }
        ],
        model: 'Let the shorter shadow be x m.\ntan 60° = h/x → h = x√3\ntan 30° = h/(x + 40) → h√3 = x + 40\nSo 3x = x + 40 → x = 20\nh = 20√3 m' },
      { marks: 5, q: 'Two poles of equal heights are standing opposite each other on either side of a road which is 80 m wide. From a point between them on the road, the angles of elevation of the tops of the poles are 60° and 30°. Find the height of the poles and the distances of the point from the poles.',
        keypoints: [
          { text: 'tan 60° = h/x → h = x√3', kw: ['x√3'] },
          { text: 'tan 30° = h/(80 − x) → h√3 = 80 − x', kw: ['80'] },
          { text: '3x = 80 − x → x = 20', kw: ['20'] },
          { text: 'h = 20√3 m', kw: ['20√3|20 √3|34.6'] },
          { text: 'Distances 20 m and 60 m', kw: ['60'] }
        ],
        model: 'Let the point be x m from the first pole and (80 − x) m from the second.\ntan 60° = h/x → h = x√3 …(1)\ntan 30° = h/(80 − x) → h√3 = 80 − x …(2)\nPut (1) in (2): 3x = 80 − x → x = 20\nh = 20√3 m ≈ 34.64 m\nThe point is 20 m from one pole and 60 m from the other.' },
      { marks: 5, q: 'From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.',
        keypoints: [
          { text: 'Depression 45°: distance = 7 m', kw: ['45'] },
          { text: 'tan 60° = x/7 → x = 7√3', kw: ['7√3|7 √3'] },
          { text: 'Height = 7 + 7√3 = 7(√3 + 1) m', kw: ['√3 + 1|√3+1|1 + √3|19.1'] }
        ],
        model: 'Let the distance between the building and the tower be d.\nAngle of depression of the foot = 45°: tan 45° = 7/d → d = 7 m\nLet the part of the tower above the building top be x.\ntan 60° = x/7 → x = 7√3 m\nHeight of tower = 7 + 7√3 = 7(√3 + 1) m ≈ 19.12 m' },
      { marks: 5, q: 'A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. Find the distance he walked.',
        keypoints: [
          { text: 'Height above his eyes = 28.5 m', kw: ['28.5'] },
          { text: 'Far: 28.5√3 m', kw: ['28.5√3|28.5 √3'] },
          { text: 'Near: 28.5/√3 m', kw: ['28.5/√3'] },
          { text: 'Walked 19√3 m', kw: ['19√3|19 √3|32.9'] }
        ],
        model: 'Height of building above his eyes = 30 − 1.5 = 28.5 m\nFrom the first point: tan 30° = 28.5/D → D = 28.5√3 m\nFrom the second point: tan 60° = 28.5/x → x = 28.5/√3 m\nDistance walked = 28.5√3 − 28.5/√3 = 28.5(3 − 1)/√3 = 57/√3 = 19√3 m' },
      { marks: 5, q: 'A TV tower stands vertically on a bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of its top is 60°. From another point 20 m away from this point on the line joining it to the foot of the tower, the angle of elevation of the top is 30°. Find the height of the tower and the width of the canal.',
        keypoints: [
          { text: 'tan 60° = h/x → h = x√3', kw: ['x√3'] },
          { text: 'tan 30° = h/(x + 20) → h√3 = x + 20', kw: ['20'] },
          { text: 'Width x = 10 m', kw: ['10 m|10m|x = 10'] },
          { text: 'Height 10√3 m', kw: ['10√3|10 √3|17.3'] }
        ],
        model: 'Let the width be x m and the height h m.\ntan 60° = h/x → h = x√3 …(1)\ntan 30° = h/(x + 20) → h√3 = x + 20 …(2)\nPut (1) in (2): 3x = x + 20 → x = 10\nh = 10√3 m ≈ 17.32 m\nWidth of the canal = 10 m' },
      { marks: 5, q: 'A straight highway leads to the foot of a tower. A man at the top of the tower sees a car at an angle of depression of 30°, approaching the foot at a uniform speed. Six seconds later, the angle of depression is 60°. Find the time taken by the car to reach the foot of the tower from this point.',
        keypoints: [
          { text: 'First distance = h√3', kw: ['h√3'] },
          { text: 'Second distance = h/√3', kw: ['h/√3'] },
          { text: 'Covered 2h/√3 in 6 s', kw: ['2h/√3|6'] },
          { text: 'Time = 3 seconds', kw: ['3 s|3 sec|3s|3 second'] }
        ],
        model: 'Let the tower be h m.\nAt 30°: distance = h/tan 30° = h√3\nAt 60°: distance = h/tan 60° = h/√3\nIn 6 s the car covers h√3 − h/√3 = 2h/√3\nSpeed = (2h/√3) ÷ 6 = h/(3√3)\nTime for the remaining h/√3 = (h/√3) ÷ (h/(3√3)) = 3 seconds' }
    ]
  });
})();
