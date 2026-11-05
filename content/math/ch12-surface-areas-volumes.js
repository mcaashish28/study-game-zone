// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 12: Surface Areas and Volumes
// In the syllabus: surface areas and volumes of combinations of any two of cubes, cuboids, spheres,
// hemispheres and right circular cylinders/cones.
// Not in the syllabus: converting one solid into another (melting/recasting), frustum of a cone.
// Write powers with Unicode superscripts (r², cm³): the app turns a digit after a letter or ')' into a subscript.
(function () {
  // Round away floating-point dust: every answer here ends within 4 decimal places.
  const R = x => Math.round(x * 1e4) / 1e4;
  // True if x has at most p decimal places.
  const nice = (x, p = 2) => Math.abs(x * 10 ** p - Math.round(x * 10 ** p)) < 1e-6;
  const dn = (mk, x) => mk.num(R(x));
  const pi = x => R(22 * x / 7); // π × x with π = 22/7
  const sq = x => R(x * x);
  const cube = x => R(x * x * x);
  // Right cones with a whole-number-friendly slant height: [r, h, l] with l = √(r² + h²), π = 22/7 friendly.
  const TOY = [[3.5, 12, 12.5], [7, 24, 25], [10.5, 14, 17.5], [14, 10.5, 17.5], [21, 20, 29], [21, 28, 35], [28, 21, 35], [14, 48, 50], [35, 12, 37], [7, 24, 25], [3.5, 12, 12.5]];
  const SMALL = [[0.7, 2.4, 2.5], [1.4, 4.8, 5], [2.1, 2.8, 3.5], [2.8, 2.1, 3.5], [2.1, 7.2, 7.5], [4.2, 5.6, 7], [3.5, 12, 12.5], [7, 24, 25], [1.05, 1.4, 1.75]];
  const RAD = [0.7, 1.4, 2.1, 2.8, 3.5, 4.2, 5.6, 7, 10.5, 14, 1.75, 0.35, 1.05];

  const F = [
    ['curved surface area of a cylinder', '2πrh'],
    ['total surface area of a cylinder', '2πr(r + h)'],
    ['volume of a cylinder', 'πr²h'],
    ['curved surface area of a cone', 'πrl'],
    ['total surface area of a cone', 'πr(l + r)'],
    ['volume of a cone', '(1/3)πr²h'],
    ['surface area of a sphere', '4πr²'],
    ['volume of a sphere', '(4/3)πr³'],
    ['curved surface area of a hemisphere', '2πr²'],
    ['total surface area of a hemisphere', '3πr²'],
    ['volume of a hemisphere', '(2/3)πr³'],
    ['slant height of a cone', '√(r² + h²)'],
    ['total surface area of a cuboid', '2(lb + bh + hl)'],
    ['volume of a cuboid', 'lbh'],
    ['total surface area of a cube', '6a²'],
    ['volume of a cube', 'a³']
  ];

  SWG.addChapter('math', {
    id: 'math-ch12',
    number: 12,
    title: 'Surface Areas and Volumes',
    icon: '🧊',

    topics: {
      formulas: 'Basic Formulas',
      sa: 'Surface Area of Combined Solids',
      vol: 'Volume of Combined Solids',
      word: 'Real-life Problems'
    },

    summary: [
      'Cuboid: TSA = 2(lb + bh + hl), volume = lbh. Cube: TSA = 6a², volume = a³.',
      'Cylinder: CSA = 2πrh, TSA = 2πr(r + h), volume = πr²h.',
      'Cone: slant height l = √(r² + h²), CSA = πrl, TSA = πr(l + r), volume = (1/3)πr²h.',
      'Sphere: surface area = 4πr², volume = (4/3)πr³. Hemisphere: CSA = 2πr², TSA = 3πr², volume = (2/3)πr³.',
      'Surface area of a combined solid = add the areas you can SEE. Faces that are joined together (hidden) are not counted.',
      'Volume of a combined solid = add the volumes of the parts. If a part is scooped or hollowed out, subtract its volume.',
      'Draw a rough figure, write the radius and height of each part, and keep units the same (cm with cm). Area is in cm², volume in cm³.',
      'Use the value of π the question gives (22/7 or 3.14). 1000 cm³ = 1 litre, 1 m³ = 1000 litres, 1 m² = 10000 cm².'
    ],

    flashcards: [
      { topic: 'formulas', front: 'Cuboid (length l, breadth b, height h): TSA, lateral surface area, volume', back: 'TSA = 2(lb + bh + hl)\nLateral (4 walls) = 2h(l + b)\nVolume = lbh' },
      { topic: 'formulas', front: 'Cube (edge a): TSA, lateral surface area, volume', back: 'TSA = 6a²\nLateral (4 walls) = 4a²\nVolume = a³' },
      { topic: 'formulas', front: 'Cylinder: curved surface area (CSA)', back: 'CSA = 2πrh\n(the label around a tin)' },
      { topic: 'formulas', front: 'Cylinder: total surface area (TSA)', back: 'TSA = 2πrh + 2πr² = 2πr(r + h)\n(curved part + top + bottom)' },
      { topic: 'formulas', front: 'Volume of a cylinder', back: 'V = πr²h\n(area of base × height)' },
      { topic: 'formulas', front: 'Slant height of a cone', back: 'l = √(r² + h²)\n(r, h and l make a right triangle)' },
      { topic: 'formulas', front: 'Cone: curved surface area and total surface area', back: 'CSA = πrl\nTSA = πrl + πr² = πr(l + r)' },
      { topic: 'formulas', front: 'Volume of a cone', back: 'V = (1/3)πr²h\nA cone holds one third of a cylinder with the same base and height.' },
      { topic: 'formulas', front: 'Sphere: surface area and volume', back: 'Surface area = 4πr²\nVolume = (4/3)πr³' },
      { topic: 'formulas', front: 'Hemisphere: CSA, TSA and volume', back: 'CSA (curved bowl) = 2πr²\nTSA (bowl + flat circle) = 3πr²\nVolume = (2/3)πr³' },
      { topic: 'formulas', front: 'Which value of π should you use?', back: 'The one the question gives: 22/7 or 3.14.\nWith 22/7, radii like 7, 3.5, 14, 0.7 cancel nicely.' },
      { topic: 'formulas', front: 'Units to remember', back: 'Area: cm², m². Volume: cm³, m³.\n1 m² = 10000 cm²\n1 m³ = 1000000 cm³ = 1000 litres\n1000 cm³ = 1 litre' },
      { topic: 'formulas', front: 'Find the slant height of a cone with r = 7 cm, h = 24 cm.', back: 'l = √(49 + 576) = √625 = 25 cm' },

      { topic: 'sa', front: 'Surface area of a combined solid: the golden rule', back: 'Add only the surfaces you can see from outside.\nWhere two solids are joined, those faces are hidden — do NOT count them.\nSo you usually use CSA (curved surface area), not TSA, of each part.' },
      { topic: 'sa', front: 'Toy: a cone mounted on a hemisphere of the same radius. Surface area formula?', back: 'CSA of cone + CSA of hemisphere\n= πrl + 2πr²\n(the flat circles are joined, so they are hidden)' },
      { topic: 'sa', front: 'Toy: cone of radius 3.5 cm on a hemisphere of the same radius. Total height 15.5 cm. Find its TSA. (π = 22/7)', back: 'Cone height h = 15.5 − 3.5 = 12 cm\nl = √(3.5² + 12²) = √156.25 = 12.5 cm\nTSA = πrl + 2πr² = 22/7 × 3.5 × (12.5 + 7) = 11 × 19.5 = 214.5 cm²' },
      { topic: 'sa', front: 'Capsule: a cylinder with a hemisphere at each end. Surface area formula?', back: 'CSA of cylinder + 2 × CSA of hemisphere\n= 2πrh + 4πr² = 2πr(h + 2r)\n(h = length of the cylinder part only)' },
      { topic: 'sa', front: 'A capsule is 14 mm long with diameter 5 mm. Find its surface area. (π = 22/7)', back: 'r = 2.5 mm, cylinder part h = 14 − 5 = 9 mm\nSA = 2πr(h + 2r) = 2 × 22/7 × 2.5 × 14 = 220 mm²' },
      { topic: 'sa', front: 'Tent: a cylinder with a cone on top. Canvas needed?', back: 'CSA of cylinder + CSA of cone\n= 2πrh + πrl = πr(2h + l)\n(no canvas on the floor or where cone meets cylinder)' },
      { topic: 'sa', front: 'Tent: cylinder 2.1 m high, diameter 4 m, cone slant height 2.8 m. Canvas area? Cost at ₹500 per m²?', back: 'r = 2 m\nArea = πr(2h + l) = 22/7 × 2 × (4.2 + 2.8) = 22/7 × 2 × 7 = 44 m²\nCost = 44 × 500 = ₹22000' },
      { topic: 'sa', front: 'Two cubes, each of volume 64 cm³, are joined end to end. Surface area of the cuboid formed?', back: 'Edge = 4 cm. Cuboid 8 × 4 × 4\nTSA = 2(32 + 16 + 32) = 160 cm²\n(or 6a² + 6a² − 2a² = 10a² = 160)' },
      { topic: 'sa', front: 'A cube of edge 5 cm has a hemisphere (diameter 4.2 cm) on top. Find its total surface area. (π = 22/7)', back: 'TSA = 6a² − πr² + 2πr² = 6a² + πr²\n= 150 + 22/7 × 2.1 × 2.1 = 150 + 13.86 = 163.86 cm²' },
      { topic: 'sa', front: 'A hemisphere sits on one face of a cube. Why do we ADD πr²?', back: 'We remove the circle covered by the hemisphere (−πr²) but add its curved bowl (+2πr²).\nNet change = +πr²' },
      { topic: 'sa', front: 'A cube of edge 7 cm has a hemisphere on top. Greatest possible diameter? Surface area then? (π = 22/7)', back: 'Greatest diameter = 7 cm (the edge), r = 3.5\nSA = 6a² + πr² = 294 + 38.5 = 332.5 cm²' },
      { topic: 'sa', front: 'A hemispherical depression of diameter l is cut from one face of a cube of edge l. Surface area left?', back: '6l² − πr² + 2πr² = 6l² + π(l/2)²\n= (l²/4)(24 + π)' },
      { topic: 'sa', front: 'Vessel: hollow hemisphere with a hollow cylinder on top. Diameter 14 cm, total height 13 cm. Inner surface area? (π = 22/7)', back: 'r = 7, cylinder height = 13 − 7 = 6 cm\nArea = 2πr² + 2πrh = 2πr(r + h) = 2 × 22/7 × 7 × 13 = 572 cm²' },
      { topic: 'sa', front: 'Wooden article: a cylinder (h = 10 cm, r = 3.5 cm) with a hemisphere scooped out of each end. Total surface area? (π = 22/7)', back: '2πrh + 2 × 2πr² = 2πr(h + 2r)\n= 2 × 22/7 × 3.5 × 17 = 374 cm²\n(each scooped bowl ADDS its curved area)' },
      { topic: 'sa', front: 'A cone (same height and base) is hollowed out of a solid cylinder: h = 2.4 cm, r = 0.7 cm. Total surface area left? (π = 22/7)', back: 'l = √(0.49 + 5.76) = 2.5 cm\nTSA = 2πrh + πr² + πrl = πr(2h + r + l)\n= 22/7 × 0.7 × (4.8 + 0.7 + 2.5) = 2.2 × 8 = 17.6 ≈ 18 cm²' },
      { topic: 'sa', front: 'Bird-bath: a cylinder (h = 1.45 m, r = 30 cm) with a hemispherical bowl at the top. Total surface area? (π = 22/7)', back: '2πrh + 2πr² = 2πr(h + r)\n= 2 × 22/7 × 30 × (145 + 30) = 33000 cm² = 3.3 m²' },

      { topic: 'vol', front: 'Volume of a combined solid: the rule', back: 'Joined solids → ADD the volumes of the parts.\nScooped or hollowed out → SUBTRACT the volume removed.\n(Unlike surface area, nothing is "hidden" in volume.)' },
      { topic: 'vol', front: 'Volume of a toy = cone on a hemisphere (same radius r, cone height h)', back: '(1/3)πr²h + (2/3)πr³ = (1/3)πr²(h + 2r)' },
      { topic: 'vol', front: 'A solid is a cone on a hemisphere, both of radius 1 cm, cone height 1 cm. Volume in terms of π?', back: '(2/3)π(1)³ + (1/3)π(1)²(1) = (2/3)π + (1/3)π = π cm³' },
      { topic: 'vol', front: 'Volume of a capsule (cylinder part h, radius r)', back: 'πr²h + 2 × (2/3)πr³ = πr²h + (4/3)πr³' },
      { topic: 'vol', front: 'Rachel\'s model: a cylinder with a cone at each end. Diameter 3 cm, total length 12 cm, each cone 2 cm high. Volume of air inside? (π = 22/7)', back: 'r = 1.5, cylinder length = 12 − 4 = 8 cm\nV = πr²(8) + 2 × (1/3)πr²(2) = 18π + 3π = 21π = 66 cm³' },
      { topic: 'vol', front: 'Gulab jamun: cylinder with two hemispherical ends, length 5 cm, diameter 2.8 cm. Syrup = 30% of volume. Syrup in 45 of them?', back: 'r = 1.4, cylinder part = 5 − 2.8 = 2.2 cm\nOne = πr²(2.2) + (4/3)πr³ ≈ 13.55 + 11.50 = 25.05 cm³\n45 × 25.05 × 30/100 ≈ 338 cm³' },
      { topic: 'vol', front: 'Pen stand: cuboid 15 × 10 × 3.5 cm with 4 conical depressions (r = 0.5 cm, depth 1.4 cm). Volume of wood? (π = 22/7)', back: 'Cuboid = 525 cm³\n4 cones = 4 × (1/3) × 22/7 × 0.25 × 1.4 ≈ 1.47 cm³\nWood = 525 − 1.47 = 523.53 cm³' },
      { topic: 'vol', front: 'A cone with the same base and height is hollowed out of a cylinder. What fraction of the cylinder is left?', back: 'πr²h − (1/3)πr²h = (2/3)πr²h\nTwo thirds of the cylinder is left.' },
      { topic: 'vol', front: 'Iron pole: cylinder (h = 220 cm, diameter 24 cm) with a cylinder (h = 60 cm, r = 8 cm) on top. Mass if 1 cm³ weighs 8 g? (π = 3.14)', back: 'V = π(12² × 220 + 8² × 60) = π(31680 + 3840) = 35520 × 3.14 = 111532.8 cm³\nMass = 8 × 111532.8 = 892262.4 g ≈ 892.26 kg' },
      { topic: 'vol', front: 'A cone (h = 120 cm, r = 60 cm) on a hemisphere (r = 60 cm) is put in a full cylinder of water (r = 60 cm, h = 180 cm). Water left? (π = 22/7)', back: 'Cylinder = π × 3600 × 180 = 648000π\nSolid = (1/3)π × 3600 × 120 + (2/3)π × 216000 = 144000π + 144000π\nLeft = 360000π ≈ 1131428.57 cm³ ≈ 1.131 m³' },
      { topic: 'vol', front: 'A spherical glass vessel (diameter 8.5 cm) has a cylindrical neck 8 cm long, 2 cm wide. Volume? (π = 3.14)', back: 'Sphere: (4/3) × 3.14 × 4.25³ ≈ 321.39 cm³\nNeck: 3.14 × 1² × 8 = 25.12 cm³\nTotal ≈ 346.51 cm³' },

      { topic: 'word', front: 'Steps for a real-life solid problem', back: '1. Spot the solids (cylinder + cone? cube + hemisphere?)\n2. Write r, h (and l) for each part — careful with diameter vs radius\n3. Area → add visible surfaces. Volume → add (or subtract)\n4. Convert units and find cost/mass if asked' },
      { topic: 'word', front: 'Cost of canvas/painting', back: 'Cost = surface area × rate per unit area\ne.g. 44 m² at ₹500 per m² = ₹22000' },
      { topic: 'word', front: 'Mass from volume', back: 'Mass = volume × mass of 1 unit of volume (density)\ne.g. 111532.8 cm³ at 8 g per cm³ = 892262.4 g ≈ 892.26 kg' },
      { topic: 'word', front: 'A cone (h = 8 cm, r = 5 cm) full of water. Lead shots (spheres of r = 0.5 cm) are dropped in until 1/4 of the water flows out. How many shots?', back: 'Water out = (1/4) × (1/3)π × 25 × 8 = (50/3)π\nOne shot = (4/3)π(0.5)³ = π/6\nNumber = (50/3)π ÷ (π/6) = 100' },
      { topic: 'word', front: 'Convert 33000 cm² into m².', back: '1 m² = 10000 cm²\n33000 ÷ 10000 = 3.3 m²' }
    ],

    quiz: [
      { topic: 'formulas', q: 'The curved surface area of a cylinder is…', options: ['πr²h', '2πrh', '2πr(r + h)', 'πrl'], answer: 1, explain: 'Unroll it: a rectangle 2πr long and h high.' },
      { topic: 'formulas', q: 'The volume of a cone is…', options: ['πr²h', '(1/3)πr²h', '(2/3)πr²h', 'πrl'], answer: 1, explain: 'One third of the cylinder with the same base and height.' },
      { topic: 'formulas', q: 'The total surface area of a solid hemisphere is…', options: ['2πr²', '4πr²', '3πr²', '(2/3)πr³'], answer: 2, explain: 'Curved part 2πr² + flat circle πr².' },
      { topic: 'formulas', q: 'The slant height of a cone is…', options: ['√(r² + h²)', '√(h² − r²)', 'r + h', '√(r² − h²)'], answer: 0, explain: 'r, h and l form a right triangle with l as the hypotenuse.' },
      { topic: 'formulas', q: 'The volume of a hemisphere is…', options: ['(4/3)πr³', '(2/3)πr³', '(1/3)πr³', '2πr²'], answer: 1, explain: 'Half of (4/3)πr³.' },
      { topic: 'formulas', q: 'The surface area of a sphere is…', options: ['2πr²', '3πr²', '4πr²', '(4/3)πr³'], answer: 2, explain: 'Surface area = 4πr²' },
      { topic: 'formulas', q: 'The total surface area of a cone is…', options: ['πrl', 'πr(l + r)', '2πr(l + r)', 'πr²l'], answer: 1, explain: 'Curved part πrl + base πr².' },
      { topic: 'formulas', q: 'A cylinder and a cone have the same radius and height. The cylinder\'s volume is ___ the cone\'s.', options: ['2 times', '3 times', '1/3 of', 'equal to'], answer: 1, explain: 'πr²h ÷ (1/3)πr²h = 3' },
      { topic: 'formulas', q: 'A cone has r = 7 cm and h = 24 cm. Its slant height is…', options: ['25 cm', '31 cm', '17 cm', '24 cm'], answer: 0, explain: '√(49 + 576) = √625' },
      { topic: 'formulas', q: 'The total surface area of a cube of edge 4 cm is…', options: ['64 cm²', '96 cm²', '16 cm²', '48 cm²'], answer: 1, explain: '6 × 4² = 96' },
      { topic: 'formulas', q: 'The surface area of a sphere of radius 7 cm is (π = 22/7)…', options: ['154 cm²', '616 cm²', '1437.33 cm²', '308 cm²'], answer: 1, explain: '4 × 22/7 × 49 = 616' },
      { topic: 'formulas', q: 'The curved surface area of a cylinder with r = 7 cm, h = 10 cm is (π = 22/7)…', options: ['440 cm²', '1540 cm²', '220 cm²', '748 cm²'], answer: 0, explain: '2 × 22/7 × 7 × 10 = 440' },

      { topic: 'sa', q: 'When two solids are joined, the surface area of the new solid…', options: ['Is the sum of their total surface areas', 'Leaves out the faces that are joined', 'Is always bigger than the sum', 'Is the same as the bigger solid'], answer: 1, explain: 'Joined faces are hidden inside, so they are not counted.' },
      { topic: 'sa', q: 'A toy is a cone on a hemisphere of the same radius. Its total surface area is…', options: ['πrl + 2πr²', 'πrl + 3πr²', 'πr(l + r) + 3πr²', 'πrl + πr²'], answer: 0, explain: 'Only the two curved surfaces are on the outside.' },
      { topic: 'sa', q: 'A capsule (cylinder part of length h, radius r) has surface area…', options: ['2πrh + 2πr²', '2πrh + 4πr²', '2πr(r + h) + 4πr²', '2πrh + 3πr²'], answer: 1, explain: 'Cylinder curved part + two hemispherical ends (2πr² each).' },
      { topic: 'sa', q: 'The canvas for a tent (cylinder with a cone on top) is…', options: ['2πrh + πrl', '2πr(r + h) + πrl', '2πrh + πr(l + r)', 'πr²h + πrl'], answer: 0, explain: 'No canvas on the floor or between the parts.' },
      { topic: 'sa', q: 'Two cubes of volume 64 cm³ each are joined end to end. The surface area of the cuboid is…', options: ['192 cm²', '160 cm²', '128 cm²', '96 cm²'], answer: 1, explain: 'Cuboid 8 × 4 × 4: 2(32 + 16 + 32) = 160' },
      { topic: 'sa', q: 'A 7 cm cube has a hemisphere on top with the greatest possible diameter. Its surface area is (π = 22/7)…', options: ['294 cm²', '332.5 cm²', '371 cm²', '255.5 cm²'], answer: 1, explain: '6 × 49 + π(3.5)² = 294 + 38.5' },
      { topic: 'sa', q: 'The greatest diameter of a hemisphere that can sit on a face of a 7 cm cube is…', options: ['3.5 cm', '7 cm', '14 cm', '10.5 cm'], answer: 1, explain: 'It cannot be wider than the face.' },
      { topic: 'sa', q: 'Putting a hemisphere of radius r on a face of a cube changes the total surface area by…', options: ['+2πr²', '+πr²', '−πr²', '+3πr²'], answer: 1, explain: '−πr² (covered circle) + 2πr² (bowl) = +πr²' },
      { topic: 'sa', q: 'A capsule is 14 mm long with diameter 5 mm. Its surface area is (π = 22/7)…', options: ['220 mm²', '198 mm²', '154 mm²', '242 mm²'], answer: 0, explain: '2πr × total length = 2 × 22/7 × 2.5 × 14' },
      { topic: 'sa', q: 'A tent has a cylinder 2.1 m high, diameter 4 m, and a cone of slant height 2.8 m. Canvas needed (π = 22/7)…', options: ['44 m²', '52 m²', '26.4 m²', '88 m²'], answer: 0, explain: 'πr(2h + l) = 22/7 × 2 × 7' },
      { topic: 'sa', q: 'A vessel is a hollow hemisphere (diameter 14 cm) with a hollow cylinder on top; total height 13 cm. Inner surface area (π = 22/7)…', options: ['572 cm²', '616 cm²', '462 cm²', '418 cm²'], answer: 0, explain: '2πr(r + h) = 2 × 22/7 × 7 × 13' },
      { topic: 'sa', q: 'A cylinder (h = 10 cm, r = 3.5 cm) has a hemisphere scooped out of each end. Its total surface area is (π = 22/7)…', options: ['374 cm²', '297 cm²', '220 cm²', '451 cm²'], answer: 0, explain: '2πr(h + 2r) = 2 × 22/7 × 3.5 × 17' },
      { topic: 'sa', q: 'A cone with the same height and base is hollowed out of a solid cylinder. The total surface area left is…', options: ['2πrh + πr² + πrl', '2πrh + 2πr² + πrl', '2πrh + πrl', '2πr(r + h) − πrl'], answer: 0, explain: 'Curved cylinder + bottom circle + inside of the cone (the top circle is gone).' },
      { topic: 'sa', q: 'A cube of edge 5 cm with a hemisphere (diameter 4.2 cm) on top has surface area (π = 22/7)…', options: ['163.86 cm²', '150 cm²', '177.72 cm²', '136.14 cm²'], answer: 0, explain: '150 + π(2.1)² = 150 + 13.86' },

      { topic: 'vol', q: 'The volume of a solid made by joining two solids is…', options: ['The sum of their volumes', 'Less than the sum, as faces are hidden', 'The volume of the bigger one', 'The product of their volumes'], answer: 0, explain: 'Volumes simply add.' },
      { topic: 'vol', q: 'A cone on a hemisphere, both of radius 1 cm, cone height 1 cm. Volume…', options: ['π cm³', '2π cm³', '(2/3)π cm³', '(4/3)π cm³'], answer: 0, explain: '(2/3)π + (1/3)π' },
      { topic: 'vol', q: 'The volume of a capsule (cylinder part h, radius r) is…', options: ['πr²h + (2/3)πr³', 'πr²h + (4/3)πr³', '2πrh + 4πr²', 'πr²h + 4πr²'], answer: 1, explain: 'Two hemispheres make one sphere.' },
      { topic: 'vol', q: 'Rachel\'s model: cylinder with a cone at each end; diameter 3 cm, total length 12 cm, cones 2 cm high. Volume (π = 22/7)…', options: ['66 cm³', '84.86 cm³', '75.43 cm³', '56.57 cm³'], answer: 0, explain: '18π + 3π = 21π = 66' },
      { topic: 'vol', q: 'A cone with the same base and height is hollowed out of a cylinder. The volume left is…', options: ['(1/3)πr²h', '(2/3)πr²h', 'πr²h', '(4/3)πr²h'], answer: 1, explain: 'πr²h − (1/3)πr²h' },
      { topic: 'vol', q: 'The volume of a cylinder with r = 7 cm, h = 10 cm is (π = 22/7)…', options: ['440 cm³', '1540 cm³', '1078 cm³', '2156 cm³'], answer: 1, explain: '22/7 × 49 × 10' },
      { topic: 'vol', q: 'The volume of a cone with r = 7 cm, h = 24 cm is (π = 22/7)…', options: ['3696 cm³', '1232 cm³', '616 cm³', '550 cm³'], answer: 1, explain: '(1/3) × 22/7 × 49 × 24' },
      { topic: 'vol', q: 'The volume of a hemisphere of radius 21 cm is (π = 22/7)…', options: ['19404 cm³', '38808 cm³', '2772 cm³', '9702 cm³'], answer: 0, explain: '(2/3) × 22/7 × 9261' },
      { topic: 'vol', q: 'A pen stand is a cuboid 15 × 10 × 3.5 cm with 4 conical holes (r = 0.5 cm, depth 1.4 cm). Volume of wood (π = 22/7)…', options: ['525 cm³', '523.53 cm³', '519.13 cm³', '526.47 cm³'], answer: 1, explain: '525 − 4 × (1/3)π(0.25)(1.4) ≈ 525 − 1.47' },
      { topic: 'vol', q: 'A solid (cone on a hemisphere) is put in a cylinder full of water. The water left is…', options: ['Cylinder + solid', 'Cylinder − (cone + hemisphere)', 'Cylinder − cone', 'Cone + hemisphere'], answer: 1, explain: 'The solid pushes out water equal to its own volume.' },
      { topic: 'vol', q: 'An iron pole: cylinder (h = 220 cm, r = 12 cm) with a cylinder (h = 60 cm, r = 8 cm) on top; 1 cm³ weighs 8 g. Its mass is about (π = 3.14)…', options: ['892.26 kg', '111.53 kg', '795.79 kg', '89.23 kg'], answer: 0, explain: '35520 × 3.14 × 8 g = 892262.4 g' },

      { topic: 'word', q: 'A tent needs 44 m² of canvas at ₹500 per m². The cost is…', options: ['₹2200', '₹22000', '₹4400', '₹11000'], answer: 1, explain: '44 × 500' },
      { topic: 'word', q: 'A cone (h = 8 cm, r = 5 cm) is full of water. Lead shots of radius 0.5 cm are dropped in until 1/4 of the water flows out. The number of shots is…', options: ['50', '100', '200', '400'], answer: 1, explain: '(50/3)π ÷ (π/6) = 100' },
      { topic: 'word', q: '33000 cm² = …', options: ['33 m²', '3.3 m²', '330 m²', '0.33 m²'], answer: 1, explain: '1 m² = 10000 cm²' },
      { topic: 'word', q: '1000 cm³ is equal to…', options: ['1 litre', '10 litres', '1 m³', '100 mL'], answer: 0, explain: '1 cm³ = 1 mL' },
      { topic: 'word', q: 'A child says a spherical vessel (diameter 8.5 cm) with a neck (cylinder 8 cm long, diameter 2 cm) holds 345 cm³. Using π = 3.14, the correct volume is…', options: ['345 cm³', '346.51 cm³', '321.39 cm³', '371.63 cm³'], answer: 1, explain: '321.39 + 25.12 = 346.51, so the child is not correct.' },
      { topic: 'word', q: 'A gulab jamun is a cylinder with two hemispherical ends. Its volume is found by…', options: ['πr²h + (4/3)πr³', '2πrh + 4πr²', 'πr²h + (2/3)πr³', '(4/3)πr³ only'], answer: 0, explain: 'Cylinder part + two hemispheres (one sphere).' },
      { topic: 'word', q: 'To find the cost of painting a solid, you need its…', options: ['Volume', 'Surface area', 'Mass', 'Height only'], answer: 1, explain: 'Paint covers the outside surface.' },
      { topic: 'word', q: 'To find how much water a vessel holds, you need its…', options: ['Surface area', 'Volume (capacity)', 'Slant height', 'Curved surface area'], answer: 1, explain: 'Capacity is the volume inside.' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'formulas', gen(mk) {
        const k = mk.ri(0, F.length - 1), [name, right] = F[k];
        const solid = name.split(' ').pop();
        const same = F.filter((f, i) => i !== k && f[0].endsWith(solid)).map(f => f[1]);
        const other = F.filter((f, i) => i !== k && !f[0].endsWith(solid)).map(f => f[1]).sort(() => Math.random() - 0.5);
        const wrong = [...new Set([...same.sort(() => Math.random() - 0.5), ...other])].filter(w => w !== right).slice(0, 3);
        const order = [right, ...wrong].map((t, i) => ({ t, i })).sort(() => Math.random() - 0.5);
        return {
          q: `Which formula gives the ${name}?`,
          choices: order.map(o => o.t),
          answer: order.findIndex(o => o.i === 0),
          steps: `The ${name} is ${right}.\n(r = radius, h = height, l = slant height, a = edge of a cube)`
        };
      } },
      { topic: 'sa', gen(mk) {
        const [r, h, l] = mk.pick(TOY), giveD = Math.random() < 0.4, giveH = Math.random() < 0.6;
        const k = pi(r), ans = R(k * (l + 2 * r));
        return {
          q: `A toy is a cone mounted on a hemisphere of the same radius. The ${giveD ? `diameter is ${dn(mk, 2 * r)} cm` : `radius is ${dn(mk, r)} cm`} and the ${giveH ? `total height of the toy is ${dn(mk, h + r)} cm` : `height of the cone is ${dn(mk, h)} cm`}. Find the total surface area of the toy. (Take π = 22/7)`,
          fields: [{ label: 'Surface area (cm²)', answer: ans }],
          hint: 'Only the curved surfaces show: CSA of cone (πrl) + CSA of hemisphere (2πr²). Find l = √(r² + h²) first.',
          steps: (giveD ? `r = ${dn(mk, 2 * r)} ÷ 2 = ${dn(mk, r)} cm\n` : `r = ${dn(mk, r)} cm\n`) +
            (giveH ? `Height of cone h = ${dn(mk, h + r)} − ${dn(mk, r)} = ${dn(mk, h)} cm\n` : `h = ${dn(mk, h)} cm\n`) +
            `l = √(r² + h²) = √(${dn(mk, sq(r))} + ${dn(mk, sq(h))}) = √${dn(mk, sq(l))} = ${dn(mk, l)} cm\n` +
            `The flat circles are joined (hidden), so:\nTSA = πrl + 2πr² = πr(l + 2r)\n= 22/7 × ${dn(mk, r)} × (${dn(mk, l)} + ${dn(mk, 2 * r)})\n= ${dn(mk, k)} × ${dn(mk, l + 2 * r)} = ${dn(mk, ans)} cm²`
        };
      } },
      { topic: 'sa', gen(mk) {
        const v = mk.pick(['capsule', 'article', 'vessel', 'bath', 'tent']);
        for (;;) {
          const r = mk.pick(RAD);
          if (v === 'capsule') {
            const h = mk.ri(2, 20), L = R(h + 2 * r), p1 = R(2 * pi(r) * h), p2 = R(4 * pi(sq(r))), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2) || r > 7) continue;
            return {
              q: `A medicine capsule is a cylinder with a hemisphere stuck to each end. The whole capsule is ${dn(mk, L)} mm long and its diameter is ${dn(mk, 2 * r)} mm. Find its surface area. (Take π = 22/7)`,
              fields: [{ label: 'Surface area (mm²)', answer: ans }],
              hint: 'Length of the cylinder part = total length − 2r. Area = 2πrh + 4πr².',
              steps: `r = ${dn(mk, r)} mm\nCylinder part h = ${dn(mk, L)} − 2 × ${dn(mk, r)} = ${h} mm\nCSA of cylinder = 2πrh = 2 × 22/7 × ${dn(mk, r)} × ${h} = ${dn(mk, p1)}\nTwo hemispheres = 4πr² = 4 × 22/7 × ${dn(mk, sq(r))} = ${dn(mk, p2)}\nSurface area = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} mm²`
            };
          }
          if (v === 'article') {
            const h = R(2 * r + mk.ri(1, 12)), p1 = R(2 * pi(r) * h), p2 = R(4 * pi(sq(r))), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A wooden article is made by scooping out a hemisphere from each end of a solid cylinder. The cylinder is ${dn(mk, h)} cm high and its radius is ${dn(mk, r)} cm. Find the total surface area of the article. (Take π = 22/7)`,
              fields: [{ label: 'Surface area (cm²)', answer: ans }],
              hint: 'Curved side of the cylinder + the inside of two hemispherical bowls: 2πrh + 2 × 2πr².',
              steps: `CSA of cylinder = 2πrh = 2 × 22/7 × ${dn(mk, r)} × ${dn(mk, h)} = ${dn(mk, p1)}\nTwo scooped bowls = 2 × 2πr² = 4 × 22/7 × ${dn(mk, sq(r))} = ${dn(mk, p2)}\n(The flat ends are gone, but each bowl's curved surface is now showing.)\nTotal = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm²`
            };
          }
          if (v === 'vessel') {
            const h = mk.ri(2, 20), H = R(h + r), p1 = R(2 * pi(sq(r))), p2 = R(2 * pi(r) * h), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A vessel is a hollow hemisphere with a hollow cylinder on top of it. The diameter of the hemisphere is ${dn(mk, 2 * r)} cm and the total height of the vessel is ${dn(mk, H)} cm. Find the inner surface area of the vessel. (Take π = 22/7)`,
              fields: [{ label: 'Inner surface area (cm²)', answer: ans }],
              hint: 'Height of the cylinder = total height − r. Area = 2πr² + 2πrh.',
              steps: `r = ${dn(mk, r)} cm\nHeight of cylinder h = ${dn(mk, H)} − ${dn(mk, r)} = ${h} cm\nHemisphere (inside) = 2πr² = 2 × 22/7 × ${dn(mk, sq(r))} = ${dn(mk, p1)}\nCylinder (inside) = 2πrh = 2 × 22/7 × ${dn(mk, r)} × ${h} = ${dn(mk, p2)}\nInner surface area = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm²`
            };
          }
          if (v === 'bath') {
            const h = mk.ri(Math.ceil(r) + 5, Math.ceil(r) + 60), p1 = R(2 * pi(r) * h), p2 = R(2 * pi(sq(r))), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A bird-bath is a solid cylinder ${h} cm high and of radius ${dn(mk, r)} cm, with a hemispherical bowl hollowed out at the top. Find the area of its curved side and its bowl together. (Take π = 22/7)`,
              fields: [{ label: 'Area (cm²)', answer: ans }],
              hint: 'CSA of cylinder (2πrh) + inside of the hemispherical bowl (2πr²).',
              steps: `CSA of cylinder = 2πrh = 2 × 22/7 × ${dn(mk, r)} × ${h} = ${dn(mk, p1)}\nBowl = 2πr² = 2 × 22/7 × ${dn(mk, sq(r))} = ${dn(mk, p2)}\nTotal = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm²`
            };
          }
          const h = mk.pick([1.5, 2, 2.1, 2.5, 3, 3.5, 4]), l = mk.pick([2.5, 2.8, 3, 3.5, 4, 4.2, 5]);
          if (r < 1.4 || r > 7) continue;
          const p1 = R(2 * pi(r) * h), p2 = R(pi(r) * l), ans = R(p1 + p2);
          if (!nice(p1) || !nice(p2)) continue;
          return {
            q: `A tent is a cylinder with a cone on top. The cylinder is ${dn(mk, h)} m high, the diameter of the base is ${dn(mk, 2 * r)} m and the slant height of the cone is ${dn(mk, l)} m. Find the area of canvas needed. (Take π = 22/7)`,
            fields: [{ label: 'Canvas (m²)', answer: ans }],
            hint: 'Canvas = CSA of cylinder + CSA of cone = 2πrh + πrl. No canvas on the floor.',
            steps: `r = ${dn(mk, 2 * r)} ÷ 2 = ${dn(mk, r)} m\nCSA of cylinder = 2πrh = 2 × 22/7 × ${dn(mk, r)} × ${dn(mk, h)} = ${dn(mk, p1)}\nCSA of cone = πrl = 22/7 × ${dn(mk, r)} × ${dn(mk, l)} = ${dn(mk, p2)}\nCanvas = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} m²`
          };
        }
      } },
      { topic: 'sa', gen(mk) {
        const v = mk.pick(['cubes', 'cubehemi', 'cubehemi', 'cylcone']);
        if (v === 'cubes') {
          const a = mk.ri(2, 12), n = Math.random() < 0.7 ? 2 : 3, ans = (4 * n + 2) * a * a;
          return {
            q: `${n === 2 ? 'Two' : 'Three'} cubes, each of volume ${a ** 3} cm³, are joined end to end in a row. Find the surface area of the cuboid formed.`,
            fields: [{ label: 'Surface area (cm²)', answer: ans }],
            hint: 'Find the edge first (a³ = volume). The cuboid is ' + n + 'a long, a wide and a high.',
            steps: `a³ = ${a ** 3} → a = ${a} cm\nCuboid: l = ${n * a}, b = ${a}, h = ${a}\nTSA = 2(lb + bh + hl) = 2(${n * a * a} + ${a * a} + ${n * a * a}) = ${ans} cm²\n(Check: ${n} × 6a² minus ${2 * (n - 1)} hidden faces = ${4 * n + 2}a² = ${ans})`
          };
        }
        if (v === 'cubehemi') {
          let r, a, p;
          do { r = mk.pick(RAD); a = mk.ri(Math.ceil(2 * r), Math.ceil(2 * r) + 8); p = pi(sq(r)); } while (!nice(p) || r > 7);
          const dep = Math.random() < 0.4, ans = R(6 * a * a + p);
          return {
            q: dep ? `A hemispherical depression of diameter ${dn(mk, 2 * r)} cm is cut out from one face of a cube of edge ${a} cm. Find the surface area of the remaining solid. (Take π = 22/7)`
              : `A cube of edge ${a} cm has a hemisphere of diameter ${dn(mk, 2 * r)} cm fixed on top of it. Find the total surface area of the solid. (Take π = 22/7)`,
            fields: [{ label: 'Surface area (cm²)', answer: ans }],
            hint: 'Cube 6a², take away the circle (πr²), add the curved bowl (2πr²). Net: 6a² + πr².',
            steps: `r = ${dn(mk, r)} cm\nTSA = 6a² − πr² + 2πr² = 6a² + πr²\n6a² = 6 × ${a * a} = ${6 * a * a}\nπr² = 22/7 × ${dn(mk, sq(r))} = ${dn(mk, p)}\nTSA = ${6 * a * a} + ${dn(mk, p)} = ${dn(mk, ans)} cm²`
          };
        }
        const [r, h, l] = mk.pick(SMALL), p1 = R(2 * pi(r) * h), p2 = pi(sq(r)), p3 = R(pi(r) * l), ans = R(p1 + p2 + p3);
        return {
          q: `From a solid cylinder of height ${dn(mk, h)} cm and diameter ${dn(mk, 2 * r)} cm, a cone of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid. (Take π = 22/7)`,
          fields: [{ label: 'Surface area (cm²)', answer: ans }],
          hint: 'Curved side of the cylinder + bottom circle + inside of the cone (πrl). The top circle is gone.',
          steps: `r = ${dn(mk, r)} cm, h = ${dn(mk, h)} cm\nl = √(r² + h²) = √(${dn(mk, sq(r))} + ${dn(mk, sq(h))}) = ${dn(mk, l)} cm\nCSA of cylinder = 2πrh = ${dn(mk, p1)}\nBottom circle = πr² = ${dn(mk, p2)}\nInside of cone = πrl = ${dn(mk, p3)}\nTSA = ${dn(mk, p1)} + ${dn(mk, p2)} + ${dn(mk, p3)} = ${dn(mk, ans)} cm²`
        };
      } },
      { topic: 'vol', gen(mk) {
        const v = mk.pick(['toy', 'capsule', 'rocket', 'model', 'cylhemi']);
        const RV = [2.1, 4.2, 6.3, 7, 10.5, 14, 21, 3.5, 1.4, 2.8, 0.7];
        for (;;) {
          const r = mk.pick(RV), base = pi(sq(r));
          if (v === 'toy') {
            const h = mk.ri(2, 30), p1 = R(base * h / 3), p2 = R(2 * base * r / 3), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A solid toy is a cone of height ${h} cm mounted on a hemisphere. Both have radius ${dn(mk, r)} cm. Find the volume of the toy. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Volume = (1/3)πr²h (cone) + (2/3)πr³ (hemisphere).',
              steps: `Cone = (1/3)πr²h = (1/3) × 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, p1)}\nHemisphere = (2/3)πr³ = (2/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, p2)}\nVolume = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm³`
            };
          }
          if (v === 'capsule') {
            const h = mk.ri(2, 20), p1 = R(base * h), p2 = R(4 * base * r / 3), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A solid is a cylinder with a hemisphere at each end. The radius is ${dn(mk, r)} cm and the total length is ${dn(mk, h + 2 * r)} cm. Find its volume. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Cylinder part length = total − 2r. Volume = πr²h + (4/3)πr³.',
              steps: `Cylinder part h = ${dn(mk, h + 2 * r)} − ${dn(mk, 2 * r)} = ${h} cm\nCylinder = πr²h = 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, p1)}\nTwo hemispheres = (4/3)πr³ = (4/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, p2)}\nVolume = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm³`
            };
          }
          if (v === 'rocket') {
            const H = mk.ri(5, 30), h = mk.ri(3, 15), p1 = R(base * H), p2 = R(base * h / 3), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2)) continue;
            return {
              q: `A toy rocket is a cylinder of height ${H} cm with a cone of height ${h} cm on top. Both have radius ${dn(mk, r)} cm. Find the volume of the rocket. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Volume = πr²H (cylinder) + (1/3)πr²h (cone).',
              steps: `Cylinder = πr²H = 22/7 × ${dn(mk, sq(r))} × ${H} = ${dn(mk, p1)}\nCone = (1/3)πr²h = (1/3) × 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, p2)}\nVolume = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm³`
            };
          }
          if (v === 'model') {
            const h = mk.ri(1, 6), H = mk.ri(4, 20), L = H + 2 * h, p1 = R(base * H), p2 = R(2 * base * h / 3), ans = R(p1 + p2);
            if (!nice(p1) || !nice(p2) || r > 10.5) continue;
            return {
              q: `A model is a cylinder with a cone at each end. Its diameter is ${dn(mk, 2 * r)} cm, its total length is ${L} cm and each cone is ${h} cm long. Find the volume of the model. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Cylinder length = total length − 2 × cone height. Volume = πr²H + 2 × (1/3)πr²h.',
              steps: `r = ${dn(mk, r)} cm\nCylinder length H = ${L} − 2 × ${h} = ${H} cm\nCylinder = πr²H = 22/7 × ${dn(mk, sq(r))} × ${H} = ${dn(mk, p1)}\nTwo cones = 2 × (1/3)πr²h = (2/3) × 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, p2)}\nVolume = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm³`
            };
          }
          const h = mk.ri(3, 30), p1 = R(base * h), p2 = R(2 * base * r / 3), ans = R(p1 + p2);
          if (!nice(p1) || !nice(p2)) continue;
          return {
            q: `A solid is a cylinder of height ${h} cm with a hemisphere on top. Both have radius ${dn(mk, r)} cm. Find its volume. (Take π = 22/7)`,
            fields: [{ label: 'Volume (cm³)', answer: ans }],
            hint: 'Volume = πr²h + (2/3)πr³.',
            steps: `Cylinder = πr²h = 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, p1)}\nHemisphere = (2/3)πr³ = (2/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, p2)}\nVolume = ${dn(mk, p1)} + ${dn(mk, p2)} = ${dn(mk, ans)} cm³`
          };
        }
      } },
      { topic: 'vol', gen(mk) {
        const v = mk.pick(['pen', 'cylcone', 'cubehemi', 'cylhemis']);
        for (;;) {
          if (v === 'pen') {
            const l = mk.ri(10, 20), b = mk.ri(5, 12), h = mk.pick([3, 3.5, 4, 4.5, 5]), n = mk.ri(2, 5), r = mk.pick([0.35, 0.7, 1.05, 1.4]), d = mk.pick([1.2, 1.5, 2.1, 3]);
            const box = R(l * b * h), one = R(pi(sq(r)) * d / 3), cones = R(n * one), ans = R(box - cones);
            if (!nice(one) || 2 * r * n > l || d >= h) continue;
            return {
              q: `A pen stand is a cuboid ${l} cm × ${b} cm × ${dn(mk, h)} cm. It has ${n} conical holes, each of radius ${dn(mk, r)} cm and depth ${dn(mk, d)} cm. Find the volume of wood in the stand. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Volume of cuboid − volume of all the cones.',
              steps: `Cuboid = lbh = ${l} × ${b} × ${dn(mk, h)} = ${dn(mk, box)}\nOne cone = (1/3)πr²h = (1/3) × 22/7 × ${dn(mk, sq(r))} × ${dn(mk, d)} = ${dn(mk, one)}\n${n} cones = ${dn(mk, cones)}\nWood = ${dn(mk, box)} − ${dn(mk, cones)} = ${dn(mk, ans)} cm³`
            };
          }
          const r = mk.pick([0.7, 1.4, 2.1, 3.5, 4.2, 7, 10.5, 14, 21]), base = pi(sq(r));
          if (v === 'cylcone') {
            const h = mk.ri(3, 30), cyl = R(base * h), con = R(base * h / 3), ans = R(cyl - con);
            if (!nice(con)) continue;
            return {
              q: `A cone of the same height and base is hollowed out of a solid cylinder of height ${h} cm and radius ${dn(mk, r)} cm. Find the volume of the remaining solid. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'Cylinder − cone = πr²h − (1/3)πr²h = (2/3)πr²h.',
              steps: `Cylinder = πr²h = 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, cyl)}\nCone = (1/3) × cylinder = ${dn(mk, con)}\nRemaining = ${dn(mk, cyl)} − ${dn(mk, con)} = ${dn(mk, ans)} cm³`
            };
          }
          if (v === 'cubehemi') {
            const a = mk.ri(Math.ceil(2 * r), Math.ceil(2 * r) + 6), cu = a ** 3, hem = R(2 * base * r / 3), ans = R(cu - hem);
            if (!nice(hem) || r > 10.5) continue;
            return {
              q: `A hemisphere of radius ${dn(mk, r)} cm is scooped out of one face of a solid cube of edge ${a} cm. Find the volume of the remaining solid. (Take π = 22/7)`,
              fields: [{ label: 'Volume (cm³)', answer: ans }],
              hint: 'a³ − (2/3)πr³',
              steps: `Cube = a³ = ${a}³ = ${cu}\nHemisphere = (2/3)πr³ = (2/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, hem)}\nRemaining = ${cu} − ${dn(mk, hem)} = ${dn(mk, ans)} cm³`
            };
          }
          const h = R(2 * r + mk.ri(2, 15)), cyl = R(base * h), hem = R(4 * base * r / 3), ans = R(cyl - hem);
          if (!nice(cyl) || !nice(hem)) continue;
          return {
            q: `A hemisphere of radius ${dn(mk, r)} cm is scooped out of each end of a solid cylinder of height ${dn(mk, h)} cm and the same radius. Find the volume of the remaining solid. (Take π = 22/7)`,
            fields: [{ label: 'Volume (cm³)', answer: ans }],
            hint: 'πr²h − 2 × (2/3)πr³ = πr²h − (4/3)πr³',
            steps: `Cylinder = πr²h = 22/7 × ${dn(mk, sq(r))} × ${dn(mk, h)} = ${dn(mk, cyl)}\nTwo hemispheres = (4/3)πr³ = (4/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, hem)}\nRemaining = ${dn(mk, cyl)} − ${dn(mk, hem)} = ${dn(mk, ans)} cm³`
          };
        }
      } },
      { topic: 'word', gen(mk) {
        const v = mk.pick(['tent', 'paint', 'pole', 'water']);
        for (;;) {
          if (v === 'tent') {
            const r = mk.pick([1.4, 2.1, 2.8, 3.5, 4.2, 7, 1.75]), h = mk.pick([1.5, 2, 2.1, 2.5, 3, 3.5]), l = mk.pick([2.5, 2.8, 3, 3.5, 4, 4.2, 5]);
            const rate = mk.pick([50, 80, 100, 120, 150, 200, 250, 500]);
            const area = R(pi(r) * (2 * h + l)), cost = R(area * rate);
            if (!nice(area)) continue;
            return {
              q: `A tent is a cylinder of height ${dn(mk, h)} m and base radius ${dn(mk, r)} m, with a cone of slant height ${dn(mk, l)} m on top. Find the cost of the canvas at ₹${rate} per m². (Take π = 22/7)`,
              fields: [{ label: 'Cost (₹)', answer: cost }],
              hint: 'Canvas = 2πrh + πrl = πr(2h + l). Then multiply by the rate.',
              steps: `Canvas = πr(2h + l) = 22/7 × ${dn(mk, r)} × (${dn(mk, 2 * h)} + ${dn(mk, l)})\n= ${dn(mk, pi(r))} × ${dn(mk, 2 * h + l)} = ${dn(mk, area)} m²\nCost = ${dn(mk, area)} × ${rate} = ₹${dn(mk, cost)}`
            };
          }
          if (v === 'paint') {
            const [r, h, l] = mk.pick(TOY.slice(0, 4)), rate = mk.pick([2, 3, 4, 5, 6, 8, 10]);
            const area = R(pi(r) * (l + 2 * r)), cost = R(area * rate / 100);
            if (!nice(cost)) continue;
            return {
              q: `A toy is a cone of height ${dn(mk, h)} cm on a hemisphere, both of radius ${dn(mk, r)} cm. Find the cost of painting the whole toy at ₹${rate} per 100 cm². (Take π = 22/7)`,
              fields: [{ label: 'Cost (₹)', answer: cost }],
              hint: 'Area = πrl + 2πr² (find l first). Cost = area × rate ÷ 100.',
              steps: `l = √(${dn(mk, sq(r))} + ${dn(mk, sq(h))}) = ${dn(mk, l)} cm\nArea = πr(l + 2r) = 22/7 × ${dn(mk, r)} × ${dn(mk, l + 2 * r)} = ${dn(mk, area)} cm²\nCost = ${dn(mk, area)} × ${rate} ÷ 100 = ₹${dn(mk, cost)}`
            };
          }
          if (v === 'pole') {
            const r1 = mk.ri(6, 15), h1 = mk.ri(10, 25) * 10, r2 = mk.ri(3, r1 - 2), h2 = mk.ri(3, 8) * 10, g = mk.pick([7, 8, 9]);
            const N = r1 * r1 * h1 + r2 * r2 * h2, V = R(3.14 * N), m = R(V * g);
            return {
              q: `A solid iron pole is a cylinder of height ${h1} cm and base diameter ${2 * r1} cm, with another cylinder of height ${h2} cm and radius ${r2} cm on top. 1 cm³ of iron has mass ${g} g. Find the mass of the pole in grams. (Take π = 3.14)`,
              fields: [{ label: 'Mass (g)', answer: m }],
              hint: `Add the volumes of the two cylinders (πr²h each). Then mass = volume × ${g} g.`,
              steps: `Bottom: r = ${r1}, h = ${h1} → r²h = ${r1 * r1 * h1}\nTop: r = ${r2}, h = ${h2} → r²h = ${r2 * r2 * h2}\nVolume = 3.14 × (${r1 * r1 * h1} + ${r2 * r2 * h2}) = 3.14 × ${N} = ${dn(mk, V)} cm³\nMass = ${dn(mk, V)} × ${g} = ${dn(mk, m)} g (≈ ${dn(mk, Math.round(m / 10) / 100)} kg)`
            };
          }
          const r = mk.pick([3.5, 7, 10.5, 14, 21, 2.1, 4.2]), h = mk.ri(2, 12) * 3, base = pi(sq(r));
          const cyl = R(base * (h + r)), con = R(base * h / 3), hem = R(2 * base * r / 3), ans = R(cyl - con - hem);
          if (!nice(cyl) || !nice(con) || !nice(hem)) continue;
          return {
            q: `A solid is a cone of height ${h} cm on a hemisphere, both of radius ${dn(mk, r)} cm. It is placed upright in a cylinder full of water so that it touches the bottom. The cylinder has the same radius and height ${dn(mk, h + r)} cm. Find the volume of water left in the cylinder. (Take π = 22/7)`,
            fields: [{ label: 'Water left (cm³)', answer: ans }],
            hint: 'Water left = cylinder − (cone + hemisphere).',
            steps: `Cylinder = πr²H = 22/7 × ${dn(mk, sq(r))} × ${dn(mk, h + r)} = ${dn(mk, cyl)}\nCone = (1/3)πr²h = (1/3) × 22/7 × ${dn(mk, sq(r))} × ${h} = ${dn(mk, con)}\nHemisphere = (2/3)πr³ = (2/3) × 22/7 × ${dn(mk, cube(r))} = ${dn(mk, hem)}\nWater left = ${dn(mk, cyl)} − ${dn(mk, con)} − ${dn(mk, hem)} = ${dn(mk, ans)} cm³`
          };
        }
      } }
    ],

    match: [
      { title: 'Solid → Volume', pairs: [
        ['Cylinder', 'πr²h'],
        ['Cone', '(1/3)πr²h'],
        ['Sphere', '(4/3)πr³'],
        ['Hemisphere', '(2/3)πr³'],
        ['Cuboid', 'lbh'],
        ['Cube', 'a³']
      ] },
      { title: 'Surface → Area', pairs: [
        ['Curved surface of a cylinder', '2πrh'],
        ['Curved surface of a cone', 'πrl'],
        ['Sphere', '4πr²'],
        ['Curved surface of a hemisphere', '2πr²'],
        ['Solid hemisphere (total)', '3πr²'],
        ['Cube (total)', '6a²']
      ] },
      { title: 'Combined Solid → Surface Area', pairs: [
        ['Cone on a hemisphere (toy)', 'πrl + 2πr²'],
        ['Capsule (cylinder + 2 hemispheres)', '2πrh + 4πr²'],
        ['Tent (cylinder + cone)', '2πrh + πrl'],
        ['Hemisphere on a cube face', '6a² + πr²'],
        ['Vessel (hemisphere + open cylinder)', '2πr² + 2πrh'],
        ['Cylinder with a cone hollowed out', '2πrh + πr² + πrl']
      ] },
      { title: 'Problem → Answer', pairs: [
        ['Two 64 cm³ cubes joined end to end', '160 cm²'],
        ['Capsule 14 mm long, 5 mm wide', '220 mm²'],
        ['Tent: r 2 m, h 2.1 m, slant 2.8 m', '44 m²'],
        ['Toy: r 3.5 cm, total height 15.5 cm', '214.5 cm²'],
        ['Rachel\'s model: 3 cm wide, 12 cm long', '66 cm³'],
        ['Lead shots to spill 1/4 of the cone', '100']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 2, q: 'Two cubes, each of volume 64 cm³, are joined end to end. Find the surface area of the resulting cuboid.',
        keypoints: [
          { text: 'Edge = 4 cm; cuboid 8 × 4 × 4', kw: ['8'] },
          { text: 'TSA = 2(32 + 16 + 32) = 160 cm²', kw: ['160'] }
        ],
        model: 'a³ = 64 → a = 4 cm\nCuboid: l = 8 cm, b = 4 cm, h = 4 cm\nTSA = 2(lb + bh + hl) = 2(32 + 16 + 32) = 2 × 80 = 160 cm²' },
      { marks: 2, q: 'A solid is in the shape of a cone standing on a hemisphere with both their radii being 1 cm and the height of the cone equal to its radius. Find the volume of the solid in terms of π.',
        keypoints: [
          { text: 'Hemisphere (2/3)π, cone (1/3)π', kw: ['2/3', '1/3'] },
          { text: 'Volume = π cm³', kw: ['π'] }
        ],
        model: 'Volume = (2/3)πr³ + (1/3)πr²h\n= (2/3)π(1)³ + (1/3)π(1)²(1)\n= (2/3)π + (1/3)π = π cm³' },
      { marks: 2, q: 'A medicine capsule is a cylinder with two hemispheres stuck to each of its ends. The length of the capsule is 14 mm and its diameter is 5 mm. Find its surface area. (π = 22/7)',
        keypoints: [
          { text: 'r = 2.5 mm, cylinder part = 14 − 5 = 9 mm', kw: ['2.5', '9'] },
          { text: 'SA = 2πrh + 4πr² = 220 mm²', kw: ['220'] }
        ],
        model: 'r = 2.5 mm, length of cylinder part = 14 − 5 = 9 mm\nSA = 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × 22/7 × 2.5 × (9 + 5) = 2 × 22/7 × 2.5 × 14 = 220 mm²' },
      { marks: 2, q: 'A vessel is in the form of a hollow hemisphere mounted by a hollow cylinder. The diameter of the hemisphere is 14 cm and the total height of the vessel is 13 cm. Find the inner surface area of the vessel. (π = 22/7)',
        keypoints: [
          { text: 'r = 7, cylinder height = 6 cm', kw: ['6'] },
          { text: '2πr² + 2πrh = 2πr(r + h)', kw: ['2πr|2 × 22/7'] },
          { text: '= 572 cm²', kw: ['572'] }
        ],
        model: 'r = 7 cm, height of cylinder = 13 − 7 = 6 cm\nInner area = 2πr² + 2πrh = 2πr(r + h)\n= 2 × 22/7 × 7 × 13 = 572 cm²' },
      { marks: 3, q: 'A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of the same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy. (π = 22/7)',
        keypoints: [
          { text: 'Cone height = 12 cm, l = √(12.25 + 144) = 12.5 cm', kw: ['12.5'] },
          { text: 'TSA = πrl + 2πr²', kw: ['πrl|137.5'] },
          { text: '= 137.5 + 77 = 214.5 cm²', kw: ['214.5'] }
        ],
        model: 'r = 3.5 cm, height of cone h = 15.5 − 3.5 = 12 cm\nl = √(3.5² + 12²) = √156.25 = 12.5 cm\nTSA = CSA of cone + CSA of hemisphere = πrl + 2πr²\n= 22/7 × 3.5 × 12.5 + 2 × 22/7 × 3.5²\n= 137.5 + 77 = 214.5 cm²' },
      { marks: 3, q: 'A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have? Find the surface area of the solid. (π = 22/7)',
        keypoints: [
          { text: 'Greatest diameter = 7 cm', kw: ['7'] },
          { text: 'SA = 6a² − πr² + 2πr² = 6a² + πr²', kw: ['πr²|πr^2|38.5'] },
          { text: '= 294 + 38.5 = 332.5 cm²', kw: ['332.5'] }
        ],
        model: 'The hemisphere cannot be wider than a face, so greatest diameter = 7 cm (r = 3.5 cm).\nSA = 6a² − πr² + 2πr² = 6a² + πr²\n= 6 × 49 + 22/7 × 3.5 × 3.5 = 294 + 38.5 = 332.5 cm²' },
      { marks: 3, q: 'A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the remaining solid.',
        keypoints: [
          { text: 'r = l/2', kw: ['l/2'] },
          { text: 'SA = 6l² − πr² + 2πr²', kw: ['6l²|6l^2|6l2'] },
          { text: '= (l²/4)(24 + π)', kw: ['24 + π|24+π'] }
        ],
        model: 'r = l/2\nSA = 6l² − πr² (circle removed) + 2πr² (bowl)\n= 6l² + πr² = 6l² + πl²/4\n= (l²/4)(24 + π)' },
      { marks: 3, q: 'A tent is in the shape of a cylinder surmounted by a conical top. The height and diameter of the cylindrical part are 2.1 m and 4 m, and the slant height of the top is 2.8 m. Find the area of canvas used and its cost at ₹500 per m². (π = 22/7)',
        keypoints: [
          { text: 'Canvas = 2πrh + πrl', kw: ['2πrh|πrl'] },
          { text: '= 22/7 × 2 × (4.2 + 2.8) = 44 m²', kw: ['44'] },
          { text: 'Cost = 44 × 500 = ₹22000', kw: ['22000'] }
        ],
        model: 'r = 2 m, h = 2.1 m, l = 2.8 m\nCanvas = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)\n= 22/7 × 2 × (4.2 + 2.8) = 22/7 × 2 × 7 = 44 m²\nCost = 44 × 500 = ₹22000' },
      { marks: 3, q: 'A wooden article was made by scooping out a hemisphere from each end of a solid cylinder. The height of the cylinder is 10 cm and its base radius is 3.5 cm. Find the total surface area of the article. (π = 22/7)',
        keypoints: [
          { text: 'TSA = 2πrh + 2 × 2πr²', kw: ['2πrh|220'] },
          { text: '= 220 + 154 = 374 cm²', kw: ['374'] }
        ],
        model: 'TSA = CSA of cylinder + 2 × CSA of hemisphere\n= 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × 22/7 × 3.5 × (10 + 7) = 22 × 17 = 374 cm²' },
      { marks: 3, q: 'From a solid cylinder of height 2.4 cm and diameter 1.4 cm, a conical cavity of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the nearest cm². (π = 22/7)',
        keypoints: [
          { text: 'r = 0.7, l = √(0.49 + 5.76) = 2.5 cm', kw: ['2.5'] },
          { text: 'TSA = 2πrh + πr² + πrl', kw: ['πrl|πr²'] },
          { text: '= 17.6 ≈ 18 cm²', kw: ['17.6|18'] }
        ],
        model: 'r = 0.7 cm, h = 2.4 cm\nl = √(0.7² + 2.4²) = √6.25 = 2.5 cm\nTSA = CSA of cylinder + base circle + CSA of cone\n= 2πrh + πr² + πrl = πr(2h + r + l)\n= 22/7 × 0.7 × (4.8 + 0.7 + 2.5) = 2.2 × 8 = 17.6 cm² ≈ 18 cm²' },
      { marks: 3, q: 'Rachel made a model of a cylinder with two cones attached at its ends. The diameter of the model is 3 cm and its length is 12 cm. Each cone has a height of 2 cm. Find the volume of air contained in the model. (π = 22/7)',
        keypoints: [
          { text: 'r = 1.5, cylinder length = 8 cm', kw: ['8'] },
          { text: 'V = πr²(8) + 2 × (1/3)πr²(2) = 21π', kw: ['21π|18π'] },
          { text: '= 66 cm³', kw: ['66'] }
        ],
        model: 'r = 1.5 cm, cylinder length = 12 − 2 − 2 = 8 cm\nCylinder = π(1.5)²(8) = 18π\nTwo cones = 2 × (1/3)π(1.5)²(2) = 3π\nVolume = 21π = 21 × 22/7 = 66 cm³' },
      { marks: 3, q: 'A pen stand made of wood is in the shape of a cuboid with four conical depressions to hold pens. The cuboid is 15 cm × 10 cm × 3.5 cm. The radius of each depression is 0.5 cm and the depth is 1.4 cm. Find the volume of wood in the entire stand. (π = 22/7)',
        keypoints: [
          { text: 'Cuboid = 525 cm³', kw: ['525'] },
          { text: '4 cones = 4 × (1/3) × 22/7 × 0.25 × 1.4 ≈ 1.47 cm³', kw: ['1.47|1.46'] },
          { text: 'Wood = 523.53 cm³', kw: ['523.5'] }
        ],
        model: 'Cuboid = 15 × 10 × 3.5 = 525 cm³\nOne cone = (1/3) × 22/7 × 0.5² × 1.4 = 0.367 cm³ (about)\nFour cones = 1.47 cm³\nWood = 525 − 1.47 = 523.53 cm³' },
      { marks: 3, q: 'A vessel is in the form of an inverted cone of height 8 cm and radius 5 cm at the top, filled with water to the brim. Lead shots, each a sphere of radius 0.5 cm, are dropped in until one-fourth of the water flows out. Find the number of lead shots.',
        keypoints: [
          { text: 'Water out = (1/4) × (1/3)π × 25 × 8 = (50/3)π', kw: ['50/3|200/3'] },
          { text: 'One shot = (4/3)π(0.5)³ = π/6', kw: ['π/6|1/6'] },
          { text: 'Number = 100', kw: ['100'] }
        ],
        model: 'Volume of cone = (1/3)π × 5² × 8 = (200/3)π cm³\nWater that flows out = (1/4) × (200/3)π = (50/3)π cm³\nVolume of one shot = (4/3)π(0.5)³ = π/6 cm³\nNumber of shots = (50/3)π ÷ (π/6) = (50/3) × 6 = 100' },
      { marks: 5, q: 'Gulab jamuns contain sugar syrup up to about 30% of their volume. Each gulab jamun is shaped like a cylinder with two hemispherical ends, with length 5 cm and diameter 2.8 cm. Find approximately how much syrup would be found in 45 gulab jamuns. (π = 22/7)',
        keypoints: [
          { text: 'r = 1.4, cylinder part = 5 − 2.8 = 2.2 cm', kw: ['2.2'] },
          { text: 'One = πr²(2.2) + (4/3)πr³ ≈ 13.55 + 11.50 = 25.05 cm³', kw: ['25.05|25.1'] },
          { text: '45 × 25.05 ≈ 1127 cm³', kw: ['1127'] },
          { text: 'Syrup = 30% ≈ 338 cm³', kw: ['338'] }
        ],
        model: 'r = 1.4 cm, length of cylinder part h = 5 − 2 × 1.4 = 2.2 cm\nCylinder = πr²h = 22/7 × 1.96 × 2.2 = 13.552 cm³\nTwo hemispheres = (4/3)πr³ = (4/3) × 22/7 × 2.744 ≈ 11.499 cm³\nOne gulab jamun ≈ 25.05 cm³\n45 gulab jamuns ≈ 45 × 25.05 = 1127.3 cm³\nSyrup ≈ 30% of 1127.3 ≈ 338 cm³' },
      { marks: 5, q: 'A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that 1 cm³ of iron has approximately 8 g mass. (π = 3.14)',
        keypoints: [
          { text: 'Big cylinder: π × 144 × 220', kw: ['144'] },
          { text: 'Small cylinder: π × 64 × 60', kw: ['64'] },
          { text: 'Volume = 3.14 × 35520 = 111532.8 cm³', kw: ['111532.8|35520'] },
          { text: 'Mass = 892262.4 g ≈ 892.26 kg', kw: ['892'] }
        ],
        model: 'Big cylinder: r = 12 cm, h = 220 cm → πr²h = π × 144 × 220 = 31680π\nSmall cylinder: r = 8 cm, h = 60 cm → π × 64 × 60 = 3840π\nVolume = 35520π = 35520 × 3.14 = 111532.8 cm³\nMass = 111532.8 × 8 = 892262.4 g ≈ 892.26 kg' },
      { marks: 5, q: 'A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm and its height is 180 cm. (π = 22/7)',
        keypoints: [
          { text: 'Cylinder = π × 3600 × 180 = 648000π', kw: ['648000'] },
          { text: 'Cone = 144000π, hemisphere = 144000π', kw: ['144000'] },
          { text: 'Water left = 360000π', kw: ['360000'] },
          { text: '≈ 1131428.57 cm³ ≈ 1.131 m³', kw: ['1.131|1131428'] }
        ],
        model: 'Cylinder = πr²h = π × 60² × 180 = 648000π\nCone = (1/3)π × 60² × 120 = 144000π\nHemisphere = (2/3)π × 60³ = 144000π\nWater left = 648000π − 288000π = 360000π\n= 360000 × 22/7 ≈ 1131428.57 cm³ ≈ 1.131 m³' },
      { marks: 5, q: 'A spherical glass vessel has a cylindrical neck 8 cm long, 2 cm in diameter; the diameter of the spherical part is 8.5 cm. By measuring the amount of water it holds, a child finds its volume to be 345 cm³. Check whether she is correct, taking the above as the inside measurements, and π = 3.14.',
        keypoints: [
          { text: 'Sphere = (4/3) × 3.14 × 4.25³ ≈ 321.39 cm³', kw: ['321.39|321.4'] },
          { text: 'Neck = 3.14 × 1² × 8 = 25.12 cm³', kw: ['25.12'] },
          { text: 'Total ≈ 346.51 cm³, so she is not correct', kw: ['346.51|346.5', 'not'] }
        ],
        model: 'Sphere: r = 4.25 cm → (4/3)πr³ = (4/3) × 3.14 × 76.765625 ≈ 321.39 cm³\nNeck: r = 1 cm, h = 8 cm → πr²h = 3.14 × 1 × 8 = 25.12 cm³\nTotal ≈ 321.39 + 25.12 = 346.51 cm³\nSo the child is not correct: the volume is 346.51 cm³, not 345 cm³.' }
    ]
  });
})();
