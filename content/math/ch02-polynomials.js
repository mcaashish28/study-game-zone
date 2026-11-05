// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 2: Polynomials
// Not in the rationalised syllabus: division algorithm for polynomials.
// Write powers with Unicode superscripts (x², x³): the app turns a digit after a letter into a subscript.
SWG.addChapter('math', {
  id: 'math-ch02',
  number: 2,
  title: 'Polynomials',
  icon: '📈',

  topics: {
    basics: 'Degree, Types & Values',
    graph: 'Zeroes on a Graph',
    zeros: 'Finding Zeroes',
    rel: 'Sum & Product of Zeroes',
    form: 'Making a Quadratic',
    expr: 'Using α + β and αβ'
  },

  summary: [
    'The degree of a polynomial is its highest power of x. Linear: degree 1 (ax + b). Quadratic: degree 2 (ax² + bx + c). Cubic: degree 3.',
    'A zero of p(x) is a number k with p(k) = 0. The zero of ax + b is −b/a.',
    'On a graph, the zeroes of p(x) are the x-coordinates of the points where y = p(x) meets the x-axis.',
    'A polynomial of degree n has at most n zeroes. So a quadratic has 0, 1 or 2 zeroes; its graph is a parabola (opens up if a > 0, down if a < 0).',
    'For ax² + bx + c with zeroes α and β: α + β = −b/a and αβ = c/a.',
    'A quadratic with sum of zeroes S and product P is k(x² − Sx + P), where k is any non-zero number.',
    'Find zeroes by splitting the middle term: find two numbers that multiply to a × c and add to b.'
  ],

  flashcards: [
    { topic: 'basics', front: 'What is a polynomial?', back: 'An expression made of terms like axⁿ, where n is a whole number (0, 1, 2, …).\ne.g. 2x² − 3x + 5\nNot polynomials: 1/x, √x (the powers are not whole numbers).' },
    { topic: 'basics', front: 'What is the degree of a polynomial?', back: 'The highest power of the variable.\ne.g. 4x³ − 2x² + 7 has degree 3.' },
    { topic: 'basics', front: 'Linear, quadratic and cubic polynomials', back: 'Linear: degree 1 → ax + b (a ≠ 0)\nQuadratic: degree 2 → ax² + bx + c (a ≠ 0)\nCubic: degree 3 → ax³ + bx² + cx + d (a ≠ 0)' },
    { topic: 'basics', front: 'What is the degree of a constant polynomial like 7?', back: '0, because 7 = 7x⁰.\n(The zero polynomial 0 has no defined degree.)' },
    { topic: 'basics', front: 'How do you find the value of p(x) at x = k?', back: 'Put k in place of x everywhere and work it out.\ne.g. p(x) = x² − 3x − 4\np(−1) = 1 + 3 − 4 = 0' },
    { topic: 'basics', front: 'What is a zero of a polynomial?', back: 'A number k is a zero of p(x) if p(k) = 0.\ne.g. 4 is a zero of x² − 3x − 4 because 16 − 12 − 4 = 0.' },
    { topic: 'basics', front: 'What is the zero of the linear polynomial ax + b?', back: 'x = −b/a\n= −(constant term) / (coefficient of x)\ne.g. zero of 2x + 3 is −3/2' },
    { topic: 'graph', front: 'What do the zeroes of p(x) mean on a graph?', back: 'They are the x-coordinates of the points where the graph of y = p(x) meets (cuts or touches) the x-axis.' },
    { topic: 'graph', front: 'What does the graph of a linear polynomial look like?', back: 'A straight line. It meets the x-axis at exactly one point, so a linear polynomial has exactly one zero.' },
    { topic: 'graph', front: 'What is the graph of a quadratic polynomial called?', back: 'A parabola.\nOpens upward (∪) if a > 0.\nOpens downward (∩) if a < 0.' },
    { topic: 'graph', front: 'How many zeroes can a quadratic polynomial have? Show with graphs.', back: '2 zeroes: parabola cuts the x-axis at two points\n1 zero: parabola just touches the x-axis\n0 zeroes: parabola is completely above or below the x-axis' },
    { topic: 'graph', front: 'How many zeroes can a cubic polynomial have?', back: 'At most 3. Its graph can meet the x-axis at 1, 2 or 3 points.\n(A cubic always has at least one zero.)' },
    { topic: 'graph', front: 'At most how many zeroes does a polynomial of degree n have?', back: 'At most n zeroes.' },
    { topic: 'graph', front: 'A graph touches the x-axis at one point and cuts it at another. How many zeroes?', back: '2 zeroes. Count the number of DIFFERENT points where the graph meets the x-axis, whether it cuts or just touches.' },
    { topic: 'zeros', front: 'How do you find the zeroes of a quadratic by splitting the middle term?', back: '1. Find a × c\n2. Find two numbers that multiply to a × c and add to b\n3. Split bx into these two terms\n4. Factorise in pairs\n5. Put each factor = 0' },
    { topic: 'zeros', front: 'Find the zeroes of x² + 7x + 10.', back: '= x² + 2x + 5x + 10\n= x(x + 2) + 5(x + 2)\n= (x + 2)(x + 5)\nZeroes: −2 and −5' },
    { topic: 'zeros', front: 'Find the zeroes of x² − 2x − 8.', back: '= x² − 4x + 2x − 8\n= (x − 4)(x + 2)\nZeroes: 4 and −2' },
    { topic: 'zeros', front: 'Find the zeroes of 4s² − 4s + 1.', back: '= (2s − 1)²\nZeroes: 1/2 and 1/2 (both the same)' },
    { topic: 'zeros', front: 'Find the zeroes of 6x² − 3 − 7x.', back: 'Write in order: 6x² − 7x − 3\n= 6x² − 9x + 2x − 3\n= 3x(2x − 3) + 1(2x − 3)\n= (3x + 1)(2x − 3)\nZeroes: 3/2 and −1/3' },
    { topic: 'zeros', front: 'Find the zeroes of 4u² + 8u.', back: '= 4u(u + 2)\nZeroes: 0 and −2\n(No constant term, so take the common factor out.)' },
    { topic: 'zeros', front: 'Find the zeroes of t² − 15.', back: 't² = 15\nt = √15 or −√15\nZeroes: √15 and −√15' },
    { topic: 'zeros', front: 'Find the zeroes of 3x² − x − 4.', back: '= 3x² − 4x + 3x − 4\n= x(3x − 4) + 1(3x − 4)\n= (x + 1)(3x − 4)\nZeroes: −1 and 4/3' },
    { topic: 'zeros', front: 'Find the zeroes of x² − 3.', back: '= (x − √3)(x + √3)\nZeroes: √3 and −√3' },
    { topic: 'rel', front: 'Sum of zeroes of ax² + bx + c', back: 'α + β = −b/a\n= −(coefficient of x) / (coefficient of x²)' },
    { topic: 'rel', front: 'Product of zeroes of ax² + bx + c', back: 'αβ = c/a\n= (constant term) / (coefficient of x²)' },
    { topic: 'rel', front: 'How do you "verify the relationship between the zeroes and the coefficients"?', back: '1. Find the zeroes α and β\n2. Work out α + β and check it equals −b/a\n3. Work out αβ and check it equals c/a' },
    { topic: 'rel', front: 'Verify the relationship for x² + 7x + 10.', back: 'Zeroes: −2, −5\nSum = −7 = −(7)/1 = −b/a ✓\nProduct = 10 = 10/1 = c/a ✓' },
    { topic: 'rel', front: 'Verify the relationship for 3x² − x − 4.', back: 'Zeroes: −1, 4/3\nSum = −1 + 4/3 = 1/3 = −(−1)/3 = −b/a ✓\nProduct = −4/3 = c/a ✓' },
    { topic: 'rel', front: 'If the zeroes are equal in size but opposite in sign (like 3 and −3), what can you say about b?', back: 'b = 0, because α + β = 0 = −b/a.\ne.g. x² − 9' },
    { topic: 'rel', front: 'If one zero is the reciprocal of the other (α and 1/α), what can you say?', back: 'αβ = α × 1/α = 1 = c/a, so a = c.' },
    { topic: 'rel', front: 'Cubic: relationships for ax³ + bx² + cx + d with zeroes α, β, γ (book example)', back: 'α + β + γ = −b/a\nαβ + βγ + γα = c/a\nαβγ = −d/a' },
    { topic: 'form', front: 'How do you make a quadratic polynomial with sum of zeroes S and product P?', back: 'k(x² − Sx + P), where k is any non-zero number.\nUsually take k = 1, or k = the number that clears the fractions.' },
    { topic: 'form', front: 'Quadratic with sum of zeroes 1/4 and product −1', back: 'x² − (1/4)x − 1\nMultiply by 4: 4x² − x − 4' },
    { topic: 'form', front: 'Quadratic with sum of zeroes √2 and product 1/3', back: 'x² − √2x + 1/3\nMultiply by 3: 3x² − 3√2x + 1' },
    { topic: 'form', front: 'Quadratic with sum of zeroes 0 and product √5', back: 'x² − 0x + √5 = x² + √5' },
    { topic: 'form', front: 'Quadratic with sum of zeroes −1/4 and product 1/4', back: 'x² + (1/4)x + 1/4\nMultiply by 4: 4x² + x + 1' },
    { topic: 'form', front: 'Quadratic whose zeroes are 3 and −5', back: 'Sum = −2, product = −15\nx² − (−2)x + (−15) = x² + 2x − 15\n(or (x − 3)(x + 5))' },
    { topic: 'expr', front: 'Write α² + β² using α + β and αβ.', back: 'α² + β² = (α + β)² − 2αβ' },
    { topic: 'expr', front: 'Write 1/α + 1/β using α + β and αβ.', back: '1/α + 1/β = (α + β) / αβ' },
    { topic: 'expr', front: 'Write (α − β)² using α + β and αβ.', back: '(α − β)² = (α + β)² − 4αβ' },
    { topic: 'expr', front: 'Write α²β + αβ² using α + β and αβ.', back: 'α²β + αβ² = αβ(α + β)' },
    { topic: 'expr', front: 'If α, β are the zeroes of x² − 5x + 6, find α² + β².', back: 'α + β = 5, αβ = 6\nα² + β² = 5² − 2 × 6 = 25 − 12 = 13' }
  ],

  quiz: [
    { topic: 'basics', q: 'The degree of 5x³ − 4x² + x − 2 is…', options: ['1', '2', '3', '5'], answer: 2, explain: 'The highest power of x is 3.' },
    { topic: 'basics', q: 'Which of these is a quadratic polynomial?', options: ['x³ + 2', '3x − 7', '2x² + 5x − 1', '1/x + x'], answer: 2, explain: 'Highest power 2. (1/x + x is not a polynomial.)' },
    { topic: 'basics', q: 'Which of these is NOT a polynomial?', options: ['x² + 1', '√2 x + 3', 'x + 1/x', '7'], answer: 2, explain: '1/x = x⁻¹. Powers must be whole numbers.' },
    { topic: 'basics', q: 'The degree of the constant polynomial 9 is…', options: ['0', '1', '9', 'Not defined'], answer: 0, explain: '9 = 9x⁰' },
    { topic: 'basics', q: 'If p(x) = x² − 3x + 2, then p(2) is…', options: ['0', '2', '4', '−2'], answer: 0, explain: '4 − 6 + 2 = 0, so 2 is a zero.' },
    { topic: 'basics', q: 'The zero of 2x + 3 is…', options: ['3/2', '−3/2', '2/3', '−2/3'], answer: 1, explain: '2x + 3 = 0 → x = −3/2' },
    { topic: 'basics', q: 'The zero of the polynomial 5x is…', options: ['5', '−5', '0', '1/5'], answer: 2, explain: '5x = 0 → x = 0' },
    { topic: 'basics', q: 'If p(x) = 2x² + x − 6, then p(−2) is…', options: ['0', '4', '−12', '8'], answer: 0, explain: '2(4) − 2 − 6 = 0' },
    { topic: 'graph', q: 'The zeroes of p(x) are the x-coordinates of the points where the graph of y = p(x)…', options: ['Meets the y-axis', 'Meets the x-axis', 'Is highest', 'Turns'], answer: 1, explain: 'At those points y = p(x) = 0.' },
    { topic: 'graph', q: 'The graph of y = p(x) meets the x-axis at 3 points. The number of zeroes of p(x) is…', options: ['1', '2', '3', '0'], answer: 2, explain: 'One zero for each point where it meets the x-axis.' },
    { topic: 'graph', q: 'The graph of y = p(x) does not meet the x-axis at all. The number of zeroes is…', options: ['0', '1', '2', 'Cannot say'], answer: 0, explain: 'No point on the x-axis means no zero.' },
    { topic: 'graph', q: 'The graph of a quadratic polynomial is called a…', options: ['Straight line', 'Circle', 'Parabola', 'Hyperbola'], answer: 2, explain: 'Every quadratic gives a ∪ or ∩ shaped parabola.' },
    { topic: 'graph', q: 'The parabola y = ax² + bx + c opens downward when…', options: ['a > 0', 'a < 0', 'b < 0', 'c < 0'], answer: 1, explain: 'a > 0: opens up (∪). a < 0: opens down (∩).' },
    { topic: 'graph', q: 'A quadratic polynomial can have at most…', options: ['1 zero', '2 zeroes', '3 zeroes', 'Any number of zeroes'], answer: 1, explain: 'Degree 2 → at most 2 zeroes.' },
    { topic: 'graph', q: 'A cubic polynomial can have at most…', options: ['1 zero', '2 zeroes', '3 zeroes', '4 zeroes'], answer: 2, explain: 'Degree 3 → at most 3 zeroes.' },
    { topic: 'graph', q: 'The graph of a linear polynomial ax + b (a ≠ 0) meets the x-axis at…', options: ['No point', 'Exactly one point', 'Two points', 'Many points'], answer: 1, explain: 'It is a slanting straight line, so it crosses the x-axis once at (−b/a, 0).' },
    { topic: 'graph', q: 'A parabola touches the x-axis at just one point. The quadratic has…', options: ['0 zeroes', '1 zero (two equal zeroes)', '2 different zeroes', '3 zeroes'], answer: 1, explain: 'e.g. x² − 4x + 4 = (x − 2)² touches the x-axis at x = 2.' },
    { topic: 'zeros', q: 'The zeroes of x² + 7x + 10 are…', options: ['2 and 5', '−2 and −5', '2 and −5', '−2 and 5'], answer: 1, explain: '(x + 2)(x + 5)' },
    { topic: 'zeros', q: 'The zeroes of x² − 2x − 8 are…', options: ['4 and −2', '−4 and 2', '8 and −1', '4 and 2'], answer: 0, explain: '(x − 4)(x + 2)' },
    { topic: 'zeros', q: 'The zeroes of 4u² + 8u are…', options: ['0 and 2', '0 and −2', '4 and 8', '−2 and 2'], answer: 1, explain: '4u(u + 2)' },
    { topic: 'zeros', q: 'The zeroes of t² − 15 are…', options: ['15 and −15', '√15 and −√15', '0 and 15', '√15 only'], answer: 1, explain: 't² = 15 → t = ±√15' },
    { topic: 'zeros', q: 'The zeroes of 6x² − 7x − 3 are…', options: ['3/2 and −1/3', '−3/2 and 1/3', '3 and −1', '1/2 and −3'], answer: 0, explain: '(2x − 3)(3x + 1)' },
    { topic: 'zeros', q: 'The zeroes of 4s² − 4s + 1 are…', options: ['1 and 1', '1/2 and 1/2', '−1/2 and 1/2', '2 and 2'], answer: 1, explain: '(2s − 1)², so both zeroes are 1/2.' },
    { topic: 'zeros', q: 'To factorise 3x² − x − 4 by splitting the middle term, you need two numbers that multiply to ___ and add to −1.', options: ['−4', '−12', '12', '3'], answer: 1, explain: 'a × c = 3 × (−4) = −12. The numbers are −4 and 3.' },
    { topic: 'zeros', q: 'If 2 is a zero of x² + kx − 6, then k is…', options: ['1', '−1', '2', '5'], answer: 0, explain: '4 + 2k − 6 = 0 → k = 1' },
    { topic: 'rel', q: 'For ax² + bx + c, the sum of zeroes is…', options: ['b/a', '−b/a', 'c/a', '−c/a'], answer: 1, explain: 'α + β = −b/a' },
    { topic: 'rel', q: 'For ax² + bx + c, the product of zeroes is…', options: ['−b/a', 'b/a', 'c/a', '−c/a'], answer: 2, explain: 'αβ = c/a' },
    { topic: 'rel', q: 'The sum of the zeroes of 2x² − 8x + 6 is…', options: ['−4', '4', '3', '8'], answer: 1, explain: '−(−8)/2 = 4' },
    { topic: 'rel', q: 'The product of the zeroes of 2x² − 8x + 6 is…', options: ['3', '−3', '6', '4'], answer: 0, explain: '6/2 = 3' },
    { topic: 'rel', q: 'The sum and product of the zeroes of x² + 3x − 10 are…', options: ['3 and −10', '−3 and −10', '−3 and 10', '3 and 10'], answer: 1, explain: 'Sum = −3/1, product = −10/1' },
    { topic: 'rel', q: 'If the zeroes of a quadratic are equal in size and opposite in sign, then…', options: ['a = 0', 'b = 0', 'c = 0', 'a = c'], answer: 1, explain: 'Sum = 0 = −b/a, so b = 0.' },
    { topic: 'rel', q: 'If one zero of ax² + bx + c is the reciprocal of the other, then…', options: ['a = b', 'b = c', 'a = c', 'a = −c'], answer: 2, explain: 'Product = α × 1/α = 1 = c/a' },
    { topic: 'rel', q: 'If the sum of the zeroes of kx² + 3x + 4 is 1, then k is…', options: ['3', '−3', '1/3', '−1/3'], answer: 1, explain: '−3/k = 1 → k = −3' },
    { topic: 'rel', q: 'If α and β are the zeroes of x² + px + q, then α + β and αβ are…', options: ['p and q', '−p and q', 'p and −q', '−p and −q'], answer: 1, explain: 'a = 1, so sum = −p and product = q.' },
    { topic: 'rel', q: 'For the cubic ax³ + bx² + cx + d, the product of the zeroes αβγ is…', options: ['d/a', '−d/a', 'c/a', '−b/a'], answer: 1, explain: 'αβγ = −d/a' },
    { topic: 'form', q: 'A quadratic polynomial with sum of zeroes 4 and product 1 is…', options: ['x² + 4x + 1', 'x² − 4x + 1', 'x² − x + 4', 'x² + x − 4'], answer: 1, explain: 'x² − (sum)x + product' },
    { topic: 'form', q: 'A quadratic polynomial with sum of zeroes 1/4 and product −1 is…', options: ['4x² − x − 4', '4x² + x − 4', 'x² − 4x − 1', '4x² − x + 4'], answer: 0, explain: 'x² − x/4 − 1, multiplied by 4.' },
    { topic: 'form', q: 'A quadratic polynomial with sum of zeroes 0 and product √5 is…', options: ['x² − √5', 'x² + √5', 'x² + √5x', '√5x²'], answer: 1, explain: 'x² − 0·x + √5' },
    { topic: 'form', q: 'A quadratic polynomial whose zeroes are 3 and −5 is…', options: ['x² − 2x − 15', 'x² + 2x − 15', 'x² + 2x + 15', 'x² − 8x + 15'], answer: 1, explain: 'Sum −2, product −15 → x² + 2x − 15' },
    { topic: 'form', q: 'A quadratic polynomial whose zeroes are 0 and −2 is…', options: ['x² − 2x', 'x² + 2x', 'x² + 2', 'x² − 2'], answer: 1, explain: 'Sum −2, product 0 → x² + 2x' },
    { topic: 'form', q: 'The general form of a quadratic with sum S and product P is…', options: ['k(x² + Sx + P)', 'k(x² − Sx + P)', 'k(x² − Px + S)', 'k(Sx² + Px)'], answer: 1, explain: 'k is any non-zero real number.' },
    { topic: 'expr', q: 'α² + β² is equal to…', options: ['(α + β)² + 2αβ', '(α + β)² − 2αβ', '(α − β)²', '(α + β)² − 4αβ'], answer: 1, explain: '(α + β)² = α² + β² + 2αβ' },
    { topic: 'expr', q: '1/α + 1/β is equal to…', options: ['αβ / (α + β)', '(α + β) / αβ', 'α + β', '1/(α + β)'], answer: 1, explain: 'Take the LCM: (β + α)/αβ' },
    { topic: 'expr', q: 'If α, β are the zeroes of x² − 5x + 6, then α² + β² is…', options: ['13', '25', '37', '1'], answer: 0, explain: '5² − 2 × 6 = 13' },
    { topic: 'expr', q: 'If α, β are the zeroes of x² + 7x + 12, then 1/α + 1/β is…', options: ['7/12', '−7/12', '12/7', '−12/7'], answer: 1, explain: '(α + β)/αβ = −7/12' },
    { topic: 'expr', q: 'If α, β are the zeroes of x² − 6x + 8, then (α − β)² is…', options: ['4', '2', '36', '−4'], answer: 0, explain: '6² − 4 × 8 = 4 (the zeroes are 4 and 2)' }
  ],

  // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
  practice: [
    { topic: 'basics', gen(mk) {
      const d = mk.ri(1, 3);
      const terms = [];
      for (let p = d; p >= 0; p--) {
        const c = p === d ? mk.pick([-7, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7]) : mk.ri(-9, 9);
        if (c) terms.push([c, p]);
      }
      if (Math.random() < 0.6) terms.reverse();
      const names = ['Linear', 'Quadratic', 'Cubic'];
      return {
        q: `What type of polynomial is ${mk.poly(terms)}?`,
        choices: ['Linear (degree 1)', 'Quadratic (degree 2)', 'Cubic (degree 3)'],
        answer: d - 1,
        steps: `The highest power of x is ${d}, so the degree is ${d}.\nIt is a ${names[d - 1].toLowerCase()} polynomial. (The order of the terms does not matter.)`
      };
    } },
    { topic: 'basics', gen(mk) {
      const a = mk.pick([-3, -2, -1, 1, 2, 3]), b = mk.ri(-9, 9), c = mk.ri(-9, 9), k = mk.pick([-3, -2, -1, 1, 2, 3]);
      const t1 = a * k * k, t2 = b * k, v = t1 + t2 + c;
      const kk = k < 0 ? `(${mk.num(k)})` : String(k);
      return {
        q: `If p(x) = ${mk.poly([a, b, c])}, find p(${mk.num(k)}).`,
        fields: [{ label: `p(${mk.num(k)}) =`, answer: v, signed: true }],
        hint: `Put x = ${mk.num(k)} everywhere. Careful with the signs: ${kk}² is ${k * k}.`,
        steps: `Put x = ${mk.num(k)}:\n${a === 1 ? '' : a === -1 ? '−' : mk.num(a) + ' × '}${kk}² = ${mk.num(t1)}` +
          (b ? `\n${mk.num(b)} × ${kk} = ${mk.num(t2)}` : '') + (c ? `\nconstant = ${mk.num(c)}` : '') +
          `\np(${mk.num(k)}) = ${[t1, t2, c].filter(Boolean).map(mk.num).join(' + ').replace(/\+ −/g, '− ') || 0} = ${mk.num(v)}`
      };
    } },
    { topic: 'zeros', gen(mk) {
      // (x − r)(qx − p): zeroes r and p/q.
      let r, p, q;
      do {
        r = mk.ri(-6, 6); q = mk.pick([1, 1, 2, 3]); p = mk.ri(-9, 9);
      } while (mk.gcd(p, q) !== 1 || p === r * q || (r === 0 && p === 0));
      const a = q, b = -(p + q * r), c = p * r;
      const P = mk.poly([a, b, c]);
      const z2 = p / q, zs = [r, z2];
      const shownZ = `${mk.num(r)}, ${mk.frac(p, q)}`;
      let steps;
      if (c === 0) steps = `No constant term, so take x out:\n${P} = ${r === 0 ? `x(${mk.poly([q, -p])})` : `${q === 1 ? '' : q}x(${mk.poly([1, -r])})`}`;
      else steps = `a × c = ${mk.num(a)} × ${mk.num(c)} = ${mk.num(a * c)}\nTwo numbers that multiply to ${mk.num(a * c)} and add to ${mk.num(b)}: ${mk.num(-p)} and ${mk.num(-q * r)}\n` +
        `${P} = ${mk.poly([[a, 2], [-p, 1], [-q * r, 1], [c, 0]])}\n= (${mk.poly([1, -r])})(${mk.poly([q, -p])})`;
      return {
        q: `Find the zeroes of ${P}.`,
        fields: [{ label: 'Zeroes (separate with a comma)', kind: 'list', answer: zs, show: shownZ }],
        hint: c === 0 ? 'There is no constant term. Take the common factor out first.' : `Find two numbers that multiply to a × c = ${mk.num(a * c)} and add to b = ${mk.num(b)}.`,
        steps: steps + `\nPut each factor = 0. Zeroes: ${shownZ}`
      };
    } },
    { topic: 'rel', gen(mk) {
      let a, b, c;
      do { a = mk.pick([1, 2, 3, 4, 5, 6, -1, -2, -3]); b = mk.ri(-12, 12); c = mk.ri(-12, 12); } while (!b || !c);
      const P = mk.poly([a, b, c]), A = a < 0 ? `(${mk.num(a)})` : a;
      return {
        q: `Find the sum and the product of the zeroes of ${P}.`,
        fields: [{ label: 'Sum of zeroes', answer: -b / a, show: mk.frac(-b, a), signed: true },
          { label: 'Product of zeroes', answer: c / a, show: mk.frac(c, a), signed: true }],
        hint: 'Sum = −b/a and product = c/a. Write a fraction like −3/2.',
        steps: `a = ${mk.num(a)}, b = ${mk.num(b)}, c = ${mk.num(c)}\nSum = −b/a = −(${mk.num(b)})/${A} = ${mk.frac(-b, a)}\nProduct = c/a = ${mk.num(c)}/${A} = ${mk.frac(c, a)}`
      };
    } },
    { topic: 'form', gen(mk) {
      let d, s, p;
      const byZeroes = Math.random() < 0.5;
      let r1, r2;
      if (byZeroes) {
        do { r1 = mk.ri(-7, 7); r2 = mk.ri(-7, 7); } while (r1 === r2 || r1 === -r2);
        d = 1; s = r1 + r2; p = r1 * r2;
      } else {
        d = mk.pick([1, 2, 3, 4, 5]);
        do { s = mk.ri(-9, 9); p = mk.ri(-9, 9); } while (!s || !p || s === p || (d > 1 && mk.gcd(mk.gcd(s, p), d) !== 1));
      }
      // Polynomial d·x² − s·x + p  (sum s/d, product p/d)
      const right = mk.poly([d, -s, p]);
      const wrong = [mk.poly([d, s, p]), mk.poly([d, -s, -p]), mk.poly([d, -p, s]), mk.poly([d, s, -p])];
      const opts = [right, ...[...new Set(wrong)].filter(w => w !== right).slice(0, 3)];
      const order = opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);
      const S = mk.frac(s, d), Pr = mk.frac(p, d);
      return {
        q: byZeroes ? `Which quadratic polynomial has zeroes ${mk.num(r1)} and ${mk.num(r2)}?` : `Which quadratic polynomial has sum of zeroes ${S} and product of zeroes ${Pr}?`,
        choices: order.map(o => o.t),
        answer: order.findIndex(o => o.k === 0),
        steps: (byZeroes ? `Sum = ${mk.num(r1)} + ${mk.num(r2)} = ${mk.num(s)}\nProduct = ${mk.num(r1)} × ${mk.num(r2)} = ${mk.num(p)}\n` : '') +
          `Quadratic = x² − (sum)x + (product)\n= x² − (${S})x + (${Pr})` + (d > 1 ? `\nMultiply by ${d} to clear the fractions: ${right}` : `\n= ${right}`)
      };
    } },
    { topic: 'expr', gen(mk) {
      let r1, r2;
      do { r1 = mk.ri(-6, 6); r2 = mk.ri(-6, 6); } while (!r1 || !r2 || r1 === r2);
      const s = r1 + r2, p = r1 * r2;
      const P = mk.poly([1, -s, p]);
      const pre = `α + β = −b/a = ${mk.num(s)}\nαβ = c/a = ${mk.num(p)}\n`;
      const kind = mk.pick(['sq', 'recip', 'ab', 'diff']);
      const t = {
        sq: { ask: 'α² + β²', v: s * s - 2 * p, show: mk.num(s * s - 2 * p), hint: 'α² + β² = (α + β)² − 2αβ', work: `α² + β² = (α + β)² − 2αβ = (${mk.num(s)})² − 2(${mk.num(p)}) = ${mk.num(s * s - 2 * p)}` },
        recip: { ask: '1/α + 1/β', v: s / p, show: mk.frac(s, p), hint: '1/α + 1/β = (α + β)/αβ', work: `1/α + 1/β = (α + β)/αβ = ${mk.num(s)}/${mk.num(p)} = ${mk.frac(s, p)}` },
        ab: { ask: 'α²β + αβ²', v: s * p, show: mk.num(s * p), hint: 'α²β + αβ² = αβ(α + β)', work: `α²β + αβ² = αβ(α + β) = ${mk.num(p)} × ${mk.num(s)} = ${mk.num(s * p)}` },
        diff: { ask: '(α − β)²', v: s * s - 4 * p, show: mk.num(s * s - 4 * p), hint: '(α − β)² = (α + β)² − 4αβ', work: `(α − β)² = (α + β)² − 4αβ = (${mk.num(s)})² − 4(${mk.num(p)}) = ${mk.num(s * s - 4 * p)}` }
      }[kind];
      return {
        q: `If α and β are the zeroes of ${P}, find the value of ${t.ask}.`,
        fields: [{ label: t.ask + ' =', answer: t.v, show: t.show, signed: true }],
        hint: `First find α + β and αβ from the coefficients. Then use ${t.hint}.`,
        steps: pre + t.work
      };
    } },
    { topic: 'rel', gen(mk) {
      let r, s;
      do { r = mk.ri(-6, 6); s = mk.ri(-6, 6); } while (!r || !s || r === s);
      const rk = r === 1 ? 'k' : r === -1 ? '−k' : mk.num(r) + 'k';
      if (Math.random() < 0.5) {
        const c = r * s, k = -(r + s);
        return {
          q: `If ${mk.num(r)} is a zero of x² + kx ${c < 0 ? '−' : '+'} ${Math.abs(c)}, find k.`,
          fields: [{ label: 'k =', answer: k, signed: true }],
          hint: `A zero makes the polynomial equal to 0. Put x = ${mk.num(r)} and solve for k.`,
          steps: `p(${mk.num(r)}) = 0\n${r * r} ${r < 0 ? '−' : '+'} ${rk.replace('−', '')} ${c < 0 ? '−' : '+'} ${Math.abs(c)} = 0\n${rk} = ${mk.num(-(r * r + c))}\nk = ${mk.num(k)}`
        };
      }
      const b = -(r + s), k = r * s;
      return {
        q: `If ${mk.num(r)} is a zero of ${mk.poly([[1, 2], [b, 1]])} + k, find k.`,
        fields: [{ label: 'k =', answer: k, signed: true }],
        hint: `Put x = ${mk.num(r)}. The polynomial must equal 0.`,
        steps: `p(${mk.num(r)}) = 0\n${r * r}${b ? ` ${b * r < 0 ? '−' : '+'} ${Math.abs(b * r)}` : ''} + k = 0\nk = ${mk.num(k)}`
      };
    } },
    { topic: 'graph', gen(mk) {
      const n = mk.ri(0, 3);
      const roots = () => {
        for (;;) {
          const rs = [mk.ri(-3, 3), mk.ri(-3, 3), mk.ri(-3, 3)].sort((x, y) => x - y);
          if (rs[1] - rs[0] >= 2 && rs[2] - rs[1] >= 2) return rs;
          if (rs[2] - rs[0] >= 2 && n < 3) return [rs[0], rs[2], rs[2]];
        }
      };
      const [r1, r2, r3] = roots();
      const sg = mk.pick([1, -1]);
      const shapes = {
        0: [[x => sg * ((x - r1) * (x - r1) / 2 + 2), 'The parabola stays on one side of the x-axis']],
        1: [[x => sg * (x - r1) * (x - r1), 'The parabola just touches the x-axis at one point'],
            [x => sg * (x - r1) * 1.2, 'A straight line cuts the x-axis once'],
            [x => sg * (x - r1) * ((x - r1) * (x - r1) + 2), 'The curve cuts the x-axis only once']],
        2: [[x => sg * (x - r1) * (x - r2), 'The parabola cuts the x-axis at two points'],
            [x => sg * (x - r1) * (x - r1) * (x - r2), 'The curve touches the x-axis at one point and cuts it at another']],
        3: [[x => sg * (x - r1) * (x - r2) * (x - r3), 'The curve cuts the x-axis at three points']]
      };
      const [f, why] = mk.pick(shapes[n]);
      const used = n === 3 ? [r1, r2, r3] : n === 2 ? [r1, r2] : [r1];
      return {
        q: 'Here is the graph of y = p(x). How many zeroes does p(x) have?',
        svg: mk.graph(f, Math.min(...used) - (n >= 2 ? 0.6 : 1.5), Math.max(...used) + (n >= 2 ? 0.6 : 1.5)),
        choices: ['0', '1', '2', '3'],
        answer: n,
        steps: `${why}, so p(x) has ${n} zero${n === 1 ? '' : 'es'}.\nCount the different points where the graph meets the x-axis (cutting or touching).`
      };
    } }
  ],

  match: [
    { title: 'Type of Polynomial', pairs: [
      ['3x − 7', 'Linear'],
      ['2x² + 5x − 1', 'Quadratic'],
      ['x³ − 4x', 'Cubic'],
      ['9', 'Constant (degree 0)'],
      ['5 − x² + x⁴', 'Degree 4'],
      ['x + 1/x', 'Not a polynomial']
    ] },
    { title: 'Polynomial → Zeroes', pairs: [
      ['x² + 7x + 10', '−2, −5'],
      ['x² − 2x − 8', '4, −2'],
      ['4u² + 8u', '0, −2'],
      ['t² − 15', '√15, −√15'],
      ['6x² − 7x − 3', '3/2, −1/3'],
      ['4s² − 4s + 1', '1/2, 1/2']
    ] },
    { title: 'Sum & Product → Quadratic', pairs: [
      ['Sum 4, product 1', 'x² − 4x + 1'],
      ['Sum 1/4, product −1', '4x² − x − 4'],
      ['Sum 0, product √5', 'x² + √5'],
      ['Sum 1, product 1', 'x² − x + 1'],
      ['Sum −1/4, product 1/4', '4x² + x + 1'],
      ['Zeroes 3 and −5', 'x² + 2x − 15']
    ] },
    { title: 'Formulas', pairs: [
      ['α + β', '−b/a'],
      ['αβ', 'c/a'],
      ['α² + β²', '(α + β)² − 2αβ'],
      ['1/α + 1/β', '(α + β)/αβ'],
      ['(α − β)²', '(α + β)² − 4αβ'],
      ['Zero of ax + b', 'x = −b/a']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Find the zero of the polynomial 3x + 5.',
      keypoints: [
        { text: 'x = −5/3', kw: ['5/3'] }
      ],
      model: '3x + 5 = 0\n3x = −5\nx = −5/3' },
    { marks: 1, q: 'Find a quadratic polynomial whose sum and product of zeroes are 4 and 1.',
      keypoints: [
        { text: 'x² − 4x + 1', kw: ['4x', '+ 1|+1'] }
      ],
      model: 'Quadratic = x² − (sum)x + product\n= x² − 4x + 1' },
    { marks: 1, q: 'If one zero of x² − 3x + k is 1, find k.',
      keypoints: [
        { text: '1 − 3 + k = 0, so k = 2', kw: ['2'] }
      ],
      model: 'p(1) = 0\n1 − 3 + k = 0\nk = 2' },
    { marks: 2, q: 'Find the zeroes of x² − 2x − 8 and verify the relationship between the zeroes and the coefficients.',
      keypoints: [
        { text: '(x − 4)(x + 2), zeroes 4 and −2', kw: ['4', '2'] },
        { text: 'Sum = 2 = −b/a', kw: ['sum'] },
        { text: 'Product = −8 = c/a', kw: ['product', '8'] }
      ],
      model: 'x² − 2x − 8 = x² − 4x + 2x − 8 = x(x − 4) + 2(x − 4) = (x − 4)(x + 2)\nZeroes: 4 and −2\nSum of zeroes = 4 + (−2) = 2, and −b/a = −(−2)/1 = 2 ✓\nProduct of zeroes = 4 × (−2) = −8, and c/a = −8/1 = −8 ✓' },
    { marks: 2, q: 'Find the zeroes of 4u² + 8u and verify the relationship between the zeroes and the coefficients.',
      keypoints: [
        { text: '4u(u + 2), zeroes 0 and −2', kw: ['0', '2'] },
        { text: 'Sum = −2 = −b/a = −8/4', kw: ['sum'] },
        { text: 'Product = 0 = c/a = 0/4', kw: ['product'] }
      ],
      model: '4u² + 8u = 4u(u + 2)\nZeroes: 0 and −2\nHere a = 4, b = 8, c = 0\nSum = 0 + (−2) = −2, and −b/a = −8/4 = −2 ✓\nProduct = 0 × (−2) = 0, and c/a = 0/4 = 0 ✓' },
    { marks: 2, q: 'Find the zeroes of t² − 15 and verify the relationship between the zeroes and the coefficients.',
      keypoints: [
        { text: 'Zeroes √15 and −√15', kw: ['√15|root 15|sqrt'] },
        { text: 'Sum = 0 = −b/a (b = 0)', kw: ['sum', '0'] },
        { text: 'Product = −15 = c/a', kw: ['product', '15'] }
      ],
      model: 't² − 15 = (t − √15)(t + √15)\nZeroes: √15 and −√15\nHere a = 1, b = 0, c = −15\nSum = √15 + (−√15) = 0, and −b/a = 0 ✓\nProduct = √15 × (−√15) = −15, and c/a = −15 ✓' },
    { marks: 2, q: 'Find a quadratic polynomial whose sum and product of zeroes are 1/4 and −1.',
      keypoints: [
        { text: 'x² − (1/4)x − 1', kw: ['1/4'] },
        { text: 'Multiply by 4: 4x² − x − 4', kw: ['4x²|4x^2|4x2'] }
      ],
      model: 'Quadratic = k[x² − (sum)x + product]\n= k[x² − (1/4)x − 1]\nTake k = 4: 4x² − x − 4' },
    { marks: 2, q: 'Find a quadratic polynomial whose sum and product of zeroes are √2 and 1/3.',
      keypoints: [
        { text: 'x² − √2x + 1/3', kw: ['1/3'] },
        { text: 'Multiply by 3: 3x² − 3√2x + 1', kw: ['3x²|3x^2|3x2', '3√2|3 √2|3root2'] }
      ],
      model: 'Quadratic = k[x² − (sum)x + product]\n= k[x² − √2x + 1/3]\nTake k = 3: 3x² − 3√2x + 1' },
    { marks: 2, q: 'If α and β are the zeroes of x² − 5x + 6, find the value of α² + β².',
      keypoints: [
        { text: 'α + β = 5 and αβ = 6', kw: ['5', '6'] },
        { text: 'α² + β² = (α + β)² − 2αβ = 25 − 12 = 13', kw: ['13'] }
      ],
      model: 'α + β = −b/a = 5\nαβ = c/a = 6\nα² + β² = (α + β)² − 2αβ = 25 − 12 = 13' },
    { marks: 2, q: 'If the sum of the zeroes of kx² + 2x + 3k is equal to their product, find k.',
      keypoints: [
        { text: 'Sum = −2/k, product = 3k/k = 3', kw: ['−2/k|-2/k', '3'] },
        { text: '−2/k = 3, so k = −2/3', kw: ['2/3'] }
      ],
      model: 'Sum of zeroes = −b/a = −2/k\nProduct of zeroes = c/a = 3k/k = 3\nGiven: −2/k = 3\nSo k = −2/3' },
    { marks: 3, q: 'Find the zeroes of 6x² − 3 − 7x and verify the relationship between the zeroes and the coefficients.',
      keypoints: [
        { text: 'Write as 6x² − 7x − 3 = (2x − 3)(3x + 1)', kw: ['2x − 3|2x-3|2x - 3', '3x + 1|3x+1'] },
        { text: 'Zeroes 3/2 and −1/3', kw: ['3/2', '1/3'] },
        { text: 'Sum = 7/6 = −b/a', kw: ['7/6'] },
        { text: 'Product = −1/2 = c/a = −3/6', kw: ['1/2|3/6'] }
      ],
      model: '6x² − 7x − 3 = 6x² − 9x + 2x − 3 = 3x(2x − 3) + 1(2x − 3) = (2x − 3)(3x + 1)\nZeroes: 3/2 and −1/3\nHere a = 6, b = −7, c = −3\nSum = 3/2 − 1/3 = 7/6, and −b/a = 7/6 ✓\nProduct = (3/2)(−1/3) = −1/2, and c/a = −3/6 = −1/2 ✓' },
    { marks: 3, q: 'Find the zeroes of 3x² − x − 4 and verify the relationship between the zeroes and the coefficients.',
      keypoints: [
        { text: '3x² − 4x + 3x − 4 = (x + 1)(3x − 4)', kw: ['x + 1|x+1', '3x − 4|3x-4|3x - 4'] },
        { text: 'Zeroes −1 and 4/3', kw: ['4/3'] },
        { text: 'Sum = 1/3 = −b/a', kw: ['1/3'] },
        { text: 'Product = −4/3 = c/a', kw: ['product'] }
      ],
      model: '3x² − x − 4 = 3x² − 4x + 3x − 4 = x(3x − 4) + 1(3x − 4) = (x + 1)(3x − 4)\nZeroes: −1 and 4/3\nHere a = 3, b = −1, c = −4\nSum = −1 + 4/3 = 1/3, and −b/a = 1/3 ✓\nProduct = (−1)(4/3) = −4/3, and c/a = −4/3 ✓' },
    { marks: 3, q: 'If α and β are the zeroes of x² + 7x + 12, find the value of 1/α + 1/β − 2αβ.',
      keypoints: [
        { text: 'α + β = −7, αβ = 12', kw: ['−7|-7', '12'] },
        { text: '1/α + 1/β = (α + β)/αβ = −7/12', kw: ['7/12'] },
        { text: 'Answer = −7/12 − 24 = −295/12', kw: ['295'] }
      ],
      model: 'α + β = −b/a = −7\nαβ = c/a = 12\n1/α + 1/β = (α + β)/αβ = −7/12\n1/α + 1/β − 2αβ = −7/12 − 24 = (−7 − 288)/12 = −295/12' },
    { marks: 3, q: 'Find a quadratic polynomial whose zeroes are 3 + √2 and 3 − √2.',
      keypoints: [
        { text: 'Sum = 6', kw: ['6'] },
        { text: 'Product = 9 − 2 = 7', kw: ['7'] },
        { text: 'x² − 6x + 7', kw: ['6x', '+ 7|+7'] }
      ],
      model: 'Sum = (3 + √2) + (3 − √2) = 6\nProduct = (3 + √2)(3 − √2) = 9 − 2 = 7\nQuadratic = x² − (sum)x + product = x² − 6x + 7' }
  ]
});
