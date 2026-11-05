// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 8: Introduction to Trigonometry
// In the syllabus: trigonometric ratios of an acute angle, ratios of 0°, 30°, 45°, 60°, 90°, the three identities.
// Not in the syllabus: trigonometric ratios of complementary angles (sin(90° − A) etc.).
// Write powers with Unicode superscripts (sin²A) and keep a space before angles ("tan 45°"):
// the app turns a digit after a letter or ')' into a subscript.
(function () {
  const ANG = [0, 30, 45, 60, 90];
  const VAL = {
    sin: ['0', '1/2', '1/√2', '√3/2', '1'],
    cos: ['1', '√3/2', '1/√2', '1/2', '0'],
    tan: ['0', '1/√3', '1', '√3', null],
    cosec: [null, '2', '√2', '2/√3', '1'],
    sec: ['1', '2/√3', '√2', '2', null],
    cot: [null, '√3', '1', '1/√3', '0']
  };
  // Squares of the values, in twelfths (sin² 30° = 1/4 = 3/12). null = not defined.
  const SQ12 = {
    sin: [0, 3, 6, 9, 12], cos: [12, 9, 6, 3, 0], tan: [0, 4, 12, 36, null],
    cot: [null, 36, 12, 4, 0], sec: [12, 16, 24, 48, null], cosec: [null, 48, 24, 16, 12]
  };
  const SIDES = {
    sin: ['opposite', 'hypotenuse'], cos: ['adjacent', 'hypotenuse'], tan: ['opposite', 'adjacent'],
    cosec: ['hypotenuse', 'opposite'], sec: ['hypotenuse', 'adjacent'], cot: ['adjacent', 'opposite']
  };
  const FNS = ['sin', 'cos', 'tan', 'cosec', 'sec', 'cot'];
  const ALLVALS = ['0', '1/2', '1/√2', '√3/2', '1', '1/√3', '√3', '2', '√2', '2/√3', 'Not defined'];
  const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41], [12, 35, 37]];
  const shuffle = (mk, a) => a.map(t => [Math.random(), t]).sort((x, y) => x[0] - y[0]).map(x => x[1]);

  // MCQ options: the right answer plus 3 different wrong ones from pool.
  function options(mk, right, pool) {
    const wrong = shuffle(mk, [...new Set(pool)].filter(w => w !== right)).slice(0, 3);
    const opts = shuffle(mk, [right, ...wrong]);
    return { choices: opts, answer: opts.indexOf(right) };
  }

  // Right triangle ABC with the right angle at B. lab: { AB, BC, AC } text for each side.
  function triSvg(ab, bc, lab) {
    const s = Math.min(200 / bc, 130 / ab), Bx = 50, By = 165, Ax = Bx, Ay = By - ab * s, Cx = Bx + bc * s, Cy = By;
    const t = (x, y, str, anc = 'middle', extra = '') => `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anc}" style="fill:var(--text);font-size:14px;font-weight:700${extra}">${str}</text>`;
    return `<svg viewBox="0 0 300 200" role="img" aria-label="Right triangle ABC with the right angle at B">
      <polygon points="${Ax},${Ay.toFixed(1)} ${Bx},${By} ${Cx.toFixed(1)},${Cy}" style="fill:none;stroke:var(--accent-2);stroke-width:3;stroke-linejoin:round"/>
      <path d="M${Bx},${By - 12} h12 v12" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
      ${t(Ax, Ay - 8, 'A')}${t(Bx - 12, By + 16, 'B')}${t(Cx + 12, Cy + 16, 'C')}
      ${t(Bx - 8, (Ay + By) / 2 + 5, lab.AB, 'end', ';fill:var(--gold)')}
      ${t((Bx + Cx) / 2, By + 20, lab.BC, 'middle', ';fill:var(--gold)')}
      ${t((Ax + Cx) / 2 + 10, (Ay + Cy) / 2 - 6, lab.AC, 'start', ';fill:var(--gold)')}
    </svg>`;
  }

  // Bank of identity simplifications: [expression, simplest form, worked steps].
  const IDENT = [
    ['sec²A − tan²A', '1', 'From 1 + tan²A = sec²A:\nsec²A − tan²A = 1'],
    ['cosec²A − cot²A', '1', 'From 1 + cot²A = cosec²A:\ncosec²A − cot²A = 1'],
    ['(1 + tan²A) cos²A', '1', '(1 + tan²A) cos²A = sec²A × cos²A = (1/cos²A) × cos²A = 1'],
    ['(1 − sin²A) sec²A', '1', '(1 − sin²A) sec²A = cos²A × (1/cos²A) = 1'],
    ['(1 + cot²A) sin²A', '1', '(1 + cot²A) sin²A = cosec²A × sin²A = 1'],
    ['(1 − cos²A) cosec²A', '1', '(1 − cos²A) cosec²A = sin²A × (1/sin²A) = 1'],
    ['9 sec²A − 9 tan²A', '9', '9 sec²A − 9 tan²A = 9(sec²A − tan²A) = 9 × 1 = 9'],
    ['(1 + tan²A)/(1 + cot²A)', 'tan²A', '= sec²A/cosec²A = (1/cos²A) × sin²A = sin²A/cos²A = tan²A'],
    ['(sec A + tan A)(1 − sin A)', 'cos A', '= (1/cos A + sin A/cos A)(1 − sin A)\n= (1 + sin A)(1 − sin A)/cos A\n= (1 − sin²A)/cos A = cos²A/cos A = cos A'],
    ['sin A × cot A', 'cos A', 'sin A × (cos A/sin A) = cos A'],
    ['cos A × tan A', 'sin A', 'cos A × (sin A/cos A) = sin A'],
    ['tan A/sec A', 'sin A', '(sin A/cos A) ÷ (1/cos A) = (sin A/cos A) × cos A = sin A'],
    ['sec A × sin A', 'tan A', '(1/cos A) × sin A = sin A/cos A = tan A'],
    ['cosec A × cos A', 'cot A', '(1/sin A) × cos A = cos A/sin A = cot A'],
    ['sin²A/(1 − sin²A)', 'tan²A', '1 − sin²A = cos²A, so this is sin²A/cos²A = tan²A'],
    ['(1 + sin A)(1 − sin A)', 'cos²A', '= 1 − sin²A = cos²A'],
    ['(sec A − 1)(sec A + 1)', 'tan²A', '= sec²A − 1 = tan²A'],
    ['(cosec A − 1)(cosec A + 1)', 'cot²A', '= cosec²A − 1 = cot²A'],
    ['cos²A + 1/(1 + cot²A)', '1', '1 + cot²A = cosec²A, so 1/(1 + cot²A) = sin²A\ncos²A + sin²A = 1'],
    ['sin⁴A − cos⁴A', 'sin²A − cos²A', '= (sin²A + cos²A)(sin²A − cos²A)\n= 1 × (sin²A − cos²A) = sin²A − cos²A'],
    ['(sin A + cos A)² + (sin A − cos A)²', '2', '= (sin²A + cos²A + 2 sin A cos A) + (sin²A + cos²A − 2 sin A cos A)\n= 1 + 1 = 2'],
    ['1 − cos²A', 'sin²A', 'From sin²A + cos²A = 1: 1 − cos²A = sin²A'],
    ['(1 − cos²A)/cos²A', 'tan²A', '= sin²A/cos²A = tan²A'],
    ['cot²A − cosec²A', '−1', 'cosec²A = 1 + cot²A, so cot²A − cosec²A = −1']
  ];
  const IDPOOL = ['1', '0', '2', '−1', '9', 'sin A', 'cos A', 'tan A', 'cot A', 'sin²A', 'cos²A', 'tan²A', 'cot²A', 'sec²A', 'cosec²A', 'sin²A − cos²A'];

  // Expressions with products of standard values that give a rational answer: [expression, value12 (twelfths), steps]
  const PROD = [
    ['sin 60° cos 30° + sin 30° cos 60°', 12, '= (√3/2)(√3/2) + (1/2)(1/2)\n= 3/4 + 1/4 = 1'],
    ['cos 60° cos 30° − sin 60° sin 30°', 0, '= (1/2)(√3/2) − (√3/2)(1/2)\n= √3/4 − √3/4 = 0'],
    ['sin 45° cos 45° + tan 45°', 18, '= (1/√2)(1/√2) + 1\n= 1/2 + 1 = 3/2'],
    ['tan 30° × tan 60°', 12, '= (1/√3) × √3 = 1'],
    ['sec 60° × cos 60° + sin 90°', 24, '= 2 × 1/2 + 1 = 1 + 1 = 2'],
    ['cosec 30° × sin 30° + cot 45°', 24, '= 2 × 1/2 + 1 = 1 + 1 = 2'],
    ['2 sin 30° cos 60°', 6, '= 2 × 1/2 × 1/2 = 1/2'],
    ['(sin 30° + cos 60°) tan 45°', 12, '= (1/2 + 1/2) × 1 = 1'],
    ['sin 45° cos 45° − sin 30°', 0, '= (1/√2)(1/√2) − 1/2\n= 1/2 − 1/2 = 0'],
    ['4 sin 30° cos 60° − tan 60° × tan 60°', -24, '= 4 × 1/2 × 1/2 − √3 × √3\n= 1 − 3 = −2'],
    ['cos 0° + sin 90° + sec 60°', 48, '= 1 + 1 + 2 = 4'],
    ['sin 90° − cos 90° + tan 0°', 12, '= 1 − 0 + 0 = 1'],
    ['cosec 45° × sin 45° + sec 30° × cos 30°', 24, '= √2 × 1/√2 + (2/√3) × (√3/2)\n= 1 + 1 = 2']
  ];

  SWG.addChapter('math', {
    id: 'math-ch08',
    number: 8,
    title: 'Introduction to Trigonometry',
    icon: '📐',

    topics: {
      ratios: 'Trigonometric Ratios',
      find: 'One Ratio → All Ratios',
      values: 'Ratios of 0°, 30°, 45°, 60°, 90°',
      evaluate: 'Evaluating & Finding Angles',
      ident: 'Trigonometric Identities'
    },

    summary: [
      'In a right triangle, for an acute angle A: sin A = opposite/hypotenuse, cos A = adjacent/hypotenuse, tan A = opposite/adjacent.',
      'cosec A = 1/sin A, sec A = 1/cos A, cot A = 1/tan A. Also tan A = sin A/cos A and cot A = cos A/sin A.',
      'The ratios depend only on the angle, not on the size of the triangle. For an acute angle, sin A and cos A are less than 1, while sec A and cosec A are at least 1.',
      'If one ratio is known, draw a right triangle, label two sides from it (using k), find the third side by Pythagoras, and read off all the other ratios.',
      'Standard values: sin 0°, 30°, 45°, 60°, 90° = 0, 1/2, 1/√2, √3/2, 1. cos goes the other way: 1, √3/2, 1/√2, 1/2, 0. tan = 0, 1/√3, 1, √3, not defined.',
      'tan 90°, sec 90°, cosec 0° and cot 0° are not defined (they would need dividing by 0).',
      'Identities (true for every angle where both sides are defined): sin²A + cos²A = 1, 1 + tan²A = sec²A, 1 + cot²A = cosec²A.',
      'To prove an identity: start with the more complicated side, change everything to sin and cos, and simplify using the identities.'
    ],

    flashcards: [
      { topic: 'ratios', front: 'Name the three sides of a right triangle with respect to angle A.', back: 'Hypotenuse: the side opposite the right angle (the longest side).\nOpposite side: the side facing angle A.\nAdjacent side: the other side that touches angle A.' },
      { topic: 'ratios', front: 'sin A, cos A and tan A', back: 'sin A = opposite/hypotenuse\ncos A = adjacent/hypotenuse\ntan A = opposite/adjacent' },
      { topic: 'ratios', front: 'cosec A, sec A and cot A', back: 'cosec A = hypotenuse/opposite = 1/sin A\nsec A = hypotenuse/adjacent = 1/cos A\ncot A = adjacent/opposite = 1/tan A' },
      { topic: 'ratios', front: 'tan A and cot A in terms of sin A and cos A', back: 'tan A = sin A/cos A\ncot A = cos A/sin A' },
      { topic: 'ratios', front: 'A memory trick for sin, cos and tan', back: '"Some People Have Curly Brown Hair Through Proper Brushing"\nsin = P/H, cos = B/H, tan = P/B\n(P = perpendicular/opposite, B = base/adjacent, H = hypotenuse)' },
      { topic: 'ratios', front: 'Does sin A change if the triangle is made bigger?', back: 'No. Bigger triangles with the same angle A are similar, so the ratio of their sides stays the same. The ratios depend only on the angle.' },
      { topic: 'ratios', front: 'Why is sin A (or cos A) less than 1 for an acute angle A?', back: 'Because the hypotenuse is the longest side, so opposite/hypotenuse and adjacent/hypotenuse are both less than 1.\nSo sec A and cosec A are always at least 1.' },
      { topic: 'ratios', front: 'Can tan A be greater than 1?', back: 'Yes. tan A = opposite/adjacent, and the opposite side can be longer than the adjacent side.\ne.g. tan 60° = √3 ≈ 1.73' },
      { topic: 'ratios', front: 'Is "sin A" the same as sin × A?', back: 'No. "sin A" is one symbol: the sine of the angle A. You cannot split sin from A.' },
      { topic: 'ratios', front: 'In △ABC, ∠B = 90°, AB = 24 cm, BC = 7 cm. Find sin A, cos A, sin C and cos C.', back: 'AC = √(24² + 7²) = √625 = 25 cm\nsin A = BC/AC = 7/25, cos A = AB/AC = 24/25\nsin C = AB/AC = 24/25, cos C = BC/AC = 7/25' },
      { topic: 'ratios', front: 'In △PQR, ∠Q = 90°, PQ = 12 cm and PR = 13 cm. Find tan P − cot R.', back: 'QR = √(13² − 12²) = 5 cm\ntan P = QR/PQ = 5/12\ncot R = QR/PQ = 5/12\ntan P − cot R = 0' },
      { topic: 'ratios', front: 'If ∠A and ∠B are acute and cos A = cos B, what can you say?', back: '∠A = ∠B. (Equal cos values for acute angles mean equal angles.)' },

      { topic: 'find', front: 'How do you find all the ratios when one is given?', back: '1. Write the given ratio as side/side\n2. Call the two sides like 3k and 5k\n3. Find the third side by Pythagoras\n4. Read off every other ratio' },
      { topic: 'find', front: 'If sin A = 3/4, find cos A and tan A.', back: 'Opposite = 3k, hypotenuse = 4k\nAdjacent = √(16k² − 9k²) = √7 k\ncos A = √7/4\ntan A = 3/√7' },
      { topic: 'find', front: 'If 15 cot A = 8, find sin A and sec A.', back: 'cot A = 8/15: adjacent = 8k, opposite = 15k\nHypotenuse = √(64k² + 225k²) = 17k\nsin A = 15/17\nsec A = 17/8' },
      { topic: 'find', front: 'If sec θ = 13/12, find all the other ratios.', back: 'Hypotenuse = 13k, adjacent = 12k, opposite = 5k\nsin θ = 5/13, cos θ = 12/13, tan θ = 5/12\ncosec θ = 13/5, cot θ = 12/5' },
      { topic: 'find', front: 'If cot θ = 7/8, evaluate (1 + sin θ)(1 − sin θ) / [(1 + cos θ)(1 − cos θ)].', back: '= (1 − sin²θ)/(1 − cos²θ)\n= cos²θ/sin²θ = cot²θ\n= (7/8)² = 49/64' },
      { topic: 'find', front: 'If 3 cot A = 4, check whether (1 − tan²A)/(1 + tan²A) = cos²A − sin²A.', back: 'tan A = 3/4, so sides 3k, 4k, 5k\nLHS = (1 − 9/16)/(1 + 9/16) = 7/25\nRHS = 16/25 − 9/25 = 7/25\nYes, they are equal.' },
      { topic: 'find', front: 'If sin A = 3/5, find cos A using an identity.', back: 'cos²A = 1 − sin²A = 1 − 9/25 = 16/25\ncos A = 4/5 (positive for an acute angle)' },
      { topic: 'find', front: 'If tan A = 4/3, find (sin A + cos A)/(sin A − cos A).', back: 'Divide top and bottom by cos A:\n(tan A + 1)/(tan A − 1) = (4/3 + 1)/(4/3 − 1) = (7/3)/(1/3) = 7' },

      { topic: 'values', front: 'sin of 0°, 30°, 45°, 60°, 90°', back: '0, 1/2, 1/√2, √3/2, 1' },
      { topic: 'values', front: 'cos of 0°, 30°, 45°, 60°, 90°', back: '1, √3/2, 1/√2, 1/2, 0\n(the sin list backwards)' },
      { topic: 'values', front: 'tan of 0°, 30°, 45°, 60°, 90°', back: '0, 1/√3, 1, √3, not defined' },
      { topic: 'values', front: 'cosec of 0°, 30°, 45°, 60°, 90°', back: 'not defined, 2, √2, 2/√3, 1\n(1 ÷ the sin values)' },
      { topic: 'values', front: 'sec of 0°, 30°, 45°, 60°, 90°', back: '1, 2/√3, √2, 2, not defined\n(1 ÷ the cos values)' },
      { topic: 'values', front: 'cot of 0°, 30°, 45°, 60°, 90°', back: 'not defined, √3, 1, 1/√3, 0\n(1 ÷ the tan values)' },
      { topic: 'values', front: 'A quick trick to remember the sin values', back: 'sin 0°, 30°, 45°, 60°, 90° = √0/2, √1/2, √2/2, √3/2, √4/2\n= 0, 1/2, 1/√2, √3/2, 1\nFor cos, read the same list backwards.' },
      { topic: 'values', front: 'Why is tan 90° not defined?', back: 'tan 90° = sin 90°/cos 90° = 1/0\nYou cannot divide by 0.' },
      { topic: 'values', front: 'Which ratios are not defined at 0° and at 90°?', back: 'At 0°: cosec 0° and cot 0° (sin 0° = 0).\nAt 90°: tan 90° and sec 90° (cos 90° = 0).' },
      { topic: 'values', front: 'As A goes from 0° to 90°, how do sin A and cos A change?', back: 'sin A increases from 0 to 1.\ncos A decreases from 1 to 0.' },
      { topic: 'values', front: 'Where do the 45° values come from?', back: 'A right triangle with a 45° angle is isosceles: sides a, a and hypotenuse a√2.\nsin 45° = cos 45° = a/(a√2) = 1/√2, tan 45° = 1' },
      { topic: 'values', front: 'Where do the 30° and 60° values come from?', back: 'Cut an equilateral triangle of side 2a in half: sides a, a√3, 2a.\nsin 30° = a/2a = 1/2, cos 30° = a√3/2a = √3/2\nsin 60° = √3/2, cos 60° = 1/2' },

      { topic: 'evaluate', front: 'Evaluate: sin 60° cos 30° + sin 30° cos 60°', back: '= (√3/2)(√3/2) + (1/2)(1/2)\n= 3/4 + 1/4 = 1' },
      { topic: 'evaluate', front: 'Evaluate: 2 tan² 45° + cos² 30° − sin² 60°', back: '= 2(1) + 3/4 − 3/4 = 2' },
      { topic: 'evaluate', front: 'Evaluate: (5 cos² 60° + 4 sec² 30° − tan² 45°)/(sin² 30° + cos² 30°)', back: 'Top = 5(1/4) + 4(4/3) − 1 = 5/4 + 16/3 − 1 = 67/12\nBottom = 1/4 + 3/4 = 1\nAnswer = 67/12' },
      { topic: 'evaluate', front: 'Evaluate: cos 45°/(sec 30° + cosec 30°)', back: '= (1/√2)/(2/√3 + 2)\n= √3/(2√2(1 + √3))\n= (3√2 − √6)/8 after rationalising' },
      { topic: 'evaluate', front: '2 tan 30°/(1 + tan² 30°) equals…', back: '= (2/√3)/(1 + 1/3) = (2/√3)/(4/3) = 3/(2√3) = √3/2\n= sin 60°' },
      { topic: 'evaluate', front: '(1 − tan² 45°)/(1 + tan² 45°) equals…', back: '= (1 − 1)/(1 + 1) = 0\n= tan 0°' },
      { topic: 'evaluate', front: 'For which A is sin 2A = 2 sin A true?', back: 'A = 0°: sin 0° = 0 = 2 sin 0°.\n(e.g. at A = 30°: sin 60° = √3/2 but 2 sin 30° = 1, not equal.)' },
      { topic: 'evaluate', front: 'If tan(A + B) = √3 and tan(A − B) = 1/√3, with A > B, find A and B.', back: 'A + B = 60°, A − B = 30°\nAdd: 2A = 90° → A = 45°\nB = 15°' },
      { topic: 'evaluate', front: 'If sin(A − B) = 1/2 and cos(A + B) = 1/2, find A and B.', back: 'A − B = 30°, A + B = 60°\nA = 45°, B = 15°' },
      { topic: 'evaluate', front: 'Find A if √3 tan A = 1.', back: 'tan A = 1/√3, so A = 30°' },
      { topic: 'evaluate', front: 'Is sin(A + B) = sin A + sin B?', back: 'No! Try A = B = 30°: sin 60° = √3/2, but sin 30° + sin 30° = 1.' },

      { topic: 'ident', front: 'Identity 1 and how it comes from Pythagoras', back: 'sin²A + cos²A = 1\nIn △ABC (∠B = 90°): AB² + BC² = AC². Divide by AC²:\n(AB/AC)² + (BC/AC)² = 1 → cos²A + sin²A = 1' },
      { topic: 'ident', front: 'Identity 2', back: '1 + tan²A = sec²A\n(divide AB² + BC² = AC² by AB²)\nTrue for 0° ≤ A < 90°' },
      { topic: 'ident', front: 'Identity 3', back: '1 + cot²A = cosec²A\n(divide AB² + BC² = AC² by BC²)\nTrue for 0° < A ≤ 90°' },
      { topic: 'ident', front: 'Other ways to write the identities', back: 'sin²A = 1 − cos²A, cos²A = 1 − sin²A\nsec²A − tan²A = 1\ncosec²A − cot²A = 1' },
      { topic: 'ident', front: 'Write sin A, tan A and sec A in terms of cot A.', back: 'sin A = 1/√(1 + cot²A)\ntan A = 1/cot A\nsec A = √(1 + cot²A)/cot A' },
      { topic: 'ident', front: 'Prove: (sec A + tan A)(1 − sin A) = cos A', back: 'LHS = (1/cos A + sin A/cos A)(1 − sin A)\n= (1 + sin A)(1 − sin A)/cos A\n= (1 − sin²A)/cos A = cos²A/cos A = cos A = RHS' },
      { topic: 'ident', front: 'Simplify: 9 sec²A − 9 tan²A', back: '= 9(sec²A − tan²A) = 9 × 1 = 9' },
      { topic: 'ident', front: 'Simplify: (1 + tan²A)/(1 + cot²A)', back: '= sec²A/cosec²A = sin²A/cos²A = tan²A' },
      { topic: 'ident', front: 'Prove: (cosec θ − cot θ)² = (1 − cos θ)/(1 + cos θ)', back: 'LHS = (1/sin θ − cos θ/sin θ)² = (1 − cos θ)²/sin²θ\n= (1 − cos θ)²/(1 − cos²θ)\n= (1 − cos θ)²/[(1 − cos θ)(1 + cos θ)]\n= (1 − cos θ)/(1 + cos θ) = RHS' },
      { topic: 'ident', front: 'Tips for proving identities', back: '• Start with the harder side\n• Change everything to sin and cos\n• Combine fractions (take the LCM)\n• Use sin²A + cos²A = 1 and factorise (a² − b² = (a − b)(a + b))' }
    ],

    quiz: [
      { topic: 'ratios', q: 'In a right triangle, sin A is…', options: ['adjacent/hypotenuse', 'opposite/hypotenuse', 'opposite/adjacent', 'hypotenuse/opposite'], answer: 1, explain: 'sin = opposite/hypotenuse (P/H).' },
      { topic: 'ratios', q: 'tan A is equal to…', options: ['cos A/sin A', 'sin A/cos A', '1/sin A', 'sin A × cos A'], answer: 1, explain: '(opp/hyp) ÷ (adj/hyp) = opp/adj' },
      { topic: 'ratios', q: 'sec A is the reciprocal of…', options: ['sin A', 'cos A', 'tan A', 'cot A'], answer: 1, explain: 'sec A = 1/cos A' },
      { topic: 'ratios', q: 'cosec A is the reciprocal of…', options: ['sin A', 'cos A', 'tan A', 'sec A'], answer: 0, explain: 'cosec A = 1/sin A' },
      { topic: 'ratios', q: 'In △ABC, ∠B = 90°, AB = 24 cm, BC = 7 cm. sin A is…', options: ['24/25', '7/24', '7/25', '25/7'], answer: 2, explain: 'AC = 25. sin A = BC/AC.' },
      { topic: 'ratios', q: 'In △ABC, ∠B = 90°, AB = 24 cm, BC = 7 cm. cos C is…', options: ['7/25', '24/25', '7/24', '24/7'], answer: 0, explain: 'For angle C, the adjacent side is BC = 7.' },
      { topic: 'ratios', q: 'In △PQR, ∠Q = 90°, PQ = 12 cm, PR = 13 cm. tan P − cot R is…', options: ['0', '1', '5/12', '10/12'], answer: 0, explain: 'tan P = QR/PQ = 5/12 and cot R = QR/PQ = 5/12.' },
      { topic: 'ratios', q: 'For an acute angle A, which can be greater than 1?', options: ['sin A', 'cos A', 'tan A', 'None of these'], answer: 2, explain: 'tan 60° = √3 > 1. sin and cos are less than 1.' },
      { topic: 'ratios', q: 'The value of sin A or cos A for an acute angle is always…', options: ['Greater than 1', 'Less than 1', 'Equal to 1', 'Negative'], answer: 1, explain: 'The hypotenuse is the longest side.' },
      { topic: 'ratios', q: 'If the sides of a right triangle are all doubled, sin A…', options: ['Doubles', 'Halves', 'Stays the same', 'Becomes 1'], answer: 2, explain: 'Ratios depend only on the angle.' },

      { topic: 'find', q: 'If sin A = 3/5, then cos A is…', options: ['4/5', '3/4', '5/4', '5/3'], answer: 0, explain: 'Sides 3, 4, 5. cos A = 4/5.' },
      { topic: 'find', q: 'If sin A = 3/5, then tan A is…', options: ['4/3', '3/4', '4/5', '5/3'], answer: 1, explain: 'tan A = opposite/adjacent = 3/4' },
      { topic: 'find', q: 'If 15 cot A = 8, then sin A is…', options: ['8/17', '15/17', '17/15', '8/15'], answer: 1, explain: 'Adjacent 8, opposite 15, hypotenuse 17.' },
      { topic: 'find', q: 'If sec θ = 13/12, then sin θ is…', options: ['12/13', '5/13', '5/12', '13/5'], answer: 1, explain: 'Hypotenuse 13, adjacent 12, opposite 5.' },
      { topic: 'find', q: 'If sin A = 3/4, then cos A is…', options: ['1/4', '√7/4', '4/3', '√7/3'], answer: 1, explain: 'Adjacent = √(16 − 9) = √7' },
      { topic: 'find', q: 'If cot θ = 7/8, then (1 + sin θ)(1 − sin θ)/[(1 + cos θ)(1 − cos θ)] is…', options: ['7/8', '49/64', '64/49', '1'], answer: 1, explain: '= cos²θ/sin²θ = cot²θ' },
      { topic: 'find', q: 'If tan A = 4/3, then (sin A + cos A)/(sin A − cos A) is…', options: ['7', '1/7', '−7', '7/3'], answer: 0, explain: '(tan A + 1)/(tan A − 1) = (7/3)/(1/3)' },
      { topic: 'find', q: 'If 3 cot A = 4, then (1 − tan²A)/(1 + tan²A) is…', options: ['7/25', '9/16', '16/25', '1'], answer: 0, explain: 'tan A = 3/4: (1 − 9/16)/(1 + 9/16) = 7/25' },

      { topic: 'values', q: 'sin 30° = …', options: ['√3/2', '1/2', '1/√2', '1'], answer: 1, explain: 'sin 30° = 1/2' },
      { topic: 'values', q: 'cos 30° = …', options: ['1/2', '√3/2', '1/√3', '√3'], answer: 1, explain: 'cos 30° = √3/2' },
      { topic: 'values', q: 'tan 60° = …', options: ['1/√3', '1', '√3', '√3/2'], answer: 2, explain: 'tan 60° = √3' },
      { topic: 'values', q: 'tan 30° = …', options: ['√3', '1/√3', '1/2', '1'], answer: 1, explain: 'tan 30° = 1/√3' },
      { topic: 'values', q: 'cos 45° = …', options: ['1/2', '1/√2', '√2', '1'], answer: 1, explain: 'cos 45° = 1/√2' },
      { topic: 'values', q: 'sec 60° = …', options: ['2', '1/2', '2/√3', '√2'], answer: 0, explain: '1/cos 60° = 1/(1/2) = 2' },
      { topic: 'values', q: 'cosec 30° = …', options: ['1/2', '2', '2/√3', '√2'], answer: 1, explain: '1/sin 30° = 2' },
      { topic: 'values', q: 'Which of these is NOT defined?', options: ['sin 90°', 'cos 90°', 'tan 90°', 'cot 90°'], answer: 2, explain: 'tan 90° = 1/0' },
      { topic: 'values', q: 'Which of these is NOT defined?', options: ['cosec 0°', 'sec 0°', 'cos 0°', 'tan 0°'], answer: 0, explain: 'cosec 0° = 1/sin 0° = 1/0' },
      { topic: 'values', q: 'cot 60° = …', options: ['√3', '1/√3', '1', '2'], answer: 1, explain: 'cot 60° = 1/tan 60° = 1/√3' },
      { topic: 'values', q: 'As A increases from 0° to 90°, cos A…', options: ['Increases', 'Decreases', 'Stays the same', 'First increases, then decreases'], answer: 1, explain: 'cos goes from 1 down to 0.' },
      { topic: 'values', q: 'sin 0° + cos 0° = …', options: ['0', '1', '2', 'Not defined'], answer: 1, explain: '0 + 1 = 1' },

      { topic: 'evaluate', q: 'sin 60° cos 30° + sin 30° cos 60° = …', options: ['0', '1', '1/2', '√3/2'], answer: 1, explain: '3/4 + 1/4 = 1' },
      { topic: 'evaluate', q: '2 tan² 45° + cos² 30° − sin² 60° = …', options: ['0', '1', '2', '3/2'], answer: 2, explain: '2 + 3/4 − 3/4 = 2' },
      { topic: 'evaluate', q: '2 tan 30°/(1 + tan² 30°) = …', options: ['sin 60°', 'cos 60°', 'tan 60°', 'sin 30°'], answer: 0, explain: '(2/√3)/(4/3) = √3/2 = sin 60°' },
      { topic: 'evaluate', q: '(1 − tan² 45°)/(1 + tan² 45°) = …', options: ['tan 90°', '1', 'sin 45°', '0'], answer: 3, explain: '(1 − 1)/(1 + 1) = 0' },
      { topic: 'evaluate', q: 'sin 2A = 2 sin A is true when A = …', options: ['0°', '30°', '45°', '60°'], answer: 0, explain: 'Both sides are 0 when A = 0°.' },
      { topic: 'evaluate', q: '2 tan 30°/(1 − tan² 30°) = …', options: ['cos 60°', 'sin 60°', 'tan 60°', 'sin 30°'], answer: 2, explain: '(2/√3)/(2/3) = 3/√3 = √3 = tan 60°' },
      { topic: 'evaluate', q: '(5 cos² 60° + 4 sec² 30° − tan² 45°)/(sin² 30° + cos² 30°) = …', options: ['67/12', '55/12', '67/4', '1'], answer: 0, explain: '5/4 + 16/3 − 1 = 67/12, and the bottom is 1.' },
      { topic: 'evaluate', q: 'If √3 tan A = 1, then A = …', options: ['30°', '45°', '60°', '90°'], answer: 0, explain: 'tan A = 1/√3' },
      { topic: 'evaluate', q: 'If 2 cos A = 1, then A = …', options: ['30°', '45°', '60°', '0°'], answer: 2, explain: 'cos A = 1/2' },
      { topic: 'evaluate', q: 'If tan(A + B) = √3 and tan(A − B) = 1/√3 (A > B), then A = …', options: ['30°', '45°', '60°', '15°'], answer: 1, explain: 'A + B = 60°, A − B = 30°' },
      { topic: 'evaluate', q: 'If sin(A − B) = 1/2 and cos(A + B) = 1/2, then B = …', options: ['15°', '30°', '45°', '60°'], answer: 0, explain: 'A − B = 30°, A + B = 60° → A = 45°, B = 15°' },
      { topic: 'evaluate', q: 'Which statement is true?', options: ['sin(A + B) = sin A + sin B', 'sin θ increases as θ increases (0° to 90°)', 'cos θ increases as θ increases (0° to 90°)', 'sin θ = cos θ for all θ'], answer: 1, explain: 'sin goes from 0 up to 1.' },

      { topic: 'ident', q: 'sin²A + cos²A = …', options: ['0', '1', '2', 'tan²A'], answer: 1, explain: 'The first identity.' },
      { topic: 'ident', q: '1 + tan²A = …', options: ['cosec²A', 'sec²A', 'cot²A', 'sin²A'], answer: 1, explain: 'Divide sin²A + cos²A = 1 by cos²A.' },
      { topic: 'ident', q: '1 + cot²A = …', options: ['sec²A', 'tan²A', 'cosec²A', 'cos²A'], answer: 2, explain: 'Divide sin²A + cos²A = 1 by sin²A.' },
      { topic: 'ident', q: '9 sec²A − 9 tan²A = …', options: ['1', '9', '8', '0'], answer: 1, explain: '9(sec²A − tan²A) = 9' },
      { topic: 'ident', q: '(1 + tan θ + sec θ)(1 + cot θ − cosec θ) = …', options: ['0', '1', '2', '−1'], answer: 2, explain: 'In sin and cos: (cos θ + sin θ + 1)(sin θ + cos θ − 1)/(sin θ cos θ) = [(sin θ + cos θ)² − 1]/(sin θ cos θ) = 2 sin θ cos θ/(sin θ cos θ) = 2' },
      { topic: 'ident', q: '(sec A + tan A)(1 − sin A) = …', options: ['sec A', 'sin A', 'cosec A', 'cos A'], answer: 3, explain: '(1 + sin A)(1 − sin A)/cos A = cos²A/cos A' },
      { topic: 'ident', q: '(1 + tan²A)/(1 + cot²A) = …', options: ['sec²A', '−1', 'cot²A', 'tan²A'], answer: 3, explain: 'sec²A/cosec²A = sin²A/cos²A' },
      { topic: 'ident', q: 'In terms of cot A, sin A = …', options: ['1/√(1 + cot²A)', '√(1 + cot²A)', 'cot A/√(1 + cot²A)', '1/cot A'], answer: 0, explain: 'cosec²A = 1 + cot²A, and sin A = 1/cosec A.' },
      { topic: 'ident', q: 'sin⁴A − cos⁴A = …', options: ['1', 'sin²A − cos²A', 'sin²A + cos²A', '0'], answer: 1, explain: '(sin²A + cos²A)(sin²A − cos²A)' },
      { topic: 'ident', q: '1 + tan²A = sec²A is true for…', options: ['0° ≤ A < 90°', '0° < A ≤ 90°', 'Only A = 45°', 'Only A = 0°'], answer: 0, explain: 'At 90°, tan and sec are not defined.' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'ratios', gen(mk) {
        const [p, q, r] = mk.pick(TRIPLES), k = r <= 13 ? mk.ri(1, 3) : 1;
        const [ab, bc] = Math.random() < 0.5 ? [p * k, q * k] : [q * k, p * k], ac = r * k;
        const hide = mk.pick(['AB', 'BC', 'AC', 'AC']);
        const side = { AB: ab, BC: bc, AC: ac };
        const lab = {}; for (const s of ['AB', 'BC', 'AC']) lab[s] = s === hide ? '?' : `${side[s]} cm`;
        const X = mk.pick(['A', 'C']), fn = mk.pick(FNS);
        const opp = X === 'A' ? 'BC' : 'AB', adj = X === 'A' ? 'AB' : 'BC';
        const name = { opposite: opp, adjacent: adj, hypotenuse: 'AC' };
        const [top, bot] = SIDES[fn].map(w => name[w]);
        const known = ['AB', 'BC', 'AC'].filter(s => s !== hide);
        const find = hide === 'AC' ? `AC = √(AB² + BC²) = √(${ab * ab} + ${bc * bc}) = √${ac * ac} = ${ac} cm`
          : `${hide} = √(AC² − ${hide === 'AB' ? 'BC' : 'AB'}²) = √(${ac * ac} − ${(hide === 'AB' ? bc : ab) ** 2}) = √${side[hide] ** 2} = ${side[hide]} cm`;
        return {
          q: `In △ABC, ∠B = 90°, ${known[0]} = ${side[known[0]]} cm and ${known[1]} = ${side[known[1]]} cm. Find ${fn} ${X}.`,
          svg: triSvg(ab, bc, lab),
          fields: [{ label: `${fn} ${X} =`, answer: side[top] / side[bot], show: mk.frac(side[top], side[bot]) }],
          hint: `First find ${hide} by Pythagoras. For angle ${X}: opposite = ${opp}, adjacent = ${adj}, hypotenuse = AC. ${fn} = ${SIDES[fn][0]}/${SIDES[fn][1]}.`,
          steps: `By Pythagoras: ${find}\nFor angle ${X}: opposite = ${opp}, adjacent = ${adj}, hypotenuse = AC\n${fn} ${X} = ${SIDES[fn][0]}/${SIDES[fn][1]} = ${top}/${bot} = ${side[top]}/${side[bot]}` +
            (mk.frac(side[top], side[bot]) !== `${side[top]}/${side[bot]}` ? ` = ${mk.frac(side[top], side[bot])}` : '')
        };
      } },
      { topic: 'find', gen(mk) {
        const [p, q, h] = mk.pick(TRIPLES);
        const [o, a] = Math.random() < 0.5 ? [p, q] : [q, p];
        const len = { opposite: o, adjacent: a, hypotenuse: h };
        const g = mk.pick(FNS), [gt, gb] = SIDES[g];
        const asked = shuffle(mk, FNS.filter(f => f !== g)).slice(0, 2);
        const form = Math.random() < 0.35 ? `${len[gb]} ${g} A = ${len[gt]}` : `${g} A = ${len[gt]}/${len[gb]}`;
        const third = ['opposite', 'adjacent', 'hypotenuse'].find(w => w !== gt && w !== gb);
        const thirdLine = third === 'hypotenuse'
          ? `hypotenuse = √((${o}k)² + (${a}k)²) = √(${h * h}k²) = ${h}k`
          : `${third} = √((${h}k)² − (${len[gt === 'hypotenuse' ? gb : gt]}k)²) = √(${len[third] ** 2}k²) = ${len[third]}k`;
        return {
          q: `If ${form} (A is acute), find ${asked[0]} A and ${asked[1]} A.`,
          fields: asked.map(f => ({ label: `${f} A =`, answer: len[SIDES[f][0]] / len[SIDES[f][1]], show: mk.frac(len[SIDES[f][0]], len[SIDES[f][1]]) })),
          hint: `${g} A = ${gt}/${gb}. Call them ${len[gt]}k and ${len[gb]}k, then find the ${third} by Pythagoras.`,
          steps: (form.startsWith(g) ? '' : `${g} A = ${len[gt]}/${len[gb]}\n`) + `${g} A = ${gt}/${gb}, so let ${gt} = ${len[gt]}k and ${gb} = ${len[gb]}k.\n${thirdLine}\n` +
            asked.map(f => `${f} A = ${SIDES[f][0]}/${SIDES[f][1]} = ${len[SIDES[f][0]]}k/${len[SIDES[f][1]]}k = ${mk.frac(len[SIDES[f][0]], len[SIDES[f][1]])}`).join('\n')
        };
      } },
      { topic: 'values', gen(mk) {
        const fn = mk.pick(FNS), i = mk.ri(0, 4), v = VAL[fn][i], right = v || 'Not defined';
        const { choices, answer } = options(mk, right, ALLVALS);
        const row = ANG.map((x, j) => `${fn} ${x}° = ${VAL[fn][j] || 'not defined'}`).join('\n');
        const WHY = { tan: 'tan 90° = sin 90°/cos 90° = 1/0', sec: 'sec 90° = 1/cos 90° = 1/0', cosec: 'cosec 0° = 1/sin 0° = 1/0', cot: 'cot 0° = cos 0°/sin 0° = 1/0' };
        const why = v ? '' : `\n${WHY[fn]}: you cannot divide by 0, so it is not defined.`;
        return {
          q: `What is the value of ${fn} ${ANG[i]}°?`,
          choices, answer,
          steps: `${row}${why}`
        };
      } },
      { topic: 'evaluate', gen(mk) {
        if (Math.random() < 0.55) {
          const FORMS = {
            sin: { 0: ['sin A = 0'], 30: ['sin A = 1/2', '2 sin A = 1'], 45: ['sin A = 1/√2', '√2 sin A = 1'], 60: ['sin A = √3/2', '2 sin A = √3'], 90: ['sin A = 1'] },
            cos: { 0: ['cos A = 1'], 30: ['cos A = √3/2', '2 cos A = √3'], 45: ['cos A = 1/√2', '√2 cos A = 1'], 60: ['cos A = 1/2', '2 cos A = 1'], 90: ['cos A = 0'] },
            tan: { 0: ['tan A = 0'], 30: ['tan A = 1/√3', '√3 tan A = 1'], 45: ['tan A = 1'], 60: ['tan A = √3'] },
            sec: { 0: ['sec A = 1'], 45: ['sec A = √2'], 60: ['sec A = 2'], 30: ['√3 sec A = 2'] },
            cosec: { 30: ['cosec A = 2'], 45: ['cosec A = √2'], 60: ['√3 cosec A = 2'], 90: ['cosec A = 1'] },
            cot: { 30: ['cot A = √3'], 45: ['cot A = 1'], 60: ['√3 cot A = 1'], 90: ['cot A = 0'] }
          };
          const fn = mk.pick(FNS), angs = Object.keys(FORMS[fn]).map(Number), ang = mk.pick(angs), eq = mk.pick(FORMS[fn][ang]);
          const val = VAL[fn][ANG.indexOf(ang)];
          const opts = ['0°', '30°', '45°', '60°', '90°'];
          return {
            q: `If ${eq} and 0° ≤ A ≤ 90°, find A.`,
            choices: opts, answer: opts.indexOf(ang + '°'),
            steps: (eq.startsWith(fn) ? '' : `Divide both sides: ${fn} A = ${val}\n`) + `We know ${fn} ${ang}° = ${val}, so A = ${ang}°.`
          };
        }
        const PAIRS = [[60, 30], [90, 30], [90, 60], [60, 0], [90, 0], [30, 0]];
        const [S, D] = mk.pick(PAIRS);
        const pickFn = ang => mk.pick(['sin', 'cos', 'tan'].filter(f => VAL[f][ANG.indexOf(ang)] !== null && !(ang === 0 && f !== 'tan' && Math.random() < 0.5)));
        const fS = pickFn(S), fD = pickFn(D), vS = VAL[fS][ANG.indexOf(S)], vD = VAL[fD][ANG.indexOf(D)];
        const A = (S + D) / 2, B = (S - D) / 2;
        return {
          q: `If ${fS}(A + B) = ${vS} and ${fD}(A − B) = ${vD}, where 0° < A + B ≤ 90° and A ≥ B, find A and B (in degrees).`,
          fields: [{ label: 'A (degrees)', answer: A }, { label: 'B (degrees)', answer: B }],
          hint: `${fS} ${S}° = ${vS} and ${fD} ${D}° = ${vD}. So A + B and A − B are angles you know.`,
          steps: `${fS}(A + B) = ${vS} = ${fS} ${S}° → A + B = ${S}°\n${fD}(A − B) = ${vD} = ${fD} ${D}° → A − B = ${D}°\nAdd: 2A = ${S + D}° → A = ${A}°\nB = ${S}° − ${A}° = ${B}°`
        };
      } },
      { topic: 'evaluate', gen(mk) {
        if (Math.random() < 0.4) {
          const [e, v12, st] = mk.pick(PROD);
          return {
            q: `Evaluate: ${e}`,
            fields: [{ label: 'Value =', answer: v12 / 12, show: mk.frac(v12, 12), signed: true }],
            hint: 'Put in the standard values first, then multiply and add.',
            steps: st
          };
        }
        const n = mk.ri(2, 3), terms = [];
        const used = new Set();
        while (terms.length < n) {
          const fn = mk.pick(FNS), i = mk.pick([1, 2, 3, 1, 2, 3, 0, 4]);
          if (SQ12[fn][i] === null || used.has(fn + i)) continue;
          used.add(fn + i);
          terms.push({ fn, ang: ANG[i], v12: SQ12[fn][i], val: VAL[fn][i], c: mk.pick([1, 1, 2, 3, 4, 5]), s: terms.length && Math.random() < 0.4 ? -1 : 1 });
        }
        const total = terms.reduce((t, x) => t + x.s * x.c * x.v12, 0);
        const show = x => `${x.c === 1 ? '' : x.c + ' '}${x.fn}² ${x.ang}°`;
        const expr = terms.map((x, k) => (k ? (x.s < 0 ? ' − ' : ' + ') : '') + show(x)).join('');
        const sub = terms.map((x, k) => (k ? (x.s < 0 ? ' − ' : ' + ') : '') + (x.c === 1 ? '' : x.c + ' × ') + mk.frac(x.v12, 12)).join('');
        return {
          q: `Evaluate: ${expr}`,
          fields: [{ label: 'Value =', answer: total / 12, show: mk.frac(total, 12), signed: true }],
          hint: 'Write each value, square it, then multiply and add. Use fractions like 3/4.',
          steps: terms.map(x => `${x.fn} ${x.ang}° = ${x.val}, so ${x.fn}² ${x.ang}° = ${mk.frac(x.v12, 12)}`).join('\n') + `\n${expr}\n= ${sub}\n= ${mk.frac(total, 12)}`
        };
      } },
      { topic: 'ident', gen(mk) {
        const [e, ans, st] = mk.pick(IDENT);
        const { choices, answer } = options(mk, ans, IDPOOL);
        return { q: `Simplify: ${e}`, choices, answer, steps: st };
      } },
      { topic: 'find', gen(mk) {
        const v = mk.pick(['lin', 'lin', 'cot2', 'tan2']);
        let p, q; do { p = mk.ri(1, 7); q = mk.ri(1, 7); } while (p === q || mk.gcd(p, q) !== 1);
        if (v === 'cot2') return {
          q: `If cot θ = ${p}/${q}, evaluate (1 + sin θ)(1 − sin θ) / [(1 + cos θ)(1 − cos θ)].`,
          fields: [{ label: 'Value =', answer: (p * p) / (q * q), show: mk.frac(p * p, q * q) }],
          hint: '(1 + x)(1 − x) = 1 − x². Then use 1 − sin²θ = cos²θ and 1 − cos²θ = sin²θ.',
          steps: `= (1 − sin²θ)/(1 − cos²θ)\n= cos²θ/sin²θ = cot²θ\n= (${p}/${q})² = ${mk.frac(p * p, q * q)}`
        };
        if (v === 'tan2') return {
          q: `If tan A = ${p}/${q}, find the value of (1 − tan²A)/(1 + tan²A).`,
          fields: [{ label: 'Value =', answer: (q * q - p * p) / (q * q + p * p), show: mk.frac(q * q - p * p, q * q + p * p), signed: true }],
          hint: 'Put tan²A = (p/q)² and simplify. Multiply top and bottom by q².',
          steps: `tan²A = ${p * p}/${q * q}\n(1 − ${p * p}/${q * q})/(1 + ${p * p}/${q * q})\nMultiply top and bottom by ${q * q}: (${q * q} − ${p * p})/(${q * q} + ${p * p}) = ${mk.frac(q * q - p * p, q * q + p * p)}`
        };
        let a, b, c, d;
        do { a = mk.ri(1, 4); b = mk.pick([-3, -2, -1, 1, 2, 3]); c = mk.ri(1, 4); d = mk.pick([-3, -2, -1, 1, 2, 3]); }
        while (c * p + d * q === 0 || a * p + b * q === 0 || a * d === b * c);
        const part = (x, y) => `${x === 1 ? '' : x + ' '}sin A ${y < 0 ? '−' : '+'} ${Math.abs(y) === 1 ? '' : Math.abs(y) + ' '}cos A`;
        const tpart = (x, y) => `${x === 1 ? '' : x + ' '}tan A ${y < 0 ? '−' : '+'} ${Math.abs(y)}`;
        const N = a * p + b * q, D = c * p + d * q;
        return {
          q: `If tan A = ${p}/${q}, find the value of (${part(a, b)})/(${part(c, d)}).`,
          fields: [{ label: 'Value =', answer: N / D, show: mk.frac(N, D), signed: true }],
          hint: 'Divide the top and the bottom by cos A, so that only tan A is left.',
          steps: `Divide top and bottom by cos A:\n(${tpart(a, b)})/(${tpart(c, d)})\n= (${a === 1 ? '' : a + ' × '}${p}/${q} ${b < 0 ? '−' : '+'} ${Math.abs(b)})/(${c === 1 ? '' : c + ' × '}${p}/${q} ${d < 0 ? '−' : '+'} ${Math.abs(d)})\n` +
            `Multiply top and bottom by ${q}: (${a * p} ${b < 0 ? '−' : '+'} ${Math.abs(b * q)})/(${c * p} ${d < 0 ? '−' : '+'} ${Math.abs(d * q)}) = ${mk.num(N)}/${mk.num(D)} = ${mk.frac(N, D)}`
        };
      } }
    ],

    match: [
      { title: 'Ratios', pairs: [
        ['sin A', 'opposite/hypotenuse'],
        ['cos A', 'adjacent/hypotenuse'],
        ['tan A', 'opposite/adjacent'],
        ['cosec A', '1/sin A'],
        ['sec A', '1/cos A'],
        ['cot A', 'cos A/sin A']
      ] },
      { title: 'Standard Values', pairs: [
        ['sin 30°', '1/2'],
        ['cos 30°', '√3/2'],
        ['tan 30°', '1/√3'],
        ['sec 45°', '√2'],
        ['tan 90°', 'Not defined'],
        ['cos 90°', '0']
      ] },
      { title: 'Identities', pairs: [
        ['sin²A + cos²A', '1'],
        ['1 + tan²A', 'sec²A'],
        ['1 + cot²A', 'cosec²A'],
        ['sec²A − 1', 'tan²A'],
        ['1 − sin²A', 'cos²A'],
        ['cosec²A − 1', 'cot²A']
      ] },
      { title: 'Expression → Value', pairs: [
        ['sin 60° cos 30° + sin 30° cos 60°', '1'],
        ['2 tan² 45° + cos² 30° − sin² 60°', '2'],
        ['(5 cos² 60° + 4 sec² 30° − tan² 45°)/(sin² 30° + cos² 30°)', '67/12'],
        ['2 tan 30°/(1 + tan² 30°)', '√3/2'],
        ['(1 − tan² 45°)/(1 + tan² 45°)', '0'],
        ['sin² 45° + cos² 60°', '3/4']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'If sin A = 3/5, find cos A.',
        keypoints: [{ text: 'cos A = √(1 − 9/25) = 4/5', kw: ['4/5'] }],
        model: 'cos²A = 1 − sin²A = 1 − 9/25 = 16/25\ncos A = 4/5' },
      { marks: 1, q: 'Evaluate: tan² 60° + 2 tan² 45°',
        keypoints: [{ text: '3 + 2 = 5', kw: ['5'] }],
        model: 'tan 60° = √3, so tan² 60° = 3\ntan 45° = 1, so 2 tan² 45° = 2\nAnswer = 3 + 2 = 5' },
      { marks: 1, q: 'If 2 sin A = 1 and A is acute, find A.',
        keypoints: [{ text: 'sin A = 1/2, so A = 30°', kw: ['30'] }],
        model: 'sin A = 1/2 = sin 30°\nA = 30°' },
      { marks: 1, q: 'Simplify: (1 + tan²A) cos²A',
        keypoints: [{ text: 'sec²A × cos²A = 1', kw: ['1'] }],
        model: '(1 + tan²A) cos²A = sec²A × cos²A = (1/cos²A) × cos²A = 1' },
      { marks: 2, q: 'In △ABC, right-angled at B, AB = 24 cm and BC = 7 cm. Find sin A and cos A.',
        keypoints: [
          { text: 'AC = √(576 + 49) = 25 cm', kw: ['25'] },
          { text: 'sin A = 7/25, cos A = 24/25', kw: ['7/25', '24/25'] }
        ],
        model: 'AC² = AB² + BC² = 576 + 49 = 625 → AC = 25 cm\nsin A = BC/AC = 7/25\ncos A = AB/AC = 24/25' },
      { marks: 2, q: 'Given 15 cot A = 8, find sin A and sec A.',
        keypoints: [
          { text: 'cot A = 8/15: adjacent 8k, opposite 15k, hypotenuse 17k', kw: ['17'] },
          { text: 'sin A = 15/17, sec A = 17/8', kw: ['15/17', '17/8'] }
        ],
        model: 'cot A = 8/15 = adjacent/opposite\nLet adjacent = 8k, opposite = 15k\nHypotenuse = √(64k² + 225k²) = √(289k²) = 17k\nsin A = 15k/17k = 15/17\nsec A = 17k/8k = 17/8' },
      { marks: 2, q: 'Evaluate: sin 60° cos 30° + sin 30° cos 60°',
        keypoints: [
          { text: '(√3/2)(√3/2) + (1/2)(1/2)', kw: ['√3/2|root3/2'] },
          { text: '= 3/4 + 1/4 = 1', kw: ['3/4', '1/4'] }
        ],
        model: '= (√3/2)(√3/2) + (1/2)(1/2)\n= 3/4 + 1/4 = 1' },
      { marks: 2, q: 'Evaluate: 2 tan² 45° + cos² 30° − sin² 60°',
        keypoints: [
          { text: 'tan² 45° = 1, cos² 30° = 3/4, sin² 60° = 3/4', kw: ['3/4'] },
          { text: '= 2 + 3/4 − 3/4 = 2', kw: ['2'] }
        ],
        model: '= 2(1)² + (√3/2)² − (√3/2)²\n= 2 + 3/4 − 3/4 = 2' },
      { marks: 2, q: 'If tan(A + B) = √3 and tan(A − B) = 1/√3, 0° < A + B ≤ 90°, A > B, find A and B.',
        keypoints: [
          { text: 'A + B = 60°, A − B = 30°', kw: ['60', '30'] },
          { text: 'A = 45°, B = 15°', kw: ['45', '15'] }
        ],
        model: 'tan(A + B) = √3 = tan 60° → A + B = 60°\ntan(A − B) = 1/√3 = tan 30° → A − B = 30°\nAdding: 2A = 90° → A = 45°\nB = 60° − 45° = 15°' },
      { marks: 3, q: 'Given sec θ = 13/12, calculate all the other trigonometric ratios.',
        keypoints: [
          { text: 'Hypotenuse 13k, adjacent 12k, opposite 5k', kw: ['5k|5'] },
          { text: 'sin θ = 5/13, cos θ = 12/13, tan θ = 5/12', kw: ['5/13', '12/13', '5/12'] },
          { text: 'cosec θ = 13/5, cot θ = 12/5', kw: ['13/5', '12/5'] }
        ],
        model: 'sec θ = hypotenuse/adjacent = 13/12\nLet hypotenuse = 13k, adjacent = 12k\nOpposite = √(169k² − 144k²) = √(25k²) = 5k\nsin θ = 5/13, cos θ = 12/13, tan θ = 5/12\ncosec θ = 13/5, cot θ = 12/5' },
      { marks: 3, q: 'If cot θ = 7/8, evaluate (1 + sin θ)(1 − sin θ) / [(1 + cos θ)(1 − cos θ)].',
        keypoints: [
          { text: '= (1 − sin²θ)/(1 − cos²θ)', kw: ['1 − sin|1 - sin|1-sin'] },
          { text: '= cos²θ/sin²θ = cot²θ', kw: ['cot'] },
          { text: '= 49/64', kw: ['49/64'] }
        ],
        model: '(1 + sin θ)(1 − sin θ) / [(1 + cos θ)(1 − cos θ)]\n= (1 − sin²θ)/(1 − cos²θ)\n= cos²θ/sin²θ\n= cot²θ = (7/8)² = 49/64' },
      { marks: 3, q: 'If 3 cot A = 4, check whether (1 − tan²A)/(1 + tan²A) = cos²A − sin²A.',
        keypoints: [
          { text: 'tan A = 3/4; sides 3k, 4k, 5k', kw: ['3/4'] },
          { text: 'LHS = (1 − 9/16)/(1 + 9/16) = 7/25', kw: ['7/25'] },
          { text: 'RHS = 16/25 − 9/25 = 7/25, so they are equal', kw: ['16/25', '9/25'] }
        ],
        model: 'cot A = 4/3, so tan A = 3/4\nLet opposite = 3k, adjacent = 4k, hypotenuse = 5k\nLHS = (1 − 9/16)/(1 + 9/16) = (7/16)/(25/16) = 7/25\ncos A = 4/5, sin A = 3/5\nRHS = 16/25 − 9/25 = 7/25\nLHS = RHS, so the statement is true.' },
      { marks: 3, q: 'Evaluate: (5 cos² 60° + 4 sec² 30° − tan² 45°)/(sin² 30° + cos² 30°)',
        keypoints: [
          { text: 'cos² 60° = 1/4, sec² 30° = 4/3, tan² 45° = 1', kw: ['1/4', '4/3|16/3'] },
          { text: 'Numerator = 5/4 + 16/3 − 1 = 67/12', kw: ['16/3'] },
          { text: 'Denominator = 1, answer 67/12', kw: ['67/12'] }
        ],
        model: 'Numerator = 5(1/2)² + 4(2/√3)² − 1²\n= 5/4 + 16/3 − 1 = (15 + 64 − 12)/12 = 67/12\nDenominator = (1/2)² + (√3/2)² = 1/4 + 3/4 = 1\nAnswer = 67/12' },
      { marks: 3, q: 'Prove that (sec A + tan A)(1 − sin A) = cos A.',
        keypoints: [
          { text: 'Write sec A = 1/cos A and tan A = sin A/cos A', kw: ['1/cos'] },
          { text: '= (1 + sin A)(1 − sin A)/cos A = (1 − sin²A)/cos A', kw: ['1 − sin²|1 - sin²|1-sin²|1 − sin^2|1 - sin^2'] },
          { text: '= cos²A/cos A = cos A', kw: ['cos²A|cos^2'] }
        ],
        model: 'LHS = (1/cos A + sin A/cos A)(1 − sin A)\n= [(1 + sin A)/cos A] × (1 − sin A)\n= (1 − sin²A)/cos A\n= cos²A/cos A\n= cos A = RHS' },
      { marks: 3, q: 'Prove that (cosec θ − cot θ)² = (1 − cos θ)/(1 + cos θ).',
        keypoints: [
          { text: 'LHS = (1/sin θ − cos θ/sin θ)² = (1 − cos θ)²/sin²θ', kw: ['sin²|sin^2'] },
          { text: 'sin²θ = 1 − cos²θ = (1 − cos θ)(1 + cos θ)', kw: ['1 + cos|1+cos'] },
          { text: 'Cancel (1 − cos θ) to get RHS', kw: ['cancel|rhs|RHS'] }
        ],
        model: 'LHS = (1/sin θ − cos θ/sin θ)²\n= (1 − cos θ)²/sin²θ\n= (1 − cos θ)²/(1 − cos²θ)\n= (1 − cos θ)²/[(1 − cos θ)(1 + cos θ)]\n= (1 − cos θ)/(1 + cos θ) = RHS' },
      { marks: 3, q: 'Prove that sin A/(1 + cos A) + (1 + cos A)/sin A = 2 cosec A.',
        keypoints: [
          { text: 'LCM: [sin²A + (1 + cos A)²]/[sin A(1 + cos A)]', kw: ['sin²A|sin^2'] },
          { text: 'Top = sin²A + cos²A + 1 + 2 cos A = 2 + 2 cos A = 2(1 + cos A)', kw: ['2 + 2 cos|2+2cos|2(1 + cos|2(1+cos'] },
          { text: '= 2/sin A = 2 cosec A', kw: ['2/sin|2 cosec'] }
        ],
        model: 'LHS = [sin²A + (1 + cos A)²] / [sin A(1 + cos A)]\n= [sin²A + 1 + 2 cos A + cos²A] / [sin A(1 + cos A)]\n= [1 + 1 + 2 cos A] / [sin A(1 + cos A)]\n= 2(1 + cos A) / [sin A(1 + cos A)]\n= 2/sin A = 2 cosec A = RHS' },
      { marks: 5, q: 'Prove that (sin θ − cos θ + 1)/(sin θ + cos θ − 1) = 1/(sec θ − tan θ), using the identity sec²θ = 1 + tan²θ.',
        keypoints: [
          { text: 'Divide top and bottom by cos θ: (tan θ − 1 + sec θ)/(tan θ + 1 − sec θ)', kw: ['cos θ|cosθ|cos'] },
          { text: 'Replace 1 in the numerator by sec²θ − tan²θ', kw: ['sec²θ − tan²θ|sec² − tan²|sec^2|sec²θ - tan²θ'] },
          { text: 'Numerator = (sec θ + tan θ)(1 − sec θ + tan θ)', kw: ['sec θ + tan θ|secθ + tanθ|sec + tan'] },
          { text: 'Cancel (tan θ − sec θ + 1) to get sec θ + tan θ', kw: ['cancel|sec θ + tan θ'] },
          { text: 'sec θ + tan θ = 1/(sec θ − tan θ) because (sec θ + tan θ)(sec θ − tan θ) = 1', kw: ['= 1|=1'] }
        ],
        model: 'Divide the top and bottom of the LHS by cos θ:\nLHS = (tan θ − 1 + sec θ)/(tan θ + 1 − sec θ)\n= [(tan θ + sec θ) − 1]/(tan θ − sec θ + 1)\nWrite 1 = sec²θ − tan²θ = (sec θ − tan θ)(sec θ + tan θ):\n= [(tan θ + sec θ) − (sec θ − tan θ)(sec θ + tan θ)]/(tan θ − sec θ + 1)\n= (sec θ + tan θ)(1 − sec θ + tan θ)/(tan θ − sec θ + 1)\n= sec θ + tan θ\nAnd (sec θ + tan θ)(sec θ − tan θ) = sec²θ − tan²θ = 1, so sec θ + tan θ = 1/(sec θ − tan θ) = RHS' },
      { marks: 5, q: 'Express sin A, sec A and tan A in terms of cot A. Then use them to find sin A, sec A and tan A when cot A = 3/4.',
        keypoints: [
          { text: 'cosec²A = 1 + cot²A → sin A = 1/√(1 + cot²A)', kw: ['1 + cot²A|1+cot²A|1 + cot^2'] },
          { text: 'tan A = 1/cot A', kw: ['1/cot'] },
          { text: 'sec A = √(1 + cot²A)/cot A', kw: ['/cot'] },
          { text: 'With cot A = 3/4: √(1 + 9/16) = 5/4', kw: ['5/4'] },
          { text: 'sin A = 4/5, tan A = 4/3, sec A = 5/3', kw: ['4/5', '4/3', '5/3'] }
        ],
        model: '1 + cot²A = cosec²A → sin A = 1/cosec A = 1/√(1 + cot²A)\ntan A = 1/cot A\nsec²A = 1 + tan²A = 1 + 1/cot²A = (cot²A + 1)/cot²A → sec A = √(1 + cot²A)/cot A\nWhen cot A = 3/4: √(1 + 9/16) = √(25/16) = 5/4\nsin A = 1 ÷ 5/4 = 4/5\ntan A = 4/3\nsec A = (5/4) ÷ (3/4) = 5/3' }
    ]
  });
})();
