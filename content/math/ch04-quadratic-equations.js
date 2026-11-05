// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 4: Quadratic Equations
// In the syllabus: standard form, factorisation, quadratic formula, discriminant & nature of roots, situational problems.
// Not in the syllabus: completing the square, equations reducible to quadratic form.
// Write powers with Unicode superscripts (x²): the app turns a digit after a letter into a subscript.
(function () {
  const nz = (mk, n) => { let v; do v = mk.ri(-n, n); while (!v); return v; };
  // 12 -> [2, 3] because 12 = 2² × 3
  function surd(n) {
    let o = 1, i = n;
    for (let d = 2; d * d <= i; d++) while (i % (d * d) === 0) { i /= d * d; o *= d; }
    return [o, i];
  }
  // (B ± √D)/den, simplified: rootStr(mk, 2, 8, 2) -> "1 ± √2"
  function rootStr(mk, B, D, den) {
    const [s, t] = surd(D);
    if (t === 1) return `(${mk.num(B)} ± ${s})/${den}`;
    const g = mk.gcd(mk.gcd(Math.abs(B), s), den), b = B / g, r = s / g, d = den / g;
    const rad = `${r === 1 ? '' : r}√${t}`;
    if (!b) return d === 1 ? '±' + rad : `±${rad}/${d}`;
    return d === 1 ? `${mk.num(b)} ± ${rad}` : `(${mk.num(b)} ± ${rad})/${d}`;
  }
  const par = (mk, n) => n < 0 ? `(${mk.num(n)})` : String(n);
  const NATURE = ['Two distinct real roots', 'Two equal real roots', 'No real roots'];

  SWG.addChapter('math', {
    id: 'math-ch04',
    number: 4,
    title: 'Quadratic Equations',
    icon: '🎯',

    topics: {
      std: 'Standard Form',
      fact: 'Solving by Factorisation',
      formula: 'Quadratic Formula',
      disc: 'Discriminant & Nature of Roots',
      word: 'Word Problems'
    },

    summary: [
      'A quadratic equation is ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0 (standard form).',
      'To check if an equation is quadratic: expand, bring every term to one side, and see if an x² term is left.',
      'A root of ax² + bx + c = 0 is a number α with aα² + bα + c = 0. A quadratic equation has at most two roots.',
      'Factorisation: split the middle term (two numbers that multiply to a × c and add to b), factorise, then put each factor = 0.',
      'Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a, when b² − 4ac ≥ 0.',
      'Discriminant D = b² − 4ac. D > 0: two distinct real roots. D = 0: two equal real roots (each −b/2a). D < 0: no real roots.',
      'Word problems: form the equation, solve it, and reject any root that does not make sense (like a negative length or speed).'
    ],

    flashcards: [
      { topic: 'std', front: 'What is a quadratic equation?', back: 'An equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0.\ne.g. 2x² − 3x + 1 = 0' },
      { topic: 'std', front: 'Why must a ≠ 0 in ax² + bx + c = 0?', back: 'If a = 0, the x² term disappears and the equation becomes bx + c = 0, which is linear, not quadratic.' },
      { topic: 'std', front: 'How do you check whether an equation is quadratic?', back: '1. Expand both sides\n2. Bring all terms to one side (= 0)\n3. If the highest power of x left is 2, it is quadratic.\nCareful: x² terms can cancel out!' },
      { topic: 'std', front: 'Is (x + 1)² = 2(x − 3) a quadratic equation?', back: 'x² + 2x + 1 = 2x − 6\nx² + 7 = 0\nYes, it is quadratic (a = 1, b = 0, c = 7).' },
      { topic: 'std', front: 'Is x(x + 1) + 8 = (x + 2)(x − 2) a quadratic equation?', back: 'x² + x + 8 = x² − 4\nx + 12 = 0\nNo! The x² terms cancel, so it is linear.' },
      { topic: 'std', front: 'Is (x + 2)³ = x³ − 4 a quadratic equation?', back: 'x³ + 6x² + 12x + 8 = x³ − 4\n6x² + 12x + 12 = 0\nYes! The x³ terms cancel and an x² term is left.' },
      { topic: 'std', front: 'Is (x − 3)(2x + 1) = x(x + 5) a quadratic equation?', back: '2x² − 5x − 3 = x² + 5x\nx² − 10x − 3 = 0\nYes, it is quadratic.' },
      { topic: 'std', front: 'Form the equation: a rectangular plot has area 528 m². Its length is one more than twice its breadth.', back: 'Breadth = x m, length = (2x + 1) m\nx(2x + 1) = 528\n2x² + x − 528 = 0' },
      { topic: 'std', front: 'Form the equation: the product of two consecutive positive integers is 306.', back: 'Integers: x and x + 1\nx(x + 1) = 306\nx² + x − 306 = 0' },
      { topic: 'std', front: 'Form the equation: Rohan\'s mother is 26 years older than him. The product of their ages 3 years from now will be 360.', back: 'Rohan = x years, mother = x + 26\nIn 3 years: (x + 3)(x + 29) = 360\nx² + 32x − 273 = 0\n(Answer: Rohan is 7)' },
      { topic: 'std', front: 'Form the equation: a train travels 480 km at a uniform speed. If the speed were 8 km/h less, it would take 3 hours more.', back: 'Speed = x km/h\n480/(x − 8) − 480/x = 3\n3x(x − 8) = 3840\nx² − 8x − 1280 = 0\n(Answer: 40 km/h)' },

      { topic: 'fact', front: 'What is a root of a quadratic equation?', back: 'A number α is a root of ax² + bx + c = 0 if aα² + bα + c = 0.\nThe roots of the equation are the zeroes of the polynomial ax² + bx + c.' },
      { topic: 'fact', front: 'How many roots can a quadratic equation have?', back: 'At most two.' },
      { topic: 'fact', front: 'Steps to solve by factorisation', back: '1. Write in standard form: ax² + bx + c = 0\n2. Find two numbers that multiply to a × c and add to b\n3. Split the middle term and factorise in pairs\n4. Put each factor = 0' },
      { topic: 'fact', front: 'Solve: 2x² − 5x + 3 = 0', back: 'a × c = 6; −2 and −3\n2x² − 2x − 3x + 3 = 0\n2x(x − 1) − 3(x − 1) = 0\n(2x − 3)(x − 1) = 0\nx = 3/2 or x = 1' },
      { topic: 'fact', front: 'Solve: x² − 3x − 10 = 0', back: 'Two numbers: −5 and 2\n(x − 5)(x + 2) = 0\nx = 5 or x = −2' },
      { topic: 'fact', front: 'Solve: 2x² + x − 6 = 0', back: 'a × c = −12; 4 and −3\n2x² + 4x − 3x − 6 = 0\n2x(x + 2) − 3(x + 2) = 0\n(2x − 3)(x + 2) = 0\nx = 3/2 or x = −2' },
      { topic: 'fact', front: 'Solve: 6x² − x − 2 = 0', back: 'a × c = −12; −4 and 3\n6x² − 4x + 3x − 2 = 0\n2x(3x − 2) + 1(3x − 2) = 0\n(2x + 1)(3x − 2) = 0\nx = −1/2 or x = 2/3' },
      { topic: 'fact', front: 'Solve: √2x² + 7x + 5√2 = 0', back: 'a × c = √2 × 5√2 = 10; 2 and 5\n√2x² + 2x + 5x + 5√2 = 0\n√2x(x + √2) + 5(x + √2) = 0\n(x + √2)(√2x + 5) = 0\nx = −√2 or x = −5/√2' },
      { topic: 'fact', front: 'Solve: 2x² − x + 1/8 = 0', back: 'Multiply by 8: 16x² − 8x + 1 = 0\n(4x − 1)² = 0\nx = 1/4, 1/4 (equal roots)' },
      { topic: 'fact', front: 'Solve: 100x² − 20x + 1 = 0', back: '(10x − 1)² = 0\nx = 1/10, 1/10' },
      { topic: 'fact', front: 'Solve: 3x² − 2√6x + 2 = 0', back: '(√3x)² − 2(√3x)(√2) + (√2)² = 0\n(√3x − √2)² = 0\nx = √2/√3, √2/√3 (equal roots)' },

      { topic: 'formula', front: 'The quadratic formula', back: 'For ax² + bx + c = 0:\nx = (−b ± √(b² − 4ac)) / 2a\n(works when b² − 4ac ≥ 0)' },
      { topic: 'formula', front: 'Common mistakes with the quadratic formula', back: '• Using b instead of −b\n• Forgetting that b² is always positive: (−3)² = 9\n• Dividing only √D by 2a instead of the WHOLE top (−b ± √D)' },
      { topic: 'formula', front: 'Solve by the formula: 2x² − 7x + 3 = 0', back: 'a = 2, b = −7, c = 3\nD = 49 − 24 = 25, √D = 5\nx = (7 ± 5)/4\nx = 3 or x = 1/2' },
      { topic: 'formula', front: 'Solve by the formula: x² + 4x − 5 = 0', back: 'D = 16 + 20 = 36, √D = 6\nx = (−4 ± 6)/2\nx = 1 or x = −5' },
      { topic: 'formula', front: 'Solve by the formula: x² − 2x − 1 = 0', back: 'D = 4 + 4 = 8, √D = 2√2\nx = (2 ± 2√2)/2\nx = 1 + √2 or x = 1 − √2' },
      { topic: 'formula', front: 'Solve by the formula: 3x² − 5x + 2 = 0', back: 'D = 25 − 24 = 1\nx = (5 ± 1)/6\nx = 1 or x = 2/3' },
      { topic: 'formula', front: 'Solve by the formula: 2x² − 6x + 3 = 0', back: 'D = 36 − 24 = 12, √D = 2√3\nx = (6 ± 2√3)/4 = (3 ± √3)/2' },
      { topic: 'formula', front: 'When should you use the formula instead of factorising?', back: 'When you cannot find two whole numbers for splitting the middle term — usually because √D is not a whole number. The formula always works (when D ≥ 0).' },

      { topic: 'disc', front: 'What is the discriminant?', back: 'D = b² − 4ac\nIt "discriminates" (tells apart) the kinds of roots.' },
      { topic: 'disc', front: 'Nature of roots from D', back: 'D > 0 → two distinct real roots\nD = 0 → two equal real roots\nD < 0 → no real roots' },
      { topic: 'disc', front: 'If D = 0, what are the roots?', back: 'Both roots are equal to −b/2a.' },
      { topic: 'disc', front: 'Nature of roots: 2x² − 4x + 3 = 0', back: 'D = 16 − 24 = −8 < 0\nNo real roots' },
      { topic: 'disc', front: 'Nature of roots: 3x² − 4√3x + 4 = 0', back: 'D = 48 − 48 = 0\nTwo equal real roots, each 4√3/6 = 2/√3' },
      { topic: 'disc', front: 'Nature of roots: 2x² − 6x + 3 = 0', back: 'D = 36 − 24 = 12 > 0\nTwo distinct real roots: (3 ± √3)/2' },
      { topic: 'disc', front: 'Find k so that 2x² + kx + 3 = 0 has two equal roots.', back: 'D = 0: k² − 4(2)(3) = 0\nk² = 24\nk = ±2√6' },
      { topic: 'disc', front: 'Find k so that kx(x − 2) + 6 = 0 has two equal roots.', back: 'kx² − 2kx + 6 = 0\nD = 4k² − 24k = 0\n4k(k − 6) = 0\nk = 6 (k = 0 is not allowed: then it is not quadratic)' },
      { topic: 'disc', front: 'Is it possible to design a rectangular mango grove whose length is twice its breadth and area is 800 m²?', back: 'x(2x) = 800 → x² = 400 → x = 20\nYes: breadth 20 m, length 40 m' },
      { topic: 'disc', front: 'The sum of the ages of two friends is 20. Four years ago the product of their ages was 48. Is this possible?', back: '(x − 4)(16 − x) = 48\nx² − 20x + 112 = 0\nD = 400 − 448 = −48 < 0\nNo real roots → NOT possible' },
      { topic: 'disc', front: 'Is it possible to design a park with perimeter 80 m and area 400 m²?', back: 'l + b = 40, so x(40 − x) = 400\nx² − 40x + 400 = 0\nD = 1600 − 1600 = 0 → x = 20\nYes: a 20 m × 20 m square' },

      { topic: 'word', front: 'Steps for a quadratic word problem', back: '1. Let the unknown be x (with units)\n2. Write the other quantities in terms of x\n3. Form the equation and put it in standard form\n4. Solve\n5. Reject roots that make no sense (negative lengths, ages, speeds)' },
      { topic: 'word', front: 'Find two consecutive positive integers whose product is 306.', back: 'x(x + 1) = 306\nx² + x − 306 = 0\n(x + 18)(x − 17) = 0\nx = 17 (reject −18)\nIntegers: 17 and 18' },
      { topic: 'word', front: 'A rectangle has area 528 m² and its length is one more than twice its breadth. Find its sides.', back: '2x² + x − 528 = 0\nD = 1 + 4224 = 4225 = 65²\nx = (−1 + 65)/4 = 16\nBreadth 16 m, length 33 m' },
      { topic: 'word', front: 'The altitude of a right triangle is 7 cm less than its base. The hypotenuse is 13 cm. Find the other two sides.', back: 'x² + (x − 7)² = 13²\n2x² − 14x − 120 = 0 → x² − 7x − 60 = 0\n(x − 12)(x + 5) = 0\nBase 12 cm, altitude 5 cm' },
      { topic: 'word', front: 'John and Jivanti have 45 marbles together. Each loses 5, and the product of what they have left is 124. How many did each start with?', back: '(x − 5)(40 − x) = 124\nx² − 45x + 324 = 0\n(x − 36)(x − 9) = 0\n36 and 9' },
      { topic: 'word', front: 'A toy maker finds: cost of each toy (₹) = 55 − number of toys made. One day the total cost was ₹750. How many toys?', back: 'x(55 − x) = 750\nx² − 55x + 750 = 0\n(x − 25)(x − 30) = 0\n25 or 30 toys' },
      { topic: 'word', front: 'The difference of the squares of two numbers is 180. The square of the smaller is 8 times the larger. Find them.', back: 'x² − y² = 180 and y² = 8x\nx² − 8x − 180 = 0 → (x − 18)(x + 10) = 0\nx = 18, y² = 144 → y = ±12\nNumbers: 18 and 12 (or 18 and −12)' },
      { topic: 'word', front: 'Find two consecutive odd positive integers whose squares add up to 290.', back: 'x² + (x + 2)² = 290\n2x² + 4x − 286 = 0 → x² + 2x − 143 = 0\n(x + 13)(x − 11) = 0\n11 and 13' }
    ],

    quiz: [
      { topic: 'std', q: 'The standard form of a quadratic equation is…', options: ['ax + b = 0', 'ax² + bx + c = 0, a ≠ 0', 'ax³ + bx² + c = 0', 'ax² + bx + c = 0, a = 0'], answer: 1, explain: 'a must not be 0, otherwise there is no x² term.' },
      { topic: 'std', q: 'Which of these is a quadratic equation?', options: ['x + 1/x = 3', 'x³ − x = 2', '(x + 1)² = 2(x − 3)', 'x(x + 1) + 8 = (x + 2)(x − 2)'], answer: 2, explain: 'It becomes x² + 7 = 0. The last one becomes x + 12 = 0 (linear).' },
      { topic: 'std', q: 'Which of these is NOT a quadratic equation?', options: ['x² − 2x = (−2)(3 − x)', '(x − 2)² + 1 = 2x − 3', 'x² + 3x + 1 = (x − 2)²', '(x + 2)³ = x³ − 4'], answer: 2, explain: 'x² + 3x + 1 = x² − 4x + 4 → 7x − 3 = 0, which is linear.' },
      { topic: 'std', q: '(x + 2)³ = x³ − 4 simplifies to…', options: ['6x² + 12x + 12 = 0', 'x³ + 12 = 0', '12x + 12 = 0', 'x² + 4 = 0'], answer: 0, explain: 'x³ + 6x² + 12x + 8 = x³ − 4. The x³ terms cancel.' },
      { topic: 'std', q: 'The product of two consecutive positive integers is 306. The equation is…', options: ['x² + x − 306 = 0', 'x² − 306 = 0', '2x + 1 = 306', 'x² + 2x − 306 = 0'], answer: 0, explain: 'x(x + 1) = 306' },
      { topic: 'std', q: 'A rectangle\'s length is one more than twice its breadth x, and its area is 528 m². The equation is…', options: ['2x² + x − 528 = 0', 'x² + 2x − 528 = 0', '2x² + 1 = 528', 'x² + x − 528 = 0'], answer: 0, explain: 'x(2x + 1) = 528' },
      { topic: 'std', q: 'If x = 2 is a root of 2x² + kx − 6 = 0, then k is…', options: ['1', '−1', '2', '7'], answer: 1, explain: '8 + 2k − 6 = 0 → k = −1' },
      { topic: 'std', q: 'If x = −1/2 is a root of 3x² + 2kx − 3 = 0, then k is…', options: ['9/4', '−9/4', '9/2', '−9/2'], answer: 1, explain: '3/4 − k − 3 = 0 → k = −9/4' },

      { topic: 'fact', q: 'A quadratic equation can have at most…', options: ['1 root', '2 roots', '3 roots', 'Infinitely many roots'], answer: 1, explain: 'Degree 2 → at most 2 roots.' },
      { topic: 'fact', q: 'The roots of x² − 3x − 10 = 0 are…', options: ['5 and −2', '−5 and 2', '10 and −1', '3 and −10'], answer: 0, explain: '(x − 5)(x + 2) = 0' },
      { topic: 'fact', q: 'The roots of 2x² − 5x + 3 = 0 are…', options: ['1 and 3/2', '−1 and −3/2', '2 and 3', '1 and 3'], answer: 0, explain: '(2x − 3)(x − 1) = 0' },
      { topic: 'fact', q: 'The roots of 6x² − x − 2 = 0 are…', options: ['1/2 and −2/3', '−1/2 and 2/3', '2 and −3', '1/3 and −1/2'], answer: 1, explain: '(2x + 1)(3x − 2) = 0' },
      { topic: 'fact', q: 'The roots of 100x² − 20x + 1 = 0 are…', options: ['1/10 and 1/10', '−1/10 and 1/10', '10 and 10', '1/20 and 1/5'], answer: 0, explain: '(10x − 1)² = 0' },
      { topic: 'fact', q: 'The roots of x² − 9 = 0 are…', options: ['3 only', '3 and −3', '9 and −9', '0 and 9'], answer: 1, explain: 'x² = 9' },
      { topic: 'fact', q: 'The roots of x² + 5x = 0 are…', options: ['0 and 5', '0 and −5', '5 and −5', '−5 only'], answer: 1, explain: 'x(x + 5) = 0' },
      { topic: 'fact', q: 'To factorise 2x² + x − 6 by splitting the middle term, you need two numbers with product ___ and sum 1.', options: ['−6', '−12', '12', '6'], answer: 1, explain: 'a × c = 2 × (−6) = −12. The numbers are 4 and −3.' },
      { topic: 'fact', q: 'The roots of √2x² + 7x + 5√2 = 0 are…', options: ['√2 and 5/√2', '−√2 and −5/√2', '−√2 and 5/√2', '2 and 5'], answer: 1, explain: '(x + √2)(√2x + 5) = 0' },

      { topic: 'formula', q: 'The quadratic formula for ax² + bx + c = 0 is x = …', options: ['(b ± √(b² − 4ac))/2a', '(−b ± √(b² − 4ac))/2a', '(−b ± √(b² + 4ac))/2a', '(−b ± √(b² − 4ac))/a'], answer: 1, explain: 'Note the −b and the 2a under the WHOLE top.' },
      { topic: 'formula', q: 'Using the formula on 2x² − 7x + 3 = 0, x = …', options: ['(7 ± 5)/4', '(−7 ± 5)/4', '(7 ± 5)/2', '(7 ± √73)/4'], answer: 0, explain: 'D = 49 − 24 = 25' },
      { topic: 'formula', q: 'The roots of x² − 2x − 1 = 0 are…', options: ['1 ± √2', '2 ± √2', '−1 ± √2', '1 ± 2√2'], answer: 0, explain: 'x = (2 ± √8)/2 = (2 ± 2√2)/2 = 1 ± √2' },
      { topic: 'formula', q: 'The roots of 2x² − 6x + 3 = 0 are…', options: ['(3 ± √3)/2', '(6 ± √3)/4', '3 ± √3', '(−3 ± √3)/2'], answer: 0, explain: 'x = (6 ± √12)/4 = (6 ± 2√3)/4' },
      { topic: 'formula', q: 'The roots of x² + 4x − 5 = 0 are…', options: ['1 and −5', '−1 and 5', '1 and 5', '−1 and −5'], answer: 0, explain: 'x = (−4 ± 6)/2' },
      { topic: 'formula', q: 'For 3x² − 5x + 2 = 0, the value of b² − 4ac is…', options: ['1', '49', '−1', '25'], answer: 0, explain: '25 − 24 = 1' },
      { topic: 'formula', q: 'In the formula, you divide by 2a…', options: ['Only the √ part', 'Only −b', 'The whole of −b ± √D', 'Nothing'], answer: 2, explain: 'x = (−b ± √D) / 2a' },

      { topic: 'disc', q: 'The discriminant of ax² + bx + c = 0 is…', options: ['b² + 4ac', 'b² − 4ac', '√(b² − 4ac)', '4ac − b²'], answer: 1, explain: 'D = b² − 4ac' },
      { topic: 'disc', q: 'If D > 0, the equation has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'Only one root'], answer: 0, explain: '√D is a positive number, so ± gives two different roots.' },
      { topic: 'disc', q: 'If D = 0, the equation has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'Infinitely many roots'], answer: 1, explain: 'Both roots are −b/2a.' },
      { topic: 'disc', q: 'If D < 0, the equation has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'One positive root'], answer: 2, explain: 'You cannot take the square root of a negative number (in real numbers).' },
      { topic: 'disc', q: 'The discriminant of 2x² − 4x + 3 = 0 is…', options: ['8', '−8', '40', '−40'], answer: 1, explain: '16 − 24 = −8' },
      { topic: 'disc', q: 'The equation 2x² − 3x + 5 = 0 has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'One root'], answer: 2, explain: 'D = 9 − 40 = −31 < 0' },
      { topic: 'disc', q: 'The equation 3x² − 4√3x + 4 = 0 has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'Three roots'], answer: 1, explain: 'D = 48 − 48 = 0' },
      { topic: 'disc', q: 'The equation x² − 5x + 6 = 0 has…', options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'One root'], answer: 0, explain: 'D = 25 − 24 = 1 > 0 (roots 2 and 3)' },
      { topic: 'disc', q: 'For equal roots, 2x² + kx + 3 = 0 needs k = …', options: ['±2√6', '±6', '±√6', '24'], answer: 0, explain: 'k² = 24 → k = ±√24 = ±2√6' },
      { topic: 'disc', q: 'For equal roots, kx(x − 2) + 6 = 0 needs k = …', options: ['0', '3', '6', '−6'], answer: 2, explain: '4k² − 24k = 0 → k = 6 (k ≠ 0)' },
      { topic: 'disc', q: 'If x² + kx + 16 = 0 has equal roots, then k = …', options: ['±4', '±8', '16', '±16'], answer: 1, explain: 'k² = 64' },
      { topic: 'disc', q: 'When the roots are equal, each root is…', options: ['b/2a', '−b/2a', 'c/a', '−b/a'], answer: 1, explain: 'x = (−b ± 0)/2a' },
      { topic: 'disc', q: 'Two friends\' ages add up to 20, and four years ago their product was 48. This is…', options: ['Possible', 'Not possible (D < 0)', 'Possible, both are 10', 'Possible, 12 and 8'], answer: 1, explain: 'x² − 20x + 112 = 0 has D = −48.' },
      { topic: 'disc', q: 'A park with perimeter 80 m and area 400 m² is…', options: ['Not possible', 'Possible: 20 m × 20 m', 'Possible: 40 m × 10 m', 'Possible: 30 m × 10 m'], answer: 1, explain: 'x² − 40x + 400 = 0 has D = 0, x = 20' },

      { topic: 'word', q: 'Two consecutive positive integers have product 306. They are…', options: ['16 and 17', '17 and 18', '18 and 19', '15 and 16'], answer: 1, explain: '17 × 18 = 306' },
      { topic: 'word', q: 'A rectangle has area 528 m² and length one more than twice its breadth. Its breadth is…', options: ['16 m', '33 m', '12 m', '22 m'], answer: 0, explain: '16 × 33 = 528' },
      { topic: 'word', q: 'A right triangle\'s altitude is 7 cm less than its base and the hypotenuse is 13 cm. The base is…', options: ['5 cm', '12 cm', '10 cm', '7 cm'], answer: 1, explain: '12² + 5² = 169 = 13²' },
      { topic: 'word', q: 'Rohan\'s mother is 26 years older. In 3 years the product of their ages will be 360. Rohan\'s age now is…', options: ['7', '10', '12', '33'], answer: 0, explain: '(7 + 3)(33 + 3) = 10 × 36 = 360' },
      { topic: 'word', q: 'A train travels 480 km. If its speed were 8 km/h less, it would take 3 hours more. Its speed is…', options: ['32 km/h', '40 km/h', '48 km/h', '60 km/h'], answer: 1, explain: '480/32 − 480/40 = 15 − 12 = 3 ✓' },
      { topic: 'word', q: 'Two consecutive odd positive integers have squares adding up to 290. They are…', options: ['9 and 11', '11 and 13', '13 and 15', '7 and 9'], answer: 1, explain: '121 + 169 = 290' },
      { topic: 'word', q: 'In a word problem you get x = 12 or x = −5 for a length. The answer is…', options: ['12', '−5', 'Both', 'Neither'], answer: 0, explain: 'A length cannot be negative, so reject −5.' },
      { topic: 'word', q: 'Toys: cost per toy (₹) = 55 − number of toys, and the total cost was ₹750. The number of toys could be…', options: ['15 or 40', '25 or 30', '20 or 35', '10 or 45'], answer: 1, explain: 'x(55 − x) = 750 → (x − 25)(x − 30) = 0' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'std', gen(mk) {
        const p = nz(mk, 4), P = mk.poly([1, p]);
        let q, lhs, res;
        if (Math.random() < 0.6) {
          const a = mk.pick([1, 1, 1, 2, 3, -1]); let b, c;
          do { b = mk.ri(-6, 6); c = mk.ri(-9, 9); } while (a === 1 && b === 2 * p);
          q = `(${P})² = ${mk.poly([a, b, c])}`; lhs = mk.poly([1, 2 * p, p * p]);
          res = [1 - a, 2 * p - b, p * p - c];
        } else {
          let b, c, d;
          do { b = Math.random() < 0.5 ? 3 * p : mk.ri(-9, 9); c = mk.ri(-9, 9); d = mk.ri(-9, 9); } while (b === 3 * p && c === 3 * p * p);
          q = `(${P})³ = ${mk.poly([1, b, c, d])}`; lhs = mk.poly([1, 3 * p, 3 * p * p, p * p * p]);
          res = [0, 3 * p - b, 3 * p * p - c, p * p * p - d];
        }
        const isQ = res.length === 3 ? res[0] !== 0 : res[1] !== 0;
        const left = mk.poly(res.length === 3 ? res : res.slice(1));
        return {
          q: `Is this a quadratic equation?\n${q}`,
          choices: ['Yes, it is quadratic', 'No, it is not quadratic'],
          answer: isQ ? 0 : 1,
          steps: `Expand the left side: ${lhs}\nBring everything to the left:\n${left} = 0\n` +
            (res.length === 4
              ? (isQ ? 'The x³ terms cancel, but an x² term is left, so it IS quadratic.' : 'The x³ and x² terms both cancel, so it is linear, NOT quadratic.')
              : (isQ ? 'The highest power left is x², so it IS quadratic.' : 'The x² terms cancel, so it is linear, NOT quadratic.'))
        };
      } },
      { topic: 'fact', gen(mk) {
        let r, p, q;
        do { r = mk.ri(-7, 7); q = mk.pick([1, 1, 2, 3, 4]); p = mk.ri(-9, 9); }
        while (mk.gcd(p, q) !== 1 || p === r * q || (r === 0 && p === 0));
        const a = q, b = -(p + q * r), c = p * r;
        const zs = [r, p / q], shown = `${mk.num(r)}, ${mk.frac(p, q)}`;
        const moved = c && Math.random() < 0.35;
        const Q = moved ? `${mk.poly([a, b, 0])} = ${mk.num(-c)}` : `${mk.poly([a, b, c])} = 0`;
        let steps = moved ? `Bring everything to one side: ${mk.poly([a, b, c])} = 0\n` : '';
        if (c === 0) steps += `No constant term, so take x out:\n${r === 0 ? `x(${mk.poly([q, -p])})` : `${q === 1 ? '' : q}x(${mk.poly([1, -r])})`} = 0`;
        else steps += `a × c = ${mk.num(a * c)}. Two numbers that multiply to ${mk.num(a * c)} and add to ${mk.num(b)}: ${mk.num(-p)} and ${mk.num(-q * r)}\n` +
          `${mk.poly([[a, 2], [-p, 1], [-q * r, 1], [c, 0]])} = 0\n(${mk.poly([1, -r])})(${mk.poly([q, -p])}) = 0`;
        return {
          q: `Solve by factorisation: ${Q}`,
          fields: [{ label: 'Roots (separate with a comma)', kind: 'list', answer: zs, show: shown }],
          hint: c === 0 ? 'No constant term: take x out as a common factor.' : `Write it as ${mk.poly([a, b, c])} = 0. Find two numbers that multiply to a × c = ${mk.num(a * c)} and add to b = ${mk.num(b)}.`,
          steps: steps + `\nPut each factor = 0: x = ${shown}`
        };
      } },
      { topic: 'formula', gen(mk) {
        let a, b, c, D;
        do { a = mk.ri(1, 4); b = mk.ri(-9, 9); c = nz(mk, 9); D = b * b - 4 * a * c; }
        while (D <= 0 || surd(D)[1] === 1 || mk.gcd(mk.gcd(a, b), c) !== 1);
        const right = rootStr(mk, -b, D, 2 * a);
        const D2 = b * b + 4 * a * c;
        const wrong = [rootStr(mk, b, D, 2 * a), rootStr(mk, -b, D, a), D2 > 0 ? rootStr(mk, -b, D2, 2 * a) : rootStr(mk, -b, D, 4 * a), rootStr(mk, -b, D, 4 * a), rootStr(mk, b, D, a)];
        const opts = [right, ...[...new Set(wrong)].filter(w => w !== right).slice(0, 3)];
        const order = opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);
        const [s, t] = surd(D);
        return {
          q: `Use the quadratic formula to solve ${mk.poly([a, b, c])} = 0.`,
          choices: order.map(o => o.t),
          answer: order.findIndex(o => o.k === 0),
          steps: `a = ${a}, b = ${mk.num(b)}, c = ${mk.num(c)}\nD = b² − 4ac = ${par(mk, b)}² − 4 × ${a} × ${par(mk, c)} = ${b * b} ${-4 * a * c < 0 ? '−' : '+'} ${Math.abs(4 * a * c)} = ${D}\n` +
            `√D = √${D}${s > 1 ? ` = ${s}√${t}` : ''}\nx = (−b ± √D)/2a = (${mk.num(-b)} ± ${s > 1 ? s : ''}√${t})/${2 * a}` + (right !== `(${mk.num(-b)} ± ${s > 1 ? s : ''}√${t})/${2 * a}` ? `\n= ${right}` : '')
        };
      } },
      { topic: 'disc', gen(mk) {
        const kind = mk.pick([0, 1, 2]);
        let a, b, c, D;
        if (kind === 1) {
          const p = mk.ri(1, 4), q = nz(mk, 5), m = mk.pick([1, 1, 2, -1]);
          a = m * p * p; b = m * 2 * p * q; c = m * q * q; D = 0;
        } else {
          do { a = nz(mk, 5); b = mk.ri(-9, 9); c = nz(mk, 9); D = b * b - 4 * a * c; } while (kind === 0 ? D <= 0 : D >= 0);
        }
        const Q = `${mk.poly([a, b, c])} = 0`;
        const work = `D = b² − 4ac = ${par(mk, b)}² − 4 × ${par(mk, a)} × ${par(mk, c)} = ${b * b} ${-4 * a * c < 0 ? '−' : '+'} ${Math.abs(4 * a * c)} = ${mk.num(D)}`;
        const say = D > 0 ? 'D > 0 → two distinct real roots' : D === 0 ? `D = 0 → two equal real roots (each −b/2a = ${mk.frac(-b, 2 * a)})` : 'D < 0 → no real roots';
        if (Math.random() < 0.4) return {
          q: `Find the discriminant of ${Q}.`,
          fields: [{ label: 'D =', answer: D, signed: true }],
          hint: 'D = b² − 4ac. Remember b² is never negative.',
          steps: `a = ${mk.num(a)}, b = ${mk.num(b)}, c = ${mk.num(c)}\n${work}\n${say}`
        };
        return {
          q: `What is the nature of the roots of ${Q}?`,
          choices: NATURE,
          answer: kind,
          steps: `a = ${mk.num(a)}, b = ${mk.num(b)}, c = ${mk.num(c)}\n${work}\n${say}`
        };
      } },
      { topic: 'disc', gen(mk) {
        const v = mk.pick(['middle', 'const', 'lead', 'book']);
        if (v === 'middle') {
          const p = mk.ri(1, 3), q = mk.ri(1, 6), a = p * p, c = q * q;
          return {
            q: `Find the values of k for which ${a === 1 ? '' : a}x² + kx + ${c} = 0 has two equal roots.`,
            fields: [{ label: 'k = (both values, comma between)', kind: 'list', answer: [2 * p * q, -2 * p * q], show: `${2 * p * q}, −${2 * p * q}` }],
            hint: 'Equal roots → D = 0, so k² − 4ac = 0.',
            steps: `Equal roots → D = 0\nk² − 4 × ${a} × ${c} = 0\nk² = ${4 * a * c}\nk = ±${2 * p * q}`
          };
        }
        if (v === 'const') {
          const a = mk.ri(1, 5), t = nz(mk, 4), b = 2 * a * t;
          return {
            q: `Find k if ${mk.poly([a, b])} + k = 0 has two equal roots.`,
            fields: [{ label: 'k =', answer: a * t * t, signed: true }],
            hint: 'Equal roots → D = b² − 4ac = 0, with c = k.',
            steps: `Equal roots → D = 0\n${par(mk, b)}² − 4 × ${a} × k = 0\n${b * b} = ${4 * a}k\nk = ${a * t * t}`
          };
        }
        if (v === 'lead') {
          const c = mk.ri(1, 5), t = nz(mk, 4), b = 2 * c * t;
          return {
            q: `Find k if kx² ${b < 0 ? '−' : '+'} ${Math.abs(b)}x + ${c} = 0 has two equal roots.`,
            fields: [{ label: 'k =', answer: c * t * t, signed: true }],
            hint: 'Equal roots → D = b² − 4ac = 0, with a = k.',
            steps: `Equal roots → D = 0\n${par(mk, b)}² − 4 × k × ${c} = 0\n${b * b} = ${4 * c}k\nk = ${c * t * t}`
          };
        }
        const p = mk.ri(1, 4), j = mk.ri(1, 4), q = p * p * j, k = 4 * j;
        return {
          q: `Find k if kx(x − ${p}) + ${q} = 0 has two equal roots.`,
          fields: [{ label: 'k =', answer: k, signed: true }],
          hint: `First expand: kx² − ${p === 1 ? '' : p}kx + ${q} = 0. Then put D = 0.`,
          steps: `kx² − ${p === 1 ? '' : p}kx + ${q} = 0\nD = (${p === 1 ? '' : p}k)² − 4 × k × ${q} = ${p * p === 1 ? '' : p * p}k² − ${4 * q}k = 0\n${p * p === 1 ? '' : p * p}k(k − ${k}) = 0\nk = ${k} (k = 0 is not allowed: the equation would not be quadratic)`
        };
      } },
      { topic: 'word', gen(mk) {
        const v = mk.pick(['consec', 'odd', 'sumprod', 'toys']);
        if (v === 'consec') {
          const n = mk.ri(5, 30), P = n * (n + 1);
          return {
            q: `The product of two consecutive positive integers is ${P}. Find the integers.`,
            fields: [{ label: 'Smaller', answer: n }, { label: 'Larger', answer: n + 1 }],
            hint: 'Let them be x and x + 1. Then x(x + 1) = ' + P + '.',
            steps: `x(x + 1) = ${P}\nx² + x − ${P} = 0\n(x − ${n})(x + ${n + 1}) = 0\nx = ${n} or x = −${n + 1}. Reject −${n + 1} (not positive).\nThe integers are ${n} and ${n + 1}.`
          };
        }
        if (v === 'odd') {
          const n = 2 * mk.ri(1, 11) + 1, S = n * n + (n + 2) * (n + 2), K = (S - 4) / 2;
          return {
            q: `Find two consecutive odd positive integers whose squares add up to ${S}.`,
            fields: [{ label: 'Smaller', answer: n }, { label: 'Larger', answer: n + 2 }],
            hint: `Let them be x and x + 2. Then x² + (x + 2)² = ${S}.`,
            steps: `x² + (x + 2)² = ${S}\n2x² + 4x + 4 = ${S}\n2x² + 4x − ${S - 4} = 0 → x² + 2x − ${K} = 0\n(x − ${n})(x + ${n + 2}) = 0\nx = ${n} (reject −${n + 2})\nThe integers are ${n} and ${n + 2}.`
          };
        }
        if (v === 'sumprod') {
          let a, b; do { a = mk.ri(3, 25); b = mk.ri(2, 20); } while (a <= b);
          return {
            q: `The sum of two numbers is ${a + b} and their product is ${a * b}. Find the numbers.`,
            fields: [{ label: 'Larger', answer: a }, { label: 'Smaller', answer: b }],
            hint: `Let one number be x. The other is ${a + b} − x. So x(${a + b} − x) = ${a * b}.`,
            steps: `x(${a + b} − x) = ${a * b}\nx² − ${a + b}x + ${a * b} = 0\n(x − ${a})(x − ${b}) = 0\nx = ${a} or ${b}\nThe numbers are ${a} and ${b}.`
          };
        }
        let p, q; do { p = mk.ri(10, 40); q = mk.ri(10, 40); } while (p >= q);
        const K = p + q, C = p * q;
        return {
          q: `A small factory finds that the cost of making each toy (in ₹) is ${K} minus the number of toys made that day. One day the total cost was ₹${C}. How many toys could have been made? (Give both answers.)`,
          fields: [{ label: 'Number of toys (both, comma between)', kind: 'list', answer: [p, q], show: `${p}, ${q}` }],
          hint: `Let x toys be made. Cost of each = ₹(${K} − x). Total = x(${K} − x) = ${C}.`,
          steps: `x(${K} − x) = ${C}\nx² − ${K}x + ${C} = 0\n(x − ${p})(x − ${q}) = 0\nx = ${p} or ${q}. Both are possible.`
        };
      } },
      { topic: 'word', gen(mk) {
        const v = mk.pick(['rect', 'rect2', 'tri', 'train']);
        if (v === 'rect') {
          const b = mk.ri(4, 30), d = mk.ri(1, 12), A = b * (b + d);
          return {
            q: `The length of a rectangle is ${d} m more than its breadth. Its area is ${A} m². Find the length and breadth.`,
            fields: [{ label: 'Length (m)', answer: b + d }, { label: 'Breadth (m)', answer: b }],
            hint: `Let the breadth be x m. Then x(x + ${d}) = ${A}.`,
            steps: `x(x + ${d}) = ${A}\nx² + ${d}x − ${A} = 0\n(x − ${b})(x + ${b + d}) = 0\nx = ${b} (reject −${b + d}: a length cannot be negative)\nBreadth ${b} m, length ${b + d} m`
          };
        }
        if (v === 'rect2') {
          const b = mk.ri(4, 25), d = mk.ri(1, 9), L = 2 * b + d, A = b * L;
          return {
            q: `The length of a rectangular plot is ${d} m more than twice its breadth. Its area is ${A} m². Find the length and breadth.`,
            fields: [{ label: 'Length (m)', answer: L }, { label: 'Breadth (m)', answer: b }],
            hint: `Let the breadth be x m. Then the length is (2x + ${d}) m and x(2x + ${d}) = ${A}.`,
            steps: `x(2x + ${d}) = ${A}\n2x² + ${d}x − ${A} = 0\n(x − ${b})(2x + ${L}) = 0\nx = ${b} (reject −${mk.frac(L, 2)})\nBreadth ${b} m, length 2 × ${b} + ${d} = ${L} m`
          };
        }
        if (v === 'tri') {
          let t, k; do { t = mk.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]]); k = mk.ri(1, 3); } while (t[2] * k > 60);
          const alt = t[0] * k, base = t[1] * k, h = t[2] * k, d = base - alt;
          return {
            q: `The altitude of a right triangle is ${d} cm less than its base. Its hypotenuse is ${h} cm. Find the base and the altitude.`,
            fields: [{ label: 'Base (cm)', answer: base }, { label: 'Altitude (cm)', answer: alt }],
            hint: `Let the base be x cm. Then the altitude is (x − ${d}) cm. Use Pythagoras: x² + (x − ${d})² = ${h}².`,
            steps: `x² + (x − ${d})² = ${h}²\n2x² − ${2 * d}x + ${d * d} = ${h * h}\n2x² − ${2 * d}x − ${h * h - d * d} = 0\nx² − ${d === 1 ? '' : d}x − ${base * alt} = 0\n(x − ${base})(x + ${alt}) = 0\nx = ${base} (reject −${alt})\nBase ${base} cm, altitude ${base} − ${d} = ${alt} cm`
          };
        }
        const s = mk.pick([5, 10, 15, 20]), m = mk.ri(3, 8), sp = s * m, D = s * m * (m + 1);
        return {
          q: `A train travels ${D} km at a uniform speed. If the speed had been ${s} km/h more, the journey would have taken 1 hour less. Find the speed of the train (in km/h).`,
          fields: [{ label: 'Speed (km/h)', answer: sp }],
          hint: `Let the speed be x km/h. Time = distance ÷ speed, so ${D}/x − ${D}/(x + ${s}) = 1.`,
          steps: `${D}/x − ${D}/(x + ${s}) = 1\n${D}(x + ${s}) − ${D}x = x(x + ${s})\n${D * s} = x² + ${s}x\nx² + ${s}x − ${D * s} = 0\n(x − ${sp})(x + ${sp + s}) = 0\nx = ${sp} (reject −${sp + s}: speed cannot be negative)\nSpeed = ${sp} km/h`
        };
      } }
    ],

    match: [
      { title: 'Discriminant & Roots', pairs: [
        ['D > 0', 'Two distinct real roots'],
        ['D = 0', 'Two equal real roots'],
        ['D < 0', 'No real roots'],
        ['Discriminant D', 'b² − 4ac'],
        ['Quadratic formula', 'x = (−b ± √D)/2a'],
        ['Each root when D = 0', '−b/2a']
      ] },
      { title: 'Equation → Roots', pairs: [
        ['x² − 3x − 10 = 0', '5, −2'],
        ['2x² − 5x + 3 = 0', '1, 3/2'],
        ['6x² − x − 2 = 0', '2/3, −1/2'],
        ['100x² − 20x + 1 = 0', '1/10, 1/10'],
        ['x² − 2x − 1 = 0', '1 ± √2'],
        ['x² + 4x − 5 = 0', '1, −5']
      ] },
      { title: 'Equation → Discriminant', pairs: [
        ['2x² − 4x + 3 = 0', '−8'],
        ['2x² − 6x + 3 = 0', '12'],
        ['3x² − 4√3x + 4 = 0', '0'],
        ['2x² − 7x + 3 = 0', '25'],
        ['x² − 2x − 1 = 0', '8'],
        ['2x² − 3x + 5 = 0', '−31']
      ] },
      { title: 'Situation → Equation', pairs: [
        ['Consecutive integers, product 306', 'x(x + 1) = 306'],
        ['Length = 2 × breadth + 1, area 528', 'x(2x + 1) = 528'],
        ['Altitude 7 less than base, hypotenuse 13', 'x² + (x − 7)² = 169'],
        ['Toy cost ₹(55 − x) each, total ₹750', 'x(55 − x) = 750'],
        ['45 marbles, each loses 5, product 124', '(x − 5)(40 − x) = 124'],
        ['Consecutive odd numbers, squares add to 290', 'x² + (x + 2)² = 290']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'Check whether (x + 1)² = 2(x − 3) is a quadratic equation.',
        keypoints: [
          { text: 'x² + 2x + 1 = 2x − 6 → x² + 7 = 0', kw: ['7'] },
          { text: 'Yes, it is quadratic', kw: ['yes|quadratic'] }
        ],
        model: 'x² + 2x + 1 = 2x − 6\nx² + 7 = 0\nThis is of the form ax² + bx + c = 0 with a = 1 ≠ 0, so it IS a quadratic equation.' },
      { marks: 1, q: 'Find the discriminant of 2x² − 4x + 3 = 0.',
        keypoints: [
          { text: 'D = 16 − 24 = −8', kw: ['8'] }
        ],
        model: 'D = b² − 4ac = (−4)² − 4(2)(3) = 16 − 24 = −8' },
      { marks: 1, q: 'If x = 2 is a root of 2x² + kx − 6 = 0, find k.',
        keypoints: [
          { text: '8 + 2k − 6 = 0, so k = −1', kw: ['1'] }
        ],
        model: 'Put x = 2: 2(4) + 2k − 6 = 0\n2 + 2k = 0\nk = −1' },
      { marks: 1, q: 'Find the nature of the roots of 3x² − 4√3x + 4 = 0.',
        keypoints: [
          { text: 'D = 48 − 48 = 0', kw: ['0'] },
          { text: 'Two equal real roots', kw: ['equal'] }
        ],
        model: 'D = (4√3)² − 4(3)(4) = 48 − 48 = 0\nSo the roots are real and equal.' },
      { marks: 2, q: 'Solve by factorisation: x² − 3x − 10 = 0.',
        keypoints: [
          { text: '(x − 5)(x + 2) = 0', kw: ['x − 5|x-5|x - 5', 'x + 2|x+2'] },
          { text: 'x = 5 or x = −2', kw: ['5', '2'] }
        ],
        model: 'x² − 5x + 2x − 10 = 0\nx(x − 5) + 2(x − 5) = 0\n(x − 5)(x + 2) = 0\nx = 5 or x = −2' },
      { marks: 2, q: 'Solve by factorisation: 6x² − x − 2 = 0.',
        keypoints: [
          { text: '6x² − 4x + 3x − 2 = (2x + 1)(3x − 2)', kw: ['2x + 1|2x+1', '3x − 2|3x-2|3x - 2'] },
          { text: 'x = −1/2 or x = 2/3', kw: ['1/2', '2/3'] }
        ],
        model: '6x² − 4x + 3x − 2 = 0\n2x(3x − 2) + 1(3x − 2) = 0\n(2x + 1)(3x − 2) = 0\nx = −1/2 or x = 2/3' },
      { marks: 2, q: 'Solve 2x² − 7x + 3 = 0 using the quadratic formula.',
        keypoints: [
          { text: 'D = 49 − 24 = 25', kw: ['25'] },
          { text: 'x = (7 ± 5)/4', kw: ['(7|7 ±'] },
          { text: 'x = 3 or x = 1/2', kw: ['3', '1/2'] }
        ],
        model: 'a = 2, b = −7, c = 3\nD = b² − 4ac = 49 − 24 = 25\nx = (−b ± √D)/2a = (7 ± 5)/4\nx = 12/4 = 3 or x = 2/4 = 1/2' },
      { marks: 2, q: 'Find k so that kx(x − 2) + 6 = 0 has two equal roots.',
        keypoints: [
          { text: 'kx² − 2kx + 6 = 0, D = 4k² − 24k', kw: ['4k²|4k^2|4k2', '24k'] },
          { text: 'k = 6 (k ≠ 0)', kw: ['6'] }
        ],
        model: 'kx² − 2kx + 6 = 0\nEqual roots → D = 0\n(−2k)² − 4(k)(6) = 0\n4k² − 24k = 0\n4k(k − 6) = 0\nk = 0 or k = 6. k = 0 makes it not quadratic, so k = 6.' },
      { marks: 2, q: 'Check whether x(x + 1) + 8 = (x + 2)(x − 2) is a quadratic equation.',
        keypoints: [
          { text: 'x² + x + 8 = x² − 4', kw: ['x² − 4|x^2 - 4|x2 − 4|x² - 4'] },
          { text: 'x + 12 = 0: NOT quadratic', kw: ['not'] }
        ],
        model: 'x² + x + 8 = x² − 4\nx + 12 = 0\nThe x² terms cancel, so it is a linear equation, NOT a quadratic equation.' },
      { marks: 3, q: 'Find the roots of √2x² + 7x + 5√2 = 0 by factorisation.',
        keypoints: [
          { text: 'Split 7x as 2x + 5x', kw: ['2x', '5x'] },
          { text: '(x + √2)(√2x + 5) = 0', kw: ['x + √2|x+√2'] },
          { text: 'x = −√2 or x = −5/√2', kw: ['5/√2|5√2/2'] }
        ],
        model: 'a × c = √2 × 5√2 = 10, so split 7x as 2x + 5x\n√2x² + 2x + 5x + 5√2 = 0\n√2x(x + √2) + 5(x + √2) = 0\n(x + √2)(√2x + 5) = 0\nx = −√2 or x = −5/√2' },
      { marks: 3, q: 'Find two consecutive positive integers whose product is 306.',
        keypoints: [
          { text: 'x(x + 1) = 306 → x² + x − 306 = 0', kw: ['306'] },
          { text: '(x + 18)(x − 17) = 0', kw: ['17'] },
          { text: 'Integers 17 and 18 (reject −18)', kw: ['18'] }
        ],
        model: 'Let the integers be x and x + 1.\nx(x + 1) = 306\nx² + x − 306 = 0\nx² + 18x − 17x − 306 = 0\n(x + 18)(x − 17) = 0\nx = 17 (x = −18 is not positive)\nThe integers are 17 and 18.' },
      { marks: 3, q: 'Is it possible to design a rectangular mango grove whose length is twice its breadth and whose area is 800 m²? If so, find its length and breadth.',
        keypoints: [
          { text: 'x × 2x = 800 → x² = 400', kw: ['400'] },
          { text: 'x = 20 (D > 0, so possible)', kw: ['20'] },
          { text: 'Breadth 20 m, length 40 m', kw: ['40'] }
        ],
        model: 'Let breadth = x m, length = 2x m.\n2x² = 800 → x² − 400 = 0\nD = 0 + 1600 > 0, so real roots exist: it is possible.\nx = 20 (reject −20)\nBreadth 20 m, length 40 m' },
      { marks: 3, q: 'The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the other two sides.',
        keypoints: [
          { text: 'x² + (x − 7)² = 169', kw: ['169'] },
          { text: 'x² − 7x − 60 = 0 → (x − 12)(x + 5) = 0', kw: ['60'] },
          { text: 'Base 12 cm, altitude 5 cm', kw: ['12', '5'] }
        ],
        model: 'Let base = x cm, altitude = (x − 7) cm.\nx² + (x − 7)² = 13²\n2x² − 14x + 49 = 169\n2x² − 14x − 120 = 0 → x² − 7x − 60 = 0\n(x − 12)(x + 5) = 0\nx = 12 (reject −5)\nBase 12 cm, altitude 5 cm' },
      { marks: 3, q: 'John and Jivanti together have 45 marbles. Both of them lost 5 marbles each, and the product of the number of marbles they now have is 124. Find how many marbles they had to start with.',
        keypoints: [
          { text: '(x − 5)(40 − x) = 124', kw: ['124'] },
          { text: 'x² − 45x + 324 = 0', kw: ['324'] },
          { text: '36 and 9', kw: ['36', '9'] }
        ],
        model: 'Let John have x marbles; Jivanti has 45 − x.\nAfter losing 5 each: x − 5 and 40 − x\n(x − 5)(40 − x) = 124\n40x − x² − 200 + 5x = 124\nx² − 45x + 324 = 0\n(x − 36)(x − 9) = 0\nx = 36 or 9\nSo they had 36 and 9 marbles.' },
      { marks: 3, q: 'Is the following possible? The sum of the ages of two friends is 20 years. Four years ago, the product of their ages was 48.',
        keypoints: [
          { text: '(x − 4)(16 − x) = 48', kw: ['48'] },
          { text: 'x² − 20x + 112 = 0', kw: ['112'] },
          { text: 'D = 400 − 448 = −48 < 0, so not possible', kw: ['not'] }
        ],
        model: 'Let one friend be x years; the other is 20 − x.\nFour years ago: (x − 4)(16 − x) = 48\n16x − x² − 64 + 4x = 48\nx² − 20x + 112 = 0\nD = 400 − 448 = −48 < 0\nNo real roots, so the situation is NOT possible.' },
      { marks: 5, q: 'A train travels 480 km at a uniform speed. If the speed had been 8 km/h less, it would have taken 3 hours more to cover the same distance. Find the speed of the train.',
        keypoints: [
          { text: '480/(x − 8) − 480/x = 3', kw: ['480'] },
          { text: '3x² − 24x − 3840 = 0 → x² − 8x − 1280 = 0', kw: ['1280'] },
          { text: '(x − 40)(x + 32) = 0', kw: ['40', '32'] },
          { text: 'Speed = 40 km/h (reject −32)', kw: ['40'] }
        ],
        model: 'Let the speed be x km/h. Time = 480/x hours.\nAt (x − 8) km/h, time = 480/(x − 8) hours.\n480/(x − 8) − 480/x = 3\n480x − 480(x − 8) = 3x(x − 8)\n3840 = 3x² − 24x\nx² − 8x − 1280 = 0\nx² − 40x + 32x − 1280 = 0\n(x − 40)(x + 32) = 0\nx = 40 (speed cannot be −32)\nThe speed of the train is 40 km/h.' }
    ]
  });
})();
