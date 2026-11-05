// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 11: Areas Related to Circles
// In the syllabus: area of a sector and of a segment, length of an arc, perimeter of these figures
// (segment problems only for central angles 60°, 90° and 120°).
// Not in the syllabus: areas of combinations of plane figures.
// Note: the app turns a digit after a letter or after ')' into a subscript, so write "(θ/360) × πr²", never "(θ/360)πr2".
(function () {
  // Pretty decimal: 19.625 -> "19.625", -2 -> "−2"
  const dn = (mk, x) => mk.num(Math.round(x * 1000) / 1000);
  // N/D has at most 3 decimal places?
  const nice = (N, D) => (N * 1000) % D === 0;
  const PI = { f: { name: '22/7', num: 22, den: 7 }, d: { name: '3.14', num: 314, den: 100 } };

  // A sector (or segment) picture, pointing up, with θ and r labels.
  function sectorSvg(theta, kind = 'sector') {
    const cx = 100, cy = 105, R = 80, rad = d => (d - 90) * Math.PI / 180;
    const a1 = rad(-theta / 2), a2 = rad(theta / 2);
    const P = a => [(cx + R * Math.cos(a)).toFixed(1), (cy + R * Math.sin(a)).toFixed(1)];
    const [x1, y1] = P(a1), [x2, y2] = P(a2), big = theta > 180 ? 1 : 0;
    const shape = kind === 'segment'
      ? `M${x1},${y1} A${R},${R} 0 ${big} 1 ${x2},${y2} Z`
      : `M${cx},${cy} L${x1},${y1} A${R},${R} 0 ${big} 1 ${x2},${y2} Z`;
    const [mx, my] = [((cx + +x2) / 2 + 8).toFixed(1), ((cy + +y2) / 2 + 4).toFixed(1)];
    return `<svg viewBox="0 0 200 200" role="img" aria-label="Circle with a shaded ${kind}">
      <circle cx="${cx}" cy="${cy}" r="${R}" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
      <path d="${shape}" style="fill:var(--accent-2);fill-opacity:.3;stroke:var(--accent-2);stroke-width:2"/>
      <g style="stroke:var(--text);stroke-width:2"><line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}"/><line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}"/></g>
      <circle cx="${cx}" cy="${cy}" r="3" style="fill:var(--text)"/>
      <text x="${cx}" y="${cy - 14}" text-anchor="middle" style="fill:var(--gold);font-size:14px;font-weight:700">${theta}°</text>
      <text x="${mx}" y="${my}" style="fill:var(--text);font-size:14px;font-weight:700">r</text>
    </svg>`;
  }

  const ANGLES = [30, 36, 40, 45, 60, 72, 80, 90, 100, 120, 135, 150, 210, 240, 270, 300];

  SWG.addChapter('math', {
    id: 'math-ch11',
    number: 11,
    title: 'Areas Related to Circles',
    icon: '🥧',

    topics: {
      basic: 'Circle Basics',
      sector: 'Area of a Sector',
      arc: 'Arc Length & Perimeter',
      segment: 'Area of a Segment',
      apply: 'Real-life Problems'
    },

    summary: [
      'Circumference of a circle = 2πr. Area of a circle = πr².',
      'A sector is the part of a circle between two radii and an arc. A segment is the part between a chord and its arc.',
      'If the angle of the minor sector is θ, the major sector has angle 360° − θ.',
      'Area of a sector of angle θ = (θ/360) × πr². Area of the major sector = πr² − area of the minor sector.',
      'Length of an arc of angle θ = (θ/360) × 2πr. Perimeter of a sector = 2r + length of the arc.',
      'Area of a segment = area of the sector − area of the triangle formed by the two radii and the chord.',
      'Triangle in the segment: 90° → ½ r²; 60° → equilateral, (√3/4) r²; 120° → also (√3/4) r².',
      'Area of the major segment = πr² − area of the minor segment.',
      'A minute hand turns 6° every minute; an hour hand turns 30° every hour.'
    ],

    flashcards: [
      { topic: 'basic', front: 'Circumference and area of a circle', back: 'Circumference = 2πr (= πd)\nArea = πr²' },
      { topic: 'basic', front: 'What is a sector?', back: 'The region between two radii and the arc joining their ends.\nMinor sector: the smaller one. Major sector: the bigger one.' },
      { topic: 'basic', front: 'What is a segment?', back: 'The region between a chord and the arc it cuts off.\nMinor segment: the smaller one. Major segment: the bigger one.' },
      { topic: 'basic', front: 'If the minor sector has angle θ, what is the angle of the major sector?', back: '360° − θ\ne.g. minor 100° → major 260°' },
      { topic: 'basic', front: 'Semicircle: area and perimeter', back: 'θ = 180°\nArea = πr²/2\nPerimeter = πr + 2r (curved part + diameter)' },
      { topic: 'basic', front: 'What is a quadrant?', back: 'A sector with angle 90° — one quarter of the circle.\nArea = πr²/4' },
      { topic: 'basic', front: 'Which value of π should I use?', back: 'The one the question gives.\nUsually π = 22/7 when the radius is a multiple of 7, and π = 3.14 otherwise.' },
      { topic: 'basic', front: 'The circumference of a circle is 22 cm. Find its area.', back: '2 × (22/7) × r = 22 → r = 7/2 cm\nArea = (22/7) × (7/2)² = 77/2 = 38.5 cm²' },

      { topic: 'sector', front: 'Area of a sector of angle θ', back: 'Area = (θ/360) × πr²\n(θ/360 is the fraction of the whole circle)' },
      { topic: 'sector', front: 'Area of the major sector', back: 'πr² − area of the minor sector\n= ((360 − θ)/360) × πr²' },
      { topic: 'sector', front: 'Find the area of a sector of radius 6 cm and angle 60°. (π = 22/7)', back: '(60/360) × (22/7) × 6²\n= (1/6) × (22/7) × 36\n= 132/7 cm²' },
      { topic: 'sector', front: 'Find the area of a quadrant of a circle whose circumference is 22 cm. (π = 22/7)', back: '2πr = 22 → r = 7/2 cm\nQuadrant = (1/4) × (22/7) × (7/2)²\n= 77/8 cm²' },
      { topic: 'sector', front: 'Radius 4 cm, angle 30°: find the minor and major sector. (π = 3.14)', back: 'Minor = (30/360) × 3.14 × 16 = 4.19 cm² (approx.)\nWhole circle = 50.24 cm²\nMajor = 50.24 − 4.19 = 46.05 cm² (approx.)' },
      { topic: 'sector', front: 'Find the area of a sector of radius 21 cm and angle 60°. (π = 22/7)', back: '(1/6) × (22/7) × 441 = 231 cm²' },
      { topic: 'sector', front: 'Area of a sector using the arc length l', back: 'Area = ½ × l × r\ne.g. l = 22 cm, r = 7 cm → area = 77 cm²' },
      { topic: 'sector', front: 'Area of a sector of a circle of radius R with angle p° can be written as…', back: '(p/360) × πR² = (p/720) × 2πR²' },
      { topic: 'sector', front: 'If the radius is doubled (same angle), what happens to the area of the sector?', back: 'It becomes 4 times, because the area depends on r².' },

      { topic: 'arc', front: 'Length of an arc of angle θ', back: 'Arc length l = (θ/360) × 2πr' },
      { topic: 'arc', front: 'Perimeter of a sector', back: 'Perimeter = r + r + arc = 2r + (θ/360) × 2πr' },
      { topic: 'arc', front: 'Find the length of the arc of radius 21 cm and angle 60°. (π = 22/7)', back: '(60/360) × 2 × (22/7) × 21\n= (1/6) × 132 = 22 cm' },
      { topic: 'arc', front: 'Find the perimeter of a sector of radius 7 cm and angle 90°. (π = 22/7)', back: 'Arc = (1/4) × 2 × (22/7) × 7 = 11 cm\nPerimeter = 7 + 7 + 11 = 25 cm' },
      { topic: 'arc', front: 'An arc of length 11 cm is in a circle of radius 7 cm. Find its angle. (π = 22/7)', back: '2πr = 44 cm\nθ/360 = 11/44 = 1/4\nθ = 90°' },
      { topic: 'arc', front: 'Find the perimeter of a semicircle of radius 7 cm. (π = 22/7)', back: 'Curved part = πr = 22 cm\nPerimeter = 22 + 14 = 36 cm' },
      { topic: 'arc', front: 'How many degrees do the hands of a clock turn?', back: 'Minute hand: 360° in 60 min → 6° per minute\nHour hand: 360° in 12 h → 30° per hour' },
      { topic: 'arc', front: 'A minute hand is 14 cm long. How far does its tip move in 15 minutes? (π = 22/7)', back: 'Angle = 15 × 6° = 90°\nArc = (90/360) × 2 × (22/7) × 14 = 22 cm' },

      { topic: 'segment', front: 'Area of a segment', back: 'Area of minor segment = area of sector − area of triangle (made by the two radii and the chord)' },
      { topic: 'segment', front: 'Area of the major segment', back: 'πr² − area of the minor segment' },
      { topic: 'segment', front: 'Area of the triangle when the angle at the centre is 90°', back: '½ × r × r = ½ r²\n(the two radii are perpendicular)' },
      { topic: 'segment', front: 'Area of the triangle when the angle at the centre is 60°', back: 'The triangle is equilateral (both radii equal and the angle is 60°).\nArea = (√3/4) r²' },
      { topic: 'segment', front: 'Area of the triangle when the angle at the centre is 120°', back: 'Draw the perpendicular from the centre to the chord: it splits 120° into two 60° angles.\nHeight = r/2, chord = √3 r\nArea = ½ × √3 r × r/2 = (√3/4) r²' },
      { topic: 'segment', front: 'A chord of a circle of radius 10 cm makes a right angle at the centre. Find the minor segment and the major sector. (π = 3.14)', back: 'Sector = (1/4) × 3.14 × 100 = 78.5 cm²\nTriangle = ½ × 10 × 10 = 50 cm²\nMinor segment = 28.5 cm²\nMajor sector = 314 − 78.5 = 235.5 cm²' },
      { topic: 'segment', front: 'A chord of a circle of radius 15 cm makes 60° at the centre. Find the minor and major segments. (π = 3.14, √3 = 1.73)', back: 'Sector = (1/6) × 3.14 × 225 = 117.75 cm²\nTriangle = (1.73/4) × 225 = 97.3125 cm²\nMinor segment = 20.4375 cm²\nMajor segment = 706.5 − 20.4375 = 686.0625 cm²' },
      { topic: 'segment', front: 'A chord of a circle of radius 12 cm makes 120° at the centre. Find the segment. (π = 3.14, √3 = 1.73)', back: 'Sector = (1/3) × 3.14 × 144 = 150.72 cm²\nTriangle = (1.73/4) × 144 = 62.28 cm²\nSegment = 88.44 cm²' },
      { topic: 'segment', front: 'Radius 21 cm, angle 120°: find the segment. (π = 22/7)', back: 'Sector = (1/3) × (22/7) × 441 = 462 cm²\nTriangle = (√3/4) × 441 = 441√3/4 cm²\nSegment = (462 − 441√3/4) cm²' },

      { topic: 'apply', front: 'A horse is tied to a corner of a square field with a 5 m rope. Find the area it can graze. (π = 3.14)', back: 'The corner is 90°, so it grazes a quadrant.\n(1/4) × 3.14 × 25 = 19.625 m²' },
      { topic: 'apply', front: 'If the rope in the horse question becomes 10 m, how much more can it graze? (π = 3.14)', back: 'New area = (1/4) × 3.14 × 100 = 78.5 m²\nIncrease = 78.5 − 19.625 = 58.875 m²' },
      { topic: 'apply', front: 'The minute hand of a clock is 14 cm long. Find the area it sweeps in 5 minutes. (π = 22/7)', back: 'Angle = 5 × 6° = 30°\n(30/360) × (22/7) × 196 = 154/3 cm²' },
      { topic: 'apply', front: 'A circular brooch of diameter 35 mm is made with silver wire: the circle plus 5 diameters, making 10 equal sectors. Find the wire used and the area of each sector. (π = 22/7)', back: 'Wire = circumference + 5 diameters = 110 + 175 = 285 mm\nEach sector = (1/10) × (22/7) × (35/2)² = 385/4 mm²' },
      { topic: 'apply', front: 'An umbrella has 8 equally spaced ribs. Its radius is 45 cm. Find the area between two ribs. (π = 22/7)', back: '(1/8) × (22/7) × 45² = 22275/28 cm²' },
      { topic: 'apply', front: 'A car has two wipers that do not overlap. Each blade is 25 cm long and sweeps 115°. Find the total area cleaned. (π = 22/7)', back: '2 × (115/360) × (22/7) × 625\n= 158125/126 cm²' },
      { topic: 'apply', front: 'A lighthouse spreads red light over a sector of 80° up to 16.5 km. Find the area warned. (π = 3.14)', back: '(80/360) × 3.14 × 16.5²\n= 189.97 km² (approx.)' }
    ],

    quiz: [
      { topic: 'basic', q: 'The area of a circle of radius 7 cm is… (π = 22/7)', options: ['44 cm²', '154 cm²', '308 cm²', '22 cm²'], answer: 1, explain: '(22/7) × 49 = 154' },
      { topic: 'basic', q: 'The circumference of a circle of radius 7 cm is… (π = 22/7)', options: ['22 cm', '44 cm', '154 cm', '14 cm'], answer: 1, explain: '2 × (22/7) × 7 = 44' },
      { topic: 'basic', q: 'The region between two radii and an arc is called a…', options: ['Segment', 'Sector', 'Chord', 'Tangent'], answer: 1, explain: 'Sector = "slice of pizza" shape.' },
      { topic: 'basic', q: 'The region between a chord and its arc is called a…', options: ['Segment', 'Sector', 'Radius', 'Quadrant'], answer: 0, explain: 'A segment is cut off by a chord.' },
      { topic: 'basic', q: 'If the minor sector has angle 100°, the major sector has angle…', options: ['80°', '200°', '260°', '280°'], answer: 2, explain: '360° − 100°' },
      { topic: 'basic', q: 'The area of a semicircle of radius 14 cm is… (π = 22/7)', options: ['616 cm²', '308 cm²', '154 cm²', '44 cm²'], answer: 1, explain: '½ × (22/7) × 196 = 308' },
      { topic: 'basic', q: 'The perimeter of a semicircle of radius 7 cm is… (π = 22/7)', options: ['22 cm', '29 cm', '36 cm', '44 cm'], answer: 2, explain: 'πr + 2r = 22 + 14' },
      { topic: 'basic', q: 'The circumference of a circle is 22 cm. Its area is… (π = 22/7)', options: ['38.5 cm²', '77 cm²', '154 cm²', '19.25 cm²'], answer: 0, explain: 'r = 3.5 cm → (22/7) × 12.25 = 38.5' },
      { topic: 'basic', q: 'If the circumference and the area of a circle are numerically equal, the radius is…', options: ['1', '2', '4', 'π'], answer: 1, explain: '2πr = πr² → r = 2' },

      { topic: 'sector', q: 'The area of a sector of angle θ in a circle of radius r is…', options: ['(θ/360) × 2πr', '(θ/360) × πr²', '(θ/180) × πr²', '(θ/360) × πr'], answer: 1, explain: 'Fraction of the circle × area of the circle.' },
      { topic: 'sector', q: 'The area of a sector of radius 6 cm and angle 60° is… (π = 22/7)', options: ['132/7 cm²', '66/7 cm²', '264/7 cm²', '22/7 cm²'], answer: 0, explain: '(1/6) × (22/7) × 36' },
      { topic: 'sector', q: 'The area of a quadrant of a circle of radius 14 cm is… (π = 22/7)', options: ['616 cm²', '308 cm²', '154 cm²', '77 cm²'], answer: 2, explain: '(1/4) × (22/7) × 196' },
      { topic: 'sector', q: 'The area of a sector of radius 21 cm and angle 60° is… (π = 22/7)', options: ['231 cm²', '462 cm²', '22 cm²', '1386 cm²'], answer: 0, explain: '(1/6) × (22/7) × 441' },
      { topic: 'sector', q: 'The area of a sector of a circle of radius R with angle p° is…', options: ['(p/180) × 2πR', '(p/180) × πR²', '(p/360) × 2πR', '(p/720) × 2πR²'], answer: 3, explain: '(p/720) × 2πR² = (p/360) × πR²' },
      { topic: 'sector', q: 'A sector has arc length 22 cm and radius 7 cm. Its area is…', options: ['77 cm²', '154 cm²', '38.5 cm²', '22 cm²'], answer: 0, explain: '½ × l × r = ½ × 22 × 7' },
      { topic: 'sector', q: 'The major sector of a circle of radius 10 cm, when the minor sector has angle 90°, has area… (π = 3.14)', options: ['78.5 cm²', '235.5 cm²', '314 cm²', '157 cm²'], answer: 1, explain: '314 − 78.5' },
      { topic: 'sector', q: 'A sector of angle 72° is what fraction of the circle?', options: ['1/4', '1/5', '1/6', '1/8'], answer: 1, explain: '72/360 = 1/5' },
      { topic: 'sector', q: 'The area of a sector of radius 4 cm and angle 30° is about… (π = 3.14)', options: ['4.19 cm²', '8.37 cm²', '2.09 cm²', '12.56 cm²'], answer: 0, explain: '(1/12) × 3.14 × 16 = 4.186…' },
      { topic: 'sector', q: 'If the radius is doubled and the angle stays the same, the area of the sector becomes…', options: ['2 times', '4 times', 'Half', 'The same'], answer: 1, explain: 'Area depends on r².' },

      { topic: 'arc', q: 'The length of an arc of angle θ in a circle of radius r is…', options: ['(θ/360) × πr²', '(θ/360) × 2πr', '(θ/180) × 2πr', '(360/θ) × 2πr'], answer: 1, explain: 'Fraction of the circumference.' },
      { topic: 'arc', q: 'The arc of radius 21 cm and angle 60° has length… (π = 22/7)', options: ['11 cm', '22 cm', '44 cm', '66 cm'], answer: 1, explain: '(1/6) × 132' },
      { topic: 'arc', q: 'The arc of radius 14 cm and angle 45° has length… (π = 22/7)', options: ['11 cm', '22 cm', '7 cm', '44 cm'], answer: 0, explain: '(1/8) × 88' },
      { topic: 'arc', q: 'The perimeter of a sector of radius 7 cm and angle 90° is… (π = 22/7)', options: ['11 cm', '18 cm', '25 cm', '32 cm'], answer: 2, explain: '7 + 7 + 11' },
      { topic: 'arc', q: 'An arc of length 11 cm is in a circle of radius 7 cm. Its angle is… (π = 22/7)', options: ['45°', '60°', '90°', '120°'], answer: 2, explain: '11/44 = 1/4 of the circle' },
      { topic: 'arc', q: 'In 1 minute, the minute hand of a clock turns through…', options: ['1°', '6°', '30°', '60°'], answer: 1, explain: '360° ÷ 60' },
      { topic: 'arc', q: 'The tip of a 14 cm minute hand moves how far in 15 minutes? (π = 22/7)', options: ['11 cm', '22 cm', '44 cm', '88 cm'], answer: 1, explain: '90° → (1/4) × 88' },
      { topic: 'arc', q: 'An arc of angle 90° has length 44 cm. The radius is… (π = 22/7)', options: ['7 cm', '14 cm', '28 cm', '56 cm'], answer: 2, explain: '2πr = 176 → r = 28' },
      { topic: 'arc', q: 'The perimeter of a quadrant of radius 14 cm is… (π = 22/7)', options: ['22 cm', '36 cm', '50 cm', '64 cm'], answer: 2, explain: '22 + 14 + 14' },

      { topic: 'segment', q: 'The area of a segment is…', options: ['Sector + triangle', 'Sector − triangle', 'Circle − sector', 'Triangle − sector'], answer: 1, explain: 'Take the triangle away from the sector.' },
      { topic: 'segment', q: 'When the angle at the centre is 90°, the triangle\'s area is…', options: ['r²', '½ r²', '(√3/4) r²', '2r²'], answer: 1, explain: 'Base r, height r.' },
      { topic: 'segment', q: 'When the angle at the centre is 60°, the triangle is…', options: ['Right-angled', 'Equilateral', 'Scalene', 'Obtuse'], answer: 1, explain: 'Two equal sides with a 60° angle between them.' },
      { topic: 'segment', q: 'When the angle at the centre is 120°, the triangle\'s area is…', options: ['½ r²', '(√3/4) r²', '(√3/2) r²', 'r²'], answer: 1, explain: 'Height r/2 and base √3 r.' },
      { topic: 'segment', q: 'A chord of a circle of radius 10 cm makes 90° at the centre. The minor segment is… (π = 3.14)', options: ['78.5 cm²', '50 cm²', '28.5 cm²', '235.5 cm²'], answer: 2, explain: '78.5 − 50' },
      { topic: 'segment', q: 'For the same circle (r = 10 cm, 90°), the major segment is… (π = 3.14)', options: ['285.5 cm²', '235.5 cm²', '264 cm²', '28.5 cm²'], answer: 0, explain: '314 − 28.5' },
      { topic: 'segment', q: 'A chord of a circle of radius 12 cm makes 120° at the centre. The segment is… (π = 3.14, √3 = 1.73)', options: ['150.72 cm²', '62.28 cm²', '88.44 cm²', '213 cm²'], answer: 2, explain: '150.72 − 62.28' },
      { topic: 'segment', q: 'A chord of a circle of radius 15 cm makes 60° at the centre. The minor segment is about… (π = 3.14, √3 = 1.73)', options: ['20.44 cm²', '117.75 cm²', '97.31 cm²', '686.06 cm²'], answer: 0, explain: '117.75 − 97.3125' },
      { topic: 'segment', q: 'A chord of a circle of radius 14 cm makes 90° at the centre. The minor segment is… (π = 22/7)', options: ['154 cm²', '98 cm²', '56 cm²', '42 cm²'], answer: 2, explain: '154 − 98' },

      { topic: 'apply', q: 'A horse is tied to a corner of a square field with a 5 m rope. It can graze… (π = 3.14)', options: ['78.5 m²', '19.625 m²', '39.25 m²', '25 m²'], answer: 1, explain: 'A quadrant: (1/4) × 3.14 × 25' },
      { topic: 'apply', q: 'If that rope is made 10 m, the extra grazing area is… (π = 3.14)', options: ['58.875 m²', '78.5 m²', '19.625 m²', '39.25 m²'], answer: 0, explain: '78.5 − 19.625' },
      { topic: 'apply', q: 'A 14 cm minute hand sweeps what area in 5 minutes? (π = 22/7)', options: ['154/3 cm²', '77/3 cm²', '154 cm²', '308/3 cm²'], answer: 0, explain: '30° → (1/12) × 616' },
      { topic: 'apply', q: 'An umbrella of radius 45 cm has 8 equally spaced ribs. The area between two ribs is… (π = 22/7)', options: ['22275/28 cm²', '22275/14 cm²', '2025/8 cm²', '22275/7 cm²'], answer: 0, explain: '(1/8) × (22/7) × 2025' },
      { topic: 'apply', q: 'A brooch of diameter 35 mm uses wire for the circle and 5 diameters. The total wire is… (π = 22/7)', options: ['110 mm', '175 mm', '285 mm', '250 mm'], answer: 2, explain: '110 + 5 × 35' },
      { topic: 'apply', q: 'Two non-overlapping wipers, each 25 cm long, sweep 115° each. The total area cleaned is… (π = 22/7)', options: ['158125/252 cm²', '158125/126 cm²', '158125/63 cm²', '1250 cm²'], answer: 1, explain: '2 × (115/360) × (22/7) × 625' },
      { topic: 'apply', q: 'A lighthouse lights a sector of 80° up to 16.5 km. The area is about… (π = 3.14)', options: ['189.97 km²', '379.94 km²', '854.87 km²', '94.99 km²'], answer: 0, explain: '(2/9) × 3.14 × 272.25' },
      { topic: 'apply', q: 'The hour hand of a clock is 6 cm long. The area it sweeps in 1 hour is… (π = 22/7)', options: ['66/7 cm²', '132/7 cm²', '33/7 cm²', '792/7 cm²'], answer: 0, explain: '30° → (1/12) × (22/7) × 36' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'basic', gen(mk) {
        const t = mk.pick(ANGLES.concat([180, 18, 20, 24, 90, 120, 60, 45]));
        const major = Math.random() < 0.3 && t < 180;
        const ang = major ? 360 - t : t;
        return {
          q: major ? `The minor sector of a circle has angle ${t}°. What fraction of the whole circle is the MAJOR sector?` : `A sector has angle ${t}°. What fraction of the whole circle is it?`,
          fields: [{ label: 'Fraction', answer: ang / 360, show: mk.frac(ang, 360), signed: true }],
          hint: major ? 'Major sector angle = 360° − minor angle. Then divide by 360.' : 'Fraction = θ/360. Simplify it.',
          steps: (major ? `Major sector angle = 360° − ${t}° = ${ang}°\n` : '') + `Fraction = ${ang}/360 = ${mk.frac(ang, 360)}`
        };
      } },
      { topic: 'sector', gen(mk) {
        let P, r, t, N, D, major;
        do {
          P = Math.random() < 0.5 ? PI.f : PI.d; r = P === PI.f ? 7 * mk.ri(1, 6) : mk.ri(2, 20);
          t = mk.pick(ANGLES); major = t < 180 && Math.random() < 0.3;
          N = (major ? 360 - t : t) * P.num * r * r; D = 360 * P.den;
        } while (!nice(N, D));
        const ang = major ? 360 - t : t, area = N / D, circ = P.num * r * r / P.den;
        return {
          q: major ? `In a circle of radius ${r} cm, the minor sector has angle ${t}°. Find the area of the MAJOR sector. (Use π = ${P.name})`
            : `Find the area of a sector of angle ${t}° in a circle of radius ${r} cm. (Use π = ${P.name})`,
          svg: sectorSvg(t),
          fields: [{ label: 'Area (cm²)', answer: area, show: dn(mk, area) }],
          hint: major ? `Major sector angle = 360° − ${t}°. Area = (θ/360) × πr².` : 'Area of sector = (θ/360) × πr².',
          steps: (major ? `Major sector angle = 360° − ${t}° = ${ang}°\n` : '') +
            `πr² = ${P.name} × ${r}² = ${dn(mk, circ)} cm²\nArea = (${ang}/360) × ${dn(mk, circ)} = ${mk.frac(ang, 360)} × ${dn(mk, circ)} = ${dn(mk, area)} cm²`
        };
      } },
      { topic: 'arc', gen(mk) {
        let P, r, t, N, D;
        const per = Math.random() < 0.45;
        do {
          P = Math.random() < 0.6 ? PI.f : PI.d; r = P === PI.f ? 7 * mk.ri(1, 6) : mk.ri(2, 25);
          t = mk.pick(ANGLES); N = t * 2 * P.num * r; D = 360 * P.den;
        } while (!nice(N, D));
        const arc = N / D, C = 2 * P.num * r / P.den, ans = per ? (N + 2 * r * D) / D : arc;
        return {
          q: `A sector of a circle of radius ${r} cm has angle ${t}°. Find the ${per ? 'perimeter of the sector' : 'length of its arc'}. (Use π = ${P.name})`,
          svg: sectorSvg(t),
          fields: [{ label: per ? 'Perimeter (cm)' : 'Arc length (cm)', answer: ans, show: dn(mk, ans) }],
          hint: per ? 'Perimeter = r + r + arc, where arc = (θ/360) × 2πr.' : 'Arc length = (θ/360) × 2πr.',
          steps: `2πr = 2 × ${P.name} × ${r} = ${dn(mk, C)} cm\nArc = (${t}/360) × ${dn(mk, C)} = ${mk.frac(t, 360)} × ${dn(mk, C)} = ${dn(mk, arc)} cm` +
            (per ? `\nPerimeter = ${r} + ${r} + ${dn(mk, arc)} = ${dn(mk, ans)} cm` : '')
        };
      } },
      { topic: 'arc', gen(mk) {
        let r, t, l;
        do { r = 7 * mk.ri(1, 6); t = mk.pick(ANGLES); } while ((t * 44 * r) % (360 * 7) !== 0);
        l = t * 44 * r / (360 * 7);
        const C = 44 * r / 7;
        if (Math.random() < 0.6) return {
          q: `An arc of length ${l} cm is in a circle of radius ${r} cm. Find the angle it makes at the centre. (Use π = 22/7)`,
          fields: [{ label: 'Angle (degrees)', answer: t, show: t + '°' }],
          hint: 'Arc = (θ/360) × 2πr. First find 2πr, then θ = arc ÷ 2πr × 360.',
          steps: `2πr = 2 × (22/7) × ${r} = ${C} cm\n(θ/360) × ${C} = ${l}\nθ/360 = ${l}/${C} = ${mk.frac(l, C)}\nθ = ${mk.frac(l, C)} × 360 = ${t}°`
        };
        return {
          q: `An arc of angle ${t}° has length ${l} cm. Find the radius of the circle. (Use π = 22/7)`,
          fields: [{ label: 'Radius (cm)', answer: r, show: String(r) }],
          hint: 'Arc = (θ/360) × 2πr. Put in the arc and θ, then solve for r.',
          steps: `(${t}/360) × 2 × (22/7) × r = ${l}\n${mk.frac(t, 360)} × (44/7) × r = ${l}\nr = ${l} × ${mk.frac(360, t)} × 7/44 = ${r} cm`
        };
      } },
      { topic: 'segment', gen(mk) {
        let P, r, N, D;
        do { P = Math.random() < 0.5 ? PI.f : PI.d; r = P === PI.f ? 7 * mk.ri(1, 6) : mk.ri(2, 20); N = P.num * r * r - 2 * P.den * r * r; D = 4 * P.den; } while (!nice(N, D) || !nice(P.num * r * r, 4 * P.den));
        const major = Math.random() < 0.35, sec = P.num * r * r / (4 * P.den), tri = r * r / 2, seg = N / D;
        const circ = P.num * r * r / P.den, majorSeg = (4 * P.num * r * r - N) / D;
        return {
          q: `A chord of a circle of radius ${r} cm makes a right angle at the centre. Find the area of the ${major ? 'MAJOR' : 'minor'} segment. (Use π = ${P.name})`,
          svg: sectorSvg(90, 'segment'),
          fields: [{ label: 'Area (cm²)', answer: major ? majorSeg : seg, show: dn(mk, major ? majorSeg : seg) }],
          hint: 'Minor segment = sector − triangle. For 90°, the triangle is ½ × r × r.' + (major ? ' Major segment = πr² − minor segment.' : ''),
          steps: `Sector = (90/360) × ${P.name} × ${r}² = ${dn(mk, sec)} cm²\nTriangle = ½ × ${r} × ${r} = ${dn(mk, tri)} cm²\nMinor segment = ${dn(mk, sec)} − ${dn(mk, tri)} = ${dn(mk, seg)} cm²` +
            (major ? `\nπr² = ${dn(mk, circ)} cm²\nMajor segment = ${dn(mk, circ)} − ${dn(mk, seg)} = ${dn(mk, majorSeg)} cm²` : '')
        };
      } },
      { topic: 'segment', gen(mk) {
        const t = mk.pick([60, 120]), r = 6 * mk.ri(1, 5), major = Math.random() < 0.3;
        // π = 3.14, √3 = 1.73. Work in 1/36000 units so every value is exact.
        const secN = t * 314 * r * r, triN = 90 * 173 * r * r, segN = secN - triN, circN = 360 * 314 * r * r;
        const sec = secN / 36000, tri = triN / 36000, seg = segN / 36000, majorSeg = (circN - segN) / 36000;
        return {
          q: `A chord of a circle of radius ${r} cm makes an angle of ${t}° at the centre. Find the area of the ${major ? 'MAJOR' : 'minor'} segment. (Use π = 3.14 and √3 = 1.73)`,
          svg: sectorSvg(t, 'segment'),
          fields: [{ label: 'Area (cm²)', answer: major ? majorSeg : seg, show: dn(mk, major ? majorSeg : seg) }],
          hint: `Minor segment = sector − triangle. For ${t}°, the triangle's area is (√3/4) × r².` + (major ? ' Then major segment = πr² − minor segment.' : ''),
          steps: `Sector = (${t}/360) × 3.14 × ${r}² = ${dn(mk, sec)} cm²\n` +
            (t === 60 ? 'The triangle is equilateral (60° between equal radii).\n' : 'Drop a perpendicular from the centre: height r/2, chord √3 × r.\n') +
            `Triangle = (√3/4) × ${r}² = (1.73/4) × ${r * r} = ${dn(mk, tri)} cm²\nMinor segment = ${dn(mk, sec)} − ${dn(mk, tri)} = ${dn(mk, seg)} cm²` +
            (major ? `\nπr² = 3.14 × ${r * r} = ${dn(mk, circN / 36000)} cm²\nMajor segment = ${dn(mk, circN / 36000)} − ${dn(mk, seg)} = ${dn(mk, majorSeg)} cm²` : '')
        };
      } },
      { topic: 'apply', gen(mk) {
        let P, L, unit, n, ang, N, D, area;
        const hour = Math.random() < 0.3, dist = Math.random() < 0.35;
        do {
          P = Math.random() < 0.6 ? PI.f : PI.d; L = P === PI.f ? 7 * mk.ri(1, 3) : mk.ri(3, 20);
          n = hour ? mk.ri(1, 6) : mk.pick([5, 10, 15, 20, 25, 30, 35, 40, 45]); ang = hour ? 30 * n : 6 * n;
          N = dist ? ang * 2 * P.num * L : ang * P.num * L * L; D = 360 * P.den;
        } while (!nice(N, D));
        area = N / D; unit = hour ? `${n} hour${n > 1 ? 's' : ''}` : `${n} minutes`;
        const per = hour ? '30° per hour' : '6° per minute';
        return {
          q: `The ${hour ? 'hour' : 'minute'} hand of a clock is ${L} cm long. Find the ${dist ? 'distance moved by its tip' : 'area swept by it'} in ${unit}. (Use π = ${P.name})`,
          fields: [{ label: dist ? 'Distance (cm)' : 'Area (cm²)', answer: area, show: dn(mk, area) }],
          hint: `The ${hour ? 'hour' : 'minute'} hand turns ${per}. Then use ${dist ? 'arc = (θ/360) × 2πr' : 'area = (θ/360) × πr²'}.`,
          steps: `Angle = ${n} × ${hour ? 30 : 6}° = ${ang}°\n` + (dist
            ? `Distance = (${ang}/360) × 2 × ${P.name} × ${L} = ${mk.frac(ang, 360)} × ${dn(mk, 2 * P.num * L / P.den)} = ${dn(mk, area)} cm`
            : `Area = (${ang}/360) × ${P.name} × ${L}² = ${mk.frac(ang, 360)} × ${dn(mk, P.num * L * L / P.den)} = ${dn(mk, area)} cm²`)
        };
      } },
      { topic: 'apply', gen(mk) {
        for (;;) {
          const v = mk.pick(['horse', 'horse3', 'umbrella', 'wiper']);
          const P = Math.random() < 0.5 ? PI.f : PI.d, r = P === PI.f ? 7 * mk.ri(1, 6) : mk.ri(3, 30);
          if (v === 'horse' || v === 'horse3') {
            const t = v === 'horse' ? 90 : 60, N = t * P.num * r * r, D = 360 * P.den;
            if (!nice(N, D)) continue;
            return {
              q: `A goat is tied with a ${r} m rope to one corner of a field shaped like ${v === 'horse' ? 'a square (side longer than the rope)' : 'an equilateral triangle (side longer than the rope)'}. Find the area it can graze. (Use π = ${P.name})`,
              svg: sectorSvg(t),
              fields: [{ label: 'Area (m²)', answer: N / D, show: dn(mk, N / D) }],
              hint: `The corner angle is ${t}°, so the goat grazes a sector of angle ${t}° and radius ${r} m.`,
              steps: `Corner angle = ${t}° → sector of radius ${r} m\nArea = (${t}/360) × ${P.name} × ${r}² = ${mk.frac(t, 360)} × ${dn(mk, P.num * r * r / P.den)} = ${dn(mk, N / D)} m²`
            };
          }
          if (v === 'umbrella') {
            const n = mk.pick([4, 5, 6, 8, 9, 10, 12]), N = P.num * r * r, D = n * P.den;
            if (!nice(N, D)) continue;
            return {
              q: `An umbrella has ${n} equally spaced ribs. Treating it as a flat circle of radius ${r} cm, find the area between two neighbouring ribs. (Use π = ${P.name})`,
              fields: [{ label: 'Area (cm²)', answer: N / D, show: dn(mk, N / D) }],
              hint: `${n} ribs make ${n} equal sectors, each of angle 360°/${n}.`,
              steps: `Angle between ribs = 360°/${n} = ${360 / n}°\nArea = (1/${n}) × ${P.name} × ${r}² = (1/${n}) × ${dn(mk, P.num * r * r / P.den)} = ${dn(mk, N / D)} cm²`
            };
          }
          const t = mk.pick([90, 100, 105, 110, 115, 120, 135]), N = 2 * t * P.num * r * r, D = 360 * P.den;
          if (!nice(N, D)) continue;
          return {
            q: `A car has two wipers that do not overlap. Each blade is ${r} cm long and sweeps an angle of ${t}°. Find the total area cleaned. (Use π = ${P.name})`,
            fields: [{ label: 'Total area (cm²)', answer: N / D, show: dn(mk, N / D) }],
            hint: 'Each wiper sweeps a sector. Find one sector and double it.',
            steps: `One wiper = (${t}/360) × ${P.name} × ${r}² = ${dn(mk, N / D / 2)} cm²\nTwo wipers = 2 × ${dn(mk, N / D / 2)} = ${dn(mk, N / D)} cm²`
          };
        }
      } }
    ],

    match: [
      { title: 'Formulas', pairs: [
        ['Area of a circle', 'πr²'],
        ['Circumference', '2πr'],
        ['Area of a sector', '(θ/360) × πr²'],
        ['Length of an arc', '(θ/360) × 2πr'],
        ['Perimeter of a sector', '2r + arc length'],
        ['Area of a segment', 'Sector − triangle']
      ] },
      { title: 'Angle → Fraction of Circle', pairs: [
        ['90°', '1/4'],
        ['60°', '1/6'],
        ['120°', '1/3'],
        ['180°', '1/2'],
        ['30°', '1/12'],
        ['45°', '1/8']
      ] },
      { title: 'Sector → Answer (π = 22/7)', pairs: [
        ['Area: r = 6 cm, 60°', '132/7 cm²'],
        ['Area: r = 21 cm, 60°', '231 cm²'],
        ['Arc: r = 21 cm, 60°', '22 cm'],
        ['Perimeter: r = 7 cm, 90°', '25 cm'],
        ['Area: r = 14 cm, 90°', '154 cm²'],
        ['Minute hand 14 cm, 5 minutes', '154/3 cm²']
      ] },
      { title: 'Segments', pairs: [
        ['Triangle for 90° at the centre', '½ r²'],
        ['Triangle for 60° at the centre', 'Equilateral: (√3/4) r²'],
        ['Triangle for 120° at the centre', '(√3/4) r², height r/2'],
        ['Minor segment: r = 10 cm, 90° (π = 3.14)', '28.5 cm²'],
        ['Major sector: r = 10 cm, 90° (π = 3.14)', '235.5 cm²'],
        ['Segment: r = 12 cm, 120° (π = 3.14, √3 = 1.73)', '88.44 cm²']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'Find the area of a sector of a circle of radius 6 cm with angle 60°. (Use π = 22/7)',
        keypoints: [{ text: '(60/360) × (22/7) × 36 = 132/7 cm²', kw: ['132/7|18.86|18.857'] }],
        model: 'Area = (θ/360) × πr² = (60/360) × (22/7) × 6²\n= (1/6) × (22/7) × 36 = 132/7 cm² (≈ 18.86 cm²)' },
      { marks: 1, q: 'Find the length of an arc of a circle of radius 21 cm that makes 60° at the centre. (Use π = 22/7)',
        keypoints: [{ text: '(60/360) × 2 × (22/7) × 21 = 22 cm', kw: ['22'] }],
        model: 'Arc = (θ/360) × 2πr = (1/6) × 2 × (22/7) × 21 = (1/6) × 132 = 22 cm' },
      { marks: 1, q: 'Through what angle does the minute hand of a clock turn in 20 minutes?',
        keypoints: [{ text: '20 × 6° = 120°', kw: ['120'] }],
        model: 'The minute hand turns 360° in 60 minutes, i.e. 6° per minute.\nIn 20 minutes: 20 × 6° = 120°' },
      { marks: 1, q: 'Find the area of a quadrant of a circle whose circumference is 22 cm. (Use π = 22/7)',
        keypoints: [{ text: 'r = 7/2 cm, quadrant = 77/8 cm²', kw: ['77/8|9.625'] }],
        model: '2πr = 22 → 2 × (22/7) × r = 22 → r = 7/2 cm\nQuadrant = (1/4) × πr² = (1/4) × (22/7) × (49/4) = 77/8 cm²' },
      { marks: 2, q: 'The minute hand of a clock is 14 cm long. Find the area swept by it in 5 minutes. (Use π = 22/7)',
        keypoints: [
          { text: 'Angle = 5 × 6° = 30°', kw: ['30'] },
          { text: 'Area = (30/360) × (22/7) × 196 = 154/3 cm²', kw: ['154/3|51.33'] }
        ],
        model: 'Angle in 5 minutes = 5 × 6° = 30°\nArea = (30/360) × (22/7) × 14²\n= (1/12) × 616 = 154/3 cm² (≈ 51.33 cm²)' },
      { marks: 2, q: 'Find the perimeter of a sector of a circle of radius 7 cm with angle 90°. (Use π = 22/7)',
        keypoints: [
          { text: 'Arc = (90/360) × 2 × (22/7) × 7 = 11 cm', kw: ['11'] },
          { text: 'Perimeter = 7 + 7 + 11 = 25 cm', kw: ['25'] }
        ],
        model: 'Arc = (θ/360) × 2πr = (1/4) × 44 = 11 cm\nPerimeter = r + r + arc = 7 + 7 + 11 = 25 cm' },
      { marks: 2, q: 'A horse is tied to a peg at one corner of a square grass field of side 15 m with a rope 5 m long. Find the area of the field the horse can graze. (Use π = 3.14)',
        keypoints: [
          { text: 'It grazes a quadrant (corner angle 90°) of radius 5 m', kw: ['90|quadrant'] },
          { text: '(1/4) × 3.14 × 25 = 19.625 m²', kw: ['19.625|19.63'] }
        ],
        model: 'The corner of the square is 90°, so the horse grazes a quadrant of radius 5 m.\nArea = (90/360) × 3.14 × 5² = (1/4) × 78.5 = 19.625 m²' },
      { marks: 2, q: 'An umbrella has 8 ribs which are equally spaced. Assuming the umbrella to be a flat circle of radius 45 cm, find the area between two consecutive ribs. (Use π = 22/7)',
        keypoints: [
          { text: 'Each sector is 360°/8 = 45°', kw: ['45°|1/8'] },
          { text: '(1/8) × (22/7) × 2025 = 22275/28 cm²', kw: ['22275/28|795.5'] }
        ],
        model: '8 ribs make 8 equal sectors, each of angle 45°.\nArea = (45/360) × (22/7) × 45² = (1/8) × (22/7) × 2025 = 22275/28 cm² (≈ 795.54 cm²)' },
      { marks: 3, q: 'A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of (i) the minor segment (ii) the major sector. (Use π = 3.14)',
        keypoints: [
          { text: 'Sector = (1/4) × 3.14 × 100 = 78.5 cm²', kw: ['78.5'] },
          { text: 'Triangle = ½ × 10 × 10 = 50 cm²; minor segment = 28.5 cm²', kw: ['28.5'] },
          { text: 'Major sector = 314 − 78.5 = 235.5 cm²', kw: ['235.5'] }
        ],
        model: 'Minor sector = (90/360) × 3.14 × 10² = 78.5 cm²\nTriangle = ½ × 10 × 10 = 50 cm²\n(i) Minor segment = 78.5 − 50 = 28.5 cm²\n(ii) Major sector = πr² − minor sector = 314 − 78.5 = 235.5 cm²' },
      { marks: 3, q: 'In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find (i) the length of the arc (ii) the area of the sector formed by the arc (iii) the area of the segment formed by the corresponding chord. (Use π = 22/7)',
        keypoints: [
          { text: 'Arc = 22 cm', kw: ['22'] },
          { text: 'Sector = 231 cm²', kw: ['231'] },
          { text: 'Segment = (231 − 441√3/4) cm²', kw: ['441'] }
        ],
        model: '(i) Arc = (60/360) × 2 × (22/7) × 21 = 22 cm\n(ii) Sector = (60/360) × (22/7) × 21² = 231 cm²\n(iii) The triangle is equilateral (60°), area = (√3/4) × 21² = 441√3/4 cm²\nSegment = (231 − 441√3/4) cm²' },
      { marks: 3, q: 'A chord of a circle of radius 15 cm subtends an angle of 60° at the centre. Find the areas of the minor and major segments. (Use π = 3.14 and √3 = 1.73)',
        keypoints: [
          { text: 'Sector = (1/6) × 3.14 × 225 = 117.75 cm²', kw: ['117.75'] },
          { text: 'Triangle = (1.73/4) × 225 = 97.3125 cm²', kw: ['97.31'] },
          { text: 'Minor segment = 20.4375 cm²', kw: ['20.4'] },
          { text: 'Major segment = 706.5 − 20.4375 = 686.0625 cm²', kw: ['686'] }
        ],
        model: 'Sector = (60/360) × 3.14 × 15² = 117.75 cm²\nThe triangle is equilateral: area = (√3/4) × 15² = (1.73/4) × 225 = 97.3125 cm²\nMinor segment = 117.75 − 97.3125 = 20.4375 cm²\nArea of circle = 3.14 × 225 = 706.5 cm²\nMajor segment = 706.5 − 20.4375 = 686.0625 cm²' },
      { marks: 3, q: 'A chord of a circle of radius 12 cm subtends an angle of 120° at the centre. Find the area of the corresponding segment. (Use π = 3.14 and √3 = 1.73)',
        keypoints: [
          { text: 'Sector = (1/3) × 3.14 × 144 = 150.72 cm²', kw: ['150.72'] },
          { text: 'Triangle = (√3/4) × 144 = 36√3 = 62.28 cm²', kw: ['62.28'] },
          { text: 'Segment = 88.44 cm²', kw: ['88.44'] }
        ],
        model: 'Sector = (120/360) × 3.14 × 12² = 150.72 cm²\nDraw OM ⊥ chord AB. ∠AOM = 60°, so OM = 12 × ½ = 6 cm and AM = 12 × (√3/2) = 6√3 cm, AB = 12√3 cm\nTriangle = ½ × 12√3 × 6 = 36√3 = 36 × 1.73 = 62.28 cm²\nSegment = 150.72 − 62.28 = 88.44 cm²' },
      { marks: 3, q: 'A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find (i) the total length of the silver wire (ii) the area of each sector of the brooch. (Use π = 22/7)',
        keypoints: [
          { text: 'Circumference = (22/7) × 35 = 110 mm', kw: ['110'] },
          { text: 'Total wire = 110 + 5 × 35 = 285 mm', kw: ['285'] },
          { text: 'Each sector = (1/10) × (22/7) × (35/2)² = 385/4 mm²', kw: ['385/4|96.25'] }
        ],
        model: '(i) Circumference = πd = (22/7) × 35 = 110 mm\nWire = 110 + 5 × 35 = 285 mm\n(ii) Each of the 10 sectors = (1/10) × πr² = (1/10) × (22/7) × (35/2)²\n= (1/10) × (22/7) × (1225/4) = 385/4 mm² (= 96.25 mm²)' },
      { marks: 3, q: 'A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm sweeping through an angle of 115°. Find the total area cleaned at each sweep of the blades. (Use π = 22/7)',
        keypoints: [
          { text: 'One wiper = (115/360) × (22/7) × 625', kw: ['115', '625'] },
          { text: 'Total = 2 × that = 158125/126 cm²', kw: ['158125/126|1254.96|1255'] }
        ],
        model: 'Each blade sweeps a sector of radius 25 cm and angle 115°.\nOne sector = (115/360) × (22/7) × 25²\nTotal = 2 × (115/360) × (22/7) × 625 = 158125/126 cm² (≈ 1254.96 cm²)' },
      { marks: 3, q: 'To warn ships of underwater rocks, a lighthouse spreads a red-coloured light over a sector of angle 80° to a distance of 16.5 km. Find the area of the sea over which the ships are warned. (Use π = 3.14)',
        keypoints: [
          { text: 'Area = (80/360) × 3.14 × 16.5²', kw: ['80', '16.5'] },
          { text: '≈ 189.97 km²', kw: ['189.97|190'] }
        ],
        model: 'Area of sector = (80/360) × 3.14 × 16.5²\n= (2/9) × 3.14 × 272.25\n= 189.97 km² (approx.)' },
      { marks: 5, q: 'A round table cover has six equal designs. The radius of the cover is 28 cm. Each design is a segment cut off by a chord that makes 60° at the centre. Find the cost of making the designs at the rate of ₹0.35 per cm². (Use π = 22/7 and √3 = 1.7)',
        keypoints: [
          { text: 'Sector = (60/360) × (22/7) × 784 = 1232/3 cm²', kw: ['1232/3|410.67'] },
          { text: 'Equilateral triangle = (1.7/4) × 784 = 333.2 cm²', kw: ['333.2'] },
          { text: 'One design ≈ 77.47 cm²; six designs = 464.8 cm²', kw: ['464.8'] },
          { text: 'Cost = 464.8 × 0.35 = ₹162.68', kw: ['162.68'] }
        ],
        model: 'Each design is a segment with angle 60° and r = 28 cm.\nSector = (60/360) × (22/7) × 28² = 1232/3 cm² (≈ 410.67 cm²)\nThe triangle is equilateral: (√3/4) × 28² = (1.7/4) × 784 = 333.2 cm²\nOne design = 1232/3 − 333.2 ≈ 77.47 cm²\nSix designs = 6 × (1232/3 − 333.2) = 2464 − 1999.2 = 464.8 cm²\nCost = 464.8 × 0.35 = ₹162.68' },
      { marks: 5, q: 'Find the area of the segment AYB of a circle of radius 21 cm, if ∠AOB = 120°. (Use π = 22/7 and √3 = 1.73)',
        keypoints: [
          { text: 'Sector OAYB = (120/360) × (22/7) × 441 = 462 cm²', kw: ['462'] },
          { text: 'OM ⊥ AB: OM = 21/2 cm, AM = 21√3/2 cm', kw: ['21/2|10.5'] },
          { text: 'Triangle OAB = 441√3/4 ≈ 190.73 cm²', kw: ['441|190.7'] },
          { text: 'Segment = 462 − 190.73 ≈ 271.27 cm²', kw: ['271.2|271.3'] }
        ],
        model: 'Sector OAYB = (120/360) × (22/7) × 21² = 462 cm²\nDraw OM ⊥ AB. Then ∠AOM = 60°.\nOM = 21 × cos 60° = 21/2 cm, AM = 21 × sin 60° = 21√3/2 cm, so AB = 21√3 cm\nArea of △OAB = ½ × 21√3 × 21/2 = 441√3/4 cm² = 441 × 1.73/4 = 190.7325 cm²\nSegment AYB = 462 − 190.7325 = 271.2675 ≈ 271.27 cm²' }
    ]
  });
})();
