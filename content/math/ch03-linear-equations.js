// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 3: Pair of Linear Equations in Two Variables
// Not in the rationalised syllabus: cross-multiplication method, equations reducible to a pair of linear equations.
// Note: the app turns a digit after a letter into a subscript, so a1/a2 shows as a₁/a₂ (wanted here).
(function () {
  // A small non-zero whole number from -n to n.
  const nz = (mk, n) => { let v; do v = mk.ri(-n, n); while (!v); return v; };
  // 3, 'y' -> "3y";  -1, 'x' -> "−x"
  const term = (mk, k, v) => k === 1 ? v : k === -1 ? '−' + v : mk.num(k) + v;

  // Worked elimination for (1) a1x + b1y = c1 and (2) a2x + b2y = c2.
  // Removes whichever variable needs the smaller multipliers.
  function elimSteps(mk, e1, e2) {
    const [a1, b1, c1] = e1, [a2, b2, c2] = e2;
    const elimY = mk.lcm(Math.abs(b1), Math.abs(b2)) <= mk.lcm(Math.abs(a1), Math.abs(a2));
    const p1 = elimY ? b1 : a1, p2 = elimY ? b2 : a2;
    const L = mk.lcm(Math.abs(p1), Math.abs(p2)), m1 = L / Math.abs(p1), m2 = L / Math.abs(p2);
    const A = e1.map(v => v * m1), B = e2.map(v => v * m2);
    const same = (p1 > 0) === (p2 > 0);
    const R = A.map((v, i) => same ? v - B[i] : v + B[i]);
    const gone = elimY ? 'y' : 'x', kept = elimY ? 'x' : 'y';
    const k = elimY ? R[0] : R[1], val = R[2] / k;
    let out = `(1) ${mk.lin(...e1)}\n(2) ${mk.lin(...e2)}\n`;
    if (m1 !== 1 || m2 !== 1) {
      out += `To remove ${gone}, make its coefficients the same size:\n`;
      if (m1 !== 1) out += `(1) × ${m1}: ${mk.lin(...A)}\n`;
      if (m2 !== 1) out += `(2) × ${m2}: ${mk.lin(...B)}\n`;
    }
    out += `${same ? 'Subtract (2) from (1)' : 'Add the equations'} to remove ${gone}:\n${term(mk, k, kept)} = ${mk.num(R[2])}\n${kept} = ${mk.frac(R[2], k)}\n`;
    // Put it back into an equation that still has the other variable.
    const [ea, eb, ec, tag] = (elimY ? b1 : a1) ? [...e1, '(1)'] : [...e2, '(2)'];
    const kc = elimY ? ea : eb, oc = elimY ? eb : ea, rest = ec - kc * val;
    out += `Put ${kept} = ${mk.num(val)} in ${tag}:\n${term(mk, oc, gone)} = ${mk.num(ec)} ${kc * val < 0 ? '+' : '−'} ${Math.abs(kc * val)} = ${mk.num(rest)}`;
    if (oc !== 1) out += `\n${gone} = ${mk.frac(rest, oc)}`;
    return out;
  }

  // Two equations with a whole-number solution (x0, y0).
  function pair(mk, n = 5, r = 5) {
    for (;;) {
      const a1 = nz(mk, n), b1 = nz(mk, n), a2 = nz(mk, n), b2 = nz(mk, n);
      const x0 = mk.ri(-r, r), y0 = mk.ri(-r, r);
      if (a1 * b2 === a2 * b1 || (!x0 && !y0)) continue;
      return { e1: [a1, b1, a1 * x0 + b1 * y0], e2: [a2, b2, a2 * x0 + b2 * y0], x0, y0 };
    }
  }

  // ratio(mk, -6, -2) -> "−6/(−2) = 3"
  const ratio = (mk, n, d) => {
    const raw = `${mk.num(n)}/${d < 0 ? `(${mk.num(d)})` : d}`, f = mk.frac(n, d);
    return raw === f ? raw : `${raw} = ${f}`;
  };

  const KINDS = ['Exactly one solution (the lines cross)', 'No solution (parallel lines)', 'Infinitely many solutions (the same line)'];

  SWG.addChapter('math', {
    id: 'math-ch03',
    number: 3,
    title: 'Pair of Linear Equations in Two Variables',
    icon: '✖️',

    topics: {
      form: 'Forming Equations',
      graph: 'Graphical Method',
      ratio: 'Ratio Test & Consistency',
      sub: 'Substitution Method',
      elim: 'Elimination Method',
      word: 'Word Problems'
    },

    summary: [
      'A pair of linear equations in two variables: a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0. The graph of each one is a straight line.',
      'A solution is a pair of values (x, y) that makes BOTH equations true. On a graph it is the point where the two lines meet.',
      'Lines cross at one point → exactly one (unique) solution. Parallel lines → no solution. Coincident lines (the same line) → infinitely many solutions.',
      'Consistent = has at least one solution. Inconsistent = has no solution. Dependent = infinitely many solutions (a dependent pair is consistent).',
      'Ratio test: a1/a2 ≠ b1/b2 → unique solution. a1/a2 = b1/b2 ≠ c1/c2 → no solution. a1/a2 = b1/b2 = c1/c2 → infinitely many.',
      'Substitution: from one equation write x (or y) in terms of the other variable, then put it into the other equation.',
      'Elimination: multiply the equations so one variable has the same coefficient, then add or subtract to remove it.',
      'If you end with a true statement like 0 = 0, there are infinitely many solutions. If you end with a false one like 0 = 5, there is no solution.',
      'Word problems: say what x and y stand for, write two equations, solve, then check your answer in the words of the question.'
    ],

    flashcards: [
      { topic: 'form', front: 'What is a linear equation in two variables?', back: 'An equation of the form ax + by + c = 0, where a, b, c are real numbers and a and b are not both zero.\ne.g. 2x + 3y = 5' },
      { topic: 'form', front: 'General form of a pair of linear equations in two variables', back: 'a1x + b1y + c1 = 0\na2x + b2y + c2 = 0\n(a1, b1 not both zero; a2, b2 not both zero)' },
      { topic: 'form', front: 'What is a solution of a pair of linear equations?', back: 'A pair of values (x, y) that makes BOTH equations true at the same time.' },
      { topic: 'form', front: 'How many solutions does ONE linear equation in two variables have?', back: 'Infinitely many. Every point on its line is a solution.\ne.g. x + y = 5: (0, 5), (1, 4), (2, 3), (2.5, 2.5) …' },
      { topic: 'form', front: 'How do you check whether (2, 1) is a solution of x + y = 3 and 2x − y = 3?', back: 'Put x = 2, y = 1 in both:\n2 + 1 = 3 ✓\n4 − 1 = 3 ✓\nBoth are true, so (2, 1) is a solution.' },
      { topic: 'form', front: 'Form the pair: 10 students took part in a quiz. The number of girls is 4 more than the number of boys.', back: 'Let girls = x, boys = y.\nx + y = 10\nx − y = 4\n(Answer: 7 girls, 3 boys)' },
      { topic: 'form', front: 'Form the pair: 5 pencils and 7 pens cost ₹50, while 7 pencils and 5 pens cost ₹46.', back: 'Let one pencil = ₹x, one pen = ₹y.\n5x + 7y = 50\n7x + 5y = 46\n(Answer: pencil ₹3, pen ₹5)' },
      { topic: 'form', front: 'Form the pair: Seven years ago Aftab was seven times as old as his daughter. Three years from now he will be three times as old as her.', back: 'Let Aftab = x years, daughter = y years.\nx − 7 = 7(y − 7) → x − 7y + 42 = 0\nx + 3 = 3(y + 3) → x − 3y − 6 = 0\n(Answer: 42 and 12)' },

      { topic: 'graph', front: 'What does the graph of a linear equation in two variables look like?', back: 'A straight line.' },
      { topic: 'graph', front: 'Two lines drawn on the same graph can be…', back: '1. Intersecting (cross at one point)\n2. Parallel (never meet)\n3. Coincident (lie on top of each other — the same line)' },
      { topic: 'graph', front: 'Intersecting lines → how many solutions?', back: 'Exactly one (a unique solution): the point where the lines cross.\nThe pair is consistent.' },
      { topic: 'graph', front: 'Parallel lines → how many solutions?', back: 'No solution. The lines never meet.\nThe pair is inconsistent.' },
      { topic: 'graph', front: 'Coincident lines → how many solutions?', back: 'Infinitely many. Every point on the line works for both equations.\nThe pair is dependent (and consistent).' },
      { topic: 'graph', front: 'Consistent, inconsistent and dependent pairs', back: 'Consistent: has at least one solution.\nInconsistent: has no solution.\nDependent: has infinitely many solutions (so it is also consistent).' },
      { topic: 'graph', front: 'How do you draw the graph of 2x + 3y = 12?', back: 'Make a table of 2 or 3 points:\nx = 0 → y = 4 → (0, 4)\ny = 0 → x = 6 → (6, 0)\nx = 3 → y = 2 → (3, 2)\nPlot them and join with a ruler.' },
      { topic: 'graph', front: 'Where does a line meet the x-axis? The y-axis?', back: 'x-axis: put y = 0.\ny-axis: put x = 0.\ne.g. 2x + 3y = 12 meets the x-axis at (6, 0) and the y-axis at (0, 4).' },
      { topic: 'graph', front: 'Solve graphically: x + 3y = 6 and 2x − 3y = 12', back: 'Line 1 points: (0, 2), (6, 0)\nLine 2 points: (0, −4), (6, 0)\nThe lines meet at (6, 0).\nSolution: x = 6, y = 0' },
      { topic: 'graph', front: 'x − y + 1 = 0 and 3x + 2y − 12 = 0: where do the lines meet, and what triangle do they make with the x-axis?', back: 'They meet at (2, 3).\nLine 1 meets the x-axis at (−1, 0); line 2 at (4, 0).\nTriangle: (2, 3), (−1, 0), (4, 0)' },

      { topic: 'ratio', front: 'Ratio test: when does a pair have exactly one solution?', back: 'When a1/a2 ≠ b1/b2\nLines intersect → consistent.' },
      { topic: 'ratio', front: 'Ratio test: when does a pair have no solution?', back: 'When a1/a2 = b1/b2 ≠ c1/c2\nLines are parallel → inconsistent.' },
      { topic: 'ratio', front: 'Ratio test: when does a pair have infinitely many solutions?', back: 'When a1/a2 = b1/b2 = c1/c2\nLines are coincident → dependent (consistent).' },
      { topic: 'ratio', front: 'Does it matter if c is on the right side (ax + by = c)?', back: 'No. Both c1 and c2 change sign, so c1/c2 stays the same. Just keep both equations in the same form.' },
      { topic: 'ratio', front: 'Is 3x + 2y = 5, 2x − 3y = 7 consistent?', back: 'a1/a2 = 3/2, b1/b2 = 2/(−3) = −2/3\n3/2 ≠ −2/3 → unique solution\nConsistent ✓' },
      { topic: 'ratio', front: 'Is 2x − 3y = 8, 4x − 6y = 9 consistent?', back: 'a1/a2 = 2/4 = 1/2\nb1/b2 = −3/−6 = 1/2\nc1/c2 = 8/9\n1/2 = 1/2 ≠ 8/9 → parallel lines, no solution\nInconsistent' },
      { topic: 'ratio', front: 'For what k does x + 2y = 3, 5x + ky = 15 have infinitely many solutions?', back: '1/5 = 2/k = 3/15\n2/k = 1/5 → k = 10' },
      { topic: 'ratio', front: 'For what k does kx + 3y = k − 3, 12x + ky = k have no solution?', back: 'a1/a2 = b1/b2: k/12 = 3/k → k² = 36 → k = ±6\nAlso need b1/b2 ≠ c1/c2: 3/k ≠ (k − 3)/k → k ≠ 6\nSo k = −6' },
      { topic: 'ratio', front: 'For what k does 2x + ky = 5, 3x + 4y = 1 have a unique solution?', back: 'Need a1/a2 ≠ b1/b2\n2/3 ≠ k/4\nk ≠ 8/3' },

      { topic: 'sub', front: 'Steps of the substitution method', back: '1. From one equation, write y in terms of x (or x in terms of y)\n2. Put this into the OTHER equation → one variable left\n3. Solve it\n4. Put the value back to find the other variable\n5. Check in both equations' },
      { topic: 'sub', front: 'Solve by substitution: x + y = 14, x − y = 4', back: 'From (2): x = y + 4\nPut in (1): y + 4 + y = 14\n2y = 10 → y = 5\nx = 5 + 4 = 9' },
      { topic: 'sub', front: 'Solve by substitution: s − t = 3, s/3 + t/2 = 6', back: 'From (1): s = t + 3\nPut in (2): (t + 3)/3 + t/2 = 6\nMultiply by 6: 2t + 6 + 3t = 36\n5t = 30 → t = 6\ns = 6 + 3 = 9' },
      { topic: 'sub', front: 'Solve: 0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3', back: 'Multiply both by 10:\n2x + 3y = 13, 4x + 5y = 23\nFrom (1): x = (13 − 3y)/2\nPut in (2): 2(13 − 3y) + 5y = 23\n26 − y = 23 → y = 3\nx = (13 − 9)/2 = 2' },
      { topic: 'sub', front: 'Solve: √2x + √3y = 0, √3x − √8y = 0', back: 'From (1): x = −√3y/√2\nPut in (2): −(3/√2)y − √8y = 0 → y(−3/√2 − 2√2) = 0\nSo y = 0 and then x = 0.' },
      { topic: 'sub', front: 'While solving you get 0 = 0 (always true). What does it mean?', back: 'The pair has infinitely many solutions (the lines are coincident).\ne.g. 3x − y = 3 and 9x − 3y = 9: y = 3x − 3 → 9x − 9x + 9 = 9 → 9 = 9' },
      { topic: 'sub', front: 'While solving you get 0 = 5 (never true). What does it mean?', back: 'The pair has no solution (the lines are parallel).' },
      { topic: 'sub', front: 'Solve 2x + 3y = 11 and 2x − 4y = −24, then find m if y = mx + 3.', back: 'Subtract: 7y = 35 → y = 5\n2x = 11 − 15 = −4 → x = −2\n5 = m(−2) + 3 → m = −1' },

      { topic: 'elim', front: 'Steps of the elimination method', back: '1. Multiply one or both equations so that one variable has the same coefficient (ignoring sign)\n2. Same signs → subtract. Opposite signs → add.\n3. Solve for the variable that is left\n4. Put it back to find the other one' },
      { topic: 'elim', front: 'Elimination: when do you add and when do you subtract?', back: 'Coefficients with the SAME sign (3y and 3y) → subtract.\nCoefficients with OPPOSITE signs (3y and −3y) → add.' },
      { topic: 'elim', front: 'Solve by elimination: x + y = 5, 2x − 3y = 4', back: '(1) × 3: 3x + 3y = 15\nAdd to (2): 5x = 19 → x = 19/5\ny = 5 − 19/5 = 6/5' },
      { topic: 'elim', front: 'Solve by elimination: 3x + 4y = 10, 2x − 2y = 2', back: '(2) × 2: 4x − 4y = 4\nAdd to (1): 7x = 14 → x = 2\n2(2) − 2y = 2 → y = 1' },
      { topic: 'elim', front: 'Solve by elimination: 3x − 5y − 4 = 0, 9x = 2y + 7', back: 'Write as 3x − 5y = 4 and 9x − 2y = 7\n(1) × 3: 9x − 15y = 12\nSubtract from (2): 13y = −5 → y = −5/13\n3x = 4 + 5(−5/13) = 27/13 → x = 9/13' },
      { topic: 'elim', front: 'Solve: x/2 + 2y/3 = −1, x − y/3 = 3', back: '(1) × 6: 3x + 4y = −6\n(2) × 3: 3x − y = 9\nSubtract: 5y = −15 → y = −3\n3x = 9 + (−3) = 6 → x = 2' },
      { topic: 'elim', front: 'Trick: 99x + 101y = 499, 101x + 99y = 501', back: 'Add: 200x + 200y = 1000 → x + y = 5\nSubtract: −2x + 2y = −2 → x − y = 1\nSo x = 3, y = 2' },

      { topic: 'word', front: 'Steps for a word problem', back: '1. Let the two unknowns be x and y (write what each means, with units)\n2. Turn each sentence into an equation\n3. Solve by substitution or elimination\n4. Check the answer in the question\'s words' },
      { topic: 'word', front: 'Two-digit number: how do you write it with digits x (tens) and y (units)?', back: 'Number = 10x + y\nDigits reversed = 10y + x' },
      { topic: 'word', front: 'Sum of digits of a two-digit number is 9. Nine times the number is twice the number with its digits reversed. Find the number.', back: 'x + y = 9\n9(10x + y) = 2(10y + x) → 88x = 11y → y = 8x\nx + 8x = 9 → x = 1, y = 8\nNumber = 18' },
      { topic: 'word', front: 'A fraction becomes 9/11 if 2 is added to both parts, and 5/6 if 3 is added to both. Find it.', back: 'Let it be x/y.\n11(x + 2) = 9(y + 2) → 11x − 9y = −4\n6(x + 3) = 5(y + 3) → 6x − 5y = −3\nSolving: x = 7, y = 9 → 7/9' },
      { topic: 'word', front: 'Taxi: fixed charge + charge per km. 10 km costs ₹105, 15 km costs ₹155. Find both, and the fare for 25 km.', back: 'Fixed = ₹x, per km = ₹y\nx + 10y = 105, x + 15y = 155\nSubtract: 5y = 50 → y = 10, x = 5\n25 km: 5 + 25 × 10 = ₹255' },
      { topic: 'word', front: 'Five years from now Jacob will be 3 times as old as his son. Five years ago he was 7 times as old. Find their ages.', back: 'x + 5 = 3(y + 5) → x − 3y = 10\nx − 5 = 7(y − 5) → x − 7y = −30\nSubtract: 4y = 40 → y = 10, x = 40\nJacob 40, son 10' },
      { topic: 'word', front: 'Two supplementary angles: the larger is 18° more than the smaller. Find them.', back: 'x + y = 180\nx − y = 18\nAdd: 2x = 198 → x = 99°, y = 81°' },
      { topic: 'word', front: 'In △ABC, ∠C = 3∠B = 2(∠A + ∠B). Find the angles.', back: '3∠B = 2∠A + 2∠B → ∠B = 2∠A\n∠C = 3∠B = 6∠A\n∠A + 2∠A + 6∠A = 180° → ∠A = 20°\n∠B = 40°, ∠C = 120°' },
      { topic: 'word', front: '7 bats and 6 balls cost ₹3800. 3 bats and 5 balls cost ₹1750. Find the cost of each.', back: '7x + 6y = 3800, 3x + 5y = 1750\n(1) × 5 − (2) × 6: 35x − 18x = 19000 − 10500\n17x = 8500 → x = 500\n3(500) + 5y = 1750 → y = 50\nBat ₹500, ball ₹50' },
      { topic: 'word', front: 'Library: fixed charge for the first 3 days + extra per day. Susy paid ₹27 for 7 days, Ram ₹21 for 5 days. Find both.', back: 'Fixed = ₹x, extra per day = ₹y\nx + 4y = 27 (7 − 3 = 4 extra days)\nx + 2y = 21\nSubtract: 2y = 6 → y = 3, x = 15' }
    ],

    quiz: [
      { topic: 'form', q: 'A single linear equation in two variables has…', options: ['Only one solution', 'Exactly two solutions', 'Infinitely many solutions', 'No solution'], answer: 2, explain: 'Every point on its line is a solution.' },
      { topic: 'form', q: 'Which of these is a linear equation in two variables?', options: ['x² + y = 4', '2x + 3y = 7', 'xy = 6', '1/x + y = 2'], answer: 1, explain: 'Both x and y have power 1 and are not multiplied together.' },
      { topic: 'form', q: '(2, 1) is a solution of…', options: ['x + y = 4', '2x − y = 3', 'x − 2y = 1', '3x + y = 5'], answer: 1, explain: '2(2) − 1 = 3 ✓' },
      { topic: 'form', q: 'Is (3, 2) a solution of x + y = 5 and x − y = 1?', options: ['Yes, of both', 'Only of the first', 'Only of the second', 'Of neither'], answer: 0, explain: '3 + 2 = 5 ✓ and 3 − 2 = 1 ✓' },
      { topic: 'form', q: '"2 pencils and 3 erasers cost ₹9." With a pencil costing ₹x and an eraser ₹y, this is…', options: ['2x + 3y = 9', '3x + 2y = 9', '2x − 3y = 9', 'x + y = 9'], answer: 0, explain: '2 pencils = 2x, 3 erasers = 3y.' },
      { topic: 'form', q: '"Half of a number x is 3 more than another number y." This is…', options: ['x/2 = y + 3', 'x/2 + 3 = y', '2x = y + 3', 'x = 2y + 3'], answer: 0, explain: 'Half of x = x/2, and it is 3 MORE than y.' },
      { topic: 'form', q: '"Five years ago the father (x) was 7 times as old as his son (y)." This is…', options: ['x − 5 = 7(y − 5)', 'x − 5 = 7y', 'x + 5 = 7(y + 5)', '7(x − 5) = y − 5'], answer: 0, explain: 'Both ages go back 5 years.' },
      { topic: 'form', q: 'If x = 2, y = 1 is a solution of 2x + 3y = k, then k is…', options: ['5', '6', '7', '8'], answer: 2, explain: '2(2) + 3(1) = 7' },

      { topic: 'graph', q: 'The graph of a linear equation in two variables is a…', options: ['Circle', 'Parabola', 'Straight line', 'Curve'], answer: 2, explain: 'That is why it is called linear.' },
      { topic: 'graph', q: 'If the two lines intersect at one point, the pair has…', options: ['No solution', 'A unique solution', 'Two solutions', 'Infinitely many solutions'], answer: 1, explain: 'The meeting point is the only solution.' },
      { topic: 'graph', q: 'If the two lines are parallel, the pair has…', options: ['No solution', 'A unique solution', 'Two solutions', 'Infinitely many solutions'], answer: 0, explain: 'Parallel lines never meet.' },
      { topic: 'graph', q: 'If the two lines are coincident, the pair has…', options: ['No solution', 'A unique solution', 'Two solutions', 'Infinitely many solutions'], answer: 3, explain: 'Every point of the line is common to both.' },
      { topic: 'graph', q: 'A pair of linear equations with no solution is called…', options: ['Consistent', 'Inconsistent', 'Dependent', 'Unique'], answer: 1, explain: 'Inconsistent = no solution.' },
      { topic: 'graph', q: 'A dependent pair of linear equations is always…', options: ['Inconsistent', 'Consistent', 'Parallel', 'Without a solution'], answer: 1, explain: 'It has infinitely many solutions, so it is consistent.' },
      { topic: 'graph', q: 'The line 2x + 3y = 12 meets the x-axis at…', options: ['(0, 4)', '(6, 0)', '(4, 0)', '(0, 6)'], answer: 1, explain: 'Put y = 0: 2x = 12 → x = 6.' },
      { topic: 'graph', q: 'The line 2x + 3y = 12 meets the y-axis at…', options: ['(4, 0)', '(0, 4)', '(0, 6)', '(6, 0)'], answer: 1, explain: 'Put x = 0: 3y = 12 → y = 4.' },
      { topic: 'graph', q: 'The lines x = 2 and y = 3 meet at…', options: ['(2, 3)', '(3, 2)', '(0, 0)', 'They do not meet'], answer: 0, explain: 'x = 2 is a vertical line, y = 3 is a horizontal line.' },
      { topic: 'graph', q: 'The lines x − y + 1 = 0 and 3x + 2y − 12 = 0 meet at…', options: ['(3, 2)', '(2, 3)', '(−1, 0)', '(4, 0)'], answer: 1, explain: '2 − 3 + 1 = 0 ✓ and 6 + 6 − 12 = 0 ✓' },
      { topic: 'graph', q: 'The graph of y = 0 is…', options: ['The x-axis', 'The y-axis', 'A line through (1, 1)', 'Not a line'], answer: 0, explain: 'All points with y = 0 lie on the x-axis.' },
      { topic: 'graph', q: 'Solved graphically, x + 3y = 6 and 2x − 3y = 12 meet at…', options: ['(0, 2)', '(6, 0)', '(0, −4)', '(3, 1)'], answer: 1, explain: '6 + 0 = 6 ✓ and 12 − 0 = 12 ✓' },

      { topic: 'ratio', q: 'The pair a1x + b1y + c1 = 0, a2x + b2y + c2 = 0 has a unique solution if…', options: ['a1/a2 ≠ b1/b2', 'a1/a2 = b1/b2 ≠ c1/c2', 'a1/a2 = b1/b2 = c1/c2', 'b1/b2 = c1/c2'], answer: 0, explain: 'The lines then cross at one point.' },
      { topic: 'ratio', q: 'The pair has no solution if…', options: ['a1/a2 ≠ b1/b2', 'a1/a2 = b1/b2 ≠ c1/c2', 'a1/a2 = b1/b2 = c1/c2', 'a1/a2 = c1/c2'], answer: 1, explain: 'The lines are parallel.' },
      { topic: 'ratio', q: 'The pair has infinitely many solutions if…', options: ['a1/a2 ≠ b1/b2', 'a1/a2 = b1/b2 ≠ c1/c2', 'a1/a2 = b1/b2 = c1/c2', 'a1/a2 ≠ c1/c2'], answer: 2, explain: 'The lines are coincident.' },
      { topic: 'ratio', q: 'The pair 3x + 2y = 5, 2x − 3y = 7 is…', options: ['Consistent, with a unique solution', 'Inconsistent', 'Dependent', 'Coincident'], answer: 0, explain: '3/2 ≠ 2/(−3)' },
      { topic: 'ratio', q: 'The pair 2x − 3y = 8, 4x − 6y = 9 is…', options: ['Consistent, with a unique solution', 'Inconsistent (parallel lines)', 'Dependent', 'Coincident'], answer: 1, explain: '2/4 = −3/−6 = 1/2 but 8/9 ≠ 1/2' },
      { topic: 'ratio', q: 'The lines 9x + 3y + 12 = 0 and 18x + 6y + 24 = 0 are…', options: ['Intersecting', 'Parallel', 'Coincident', 'Perpendicular'], answer: 2, explain: '9/18 = 3/6 = 12/24 = 1/2' },
      { topic: 'ratio', q: 'The lines x − 2y = 0 and 3x + 4y − 20 = 0 are…', options: ['Intersecting', 'Parallel', 'Coincident', 'The same line'], answer: 0, explain: '1/3 ≠ −2/4' },
      { topic: 'ratio', q: 'The pair x + y = 3, 2x + 2y = 6 has…', options: ['No solution', 'One solution', 'Two solutions', 'Infinitely many solutions'], answer: 3, explain: '1/2 = 1/2 = 3/6: the second equation is just the first × 2.' },
      { topic: 'ratio', q: 'For what k does x + 2y = 3, 5x + ky + 7 = 0 have no solution?', options: ['5', '10', '−10', '15'], answer: 1, explain: '1/5 = 2/k → k = 10, and c1/c2 = −3/7 ≠ 1/5 ✓' },
      { topic: 'ratio', q: 'For what k does 2x + 3y = 7, 4x + 6y = k have infinitely many solutions?', options: ['7', '12', '14', '21'], answer: 2, explain: '2/4 = 3/6 = 7/k → k = 14' },
      { topic: 'ratio', q: 'The pair 2x + ky = 5, 3x + 4y = 1 has a unique solution when…', options: ['k = 8/3', 'k ≠ 8/3', 'k = 3/8', 'k ≠ 3/8'], answer: 1, explain: 'Need 2/3 ≠ k/4, so k ≠ 8/3.' },
      { topic: 'ratio', q: 'For what k does 3x + y = 1, (2k − 1)x + (k − 1)y = 2k + 1 have no solution?', options: ['1', '2', '3', '−2'], answer: 1, explain: '3/(2k − 1) = 1/(k − 1) → 3k − 3 = 2k − 1 → k = 2. Then c1/c2 = 1/5 ≠ 1 ✓' },

      { topic: 'sub', q: 'Solving x + y = 14 and x − y = 4 gives…', options: ['x = 9, y = 5', 'x = 5, y = 9', 'x = 10, y = 4', 'x = 7, y = 7'], answer: 0, explain: 'x = y + 4 → 2y + 4 = 14 → y = 5, x = 9' },
      { topic: 'sub', q: 'From x − 2y = 3, x = …', options: ['2y + 3', '2y − 3', '3 − 2y', 'y + 3/2'], answer: 0, explain: 'Move −2y to the other side: x = 3 + 2y.' },
      { topic: 'sub', q: 'Putting x = y + 2 into 3x + y = 14 gives…', options: ['4y + 6 = 14', '3y + 2 = 14', '4y + 2 = 14', '3y + 6 = 14'], answer: 0, explain: '3(y + 2) + y = 3y + 6 + y = 4y + 6' },
      { topic: 'sub', q: 'While solving a pair you end up with 0 = 0. The pair has…', options: ['No solution', 'A unique solution', 'Infinitely many solutions', 'Two solutions'], answer: 2, explain: 'Always true → the lines are the same.' },
      { topic: 'sub', q: 'While solving a pair you end up with 0 = 5. The pair has…', options: ['No solution', 'A unique solution', 'Infinitely many solutions', 'Two solutions'], answer: 0, explain: 'Never true → the lines are parallel.' },
      { topic: 'sub', q: 'Solving s − t = 3 and s/3 + t/2 = 6 gives…', options: ['s = 6, t = 3', 's = 9, t = 6', 's = 12, t = 9', 's = 3, t = 0'], answer: 1, explain: 's = t + 3 → 2(t + 3) + 3t = 36 → t = 6, s = 9' },
      { topic: 'sub', q: 'If 2x + 3y = 11, 2x − 4y = −24 and y = mx + 3, then m is…', options: ['1', '−1', '2', '−2'], answer: 1, explain: 'x = −2, y = 5 → 5 = −2m + 3 → m = −1' },

      { topic: 'elim', q: 'To remove y from 3x + 4y = 10 and 2x − 2y = 2, multiply the second equation by…', options: ['2', '3', '4', '−1'], answer: 0, explain: '2x − 2y = 2 becomes 4x − 4y = 4. Then add.' },
      { topic: 'elim', q: 'Solving 3x + 4y = 10 and 2x − 2y = 2 gives…', options: ['(1, 2)', '(2, 1)', '(2, −1)', '(−2, 4)'], answer: 1, explain: '7x = 14 → x = 2, then y = 1' },
      { topic: 'elim', q: 'To remove x from 2x + 3y = 8 and 3x + 2y = 7, multiply…', options: ['the first by 3 and the second by 2', 'the first by 2 and the second by 3', 'both by 2', 'both by 3'], answer: 0, explain: 'Both become 6x. Then subtract.' },
      { topic: 'elim', q: 'If x + y = 8 and x − y = 2, then x is…', options: ['3', '4', '5', '6'], answer: 2, explain: 'Add: 2x = 10' },
      { topic: 'elim', q: 'If 99x + 101y = 499 and 101x + 99y = 501, then x + y is…', options: ['5', '1', '10', '3'], answer: 0, explain: 'Add: 200x + 200y = 1000' },
      { topic: 'elim', q: 'If 2x + y = 7 and x + 2y = 8, then x − y is…', options: ['1', '−1', '5', '3'], answer: 1, explain: 'Subtract: x − y = 7 − 8 = −1' },
      { topic: 'elim', q: 'Solving 0.2x + 0.3y = 1.3 and 0.4x + 0.5y = 2.3 gives…', options: ['(3, 2)', '(2, 3)', '(1, 4)', '(5, 1)'], answer: 1, explain: '× 10: 2x + 3y = 13, 4x + 5y = 23 → x = 2, y = 3' },
      { topic: 'elim', q: 'When the coefficients of y are 5y and −5y, you should…', options: ['Add the equations', 'Subtract the equations', 'Multiply them', 'Divide them'], answer: 0, explain: 'Opposite signs → add.' },

      { topic: 'word', q: 'The sum of two numbers is 35 and their difference is 13. The numbers are…', options: ['24 and 11', '22 and 13', '20 and 15', '25 and 10'], answer: 0, explain: '2x = 48 → x = 24, y = 11' },
      { topic: 'word', q: 'The sum of the digits of a two-digit number is 9. Nine times the number is twice the number with its digits reversed. The number is…', options: ['18', '81', '27', '45'], answer: 0, explain: '9 × 18 = 162 = 2 × 81 ✓' },
      { topic: 'word', q: 'A fraction becomes 9/11 if 2 is added to both parts, and 5/6 if 3 is added to both. The fraction is…', options: ['5/7', '7/9', '3/5', '9/11'], answer: 1, explain: '9/11 ✓ and 10/12 = 5/6 ✓' },
      { topic: 'word', q: 'Two supplementary angles differ by 18°. The angles are…', options: ['99° and 81°', '108° and 72°', '90° and 72°', '100° and 80°'], answer: 0, explain: 'x + y = 180, x − y = 18' },
      { topic: 'word', q: 'A taxi charges ₹5 fixed + ₹10 per km. A 25 km ride costs…', options: ['₹250', '₹255', '₹260', '₹305'], answer: 1, explain: '5 + 25 × 10 = 255' },
      { topic: 'word', q: 'In △ABC, ∠C = 3∠B = 2(∠A + ∠B). ∠A is…', options: ['20°', '40°', '60°', '120°'], answer: 0, explain: '∠B = 2∠A, ∠C = 6∠A, 9∠A = 180°' },
      { topic: 'word', q: 'Five years from now Jacob will be 3 times as old as his son; five years ago he was 7 times as old. Jacob is now…', options: ['30', '35', '40', '45'], answer: 2, explain: 'x − 3y = 10, x − 7y = −30 → y = 10, x = 40' },
      { topic: 'word', q: 'A garden\'s length is 4 m more than its width, and half its perimeter is 36 m. Its length and width are…', options: ['20 m and 16 m', '22 m and 14 m', '18 m and 14 m', '24 m and 12 m'], answer: 0, explain: 'l + w = 36, l − w = 4' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'form', gen(mk) {
        const { e1, e2, x0, y0 } = pair(mk, 4, 4);
        const on = (e, x, y) => e[0] * x + e[1] * y === e[2];
        const mode = mk.pick(['both', 'both', 'first', 'second', 'neither']);
        let x = x0, y = y0;
        if (mode === 'first') { x = x0 + e1[1]; y = y0 - e1[0]; }
        if (mode === 'second') { x = x0 + e2[1]; y = y0 - e2[0]; }
        if (mode === 'neither') { x = x0 + mk.pick([1, -1, 2]); y = y0 + mk.pick([1, -1, 2]); }
        const in1 = on(e1, x, y), in2 = on(e2, x, y);
        const co = k => k === 1 ? '' : k === -1 ? '−' : mk.num(k);
        const show = (e, ok) => `${co(e[0])}(${mk.num(x)}) ${e[1] < 0 ? '−' : '+'} ${co(Math.abs(e[1]))}(${mk.num(y)}) = ${mk.num(e[0] * x + e[1] * y)}${ok ? ' ✓' : ` ≠ ${mk.num(e[2])} ✗`}`;
        return {
          q: `Is (${mk.num(x)}, ${mk.num(y)}) a solution of\n${mk.lin(...e1)} and ${mk.lin(...e2)}?`,
          choices: ['Yes, of both', 'Only of the first', 'Only of the second', 'Of neither'],
          answer: in1 && in2 ? 0 : in1 ? 1 : in2 ? 2 : 3,
          steps: `Put x = ${mk.num(x)}, y = ${mk.num(y)} in each:\n(1) ${show(e1, in1)}\n(2) ${show(e2, in2)}\n` +
            (in1 && in2 ? 'Both are true, so it IS a solution of the pair.' : 'It must make BOTH true to be a solution of the pair.')
        };
      } },
      { topic: 'graph', gen(mk) {
        const kind = mk.pick([0, 0, 0, 1, 2]);
        if (kind === 0) {
          let a1, b1, a2, b2;
          const x0 = mk.ri(-4, 4), y0 = mk.ri(-4, 4);
          do { a1 = mk.ri(-3, 3); b1 = mk.ri(-3, 3); a2 = mk.ri(-3, 3); b2 = mk.ri(-3, 3); }
          while ((!a1 && !b1) || (!a2 && !b2) || a1 * b2 === a2 * b1 || mk.gcd(a1, b1) !== 1 || mk.gcd(a2, b2) !== 1);
          const e1 = [a1, b1, a1 * x0 + b1 * y0], e2 = [a2, b2, a2 * x0 + b2 * y0];
          return {
            q: 'The two equations are drawn below. Read the solution of the pair from the graph.',
            svg: mk.lines([e1, e2]),
            fields: [{ label: 'x =', answer: x0, signed: true }, { label: 'y =', answer: y0, signed: true }],
            hint: 'Find the point where the two lines cross. Count the squares along the x-axis, then up or down.',
            steps: `The lines cross at (${mk.num(x0)}, ${mk.num(y0)}).\nCheck: ${mk.lin(...e1)} → ${mk.num(a1 * x0 + b1 * y0)} ✓\n${mk.lin(...e2)} → ${mk.num(a2 * x0 + b2 * y0)} ✓\nSo x = ${mk.num(x0)}, y = ${mk.num(y0)}.`
          };
        }
        let a, b, c, m, c2;
        do { a = mk.ri(-3, 3); b = nz(mk, 3); c = mk.ri(-4, 4); m = mk.pick([2, 3, -2]); c2 = kind === 2 ? m * c : m * c + mk.pick([-2, 2, 3, -3]) * Math.abs(m); }
        while (!a || mk.gcd(a, b) !== 1 || (kind === 1 && Math.abs(c2 / m) > 8));
        const e1 = [a, b, c], e2 = [m * a, m * b, c2];
        return {
          q: 'The two equations are drawn below. How many solutions does the pair have?',
          svg: mk.lines([e1, e2]),
          choices: KINDS,
          answer: kind,
          steps: (kind === 1 ? 'The lines are parallel: they never meet, so there is no solution.'
            : 'You can see only one line: the two lines lie on top of each other (coincident), so every point on it is a solution.') +
            `\nCheck with ratios: a1/a2 = ${mk.frac(a, m * a)}, b1/b2 = ${mk.frac(b, m * b)}, c1/c2 = ${c2 ? mk.frac(c, c2) : '—'}`
        };
      } },
      { topic: 'ratio', gen(mk) {
        const kind = mk.pick([0, 1, 2]);
        let a1, b1, c1, a2, b2, c2;
        for (;;) {
          a1 = nz(mk, 6); b1 = nz(mk, 6); c1 = nz(mk, 9);
          const m = mk.pick([2, 3, 4, -2, -3]);
          if (kind === 0) { a2 = nz(mk, 6); b2 = nz(mk, 6); c2 = nz(mk, 9); }
          else { a2 = m * a1; b2 = m * b1; c2 = kind === 2 ? m * c1 : m * c1 + nz(mk, 5); }
          if (c2 && (kind !== 0 || a1 * b2 !== a2 * b1) && mk.gcd(mk.gcd(a1, b1), c1) === 1) break;
        }
        let E1 = [a1, b1, c1], E2 = [a2, b2, c2];
        if (Math.random() < 0.3) [E1, E2] = [E2, E1];
        return {
          q: `How many solutions does this pair have?\n${mk.lin(...E1)}\n${mk.lin(...E2)}`,
          choices: KINDS,
          answer: kind,
          steps: `a1/a2 = ${ratio(mk, E1[0], E2[0])}\nb1/b2 = ${ratio(mk, E1[1], E2[1])}\nc1/c2 = ${ratio(mk, E1[2], E2[2])}\n` +
            (kind === 0 ? 'a1/a2 ≠ b1/b2 → the lines cross: exactly one solution (consistent).'
              : kind === 1 ? 'a1/a2 = b1/b2 ≠ c1/c2 → parallel lines: no solution (inconsistent).'
                : 'a1/a2 = b1/b2 = c1/c2 → the same line: infinitely many solutions (dependent).')
        };
      } },
      { topic: 'ratio', gen(mk) {
        const none = Math.random() < 0.5, onY = Math.random() < 0.6;
        let a, b, c, m, d;
        do { a = nz(mk, 5); b = nz(mk, 5); c = nz(mk, 9); m = mk.pick([2, 3, 4]); d = none ? m * c + nz(mk, 6) : m * c; }
        while (!d || mk.gcd(mk.gcd(a, b), c) !== 1);
        const k = onY ? m * b : m * a, other = onY ? m * a : m * b;
        const eq2 = onY ? `${term(mk, other, 'x')} + ky = ${mk.num(d)}` : `kx ${other < 0 ? '−' : '+'} ${Math.abs(other) === 1 ? '' : Math.abs(other)}y = ${mk.num(d)}`;
        const known = onY ? `a1/a2 = ${ratio(mk, a, other)}` : `b1/b2 = ${ratio(mk, b, other)}`;
        const unknown = onY ? `b1/b2 = ${mk.num(b)}/k` : `a1/a2 = ${mk.num(a)}/k`;
        return {
          q: `For what value of k does this pair have ${none ? 'no solution' : 'infinitely many solutions'}?\n${mk.lin(a, b, c)}\n${eq2}`,
          fields: [{ label: 'k =', answer: k, signed: true }],
          hint: none ? 'No solution: a1/a2 = b1/b2 ≠ c1/c2.' : 'Infinitely many: a1/a2 = b1/b2 = c1/c2.',
          steps: `${none ? 'No solution' : 'Infinitely many solutions'} needs a1/a2 = b1/b2 ${none ? '≠' : '='} c1/c2\n${known}\nSo ${unknown} = ${mk.frac(1, m)} → k = ${mk.num(k)}\n` +
            `Check: c1/c2 = ${ratio(mk, c, d)}, which is ${none ? 'not ' : ''}equal to ${mk.frac(1, m)} ✓`
        };
      } },
      { topic: 'sub', gen(mk) {
        let b1, a2, b2, x0, y0;
        do { b1 = nz(mk, 4); a2 = nz(mk, 5); b2 = nz(mk, 5); x0 = mk.ri(-6, 6); y0 = mk.ri(-6, 6); }
        while (b2 - a2 * b1 === 0 || (!x0 && !y0));
        const c1 = x0 + b1 * y0, c2 = a2 * x0 + b2 * y0, k = b2 - a2 * b1;
        const E = mk.poly([[c1, 0], [-b1, 1]], 'y');
        const lead = a2 === 1 ? '' : a2 === -1 ? '−' : mk.num(a2);
        return {
          q: `Solve by substitution:\n${mk.lin(1, b1, c1)}\n${mk.lin(a2, b2, c2)}`,
          fields: [{ label: 'x =', answer: x0, signed: true }, { label: 'y =', answer: y0, signed: true }],
          hint: `From the first equation, x = ${E}. Put this into the second equation.`,
          steps: `From (1): x = ${E}\nPut this in (2): ${lead}(${E}) ${b2 < 0 ? '−' : '+'} ${term(mk, Math.abs(b2), 'y')} = ${mk.num(c2)}\n` +
            `${mk.poly([[a2 * c1, 0], [-a2 * b1, 1], [b2, 1]], 'y')} = ${mk.num(c2)}\n${term(mk, k, 'y')} = ${mk.num(c2 - a2 * c1)}\ny = ${mk.num(y0)}\n` +
            `x = ${mk.num(c1)} ${-b1 * y0 < 0 ? '−' : '+'} ${Math.abs(b1 * y0)} = ${mk.num(x0)}`
        };
      } },
      { topic: 'elim', gen(mk) {
        const { e1, e2, x0, y0 } = pair(mk, 6, 6);
        return {
          q: `Solve by elimination:\n${mk.lin(...e1)}\n${mk.lin(...e2)}`,
          fields: [{ label: 'x =', answer: x0, signed: true }, { label: 'y =', answer: y0, signed: true }],
          hint: 'Multiply so that x (or y) has the same number in front in both equations. Same signs → subtract, opposite signs → add.',
          steps: elimSteps(mk, e1, e2)
        };
      } },
      { topic: 'word', gen(mk) {
        const t = mk.pick(['cost', 'taxi', 'numbers']);
        if (t === 'cost') {
          const [A, As, B, Bs, lo, hi] = mk.pick([['pen', 'pens', 'notebook', 'notebooks', 5, 15], ['chair', 'chairs', 'table', 'tables', 300, 900],
            ['mango', 'mangoes', 'melon', 'melons', 10, 30], ['bat', 'bats', 'ball', 'balls', 50, 600]]);
          let x, y, n1, m1, n2, m2;
          do { x = mk.ri(lo, hi); y = mk.ri(lo, hi); n1 = mk.ri(1, 6); m1 = mk.ri(1, 6); n2 = mk.ri(1, 6); m2 = mk.ri(1, 6); }
          while (n1 * m2 === n2 * m1 || x === y);
          if (lo >= 50) { x -= x % 10; y -= y % 10; }
          const T1 = n1 * x + m1 * y, T2 = n2 * x + m2 * y;
          const it = (n, s, p) => `${n} ${n === 1 ? s : p}`;
          return {
            q: `${it(n1, A, As)} and ${it(m1, B, Bs)} cost ₹${T1}. ${it(n2, A, As)} and ${it(m2, B, Bs)} cost ₹${T2}. Find the cost of one ${A} and one ${B}.`,
            fields: [{ label: `One ${A} (₹)`, answer: x }, { label: `One ${B} (₹)`, answer: y }],
            hint: `Let one ${A} cost ₹x and one ${B} cost ₹y. Write one equation for each sentence.`,
            steps: `Let one ${A} = ₹x, one ${B} = ₹y.\n` + elimSteps(mk, [n1, m1, T1], [n2, m2, T2]) + `\nOne ${A} = ₹${x}, one ${B} = ₹${y}`
          };
        }
        if (t === 'taxi') {
          const f = mk.ri(4, 12) * 5, r = mk.ri(8, 20), n1 = mk.ri(4, 12), n2 = n1 + mk.ri(3, 10);
          return {
            q: `A taxi charges a fixed amount plus a fixed rate per km. A ${n1} km ride costs ₹${f + n1 * r} and a ${n2} km ride costs ₹${f + n2 * r}. Find the fixed charge and the charge per km.`,
            fields: [{ label: 'Fixed charge (₹)', answer: f }, { label: 'Charge per km (₹)', answer: r }],
            hint: 'Let the fixed charge be ₹x and the charge per km be ₹y. Then x + (km)y = fare.',
            steps: `Let fixed charge = ₹x, charge per km = ₹y.\n` + elimSteps(mk, [1, n1, f + n1 * r], [1, n2, f + n2 * r]) + `\nFixed charge ₹${f}, ₹${r} per km`
          };
        }
        const small = mk.ri(3, 20), d = mk.ri(2, 4), k = mk.ri(1, 9), big = d * small + k;
        return {
          q: `The sum of two numbers is ${big + small}. The larger number is ${k} more than ${d === 2 ? 'twice' : d === 3 ? 'three times' : 'four times'} the smaller one. Find the numbers.`,
          fields: [{ label: 'Larger number', answer: big }, { label: 'Smaller number', answer: small }],
          hint: `Let the larger be x and the smaller be y. Then x + y = ${big + small} and x = ${d}y + ${k}.`,
          steps: `Let the larger = x, the smaller = y.\nx = ${d}y + ${k} → x − ${d}y = ${k}\n` + elimSteps(mk, [1, 1, big + small], [1, -d, k]) + `\nThe numbers are ${big} and ${small}.`
        };
      } },
      { topic: 'word', gen(mk) {
        const t = mk.pick(['ages', 'digits', 'fraction']);
        if (t === 'ages') {
          let S, N, m, F;
          do { S = mk.ri(8, 18); N = mk.ri(2, 6); m = mk.ri(3, 5); F = m * (S - N) + N; } while (S - N < 2 || F - S < 20 || F - S > 45);
          return {
            q: `The sum of the present ages of a father and his son is ${F + S} years. ${N} years ago, the father was ${m} times as old as his son. Find their present ages.`,
            fields: [{ label: "Father's age", answer: F }, { label: "Son's age", answer: S }],
            hint: `Let the father be x and the son y years old. ${N} years ago they were x − ${N} and y − ${N}.`,
            steps: `Let father = x years, son = y years.\nx + y = ${F + S}\nx − ${N} = ${m}(y − ${N}) → x − ${m}y = ${mk.num(N - m * N)}\n` +
              elimSteps(mk, [1, 1, F + S], [1, -m, N - m * N]) + `\nFather ${F} years, son ${S} years`
          };
        }
        if (t === 'digits') {
          const tn = mk.ri(1, 7), u = mk.ri(tn + 1, 9), D = 9 * (u - tn);
          return {
            q: `The sum of the digits of a two-digit number is ${tn + u}. If the digits are reversed, the new number is ${D} more than the original number. Find the number.`,
            fields: [{ label: 'The number', answer: 10 * tn + u }],
            hint: 'Let the tens digit be x and the units digit be y. The number is 10x + y and the reversed number is 10y + x.',
            steps: `Let tens digit = x, units digit = y. Number = 10x + y.\nx + y = ${tn + u} …(1)\n(10y + x) − (10x + y) = ${D}\n9y − 9x = ${D} → y − x = ${u - tn} …(2)\n` +
              `Add (1) and (2): 2y = ${2 * u} → y = ${u}\nx = ${tn + u} − ${u} = ${tn}\nNumber = 10 × ${tn} + ${u} = ${10 * tn + u}`
          };
        }
        let x, y, a, b, p1, q1, p2, q2, e1, e2;
        for (;;) {
          x = mk.ri(2, 9); y = mk.ri(x + 1, 13); a = mk.ri(1, 4); b = mk.ri(1, 3);
          if (mk.gcd(x, y) !== 1 || x - b < 1) continue;
          const g1 = mk.gcd(x + a, y + a), g2 = mk.gcd(x - b, y - b);
          [p1, q1, p2, q2] = [(x + a) / g1, (y + a) / g1, (x - b) / g2, (y - b) / g2];
          e1 = [q1, -p1, a * (p1 - q1)]; e2 = [q2, -p2, b * (q2 - p2)];
          if (Math.min(mk.lcm(q1, q2), mk.lcm(p1, p2)) <= 40) break;
        }
        return {
          q: `A fraction becomes ${p1}/${q1} if ${a} is added to both its numerator and denominator. It becomes ${p2}/${q2} if ${b} is subtracted from both. Find the fraction.`,
          fields: [{ label: 'Numerator', answer: x }, { label: 'Denominator', answer: y }],
          hint: `Let the fraction be x/y. Then (x + ${a})/(y + ${a}) = ${p1}/${q1}. Cross-multiply to get a linear equation.`,
          steps: `Let the fraction be x/y.\n(x + ${a})/(y + ${a}) = ${p1}/${q1} → ${q1}(x + ${a}) = ${p1}(y + ${a}) → ${mk.lin(...e1)}\n` +
            `(x − ${b})/(y − ${b}) = ${p2}/${q2} → ${q2}(x − ${b}) = ${p2}(y − ${b}) → ${mk.lin(...e2)}\n` + elimSteps(mk, e1, e2) + `\nThe fraction is ${x}/${y}.`
        };
      } }
    ],

    match: [
      { title: 'Lines & Solutions', pairs: [
        ['Intersecting lines', 'Exactly one solution'],
        ['Parallel lines', 'No solution'],
        ['Coincident lines', 'Infinitely many solutions'],
        ['Consistent pair', 'At least one solution'],
        ['a1/a2 ≠ b1/b2', 'Lines cross at one point'],
        ['a1/a2 = b1/b2 ≠ c1/c2', 'Inconsistent pair']
      ] },
      { title: 'Pair → Solution', pairs: [
        ['x + y = 5, x − y = 1', '(3, 2)'],
        ['x + y = 14, x − y = 4', '(9, 5)'],
        ['3x + 4y = 10, 2x − 2y = 2', '(2, 1)'],
        ['x + y = 5, 2x − 3y = 4', '(19/5, 6/5)'],
        ['x + 2y = 3, 2x + 4y = 6', 'Infinitely many'],
        ['x + 2y = 3, 2x + 4y = 7', 'No solution']
      ] },
      { title: 'Words → Equation', pairs: [
        ['Sum of two numbers is 14', 'x + y = 14'],
        ['Larger exceeds smaller by 18', 'x − y = 18'],
        ['Number with tens digit x, units digit y', '10x + y'],
        ['That number with digits reversed', '10y + x'],
        ['In 5 years, father x is 3 times son y', 'x + 5 = 3(y + 5)'],
        ['x/y becomes 1/2 when 1 is added to both', '2(x + 1) = y + 1']
      ] },
      { title: 'Methods', pairs: [
        ['Substitution', 'Write one variable in terms of the other and put it in'],
        ['Elimination', 'Make coefficients equal, then add or subtract'],
        ['Graphical method', 'Draw both lines and read where they meet'],
        ['Checking', 'Put x and y back into both equations'],
        ['Ending with 0 = 0', 'Infinitely many solutions'],
        ['Ending with 0 = 5', 'No solution']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'Is the pair x + 2y = 5 and 2x + 4y = 10 consistent? How many solutions does it have?',
        keypoints: [
          { text: '1/2 = 2/4 = 5/10, so the lines are coincident', kw: ['1/2'] },
          { text: 'Consistent (dependent), infinitely many solutions', kw: ['infinite'] }
        ],
        model: 'a1/a2 = 1/2, b1/b2 = 2/4 = 1/2, c1/c2 = 5/10 = 1/2\nAll equal → coincident lines.\nConsistent (dependent) with infinitely many solutions.' },
      { marks: 1, q: 'Find k so that 3x + ky = 9 and 6x + 4y = 18 have infinitely many solutions.',
        keypoints: [
          { text: '3/6 = k/4 = 9/18, so k = 2', kw: ['2'] }
        ],
        model: 'For infinitely many solutions: a1/a2 = b1/b2 = c1/c2\n3/6 = k/4 = 9/18 = 1/2\nk/4 = 1/2 → k = 2' },
      { marks: 1, q: 'Find k so that x + 2y = 3 and 5x + ky + 7 = 0 have no solution.',
        keypoints: [
          { text: '1/5 = 2/k, so k = 10', kw: ['10'] }
        ],
        model: 'Write as x + 2y − 3 = 0 and 5x + ky + 7 = 0\nNo solution: a1/a2 = b1/b2 ≠ c1/c2\n1/5 = 2/k → k = 10\nCheck: c1/c2 = −3/7 ≠ 1/5 ✓' },
      { marks: 2, q: 'Solve by substitution: x + y = 14 and x − y = 4.',
        keypoints: [
          { text: 'x = y + 4 (or y = 14 − x)', kw: ['y + 4|y+4|14 − x|14 - x|14 − y|14 - y'] },
          { text: 'x = 9, y = 5', kw: ['9', '5'] }
        ],
        model: 'From x − y = 4: x = y + 4\nPut in x + y = 14: y + 4 + y = 14\n2y = 10 → y = 5\nx = 5 + 4 = 9' },
      { marks: 2, q: 'Solve by elimination: 3x + 4y = 10 and 2x − 2y = 2.',
        keypoints: [
          { text: 'Multiply the second by 2 and add: 7x = 14', kw: ['7x|14'] },
          { text: 'x = 2, y = 1', kw: ['2', '1'] }
        ],
        model: '(2) × 2: 4x − 4y = 4\nAdd to (1): 7x = 14 → x = 2\nPut in (2): 4 − 2y = 2 → y = 1' },
      { marks: 2, q: 'Without drawing, find out whether the lines 5x − 4y + 8 = 0 and 7x + 6y − 9 = 0 intersect, are parallel or coincide.',
        keypoints: [
          { text: 'a1/a2 = 5/7, b1/b2 = −4/6 = −2/3', kw: ['5/7'] },
          { text: '5/7 ≠ −2/3, so they intersect at one point', kw: ['intersect'] }
        ],
        model: 'a1/a2 = 5/7\nb1/b2 = −4/6 = −2/3\na1/a2 ≠ b1/b2, so the lines intersect at a point (unique solution).' },
      { marks: 2, q: 'Two angles are supplementary. The larger one is 18° more than the smaller. Find them.',
        keypoints: [
          { text: 'x + y = 180 and x − y = 18', kw: ['180', '18'] },
          { text: 'x = 99°, y = 81°', kw: ['99', '81'] }
        ],
        model: 'Let the angles be x (larger) and y.\nx + y = 180\nx − y = 18\nAdd: 2x = 198 → x = 99°\ny = 180 − 99 = 81°' },
      { marks: 2, q: '5 pencils and 7 pens together cost ₹50, while 7 pencils and 5 pens cost ₹46. Find the cost of one pencil and one pen.',
        keypoints: [
          { text: '5x + 7y = 50 and 7x + 5y = 46', kw: ['50', '46'] },
          { text: 'Pencil ₹3, pen ₹5', kw: ['3', '5'] }
        ],
        model: 'Let a pencil cost ₹x and a pen ₹y.\n5x + 7y = 50, 7x + 5y = 46\nAdd: 12x + 12y = 96 → x + y = 8\nSubtract: −2x + 2y = 4 → y − x = 2\nSo y = 5, x = 3: pencil ₹3, pen ₹5' },
      { marks: 3, q: 'Solve 2x + 3y = 11 and 2x − 4y = −24, and hence find m for which y = mx + 3.',
        keypoints: [
          { text: 'Subtract: 7y = 35, so y = 5', kw: ['35|y = 5|y=5'] },
          { text: 'x = −2', kw: ['−2|-2'] },
          { text: '5 = −2m + 3, so m = −1', kw: ['m'] }
        ],
        model: '(1) − (2): 7y = 35 → y = 5\n2x + 15 = 11 → x = −2\ny = mx + 3: 5 = −2m + 3 → m = −1' },
      { marks: 3, q: 'A fraction becomes 9/11 if 2 is added to both the numerator and the denominator. If 3 is added to both, it becomes 5/6. Find the fraction.',
        keypoints: [
          { text: '11x − 9y = −4', kw: ['11x'] },
          { text: '6x − 5y = −3', kw: ['6x'] },
          { text: 'Fraction = 7/9', kw: ['7/9'] }
        ],
        model: 'Let the fraction be x/y.\n(x + 2)/(y + 2) = 9/11 → 11x + 22 = 9y + 18 → 11x − 9y = −4\n(x + 3)/(y + 3) = 5/6 → 6x + 18 = 5y + 15 → 6x − 5y = −3\n(1) × 5: 55x − 45y = −20\n(2) × 9: 54x − 45y = −27\nSubtract: x = 7\n6(7) − 5y = −3 → y = 9\nFraction = 7/9' },
      { marks: 3, q: 'The sum of the digits of a two-digit number is 9. Nine times this number is twice the number obtained by reversing its digits. Find the number.',
        keypoints: [
          { text: 'x + y = 9', kw: ['9'] },
          { text: '9(10x + y) = 2(10y + x) → y = 8x', kw: ['8x|88x'] },
          { text: 'Number = 18', kw: ['18'] }
        ],
        model: 'Let tens digit = x, units digit = y. Number = 10x + y.\nx + y = 9 …(1)\n9(10x + y) = 2(10y + x) → 90x + 9y = 20y + 2x → 88x = 11y → y = 8x …(2)\nPut in (1): 9x = 9 → x = 1, y = 8\nNumber = 18' },
      { marks: 3, q: 'A taxi charges a fixed amount plus a charge for every km. For 10 km the fare is ₹105 and for 15 km it is ₹155. Find the fixed charge, the charge per km, and the fare for 25 km.',
        keypoints: [
          { text: 'x + 10y = 105 and x + 15y = 155', kw: ['105', '155'] },
          { text: '₹10 per km, fixed ₹5', kw: ['10', '5'] },
          { text: '25 km costs ₹255', kw: ['255'] }
        ],
        model: 'Fixed = ₹x, per km = ₹y\nx + 10y = 105, x + 15y = 155\nSubtract: 5y = 50 → y = 10\nx = 105 − 100 = 5\nFare for 25 km = 5 + 25 × 10 = ₹255' },
      { marks: 3, q: 'Five years from now Jacob will be three times as old as his son. Five years ago, Jacob was seven times as old as his son. Find their present ages.',
        keypoints: [
          { text: 'x + 5 = 3(y + 5) → x − 3y = 10', kw: ['3y|3(y'] },
          { text: 'x − 5 = 7(y − 5) → x − 7y = −30', kw: ['7y|7(y'] },
          { text: 'Jacob 40, son 10', kw: ['40', '10'] }
        ],
        model: 'Let Jacob = x, son = y years.\nx + 5 = 3(y + 5) → x − 3y = 10\nx − 5 = 7(y − 5) → x − 7y = −30\nSubtract: 4y = 40 → y = 10\nx = 10 + 30 = 40\nJacob is 40 and his son is 10.' },
      { marks: 3, q: 'For what value of k will kx + 3y = k − 3 and 12x + ky = k have no solution?',
        keypoints: [
          { text: 'k/12 = 3/k → k² = 36 → k = ±6', kw: ['36|±6'] },
          { text: '3/k ≠ (k − 3)/k → k ≠ 6', kw: ['≠ 6|not 6|!= 6|≠6'] },
          { text: 'k = −6', kw: ['−6|-6'] }
        ],
        model: 'No solution: a1/a2 = b1/b2 ≠ c1/c2\nk/12 = 3/k → k² = 36 → k = 6 or −6\nb1/b2 ≠ c1/c2: 3/k ≠ (k − 3)/k → 3 ≠ k − 3 → k ≠ 6\nSo k = −6' },
      { marks: 3, q: '7 bats and 6 balls cost ₹3800. Later, 3 bats and 5 balls cost ₹1750. Find the cost of one bat and one ball.',
        keypoints: [
          { text: '7x + 6y = 3800 and 3x + 5y = 1750', kw: ['3800', '1750'] },
          { text: 'Bat ₹500', kw: ['500'] },
          { text: 'Ball ₹50', kw: ['50'] }
        ],
        model: 'Let a bat cost ₹x and a ball ₹y.\n7x + 6y = 3800 …(1)\n3x + 5y = 1750 …(2)\n(1) × 5: 35x + 30y = 19000\n(2) × 6: 18x + 30y = 10500\nSubtract: 17x = 8500 → x = 500\n3(500) + 5y = 1750 → y = 50\nBat ₹500, ball ₹50' },
      { marks: 5, q: 'Draw the graphs of x − y + 1 = 0 and 3x + 2y − 12 = 0. Find the coordinates of the vertices of the triangle formed by these lines and the x-axis.',
        keypoints: [
          { text: 'Table for x − y + 1 = 0: (0, 1), (−1, 0), (2, 3)', kw: ['(0, 1)|(0,1)|(−1, 0)|(-1, 0)|(-1,0)'] },
          { text: 'Table for 3x + 2y − 12 = 0: (0, 6), (4, 0), (2, 3)', kw: ['(0, 6)|(0,6)|(4, 0)|(4,0)'] },
          { text: 'The lines meet at (2, 3)', kw: ['(2, 3)|(2,3)'] },
          { text: 'Vertices: (2, 3), (−1, 0), (4, 0)', kw: ['(−1, 0)|(-1, 0)|(-1,0)|(−1,0)', '(4, 0)|(4,0)'] }
        ],
        model: 'x − y + 1 = 0 → y = x + 1\nx: 0, −1, 2 → y: 1, 0, 3\n3x + 2y − 12 = 0 → y = (12 − 3x)/2\nx: 0, 4, 2 → y: 6, 0, 3\nPlot both lines. They meet at (2, 3).\nLine 1 meets the x-axis at (−1, 0); line 2 meets it at (4, 0).\nVertices of the triangle: (2, 3), (−1, 0) and (4, 0). Shade the triangle.' }
    ]
  });
})();
