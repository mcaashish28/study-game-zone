// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 6: Triangles
// In the syllabus: similar figures, similarity of triangles, Basic Proportionality Theorem (Thales) and its converse,
// criteria for similarity (AAA/AA, SSS, SAS).
// Not in the syllabus: areas of similar triangles, Pythagoras theorem (old sections 6.5 and 6.6).
// Note: the app turns a digit after a letter or after ')' into a subscript, so lengths are written "AD = 3", never "AD3".
(function () {
  const R = x => Math.round(x * 1000) / 1000;
  const dn = (mk, x) => mk.num(R(x));
  // Ratio of two (possibly decimal) lengths as a simple fraction: ratio(mk, 1.5, 3) -> "1/2"
  const ratio = (mk, n, d) => mk.frac(Math.round(n * 100), Math.round(d * 100));
  const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(v => v[1]);

  // Triangle names for BPT questions: top vertex, base vertices, and the points on the two sides.
  const NAMES = [
    { T: 'ABC', top: 'A', l: 'B', r: 'C', d: 'D', e: 'E' },
    { T: 'PQR', top: 'P', l: 'Q', r: 'R', d: 'E', e: 'F' },
    { T: 'XYZ', top: 'X', l: 'Y', r: 'Z', d: 'M', e: 'N' }
  ];

  // SVG: triangle with a line parallel to the base. lab = { ad, db, ae, ec } (text, '' to hide; 'x' is drawn in gold).
  function bptSvg(nm, lab, t) {
    const W = 300, H = 215, A = [120 + Math.round(Math.random() * 60), 22], B = [28, 190], C = [272, 190];
    const lerp = (P, Q, s) => [P[0] + (Q[0] - P[0]) * s, P[1] + (Q[1] - P[1]) * s];
    const D = lerp(A, B, t), E = lerp(A, C, t);
    const mid = (P, Q) => [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2];
    const f = v => v.toFixed(1);
    const side = (P, Q, txt, left) => {
      if (!txt) return '';
      const [x, y] = mid(P, Q), col = txt === 'x' ? 'var(--gold)' : 'var(--text)';
      return `<text x="${f(left ? x - 10 : x + 10)}" y="${f(y + 4)}" text-anchor="${left ? 'end' : 'start'}" style="fill:${col};font-size:14px;font-weight:700">${txt}</text>`;
    };
    const pt = (P, name, dx, dy, anchor) => `<circle cx="${f(P[0])}" cy="${f(P[1])}" r="3" style="fill:var(--text)"/>` +
      `<text x="${f(P[0] + dx)}" y="${f(P[1] + dy)}" text-anchor="${anchor}" style="fill:var(--muted);font-size:14px;font-weight:700">${name}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Triangle ${nm.T} with ${nm.d}${nm.e} parallel to ${nm.l}${nm.r}">
      <polygon points="${A.map(f)} ${B.map(f)} ${C.map(f)}" style="fill:none;stroke:var(--muted);stroke-width:2"/>
      <line x1="${f(D[0])}" y1="${f(D[1])}" x2="${f(E[0])}" y2="${f(E[1])}" style="stroke:var(--accent-2);stroke-width:3"/>
      ${side(A, D, lab.ad, true)}${side(D, B, lab.db, true)}${side(A, E, lab.ae, false)}${side(E, C, lab.ec, false)}
      ${pt(A, nm.top, 0, -8, 'middle')}${pt(B, nm.l, -4, 18, 'middle')}${pt(C, nm.r, 4, 18, 'middle')}${pt(D, nm.d, -8, -4, 'end')}${pt(E, nm.e, 8, -4, 'start')}
    </svg>`;
  }

  const CRIT = ['Similar by AA', 'Similar by SSS', 'Similar by SAS', 'Not similar'];

  SWG.addChapter('math', {
    id: 'math-ch06',
    number: 6,
    title: 'Triangles',
    icon: '📐',

    topics: {
      similar: 'Similar Figures',
      bpt: 'Basic Proportionality Theorem',
      crit: 'Criteria for Similarity',
      apply: 'Using Similar Triangles',
      word: 'Heights & Shadows'
    },

    summary: [
      'Similar figures have the same shape but not necessarily the same size. Congruent figures are always similar, but similar figures need not be congruent.',
      'Two polygons with the same number of sides are similar if (i) their corresponding angles are equal AND (ii) their corresponding sides are in the same ratio.',
      'All circles, all squares and all equilateral triangles are similar.',
      'Basic Proportionality Theorem (Thales): a line drawn parallel to one side of a triangle, cutting the other two sides at distinct points, divides them in the same ratio. If DE ∥ BC, then AD/DB = AE/EC.',
      'Converse of BPT: if a line divides two sides of a triangle in the same ratio, it is parallel to the third side.',
      'Criteria: AA (two angles equal), SSS (all three pairs of sides in the same ratio), SAS (one angle equal and the sides including it in the same ratio).',
      '△ABC ~ △PQR means A ↔ P, B ↔ Q, C ↔ R, so ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R and AB/PQ = BC/QR = CA/RP.',
      'In similar triangles, perimeters, medians and altitudes are in the same ratio as the corresponding sides.',
      'Shadows: at the same time, the sun makes the same angle everywhere, so height/shadow is the same for every upright object.'
    ],

    flashcards: [
      { topic: 'similar', front: 'When are two figures similar?', back: 'When they have the same shape but not necessarily the same size.\ne.g. a photo and its enlargement' },
      { topic: 'similar', front: 'Similar vs congruent', back: 'Congruent: same shape AND same size.\nSimilar: same shape, any size.\nEvery pair of congruent figures is similar, but similar figures need not be congruent.' },
      { topic: 'similar', front: 'Which figures are ALWAYS similar?', back: 'All circles\nAll squares\nAll equilateral triangles' },
      { topic: 'similar', front: 'When are two polygons with the same number of sides similar?', back: 'When BOTH are true:\n(i) corresponding angles are equal\n(ii) corresponding sides are in the same ratio' },
      { topic: 'similar', front: 'Is a square similar to a rectangle (that is not a square)?', back: 'No. All angles are 90° in both, but the sides are not in the same ratio.\n(Equal angles alone are not enough for polygons.)' },
      { topic: 'similar', front: 'Is a square similar to a rhombus (that is not a square)?', back: 'No. All sides are in the same ratio, but the angles are not equal.\n(Proportional sides alone are not enough for polygons.)' },
      { topic: 'similar', front: 'Are two isosceles triangles always similar?', back: 'No. e.g. angles 70°, 70°, 40° and angles 40°, 40°, 100° are both isosceles but not similar.' },
      { topic: 'similar', front: 'What does △ABC ~ △PQR tell you?', back: 'A ↔ P, B ↔ Q, C ↔ R\n∠A = ∠P, ∠B = ∠Q, ∠C = ∠R\nAB/PQ = BC/QR = CA/RP\nThe ORDER of the letters shows which parts match.' },
      { topic: 'similar', front: 'What is the scale factor of two similar figures?', back: 'The ratio of any pair of corresponding sides.\ne.g. sides 3, 4, 5 and 6, 8, 10: scale factor 2' },

      { topic: 'bpt', front: 'State the Basic Proportionality Theorem (BPT)', back: 'If a line is drawn parallel to one side of a triangle to cut the other two sides at distinct points, the other two sides are divided in the same ratio.\nIn △ABC, if DE ∥ BC: AD/DB = AE/EC' },
      { topic: 'bpt', front: 'State the converse of BPT', back: 'If a line divides any two sides of a triangle in the same ratio, then it is parallel to the third side.\nIf AD/DB = AE/EC, then DE ∥ BC.' },
      { topic: 'bpt', front: 'Another name for BPT', back: 'Thales theorem (after the Greek mathematician Thales).' },
      { topic: 'bpt', front: 'Other true forms of BPT (DE ∥ BC)', back: 'AD/DB = AE/EC\nAD/AB = AE/AC\nDB/AB = EC/AC' },
      { topic: 'bpt', front: 'DE ∥ BC, AD = 1.5 cm, DB = 3 cm, AE = 1 cm. Find EC.', back: 'AD/DB = AE/EC\n1.5/3 = 1/EC\nEC = 3 × 1 ÷ 1.5 = 2 cm' },
      { topic: 'bpt', front: 'DE ∥ BC, DB = 7.2 cm, AE = 1.8 cm, EC = 5.4 cm. Find AD.', back: 'AD/7.2 = 1.8/5.4 = 1/3\nAD = 7.2 ÷ 3 = 2.4 cm' },
      { topic: 'bpt', front: 'E, F on PQ, PR. PE = 3.9, EQ = 3, PF = 3.6, FR = 2.4. Is EF ∥ QR?', back: 'PE/EQ = 3.9/3 = 1.3\nPF/FR = 3.6/2.4 = 1.5\n1.3 ≠ 1.5, so EF is NOT parallel to QR.' },
      { topic: 'bpt', front: 'E, F on PQ, PR. PE = 4, QE = 4.5, PF = 8, RF = 9. Is EF ∥ QR?', back: 'PE/QE = 4/4.5 = 8/9\nPF/RF = 8/9\nEqual, so EF ∥ QR (converse of BPT).' },
      { topic: 'bpt', front: 'PQ = 1.28 cm, PR = 2.56 cm, PE = 0.18 cm, PF = 0.36 cm. Is EF ∥ QR?', back: 'PE/PQ = 0.18/1.28 = 9/64\nPF/PR = 0.36/2.56 = 9/64\nEqual, so EF ∥ QR.' },
      { topic: 'bpt', front: 'DE ∥ BC with AD = x, DB = x − 2, AE = x + 2, EC = x − 1. Find x.', back: 'x/(x − 2) = (x + 2)/(x − 1)\nx(x − 1) = (x − 2)(x + 2)\nx² − x = x² − 4\nx = 4' },
      { topic: 'bpt', front: 'Midpoint result from BPT', back: 'A line through the midpoint of one side of a triangle, parallel to another side, bisects the third side.\n(AD/DB = 1, so AE/EC = 1)' },
      { topic: 'bpt', front: 'Midpoint result from the converse of BPT', back: 'The line joining the midpoints of any two sides of a triangle is parallel to the third side.' },
      { topic: 'bpt', front: 'ABCD is a trapezium with AB ∥ DC. E on AD and F on BC with EF ∥ AB. Show AE/ED = BF/FC.', back: 'Join AC, cutting EF at G.\nIn △ADC, EG ∥ DC → AE/ED = AG/GC\nIn △CAB, GF ∥ AB → CG/GA = CF/FB, so AG/GC = BF/FC\nHence AE/ED = BF/FC' },
      { topic: 'bpt', front: 'Diagonals of trapezium ABCD (AB ∥ DC) meet at O. Show AO/BO = CO/DO.', back: 'Draw EO ∥ DC through O (E on AD).\nIn △ADC: AE/ED = AO/OC\nIn △DAB: AE/ED = BO/OD\nSo AO/OC = BO/OD → AO/BO = CO/DO' },

      { topic: 'crit', front: 'AAA (AA) similarity criterion', back: 'If the corresponding angles of two triangles are equal, the triangles are similar.\nTwo equal angles are enough (AA), because the third angle is then equal too (angle sum 180°).' },
      { topic: 'crit', front: 'SSS similarity criterion', back: 'If the three sides of one triangle are in the same ratio as the three sides of another, the triangles are similar.\nAB/PQ = BC/QR = CA/RP → △ABC ~ △PQR' },
      { topic: 'crit', front: 'SAS similarity criterion', back: 'If one angle of a triangle equals one angle of another, and the sides INCLUDING these angles are in the same ratio, the triangles are similar.\n∠A = ∠P and AB/PQ = AC/PR → △ABC ~ △PQR' },
      { topic: 'crit', front: 'Congruence vs similarity criteria', back: 'Congruence SSS/SAS: sides EQUAL.\nSimilarity SSS/SAS: sides in the same RATIO.\nThere is no "ASA" or "RHS" needed for similarity — AA is enough.' },
      { topic: 'crit', front: 'Trap in SAS', back: 'The equal angle must be BETWEEN the two proportional sides.\nIf it is not the included angle, you cannot use SAS.' },
      { topic: 'crit', front: '∠A = 60°, ∠B = 80°, ∠C = 40° and ∠P = 80°, ∠Q = 40°, ∠R = 60°. Write the similarity.', back: 'Match equal angles: A ↔ R, B ↔ P, C ↔ Q\n△ABC ~ △RPQ (AAA)' },
      { topic: 'crit', front: 'AB = 2, BC = 2.5, CA = 3 and PQ = 6, QR = 4, RP = 5. Similar?', back: 'Match smallest to smallest: AB/QR = 2/4, BC/RP = 2.5/5, CA/PQ = 3/6 — all 1/2\n△ABC ~ △QRP (SSS)' },
      { topic: 'crit', front: '△ODC ~ △OBA, ∠BOC = 125°, ∠CDO = 70°. Find ∠DOC, ∠DCO, ∠OAB.', back: '∠DOC = 180° − 125° = 55° (DOB is a straight line)\n∠DCO = 180° − 70° − 55° = 55°\n∠OAB = ∠OCD = 55° (corresponding angles of similar triangles)' },
      { topic: 'crit', front: 'In △ABC and △DEF, AB/DE = BC/FD. For similarity, which angles must be equal?', back: 'The angle between AB and BC is ∠B. The angle between DE and FD is ∠D.\nSo ∠B = ∠D (SAS).' },

      { topic: 'apply', front: 'Perimeters of similar triangles', back: 'Ratio of perimeters = ratio of corresponding sides.\ne.g. sides 2 : 3 → perimeters 2 : 3' },
      { topic: 'apply', front: 'Medians and altitudes of similar triangles', back: 'They are in the same ratio as the corresponding sides.\nIf △ABC ~ △PQR with medians AD and PM: AB/PQ = AD/PM' },
      { topic: 'apply', front: '△ABC ~ △DEF, AB = 4 cm, DE = 6 cm, perimeter of △ABC = 18 cm. Perimeter of △DEF?', back: 'Perimeter ratio = 4 : 6 = 2 : 3\nPerimeter of △DEF = 18 × 3/2 = 27 cm' },
      { topic: 'apply', front: 'D is on BC with ∠ADC = ∠BAC. Show CA² = CB × CD.', back: 'In △ADC and △BAC:\n∠ADC = ∠BAC (given), ∠C is common\nSo △ADC ~ △BAC (AA)\nCA/CB = CD/CA → CA² = CB × CD' },
      { topic: 'apply', front: 'Trapezium ABCD (AB ∥ DC), diagonals meet at O. Show OA/OC = OB/OD using similar triangles.', back: 'In △AOB and △COD:\n∠OAB = ∠OCD (alternate angles)\n∠AOB = ∠COD (vertically opposite)\n△AOB ~ △COD (AA) → OA/OC = OB/OD' },
      { topic: 'apply', front: 'PS/SQ = PT/TR and ∠PST = ∠PRQ. Prove △PQR is isosceles.', back: 'PS/SQ = PT/TR → ST ∥ QR (converse of BPT)\nSo ∠PST = ∠PQR (corresponding angles)\nGiven ∠PST = ∠PRQ → ∠PQR = ∠PRQ\nSo PQ = PR: isosceles' },

      { topic: 'word', front: 'A 6 m pole casts a 4 m shadow. At the same time a tower casts a 28 m shadow. How tall is the tower?', back: 'height/shadow is the same:\n6/4 = h/28\nh = 6 × 28 ÷ 4 = 42 m' },
      { topic: 'word', front: 'Why are the pole triangle and tower triangle similar?', back: 'Both stand vertically (90° with the ground), and the sun\'s rays make the same angle with the ground at the same time.\nTwo equal angles → AA similarity.' },
      { topic: 'word', front: 'A girl 90 cm tall walks away from a lamp-post 3.6 m high. After walking 4.8 m, how long is her shadow?', back: 'Shadow = x m. Lamp triangle ~ girl triangle (AA):\n3.6/0.9 = (4.8 + x)/x\n4x = 4.8 + x → 3x = 4.8\nx = 1.6 m' },
      { topic: 'word', front: 'Lamp-post shadow formula', back: 'Lamp height H, person height h, distance from the post D, shadow x:\nH/h = (D + x)/x\nx = hD/(H − h)' }
    ],

    quiz: [
      { topic: 'similar', q: 'Figures with the same shape but not necessarily the same size are called…', options: ['Congruent', 'Similar', 'Equal', 'Identical'], answer: 1, explain: 'Same size too would make them congruent.' },
      { topic: 'similar', q: 'All ___ are similar.', options: ['Isosceles triangles', 'Rectangles', 'Squares', 'Rhombuses'], answer: 2, explain: 'All squares have 90° angles and all sides equal.' },
      { topic: 'similar', q: 'All circles are…', options: ['Congruent', 'Similar', 'Neither similar nor congruent', 'Equal in area'], answer: 1, explain: 'Every circle has the same shape.' },
      { topic: 'similar', q: 'Which pair is NOT always similar?', options: ['Two circles', 'Two squares', 'Two equilateral triangles', 'Two rectangles'], answer: 3, explain: 'Rectangles can be long and thin or nearly square.' },
      { topic: 'similar', q: 'A square and a rhombus (not a square) are not similar because…', options: ['Their sides are not proportional', 'Their angles are not equal', 'They have different numbers of sides', 'Their areas differ'], answer: 1, explain: 'Sides are proportional (all equal), but the angles differ.' },
      { topic: 'similar', q: 'Congruent figures are…', options: ['Always similar', 'Never similar', 'Sometimes similar', 'Not related to similarity'], answer: 0, explain: 'Same shape and size, scale factor 1.' },
      { topic: 'similar', q: 'If △ABC ~ △PQR, then AB/PQ = …', options: ['BC/PR', 'BC/QR', 'AC/PQ', 'AB/QR'], answer: 1, explain: 'B ↔ Q and C ↔ R, so BC matches QR.' },
      { topic: 'similar', q: 'If △ABC ~ △DEF, then ∠C equals…', options: ['∠D', '∠E', '∠F', '∠A'], answer: 2, explain: 'The third letters match: C ↔ F.' },

      { topic: 'bpt', q: 'In △ABC, D is on AB and E is on AC with DE ∥ BC. By BPT…', options: ['AD/DB = AE/EC', 'AD/DB = EC/AE', 'AD/AE = DB/BC', 'AD = AE'], answer: 0, explain: 'The two sides are divided in the same ratio.' },
      { topic: 'bpt', q: 'DE ∥ BC, AD = 1.5 cm, DB = 3 cm, AE = 1 cm. EC = …', options: ['1.5 cm', '2 cm', '3 cm', '0.5 cm'], answer: 1, explain: '1.5/3 = 1/EC → EC = 2' },
      { topic: 'bpt', q: 'DE ∥ BC, DB = 7.2 cm, AE = 1.8 cm, EC = 5.4 cm. AD = …', options: ['2.4 cm', '3.6 cm', '21.6 cm', '1.8 cm'], answer: 0, explain: 'AD/7.2 = 1.8/5.4 = 1/3' },
      { topic: 'bpt', q: 'If DE ∥ BC in △ABC, which is also true?', options: ['AD/AB = AE/AC', 'AD/AB = EC/AC', 'AB/AD = AE/EC', 'DB/AD = AC/AE'], answer: 0, explain: 'Part over whole is the same on both sides.' },
      { topic: 'bpt', q: 'If AD/DB = AE/EC in △ABC, then…', options: ['DE ⊥ BC', 'DE ∥ BC', 'DE = BC', 'D is the midpoint of AB'], answer: 1, explain: 'Converse of BPT.' },
      { topic: 'bpt', q: 'PE = 3.9, EQ = 3, PF = 3.6, FR = 2.4 (E on PQ, F on PR). Is EF ∥ QR?', options: ['Yes, both ratios are 1.3', 'No, 1.3 ≠ 1.5', 'Yes, both ratios are 1.5', 'Cannot say'], answer: 1, explain: '3.9/3 = 1.3 but 3.6/2.4 = 1.5' },
      { topic: 'bpt', q: 'PE = 4, QE = 4.5, PF = 8, RF = 9 (E on PQ, F on PR). Is EF ∥ QR?', options: ['Yes, both ratios are 8/9', 'No, 8/9 ≠ 9/8', 'Yes, both ratios are 9/8', 'Cannot say'], answer: 0, explain: '4/4.5 = 8/9 and 8/9' },
      { topic: 'bpt', q: 'A line through the midpoint of one side of a triangle, parallel to another side…', options: ['Bisects the third side', 'Is perpendicular to the third side', 'Equals the third side', 'Passes through a vertex'], answer: 0, explain: 'AD/DB = 1, so AE/EC = 1.' },
      { topic: 'bpt', q: 'The line joining the midpoints of two sides of a triangle is ___ to the third side.', options: ['Perpendicular', 'Parallel', 'Equal', 'Twice'], answer: 1, explain: 'Converse of BPT with ratio 1 : 1.' },
      { topic: 'bpt', q: 'DE ∥ BC with AD = x, DB = x − 2, AE = x + 2, EC = x − 1. Then x = …', options: ['2', '3', '4', '5'], answer: 2, explain: 'x(x − 1) = (x − 2)(x + 2) → x² − x = x² − 4' },
      { topic: 'bpt', q: 'In trapezium ABCD with AB ∥ DC, the diagonals meet at O. Then AO/BO = …', options: ['CO/DO', 'DO/CO', 'BO/CO', 'AB/AD'], answer: 0, explain: 'AO/OC = BO/OD, so AO/BO = CO/DO.' },
      { topic: 'bpt', q: 'DE ∥ BC, AD = 2 cm, AB = 6 cm, AC = 9 cm. AE = …', options: ['3 cm', '4.5 cm', '6 cm', '2 cm'], answer: 0, explain: 'AD/AB = AE/AC → AE = 2 × 9 ÷ 6' },
      { topic: 'bpt', q: 'The Basic Proportionality Theorem is also called…', options: ['Pythagoras theorem', 'Thales theorem', 'Euclid\'s lemma', 'Midpoint theorem'], answer: 1, explain: 'After the Greek mathematician Thales.' },

      { topic: 'crit', q: 'Two triangles are similar if two angles of one equal two angles of the other. This is the…', options: ['SSS criterion', 'SAS criterion', 'AA criterion', 'RHS criterion'], answer: 2, explain: 'The third angles are then equal too.' },
      { topic: 'crit', q: 'The SAS similarity criterion needs…', options: ['Two sides in the same ratio and the included angle equal', 'Two sides equal', 'Any angle equal and two sides in the same ratio', 'Three angles equal'], answer: 0, explain: 'The angle must be between the two sides.' },
      { topic: 'crit', q: 'The SSS similarity criterion needs…', options: ['All three sides equal', 'All three pairs of corresponding sides in the same ratio', 'Two sides in the same ratio', 'One side equal'], answer: 1, explain: 'Equal sides would be congruence.' },
      { topic: 'crit', q: '∠A = 60°, ∠B = 80°, ∠C = 40° and ∠P = 80°, ∠Q = 40°, ∠R = 60°. Then △ABC ~ …', options: ['△PQR', '△RPQ', '△QRP', '△PRQ'], answer: 1, explain: 'A ↔ R (60°), B ↔ P (80°), C ↔ Q (40°)' },
      { topic: 'crit', q: 'AB = 2, BC = 2.5, CA = 3 and PQ = 6, QR = 4, RP = 5. Then △ABC ~ …', options: ['△PQR', '△QRP', '△RPQ', '△PRQ'], answer: 1, explain: 'AB/QR = BC/RP = CA/PQ = 1/2' },
      { topic: 'crit', q: 'If ∠A = ∠D and AB/DE = AC/DF, then…', options: ['△ABC ~ △DEF by SAS', '△ABC ~ △DEF by SSS', '△ABC ~ △DEF by AA', 'They are not similar'], answer: 0, explain: '∠A is between AB and AC; ∠D is between DE and DF.' },
      { topic: 'crit', q: 'If ∠B = ∠E and AB/DE = AC/DF, then…', options: ['△ABC ~ △DEF by SAS', '△ABC ~ △DEF by AA', 'We cannot say: the angle is not between those sides', 'They are congruent'], answer: 2, explain: '∠B is not between AB and AC, so SAS does not apply.' },
      { topic: 'crit', q: '△ODC ~ △OBA, ∠BOC = 125°, ∠CDO = 70°. ∠DOC = …', options: ['55°', '70°', '125°', '35°'], answer: 0, explain: 'D, O, B lie on a line: 180° − 125°' },
      { topic: 'crit', q: '△ODC ~ △OBA, ∠BOC = 125°, ∠CDO = 70°. ∠OAB = …', options: ['55°', '70°', '125°', '35°'], answer: 0, explain: '∠OAB = ∠OCD = 180° − 70° − 55°' },
      { topic: 'crit', q: 'Triangles with angles 50°, 60°, 70° and 60°, 70°, 50° are…', options: ['Similar (AA)', 'Congruent', 'Not similar', 'Similar only if their sides are equal'], answer: 0, explain: 'Same three angles.' },
      { topic: 'crit', q: 'Triangles with sides 3, 4, 6 and 9, 12, 18 are…', options: ['Similar by SSS (ratio 1 : 3)', 'Not similar', 'Congruent', 'Similar by SAS'], answer: 0, explain: '3/9 = 4/12 = 6/18 = 1/3' },
      { topic: 'crit', q: 'Triangles with sides 4, 6, 8 and 6, 9, 15 are…', options: ['Similar by SSS', 'Not similar', 'Similar by AA', 'Congruent'], answer: 1, explain: '4/6 = 6/9 = 2/3, but 8/15 ≠ 2/3' },
      { topic: 'crit', q: 'In △ABC and △DEF, AB/DE = BC/FD. They are similar when…', options: ['∠B = ∠E', '∠A = ∠D', '∠B = ∠D', '∠A = ∠F'], answer: 2, explain: '∠B is between AB and BC; ∠D is between DE and FD.' },

      { topic: 'apply', q: 'The ratio of the perimeters of two similar triangles equals…', options: ['The ratio of corresponding sides', 'The square of that ratio', 'Its square root', 'Always 1'], answer: 0, explain: 'Every side is multiplied by the same scale factor.' },
      { topic: 'apply', q: '△ABC ~ △DEF, AB = 4 cm, DE = 6 cm, perimeter of △ABC = 18 cm. Perimeter of △DEF = …', options: ['24 cm', '27 cm', '12 cm', '36 cm'], answer: 1, explain: '18 × 6/4 = 27' },
      { topic: 'apply', q: '△ABC ~ △PQR with AB/PQ = 2/3. AD and PM are medians. AD/PM = …', options: ['4/9', '2/3', '3/2', '1'], answer: 1, explain: 'Medians are in the same ratio as the sides.' },
      { topic: 'apply', q: 'Two similar triangles have perimeters 25 cm and 15 cm. A side of the first is 9 cm. The matching side of the second is…', options: ['5.4 cm', '15 cm', '6 cm', '3.6 cm'], answer: 0, explain: '9 × 15/25 = 5.4' },
      { topic: 'apply', q: 'D is on BC of △ABC with ∠ADC = ∠BAC. Then CA² = …', options: ['CB × CD', 'BD × DC', 'AB × AD', 'CB²'], answer: 0, explain: '△ADC ~ △BAC → CA/CB = CD/CA' },
      { topic: 'apply', q: '△ABC ~ △DEF, AB = 3 cm, BC = 4 cm, DE = 6 cm. EF = …', options: ['6 cm', '8 cm', '10 cm', '4 cm'], answer: 1, explain: 'Scale factor 2: 4 × 2' },

      { topic: 'word', q: 'A 6 m pole casts a 4 m shadow. At the same time a tower casts a 28 m shadow. The tower is…', options: ['42 m', '18.7 m', '24 m', '168 m'], answer: 0, explain: '6/4 = h/28' },
      { topic: 'word', q: 'A girl 90 cm tall is 4.8 m from a 3.6 m lamp-post. Her shadow is…', options: ['1.6 m', '1.2 m', '2.4 m', '4.8 m'], answer: 0, explain: '3.6/0.9 = (4.8 + x)/x → x = 1.6' },
      { topic: 'word', q: 'A 1.5 m boy casts a 2 m shadow. At the same time a tree casts a 12 m shadow. The tree is…', options: ['9 m', '16 m', '8 m', '18 m'], answer: 0, explain: '1.5/2 = h/12' },
      { topic: 'word', q: 'Why are the pole and tower triangles similar?', options: ['Both have a right angle and the sun\'s rays make the same angle (AA)', 'Their sides are equal', 'By SSS', 'They are congruent'], answer: 0, explain: 'Two equal angles are enough.' },
      { topic: 'word', q: 'A 10 m tree casts an 8 m shadow. At the same time, a 2.5 m pole casts a shadow of…', options: ['2 m', '3.125 m', '1.6 m', '2.5 m'], answer: 0, explain: '10/8 = 2.5/s → s = 2' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'bpt', gen(mk) {
        const nm = mk.pick(NAMES);
        const [p, q] = mk.pick([[1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2], [3, 4], [4, 3], [2, 5], [5, 2], [3, 5], [1, 1]]);
        let u, v; do { u = mk.pick([1, 1.5, 2, 2.5, 3, 4]); v = mk.pick([1, 1.5, 2, 2.5, 3, 4]); } while (u === v);
        const V = { ad: p * u, db: q * u, ae: p * v, ec: q * v };
        const N = { ad: nm.top + nm.d, db: nm.d + nm.l, ae: nm.top + nm.e, ec: nm.e + nm.r };
        const par = `${nm.d}${nm.e} ∥ ${nm.l}${nm.r}`;
        if (Math.random() < 0.3) {
          // Whole sides: AD/AB = AE/AC
          const AB = R(V.ad + V.db), AC = R(V.ae + V.ec), sAB = nm.top + nm.l, sAC = nm.top + nm.r;
          const askAE = Math.random() < 0.5, ans = askAE ? V.ae : AC;
          return {
            q: `In △${nm.T}, ${par}. ${N.ad} = ${dn(mk, V.ad)} cm, ${sAB} = ${dn(mk, AB)} cm and ${askAE ? `${sAC} = ${dn(mk, AC)}` : `${N.ae} = ${dn(mk, V.ae)}`} cm. Find ${askAE ? N.ae : sAC}.`,
            svg: bptSvg(nm, { ad: dn(mk, V.ad), db: '', ae: askAE ? 'x' : dn(mk, V.ae), ec: '' }, p / (p + q)),
            fields: [{ label: `${askAE ? N.ae : sAC} (cm) =`, answer: R(ans), show: dn(mk, ans) }],
            hint: `Since ${par}, ${N.ad}/${sAB} = ${N.ae}/${sAC}.`,
            steps: `${par}, so by BPT: ${N.ad}/${sAB} = ${N.ae}/${sAC}\n` + (askAE
              ? `${dn(mk, V.ad)}/${dn(mk, AB)} = ${N.ae}/${dn(mk, AC)}\n${N.ae} = ${dn(mk, V.ad)} × ${dn(mk, AC)} ÷ ${dn(mk, AB)} = ${dn(mk, ans)} cm`
              : `${dn(mk, V.ad)}/${dn(mk, AB)} = ${dn(mk, V.ae)}/${sAC}\n${sAC} = ${dn(mk, V.ae)} × ${dn(mk, AB)} ÷ ${dn(mk, V.ad)} = ${dn(mk, ans)} cm`)
          };
        }
        const unk = mk.pick(['ad', 'db', 'ae', 'ec']);
        const L = {}; for (const k in V) L[k] = k === unk ? 'x' : dn(mk, V[k]);
        const how = { ad: ['db', 'ae', 'ec'], db: ['ad', 'ec', 'ae'], ae: ['ad', 'ec', 'db'], ec: ['db', 'ae', 'ad'] }[unk];
        const given = ['ad', 'db', 'ae', 'ec'].filter(k => k !== unk).map(k => `${N[k]} = ${L[k]} cm`).join(', ');
        return {
          q: `In △${nm.T}, ${par}. ${given}. Find ${N[unk]}.`,
          svg: bptSvg(nm, L, p / (p + q)),
          fields: [{ label: `${N[unk]} (cm) =`, answer: R(V[unk]), show: dn(mk, V[unk]) }],
          hint: `Since ${par}, BPT gives ${N.ad}/${N.db} = ${N.ae}/${N.ec}.`,
          steps: `${par}, so by BPT: ${N.ad}/${N.db} = ${N.ae}/${N.ec}\n${L.ad}/${L.db} = ${L.ae}/${L.ec}\n` +
            `x = ${dn(mk, V[how[0]])} × ${dn(mk, V[how[1]])} ÷ ${dn(mk, V[how[2]])} = ${dn(mk, V[unk])} cm`
        };
      } },
      { topic: 'bpt', gen(mk) {
        const nm = mk.pick(NAMES);
        let p, q, u, v; do { p = mk.ri(1, 5); q = mk.ri(1, 5); u = mk.ri(1, 4); v = mk.ri(1, 4); } while (u === v || mk.gcd(p, q) !== 1);
        const V = { ad: p * u, db: q * u, ae: p * v, ec: q * v };
        const yes = Math.random() < 0.5;
        if (!yes) V.ec += V.ec > 1 && Math.random() < 0.5 ? -1 : mk.pick([1, 2]);
        const isPar = V.ad * V.ec === V.db * V.ae;
        const N = { ad: nm.top + nm.d, db: nm.d + nm.l, ae: nm.top + nm.e, ec: nm.e + nm.r };
        const r1 = mk.frac(V.ad, V.db), r2 = mk.frac(V.ae, V.ec);
        return {
          q: `In △${nm.T}, ${nm.d} is on ${nm.top}${nm.l} and ${nm.e} is on ${nm.top}${nm.r}. ${N.ad} = ${V.ad} cm, ${N.db} = ${V.db} cm, ${N.ae} = ${V.ae} cm and ${N.ec} = ${V.ec} cm. Is ${nm.d}${nm.e} ∥ ${nm.l}${nm.r}?`,
          svg: bptSvg(nm, { ad: String(V.ad), db: String(V.db), ae: String(V.ae), ec: String(V.ec) }, p / (p + q)),
          choices: [`Yes, ${nm.d}${nm.e} ∥ ${nm.l}${nm.r}`, `No, ${nm.d}${nm.e} is not parallel to ${nm.l}${nm.r}`],
          answer: isPar ? 0 : 1,
          steps: `${N.ad}/${N.db} = ${V.ad}/${V.db} = ${r1}\n${N.ae}/${N.ec} = ${V.ae}/${V.ec} = ${r2}\n` +
            (isPar ? `The ratios are equal, so by the converse of BPT, ${nm.d}${nm.e} ∥ ${nm.l}${nm.r}.` : `The ratios are not equal, so ${nm.d}${nm.e} is NOT parallel to ${nm.l}${nm.r}.`)
        };
      } },
      { topic: 'bpt', gen(mk) {
        const nm = mk.pick(NAMES);
        let x0, a, b, c, d;
        for (;;) {
          x0 = mk.ri(2, 12); a = mk.ri(-3, 4); b = mk.ri(-3, 4); c = mk.ri(-3, 4);
          const num = (x0 + b) * (x0 + c), den = x0 + a;
          if (den <= 0 || num % den) continue;
          d = num / den - x0;
          if (d < -4 || d > 6 || x0 + b <= 0 || x0 + c <= 0 || x0 + d <= 0 || a + d - b - c === 0) continue;
          break;
        }
        const ex = k => k === 0 ? 'x' : `x ${k < 0 ? '−' : '+'} ${Math.abs(k)}`;
        const pe = k => k === 0 ? 'x' : `(${ex(k)})`;
        const N = { ad: nm.top + nm.d, db: nm.d + nm.l, ae: nm.top + nm.e, ec: nm.e + nm.r };
        const L = mk.poly([1, a + d, a * d]), Rr = mk.poly([1, b + c, b * c]), k = a + d - b - c, m = b * c - a * d;
        return {
          q: `In △${nm.T}, ${nm.d}${nm.e} ∥ ${nm.l}${nm.r}. ${N.ad} = ${ex(a)}, ${N.db} = ${ex(b)}, ${N.ae} = ${ex(c)} and ${N.ec} = ${ex(d)} (in cm). Find x.`,
          svg: bptSvg(nm, { ad: ex(a), db: ex(b), ae: ex(c), ec: ex(d) }, 0.45),
          fields: [{ label: 'x =', answer: x0 }],
          hint: 'Use BPT, then cross-multiply. The x² terms cancel.',
          steps: `By BPT: ${N.ad}/${N.db} = ${N.ae}/${N.ec}\n${pe(a)}/${pe(b)} = ${pe(c)}/${pe(d)}\n${pe(a)}${pe(d)} = ${pe(b)}${pe(c)}\n` +
            `${L} = ${Rr}\n${mk.poly([k, 0])} = ${mk.num(m)}` + (k === 1 ? '' : `\nx = ${x0}`)
        };
      } },
      { topic: 'crit', gen(mk) {
        let a, b, c; do { a = mk.ri(3, 12); b = mk.ri(3, 12); c = mk.ri(3, 12); } while (a + b <= c || b + c <= a || c + a <= b || (a === b && b === c));
        const k = mk.pick([2, 3, 1.5, 2.5, 0.5]);
        const two = mk.pick(['PQR', 'DEF', 'XYZ', 'LMN']).split('');
        const m = shuffle([0, 1, 2]).map(i => two[i]); // A ↔ m[0], B ↔ m[1], C ↔ m[2]
        const S1 = { AB: c, BC: a, CA: b };
        const S2 = [[m[0] + m[1], c * k, 'AB'], [m[1] + m[2], a * k, 'BC'], [m[2] + m[0], b * k, 'CA']];
        const gi = mk.ri(0, 2), g = S2[gi], ask = S2.filter((_, i) => i !== gi);
        return {
          q: `△ABC ~ △${m.join('')}. AB = ${c} cm, BC = ${a} cm, CA = ${b} cm and ${g[0]} = ${dn(mk, g[1])} cm. Find ${ask[0][0]} and ${ask[1][0]}.`,
          fields: ask.map(s => ({ label: `${s[0]} (cm) =`, answer: R(s[1]), show: dn(mk, s[1]) })),
          hint: `The order of letters shows the matching vertices: A ↔ ${m[0]}, B ↔ ${m[1]}, C ↔ ${m[2]}.`,
          steps: `A ↔ ${m[0]}, B ↔ ${m[1]}, C ↔ ${m[2]}\nSo AB/${S2[0][0]} = BC/${S2[1][0]} = CA/${S2[2][0]}\n` +
            `${g[0]} matches ${g[2]}: scale factor = ${dn(mk, g[1])} ÷ ${S1[g[2]]} = ${dn(mk, k)}\n` +
            ask.map(s => `${s[0]} = ${s[2]} × ${dn(mk, k)} = ${S1[s[2]]} × ${dn(mk, k)} = ${dn(mk, s[1])} cm`).join('\n')
        };
      } },
      { topic: 'crit', gen(mk) {
        const kind = mk.pick([0, 1, 2, 3]);
        const sub = kind === 3 ? mk.pick(['AA', 'SSS', 'SAS']) : '';
        if (kind === 0 || sub === 'AA') {
          let al, be, ga, dl;
          do { al = mk.ri(3, 9) * 10; be = mk.ri(3, 9) * 10; ga = 180 - al - be; dl = mk.pick([-10, 10, 20]); }
          while (ga < 20 || al === be || be === ga || al === ga || (kind === 3 && (ga + dl === be || ga + dl <= 0 || be - dl <= 0 || ga + dl === al)));
          const q2 = kind === 3 ? ga + dl : ga;
          return {
            q: `In △ABC, ∠A = ${al}° and ∠B = ${be}°.\nIn △PQR, ∠P = ${al}° and ∠Q = ${q2}°.\nAre the triangles similar?`,
            choices: CRIT,
            answer: kind === 3 ? 3 : 0,
            steps: `∠C = 180° − ${al}° − ${be}° = ${ga}°\n∠R = 180° − ${al}° − ${q2}° = ${180 - al - q2}°\n` +
              (kind === 3 ? `△ABC has angles ${al}°, ${be}°, ${ga}° but △PQR has ${al}°, ${q2}°, ${180 - al - q2}°. They do not match, so NOT similar.`
                : `∠A = ∠P and ∠C = ∠Q (= ${ga}°), so △ABC ~ △PRQ by AA.`)
          };
        }
        let a, b, c; do { a = mk.ri(3, 12); b = mk.ri(3, 12); c = mk.ri(3, 12); } while (a + b <= c || b + c <= a || c + a <= b || a === b || b === c || a === c);
        const k = mk.pick([2, 3, 1.5, 0.5]);
        if (kind === 1 || sub === 'SSS') {
          const t = [a * k, b * k, c * k];
          if (kind === 3) t[mk.ri(0, 2)] += 1;
          const pairs = [['PQ', t[0]], ['QR', t[1]], ['RP', t[2]]];
          const one = [['AB', a], ['BC', b], ['CA', c]];
          const s1 = one.slice().sort((x, y) => x[1] - y[1]), s2 = pairs.slice().sort((x, y) => x[1] - y[1]);
          const rs = s1.map((s, i) => `${s[0]}/${s2[i][0]} = ${dn(mk, s[1])}/${dn(mk, s2[i][1])} = ${ratio(mk, s[1], s2[i][1])}`);
          const same = s1.every((s, i) => Math.abs(s[1] * s2[0][1] - s2[i][1] * s1[0][1]) < 1e-9);
          return {
            q: `△ABC has AB = ${a} cm, BC = ${b} cm, CA = ${c} cm.\n△PQR has PQ = ${dn(mk, t[0])} cm, QR = ${dn(mk, t[1])} cm, RP = ${dn(mk, t[2])} cm.\nAre the triangles similar?`,
            choices: CRIT,
            answer: same ? 1 : 3,
            steps: `Match smallest with smallest, and so on:\n${rs.join('\n')}\n` + (same ? 'All three ratios are equal, so the triangles are similar by SSS.' : 'The ratios are not all equal, so the triangles are NOT similar.')
          };
        }
        const th = mk.ri(4, 12) * 10, th2 = kind === 3 ? th + mk.pick([-20, -10, 10, 20]) : th;
        return {
          q: `In △ABC, AB = ${b} cm, AC = ${c} cm and ∠A = ${th}°.\nIn △PQR, PQ = ${dn(mk, b * k)} cm, PR = ${dn(mk, c * k)} cm and ∠P = ${th2}°.\nAre the triangles similar?`,
          choices: CRIT,
          answer: kind === 3 ? 3 : 2,
          steps: `AB/PQ = ${b}/${dn(mk, b * k)} = ${ratio(mk, b, b * k)} and AC/PR = ${c}/${dn(mk, c * k)} = ${ratio(mk, c, c * k)}: the sides are in the same ratio.\n` +
            (kind === 3 ? `But the angles between them are different (${th}° and ${th2}°), so the triangles are NOT similar.`
              : `The angles between these sides are equal (∠A = ∠P = ${th}°), so △ABC ~ △PQR by SAS.`)
        };
      } },
      { topic: 'apply', gen(mk) {
        const [p, q] = mk.pick([[2, 3], [3, 2], [3, 4], [4, 3], [2, 5], [5, 2], [3, 5], [5, 3], [4, 5], [1, 2], [2, 1]]);
        const m = mk.ri(1, 4), n = mk.ri(4, 15);
        const v = Math.random();
        if (v < 0.5) return {
          q: `△ABC ~ △DEF. AB = ${p * m} cm, DE = ${q * m} cm and the perimeter of △ABC is ${p * n} cm. Find the perimeter of △DEF.`,
          fields: [{ label: 'Perimeter of △DEF (cm) =', answer: q * n }],
          hint: 'In similar triangles, perimeters are in the same ratio as corresponding sides.',
          steps: `Perimeter(△ABC)/Perimeter(△DEF) = AB/DE = ${p * m}/${q * m} = ${p}/${q}\nPerimeter(△DEF) = ${p * n} × ${q}/${p} = ${q * n} cm`
        };
        if (v < 0.75) return {
          q: `Two similar triangles have perimeters ${p * n} cm and ${q * n} cm. A side of the first triangle is ${p * m} cm. Find the corresponding side of the second.`,
          fields: [{ label: 'Side (cm) =', answer: q * m }],
          hint: 'Corresponding sides are in the same ratio as the perimeters.',
          steps: `Ratio of sides = ratio of perimeters = ${p * n}/${q * n} = ${p}/${q}\nSide = ${p * m} × ${q}/${p} = ${q * m} cm`
        };
        return {
          q: `△ABC ~ △PQR with AB = ${p * m} cm and PQ = ${q * m} cm. AD and PM are medians, and AD = ${p * n} cm. Find PM.`,
          fields: [{ label: 'PM (cm) =', answer: q * n }],
          hint: 'Corresponding medians are in the same ratio as corresponding sides.',
          steps: `AD/PM = AB/PQ = ${p * m}/${q * m} = ${p}/${q}\nPM = ${p * n} × ${q}/${p} = ${q * n} cm`
        };
      } },
      { topic: 'word', gen(mk) {
        const r = mk.pick([0.5, 0.75, 1.2, 1.25, 1.5, 2, 3]);
        const [obj, objs] = mk.pick([['tower', 'tower'], ['tree', 'tree'], ['building', 'building'], ['flagpole', 'flagpole']]);
        let s1, s2; do { s1 = mk.ri(2, 10); s2 = mk.ri(8, 60); } while (s2 <= s1);
        const h1 = R(s1 * r), h2 = R(s2 * r);
        if (Math.random() < 0.6) return {
          q: `A vertical pole ${dn(mk, h1)} m high casts a shadow ${s1} m long. At the same time, a ${obj} casts a shadow ${s2} m long. Find the height of the ${objs}.`,
          fields: [{ label: 'Height (m) =', answer: h2, show: dn(mk, h2) }],
          hint: 'Sun\'s rays make the same angle, so the two triangles are similar: height/shadow is the same.',
          steps: `The triangles are similar (AA: right angle + same sun angle).\nheight/shadow is equal:\n${dn(mk, h1)}/${s1} = h/${s2}\nh = ${dn(mk, h1)} × ${s2} ÷ ${s1} = ${dn(mk, h2)} m`
        };
        return {
          q: `A vertical pole ${dn(mk, h1)} m high casts a shadow ${s1} m long. At the same time, a ${obj} ${dn(mk, h2)} m high casts a shadow. How long is that shadow?`,
          fields: [{ label: 'Shadow (m) =', answer: s2 }],
          hint: 'height/shadow is the same for both, since the triangles are similar.',
          steps: `The triangles are similar (AA).\n${dn(mk, h1)}/${s1} = ${dn(mk, h2)}/s\ns = ${dn(mk, h2)} × ${s1} ÷ ${dn(mk, h1)} = ${s2} m`
        };
      } },
      { topic: 'word', gen(mk) {
        let n, h, H, v, t, D, x, bySpeed;
        for (;;) {
          n = mk.pick([2, 3, 4, 5]); h = mk.pick([0.9, 1.2, 1.5, 1.6, 1.8]); H = R(h * (n + 1));
          bySpeed = Math.random() < 0.6;
          if (bySpeed) { v = mk.pick([0.5, 0.6, 0.8, 1, 1.2, 1.5]); t = mk.ri(2, 10); D = R(v * t); }
          else D = R(mk.ri(4, 30) * 0.5);
          x = R(h * D / (H - h));
          if (Math.abs(x * 100 - Math.round(x * 100)) < 1e-6 && H <= 12) break;
        }
        const who = mk.pick(['A girl', 'A boy']);
        const hTxt = h < 1 ? `${Math.round(h * 100)} cm` : `${dn(mk, h)} m`;
        return {
          q: `${who} of height ${hTxt} is walking away from the base of a lamp-post` + (bySpeed ? ` at ${dn(mk, v)} m/s` : '') +
            `. The bulb is ${dn(mk, H)} m above the ground. Find the length of the shadow ` + (bySpeed ? `after ${t} seconds.` : `when the ${who === 'A girl' ? 'girl' : 'boy'} is ${dn(mk, D)} m from the base.`),
          fields: [{ label: 'Shadow (m) =', answer: x, show: dn(mk, x) }],
          hint: `Let the shadow be x m. The lamp-post triangle and the ${who === 'A girl' ? 'girl' : 'boy'}'s triangle are similar: ${dn(mk, H)}/${dn(mk, h)} = (distance + x)/x.`,
          steps: (bySpeed ? `Distance walked = ${dn(mk, v)} × ${t} = ${dn(mk, D)} m\n` : '') + (h < 1 ? `Height = ${hTxt} = ${dn(mk, h)} m\n` : '') +
            `Let the shadow be x m. The two triangles are similar (AA):\n${dn(mk, H)}/${dn(mk, h)} = (${dn(mk, D)} + x)/x\n` +
            `${dn(mk, H)}x = ${dn(mk, h)}(${dn(mk, D)} + x)\n${dn(mk, H)}x − ${dn(mk, h)}x = ${dn(mk, h * D)}\n${dn(mk, H - h)}x = ${dn(mk, h * D)}\nx = ${dn(mk, x)} m`
        };
      } }
    ],

    match: [
      { title: 'Theorems & Criteria', pairs: [
        ['AA', 'Two pairs of equal angles'],
        ['SSS', 'All three side ratios equal'],
        ['SAS', 'Two side ratios equal and the included angle equal'],
        ['BPT', 'DE ∥ BC means AD/DB = AE/EC'],
        ['Converse of BPT', 'AD/DB = AE/EC means DE ∥ BC'],
        ['Midpoint result', 'Line through a midpoint, parallel to a side, bisects the third side']
      ] },
      { title: 'Always Similar?', pairs: [
        ['Two circles', 'Always similar (same shape)'],
        ['Two equilateral triangles', 'Always similar (all angles 60°)'],
        ['Square and rectangle', 'Angles equal, sides not in ratio'],
        ['Square and rhombus', 'Sides in ratio, angles not equal'],
        ['Two congruent triangles', 'Similar with scale factor 1'],
        ['Two isosceles triangles', 'Not always similar']
      ] },
      { title: 'BPT Values (DE ∥ BC)', pairs: [
        ['AD = 1.5, DB = 3, AE = 1', 'EC = 2'],
        ['DB = 7.2, AE = 1.8, EC = 5.4', 'AD = 2.4'],
        ['AD = 2, AB = 6, AC = 9', 'AE = 3'],
        ['AD = 4, DB = 6, EC = 9', 'AE = 6'],
        ['AD = x, DB = x − 2, AE = x + 2, EC = x − 1', 'x = 4'],
        ['AD = 3, DB = 5, AE = 4.5', 'EC = 7.5']
      ] },
      { title: 'Problem → Answer', pairs: [
        ['6 m pole, 4 m shadow; tower shadow 28 m', 'Tower 42 m'],
        ['Girl 0.9 m, lamp 3.6 m, 4.8 m away', 'Shadow 1.6 m'],
        ['△ABC ~ △DEF, AB = 4, DE = 6, perimeter 18', 'Perimeter 27'],
        ['△ODC ~ △OBA, ∠BOC = 125°, ∠CDO = 70°', '∠OAB = 55°'],
        ['Sides in ratio 2 : 3', 'Medians in ratio 2 : 3'],
        ['1.5 m boy, 2 m shadow; tree shadow 12 m', 'Tree 9 m']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'State the Basic Proportionality Theorem.',
        keypoints: [
          { text: 'A line parallel to one side of a triangle', kw: ['parallel'] },
          { text: 'divides the other two sides in the same ratio', kw: ['ratio|proportion'] }
        ],
        model: 'If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.' },
      { marks: 1, q: 'In △ABC, DE ∥ BC with AD = 1.5 cm, DB = 3 cm and AE = 1 cm. Find EC.',
        keypoints: [{ text: '1.5/3 = 1/EC, so EC = 2 cm', kw: ['2'] }],
        model: 'By BPT, AD/DB = AE/EC\n1.5/3 = 1/EC\nEC = 3/1.5 = 2 cm' },
      { marks: 1, q: 'Are all squares similar? Give a reason.',
        keypoints: [
          { text: 'Yes', kw: ['yes'] },
          { text: 'All angles are 90° and all sides are in the same ratio', kw: ['90', 'ratio|proportion'] }
        ],
        model: 'Yes. In any two squares all corresponding angles are 90°, and since all four sides of each square are equal, the corresponding sides are in the same ratio.' },
      { marks: 1, q: '△ABC ~ △DEF with AB = 4 cm and DE = 6 cm. Find the ratio of their perimeters.',
        keypoints: [{ text: '4 : 6 = 2 : 3', kw: ['2 : 3|2:3|2/3'] }],
        model: 'Ratio of perimeters = ratio of corresponding sides = AB : DE = 4 : 6 = 2 : 3' },
      { marks: 2, q: 'E and F are points on the sides PQ and PR of △PQR. PE = 4 cm, QE = 4.5 cm, PF = 8 cm and RF = 9 cm. Is EF ∥ QR?',
        keypoints: [
          { text: 'PE/QE = 4/4.5 = 8/9 and PF/RF = 8/9', kw: ['8/9'] },
          { text: 'Equal ratios, so EF ∥ QR (converse of BPT)', kw: ['parallel|∥'] }
        ],
        model: 'PE/QE = 4/4.5 = 8/9\nPF/RF = 8/9\nSince PE/QE = PF/RF, by the converse of BPT, EF ∥ QR.' },
      { marks: 2, q: 'E and F are points on PQ and PR of △PQR. PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm and FR = 2.4 cm. Is EF ∥ QR?',
        keypoints: [
          { text: 'PE/EQ = 1.3, PF/FR = 1.5', kw: ['1.3', '1.5'] },
          { text: 'Not equal, so EF is not parallel to QR', kw: ['not'] }
        ],
        model: 'PE/EQ = 3.9/3 = 1.3\nPF/FR = 3.6/2.4 = 1.5\nPE/EQ ≠ PF/FR, so EF is NOT parallel to QR.' },
      { marks: 2, q: 'In △ABC, DE ∥ BC with AD = x, DB = x − 2, AE = x + 2 and EC = x − 1. Find x.',
        keypoints: [
          { text: 'x/(x − 2) = (x + 2)/(x − 1)', kw: ['x + 2|x+2'] },
          { text: 'x² − x = x² − 4, so x = 4', kw: ['4'] }
        ],
        model: 'By BPT, AD/DB = AE/EC\nx/(x − 2) = (x + 2)/(x − 1)\nx(x − 1) = (x − 2)(x + 2)\nx² − x = x² − 4\nx = 4' },
      { marks: 2, q: 'A vertical pole of length 6 m casts a shadow 4 m long on the ground. At the same time a tower casts a shadow 28 m long. Find the height of the tower.',
        keypoints: [
          { text: 'The triangles are similar (AA)', kw: ['similar'] },
          { text: '6/4 = h/28 → h = 42 m', kw: ['42'] }
        ],
        model: 'The pole and the tower are both vertical, and the sun\'s rays make the same angle with the ground, so the two triangles are similar (AA).\n6/4 = h/28\nh = 6 × 28 ÷ 4 = 42 m' },
      { marks: 2, q: 'In △ABC, DE ∥ BC with AD = 2 cm, AB = 6 cm and AC = 9 cm. Find AE.',
        keypoints: [
          { text: 'AD/AB = AE/AC', kw: ['AD/AB|ad/ab'] },
          { text: 'AE = 2 × 9 ÷ 6 = 3 cm', kw: ['3'] }
        ],
        model: 'Since DE ∥ BC, AD/AB = AE/AC\n2/6 = AE/9\nAE = 3 cm' },
      { marks: 3, q: 'ABCD is a trapezium with AB ∥ DC. Its diagonals intersect at O. Show that AO/BO = CO/DO.',
        keypoints: [
          { text: '∠OAB = ∠OCD and ∠OBA = ∠ODC (alternate angles)', kw: ['alternate'] },
          { text: '△AOB ~ △COD (AA)', kw: ['AA|similar'] },
          { text: 'AO/CO = BO/DO, so AO/BO = CO/DO', kw: ['CO/DO|co/do'] }
        ],
        model: 'In △AOB and △COD:\n∠OAB = ∠OCD (alternate angles, AB ∥ DC)\n∠AOB = ∠COD (vertically opposite angles)\nSo △AOB ~ △COD (AA)\nAO/CO = BO/DO\nRearranging: AO/BO = CO/DO' },
      { marks: 3, q: '△ODC ~ △OBA, ∠BOC = 125° and ∠CDO = 70°. (D, O, B lie on a line, and A, O, C lie on a line.) Find ∠DOC, ∠DCO and ∠OAB.',
        keypoints: [
          { text: '∠DOC = 180° − 125° = 55°', kw: ['55'] },
          { text: '∠DCO = 180° − 70° − 55° = 55°', kw: ['70'] },
          { text: '∠OAB = ∠OCD = 55°', kw: ['OAB|oab'] }
        ],
        model: '∠DOC = 180° − ∠BOC = 180° − 125° = 55° (linear pair)\nIn △DOC: ∠DCO = 180° − 70° − 55° = 55°\nSince △ODC ~ △OBA, ∠OAB = ∠OCD = 55°' },
      { marks: 3, q: 'A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground, find the length of her shadow after 4 seconds.',
        keypoints: [
          { text: 'Distance = 1.2 × 4 = 4.8 m', kw: ['4.8'] },
          { text: '3.6/0.9 = (4.8 + x)/x', kw: ['0.9'] },
          { text: 'x = 1.6 m', kw: ['1.6'] }
        ],
        model: 'Distance walked in 4 s = 1.2 × 4 = 4.8 m\nLet the shadow be x m. The lamp-post triangle and the girl\'s triangle are similar (AA).\n3.6/0.9 = (4.8 + x)/x\n4x = 4.8 + x\n3x = 4.8 → x = 1.6 m' },
      { marks: 3, q: 'S and T are points on sides PQ and PR of △PQR such that PS/SQ = PT/TR and ∠PST = ∠PRQ. Prove that △PQR is isosceles.',
        keypoints: [
          { text: 'PS/SQ = PT/TR → ST ∥ QR (converse of BPT)', kw: ['converse'] },
          { text: '∠PST = ∠PQR (corresponding angles)', kw: ['corresponding'] },
          { text: '∠PQR = ∠PRQ → PQ = PR', kw: ['PQ = PR|pq = pr|isosceles'] }
        ],
        model: 'PS/SQ = PT/TR, so ST ∥ QR (converse of BPT).\nSo ∠PST = ∠PQR (corresponding angles).\nGiven ∠PST = ∠PRQ, so ∠PQR = ∠PRQ.\nSides opposite equal angles are equal: PQ = PR.\nSo △PQR is isosceles.' },
      { marks: 3, q: 'D is a point on side BC of △ABC such that ∠ADC = ∠BAC. Show that CA² = CB × CD.',
        keypoints: [
          { text: '∠ADC = ∠BAC and ∠C is common', kw: ['common'] },
          { text: '△ADC ~ △BAC (AA)', kw: ['AA|similar'] },
          { text: 'CA/CB = CD/CA → CA² = CB × CD', kw: ['CD/CA|cd/ca'] }
        ],
        model: 'In △ADC and △BAC:\n∠ADC = ∠BAC (given)\n∠ACD = ∠BCA (common angle)\nSo △ADC ~ △BAC (AA)\nCorresponding sides: CA/CB = CD/CA\nSo CA² = CB × CD' },
      { marks: 3, q: 'Using BPT, prove that a line drawn through the midpoint of one side of a triangle, parallel to another side, bisects the third side.',
        keypoints: [
          { text: 'D is the midpoint of AB, so AD = DB', kw: ['midpoint'] },
          { text: 'DE ∥ BC → AD/DB = AE/EC (BPT)', kw: ['AE/EC|ae/ec'] },
          { text: 'AD/DB = 1 → AE = EC', kw: ['AE = EC|ae = ec'] }
        ],
        model: 'In △ABC, let D be the midpoint of AB and DE ∥ BC with E on AC.\nBy BPT, AD/DB = AE/EC.\nSince AD = DB, AD/DB = 1, so AE/EC = 1.\nSo AE = EC: E is the midpoint of AC, and DE bisects AC.' },
      { marks: 5, q: 'State and prove the Basic Proportionality Theorem.',
        keypoints: [
          { text: 'Statement: DE ∥ BC → AD/DB = AE/EC', kw: ['parallel|∥', 'ratio|AD/DB'] },
          { text: 'Join BE and CD; draw DM ⊥ AC and EN ⊥ AB', kw: ['⊥|perpendicular'] },
          { text: 'ar(ADE)/ar(BDE) = AD/DB and ar(ADE)/ar(DEC) = AE/EC', kw: ['ar|area'] },
          { text: 'ar(BDE) = ar(DEC): same base DE, between the same parallels', kw: ['same base|same parallels'] },
          { text: 'Hence AD/DB = AE/EC', kw: ['hence|therefore|so'] }
        ],
        model: 'Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nGiven: In △ABC, DE ∥ BC, D on AB, E on AC.\nTo prove: AD/DB = AE/EC\nConstruction: Join BE and CD. Draw DM ⊥ AC and EN ⊥ AB.\nProof:\nar(ADE) = ½ × AD × EN and ar(BDE) = ½ × DB × EN\nSo ar(ADE)/ar(BDE) = AD/DB …(1)\nar(ADE) = ½ × AE × DM and ar(DEC) = ½ × EC × DM\nSo ar(ADE)/ar(DEC) = AE/EC …(2)\n△BDE and △DEC are on the same base DE and between the same parallels DE and BC, so ar(BDE) = ar(DEC) …(3)\nFrom (1), (2) and (3): AD/DB = AE/EC' },
      { marks: 5, q: 'ABCD is a trapezium with AB ∥ DC. E and F are points on the non-parallel sides AD and BC such that EF ∥ AB. Show that AE/ED = BF/FC.',
        keypoints: [
          { text: 'Join AC, meeting EF at G', kw: ['AC|ac'] },
          { text: 'EF ∥ AB and AB ∥ DC → EG ∥ DC', kw: ['EG|eg'] },
          { text: 'In △ADC: AE/ED = AG/GC (BPT)', kw: ['AG/GC|ag/gc'] },
          { text: 'In △CAB: CG/GA = CF/FB, so AG/GC = BF/FC', kw: ['BF/FC|bf/fc'] },
          { text: 'Hence AE/ED = BF/FC', kw: ['AE/ED|ae/ed'] }
        ],
        model: 'Join AC, cutting EF at G.\nSince EF ∥ AB and AB ∥ DC, EG ∥ DC and GF ∥ AB.\nIn △ADC, EG ∥ DC, so by BPT: AE/ED = AG/GC …(1)\nIn △CAB, GF ∥ AB, so by BPT: CG/GA = CF/FB, i.e. AG/GC = BF/FC …(2)\nFrom (1) and (2): AE/ED = BF/FC' }
    ]
  });
})();
