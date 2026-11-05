// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 10: Circles
// In the syllabus: tangents, number of tangents from a point, Theorem 10.1 (tangent ⟂ radius),
// Theorem 10.2 (tangents from an external point are equal) and their uses.
// Note: the app turns a digit after a letter or ")" into a subscript, so never write things like "OP2" or ")2".
(function () {
  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41], [12, 35, 37], [11, 60, 61]];
  // A right triangle with whole sides: { a, b, c } with a² + b² = c², c at most `max`.
  function triple(mk, max = 65) {
    for (;;) {
      const [p, q, h] = mk.pick(TRIPLES), k = mk.ri(1, 3);
      if (h * k > max) continue;
      return Math.random() < 0.5 ? { a: p * k, b: q * k, c: h * k } : { a: q * k, b: p * k, c: h * k };
    }
  }

  // Drawing: circle with centre O, external point T and tangent(s) TP (and TQ).
  // h = half the angle between the tangents (∠OTP), in degrees.
  function fig(h, both, chord) {
    const W = 300, H = 200, s = Math.sin(h * Math.PI / 180);
    const r = Math.min(80, 265 / (1 + 1 / s)), cx = r + 15, cy = H / 2, tx = cx + r / s;
    const al = (90 - h) * Math.PI / 180;
    const P = [cx + r * Math.cos(al), cy - r * Math.sin(al)], Q = [cx + r * Math.cos(al), cy + r * Math.sin(al)];
    const ext = pt => { const dx = pt[0] - tx, dy = pt[1] - cy, L = Math.hypot(dx, dy); return [pt[0] + dx / L * 35, pt[1] + dy / L * 35]; };
    const f = v => v.toFixed(1);
    const line = (a, b, st) => `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" style="${st}"/>`;
    const tan = 'stroke:var(--gold);stroke-width:2.5', rad = 'stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4';
    const O = [cx, cy], T = [tx, cy];
    let g = `<circle cx="${f(cx)}" cy="${cy}" r="${f(r)}" style="fill:none;stroke:var(--accent-2);stroke-width:2.5"/>`;
    g += line(T, ext(P), tan) + line(O, P, rad) + line(O, T, rad);
    if (both) g += line(T, ext(Q), tan) + line(O, Q, rad);
    if (both && chord) g += line(P, Q, 'stroke:var(--muted);stroke-width:1.5');
    const dot = pt => `<circle cx="${f(pt[0])}" cy="${f(pt[1])}" r="3" style="fill:var(--text)"/>`;
    const lab = (t, x, y) => `<text x="${f(x)}" y="${f(y)}" style="fill:var(--text);font-size:14px;font-weight:700">${t}</text>`;
    g += dot(O) + dot(T) + dot(P) + lab('O', cx - 16, cy + 5) + lab('T', tx + 6, cy + 5) + lab('P', P[0] - 5, P[1] - 8);
    if (both) g += dot(Q) + lab('Q', Q[0] - 5, Q[1] + 18);
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Circle with centre O and tangent${both ? 's' : ''} from T">${g}</svg>`;
  }

  SWG.addChapter('math', {
    id: 'math-ch10',
    number: 10,
    title: 'Circles',
    icon: '⭕',

    topics: {
      basics: 'Tangents & Secants',
      thm1: 'Tangent ⟂ Radius',
      thm2: 'Equal Tangents',
      angles: 'Angles with Tangents',
      fig: 'Circles inside Figures'
    },

    summary: [
      'A tangent touches a circle at exactly one point (the point of contact). A secant cuts it at two points.',
      'From a point inside the circle: no tangent. On the circle: exactly one. Outside the circle: exactly two.',
      'Theorem 10.1: the tangent at any point of a circle is perpendicular to the radius through the point of contact.',
      'So the tangent length from a point T at distance d from the centre is √(d² − r²) (Pythagoras in the right triangle OPT).',
      'Theorem 10.2: the lengths of the two tangents drawn from an external point to a circle are equal (proof by RHS congruence).',
      'The angle between the two tangents and the angle they make at the centre add up to 180°. OT bisects both angles.',
      'Quadrilateral around a circle: AB + CD = AD + BC. A parallelogram around a circle is a rhombus.',
      'Concentric circles: a chord of the bigger circle that touches the smaller one is bisected at the point of contact; its length is 2√(R² − r²).'
    ],

    flashcards: [
      { topic: 'basics', front: 'What is a tangent to a circle?', back: 'A line that meets the circle at exactly ONE point.\nThat point is called the point of contact.' },
      { topic: 'basics', front: 'What is a secant?', back: 'A line that cuts the circle at TWO points.' },
      { topic: 'basics', front: 'A line and a circle: what are the three possibilities?', back: '1. No common point (non-intersecting line)\n2. One common point (tangent)\n3. Two common points (secant)' },
      { topic: 'basics', front: 'How many tangents can be drawn at a point ON the circle?', back: 'Exactly one.' },
      { topic: 'basics', front: 'How many tangents can be drawn from a point INSIDE the circle? OUTSIDE it?', back: 'Inside: none (every line through it is a secant).\nOutside: exactly two.' },
      { topic: 'basics', front: 'How many tangents can a circle have?', back: 'Infinitely many: one at every point of the circle.' },
      { topic: 'basics', front: 'How is a tangent related to a secant?', back: 'Move the two points where a secant cuts the circle closer together. When they join into one point, the secant becomes the tangent.' },
      { topic: 'basics', front: 'What is the "length of a tangent"?', back: 'The length of the segment from the external point to the point of contact.' },
      { topic: 'basics', front: 'Tangents at the two ends of a diameter are…', back: 'Parallel. Both are perpendicular to the same diameter.' },
      { topic: 'basics', front: 'At most how many tangents of a circle can be parallel to a given line?', back: 'Two (at the two ends of the diameter perpendicular to that line).' },

      { topic: 'thm1', front: 'Theorem 10.1', back: 'The tangent at any point of a circle is perpendicular to the radius through the point of contact.' },
      { topic: 'thm1', front: 'Proof idea of Theorem 10.1', back: 'Tangent XY touches the circle at P. Take any other point Q on XY.\nQ is outside the circle, so OQ > radius = OP.\nSo OP is the SHORTEST distance from O to XY.\nThe shortest distance is the perpendicular, so OP ⟂ XY.' },
      { topic: 'thm1', front: 'What can you say about the line through the point of contact perpendicular to the tangent?', back: 'It passes through the centre of the circle.' },
      { topic: 'thm1', front: 'Tangent length formula', back: 'From a point T at distance d from the centre, radius r:\nTangent length = √(d² − r²)\n(△OPT is right-angled at P.)' },
      { topic: 'thm1', front: 'A point is 13 cm from the centre of a circle of radius 5 cm. Find the tangent length.', back: '√(13² − 5²) = √(169 − 25) = √144 = 12 cm' },
      { topic: 'thm1', front: 'From a point Q, the tangent length is 24 cm and Q is 25 cm from the centre. Find the radius.', back: 'r² = 25² − 24² = 625 − 576 = 49\nr = 7 cm' },
      { topic: 'thm1', front: 'A point A is 5 cm from the centre of a circle of radius 3 cm. Find the tangent length.', back: '√(25 − 9) = √16 = 4 cm' },
      { topic: 'thm1', front: 'The angle between a tangent and the radius at the point of contact is…', back: '90°' },

      { topic: 'thm2', front: 'Theorem 10.2', back: 'The lengths of the tangents drawn from an external point to a circle are equal.' },
      { topic: 'thm2', front: 'Proof of Theorem 10.2', back: 'Tangents TP and TQ from T. Join OP, OQ, OT.\n∠OPT = ∠OQT = 90° (Theorem 10.1)\nOP = OQ (radii), OT = OT (common)\n△OPT ≅ △OQT (RHS)\nSo TP = TQ (CPCT).' },
      { topic: 'thm2', front: 'What else does the RHS congruence in Theorem 10.2 give?', back: '∠OTP = ∠OTQ: OT bisects the angle between the tangents.\n∠POT = ∠QOT: OT also bisects the angle at the centre.' },
      { topic: 'thm2', front: 'TP = 3x + 4 and TQ = 5x − 6 are tangents from T. Find x and TP.', back: 'TP = TQ\n3x + 4 = 5x − 6 → 2x = 10 → x = 5\nTP = 15 + 4 = 19' },
      { topic: 'thm2', front: 'Two concentric circles: a chord AB of the bigger circle touches the smaller one at C. What can you say about C?', back: 'C is the midpoint of AB: AC = CB.\n(OC ⟂ AB by Theorem 10.1, and the perpendicular from the centre bisects a chord.)' },
      { topic: 'thm2', front: 'Concentric circles of radii 5 cm and 3 cm. Find the chord of the bigger circle that touches the smaller one.', back: 'Half chord = √(5² − 3²) = 4\nChord = 2 × 4 = 8 cm' },

      { topic: 'angles', front: 'Angle between two tangents and angle at the centre', back: 'They are supplementary: ∠PTQ + ∠POQ = 180°.\nIn quadrilateral OPTQ, ∠OPT = ∠OQT = 90°, and the four angles add up to 360°.' },
      { topic: 'angles', front: 'TP and TQ are tangents and ∠POQ = 110°. Find ∠PTQ.', back: '∠PTQ = 180° − 110° = 70°' },
      { topic: 'angles', front: 'Tangents PA and PB are inclined to each other at 80°. Find ∠POA.', back: '∠AOB = 180° − 80° = 100°\nOP bisects it: ∠POA = 50°' },
      { topic: 'angles', front: 'Prove ∠PTQ = 2∠OPQ (TP, TQ tangents, P and Q points of contact).', back: 'Let ∠PTQ = θ. TP = TQ, so ∠TPQ = ∠TQP = (180° − θ)/2 = 90° − θ/2.\n∠OPT = 90°, so ∠OPQ = 90° − (90° − θ/2) = θ/2.\nSo ∠PTQ = 2∠OPQ.' },
      { topic: 'angles', front: 'If ∠PTQ = 60° (TP, TQ tangents), what kind of triangle is TPQ?', back: 'Equilateral. TP = TQ makes it isosceles, so the base angles are (180° − 60°)/2 = 60° each.' },
      { topic: 'angles', front: 'If ∠PTQ = 50°, find ∠OTP and ∠POT.', back: '∠OTP = 50°/2 = 25°\n∠POT = 90° − 25° = 65°' },
      { topic: 'angles', front: 'XY and X′Y′ are parallel tangents. Another tangent touches the circle at C and meets them at A and B. Find ∠AOB.', back: '∠AOB = 90°.\nOA and OB bisect the two co-interior angles at A and B, which add up to 180°, so ∠OAB + ∠OBA = 90°.' },

      { topic: 'fig', front: 'Quadrilateral ABCD circumscribing a circle: what is true about its sides?', back: 'AB + CD = AD + BC\n(The tangents from each corner are equal, so both sums contain all eight tangent pieces.)' },
      { topic: 'fig', front: 'A parallelogram circumscribing a circle is a…', back: 'Rhombus.\nAB + CD = AD + BC and AB = CD, AD = BC give 2AB = 2AD, so all sides are equal.' },
      { topic: 'fig', front: 'Quadrilateral ABCD around a circle with centre O: what about ∠AOB + ∠COD?', back: '∠AOB + ∠COD = 180°.\nOpposite sides subtend supplementary angles at the centre.' },
      { topic: 'fig', front: 'Circle inside triangle ABC, touching the sides. The tangent lengths from A, B, C are x, y, z. Write the sides.', back: 'AB = x + y\nBC = y + z\nCA = z + x\nPerimeter = 2(x + y + z)' },
      { topic: 'fig', front: 'Triangle with sides AB = 15, BC = 14, CA = 13 has an incircle. Find the tangent length from A.', back: 'Half perimeter s = 21\nTangent from A = s − BC = 21 − 14 = 7' },
      { topic: 'fig', front: 'Incircle of △ABC (radius 4 cm) touches BC at D with BD = 8 cm, DC = 6 cm. Find AB and AC.', back: 'Let AF = AE = x. AB = x + 8, AC = x + 6, BC = 14.\nArea = r × s = 4(14 + x)\nHeron: area² = (14 + x) × x × 8 × 6\nSo 16(14 + x)² = 48x(14 + x) → x = 7\nAB = 15 cm, AC = 13 cm' }
    ],

    quiz: [
      { topic: 'basics', q: 'A tangent to a circle meets it in…', options: ['Exactly one point', 'Two points', 'No point', 'Infinitely many points'], answer: 0, explain: 'That is what "tangent" means.' },
      { topic: 'basics', q: 'A line that cuts a circle at two points is called a…', options: ['Tangent', 'Secant', 'Radius', 'Diameter'], answer: 1, explain: 'A secant cuts the circle twice.' },
      { topic: 'basics', q: 'The number of tangents from a point INSIDE a circle is…', options: ['0', '1', '2', 'Infinitely many'], answer: 0, explain: 'Every line through an inside point cuts the circle twice.' },
      { topic: 'basics', q: 'The number of tangents at a point ON a circle is…', options: ['0', '1', '2', 'Infinitely many'], answer: 1, explain: 'Exactly one tangent at each point.' },
      { topic: 'basics', q: 'The number of tangents from a point OUTSIDE a circle is…', options: ['0', '1', '2', 'Infinitely many'], answer: 2, explain: 'Exactly two tangents.' },
      { topic: 'basics', q: 'A circle can have at most ___ tangents parallel to a given line.', options: ['1', '2', '3', 'Infinitely many'], answer: 1, explain: 'At the two ends of one diameter.' },
      { topic: 'basics', q: 'The common point of a tangent and the circle is called the…', options: ['Centre', 'Point of contact', 'End point', 'Vertex'], answer: 1, explain: 'Point of contact.' },
      { topic: 'basics', q: 'How many tangents can a circle have?', options: ['1', '2', '4', 'Infinitely many'], answer: 3, explain: 'One at every point of the circle.' },
      { topic: 'basics', q: 'The tangents at the two ends of a diameter are…', options: ['Perpendicular', 'Parallel', 'At 60° to each other', 'The same line'], answer: 1, explain: 'Both are ⟂ to the diameter.' },

      { topic: 'thm1', q: 'The tangent at any point of a circle is ___ to the radius through the point of contact.', options: ['Parallel', 'Perpendicular', 'Equal', 'Inclined at 45°'], answer: 1, explain: 'Theorem 10.1' },
      { topic: 'thm1', q: 'From a point Q, the tangent length is 24 cm and Q is 25 cm from the centre. The radius is…', options: ['7 cm', '12 cm', '15 cm', '24.5 cm'], answer: 0, explain: '√(625 − 576) = √49' },
      { topic: 'thm1', q: 'A point is 13 cm from the centre of a circle of radius 5 cm. The tangent length is…', options: ['12 cm', '8 cm', '18 cm', '10 cm'], answer: 0, explain: '√(169 − 25) = 12' },
      { topic: 'thm1', q: 'A point is 5 cm from the centre of a circle of radius 3 cm. The tangent length is…', options: ['2 cm', '4 cm', '√34 cm', '8 cm'], answer: 1, explain: '√(25 − 9) = 4' },
      { topic: 'thm1', q: 'A tangent PQ at P meets a line through the centre O at Q. If the radius is 5 cm and OQ = 12 cm, PQ is…', options: ['12 cm', '13 cm', '8.5 cm', '√119 cm'], answer: 3, explain: 'PQ² = 144 − 25 = 119' },
      { topic: 'thm1', q: 'The angle between a tangent and the radius at the point of contact is…', options: ['60°', '90°', '180°', '45°'], answer: 1, explain: 'Theorem 10.1' },
      { topic: 'thm1', q: 'A line through the point of contact, perpendicular to the tangent, passes through…', options: ['The centre', 'An external point', 'The other end of the tangent', 'No special point'], answer: 0, explain: 'It is along the radius.' },
      { topic: 'thm1', q: 'The radius is 8 cm and the tangent from T is 15 cm. T is how far from the centre?', options: ['17 cm', '23 cm', '7 cm', '√161 cm'], answer: 0, explain: '√(64 + 225) = √289 = 17' },

      { topic: 'thm2', q: 'The tangents drawn from an external point to a circle are…', options: ['Different in length', 'Equal in length', 'In the ratio 1 : 2', 'Always perpendicular'], answer: 1, explain: 'Theorem 10.2' },
      { topic: 'thm2', q: 'The proof of Theorem 10.2 uses which congruence rule?', options: ['SSS', 'SAS', 'RHS', 'ASA'], answer: 2, explain: 'Right angle, hypotenuse OT, side OP = OQ.' },
      { topic: 'thm2', q: 'TP = 3x + 4 and TQ = 5x − 6 are tangents from T. Then x is…', options: ['4', '5', '6', '10'], answer: 1, explain: '3x + 4 = 5x − 6' },
      { topic: 'thm2', q: 'Concentric circles have radii 5 cm and 3 cm. The chord of the bigger circle that touches the smaller one is…', options: ['4 cm', '8 cm', '6 cm', '10 cm'], answer: 1, explain: '2√(25 − 9) = 8' },
      { topic: 'thm2', q: 'A chord of the bigger of two concentric circles touches the smaller one. At the point of contact the chord is…', options: ['Bisected', 'Trisected', 'Doubled', 'Not divided equally'], answer: 0, explain: 'The radius ⟂ to the chord bisects it.' },
      { topic: 'thm2', q: 'In Theorem 10.2, the line OT joining the centre to the external point…', options: ['Bisects the angle between the tangents', 'Is a tangent', 'Is parallel to PQ', 'Equals the radius'], answer: 0, explain: '∠OTP = ∠OTQ from the congruence.' },

      { topic: 'angles', q: 'TP and TQ are tangents and ∠POQ = 110°. Then ∠PTQ is…', options: ['60°', '70°', '80°', '90°'], answer: 1, explain: '180° − 110°' },
      { topic: 'angles', q: 'Tangents PA and PB are inclined at 80°. Then ∠POA is…', options: ['50°', '60°', '70°', '80°'], answer: 0, explain: '∠AOB = 100°, half is 50°' },
      { topic: 'angles', q: 'The angle between two tangents from a point and the angle at the centre add up to…', options: ['90°', '180°', '270°', '360°'], answer: 1, explain: 'They are supplementary.' },
      { topic: 'angles', q: 'If ∠PTQ = 50°, then ∠OTP is…', options: ['25°', '50°', '65°', '130°'], answer: 0, explain: 'OT bisects ∠PTQ.' },
      { topic: 'angles', q: 'If ∠PTQ = 50°, then ∠POT is…', options: ['25°', '65°', '130°', '40°'], answer: 1, explain: '90° − 25°' },
      { topic: 'angles', q: 'With TP, TQ tangents from T: ∠PTQ = 2 × …', options: ['∠OPQ', '∠POQ', '∠TPQ', '∠OTQ + 90°'], answer: 0, explain: 'Standard result: ∠PTQ = 2∠OPQ' },
      { topic: 'angles', q: 'If ∠PTQ = 60°, triangle TPQ is…', options: ['Isosceles but not equilateral', 'Equilateral', 'Right-angled', 'Scalene'], answer: 1, explain: 'Base angles are (180° − 60°)/2 = 60°.' },
      { topic: 'angles', q: 'If ∠PTQ = 40°, then ∠TPQ is…', options: ['40°', '70°', '80°', '140°'], answer: 1, explain: '(180° − 40°)/2' },
      { topic: 'angles', q: 'Parallel tangents XY and X′Y′ are cut by a third tangent AB. Then ∠AOB is…', options: ['60°', '90°', '120°', '180°'], answer: 1, explain: 'Half of the co-interior angles (180°).' },
      { topic: 'angles', q: 'The angle between two radii is 130°. The angle between the tangents at their ends is…', options: ['50°', '130°', '65°', '90°'], answer: 0, explain: '180° − 130°' },
      { topic: 'angles', q: 'Two tangents from P are at 90° to each other and the radius is 5 cm. OP is…', options: ['5 cm', '5√2 cm', '10 cm', '25 cm'], answer: 1, explain: 'OAPB is a square of side 5; OP is its diagonal.' },
      { topic: 'angles', q: 'Tangents PA and PB make ∠APB = 60° and PA = 5 cm. Then AB is…', options: ['5 cm', '10 cm', '5√3 cm', '2.5 cm'], answer: 0, explain: '△PAB is equilateral.' },

      { topic: 'fig', q: 'For a quadrilateral ABCD drawn around a circle…', options: ['AB + BC = CD + DA', 'AB + CD = AD + BC', 'AB = CD', 'AC = BD'], answer: 1, explain: 'Opposite sides add up to the same total.' },
      { topic: 'fig', q: 'ABCD is drawn around a circle with AB = 6 cm, BC = 7 cm, CD = 4 cm. AD is…', options: ['3 cm', '5 cm', '9 cm', '17 cm'], answer: 0, explain: '6 + 4 = AD + 7' },
      { topic: 'fig', q: 'A parallelogram drawn around a circle is a…', options: ['Rectangle', 'Rhombus', 'Trapezium', 'Kite'], answer: 1, explain: 'All sides come out equal.' },
      { topic: 'fig', q: 'ABCD is drawn around a circle with centre O. ∠AOB + ∠COD is…', options: ['90°', '180°', '270°', '360°'], answer: 1, explain: 'Opposite sides subtend supplementary angles at the centre.' },
      { topic: 'fig', q: 'The incircle of △ABC (radius 4 cm) touches BC at D with BD = 8 cm and DC = 6 cm. AB is…', options: ['13 cm', '14 cm', '15 cm', '12 cm'], answer: 2, explain: 'Tangent from A = 7, so AB = 7 + 8.' },
      { topic: 'fig', q: 'The tangent lengths from the corners of a triangle to its incircle are 4, 5 and 6 cm. Its perimeter is…', options: ['15 cm', '30 cm', '60 cm', '120 cm'], answer: 1, explain: '2(4 + 5 + 6)' },
      { topic: 'fig', q: 'Tangent lengths from A, B, C to the incircle are 4, 5, 6 cm. BC is…', options: ['9 cm', '10 cm', '11 cm', '15 cm'], answer: 2, explain: 'BC = (from B) + (from C) = 5 + 6' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'basics', gen(mk) {
        const r = mk.ri(3, 10), kind = mk.pick([0, 1, 2]);
        const d = kind === 0 ? mk.ri(1, r - 1) : kind === 1 ? r : mk.ri(r + 1, r + 10);
        return {
          q: `A circle has radius ${r} cm. How many tangents can be drawn to it from a point ${d} cm from its centre?`,
          choices: ['None', 'Exactly one', 'Exactly two', 'Infinitely many'],
          answer: kind,
          steps: kind === 0 ? `${d} cm < ${r} cm, so the point is INSIDE the circle.\nNo tangent can be drawn from an inside point.`
            : kind === 1 ? `${d} cm = ${r} cm, so the point is ON the circle.\nExactly one tangent can be drawn at a point on the circle.`
              : `${d} cm > ${r} cm, so the point is OUTSIDE the circle.\nExactly two tangents can be drawn from an outside point.`
        };
      } },
      { topic: 'thm1', gen(mk) {
        const { a: r, b: t, c: d } = triple(mk), v = mk.pick(['t', 't', 'r', 'd']);
        const svg = fig(Math.asin(r / d) * 180 / Math.PI, false);
        const pre = 'OP ⟂ PT (the tangent is perpendicular to the radius), so △OPT is right-angled at P.\nOT² = OP² + PT²\n';
        if (v === 't') return {
          q: `T is a point ${d} cm from the centre O of a circle of radius ${r} cm. TP is a tangent touching the circle at P. Find the length of TP.`,
          svg, fields: [{ label: 'TP (cm) =', answer: t }],
          hint: 'The radius OP is perpendicular to the tangent at P. Use Pythagoras in △OPT.',
          steps: pre + `PT² = ${d}² − ${r}² = ${d * d} − ${r * r} = ${t * t}\nPT = ${t} cm`
        };
        if (v === 'r') return {
          q: `From a point T, the length of the tangent TP to a circle is ${t} cm, and T is ${d} cm from the centre O. Find the radius.`,
          svg, fields: [{ label: 'Radius (cm) =', answer: r }],
          hint: 'The radius OP is perpendicular to the tangent at P. Use Pythagoras in △OPT.',
          steps: pre + `OP² = ${d}² − ${t}² = ${d * d} − ${t * t} = ${r * r}\nRadius OP = ${r} cm`
        };
        return {
          q: `A circle with centre O has radius ${r} cm. The tangent TP from a point T has length ${t} cm. How far is T from O?`,
          svg, fields: [{ label: 'OT (cm) =', answer: d }],
          hint: 'OP ⟂ PT, so OT is the hypotenuse of right triangle OPT.',
          steps: pre + `OT² = ${r}² + ${t}² = ${r * r} + ${t * t} = ${d * d}\nOT = ${d} cm`
        };
      } },
      { topic: 'thm2', gen(mk) {
        let a, c, x, L, b, e;
        do { a = mk.ri(1, 6); c = mk.ri(1, 6); x = mk.ri(2, 9); L = mk.ri(8, 45); b = L - a * x; e = L - c * x; } while (a === c);
        const [hi, lo] = a > c ? [[a, b], [c, e]] : [[c, e], [a, b]];
        return {
          q: `TP and TQ are tangents from T to a circle. TP = ${mk.poly([a, b])} cm and TQ = ${mk.poly([c, e])} cm. Find x and the length of each tangent.`,
          fields: [{ label: 'x =', answer: x }, { label: 'TP (cm) =', answer: L }],
          hint: 'Tangents from an external point are equal: put TP = TQ and solve for x.',
          steps: `Tangents from T are equal: TP = TQ\n${mk.poly([a, b])} = ${mk.poly([c, e])}\n` +
            `${mk.poly([hi[0] - lo[0], 0])} = ${mk.num(lo[1] - hi[1])}\nx = ${x}\nTP = ${a === 1 ? '' : a + ' × '}${x}${b ? ` ${b < 0 ? '−' : '+'} ${Math.abs(b)}` : ''} = ${L} cm`
        };
      } },
      { topic: 'angles', gen(mk) {
        const th = 2 * mk.ri(15, 60), h = th / 2, v = mk.pick(['T', 'O', 'OTP', 'POT', 'TPQ', 'OPQ']);
        const need = v === 'TPQ' || v === 'OPQ';
        const svg = fig(h, true, need);
        const base = 'TP and TQ are tangents from T to a circle with centre O, touching it at P and Q.';
        if (v === 'T') return {
          q: `${base} If ∠POQ = ${180 - th}°, find ∠PTQ.`, svg,
          fields: [{ label: '∠PTQ (°) =', answer: th }],
          hint: 'In quadrilateral OPTQ, the angles at P and Q are 90°.',
          steps: `∠OPT = ∠OQT = 90° (tangent ⟂ radius)\nAngles of OPTQ add up to 360°:\n∠PTQ = 360° − 90° − 90° − ${180 - th}° = ${th}°`
        };
        if (v === 'O') return {
          q: `${base} If ∠PTQ = ${th}°, find ∠POQ.`, svg,
          fields: [{ label: '∠POQ (°) =', answer: 180 - th }],
          hint: '∠PTQ + ∠POQ = 180°.',
          steps: `∠OPT = ∠OQT = 90°, so ∠PTQ + ∠POQ = 180°\n∠POQ = 180° − ${th}° = ${180 - th}°`
        };
        if (v === 'OTP') return {
          q: `${base} If ∠PTQ = ${th}°, find ∠OTP.`, svg,
          fields: [{ label: '∠OTP (°) =', answer: h }],
          hint: 'OT bisects the angle between the two tangents.',
          steps: `△OPT ≅ △OQT (RHS), so OT bisects ∠PTQ.\n∠OTP = ${th}° ÷ 2 = ${h}°`
        };
        if (v === 'POT') return {
          q: `${base} If ∠PTQ = ${th}°, find ∠POT.`, svg,
          fields: [{ label: '∠POT (°) =', answer: 90 - h }],
          hint: 'First find ∠OTP (half of ∠PTQ). △OPT has a right angle at P.',
          steps: `OT bisects ∠PTQ: ∠OTP = ${h}°\n∠OPT = 90°\n∠POT = 180° − 90° − ${h}° = ${90 - h}°`
        };
        if (v === 'TPQ') return {
          q: `${base} If ∠PTQ = ${th}°, find ∠TPQ.`, svg,
          fields: [{ label: '∠TPQ (°) =', answer: 90 - h }],
          hint: 'TP = TQ, so △TPQ is isosceles.',
          steps: `TP = TQ, so ∠TPQ = ∠TQP\n∠TPQ = (180° − ${th}°) ÷ 2 = ${90 - h}°`
        };
        return {
          q: `${base} If ∠PTQ = ${th}°, find ∠OPQ.`, svg,
          fields: [{ label: '∠OPQ (°) =', answer: h }],
          hint: 'Find ∠TPQ first (△TPQ is isosceles). Then use ∠OPT = 90°.',
          steps: `TP = TQ, so ∠TPQ = (180° − ${th}°) ÷ 2 = ${90 - h}°\n∠OPT = 90°\n∠OPQ = 90° − ${90 - h}° = ${h}°\n(Check: ∠PTQ = 2∠OPQ)`
        };
      } },
      { topic: 'fig', gen(mk) {
        const [w, x, y, z] = [0, 0, 0, 0].map(() => mk.ri(2, 12));
        const S = { AB: w + x, BC: x + y, CD: y + z, DA: z + w };
        const miss = mk.pick(['AB', 'BC', 'CD', 'DA']);
        const pair = { AB: 'CD', CD: 'AB', BC: 'DA', DA: 'BC' };
        const others = Object.keys(S).filter(k => k !== miss);
        const opp = pair[miss], [s1, s2] = others.filter(k => k !== opp);
        return {
          q: `A quadrilateral ABCD is drawn to circumscribe a circle. ${others.map(k => `${k} = ${S[k]} cm`).join(', ')}. Find ${miss}.`,
          fields: [{ label: `${miss} (cm) =`, answer: S[miss] }],
          hint: 'For a quadrilateral around a circle: AB + CD = AD + BC.',
          steps: `Tangents from each corner are equal, so AB + CD = AD + BC.\n${miss} + ${opp} = ${s1} + ${s2}\n${miss} + ${S[opp]} = ${S[s1]} + ${S[s2]}\n${miss} = ${S[s1] + S[s2]} − ${S[opp]} = ${S[miss]} cm`
        };
      } },
      { topic: 'thm2', gen(mk) {
        const { a: r, b: t, c: R } = triple(mk, 41), v = mk.pick(['chord', 'chord', 'R', 'r']);
        const pre = 'The chord AB of the bigger circle touches the smaller circle at C.\nOC ⟂ AB (tangent ⟂ radius), so C is the midpoint of AB and △OCA is right-angled at C.\n';
        if (v === 'chord') return {
          q: `Two concentric circles have radii ${R} cm and ${r} cm. Find the length of the chord of the bigger circle that touches the smaller circle.`,
          fields: [{ label: 'Chord (cm) =', answer: 2 * t }],
          hint: 'Half the chord = √(R² − r²). Then double it.',
          steps: pre + `AC² = OA² − OC² = ${R}² − ${r}² = ${R * R} − ${r * r} = ${t * t}\nAC = ${t} cm\nAB = 2 × ${t} = ${2 * t} cm`
        };
        if (v === 'R') return {
          q: `In two concentric circles, a chord of the bigger circle of length ${2 * t} cm touches the smaller circle of radius ${r} cm. Find the radius of the bigger circle.`,
          fields: [{ label: 'Bigger radius (cm) =', answer: R }],
          hint: 'The chord is bisected at the point of contact, so half of it is one side of a right triangle.',
          steps: pre + `AC = ${2 * t} ÷ 2 = ${t} cm\nOA² = OC² + AC² = ${r}² + ${t}² = ${r * r} + ${t * t} = ${R * R}\nOA = ${R} cm`
        };
        return {
          q: `In two concentric circles, a chord of length ${2 * t} cm of the bigger circle (radius ${R} cm) touches the smaller circle. Find the radius of the smaller circle.`,
          fields: [{ label: 'Smaller radius (cm) =', answer: r }],
          hint: 'The chord is bisected at the point of contact. Use Pythagoras with half the chord.',
          steps: pre + `AC = ${2 * t} ÷ 2 = ${t} cm\nOC² = OA² − AC² = ${R}² − ${t}² = ${R * R} − ${t * t} = ${r * r}\nOC = ${r} cm`
        };
      } },
      { topic: 'fig', gen(mk) {
        const [x, y, z] = [mk.ri(2, 15), mk.ri(2, 15), mk.ri(2, 15)];
        const AB = x + y, BC = y + z, CA = z + x, v = mk.pick(['side', 'fromA', 'perim']);
        const setup = 'A circle is inscribed in △ABC. It touches AB at F, BC at D and CA at E.';
        if (v === 'side') return {
          q: `${setup} AB = ${AB} cm, BD = ${y} cm and DC = ${z} cm. Find AC.`,
          fields: [{ label: 'AC (cm) =', answer: CA }],
          hint: 'Tangents from the same point are equal: BF = BD, CE = CD and AF = AE.',
          steps: `BF = BD = ${y} cm (tangents from B)\nAF = AB − BF = ${AB} − ${y} = ${x} cm\nAE = AF = ${x} cm (tangents from A)\nCE = CD = ${z} cm (tangents from C)\nAC = AE + CE = ${x} + ${z} = ${CA} cm`
        };
        if (v === 'fromA') return {
          q: `${setup} AB = ${AB} cm, BC = ${BC} cm and CA = ${CA} cm. Find AF.`,
          fields: [{ label: 'AF (cm) =', answer: x }],
          hint: 'Let AF = AE = x. Then BF = BD = AB − x and CE = CD = CA − x, and BD + DC = BC.',
          steps: `Let AF = AE = x.\nBD = BF = ${AB} − x and CD = CE = ${CA} − x\nBD + CD = BC: (${AB} − x) + (${CA} − x) = ${BC}\n${AB + CA} − 2x = ${BC} → 2x = ${2 * x}\nAF = ${x} cm`
        };
        return {
          q: `${setup} AF = ${x} cm, BD = ${y} cm and CE = ${z} cm. Find the perimeter of △ABC.`,
          fields: [{ label: 'Perimeter (cm) =', answer: 2 * (x + y + z) }],
          hint: 'Each corner has two equal tangents. The perimeter is made of all six tangent pieces.',
          steps: `AE = AF = ${x}, BF = BD = ${y}, CD = CE = ${z} (equal tangents)\nAB = ${x} + ${y} = ${AB}, BC = ${y} + ${z} = ${BC}, CA = ${z} + ${x} = ${CA}\nPerimeter = ${AB} + ${BC} + ${CA} = ${2 * (x + y + z)} cm`
        };
      } },
      { topic: 'angles', gen(mk) {
        const th = mk.ri(55, 125), first = mk.pick(['AOB', 'BOC']);
        const other = first === 'AOB' ? 'COD' : 'AOD';
        return {
          q: `A quadrilateral ABCD is drawn to circumscribe a circle with centre O. If ∠${first} = ${th}°, find ∠${other}.`,
          fields: [{ label: `∠${other} (°) =`, answer: 180 - th }],
          hint: 'Opposite sides of a quadrilateral around a circle subtend supplementary angles at the centre.',
          steps: `Opposite sides of a quadrilateral around a circle subtend supplementary angles at the centre:\n∠${first} + ∠${other} = 180°\n∠${other} = 180° − ${th}° = ${180 - th}°`
        };
      } }
    ],

    match: [
      { title: 'Key Facts', pairs: [
        ['Tangent', 'Meets the circle at exactly one point'],
        ['Secant', 'Meets the circle at two points'],
        ['Point inside the circle', 'No tangent'],
        ['Point on the circle', 'Exactly one tangent'],
        ['Point outside the circle', 'Exactly two tangents'],
        ['Tangent and radius at the point of contact', 'Perpendicular']
      ] },
      { title: 'Find the Length', pairs: [
        ['r = 5 cm, OT = 13 cm', 'Tangent 12 cm'],
        ['r = 3 cm, OT = 5 cm', 'Tangent 4 cm'],
        ['Tangent 24 cm, OT = 25 cm', 'Radius 7 cm'],
        ['r = 8 cm, tangent 15 cm', 'OT = 17 cm'],
        ['Concentric radii 5 cm and 3 cm', 'Chord 8 cm'],
        ['Concentric radii 13 cm and 5 cm', 'Chord 24 cm']
      ] },
      { title: 'Angles', pairs: [
        ['∠POQ = 110°', '∠PTQ = 70°'],
        ['∠PTQ = 80°', '∠POQ = 100°'],
        ['∠PTQ = 60°', '△TPQ is equilateral'],
        ['∠PTQ = 50°', '∠OTP = 25°'],
        ['∠PTQ = 40°', '∠OPQ = 20°'],
        ['Parallel tangents cut by a third tangent AB', '∠AOB = 90°']
      ] },
      { title: 'Circles inside Figures', pairs: [
        ['Quadrilateral ABCD around a circle', 'AB + CD = AD + BC'],
        ['Parallelogram around a circle', 'Rhombus'],
        ['Opposite sides of such a quadrilateral', 'Supplementary angles at the centre'],
        ['Two tangents from one point', 'Equal lengths'],
        ['Triangle with tangent lengths 4, 5, 6 cm', 'Perimeter 30 cm'],
        ['Incircle: BD = 8 cm, DC = 6 cm, r = 4 cm', 'AB = 15 cm, AC = 13 cm']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'How many tangents can be drawn to a circle from a point outside it?',
        keypoints: [{ text: 'Exactly two', kw: ['two|2'] }],
        model: 'Exactly two tangents can be drawn from a point outside a circle.' },
      { marks: 1, q: 'A point T is 13 cm from the centre of a circle of radius 5 cm. Find the length of the tangent from T.',
        keypoints: [{ text: '√(169 − 25) = 12 cm', kw: ['12'] }],
        model: 'Tangent ⟂ radius, so tangent length = √(13² − 5²) = √(169 − 25) = √144 = 12 cm' },
      { marks: 1, q: 'TP and TQ are tangents to a circle with centre O, and ∠POQ = 110°. Find ∠PTQ.',
        keypoints: [{ text: '∠PTQ = 180° − 110° = 70°', kw: ['70'] }],
        model: '∠OPT = ∠OQT = 90°, so ∠PTQ + ∠POQ = 180°\n∠PTQ = 180° − 110° = 70°' },
      { marks: 1, q: 'Two concentric circles have radii 5 cm and 3 cm. Find the length of the chord of the larger circle that touches the smaller circle.',
        keypoints: [{ text: '2√(25 − 9) = 8 cm', kw: ['8'] }],
        model: 'Half chord = √(5² − 3²) = √16 = 4 cm\nChord = 2 × 4 = 8 cm' },
      { marks: 2, q: 'From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. Find the radius of the circle.',
        keypoints: [
          { text: 'OP ⟂ PQ, so OQ² = OP² + PQ²', kw: ['⟂|perpendicular|90'] },
          { text: 'OP² = 625 − 576 = 49, radius = 7 cm', kw: ['7'] }
        ],
        model: 'Let the tangent touch the circle at P. OP ⟂ PQ (Theorem 10.1).\nOQ² = OP² + PQ²\n625 = OP² + 576\nOP² = 49 → OP = 7 cm' },
      { marks: 2, q: 'Prove that the tangents drawn at the ends of a diameter of a circle are parallel.',
        keypoints: [
          { text: 'Both tangents are perpendicular to the diameter AB', kw: ['⟂|perpendicular|90'] },
          { text: 'Alternate angles are equal (90° each), so the tangents are parallel', kw: ['alternate|co-interior|parallel'] }
        ],
        model: 'Let AB be a diameter, with tangents PQ at A and RS at B.\nOA ⟂ PQ and OB ⟂ RS (tangent ⟂ radius).\nSo ∠PAB = 90° and ∠ABS = 90°.\nThese are alternate angles and they are equal, so PQ ∥ RS.' },
      { marks: 2, q: 'A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 6 cm, BC = 7 cm and CD = 4 cm, find AD.',
        keypoints: [
          { text: 'AB + CD = AD + BC', kw: ['AB + CD|AB+CD'] },
          { text: '10 = AD + 7, so AD = 3 cm', kw: ['3'] }
        ],
        model: 'For a quadrilateral circumscribing a circle: AB + CD = AD + BC\n6 + 4 = AD + 7\nAD = 3 cm' },
      { marks: 2, q: 'Two tangents PA and PB to a circle with centre O are inclined to each other at 80°. Find ∠POA.',
        keypoints: [
          { text: '∠AOB = 180° − 80° = 100°', kw: ['100'] },
          { text: 'OP bisects ∠AOB, so ∠POA = 50°', kw: ['50'] }
        ],
        model: '∠OAP = ∠OBP = 90°, so ∠AOB = 180° − 80° = 100°\n△OAP ≅ △OBP (RHS), so OP bisects ∠AOB\n∠POA = 100° ÷ 2 = 50°' },
      { marks: 3, q: 'Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact (Theorem 10.1).',
        keypoints: [
          { text: 'Given circle with centre O, tangent XY at P; take a point Q on XY other than P', kw: ['Q'] },
          { text: 'Q lies outside the circle, so OQ > OP', kw: ['outside', 'OQ > OP|OQ>OP|greater'] },
          { text: 'OP is the shortest distance from O to XY', kw: ['shortest'] },
          { text: 'The shortest distance is the perpendicular, so OP ⟂ XY', kw: ['⟂|perpendicular'] }
        ],
        model: 'Given: a circle with centre O and a tangent XY at P.\nTo prove: OP ⟂ XY.\nProof: Take any point Q on XY other than P and join OQ.\nQ must lie outside the circle (if it were on or inside, XY would meet the circle again and would be a secant, not a tangent).\nSo OQ is longer than the radius: OQ > OP.\nThis is true for every point Q on XY except P, so OP is the shortest distance from O to the line XY.\nThe shortest distance from a point to a line is the perpendicular.\nHence OP ⟂ XY.' },
      { marks: 3, q: 'Prove that the lengths of the tangents drawn from an external point to a circle are equal (Theorem 10.2).',
        keypoints: [
          { text: 'Join OP, OQ, OT; ∠OPT = ∠OQT = 90°', kw: ['90'] },
          { text: 'OP = OQ (radii), OT common', kw: ['radii|radius', 'common'] },
          { text: '△OPT ≅ △OQT by RHS', kw: ['RHS'] },
          { text: 'TP = TQ (CPCT)', kw: ['CPCT|corresponding'] }
        ],
        model: 'Given: a circle with centre O; TP and TQ are tangents from an external point T.\nTo prove: TP = TQ.\nProof: Join OP, OQ and OT.\nIn △OPT and △OQT:\n∠OPT = ∠OQT = 90° (tangent ⟂ radius)\nOT = OT (common hypotenuse)\nOP = OQ (radii)\nSo △OPT ≅ △OQT (RHS).\nHence TP = TQ (CPCT).' },
      { marks: 3, q: 'Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended at the centre by the line segment joining the points of contact.',
        keypoints: [
          { text: '∠OPT = ∠OQT = 90° (tangent ⟂ radius)', kw: ['90'] },
          { text: 'Angles of quadrilateral OPTQ add to 360°', kw: ['360'] },
          { text: '∠PTQ + ∠POQ = 180°', kw: ['180'] }
        ],
        model: 'Let TP and TQ be tangents from T, touching the circle (centre O) at P and Q.\n∠OPT = 90° and ∠OQT = 90° (tangent ⟂ radius).\nIn quadrilateral OPTQ, the angles add up to 360°:\n∠PTQ + ∠OPT + ∠POQ + ∠OQT = 360°\n∠PTQ + 90° + ∠POQ + 90° = 360°\n∠PTQ + ∠POQ = 180°\nSo the two angles are supplementary.' },
      { marks: 3, q: 'A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.',
        keypoints: [
          { text: 'Let the circle touch AB, BC, CD, DA at P, Q, R, S', kw: ['P', 'S'] },
          { text: 'Equal tangents: AP = AS, BP = BQ, CR = CQ, DR = DS', kw: ['AP = AS|AP=AS', 'DR = DS|DR=DS'] },
          { text: 'Add them: (AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)', kw: ['add'] },
          { text: 'So AB + CD = AD + BC', kw: ['AB + CD|AB+CD'] }
        ],
        model: 'Let the circle touch AB, BC, CD and DA at P, Q, R and S.\nTangents from the same point are equal:\nAP = AS, BP = BQ, CR = CQ, DR = DS\nAdding:\nAP + BP + CR + DR = AS + BQ + CQ + DS\n(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)\nAB + CD = AD + BC' },
      { marks: 3, q: 'TP and TQ are tangents from an external point T to a circle with centre O. Prove that ∠PTQ = 2∠OPQ.',
        keypoints: [
          { text: 'TP = TQ, so ∠TPQ = ∠TQP = 90° − θ/2 where θ = ∠PTQ', kw: ['TP = TQ|TP=TQ|isosceles'] },
          { text: '∠OPT = 90°', kw: ['90'] },
          { text: '∠OPQ = 90° − ∠TPQ = θ/2, so ∠PTQ = 2∠OPQ', kw: ['θ/2|half'] }
        ],
        model: 'Let ∠PTQ = θ.\nTP = TQ (tangents from T), so △TPQ is isosceles and ∠TPQ = ∠TQP.\n∠TPQ = (180° − θ)/2 = 90° − θ/2\n∠OPT = 90° (tangent ⟂ radius)\n∠OPQ = ∠OPT − ∠TPQ = 90° − (90° − θ/2) = θ/2\nSo ∠PTQ = θ = 2∠OPQ.' },
      { marks: 3, q: 'Prove that a parallelogram circumscribing a circle is a rhombus.',
        keypoints: [
          { text: 'AB + CD = AD + BC (quadrilateral around a circle)', kw: ['AB + CD|AB+CD'] },
          { text: 'Parallelogram: AB = CD and AD = BC, so 2AB = 2BC', kw: ['2AB|2 AB'] },
          { text: 'All sides equal, so it is a rhombus', kw: ['rhombus'] }
        ],
        model: 'Let parallelogram ABCD circumscribe a circle, touching AB, BC, CD, DA at P, Q, R, S.\nEqual tangents: AP = AS, BP = BQ, CR = CQ, DR = DS. Adding: AB + CD = AD + BC.\nIn a parallelogram AB = CD and AD = BC, so 2AB = 2BC, i.e. AB = BC.\nThen AB = BC = CD = DA, so ABCD is a rhombus.' },
      { marks: 3, q: 'Prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.',
        keypoints: [
          { text: 'OC ⟂ AB (tangent ⟂ radius of the smaller circle)', kw: ['⟂|perpendicular|90'] },
          { text: 'The perpendicular from the centre to a chord bisects it', kw: ['bisect'] },
          { text: 'So AC = CB', kw: ['AC = CB|AC=CB|AC = BC'] }
        ],
        model: 'Let O be the common centre, and let chord AB of the larger circle touch the smaller circle at C.\nAB is a tangent to the smaller circle at C, so OC ⟂ AB (Theorem 10.1).\nOC is a perpendicular from the centre of the larger circle to its chord AB, and the perpendicular from the centre bisects the chord.\n(Or: △OCA ≅ △OCB by RHS, since OA = OB and OC is common.)\nSo AC = CB: AB is bisected at C.' },
      { marks: 5, q: 'A triangle ABC is drawn to circumscribe a circle of radius 4 cm. The circle touches BC at D so that BD = 8 cm and DC = 6 cm. Find AB and AC.',
        keypoints: [
          { text: 'Let AF = AE = x; BF = BD = 8, CE = CD = 6', kw: ['x'] },
          { text: 'AB = x + 8, AC = x + 6, BC = 14, s = 14 + x', kw: ['14'] },
          { text: 'Area = r × s = 4(14 + x); Heron: √[(14 + x) × x × 8 × 6]', kw: ['Heron|area'] },
          { text: '16(14 + x)² = 48x(14 + x) → x = 7', kw: ['x = 7|x=7'] },
          { text: 'AB = 15 cm, AC = 13 cm', kw: ['15', '13'] }
        ],
        model: 'Let the circle touch AB at F and AC at E, with AF = AE = x.\nBF = BD = 8 cm and CE = CD = 6 cm (equal tangents).\nAB = x + 8, AC = x + 6, BC = 14\nHalf perimeter s = (x + 8 + x + 6 + 14)/2 = 14 + x\nArea = ½ × r × perimeter = r × s = 4(14 + x)\nHeron: area = √[s(s − BC)(s − AC)(s − AB)] = √[(14 + x) × x × 8 × 6]\nSo 16(14 + x)² = 48x(14 + x)\n14 + x = 3x → x = 7\nAB = 7 + 8 = 15 cm, AC = 7 + 6 = 13 cm' },
      { marks: 5, q: 'XY and X′Y′ are two parallel tangents to a circle with centre O. Another tangent AB, touching the circle at C, meets XY at A and X′Y′ at B. Prove that ∠AOB = 90°.',
        keypoints: [
          { text: 'Let XY touch at P and X′Y′ at Q; join OP, OC, OQ', kw: ['OC'] },
          { text: '△OPA ≅ △OCA (RHS / SSS), so ∠PAO = ∠CAO', kw: ['RHS|SSS|congruent|≅'] },
          { text: 'Similarly ∠QBO = ∠CBO', kw: ['similarly|QBO'] },
          { text: '∠PAB + ∠QBA = 180° (co-interior angles, XY ∥ X′Y′)', kw: ['180', 'co-interior|interior|parallel'] },
          { text: 'So ∠OAB + ∠OBA = 90°, hence ∠AOB = 90°', kw: ['90'] }
        ],
        model: 'Let XY touch the circle at P and X′Y′ at Q. Join OP, OQ and OC.\nIn △OPA and △OCA: OP = OC (radii), OA common, AP = AC (tangents from A).\nSo △OPA ≅ △OCA (SSS), and ∠PAO = ∠CAO, i.e. ∠OAB = ½∠PAB.\nSimilarly △OQB ≅ △OCB, so ∠OBA = ½∠QBA.\nXY ∥ X′Y′ and AB is a transversal, so ∠PAB + ∠QBA = 180° (co-interior angles).\n∠OAB + ∠OBA = ½ × 180° = 90°\nIn △AOB: ∠AOB = 180° − 90° = 90°.' }
    ]
  });
})();
