// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 7: Coordinate Geometry
// In the syllabus: distance formula, section formula (internal division), midpoint.
// Not in the syllabus: area of a triangle.
// Note: the app turns a digit after a letter into a subscript, so x1, y2, m1 show as x₁, y₂, m₁ (wanted here).
// Never write ")" straight before a digit: that digit would be subscripted too.
(function () {
  const nz = (mk, n) => { let v; do v = mk.ri(-n, n); while (!v); return v; };
  const par = (mk, n) => n < 0 ? `(${mk.num(n)})` : mk.num(n);
  const pt = (mk, x, y) => `(${mk.num(x)}, ${mk.num(y)})`;
  // 50 -> [5, 2] because 50 = 5² × 2
  function surd(n) {
    let o = 1, i = n;
    for (let d = 2; d * d <= i; d++) while (i % (d * d) === 0) { i /= d * d; o *= d; }
    return [o, i];
  }
  // √D simplified: 25 -> "5", 50 -> "5√2", 13 -> "√13"
  function root(D) {
    if (!D) return '0';
    const [s, t] = surd(D);
    return t === 1 ? String(s) : (s === 1 ? '' : s) + '√' + t;
  }
  const kk = c => c === 1 ? 'k' : c === -1 ? '−k' : (c < 0 ? '−' + -c : String(c)) + 'k';
  const sq = (A, B) => (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2;
  // Worked distance: "AB = √[(5 − 2)² + (7 − 3)²] = √(9 + 16) = √25 = 5"
  function distLine(mk, A, B, name) {
    const dx = B[0] - A[0], dy = B[1] - A[1], D = dx * dx + dy * dy, r = root(D);
    return `${name} = √[(${mk.num(B[0])} − ${par(mk, A[0])})² + (${mk.num(B[1])} − ${par(mk, A[1])})²] = √(${dx * dx} + ${dy * dy}) = √${D}` + (r !== '√' + D ? ` = ${r}` : '');
  }
  // Squared distance only, for comparing sides: "AB² = 3² + 4² = 25"
  const sqLine = (mk, A, B, name) => `${name}² = ${par(mk, B[0] - A[0])}² + ${par(mk, B[1] - A[1])}² = ${sq(A, B)}`;

  // Two points on a squared grid (−R to R), labelled A and B.
  function plot(mk, pts, names) {
    const R = 8, S = 16, W = 2 * R * S, X = x => (x + R) * S, Y = y => (R - y) * S;
    let grid = '', nums = '';
    for (let k = -R; k <= R; k++) {
      grid += `<line x1="${X(k)}" y1="0" x2="${X(k)}" y2="${W}"/><line x1="0" y1="${Y(k)}" x2="${W}" y2="${Y(k)}"/>`;
      if (k && k % 2 === 0 && Math.abs(k) < R) {
        nums += `<text x="${X(k)}" y="${Y(0) + 12}" text-anchor="middle">${mk.num(k)}</text><text x="${X(0) - 3}" y="${Y(k) + 4}" text-anchor="end">${mk.num(k)}</text>`;
      }
    }
    const dots = pts.map(([x, y], i) => `<circle cx="${X(x)}" cy="${Y(y)}" r="5" style="fill:var(--gold)"/>` +
      `<text x="${X(x) + 7}" y="${Y(y) - 7}" style="fill:var(--text);font-size:14px;font-weight:800">${names[i]}</text>`).join('');
    return `<svg viewBox="0 0 ${W} ${W}" role="img" aria-label="Points on a grid">
      <g style="stroke:var(--line);stroke-width:1">${grid}</g>
      <g style="stroke:var(--muted);stroke-width:1.5"><line x1="0" y1="${Y(0)}" x2="${W}" y2="${Y(0)}"/><line x1="${X(0)}" y1="0" x2="${X(0)}" y2="${W}"/></g>
      <g style="fill:var(--muted);font-size:9px">${nums}</g>
      <line x1="${X(pts[0][0])}" y1="${Y(pts[0][1])}" x2="${X(pts[1][0])}" y2="${Y(pts[1][1])}" style="stroke:var(--accent-2);stroke-width:2;stroke-dasharray:5 4"/>
      ${dots}
    </svg>`;
  }

  const TRIPLES = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20], [7, 24, 25], [12, 5, 13], [4, 3, 5], [8, 6, 10], [15, 8, 17], [12, 9, 15]];

  SWG.addChapter('math', {
    id: 'math-ch07',
    number: 7,
    title: 'Coordinate Geometry',
    icon: '📍',

    topics: {
      dist: 'Distance Formula',
      apply: 'Using the Distance Formula',
      section: 'Section Formula',
      ratio: 'Finding the Ratio',
      mid: 'Midpoint & Its Uses'
    },

    summary: [
      'A point is written (x, y): x is the distance from the y-axis (abscissa), y is the distance from the x-axis (ordinate).',
      'Distance between P(x1, y1) and Q(x2, y2): PQ = √((x2 − x1)² + (y2 − y1)²). Distance of (x, y) from the origin: √(x² + y²).',
      'Collinear points: the sum of two of the distances equals the third. Square: 4 equal sides and equal diagonals. Rhombus: 4 equal sides, unequal diagonals. Rectangle: opposite sides equal, equal diagonals. Parallelogram: opposite sides equal (or diagonals bisect each other).',
      'Section formula: the point dividing the join of (x1, y1) and (x2, y2) internally in the ratio m1 : m2 is ((m1x2 + m2x1)/(m1 + m2), (m1y2 + m2y1)/(m1 + m2)).',
      'Midpoint (ratio 1 : 1): ((x1 + x2)/2, (y1 + y2)/2).',
      'To find a ratio, take it as k : 1, use the section formula on one coordinate, and solve for k.',
      'A point on the x-axis is (x, 0); a point on the y-axis is (0, y).',
      'Centroid of a triangle (where the medians meet): ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3).'
    ],

    flashcards: [
      { topic: 'dist', front: 'Distance formula', back: 'Distance between P(x1, y1) and Q(x2, y2):\nPQ = √((x2 − x1)² + (y2 − y1)²)\n(It comes from Pythagoras.)' },
      { topic: 'dist', front: 'Distance of a point P(x, y) from the origin O(0, 0)', back: 'OP = √(x² + y²)\ne.g. (−6, 8): √(36 + 64) = 10' },
      { topic: 'dist', front: 'Distance of P(x, y) from the x-axis and from the y-axis', back: 'From the x-axis: |y|\nFrom the y-axis: |x|\ne.g. (3, −4) is 4 units from the x-axis and 3 units from the y-axis.' },
      { topic: 'dist', front: 'Find the distance between (2, 3) and (4, 1).', back: '√((4 − 2)² + (1 − 3)²) = √(4 + 4) = √8 = 2√2' },
      { topic: 'dist', front: 'Find the distance between (−5, 7) and (−1, 3).', back: '√((−1 + 5)² + (3 − 7)²) = √(16 + 16) = √32 = 4√2' },
      { topic: 'dist', front: 'Find the distance between (a, b) and (−a, −b).', back: '√((−2a)² + (−2b)²) = √(4a² + 4b²) = 2√(a² + b²)' },
      { topic: 'dist', front: 'Town B is 36 km east and 15 km north of town A. How far apart are they?', back: 'A(0, 0), B(36, 15)\nAB = √(36² + 15²) = √(1296 + 225) = √1521 = 39 km' },
      { topic: 'dist', front: 'Does the order of the points matter in the distance formula?', back: 'No. (x2 − x1)² = (x1 − x2)², so PQ = QP.' },
      { topic: 'dist', front: 'Find y if the distance between (2, −3) and (10, y) is 10.', back: '(10 − 2)² + (y + 3)² = 100\n64 + (y + 3)² = 100\n(y + 3)² = 36 → y + 3 = ±6\ny = 3 or y = −9' },

      { topic: 'apply', front: 'How do you show three points are collinear (on one line) using distances?', back: 'Find all three distances. If the two smaller ones add up to the largest (AB + BC = AC), the points are collinear.' },
      { topic: 'apply', front: 'How do you show four points form a square?', back: 'All four sides are equal AND both diagonals are equal.' },
      { topic: 'apply', front: 'Rhombus, rectangle or parallelogram — how to tell?', back: 'Rhombus: all 4 sides equal, diagonals NOT equal\nRectangle: opposite sides equal, diagonals equal\nParallelogram: opposite sides equal, diagonals not equal' },
      { topic: 'apply', front: 'How do you show a triangle is right-angled using distances?', back: 'Find the squares of the three sides. If the biggest equals the sum of the other two (Pythagoras), it is right-angled.' },
      { topic: 'apply', front: 'Do (3, 2), (−2, −3) and (2, 3) form a triangle? What kind?', back: 'PQ² = 25 + 25 = 50, QR² = 16 + 36 = 52, PR² = 1 + 1 = 2\nPQ + PR > QR, so yes, a triangle.\nPQ² + PR² = 52 = QR², so it is right-angled at P.' },
      { topic: 'apply', front: 'Show that (1, 7), (4, 2), (−1, −1), (−4, 4) are the vertices of a square.', back: 'AB = BC = CD = DA = √34\nAC = BD = √68\nEqual sides and equal diagonals → square' },
      { topic: 'apply', front: 'Are (1, 5), (2, 3) and (−2, −11) collinear?', back: 'AB = √5, BC = √212, AC = √265\n√5 + √212 ≈ 2.24 + 14.56 = 16.80 but √265 ≈ 16.28\nNo sum matches, so NOT collinear.' },
      { topic: 'apply', front: 'Find a point on the y-axis equidistant from A(6, 5) and B(−4, 3).', back: 'Let P = (0, y).\n36 + (y − 5)² = 16 + (y − 3)²\n61 − 10y = 25 − 6y → 4y = 36 → y = 9\nP = (0, 9)' },
      { topic: 'apply', front: 'Find a point on the x-axis equidistant from (2, −5) and (−2, 9).', back: 'Let P = (x, 0).\n(x − 2)² + 25 = (x + 2)² + 81\n−4x + 29 = 4x + 85 → x = −7\nP = (−7, 0)' },
      { topic: 'apply', front: 'Find a relation between x and y if (x, y) is equidistant from (7, 1) and (3, 5).', back: '(x − 7)² + (y − 1)² = (x − 3)² + (y − 5)²\n−14x − 2y + 50 = −6x − 10y + 34\n−8x + 8y + 16 = 0 → x − y = 2' },
      { topic: 'apply', front: 'Q(0, 1) is equidistant from P(5, −3) and R(x, 6). Find x.', back: 'QP² = 25 + 16 = 41\nQR² = x² + 25\nx² + 25 = 41 → x² = 16 → x = 4 or −4' },
      { topic: 'apply', front: 'Classroom: Champa says A(3, 4), B(6, 7), C(9, 4), D(6, 1) make a square. Is she right?', back: 'AB = BC = CD = DA = √18 = 3√2\nAC = 6, BD = 6\nYes, it is a square.' },

      { topic: 'section', front: 'Section formula (internal division)', back: 'P divides the join of A(x1, y1) and B(x2, y2) in the ratio m1 : m2:\nP = ((m1x2 + m2x1)/(m1 + m2), (m1y2 + m2y1)/(m1 + m2))' },
      { topic: 'section', front: 'Memory trick for the section formula', back: 'Cross-multiply: m1 goes with the FAR point B (x2, y2) and m2 goes with A (x1, y1). Then divide by m1 + m2.' },
      { topic: 'section', front: 'Find the point dividing (4, −3) and (8, 5) in the ratio 3 : 1.', back: 'x = (3 × 8 + 1 × 4)/4 = 28/4 = 7\ny = (3 × 5 + 1 × (−3))/4 = 12/4 = 3\nP = (7, 3)' },
      { topic: 'section', front: 'Find the point dividing (−1, 7) and (4, −3) in the ratio 2 : 3.', back: 'x = (2 × 4 + 3 × (−1))/5 = 5/5 = 1\ny = (2 × (−3) + 3 × 7)/5 = 15/5 = 3\nP = (1, 3)' },
      { topic: 'section', front: 'What are points of trisection?', back: 'The two points that divide a segment into 3 equal parts.\nThey divide it in the ratios 1 : 2 and 2 : 1.' },
      { topic: 'section', front: 'Find the points of trisection of A(2, −2) and B(−7, 4).', back: '1 : 2 → ((−7 + 4)/3, (4 − 4)/3) = (−1, 0)\n2 : 1 → ((−14 + 2)/3, (8 − 2)/3) = (−4, 2)' },
      { topic: 'section', front: 'A(−2, −2), B(2, −4). P is on AB with AP = (3/7)AB. Find P.', back: 'AP : PB = 3 : 4\nx = (3 × 2 + 4 × (−2))/7 = −2/7\ny = (3 × (−4) + 4 × (−2))/7 = −20/7\nP = (−2/7, −20/7)' },
      { topic: 'section', front: 'Find the points that divide the join of (−2, 2) and (2, 8) into four equal parts.', back: 'Middle point = midpoint = (0, 5)\nThen midpoints of each half: (−1, 7/2) and (1, 13/2)' },

      { topic: 'ratio', front: 'How do you find the ratio in which a point divides a segment?', back: 'Take the ratio as k : 1.\nPut the known coordinate into the section formula and solve for k.\nk = 2/7 means the ratio is 2 : 7.' },
      { topic: 'ratio', front: 'In what ratio does (−4, 6) divide the join of A(−6, 10) and B(3, −8)?', back: 'k : 1 → x = (3k − 6)/(k + 1) = −4\n3k − 6 = −4k − 4 → 7k = 2 → k = 2/7\nRatio 2 : 7 (check with y: it gives 6 ✓)' },
      { topic: 'ratio', front: 'Ratio in which the y-axis divides the join of (5, −6) and (−1, −4)', back: 'On the y-axis, x = 0.\n(−k + 5)/(k + 1) = 0 → k = 5\nRatio 5 : 1, at the point (0, −13/3)' },
      { topic: 'ratio', front: 'Ratio in which the x-axis divides the join of (1, −5) and (−4, 5)', back: 'On the x-axis, y = 0.\n(5k − 5)/(k + 1) = 0 → k = 1\nRatio 1 : 1, at the point (−3/2, 0)' },
      { topic: 'ratio', front: 'Shortcut: ratio in which the x-axis divides the join of (x1, y1) and (x2, y2)', back: '−y1 : y2  (use the sizes of the y-coordinates)\nFor the y-axis: −x1 : x2' },
      { topic: 'ratio', front: 'In what ratio does (−3, k) divide the join of (−5, −4) and (−2, 3)? Find k.', back: 'λ : 1 → (−2λ − 5)/(λ + 1) = −3 → λ = 2 → 2 : 1\nk = (2 × 3 + 1 × (−4))/3 = 2/3' },

      { topic: 'mid', front: 'Midpoint formula', back: 'Midpoint of (x1, y1) and (x2, y2):\n((x1 + x2)/2, (y1 + y2)/2)\n(the section formula with ratio 1 : 1)' },
      { topic: 'mid', front: 'Find the midpoint of (2, 3) and (4, 7).', back: '((2 + 4)/2, (3 + 7)/2) = (3, 5)' },
      { topic: 'mid', front: 'The centre of a circle is (2, −3) and B(1, 4) is one end of a diameter AB. Find A.', back: 'The centre is the midpoint of AB.\n(x + 1)/2 = 2 → x = 3\n(y + 4)/2 = −3 → y = −10\nA = (3, −10)' },
      { topic: 'mid', front: 'Diagonals of a parallelogram', back: 'They bisect each other, so the midpoints of both diagonals are the SAME point.' },
      { topic: 'mid', front: '(1, 2), (4, y), (x, 6), (3, 5) are the vertices of a parallelogram in order. Find x and y.', back: 'Midpoint of AC = midpoint of BD\n((1 + x)/2, 4) = (7/2, (5 + y)/2)\nx = 6, y = 3' },
      { topic: 'mid', front: 'Fourth vertex of parallelogram ABCD from A, B, C', back: 'D = A + C − B\n(x4, y4) = (x1 + x3 − x2, y1 + y3 − y2)' },
      { topic: 'mid', front: 'Centroid of a triangle', back: 'G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3)\nIt divides each median in the ratio 2 : 1.\ne.g. (3, −5), (−7, 4), (10, −2) → (2, −1)' }
    ],

    quiz: [
      { topic: 'dist', q: 'The distance between (2, 3) and (4, 1) is…', options: ['2', '2√2', '4', '√2'], answer: 1, explain: '√(4 + 4) = √8 = 2√2' },
      { topic: 'dist', q: 'The distance of (−6, 8) from the origin is…', options: ['10', '14', '2', '√28'], answer: 0, explain: '√(36 + 64) = √100' },
      { topic: 'dist', q: 'The distance between (−5, 7) and (−1, 3) is…', options: ['8', '4√2', '2√2', '4'], answer: 1, explain: '√(16 + 16) = √32 = 4√2' },
      { topic: 'dist', q: 'The distance between (a, b) and (−a, −b) is…', options: ['√(a² + b²)', '0', '2√(a² + b²)', '2(a + b)'], answer: 2, explain: '√(4a² + 4b²)' },
      { topic: 'dist', q: 'Town A is at (0, 0) and town B at (36, 15) (in km). AB is…', options: ['39 km', '51 km', '21 km', '45 km'], answer: 0, explain: '√(1296 + 225) = √1521 = 39' },
      { topic: 'dist', q: 'The distance between P(x1, y1) and Q(x2, y2) is…', options: ['√((x2 + x1)² + (y2 + y1)²)', '(x2 − x1)² + (y2 − y1)²', '√((x2 − x1)² + (y2 − y1)²)', '√((x2 − x1) + (y2 − y1))'], answer: 2, explain: 'Square the differences, add, then take the square root.' },
      { topic: 'dist', q: 'The distance of (3, −4) from the x-axis is…', options: ['3', '4', '5', '−4'], answer: 1, explain: 'Distance from the x-axis = |y| = 4' },
      { topic: 'dist', q: 'The distance of (−5, 2) from the y-axis is…', options: ['2', '−5', '5', '√29'], answer: 2, explain: 'Distance from the y-axis = |x| = 5' },
      { topic: 'dist', q: 'If the distance between (2, −3) and (10, y) is 10, then y = …', options: ['−3 or 9', '3 or −9', '3 only', '6 or −6'], answer: 1, explain: '64 + (y + 3)² = 100 → y + 3 = ±6' },
      { topic: 'dist', q: 'The distance between (0, 5) and (−5, 0) is…', options: ['5', '10', '5√2', '0'], answer: 2, explain: '√(25 + 25) = √50 = 5√2' },

      { topic: 'apply', q: 'The points (3, 2), (−2, −3) and (2, 3) form…', options: ['An equilateral triangle', 'A right-angled triangle', 'A straight line', 'An obtuse-angled triangle'], answer: 1, explain: 'Sides² are 50, 52, 2 and 50 + 2 = 52.' },
      { topic: 'apply', q: 'A(1, 7), B(4, 2), C(−1, −1) and D(−4, 4) form a…', options: ['Rectangle (not a square)', 'Rhombus (not a square)', 'Square', 'Trapezium'], answer: 2, explain: 'All sides √34, both diagonals √68.' },
      { topic: 'apply', q: 'The point on the y-axis equidistant from (6, 5) and (−4, 3) is…', options: ['(9, 0)', '(0, 9)', '(0, −9)', '(0, 4)'], answer: 1, explain: '36 + (y − 5)² = 16 + (y − 3)² → y = 9' },
      { topic: 'apply', q: 'The point on the x-axis equidistant from (2, −5) and (−2, 9) is…', options: ['(7, 0)', '(0, −7)', '(−7, 0)', '(−2, 0)'], answer: 2, explain: '(x − 2)² + 25 = (x + 2)² + 81 → x = −7' },
      { topic: 'apply', q: '(5, −2), (6, 4) and (7, −2) are the vertices of…', options: ['An isosceles triangle', 'An equilateral triangle', 'A right-angled triangle', 'No triangle'], answer: 0, explain: 'AB = BC = √37, AC = 2' },
      { topic: 'apply', q: 'If (x, y) is equidistant from (7, 1) and (3, 5), then…', options: ['x + y = 2', 'x − y = 2', 'x − y = −2', 'x = y'], answer: 1, explain: '−8x + 8y + 16 = 0' },
      { topic: 'apply', q: 'Are (1, 5), (2, 3) and (−2, −11) collinear?', options: ['Yes', 'No', 'They are the same point', 'Cannot be decided'], answer: 1, explain: '√5 + √212 ≠ √265, and no other pair adds up either.' },
      { topic: 'apply', q: 'Three points are collinear when…', options: ['All three distances are equal', 'The sum of the two smaller distances equals the largest', 'Two of the distances are equal', 'The distances form a Pythagorean triple'], answer: 1, explain: 'AB + BC = AC means B lies on AC.' },
      { topic: 'apply', q: 'To prove four points form a square, you show…', options: ['All sides equal only', 'Diagonals equal only', 'All 4 sides equal and both diagonals equal', 'Opposite sides equal'], answer: 2, explain: 'Equal sides alone could be a rhombus.' },
      { topic: 'apply', q: 'All four sides are equal but the diagonals are not. The quadrilateral is a…', options: ['Square', 'Rhombus', 'Rectangle', 'Trapezium'], answer: 1, explain: 'Square needs equal diagonals too.' },
      { topic: 'apply', q: 'Opposite sides equal and both diagonals equal, but neighbouring sides different. It is a…', options: ['Rhombus', 'Rectangle', 'Kite', 'Square'], answer: 1, explain: 'A parallelogram with equal diagonals is a rectangle.' },
      { topic: 'apply', q: 'Q(0, 1) is equidistant from P(5, −3) and R(x, 6). Then x = …', options: ['±3', '4 only', '±4', '±5'], answer: 2, explain: 'x² + 25 = 41' },
      { topic: 'apply', q: '(−1, −2), (1, 0), (−1, 2) and (−3, 0) form a…', options: ['Rhombus (not a square)', 'Square', 'Rectangle (not a square)', 'No quadrilateral'], answer: 1, explain: 'All sides √8, both diagonals 4.' },
      { topic: 'apply', q: '(−3, 5), (3, 1), (0, 3) and (−1, −4) form…', options: ['A square', 'A rhombus', 'A parallelogram', 'No quadrilateral: three of the points are collinear'], answer: 3, explain: '(−3, 5), (0, 3), (3, 1) lie on one line: √13 + √13 = √52.' },

      { topic: 'section', q: 'The point dividing the join of (x1, y1) and (x2, y2) in the ratio m1 : m2 has x-coordinate…', options: ['(m1x1 + m2x2)/(m1 + m2)', '(m1x2 + m2x1)/(m1 + m2)', '(m1x2 − m2x1)/(m1 − m2)', '(x1 + x2)/2'], answer: 1, explain: 'm1 goes with the far point x2.' },
      { topic: 'section', q: 'The point dividing (4, −3) and (8, 5) in the ratio 3 : 1 is…', options: ['(5, −1)', '(7, 3)', '(6, 1)', '(7, −3)'], answer: 1, explain: '((24 + 4)/4, (15 − 3)/4)' },
      { topic: 'section', q: 'The point dividing (−1, 7) and (4, −3) in the ratio 2 : 3 is…', options: ['(1, 3)', '(2, 1)', '(3, 1)', '(1, −3)'], answer: 0, explain: '((8 − 3)/5, (−6 + 21)/5)' },
      { topic: 'section', q: 'The points of trisection of A(2, −2) and B(−7, 4) are…', options: ['(−1, 2) and (−4, 0)', '(1, 0) and (4, 2)', '(−1, 0) and (−4, 2)', '(−2, 0) and (−5, 2)'], answer: 2, explain: 'Ratios 1 : 2 and 2 : 1' },
      { topic: 'section', q: 'P lies on AB with AP = (3/7)AB. Then P divides AB in the ratio…', options: ['3 : 7', '3 : 4', '4 : 3', '7 : 3'], answer: 1, explain: 'AP = 3 parts, PB = 7 − 3 = 4 parts' },
      { topic: 'section', q: 'A(−2, −2), B(2, −4) and AP = (3/7)AB. P is…', options: ['(−2/7, −20/7)', '(2/7, −20/7)', '(−2/7, 20/7)', '(−20/7, −2/7)'], answer: 0, explain: '((6 − 8)/7, (−12 − 8)/7)' },
      { topic: 'section', q: 'The join of (−2, 2) and (2, 8) is cut into four equal parts. The middle cutting point is…', options: ['(1, 5)', '(0, 4)', '(−1, 7/2)', '(0, 5)'], answer: 3, explain: 'It is the midpoint.' },
      { topic: 'section', q: 'The points of trisection divide a segment in the ratios…', options: ['1 : 3 and 3 : 1', '1 : 2 and 2 : 1', '1 : 1 and 2 : 1', '1 : 2 and 1 : 3'], answer: 1, explain: 'One third and two thirds of the way along.' },

      { topic: 'ratio', q: '(−4, 6) divides the join of A(−6, 10) and B(3, −8) in the ratio…', options: ['7 : 2', '2 : 7', '2 : 9', '1 : 3'], answer: 1, explain: '(3k − 6)/(k + 1) = −4 → k = 2/7' },
      { topic: 'ratio', q: 'The y-axis divides the join of (5, −6) and (−1, −4) in the ratio…', options: ['1 : 5', '5 : 1', '6 : 4', '1 : 1'], answer: 1, explain: 'x = 0: (−k + 5)/(k + 1) = 0 → k = 5' },
      { topic: 'ratio', q: 'The x-axis divides the join of (1, −5) and (−4, 5) in the ratio…', options: ['1 : 5', '5 : 1', '1 : 1', '4 : 1'], answer: 2, explain: 'y = 0: (5k − 5)/(k + 1) = 0 → k = 1' },
      { topic: 'ratio', q: 'The join of (1, −5) and (−4, 5) cuts the x-axis at…', options: ['(3/2, 0)', '(−3/2, 0)', '(0, −3/2)', '(−5/2, 0)'], answer: 1, explain: 'It is the midpoint: ((1 − 4)/2, 0)' },
      { topic: 'ratio', q: 'Every point on the x-axis has…', options: ['x = 0', 'x = y', 'y = 0', 'x + y = 0'], answer: 2, explain: 'e.g. (5, 0), (−3, 0)' },
      { topic: 'ratio', q: '(−3, k) divides the join of (−5, −4) and (−2, 3) in the ratio…', options: ['1 : 2', '2 : 1', '3 : 2', '2 : 3'], answer: 1, explain: '(−2λ − 5)/(λ + 1) = −3 → λ = 2' },
      { topic: 'ratio', q: 'In the question above, k = …', options: ['3/2', '2/3', '−2/3', '1'], answer: 1, explain: '(2 × 3 + 1 × (−4))/3 = 2/3' },

      { topic: 'mid', q: 'The midpoint of (2, 3) and (4, 7) is…', options: ['(6, 10)', '(3, 5)', '(1, 2)', '(3, 4)'], answer: 1, explain: '((2 + 4)/2, (3 + 7)/2)' },
      { topic: 'mid', q: 'The midpoint of (x1, y1) and (x2, y2) is…', options: ['((x2 − x1)/2, (y2 − y1)/2)', '(x1 + x2, y1 + y2)', '((x1 + x2)/2, (y1 + y2)/2)', '((x1 + y1)/2, (x2 + y2)/2)'], answer: 2, explain: 'Average the x-coordinates and the y-coordinates.' },
      { topic: 'mid', q: 'The centre of a circle is (2, −3) and one end of a diameter is (1, 4). The other end is…', options: ['(3/2, 1/2)', '(3, −10)', '(1, −7)', '(−3, 10)'], answer: 1, explain: '(1 + x)/2 = 2 and (4 + y)/2 = −3' },
      { topic: 'mid', q: '(1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram in order. Then…', options: ['x = 3, y = 6', 'x = 6, y = 3', 'x = 6, y = 5', 'x = 2, y = 3'], answer: 1, explain: 'Midpoints of the diagonals are equal.' },
      { topic: 'mid', q: 'The diagonals of a parallelogram always…', options: ['Are equal', 'Bisect each other', 'Are perpendicular', 'Never meet'], answer: 1, explain: 'So both diagonals have the same midpoint.' },
      { topic: 'mid', q: 'The centroid of the triangle (3, −5), (−7, 4), (10, −2) is…', options: ['(6, −3)', '(2, −1)', '(2, 1)', '(3, −1)'], answer: 1, explain: '((3 − 7 + 10)/3, (−5 + 4 − 2)/3)' },
      { topic: 'mid', q: 'The midpoint of (−4, 6) and (2, −2) is…', options: ['(−3, 4)', '(1, −2)', '(−1, 2)', '(−2, 4)'], answer: 2, explain: '((−4 + 2)/2, (6 − 2)/2)' },
      { topic: 'mid', q: 'If (3, 4) is the midpoint of (1, y) and (x, 6), then…', options: ['x = 5, y = 2', 'x = 2, y = 5', 'x = 4, y = 2', 'x = 5, y = 4'], answer: 0, explain: '(1 + x)/2 = 3, (y + 6)/2 = 4' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'dist', gen(mk) {
        if (Math.random() < 0.5) {
          let A, B;
          do {
            const [p, q] = mk.pick(TRIPLES.filter(t => t[0] <= 16 && t[1] <= 16)), sx = mk.pick([1, -1]), sy = mk.pick([1, -1]);
            A = [mk.ri(-8, 8), mk.ri(-8, 8)]; B = [A[0] + sx * p, A[1] + sy * q];
          } while (Math.abs(B[0]) > 12 || Math.abs(B[1]) > 12);
          const show = Math.abs(A[0]) <= 7 && Math.abs(A[1]) <= 7 && Math.abs(B[0]) <= 7 && Math.abs(B[1]) <= 7;
          const d = Math.sqrt(sq(A, B));
          return {
            q: show ? 'Read the coordinates of A and B from the grid, then find the distance AB.' : `Find the distance between A${pt(mk, ...A)} and B${pt(mk, ...B)}.`,
            svg: show ? plot(mk, [A, B], ['A', 'B']) : undefined,
            fields: [{ label: 'AB =', answer: d }],
            hint: 'AB = √((x2 − x1)² + (y2 − y1)²)',
            steps: (show ? `A = ${pt(mk, ...A)}, B = ${pt(mk, ...B)}\n` : '') + distLine(mk, A, B, 'AB')
          };
        }
        let A, B, D;
        do { A = [mk.ri(-9, 9), mk.ri(-9, 9)]; B = [mk.ri(-9, 9), mk.ri(-9, 9)]; D = sq(A, B); } while (!D || surd(D)[1] === 1 || A[0] === B[0] || A[1] === B[1]);
        const dx = Math.abs(B[0] - A[0]), dy = Math.abs(B[1] - A[1]);
        const right = root(D);
        const wrong = [String(dx + dy), root(Math.abs(dx * dx - dy * dy)), root(D + 2), root(D + 4), root(D * 2), root(D + 8)].filter(w => w !== '0');
        const opts = [right, ...[...new Set(wrong)].filter(w => w !== right).slice(0, 3)];
        const order = opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);
        return {
          q: `Find the distance between ${pt(mk, ...A)} and ${pt(mk, ...B)}.`,
          choices: order.map(o => o.t),
          answer: order.findIndex(o => o.k === 0),
          steps: distLine(mk, A, B, 'Distance')
        };
      } },
      { topic: 'dist', gen(mk) {
        const [p, q, h] = mk.pick(TRIPLES), A = [mk.ri(-6, 6), mk.ri(-6, 6)];
        const findY = Math.random() < 0.5;
        if (findY) {
          const x2 = A[0] + mk.pick([1, -1]) * p, ys = [A[1] + q, A[1] - q];
          return {
            q: `The distance between ${pt(mk, ...A)} and (${mk.num(x2)}, y) is ${h}. Find the possible values of y.`,
            fields: [{ label: 'y = (both values, comma between)', kind: 'list', answer: ys, show: ys.map(mk.num).join(', ') }],
            hint: `(${mk.num(x2)} − ${par(mk, A[0])})² + (y − ${par(mk, A[1])})² = ${h}²`,
            steps: `(${mk.num(x2)} − ${par(mk, A[0])})² + (y − ${par(mk, A[1])})² = ${h}²\n${p * p} + (y − ${par(mk, A[1])})² = ${h * h}\n(y − ${par(mk, A[1])})² = ${q * q}\ny − ${par(mk, A[1])} = ±${q}\ny = ${mk.num(ys[0])} or y = ${mk.num(ys[1])}`
          };
        }
        const y2 = A[1] + mk.pick([1, -1]) * q, xs = [A[0] + p, A[0] - p];
        return {
          q: `The distance between ${pt(mk, ...A)} and (x, ${mk.num(y2)}) is ${h}. Find the possible values of x.`,
          fields: [{ label: 'x = (both values, comma between)', kind: 'list', answer: xs, show: xs.map(mk.num).join(', ') }],
          hint: `(x − ${par(mk, A[0])})² + (${mk.num(y2)} − ${par(mk, A[1])})² = ${h}²`,
          steps: `(x − ${par(mk, A[0])})² + (${mk.num(y2)} − ${par(mk, A[1])})² = ${h}²\n(x − ${par(mk, A[0])})² + ${q * q} = ${h * h}\n(x − ${par(mk, A[0])})² = ${p * p}\nx − ${par(mk, A[0])} = ±${p}\nx = ${mk.num(xs[0])} or x = ${mk.num(xs[1])}`
        };
      } },
      { topic: 'apply', gen(mk) {
        const onX = Math.random() < 0.5;
        let A, B, v;
        for (;;) {
          A = [mk.ri(-9, 9), mk.ri(-9, 9)]; B = [mk.ri(-9, 9), mk.ri(-9, 9)];
          const i = onX ? 0 : 1, num = sq([0, 0], B) - sq([0, 0], A), den = 2 * (B[i] - A[i]);
          if (!den || num % den) continue;
          v = num / den;
          if (Math.abs(v) <= 12 && (A[0] !== B[0] || A[1] !== B[1])) break;
        }
        const P = onX ? [v, 0] : [0, v], c = onX ? 'x' : 'y', i = onX ? 0 : 1, j = 1 - i;
        const term = (Q) => `(${c} − ${par(mk, Q[i])})² + ${par(mk, Q[j])}²`;
        const k1 = -2 * A[i], k2 = -2 * B[i], c1 = A[0] ** 2 + A[1] ** 2, c2 = B[0] ** 2 + B[1] ** 2;
        const side = (k, cc) => `${c}² ${k < 0 ? '−' : '+'} ${Math.abs(k)}${c} + ${cc}`.replace(` + 0${c}`, '').replace(` − 0${c}`, '');
        return {
          q: `Find the point on the ${onX ? 'x' : 'y'}-axis that is equidistant from A${pt(mk, ...A)} and B${pt(mk, ...B)}.`,
          fields: [{ label: `${c} =`, answer: v, signed: true }],
          hint: `Let the point be ${onX ? '(x, 0)' : '(0, y)'}. Then PA² = PB². Expand and the ${c}² terms cancel.`,
          steps: `Let P = ${onX ? '(x, 0)' : '(0, y)'}. PA² = PB²\n${term(A)} = ${term(B)}\n${side(k1, c1)} = ${side(k2, c2)}\n${mk.num(k1 - k2)}${c} = ${mk.num(c2 - c1)}\n${c} = ${mk.num(v)}\nThe point is ${pt(mk, ...P)}.`
        };
      } },
      { topic: 'apply', gen(mk) {
        const kind = mk.pick(['col', 'right', 'iso', 'scal']);
        let P, Q, R;
        for (;;) {
          const O = [mk.ri(-5, 5), mk.ri(-5, 5)];
          if (kind === 'col') {
            const v = [mk.ri(1, 3) * mk.pick([1, -1]), mk.ri(-3, 3)], t1 = mk.ri(1, 2), t2 = t1 + mk.ri(1, 2);
            [P, Q, R] = mk.pick([[0, t1, t2], [t1, 0, t2], [0, t2, t1]]).map(t => [O[0] + t * v[0], O[1] + t * v[1]]);
          } else if (kind === 'right') {
            const a = nz(mk, 4), b = mk.ri(-4, 4), k = mk.pick([2, 3, -2]);
            P = O; Q = [O[0] + a, O[1] + b]; R = [O[0] - k * b, O[1] + k * a];
          } else if (kind === 'iso') {
            const a = nz(mk, 5), b = nz(mk, 5);
            P = O; Q = [O[0] + a, O[1] + b]; R = mk.pick([[O[0] + b, O[1] + a], [O[0] - a, O[1] + b], [O[0] + a, O[1] - b]]);
          } else { P = O; Q = [mk.ri(-6, 6), mk.ri(-6, 6)]; R = [mk.ri(-6, 6), mk.ri(-6, 6)]; }
          const s = [sq(P, Q), sq(Q, R), sq(P, R)].sort((x, y) => x - y);
          if (!s[0]) continue;
          const col = (Q[0] - P[0]) * (R[1] - P[1]) === (Q[1] - P[1]) * (R[0] - P[0]);
          const right = !col && s[0] + s[1] === s[2], iso = !col && (s[0] === s[1] || s[1] === s[2]);
          if (right && iso) continue;
          const got = col ? 'col' : right ? 'right' : iso ? 'iso' : 'scal';
          if (got !== kind) continue;
          if ([P, Q, R].some(p => Math.abs(p[0]) > 12 || Math.abs(p[1]) > 12)) continue;
          break;
        }
        const ab = sq(P, Q), bc = sq(Q, R), ac = sq(P, R);
        const [s0, s1, s2] = [ab, bc, ac].sort((x, y) => x - y);
        let why;
        if (kind === 'col') {
          const r = [ab, bc, ac].map(root), big = Math.max(ab, bc, ac);
          const names = ['AB', 'BC', 'AC'], bi = [ab, bc, ac].indexOf(big), others = [0, 1, 2].filter(x => x !== bi);
          why = `AB = ${r[0]}, BC = ${r[1]}, AC = ${r[2]}\n${names[others[0]]} + ${names[others[1]]} = ${r[others[0]]} + ${r[others[1]]} = ${r[bi]} = ${names[bi]}\nSo the points are collinear: they do not form a triangle.`;
        } else {
          why = `AB² = ${ab}, BC² = ${bc}, AC² = ${ac}\n` + (kind === 'right' ? `${s0} + ${s1} = ${s2}, so by Pythagoras it is a right-angled triangle.`
            : kind === 'iso' ? 'Two sides are equal (and the squares do not fit Pythagoras), so it is an isosceles triangle.'
              : `All three sides are different and ${s0} + ${s1} ≠ ${s2}, so it is a scalene triangle (not right-angled).`);
        }
        return {
          q: `A${pt(mk, ...P)}, B${pt(mk, ...Q)} and C${pt(mk, ...R)}. What do these three points form?`,
          choices: ['They are collinear (no triangle)', 'A right-angled triangle', 'An isosceles triangle (not right-angled)', 'A scalene triangle (not right-angled)'],
          answer: ['col', 'right', 'iso', 'scal'].indexOf(kind),
          steps: (kind === 'col' ? '' : 'Compare the squares of the sides:\n') + why
        };
      } },
      { topic: 'apply', gen(mk) {
        const kind = mk.pick(['square', 'rhombus', 'rect', 'para']);
        let A, u, w;
        for (;;) {
          A = [mk.ri(-5, 3), mk.ri(-5, 3)];
          const a = nz(mk, 4), b = nz(mk, 4);
          u = [a, b];
          if (kind === 'square') w = [-b, a];
          else if (kind === 'rect') { const k = mk.pick([2, -2]); w = [-k * b, k * a]; }
          else if (kind === 'rhombus') w = mk.pick([[b, a], [-b, -a], [a, -b], [-a, b]]);
          else w = [mk.ri(-4, 4), mk.ri(-4, 4)];
          const dot = u[0] * w[0] + u[1] * w[1], uu = a * a + b * b, ww = w[0] ** 2 + w[1] ** 2;
          if (!ww || u[0] * w[1] === u[1] * w[0]) continue;
          const got = uu === ww ? (dot === 0 ? 'square' : 'rhombus') : (dot === 0 ? 'rect' : 'para');
          if (got !== kind) continue;
          break;
        }
        const B = [A[0] + u[0], A[1] + u[1]], C = [B[0] + w[0], B[1] + w[1]], D = [A[0] + w[0], A[1] + w[1]];
        const sides = [sq(A, B), sq(B, C), sq(C, D), sq(D, A)], diag = [sq(A, C), sq(B, D)];
        const all = sides.every(s => s === sides[0]), deq = diag[0] === diag[1];
        const verdict = all && deq ? 'All sides equal and diagonals equal → square.' : all ? 'All sides equal but diagonals not equal → rhombus (not a square).'
          : deq ? 'Opposite sides equal and diagonals equal → rectangle (not a square).' : 'Opposite sides equal, but sides and diagonals are not all equal → parallelogram (not a rectangle or rhombus).';
        return {
          q: `A${pt(mk, ...A)}, B${pt(mk, ...B)}, C${pt(mk, ...C)} and D${pt(mk, ...D)} are the vertices of a quadrilateral, in order. What type is it?`,
          choices: ['Square', 'Rhombus (not a square)', 'Rectangle (not a square)', 'Parallelogram only'],
          answer: ['square', 'rhombus', 'rect', 'para'].indexOf(kind),
          steps: `Sides: AB² = ${sides[0]}, BC² = ${sides[1]}, CD² = ${sides[2]}, DA² = ${sides[3]}\nDiagonals: AC² = ${diag[0]}, BD² = ${diag[1]}\n${verdict}`
        };
      } },
      { topic: 'section', gen(mk) {
        if (Math.random() < 0.3) {
          let A, v;
          do { A = [mk.ri(-9, 9), mk.ri(-9, 9)]; v = [nz(mk, 4), mk.ri(-4, 4)]; } while (Math.abs(A[0] + 3 * v[0]) > 12 || Math.abs(A[1] + 3 * v[1]) > 12);
          const B = [A[0] + 3 * v[0], A[1] + 3 * v[1]], P = [A[0] + v[0], A[1] + v[1]], Q = [A[0] + 2 * v[0], A[1] + 2 * v[1]];
          const line = (m, n, X) => `(${m} × ${par(mk, B[0])} + ${n} × ${par(mk, A[0])})/3 = ${mk.num(X[0])}, (${m} × ${par(mk, B[1])} + ${n} × ${par(mk, A[1])})/3 = ${mk.num(X[1])}`;
          return {
            q: `Find the points of trisection of the line segment joining A${pt(mk, ...A)} and B${pt(mk, ...B)}.`,
            fields: [{ label: 'P (nearer A): x =', answer: P[0], signed: true }, { label: 'P: y =', answer: P[1], signed: true },
              { label: 'Q (nearer B): x =', answer: Q[0], signed: true }, { label: 'Q: y =', answer: Q[1], signed: true }],
            hint: 'P divides AB in the ratio 1 : 2 and Q divides it in the ratio 2 : 1. Use the section formula for each.',
            steps: `P divides AB in 1 : 2:\n${line(1, 2, P)}\nP = ${pt(mk, ...P)}\nQ divides AB in 2 : 1:\n${line(2, 1, Q)}\nQ = ${pt(mk, ...Q)}`
          };
        }
        let m, n, A, v;
        do { m = mk.ri(1, 4); n = mk.ri(1, 4); } while (m === n || mk.gcd(m, n) !== 1);
        do { A = [mk.ri(-9, 9), mk.ri(-9, 9)]; v = [nz(mk, 3), nz(mk, 3)]; }
        while (Math.abs(A[0] + (m + n) * v[0]) > 15 || Math.abs(A[1] + (m + n) * v[1]) > 15);
        const B = [A[0] + (m + n) * v[0], A[1] + (m + n) * v[1]], P = [A[0] + m * v[0], A[1] + m * v[1]];
        return {
          q: `Find the coordinates of the point P that divides the line segment joining A${pt(mk, ...A)} and B${pt(mk, ...B)} internally in the ratio ${m} : ${n}.`,
          fields: [{ label: 'x =', answer: P[0], signed: true }, { label: 'y =', answer: P[1], signed: true }],
          hint: `x = (m1x2 + m2x1)/(m1 + m2) with m1 = ${m}, m2 = ${n}. m1 goes with B.`,
          steps: `m1 = ${m}, m2 = ${n}\nx = (${m} × ${par(mk, B[0])} + ${n} × ${par(mk, A[0])})/${m + n} = ${mk.num(m * B[0] + n * A[0])}/${m + n} = ${mk.num(P[0])}\n` +
            `y = (${m} × ${par(mk, B[1])} + ${n} × ${par(mk, A[1])})/${m + n} = ${mk.num(m * B[1] + n * A[1])}/${m + n} = ${mk.num(P[1])}\nP = ${pt(mk, ...P)}`
        };
      } },
      { topic: 'ratio', gen(mk) {
        const axis = Math.random() < 0.5;
        let m, n, A, B, how, P, q;
        if (axis) {
          const onX = Math.random() < 0.5, i = onX ? 1 : 0, c = onX ? 'y' : 'x';
          for (;;) {
            A = [mk.ri(-9, 9), mk.ri(-9, 9)]; B = [mk.ri(-9, 9), mk.ri(-9, 9)];
            if (A[i] * B[i] < 0) break;
          }
          const g = mk.gcd(A[i], B[i]); m = Math.abs(A[i]) / g; n = Math.abs(B[i]) / g;
          const o = 1 - i, top = m * B[o] + n * A[o];
          P = onX ? [mk.frac(top, m + n), '0'] : ['0', mk.frac(top, m + n)];
          how = `On the ${onX ? 'x' : 'y'}-axis, ${c} = 0. Let the ratio be k : 1.\n(k × ${par(mk, B[i])} + 1 × ${par(mk, A[i])})/(k + 1) = 0\n${B[i] === 1 ? '' : B[i] === -1 ? '−' : mk.num(B[i])}k ${A[i] < 0 ? '−' : '+'} ${Math.abs(A[i])} = 0 → k = ${mk.frac(-A[i], B[i])}\n` +
            `Ratio = ${m} : ${n}\nThe point is (${P[0]}, ${P[1]}).`;
          q = `In what ratio does the ${onX ? 'x' : 'y'}-axis divide the line segment joining A${pt(mk, ...A)} and B${pt(mk, ...B)}?`;
        } else {
          do { m = mk.ri(1, 5); n = mk.ri(1, 5); } while (m === n || mk.gcd(m, n) !== 1);
          let v;
          do { A = [mk.ri(-9, 9), mk.ri(-9, 9)]; v = [nz(mk, 3), nz(mk, 3)]; }
          while (Math.abs(A[0] + (m + n) * v[0]) > 15 || Math.abs(A[1] + (m + n) * v[1]) > 15);
          B = [A[0] + (m + n) * v[0], A[1] + (m + n) * v[1]];
          const Pt = [A[0] + m * v[0], A[1] + m * v[1]];
          how = `Let the ratio be k : 1. Use the x-coordinates:\n(k × ${par(mk, B[0])} + ${par(mk, A[0])})/(k + 1) = ${mk.num(Pt[0])}\n` +
            `${kk(B[0])} + ${par(mk, A[0])} = ${kk(Pt[0])} + ${par(mk, Pt[0])}\n${kk(B[0] - Pt[0])} = ${mk.num(Pt[0] - A[0])} → k = ${mk.frac(Pt[0] - A[0], B[0] - Pt[0])}\nRatio = ${m} : ${n} (the y-coordinates give the same k ✓)`;
          q = `In what ratio does the point P${pt(mk, ...Pt)} divide the line segment joining A${pt(mk, ...A)} and B${pt(mk, ...B)}?`;
        }
        const right = `${m} : ${n}`;
        const wrong = [`${n} : ${m}`, `${m} : ${m + n}`, `${m + 1} : ${n}`, `${m} : ${n + 1}`, `${n} : ${m + n}`];
        const opts = [right, ...[...new Set(wrong)].filter(w => w !== right).slice(0, 3)];
        const order = opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);
        return { q, choices: order.map(o => o.t), answer: order.findIndex(o => o.k === 0), steps: how };
      } },
      { topic: 'mid', gen(mk) {
        const A = [mk.ri(-9, 9), mk.ri(-9, 9)], B = [mk.ri(-9, 9), mk.ri(-9, 9)];
        if (Math.random() < 0.5) {
          const sx = A[0] + B[0], sy = A[1] + B[1];
          return {
            q: `Find the midpoint of A${pt(mk, ...A)} and B${pt(mk, ...B)}.`,
            fields: [{ label: 'x =', answer: sx / 2, show: mk.frac(sx, 2), signed: true }, { label: 'y =', answer: sy / 2, show: mk.frac(sy, 2), signed: true }],
            hint: 'Midpoint = ((x1 + x2)/2, (y1 + y2)/2). A half like 3/2 is fine.',
            steps: `x = (${mk.num(A[0])} + ${par(mk, B[0])})/2 = ${mk.frac(sx, 2)}\ny = (${mk.num(A[1])} + ${par(mk, B[1])})/2 = ${mk.frac(sy, 2)}\nMidpoint = (${mk.frac(sx, 2)}, ${mk.frac(sy, 2)})`
          };
        }
        const M = [mk.ri(-6, 6), mk.ri(-6, 6)], C = [2 * M[0] - A[0], 2 * M[1] - A[1]];
        const circle = Math.random() < 0.5;
        return {
          q: circle ? `The centre of a circle is O${pt(mk, ...M)}. One end of a diameter is A${pt(mk, ...A)}. Find the other end B.`
            : `M${pt(mk, ...M)} is the midpoint of AB, where A = ${pt(mk, ...A)}. Find B.`,
          fields: [{ label: 'x =', answer: C[0], signed: true }, { label: 'y =', answer: C[1], signed: true }],
          hint: `${circle ? 'The centre is the midpoint of the diameter. ' : ''}Let B = (x, y). Then (${mk.num(A[0])} + x)/2 = ${mk.num(M[0])}.`,
          steps: `Let B = (x, y).${circle ? ' The centre is the midpoint of AB.' : ''}\n(${mk.num(A[0])} + x)/2 = ${mk.num(M[0])} → x = ${mk.num(2 * M[0])} − ${par(mk, A[0])} = ${mk.num(C[0])}\n` +
            `(${mk.num(A[1])} + y)/2 = ${mk.num(M[1])} → y = ${mk.num(2 * M[1])} − ${par(mk, A[1])} = ${mk.num(C[1])}\nB = ${pt(mk, ...C)}`
        };
      } },
      { topic: 'mid', gen(mk) {
        if (Math.random() < 0.35) {
          let P, Q, R;
          do { P = [mk.ri(-9, 9), mk.ri(-9, 9)]; Q = [mk.ri(-9, 9), mk.ri(-9, 9)]; R = [mk.ri(-9, 9), mk.ri(-9, 9)]; }
          while ((P[0] + Q[0] + R[0]) % 3 || (P[1] + Q[1] + R[1]) % 3 || (Q[0] - P[0]) * (R[1] - P[1]) === (Q[1] - P[1]) * (R[0] - P[0]));
          const G = [(P[0] + Q[0] + R[0]) / 3, (P[1] + Q[1] + R[1]) / 3];
          return {
            q: `Find the centroid of the triangle with vertices ${pt(mk, ...P)}, ${pt(mk, ...Q)} and ${pt(mk, ...R)}.`,
            fields: [{ label: 'x =', answer: G[0], signed: true }, { label: 'y =', answer: G[1], signed: true }],
            hint: 'Centroid = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3)',
            steps: `x = (${mk.num(P[0])} + ${par(mk, Q[0])} + ${par(mk, R[0])})/3 = ${mk.num(3 * G[0])}/3 = ${mk.num(G[0])}\ny = (${mk.num(P[1])} + ${par(mk, Q[1])} + ${par(mk, R[1])})/3 = ${mk.num(3 * G[1])}/3 = ${mk.num(G[1])}\nCentroid = ${pt(mk, ...G)}`
          };
        }
        let A, B, C;
        do { A = [mk.ri(-7, 7), mk.ri(-7, 7)]; B = [mk.ri(-7, 7), mk.ri(-7, 7)]; C = [mk.ri(-7, 7), mk.ri(-7, 7)]; }
        while ((B[0] - A[0]) * (C[1] - A[1]) === (B[1] - A[1]) * (C[0] - A[0]));
        const D = [A[0] + C[0] - B[0], A[1] + C[1] - B[1]];
        return {
          q: `A${pt(mk, ...A)}, B${pt(mk, ...B)} and C${pt(mk, ...C)} are three vertices of parallelogram ABCD (in order). Find the fourth vertex D.`,
          fields: [{ label: 'x =', answer: D[0], signed: true }, { label: 'y =', answer: D[1], signed: true }],
          hint: 'The diagonals AC and BD bisect each other, so they have the same midpoint.',
          steps: `Midpoint of AC = midpoint of BD\n(${mk.num(A[0])} + ${par(mk, C[0])})/2 = (${mk.num(B[0])} + x)/2 → x = ${mk.num(A[0] + C[0])} − ${par(mk, B[0])} = ${mk.num(D[0])}\n` +
            `(${mk.num(A[1])} + ${par(mk, C[1])})/2 = (${mk.num(B[1])} + y)/2 → y = ${mk.num(A[1] + C[1])} − ${par(mk, B[1])} = ${mk.num(D[1])}\nD = ${pt(mk, ...D)}`
        };
      } }
    ],

    match: [
      { title: 'Formulas', pairs: [
        ['Distance between two points', '√((x2 − x1)² + (y2 − y1)²)'],
        ['Distance from the origin', '√(x² + y²)'],
        ['Section formula (x)', '(m1x2 + m2x1)/(m1 + m2)'],
        ['Midpoint', '((x1 + x2)/2, (y1 + y2)/2)'],
        ['Centroid (x)', '(x1 + x2 + x3)/3'],
        ['Any point on the x-axis', '(x, 0)']
      ] },
      { title: 'Points → Distance', pairs: [
        ['(2, 3) and (4, 1)', '2√2'],
        ['(−5, 7) and (−1, 3)', '4√2'],
        ['(0, 0) and (36, 15)', '39'],
        ['(−6, 8) and the origin', '10'],
        ['(0, 5) and (−5, 0)', '5√2'],
        ['(3, −4) and the x-axis', '4']
      ] },
      { title: 'Shape Tests', pairs: [
        ['Square', '4 equal sides, equal diagonals'],
        ['Rhombus', '4 equal sides, unequal diagonals'],
        ['Rectangle', 'Opposite sides equal, equal diagonals'],
        ['Parallelogram', 'Diagonals bisect each other'],
        ['Collinear points', 'Two distances add up to the third'],
        ['Right-angled triangle', 'Sides fit Pythagoras']
      ] },
      { title: 'Question → Answer', pairs: [
        ['Divides (4, −3), (8, 5) in 3 : 1', '(7, 3)'],
        ['Ratio: (−4, 6) on A(−6, 10), B(3, −8)', '2 : 7'],
        ['Ratio: y-axis on (5, −6), (−1, −4)', '5 : 1'],
        ['Midpoint of (2, 3) and (4, 7)', '(3, 5)'],
        ['Point on y-axis equidistant from (6, 5), (−4, 3)', '(0, 9)'],
        ['Centroid of (3, −5), (−7, 4), (10, −2)', '(2, −1)']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'Find the distance between the points (2, 3) and (4, 1).',
        keypoints: [{ text: '√(4 + 4) = √8 = 2√2', kw: ['2√2|√8|2 √2'] }],
        model: 'Distance = √((4 − 2)² + (1 − 3)²) = √(4 + 4) = √8 = 2√2' },
      { marks: 1, q: 'Find the distance of the point (−6, 8) from the origin.',
        keypoints: [{ text: '√(36 + 64) = 10', kw: ['10'] }],
        model: 'Distance = √((−6)² + 8²) = √(36 + 64) = √100 = 10' },
      { marks: 1, q: 'Find the midpoint of the line segment joining (−4, 6) and (2, −2).',
        keypoints: [{ text: '(−1, 2)', kw: ['(−1, 2)|(-1, 2)|(-1,2)|(−1,2)'] }],
        model: 'Midpoint = ((−4 + 2)/2, (6 − 2)/2) = (−1, 2)' },
      { marks: 1, q: 'In what ratio does the x-axis divide the line segment joining (1, −5) and (−4, 5)?',
        keypoints: [{ text: 'y = 0 → k = 1 → ratio 1 : 1', kw: ['1 : 1|1:1'] }],
        model: 'On the x-axis y = 0. Let the ratio be k : 1.\n(5k − 5)/(k + 1) = 0 → k = 1\nRatio 1 : 1' },
      { marks: 2, q: 'Find the point on the y-axis which is equidistant from A(6, 5) and B(−4, 3).',
        keypoints: [
          { text: 'Let P = (0, y); 36 + (y − 5)² = 16 + (y − 3)²', kw: ['(0, y)|(0,y)|0, y'] },
          { text: 'y = 9, P = (0, 9)', kw: ['(0, 9)|(0,9)|y = 9|y=9'] }
        ],
        model: 'Let P = (0, y). PA = PB, so PA² = PB²\n(6 − 0)² + (5 − y)² = (−4 − 0)² + (3 − y)²\n36 + 25 − 10y + y² = 16 + 9 − 6y + y²\n61 − 10y = 25 − 6y → 4y = 36 → y = 9\nP = (0, 9)' },
      { marks: 2, q: 'Find the coordinates of the point which divides the join of (−1, 7) and (4, −3) in the ratio 2 : 3.',
        keypoints: [
          { text: 'x = (2 × 4 + 3 × (−1))/5 = 1', kw: ['1'] },
          { text: 'y = (2 × (−3) + 3 × 7)/5 = 3; point (1, 3)', kw: ['(1, 3)|(1,3)'] }
        ],
        model: 'm1 = 2, m2 = 3\nx = (2 × 4 + 3 × (−1))/5 = 5/5 = 1\ny = (2 × (−3) + 3 × 7)/5 = 15/5 = 3\nThe point is (1, 3).' },
      { marks: 2, q: 'Find the values of y for which the distance between P(2, −3) and Q(10, y) is 10 units.',
        keypoints: [
          { text: '64 + (y + 3)² = 100', kw: ['64|100'] },
          { text: 'y + 3 = ±6 → y = 3 or −9', kw: ['3', '9'] }
        ],
        model: 'PQ² = (10 − 2)² + (y + 3)² = 100\n64 + (y + 3)² = 100\n(y + 3)² = 36 → y + 3 = 6 or −6\ny = 3 or y = −9' },
      { marks: 2, q: 'If (1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram taken in order, find x and y.',
        keypoints: [
          { text: 'Midpoint of AC = midpoint of BD', kw: ['midpoint'] },
          { text: 'x = 6, y = 3', kw: ['6', '3'] }
        ],
        model: 'Diagonals of a parallelogram bisect each other.\nMidpoint of AC = ((1 + x)/2, (2 + 6)/2) = ((1 + x)/2, 4)\nMidpoint of BD = ((4 + 3)/2, (y + 5)/2) = (7/2, (y + 5)/2)\n(1 + x)/2 = 7/2 → x = 6\n(y + 5)/2 = 4 → y = 3' },
      { marks: 2, q: 'Find the coordinates of A, where AB is a diameter of a circle with centre (2, −3) and B is (1, 4).',
        keypoints: [
          { text: 'Centre is the midpoint of AB', kw: ['midpoint'] },
          { text: 'A = (3, −10)', kw: ['(3, −10)|(3, -10)|(3,-10)|(3,−10)'] }
        ],
        model: 'Let A = (x, y). The centre is the midpoint of AB.\n(x + 1)/2 = 2 → x = 3\n(y + 4)/2 = −3 → y = −10\nA = (3, −10)' },
      { marks: 3, q: 'Do the points (3, 2), (−2, −3) and (2, 3) form a triangle? If so, name the type of triangle.',
        keypoints: [
          { text: 'PQ = √50, QR = √52, PR = √2', kw: ['50', '52'] },
          { text: 'PQ + PR > QR, so they form a triangle', kw: ['triangle'] },
          { text: 'PQ² + PR² = QR² → right-angled at P', kw: ['right'] }
        ],
        model: 'P(3, 2), Q(−2, −3), R(2, 3)\nPQ = √(25 + 25) = √50 ≈ 7.07\nQR = √(16 + 36) = √52 ≈ 7.21\nPR = √(1 + 1) = √2 ≈ 1.41\nThe sum of any two is more than the third, so they form a triangle.\nPQ² + PR² = 50 + 2 = 52 = QR², so it is a right-angled triangle (right angle at P).' },
      { marks: 3, q: 'Show that the points (1, 7), (4, 2), (−1, −1) and (−4, 4) are the vertices of a square.',
        keypoints: [
          { text: 'AB = BC = CD = DA = √34', kw: ['34'] },
          { text: 'AC = BD = √68', kw: ['68'] },
          { text: 'Equal sides and equal diagonals → square', kw: ['square'] }
        ],
        model: 'A(1, 7), B(4, 2), C(−1, −1), D(−4, 4)\nAB = √(9 + 25) = √34, BC = √(25 + 9) = √34\nCD = √(9 + 25) = √34, DA = √(25 + 9) = √34\nAC = √(4 + 64) = √68, BD = √(64 + 4) = √68\nAll four sides are equal and both diagonals are equal, so ABCD is a square.' },
      { marks: 3, q: 'Find the ratio in which the point (−4, 6) divides the line segment joining A(−6, 10) and B(3, −8).',
        keypoints: [
          { text: 'Let the ratio be k : 1: (3k − 6)/(k + 1) = −4', kw: ['k'] },
          { text: '7k = 2 → k = 2/7', kw: ['2/7'] },
          { text: 'Ratio 2 : 7', kw: ['2 : 7|2:7'] }
        ],
        model: 'Let the ratio be k : 1.\nx: (3k − 6)/(k + 1) = −4\n3k − 6 = −4k − 4 → 7k = 2 → k = 2/7\nCheck y: (−8k + 10)/(k + 1) = (−16/7 + 10)/(9/7) = (54/7)/(9/7) = 6 ✓\nThe ratio is 2 : 7.' },
      { marks: 3, q: 'Find the coordinates of the points of trisection of the line segment joining (2, −2) and (−7, 4).',
        keypoints: [
          { text: 'Ratios 1 : 2 and 2 : 1', kw: ['1 : 2|1:2'] },
          { text: 'P = (−1, 0)', kw: ['(−1, 0)|(-1, 0)|(-1,0)|(−1,0)'] },
          { text: 'Q = (−4, 2)', kw: ['(−4, 2)|(-4, 2)|(-4,2)|(−4,2)'] }
        ],
        model: 'A(2, −2), B(−7, 4)\nP divides AB in 1 : 2: x = (1 × (−7) + 2 × 2)/3 = −1, y = (1 × 4 + 2 × (−2))/3 = 0 → P(−1, 0)\nQ divides AB in 2 : 1: x = (2 × (−7) + 1 × 2)/3 = −4, y = (2 × 4 + 1 × (−2))/3 = 2 → Q(−4, 2)' },
      { marks: 3, q: 'Find the ratio in which the y-axis divides the line segment joining (5, −6) and (−1, −4). Also find the point of intersection.',
        keypoints: [
          { text: 'x = 0: (−k + 5)/(k + 1) = 0 → k = 5', kw: ['5'] },
          { text: 'Ratio 5 : 1', kw: ['5 : 1|5:1'] },
          { text: 'Point (0, −13/3)', kw: ['13/3'] }
        ],
        model: 'On the y-axis x = 0. Let the ratio be k : 1.\n(k × (−1) + 1 × 5)/(k + 1) = 0 → −k + 5 = 0 → k = 5\nRatio 5 : 1\ny = (5 × (−4) + 1 × (−6))/6 = −26/6 = −13/3\nPoint: (0, −13/3)' },
      { marks: 3, q: 'Find a relation between x and y such that the point (x, y) is equidistant from (7, 1) and (3, 5).',
        keypoints: [
          { text: '(x − 7)² + (y − 1)² = (x − 3)² + (y − 5)²', kw: ['(x − 7)|(x-7)|(x - 7)'] },
          { text: '−8x + 8y + 16 = 0', kw: ['8x|8y'] },
          { text: 'x − y = 2', kw: ['x − y = 2|x-y=2|x - y = 2|x−y=2'] }
        ],
        model: 'Let P(x, y), A(7, 1), B(3, 5). PA = PB\n(x − 7)² + (y − 1)² = (x − 3)² + (y − 5)²\nx² − 14x + 49 + y² − 2y + 1 = x² − 6x + 9 + y² − 10y + 25\n−14x − 2y + 50 = −6x − 10y + 34\n−8x + 8y + 16 = 0\nx − y = 2' },
      { marks: 5, q: 'Name the type of quadrilateral formed (if any) by each set of points, and give reasons: (i) (−1, −2), (1, 0), (−1, 2), (−3, 0) (ii) (−3, 5), (3, 1), (0, 3), (−1, −4) (iii) (4, 5), (7, 6), (4, 3), (1, 2).',
        keypoints: [
          { text: '(i) All sides √8, diagonals 4 and 4 → square', kw: ['square'] },
          { text: '(ii) (−3, 5), (0, 3), (3, 1) are collinear → no quadrilateral', kw: ['collinear'] },
          { text: '(iii) Opposite sides √10 and √18, diagonals 2 and √52 → parallelogram', kw: ['parallelogram'] }
        ],
        model: '(i) A(−1, −2), B(1, 0), C(−1, 2), D(−3, 0)\nAB = BC = CD = DA = √8; AC = 4, BD = 4\nEqual sides and equal diagonals → square.\n(ii) A(−3, 5), B(3, 1), C(0, 3), D(−1, −4)\nAC = √(9 + 4) = √13, CB = √(9 + 4) = √13, AB = √(36 + 16) = √52 = 2√13\nAC + CB = AB, so A, C, B are collinear → no quadrilateral.\n(iii) A(4, 5), B(7, 6), C(4, 3), D(1, 2)\nAB = √10, BC = √18, CD = √10, DA = √18\nAC = 2, BD = √52\nOpposite sides equal, diagonals not equal → parallelogram.' },
      { marks: 5, q: 'If A(−2, −2) and B(2, −4), find the coordinates of P such that AP = (3/7)AB and P lies on AB. Also find the points that divide the line segment joining (−2, 2) and (2, 8) into four equal parts.',
        keypoints: [
          { text: 'AP : PB = 3 : 4', kw: ['3 : 4|3:4'] },
          { text: 'P = (−2/7, −20/7)', kw: ['2/7', '20/7'] },
          { text: 'Middle point (midpoint) = (0, 5)', kw: ['(0, 5)|(0,5)'] },
          { text: 'Other points: (−1, 7/2) and (1, 13/2)', kw: ['7/2', '13/2'] }
        ],
        model: 'AP = (3/7)AB → AP : PB = 3 : 4\nx = (3 × 2 + 4 × (−2))/7 = −2/7\ny = (3 × (−4) + 4 × (−2))/7 = −20/7\nP = (−2/7, −20/7)\nFor (−2, 2) and (2, 8): the middle point is the midpoint (0, 5).\nMidpoint of (−2, 2) and (0, 5) = (−1, 7/2)\nMidpoint of (0, 5) and (2, 8) = (1, 13/2)\nThe three points are (−1, 7/2), (0, 5) and (1, 13/2).' }
    ]
  });
})();
