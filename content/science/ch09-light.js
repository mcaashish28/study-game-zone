// CBSE Class 10 Science (NCERT) — Chapter 9: Light – Reflection and Refraction
// No chemical equations in this chapter, so balance is empty and Balance Lab is hidden.
// F1, 2F1, n21, v1 show their numbers as subscripts. Write powers with superscripts (10⁸).
SWG.addChapter('science', {
  id: 'sci-ch09',
  number: 9,
  title: 'Light – Reflection and Refraction',
  icon: '🔦',

  topics: {
    refl: 'Reflection & Plane Mirror',
    sph: 'Spherical Mirrors & Ray Rules',
    mimg: 'Images by Mirrors & Uses',
    mform: 'Sign Convention & Mirror Formula',
    refr: 'Refraction & Glass Slab',
    ri: 'Refractive Index',
    lens: 'Lenses & Images',
    lform: 'Lens Formula & Power'
  },

  summary: [
    'Laws of reflection: angle of incidence = angle of reflection; incident ray, normal and reflected ray lie in the same plane.',
    'Plane mirror image: virtual, erect, same size, as far behind the mirror as the object is in front, laterally inverted.',
    'Spherical mirrors: concave (converging) and convex (diverging). R = 2f. Concave mirrors form real or virtual images depending on object position; convex mirrors always form virtual, erect, diminished images.',
    'New Cartesian sign convention: distances from the pole/optical centre; along incident light +, against it −; heights above the axis +, below −.',
    'Mirror formula: 1/v + 1/u = 1/f; magnification m = h\'/h = −v/u.',
    'Refraction is the bending of light when it passes from one medium to another, because its speed changes. Snell\'s law: sin i / sin r = constant.',
    'Refractive index n = c/v (speed in vacuum ÷ speed in medium). Light bends towards the normal in an optically denser medium. Speed of light in vacuum = 3 × 10⁸ m/s.',
    'Lenses: convex (converging) and concave (diverging). Lens formula: 1/v − 1/u = 1/f; m = h\'/h = v/u.',
    'Power P = 1/f (f in metres), unit dioptre (D). Convex lens: + power; concave lens: − power. Powers of lenses in contact add: P = P1 + P2 + …'
  ],

  flashcards: [
    { topic: 'refl', front: 'What is reflection of light?', back: 'The bouncing back of light when it falls on a smooth, polished surface like a mirror.' },
    { topic: 'refl', front: 'Laws of reflection', back: '1. The angle of incidence is equal to the angle of reflection (∠i = ∠r).\n2. The incident ray, the normal at the point of incidence and the reflected ray all lie in the same plane.\nThese laws apply to ALL reflecting surfaces, including spherical ones.' },
    { topic: 'refl', front: 'Image formed by a plane mirror', back: '• Virtual and erect\n• Same size as the object\n• As far behind the mirror as the object is in front\n• Laterally inverted (left appears right)' },
    { topic: 'refl', front: 'Real image vs virtual image', back: 'Real: formed where rays actually meet; can be taken on a screen; always inverted\nVirtual: rays only appear to meet; cannot be taken on a screen; always erect' },
    { topic: 'refl', front: 'What is lateral inversion?', back: 'In a plane mirror, the left side of the object appears as the right side of the image, and vice versa. That is why "AMBULANCE" is written in reverse on ambulances.' },
    { topic: 'sph', front: 'Concave vs convex mirror', back: 'Concave: reflecting surface curved INWARDS (like a spoon\'s inside); converging mirror\nConvex: reflecting surface curved OUTWARDS (like the back of a spoon); diverging mirror' },
    { topic: 'sph', front: 'Pole, centre of curvature, radius of curvature', back: 'Pole (P): centre of the reflecting surface of the mirror\nCentre of curvature (C): centre of the sphere of which the mirror is a part (in front of a concave mirror, behind a convex mirror)\nRadius of curvature (R): radius of that sphere = distance PC' },
    { topic: 'sph', front: 'Principal axis and aperture', back: 'Principal axis: straight line through the pole and the centre of curvature\nAperture: the diameter of the reflecting surface of the mirror' },
    { topic: 'sph', front: 'Principal focus and focal length', back: 'Principal focus (F): the point where rays parallel to the principal axis meet after reflection (concave), or appear to come from (convex).\nFocal length (f): distance between the pole and the principal focus.' },
    { topic: 'sph', front: 'Relation between radius of curvature and focal length', back: 'R = 2f\nThe principal focus lies midway between the pole and the centre of curvature (for mirrors of small aperture).' },
    { topic: 'sph', front: 'Ray rule 1: ray parallel to the principal axis', back: 'Concave mirror: after reflection, passes THROUGH the principal focus.\nConvex mirror: after reflection, appears to come FROM the principal focus behind the mirror.' },
    { topic: 'sph', front: 'Ray rule 2: ray through (or towards) the principal focus', back: 'After reflection, it goes PARALLEL to the principal axis.' },
    { topic: 'sph', front: 'Ray rule 3: ray through (or towards) the centre of curvature', back: 'It falls along the normal, so it is reflected BACK along the same path.' },
    { topic: 'sph', front: 'Ray rule 4: ray falling on the pole', back: 'It is reflected obliquely at the same angle on the other side of the principal axis (∠i = ∠r about the axis).' },
    { topic: 'mimg', front: 'Concave mirror: object at infinity and beyond C', back: 'Object at infinity -> image at F; highly diminished (point-sized); real and inverted\nObject beyond C -> image between F and C; diminished; real and inverted' },
    { topic: 'mimg', front: 'Concave mirror: object at C and between C and F', back: 'Object at C -> image at C; same size; real and inverted\nObject between C and F -> image beyond C; enlarged; real and inverted' },
    { topic: 'mimg', front: 'Concave mirror: object at F and between P and F', back: 'Object at F -> image at infinity; highly enlarged; real and inverted\nObject between P and F -> image behind the mirror; enlarged; VIRTUAL and ERECT' },
    { topic: 'mimg', front: 'Convex mirror: images', back: 'Object at infinity -> image at F behind the mirror; highly diminished, point-sized; virtual and erect\nObject anywhere else -> image between P and F behind the mirror; diminished; virtual and erect' },
    { topic: 'mimg', front: 'When does a concave mirror give a virtual image?', back: 'Only when the object is between the pole (P) and the focus (F). The image is behind the mirror, enlarged and erect.' },
    { topic: 'mimg', front: 'Uses of concave mirrors', back: '• Torches, search-lights and vehicle headlights — to get a strong parallel beam\n• Shaving mirrors — enlarged image of the face\n• Dentists — to see large images of teeth\n• Solar furnaces — to concentrate sunlight' },
    { topic: 'mimg', front: 'Why are convex mirrors used as rear-view mirrors?', back: 'They always give an erect, diminished image, and they are curved outwards, so they show a much WIDER field of view than a plane mirror.' },
    { topic: 'mimg', front: 'Why is the bulb of a torch placed at the focus of a concave mirror?', back: 'Rays from the focus become parallel after reflection, giving a strong, straight beam of light.' },
    { topic: 'mform', front: 'New Cartesian sign convention (rules)', back: '• The object is placed on the LEFT of the mirror/lens\n• All distances are measured from the pole (mirror) or optical centre (lens)\n• Distances in the direction of incident light (to the right) are +; against it (to the left) are −\n• Heights above the principal axis are +; below are −' },
    { topic: 'mform', front: 'Signs of u and f for mirrors', back: 'Object distance u is always negative (object on the left).\nConcave mirror: f is negative\nConvex mirror: f is positive' },
    { topic: 'mform', front: 'Mirror formula', back: '1/v + 1/u = 1/f\nu = object distance, v = image distance, f = focal length (all from the pole, with signs)' },
    { topic: 'mform', front: 'Magnification by a mirror', back: 'm = h\'/h = −v/u\nm negative -> image real and inverted\nm positive -> image virtual and erect\n|m| > 1 enlarged, |m| < 1 diminished' },
    { topic: 'mform', front: 'Worked example: object 25 cm in front of a concave mirror of focal length 15 cm. Find v.', back: 'u = −25 cm, f = −15 cm\n1/v = 1/f − 1/u = −1/15 + 1/25 = (−5 + 3)/75 = −2/75\nv = −37.5 cm (in front of mirror)\nm = −v/u = −(−37.5)/(−25) = −1.5 -> real, inverted, enlarged' },
    { topic: 'mform', front: 'Worked example: object 20 cm in front of a convex mirror of focal length 20 cm. Find v and m.', back: 'u = −20 cm, f = +20 cm\n1/v = 1/f − 1/u = 1/20 + 1/20 = 1/10\nv = +10 cm (behind mirror)\nm = −v/u = −10/(−20) = +0.5 -> virtual, erect, half the size' },
    { topic: 'refr', front: 'What is refraction of light?', back: 'The change in direction of light when it passes from one transparent medium to another. It happens because the speed of light is different in different media.' },
    { topic: 'refr', front: 'Everyday examples of refraction', back: '• A pencil partly in water looks bent at the surface\n• A tank or pond looks shallower than it really is\n• A lemon in a glass of water looks bigger\n• Letters seen through a glass slab look raised' },
    { topic: 'refr', front: 'Which way does light bend?', back: 'Rarer -> denser medium (e.g. air to glass): bends TOWARDS the normal (slows down)\nDenser -> rarer medium (e.g. glass to air): bends AWAY from the normal (speeds up)\nA ray along the normal goes straight without bending.' },
    { topic: 'refr', front: 'Laws of refraction', back: '1. The incident ray, the refracted ray and the normal at the point of incidence all lie in the same plane.\n2. Snell\'s law: for a given pair of media and colour of light, sin i / sin r = constant.\nThis constant is the refractive index of the second medium with respect to the first.' },
    { topic: 'refr', front: 'Refraction through a rectangular glass slab', back: 'The light bends towards the normal on entering the glass and away from the normal on leaving.\nThe emergent ray is PARALLEL to the incident ray, but shifted sideways — this shift is called lateral displacement.' },
    { topic: 'refr', front: 'Why is the emergent ray parallel to the incident ray in a glass slab?', back: 'The bending at the two opposite parallel faces is equal and opposite, so the ray comes out in the same direction as it went in.' },
    { topic: 'ri', front: 'What is refractive index?', back: 'A number that tells how much light bends (changes speed) when it goes from one medium to another.\nAbsolute refractive index: n = c/v = speed of light in vacuum / speed of light in the medium' },
    { topic: 'ri', front: 'Speed of light in vacuum', back: '3 × 10⁸ m/s (it is almost the same in air).\nLight is fastest in vacuum.' },
    { topic: 'ri', front: 'Relative refractive index', back: 'Refractive index of medium 2 with respect to medium 1:\nn21 = speed in medium 1 / speed in medium 2 = v1/v2\nAlso n21 = n2/n1' },
    { topic: 'ri', front: 'Refractive index values to remember', back: 'Air: 1.0003\nWater: 1.33\nKerosene: 1.44\nCrown glass: 1.52\nDiamond: 2.42 (highest in the table)' },
    { topic: 'ri', front: 'What is an optically denser medium?', back: 'A medium with a HIGHER refractive index; light travels SLOWER in it.\nOptical density is not the same as mass density: kerosene is optically denser than water (n = 1.44 vs 1.33) but floats on water.' },
    { topic: 'ri', front: 'Worked example: refractive index of glass is 1.5. Find the speed of light in glass.', back: 'n = c/v -> v = c/n = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s' },
    { topic: 'ri', front: 'Worked example: speed of light in water = 2.25 × 10⁸ m/s. Find its refractive index.', back: 'n = c/v = (3 × 10⁸)/(2.25 × 10⁸) = 1.33' },
    { topic: 'lens', front: 'Convex vs concave lens', back: 'Convex lens: thicker in the middle than at the edges; converging lens\nConcave lens: thinner in the middle than at the edges; diverging lens' },
    { topic: 'lens', front: 'Optical centre, principal focus, focal length of a lens', back: 'Optical centre (O): central point of the lens; a ray through it goes straight\nPrincipal focus: where parallel rays meet (convex) or appear to come from (concave). A lens has TWO foci, F1 and F2.\nFocal length (f): distance from O to the principal focus' },
    { topic: 'lens', front: 'Ray rules for lenses', back: '1. Ray parallel to the axis -> passes through F2 (convex) or appears to come from F1 (concave)\n2. Ray through F1 (convex) or towards F2 (concave) -> emerges parallel to the axis\n3. Ray through the optical centre -> goes straight without deviation' },
    { topic: 'lens', front: 'Convex lens: object at infinity and beyond 2F1', back: 'Object at infinity -> image at F2; highly diminished, point-sized; real and inverted\nObject beyond 2F1 -> image between F2 and 2F2; diminished; real and inverted' },
    { topic: 'lens', front: 'Convex lens: object at 2F1 and between F1 and 2F1', back: 'Object at 2F1 -> image at 2F2; same size; real and inverted\nObject between F1 and 2F1 -> image beyond 2F2; enlarged; real and inverted' },
    { topic: 'lens', front: 'Convex lens: object at F1 and between F1 and O', back: 'Object at F1 -> image at infinity; highly enlarged; real and inverted\nObject between F1 and O -> image on the SAME side as the object; enlarged; VIRTUAL and ERECT (magnifying glass)' },
    { topic: 'lens', front: 'Concave lens: images', back: 'Object at infinity -> image at F1; highly diminished, point-sized; virtual and erect\nObject anywhere else -> image between F1 and O; diminished; virtual and erect' },
    { topic: 'lens', front: 'Which lens and mirror ALWAYS give virtual, erect, diminished images?', back: 'Concave lens and convex mirror.' },
    { topic: 'lform', front: 'Signs of f for lenses', back: 'Convex lens: f is positive\nConcave lens: f is negative\n(u is still negative for a real object on the left.)' },
    { topic: 'lform', front: 'Lens formula', back: '1/v − 1/u = 1/f\n(Compare the mirror formula: 1/v + 1/u = 1/f)' },
    { topic: 'lform', front: 'Magnification by a lens', back: 'm = h\'/h = v/u\nm negative -> real and inverted\nm positive -> virtual and erect' },
    { topic: 'lform', front: 'What is the power of a lens? Its unit?', back: 'The ability of a lens to converge or diverge light.\nP = 1/f, where f is in METRES.\nUnit: dioptre (D). 1 D = power of a lens of focal length 1 m.' },
    { topic: 'lform', front: 'Sign of power', back: 'Convex lens: positive power (e.g. +2 D)\nConcave lens: negative power (e.g. −2 D)' },
    { topic: 'lform', front: 'Power of lenses in contact', back: 'The net power is the sum: P = P1 + P2 + P3 + …\nOpticians use this to make up the exact power needed.' },
    { topic: 'lform', front: 'Worked example: convex lens f = 10 cm, object at 15 cm. Find v and m.', back: 'u = −15 cm, f = +10 cm\n1/v = 1/f + 1/u = 1/10 − 1/15 = (3 − 2)/30 = 1/30\nv = +30 cm (other side of lens)\nm = v/u = 30/(−15) = −2 -> real, inverted, twice the size' },
    { topic: 'lform', front: 'Worked example: concave lens f = 15 cm, object at 10 cm. Find v and m.', back: 'u = −10 cm, f = −15 cm\n1/v = 1/f + 1/u = −1/15 − 1/10 = (−2 − 3)/30 = −1/6\nv = −6 cm (same side as object)\nm = v/u = (−6)/(−10) = +0.6 -> virtual, erect, diminished' },
    { topic: 'lform', front: 'Worked example: power of a concave lens of focal length 25 cm', back: 'f = −25 cm = −0.25 m\nP = 1/f = 1/(−0.25) = −4 D' }
  ],

  quiz: [
    { topic: 'refl', q: 'According to the laws of reflection, the angle of incidence is…', options: ['Greater than the angle of reflection', 'Equal to the angle of reflection', 'Less than the angle of reflection', 'Always 90°'], answer: 1, explain: '∠i = ∠r for every reflecting surface.' },
    { topic: 'refl', q: 'The image formed by a plane mirror is…', options: ['Real and inverted', 'Virtual and erect, same size', 'Virtual and enlarged', 'Real and diminished'], answer: 1, explain: 'It is also laterally inverted.' },
    { topic: 'refl', q: 'A person stands 2 m in front of a plane mirror. The distance between the person and the image is…', options: ['2 m', '1 m', '4 m', '0 m'], answer: 2, explain: 'The image is 2 m behind the mirror: 2 + 2 = 4 m.' },
    { topic: 'refl', q: 'A real image can be…', options: ['Seen only in a plane mirror', 'Obtained on a screen', 'Always erect', 'Never formed by mirrors'], answer: 1, explain: 'Real images are formed where rays actually meet.' },
    { topic: 'sph', q: 'The relation between focal length and radius of curvature is…', options: ['f = 2R', 'R = 2f', 'R = f', 'R = f/2'], answer: 1, explain: 'F lies midway between P and C.' },
    { topic: 'sph', q: 'A spherical mirror has a radius of curvature of 20 cm. Its focal length is…', options: ['40 cm', '20 cm', '10 cm', '5 cm'], answer: 2, explain: 'f = R/2 = 20/2 = 10 cm.' },
    { topic: 'sph', q: 'The diameter of the reflecting surface of a spherical mirror is called its…', options: ['Focal length', 'Aperture', 'Radius', 'Principal axis'], answer: 1, explain: 'Aperture.' },
    { topic: 'sph', q: 'A ray passing through the centre of curvature of a concave mirror, after reflection…', options: ['Passes through F', 'Goes parallel to the axis', 'Retraces its path', 'Goes straight on'], answer: 2, explain: 'It falls along the normal, so it comes back along the same path.' },
    { topic: 'sph', q: 'A ray parallel to the principal axis, after reflection from a concave mirror, passes through…', options: ['The pole', 'The principal focus', 'The centre of curvature', 'Nowhere'], answer: 1, explain: 'For a convex mirror, it appears to come from F.' },
    { topic: 'sph', q: 'A convex mirror is also called a…', options: ['Converging mirror', 'Diverging mirror', 'Plane mirror', 'Focusing mirror'], answer: 1, explain: 'It spreads out (diverges) parallel rays.' },
    { topic: 'mimg', q: 'An object is placed at C of a concave mirror. The image is…', options: ['At F, diminished', 'At C, same size, real and inverted', 'Beyond C, enlarged', 'Behind the mirror'], answer: 1, explain: 'Object at C -> image at C, same size.' },
    { topic: 'mimg', q: 'A concave mirror gives a virtual, erect, enlarged image when the object is…', options: ['At infinity', 'Beyond C', 'Between P and F', 'At C'], answer: 2, explain: 'This is how a shaving mirror works.' },
    { topic: 'mimg', q: 'Object between C and F of a concave mirror. The image is formed…', options: ['Between F and C', 'Beyond C, enlarged', 'At F', 'Behind the mirror'], answer: 1, explain: 'Real, inverted and enlarged, beyond C.' },
    { topic: 'mimg', q: 'Object at F of a concave mirror. The image is formed…', options: ['At C', 'At infinity', 'At F', 'Behind the mirror'], answer: 1, explain: 'Reflected rays become parallel.' },
    { topic: 'mimg', q: 'A convex mirror always forms an image that is…', options: ['Real and inverted', 'Virtual, erect and diminished', 'Virtual and enlarged', 'Same size'], answer: 1, explain: 'Whatever the object position.' },
    { topic: 'mimg', q: 'The rear-view mirror of a car is…', options: ['Plane', 'Concave', 'Convex', 'Cylindrical'], answer: 2, explain: 'It gives a wider field of view and an erect image.' },
    { topic: 'mimg', q: 'Dentists use ___ mirrors to see large images of teeth.', options: ['Convex', 'Concave', 'Plane', 'No'], answer: 1, explain: 'Teeth are between P and F, giving an enlarged virtual image.' },
    { topic: 'mimg', q: 'Vehicle headlights use concave mirrors with the bulb at…', options: ['C', 'F', 'P', 'Beyond C'], answer: 1, explain: 'Light from F becomes a parallel beam.' },
    { topic: 'mform', q: 'In the New Cartesian sign convention, the object distance u is usually…', options: ['Positive', 'Negative', 'Zero', 'Infinite'], answer: 1, explain: 'The object is on the left, against the direction of incident light.' },
    { topic: 'mform', q: 'The focal length of a concave mirror is taken as…', options: ['Positive', 'Negative', 'Zero', 'Either'], answer: 1, explain: 'F is in front of the mirror (left side).' },
    { topic: 'mform', q: 'The mirror formula is…', options: ['1/v − 1/u = 1/f', '1/v + 1/u = 1/f', 'v + u = f', 'm = v/u'], answer: 1, explain: '1/v − 1/u = 1/f is the lens formula.' },
    { topic: 'mform', q: 'Magnification produced by a mirror is…', options: ['m = v/u', 'm = −v/u', 'm = u/v', 'm = f/u'], answer: 1, explain: 'm = h\'/h = −v/u' },
    { topic: 'mform', q: 'Magnification of a plane mirror is…', options: ['0', '+1', '−1', '2'], answer: 1, explain: 'Same size and erect.' },
    { topic: 'mform', q: 'A negative magnification means the image is…', options: ['Virtual and erect', 'Real and inverted', 'Enlarged', 'Diminished'], answer: 1, explain: 'Positive m means virtual and erect.' },
    { topic: 'mform', q: 'An object is 10 cm in front of a concave mirror of focal length 15 cm. The image distance is…', options: ['+30 cm', '−30 cm', '+6 cm', '−6 cm'], answer: 0, explain: '1/v = −1/15 + 1/10 = 1/30, v = +30 cm (behind the mirror, virtual).' },
    { topic: 'mform', q: 'A concave mirror gives m = −1. The object is at…', options: ['F', 'C', 'Between P and F', 'Infinity'], answer: 1, explain: 'Same-size, real, inverted image at C.' },
    { topic: 'refr', q: 'When light goes from air into glass, it bends…', options: ['Away from the normal', 'Towards the normal', 'Does not bend', 'Back into air'], answer: 1, explain: 'It slows down in the denser medium.' },
    { topic: 'refr', q: 'Light bends when it goes from one medium to another because…', options: ['Its colour changes', 'Its speed changes', 'Its frequency doubles', 'It is reflected'], answer: 1, explain: 'Different media have different speeds of light.' },
    { topic: 'refr', q: 'A ray falling along the normal on a glass slab…', options: ['Bends towards the normal', 'Bends away', 'Goes straight without bending', 'Is reflected'], answer: 2, explain: 'Angle of incidence is 0°.' },
    { topic: 'refr', q: 'In a rectangular glass slab, the emergent ray is…', options: ['Perpendicular to the incident ray', 'Parallel to the incident ray', 'Along the normal', 'Reflected'], answer: 1, explain: 'It is only shifted sideways (lateral displacement).' },
    { topic: 'refr', q: 'Snell\'s law states that…', options: ['sin i × sin r = constant', 'sin i / sin r = constant', 'i = r', 'i + r = 90°'], answer: 1, explain: 'The constant is the refractive index.' },
    { topic: 'refr', q: 'A pool looks shallower than it is because of…', options: ['Reflection', 'Refraction', 'Dispersion', 'Scattering'], answer: 1, explain: 'Light from the bottom bends away from the normal on leaving water.' },
    { topic: 'ri', q: 'The speed of light in vacuum is…', options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10⁵ m/s', '3 × 10¹⁰ m/s'], answer: 1, explain: 'About the same in air.' },
    { topic: 'ri', q: 'Absolute refractive index of a medium is…', options: ['v/c', 'c/v', 'c × v', 'c − v'], answer: 1, explain: 'Speed in vacuum ÷ speed in medium.' },
    { topic: 'ri', q: 'Refractive index of glass is 1.5. The speed of light in glass is…', options: ['1.5 × 10⁸ m/s', '2 × 10⁸ m/s', '4.5 × 10⁸ m/s', '3 × 10⁸ m/s'], answer: 1, explain: 'v = c/n = 3 × 10⁸ / 1.5 = 2 × 10⁸ m/s' },
    { topic: 'ri', q: 'Which has the highest refractive index?', options: ['Water', 'Glass', 'Kerosene', 'Diamond'], answer: 3, explain: 'Diamond: 2.42.' },
    { topic: 'ri', q: 'In which medium does light travel fastest?', options: ['Water (1.33)', 'Glass (1.5)', 'Diamond (2.42)', 'Kerosene (1.44)'], answer: 0, explain: 'Lowest refractive index -> highest speed.' },
    { topic: 'ri', q: 'The refractive index of water is 1.33. The speed of light in water is about…', options: ['2.25 × 10⁸ m/s', '4 × 10⁸ m/s', '1.33 × 10⁸ m/s', '3 × 10⁸ m/s'], answer: 0, explain: 'v = 3 × 10⁸ / 1.33 ≈ 2.25 × 10⁸ m/s' },
    { topic: 'ri', q: 'Kerosene is optically denser than water, but floats on it. This shows that…', options: ['Optical density = mass density', 'Optical density is different from mass density', 'Kerosene has no density', 'Water is optically denser'], answer: 1, explain: 'Optical density depends on the speed of light, not on mass.' },
    { topic: 'lens', q: 'A lens that is thicker in the middle is a…', options: ['Concave lens', 'Convex lens', 'Plane lens', 'Diverging lens'], answer: 1, explain: 'Convex lenses converge light.' },
    { topic: 'lens', q: 'A ray passing through the optical centre of a lens…', options: ['Bends towards F', 'Goes without deviation', 'Is reflected', 'Becomes parallel'], answer: 1, explain: 'It passes straight through.' },
    { topic: 'lens', q: 'Object at 2F1 of a convex lens. The image is…', options: ['At F2, diminished', 'At 2F2, same size, real, inverted', 'Beyond 2F2, enlarged', 'Virtual'], answer: 1, explain: 'Same size, real and inverted.' },
    { topic: 'lens', q: 'A convex lens works as a magnifying glass when the object is…', options: ['At infinity', 'Beyond 2F1', 'Between F1 and the optical centre', 'At 2F1'], answer: 2, explain: 'The image is virtual, erect and enlarged.' },
    { topic: 'lens', q: 'A concave lens always forms an image that is…', options: ['Real and inverted', 'Virtual, erect and diminished', 'Enlarged', 'At infinity'], answer: 1, explain: 'Just like a convex mirror.' },
    { topic: 'lens', q: 'Object between F1 and 2F1 of a convex lens. Image is…', options: ['Between F2 and 2F2', 'Beyond 2F2, enlarged, real and inverted', 'At F2', 'Virtual'], answer: 1, explain: 'This is how a projector works.' },
    { topic: 'lens', q: 'Rays parallel to the axis, after passing through a concave lens…', options: ['Meet at F2', 'Appear to come from F1', 'Go straight', 'Are reflected'], answer: 1, explain: 'Concave lenses diverge light.' },
    { topic: 'lform', q: 'The lens formula is…', options: ['1/v + 1/u = 1/f', '1/v − 1/u = 1/f', 'm = −v/u', 'P = f'], answer: 1, explain: 'For mirrors it is 1/v + 1/u = 1/f.' },
    { topic: 'lform', q: 'Magnification produced by a lens is…', options: ['m = −v/u', 'm = v/u', 'm = u/v', 'm = f/v'], answer: 1, explain: 'm = h\'/h = v/u' },
    { topic: 'lform', q: 'The SI unit of power of a lens is…', options: ['Watt', 'Metre', 'Dioptre', 'Joule'], answer: 2, explain: '1 D = 1 m⁻¹' },
    { topic: 'lform', q: 'The power of a convex lens of focal length 50 cm is…', options: ['+0.5 D', '+2 D', '−2 D', '+50 D'], answer: 1, explain: 'f = 0.5 m, P = 1/0.5 = +2 D' },
    { topic: 'lform', q: 'A lens has power −4 D. It is a…', options: ['Convex lens of f = 25 cm', 'Concave lens of f = 25 cm', 'Convex lens of f = 4 m', 'Concave lens of f = 4 cm'], answer: 1, explain: 'f = 1/P = −0.25 m = −25 cm; negative means concave.' },
    { topic: 'lform', q: 'Two lenses of power +2.0 D and −0.5 D are placed in contact. The net power is…', options: ['+2.5 D', '+1.5 D', '−1.5 D', '−2.5 D'], answer: 1, explain: 'P = 2.0 + (−0.5) = +1.5 D' },
    { topic: 'lform', q: 'A convex lens has f = 10 cm and the object is 15 cm away. The image distance is…', options: ['+30 cm', '−30 cm', '+6 cm', '+15 cm'], answer: 0, explain: '1/v = 1/10 − 1/15 = 1/30, v = +30 cm' },
    { topic: 'lform', q: 'Focal length of a lens of power +0.5 D is…', options: ['0.5 m', '2 m', '5 m', '20 cm'], answer: 1, explain: 'f = 1/P = 1/0.5 = 2 m' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'refl', a: 'The laws of reflection apply to spherical mirrors too.', r: 'The laws of reflection are true for all reflecting surfaces.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'sph', a: 'The focal length of a spherical mirror is half its radius of curvature.', r: 'The principal focus lies midway between the pole and the centre of curvature.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mimg', a: 'Convex mirrors are used as rear-view mirrors.', r: 'Convex mirrors always form real and inverted images.', answer: 2, explain: 'A is true, but R is false — convex mirrors form VIRTUAL, ERECT, diminished images.' },
      { topic: 'mimg', a: 'A concave mirror is used as a shaving mirror.', r: 'When the face is between P and F, it gives an enlarged, erect image.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mform', a: 'The focal length of a convex mirror is taken as positive.', r: 'The principal focus of a convex mirror lies behind the mirror.', answer: 0, explain: 'Both true, and R explains A — behind the mirror is in the direction of incident light.' },
      { topic: 'mform', a: 'A virtual image always has a negative magnification.', r: 'Virtual images are erect.', answer: 3, explain: 'A is false — erect (virtual) images have POSITIVE magnification. R is true.' },
      { topic: 'refr', a: 'A pencil partly dipped in water appears bent at the surface.', r: 'Light changes direction when it passes from water to air.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'refr', a: 'Light bends towards the normal when it goes from glass to air.', r: 'Light speeds up when it enters air from glass.', answer: 3, explain: 'A is false — it bends AWAY from the normal. R is true.' },
      { topic: 'ri', a: 'Light travels slower in diamond than in glass.', r: 'Diamond has a higher refractive index than glass.', answer: 0, explain: 'Both true, and R explains A (v = c/n).' },
      { topic: 'ri', a: 'Kerosene is optically denser than water.', r: 'Kerosene has a higher mass density than water.', answer: 2, explain: 'A is true, but R is false — kerosene has a LOWER mass density (it floats).' },
      { topic: 'lform', a: 'A concave lens has negative power.', r: 'The focal length of a concave lens is negative.', answer: 0, explain: 'Both true, and R explains A (P = 1/f).' },
      { topic: 'lens', a: 'A convex lens can form both real and virtual images.', r: 'A ray through the optical centre goes without deviation.', answer: 1, explain: 'Both true, but R does not explain A — the image type depends on the object position.' }
    ].map(x => ({
      topic: x.topic, fixed: true, answer: x.answer, explain: x.explain,
      q: 'Assertion (A): ' + x.a + '\nReason (R): ' + x.r,
      options: [
        'Both A and R are true, and R is the correct explanation of A',
        'Both A and R are true, but R is NOT the correct explanation of A',
        'A is true, but R is false',
        'A is false, but R is true'
      ]
    }))
  ],

  match: [
    { title: 'Mirror Terms', pairs: [
      ['Pole', 'Centre of the mirror surface'],
      ['Centre of curvature', 'Centre of the sphere'],
      ['Aperture', 'Diameter of the reflecting surface'],
      ['Principal focus', 'Where parallel rays meet'],
      ['R = 2f', 'Radius and focal length'],
      ['Principal axis', 'Line through P and C']
    ] },
    { title: 'Concave Mirror Images', pairs: [
      ['Object at infinity', 'Image at F, point-sized'],
      ['Object beyond C', 'Image between F and C, diminished'],
      ['Object at C', 'Image at C, same size'],
      ['Object between C and F', 'Image beyond C, enlarged'],
      ['Object at F', 'Image at infinity'],
      ['Object between P and F', 'Virtual, erect, behind mirror']
    ] },
    { title: 'Convex Lens Images', pairs: [
      ['Object at infinity', 'Image at F2'],
      ['Object beyond 2F1', 'Between F2 and 2F2'],
      ['Object at 2F1', 'At 2F2, same size'],
      ['Object between F1 and 2F1', 'Beyond 2F2, enlarged'],
      ['Object at F1', 'Image at infinity'],
      ['Object between F1 and O', 'Virtual, erect, enlarged']
    ] },
    { title: 'Uses', pairs: [
      ['Rear-view mirror', 'Convex mirror'],
      ['Shaving mirror', 'Concave mirror'],
      ['Headlight reflector', 'Concave mirror, bulb at F'],
      ['Magnifying glass', 'Convex lens'],
      ['Solar furnace', 'Concave mirror'],
      ['Always diminished virtual image', 'Concave lens']
    ] },
    { title: 'Formulas', pairs: [
      ['Mirror formula', '1/v + 1/u = 1/f'],
      ['Lens formula', '1/v − 1/u = 1/f'],
      ['Mirror magnification', 'm = −v/u'],
      ['Lens magnification', 'm = v/u'],
      ['Refractive index', 'n = c/v'],
      ['Power', 'P = 1/f (f in m)']
    ] },
    { title: 'Refraction Facts', pairs: [
      ['Speed of light in vacuum', '3 × 10⁸ m/s'],
      ['Refractive index of water', '1.33'],
      ['Refractive index of diamond', '2.42'],
      ['Air -> glass', 'Bends towards normal'],
      ['Glass slab', 'Lateral displacement'],
      ['Unit of power', 'Dioptre']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'State the relation between the focal length and radius of curvature of a spherical mirror.',
      keypoints: [
        { text: 'R = 2f (focal length is half the radius of curvature)', kw: ['r = 2f|r=2f|half'] }
      ],
      model: 'R = 2f — the focal length is half the radius of curvature.' },
    { marks: 1, q: 'Which mirror is used as a rear-view mirror in vehicles?',
      keypoints: [
        { text: 'Convex mirror', kw: ['convex'] }
      ],
      model: 'A convex mirror, because it gives an erect, diminished image and a wider field of view.' },
    { marks: 1, q: 'Define 1 dioptre.',
      keypoints: [
        { text: 'Power of a lens of focal length 1 metre', kw: ['1 m|one metre|1 metre'] }
      ],
      model: '1 dioptre is the power of a lens whose focal length is 1 m. (1 D = 1 m⁻¹)' },
    { marks: 1, q: 'The refractive index of diamond is 2.42. What does this mean?',
      keypoints: [
        { text: 'Speed of light in vacuum is 2.42 times its speed in diamond', kw: ['2.42', 'speed'] }
      ],
      model: 'It means the speed of light in vacuum is 2.42 times the speed of light in diamond (n = c/v).' },
    { marks: 2, q: 'State the laws of reflection of light.',
      keypoints: [
        { text: 'Angle of incidence = angle of reflection', kw: ['incidence', 'equal'] },
        { text: 'Incident ray, normal and reflected ray lie in the same plane', kw: ['same plane'] }
      ],
      model: '1. The angle of incidence is equal to the angle of reflection.\n2. The incident ray, the normal to the mirror at the point of incidence and the reflected ray all lie in the same plane.' },
    { marks: 2, q: 'Why are convex mirrors preferred as rear-view mirrors?',
      keypoints: [
        { text: 'They always form an erect (virtual, diminished) image', kw: ['erect'] },
        { text: 'They give a wider field of view', kw: ['wider|wide'] }
      ],
      model: 'Convex mirrors always form an erect, virtual and diminished image. Because they are curved outwards, they also give a much wider field of view, so the driver can see a large area of traffic behind.' },
    { marks: 2, q: 'State the laws of refraction of light.',
      keypoints: [
        { text: 'Incident ray, refracted ray and normal lie in the same plane', kw: ['same plane'] },
        { text: 'Snell\'s law: sin i / sin r = constant', kw: ['sin i', 'constant'] }
      ],
      model: '1. The incident ray, the refracted ray and the normal at the point of incidence all lie in the same plane.\n2. For a given colour of light and a given pair of media, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant: sin i / sin r = constant (Snell\'s law).' },
    { marks: 2, q: 'The refractive index of glass is 1.5. Find the speed of light in glass. (c = 3 × 10⁸ m/s)',
      keypoints: [
        { text: 'n = c/v, so v = c/n', kw: ['c/n|c / n|n = c/v'] },
        { text: 'v = 3 × 10⁸ / 1.5 = 2 × 10⁸ m/s', kw: ['2 × 10⁸|2 x 10⁸|2×10⁸'] }
      ],
      model: 'n = c/v, so v = c/n\nv = (3 × 10⁸) / 1.5 = 2 × 10⁸ m/s' },
    { marks: 2, q: 'Find the power of a concave lens of focal length 2 m.',
      keypoints: [
        { text: 'f = −2 m (concave)', kw: ['-2|−2'] },
        { text: 'P = 1/f = −0.5 D', kw: ['0.5'] }
      ],
      model: 'For a concave lens, f = −2 m.\nP = 1/f = 1/(−2) = −0.5 D' },
    { marks: 2, q: 'What is lateral displacement? Why is the emergent ray from a glass slab parallel to the incident ray?',
      keypoints: [
        { text: 'Sideways shift of the emergent ray from the incident ray direction', kw: ['shift|sideways|perpendicular distance'] },
        { text: 'Bending at the two parallel faces is equal and opposite', kw: ['equal', 'opposite'] }
      ],
      model: 'Lateral displacement is the sideways shift (perpendicular distance) between the direction of the incident ray and the emergent ray.\nThe emergent ray is parallel because the bending at the two parallel faces of the slab is equal and opposite — towards the normal on entering and away from the normal on leaving.' },
    { marks: 3, q: 'An object is placed 10 cm in front of a concave mirror of focal length 15 cm. Find the position, nature and magnification of the image.',
      keypoints: [
        { text: 'u = −10 cm, f = −15 cm; 1/v = 1/f − 1/u', kw: ['-15|−15', '-10|−10'] },
        { text: 'v = +30 cm (behind the mirror)', kw: ['30'] },
        { text: 'm = −v/u = +3; virtual, erect, enlarged', kw: ['virtual', 'erect'] }
      ],
      model: 'u = −10 cm, f = −15 cm\n1/v = 1/f − 1/u = −1/15 + 1/10 = (−2 + 3)/30 = 1/30\nv = +30 cm, i.e. 30 cm behind the mirror.\nm = −v/u = −30/(−10) = +3\nThe image is virtual, erect and three times enlarged.' },
    { marks: 3, q: 'A convex lens has a focal length of 10 cm. An object is placed 15 cm from it. Find the position, nature and magnification of the image.',
      keypoints: [
        { text: 'u = −15 cm, f = +10 cm; 1/v = 1/f + 1/u', kw: ['-15|−15', '+10'] },
        { text: 'v = +30 cm (on the other side of the lens)', kw: ['30'] },
        { text: 'm = v/u = −2; real, inverted, enlarged', kw: ['real', 'inverted'] }
      ],
      model: 'u = −15 cm, f = +10 cm\n1/v = 1/f + 1/u = 1/10 − 1/15 = (3 − 2)/30 = 1/30\nv = +30 cm, on the other side of the lens.\nm = v/u = 30/(−15) = −2\nThe image is real, inverted and twice the size of the object.' },
    { marks: 3, q: 'An object is placed 20 cm in front of a convex mirror of focal length 20 cm. Find the position, nature and size of the image.',
      keypoints: [
        { text: 'u = −20 cm, f = +20 cm', kw: ['+20'] },
        { text: 'v = +10 cm (behind the mirror)', kw: ['10'] },
        { text: 'm = +0.5: virtual, erect, half the size', kw: ['0.5', 'virtual'] }
      ],
      model: 'u = −20 cm, f = +20 cm\n1/v = 1/f − 1/u = 1/20 + 1/20 = 1/10\nv = +10 cm, i.e. 10 cm behind the mirror.\nm = −v/u = −10/(−20) = +0.5\nThe image is virtual, erect and half the size of the object.' },
    { marks: 3, q: 'Give two uses each of concave and convex mirrors with reasons.',
      keypoints: [
        { text: 'Concave: torches/headlights (parallel beam), shaving mirror / dentist (enlarged image), solar furnace', kw: ['torch|headlight|shaving|dentist|solar'] },
        { text: 'Convex: rear-view mirror in vehicles', kw: ['rear'] },
        { text: 'Reasons: wider field of view; erect image', kw: ['wider|wide', 'erect'] }
      ],
      model: 'Concave mirrors:\n• Torches and vehicle headlights — the bulb at F gives a strong parallel beam.\n• Shaving mirrors and dentist\'s mirrors — give an enlarged, erect image when the object is between P and F.\n• Solar furnaces — concentrate sunlight at the focus.\nConvex mirrors:\n• Rear-view mirrors in vehicles — always give an erect, diminished image and a wider field of view.\n• Security mirrors in shops and on sharp road bends — for the same reason.' },
    { marks: 3, q: 'What is the New Cartesian sign convention for spherical mirrors?',
      keypoints: [
        { text: 'Object on the left; distances measured from the pole', kw: ['left', 'pole'] },
        { text: 'Distances along incident light positive, against negative', kw: ['positive', 'negative'] },
        { text: 'Heights above the axis positive, below negative', kw: ['above', 'below'] }
      ],
      model: '1. The object is always placed to the left of the mirror.\n2. All distances are measured from the pole of the mirror.\n3. Distances measured in the direction of incident light (to the right) are positive; distances measured against it (to the left) are negative.\n4. Heights measured upwards, above the principal axis, are positive; heights below the axis are negative.' },
    { marks: 3, q: 'Two lenses of power +3.5 D and −2.5 D are placed in contact. Find the power and focal length of the combination. Is it converging or diverging?',
      keypoints: [
        { text: 'P = P1 + P2 = +3.5 − 2.5 = +1 D', kw: ['+1|1 d|1.0'] },
        { text: 'f = 1/P = 1 m = 100 cm', kw: ['1 m|100 cm'] },
        { text: 'Positive power -> converging (convex)', kw: ['converging|convex'] }
      ],
      model: 'P = P1 + P2 = (+3.5) + (−2.5) = +1 D\nf = 1/P = 1/1 = 1 m = 100 cm\nThe power is positive, so the combination acts as a converging (convex) lens.' },
    { marks: 5, q: 'Draw (describe) ray diagrams to show the image formed by a concave mirror when the object is placed (a) at infinity, (b) beyond C, (c) at C, (d) between C and F, (e) at F, and (f) between P and F. State the position, size and nature in each case.',
      keypoints: [
        { text: '(a) Infinity -> at F, point-sized, real, inverted', kw: ['infinity', 'point'] },
        { text: '(b) Beyond C -> between F and C, diminished, real, inverted', kw: ['between f and c', 'diminished'] },
        { text: '(c) At C -> at C, same size, real, inverted', kw: ['same size'] },
        { text: '(d) Between C and F -> beyond C, enlarged; (e) at F -> at infinity', kw: ['beyond c', 'enlarged'] },
        { text: '(f) Between P and F -> behind the mirror, enlarged, virtual, erect', kw: ['behind', 'virtual', 'erect'] }
      ],
      model: 'Use two rays: one parallel to the axis (reflects through F) and one through C (reflects back along itself).\n(a) Object at infinity -> image at F; highly diminished, point-sized; real and inverted.\n(b) Object beyond C -> image between F and C; diminished; real and inverted.\n(c) Object at C -> image at C; same size; real and inverted.\n(d) Object between C and F -> image beyond C; enlarged; real and inverted.\n(e) Object at F -> image at infinity; highly enlarged; real and inverted.\n(f) Object between P and F -> image behind the mirror; enlarged; virtual and erect.' },
    { marks: 5, q: 'What is refraction? State the laws of refraction. Define absolute refractive index and find the refractive index of glass with respect to water. (n of glass = 1.5, n of water = 1.33)',
      keypoints: [
        { text: 'Refraction: change in direction of light going from one medium to another (speed changes)', kw: ['direction|bending', 'medium'] },
        { text: 'Incident ray, refracted ray and normal in same plane', kw: ['same plane'] },
        { text: 'Snell\'s law: sin i / sin r = constant', kw: ['sin i'] },
        { text: 'Absolute refractive index n = c/v', kw: ['c/v'] },
        { text: 'n(glass, water) = 1.5/1.33 ≈ 1.13', kw: ['1.13'] }
      ],
      model: 'Refraction is the change in direction of light when it passes obliquely from one transparent medium to another, because the speed of light is different in the two media.\nLaws:\n1. The incident ray, the refracted ray and the normal at the point of incidence lie in the same plane.\n2. Snell\'s law: sin i / sin r = constant for a given pair of media and colour of light.\nAbsolute refractive index of a medium: n = c/v = speed of light in vacuum / speed of light in the medium.\nRefractive index of glass with respect to water = n(glass)/n(water) = 1.5/1.33 ≈ 1.13.' },
    { marks: 5, q: 'Describe the images formed by a convex lens for the object at (a) infinity, (b) beyond 2F1, (c) at 2F1, (d) between F1 and 2F1, (e) at F1, (f) between F1 and O. Which case is used in a magnifying glass?',
      keypoints: [
        { text: '(a) Infinity -> at F2, point-sized, real, inverted', kw: ['infinity', 'f2'] },
        { text: '(b) Beyond 2F1 -> between F2 and 2F2, diminished', kw: ['diminished'] },
        { text: '(c) At 2F1 -> at 2F2, same size; (d) between F1 and 2F1 -> beyond 2F2, enlarged', kw: ['same size', 'enlarged'] },
        { text: '(e) At F1 -> at infinity, highly enlarged', kw: ['highly enlarged'] },
        { text: '(f) Between F1 and O -> same side, virtual, erect, enlarged — magnifying glass', kw: ['virtual', 'magnifying'] }
      ],
      model: '(a) Object at infinity -> image at F2; highly diminished, point-sized; real and inverted.\n(b) Object beyond 2F1 -> image between F2 and 2F2; diminished; real and inverted.\n(c) Object at 2F1 -> image at 2F2; same size; real and inverted.\n(d) Object between F1 and 2F1 -> image beyond 2F2; enlarged; real and inverted.\n(e) Object at F1 -> image at infinity; highly enlarged; real and inverted.\n(f) Object between F1 and optical centre O -> image on the same side as the object; enlarged; virtual and erect.\nCase (f) is used in a magnifying glass.' },
    { marks: 4, q: 'CASE STUDY: Arjun placed a candle 25 cm in front of a concave mirror of focal length 15 cm and moved a screen until he got a sharp image. The candle flame is 4 cm tall.\n(a) Find the image distance.\n(b) Find the magnification.\n(c) Find the height of the image.\n(d) State the nature of the image.',
      keypoints: [
        { text: '(a) v = −37.5 cm', kw: ['37.5'] },
        { text: '(b) m = −1.5', kw: ['1.5'] },
        { text: '(c) h\' = −6 cm', kw: ['6 cm'] },
        { text: '(d) Real, inverted, enlarged', kw: ['real', 'inverted'] }
      ],
      model: 'u = −25 cm, f = −15 cm, h = +4 cm\n(a) 1/v = 1/f − 1/u = −1/15 + 1/25 = (−5 + 3)/75 = −2/75, so v = −37.5 cm (in front of the mirror).\n(b) m = −v/u = −(−37.5)/(−25) = −1.5\n(c) h\' = m × h = −1.5 × 4 = −6 cm (6 cm tall, below the axis)\n(d) The image is real, inverted and enlarged.' },
    { marks: 4, q: 'CASE STUDY: An optician gives Rina a lens of power −2.5 D.\n(a) Is the lens convex or concave?\n(b) Find its focal length.\n(c) What kind of image will it always form?\n(d) If another lens of +1.5 D is placed in contact with it, what is the net power?',
      keypoints: [
        { text: '(a) Concave (negative power)', kw: ['concave'] },
        { text: '(b) f = 1/P = −0.4 m = −40 cm', kw: ['40'] },
        { text: '(c) Virtual, erect, diminished', kw: ['virtual', 'diminished'] },
        { text: '(d) P = −2.5 + 1.5 = −1 D', kw: ['-1 d|−1 d|-1.0|−1.0'] }
      ],
      model: '(a) Concave lens, because the power is negative.\n(b) f = 1/P = 1/(−2.5) = −0.4 m = −40 cm.\n(c) A concave lens always forms a virtual, erect and diminished image.\n(d) Net power P = (−2.5) + (+1.5) = −1.0 D.' },
    { marks: 4, q: 'CASE STUDY: Sana put a coin at the bottom of an empty cup and moved back until it just disappeared. When her friend poured water into the cup, the coin became visible again.\n(a) Name the phenomenon.\n(b) Why did the coin become visible?\n(c) When light goes from water to air, does it bend towards or away from the normal?\n(d) Give one more everyday example of this phenomenon.',
      keypoints: [
        { text: '(a) Refraction of light', kw: ['refraction'] },
        { text: '(b) Light from the coin bends at the water surface and reaches the eye; coin appears raised', kw: ['bend', 'raised|higher|eye'] },
        { text: '(c) Away from the normal', kw: ['away'] },
        { text: '(d) Pencil looks bent in water / pool looks shallower', kw: ['pencil|shallow|lemon'] }
      ],
      model: '(a) Refraction of light.\n(b) Light from the coin bends at the water–air surface and reaches her eye, so the coin appears raised (higher) and comes into view.\n(c) Away from the normal, because light goes from a denser to a rarer medium and speeds up.\n(d) A pencil partly in water looks bent; a swimming pool looks shallower than it is.' }
  ]
});
