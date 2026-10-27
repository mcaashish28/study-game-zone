// CBSE Class 10 Science (NCERT) — Chapter 12: Magnetic Effects of Electric Current
// Follows the rationalised syllabus: electric motor (in detail), electromagnetic induction
// and generators are not included.
// No chemical equations, so balance is empty and Balance Lab is hidden.
SWG.addChapter('science', {
  id: 'sci-ch12',
  number: 12,
  title: 'Magnetic Effects of Electric Current',
  icon: '🧲',

  topics: {
    field: 'Magnetic Field & Field Lines',
    straight: 'Straight Conductor & Right-Hand Rule',
    loop: 'Circular Loop & Solenoid',
    force: 'Force on a Conductor',
    acdc: 'AC and DC',
    domestic: 'Domestic Electric Circuits',
    safety: 'Safety: Fuse, Earthing & Faults'
  },

  summary: [
    'Oersted found that a current in a wire deflects a nearby compass needle — electricity and magnetism are linked.',
    'Magnetic field lines go from N to S outside a magnet (S to N inside), form closed curves, never intersect, and are closer where the field is stronger.',
    'A straight current-carrying wire makes concentric circular field lines. Right-hand thumb rule: thumb along current, curled fingers show the field direction.',
    'The field of a circular loop is strongest at its centre and grows with the number of turns. A solenoid gives a uniform field inside, like a bar magnet; with a soft iron core it is an electromagnet.',
    'A current-carrying conductor in a magnetic field feels a force, greatest when the current is perpendicular to the field. Fleming\'s left-hand rule: Forefinger = Field, Middle finger = Current, Thumb = Motion (force).',
    'DC flows in one direction (cells). AC reverses direction periodically; in India its frequency is 50 Hz, so it changes direction every 1/100 s. AC can be sent over long distances with less loss.',
    'Domestic supply: 220 V AC. Live wire (red/brown), neutral (black/blue), earth (green). Separate 15 A (heavy appliances) and 5 A (bulbs, fans) circuits; appliances connected in parallel.',
    'Fuses and MCBs protect against short-circuiting and overloading. Earthing gives a low-resistance path to the ground and protects from electric shock.'
  ],

  flashcards: [
    { topic: 'field', front: 'What did Hans Christian Oersted discover?', back: 'In 1820 he found that a compass needle placed near a wire is deflected when current flows through the wire. This showed that electricity and magnetism are related.' },
    { topic: 'field', front: 'What is a compass needle?', back: 'A small bar magnet. Its north-seeking end points north, its south-seeking end points south.' },
    { topic: 'field', front: 'What is a magnetic field?', back: 'The region around a magnet in which its force can be detected. It has both size (strength) and direction.' },
    { topic: 'field', front: 'What are magnetic field lines?', back: 'Imaginary lines along which a free north pole would move. They show the direction and strength of a magnetic field. Iron filings near a magnet line up along them.' },
    { topic: 'field', front: 'Direction of field lines around a bar magnet', back: 'Outside the magnet: from the NORTH pole to the SOUTH pole\nInside the magnet: from SOUTH to NORTH\nSo field lines are closed curves.' },
    { topic: 'field', front: 'How is the strength of a magnetic field shown by field lines?', back: 'Where field lines are CLOSER together (crowded), the field is stronger. Near the poles, lines are crowded, so the field is strongest there.' },
    { topic: 'field', front: 'Why do two magnetic field lines never intersect?', back: 'If they crossed, a compass needle at the crossing point would point in two directions at once, which is impossible.' },
    { topic: 'field', front: 'Properties of magnetic field lines', back: '• Go from N to S outside the magnet, S to N inside\n• Are closed curves\n• Never intersect\n• Closer lines = stronger field\n• The tangent at any point gives the field direction there' },
    { topic: 'field', front: 'How can you plot field lines with a compass?', back: 'Place a compass near the north pole of a magnet and mark the ends of the needle. Move the compass so its south end is at the last mark, mark again, and continue to the south pole. Join the dots to get a field line.' },
    { topic: 'straight', front: 'Pattern of the magnetic field around a straight current-carrying wire', back: 'Concentric circles around the wire, in a plane perpendicular to the wire.' },
    { topic: 'straight', front: 'How does the field of a straight wire change with current and distance?', back: '• More current -> stronger field\n• Further from the wire -> weaker field (the circles are farther apart)' },
    { topic: 'straight', front: 'What happens if the direction of current in a straight wire is reversed?', back: 'The direction of the magnetic field also reverses — the compass needle deflects the opposite way.' },
    { topic: 'straight', front: 'State the right-hand thumb rule.', back: 'Hold the current-carrying straight wire in your right hand with the thumb pointing in the direction of current. The curled fingers show the direction of the magnetic field lines.\n(Also called Maxwell\'s corkscrew rule.)' },
    { topic: 'straight', front: 'Current flows vertically upward in a wire. What is the field direction (seen from above)?', back: 'Using the right-hand thumb rule (thumb up), the field lines are anticlockwise when seen from above.' },
    { topic: 'straight', front: 'Current flows from east to west in a horizontal wire. What is the field direction just below the wire?', back: 'Using the right-hand thumb rule, the field just below the wire points towards the SOUTH (and above the wire towards the north).' },
    { topic: 'loop', front: 'Field due to a current in a circular loop', back: 'Near the wire, field lines are circles. At the centre of the loop, the field lines are almost straight. Every part of the loop adds to the field at the centre in the same direction.' },
    { topic: 'loop', front: 'How can the field of a circular coil be increased?', back: '• Increase the current\n• Increase the number of turns (n) — the field adds up for each turn\n(Field at the centre ∝ n)' },
    { topic: 'loop', front: 'What is a solenoid?', back: 'A coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.' },
    { topic: 'loop', front: 'Magnetic field of a solenoid', back: 'Its field pattern is like that of a bar magnet: one end acts as a north pole, the other as a south pole.\nInside the solenoid, the field lines are parallel straight lines — the field is UNIFORM (same at all points).' },
    { topic: 'loop', front: 'What is an electromagnet?', back: 'A strong magnetic field inside a solenoid can magnetise a piece of soft iron placed inside it. This soft iron core with the solenoid is an electromagnet. It is a magnet only while current flows.' },
    { topic: 'loop', front: 'Why is soft iron used in an electromagnet?', back: 'Soft iron becomes strongly magnetised when current flows and loses its magnetism as soon as the current is switched off.' },
    { topic: 'loop', front: 'Electromagnet vs permanent magnet', back: 'Electromagnet: soft iron core; temporary (only while current flows); strength can be changed; poles can be reversed\nPermanent magnet: usually steel; magnetism stays; fixed strength and poles' },
    { topic: 'loop', front: 'How can you find which end of a solenoid is the north pole?', back: 'Look at the end: if current flows ANTICLOCKWISE, that end is the north pole; if CLOCKWISE, it is the south pole.\n(Or use the right-hand thumb rule: curl fingers along the current, the thumb points to the north pole.)' },
    { topic: 'force', front: 'Does a magnet exert a force on a current-carrying conductor?', back: 'Yes. André-Marie Ampère suggested that since a current-carrying wire exerts a force on a magnet, a magnet must also exert an equal and opposite force on the wire.' },
    { topic: 'force', front: 'Activity: aluminium rod in a horseshoe magnet', back: 'An aluminium rod hung between the poles of a horseshoe magnet moves (is displaced) when current flows through it.\nReversing the current or the magnet\'s poles reverses the direction of motion.' },
    { topic: 'force', front: 'When is the force on a current-carrying conductor largest?', back: 'When the direction of current is PERPENDICULAR (at right angles) to the magnetic field.\nIf the current is parallel to the field, the force is zero.' },
    { topic: 'force', front: 'State Fleming\'s left-hand rule.', back: 'Stretch the thumb, forefinger and middle finger of the LEFT hand so they are mutually perpendicular.\n• Forefinger -> direction of magnetic Field\n• Middle finger -> direction of Current\n• Thumb -> direction of Motion (force) on the conductor' },
    { topic: 'force', front: 'Trick to remember Fleming\'s left-hand rule', back: 'FBI: thumb = Force (motion), first finger = B (field), middle = I (current)\nOr: First finger = Field, seCond finger = Current, thuMb = Motion' },
    { topic: 'force', front: 'How can the direction of force on a conductor be reversed?', back: 'By reversing the direction of the current OR by reversing the direction of the magnetic field (swap the poles).\n(Reversing both keeps the force in the same direction.)' },
    { topic: 'force', front: 'Name devices that use current-carrying conductors and magnetic fields.', back: 'Electric motors, loudspeakers, microphones and electrical measuring instruments.' },
    { topic: 'force', front: 'A positively charged particle (alpha particle) moving west is deflected north by a magnetic field. What is the field direction?', back: 'Moving positive charge = current towards the west.\nUsing Fleming\'s left-hand rule (middle finger west, thumb north), the forefinger points UPWARD.\nThe magnetic field is upward.' },
    { topic: 'force', front: 'An electron beam moves into a magnetic field. Which way is the current?', back: 'Electrons are negative, so the conventional current is OPPOSITE to the direction in which the electrons move.' },
    { topic: 'force', front: 'What is MRI? How is magnetism used in medicine?', back: 'Nerve impulses in our body are weak electric currents, so they make weak magnetic fields — especially in the heart and brain.\nMRI (Magnetic Resonance Imaging) uses magnetic fields to make images of inside the body for diagnosis.' },
    { topic: 'acdc', front: 'What is direct current (DC)? Give sources.', back: 'Current that always flows in ONE direction.\nSources: electric cells, batteries.' },
    { topic: 'acdc', front: 'What is alternating current (AC)?', back: 'Current that reverses its direction periodically (again and again). Power stations supply AC to our homes.' },
    { topic: 'acdc', front: 'Frequency of AC in India', back: '50 Hz.\nOne cycle takes 1/50 s, and the current changes direction twice in each cycle — so it changes direction every 1/100 s.' },
    { topic: 'acdc', front: 'Advantage of AC over DC', back: 'AC can be transmitted over long distances without much loss of energy.' },
    { topic: 'acdc', front: 'DC vs AC', back: 'DC: one direction only; from cells/batteries; used to store energy (charging)\nAC: reverses direction periodically (50 Hz in India); from power stations; easier to send over long distances' },
    { topic: 'domestic', front: 'How does electricity reach our homes?', back: 'Through overhead poles or underground cables. The supply (mains) comes in through a main fuse and an electricity meter to a distribution box in the house.' },
    { topic: 'domestic', front: 'Three wires in domestic wiring and their colours', back: 'Live (positive) wire — red insulation (new code: brown)\nNeutral (negative) wire — black insulation (new code: light blue)\nEarth wire — green insulation (new code: green-yellow)' },
    { topic: 'domestic', front: 'Potential difference between live and neutral wires in India', back: '220 V' },
    { topic: 'domestic', front: 'Why are there two separate circuits (15 A and 5 A) in a house?', back: '15 A circuit: for high-power appliances — geysers, air coolers, ACs, electric irons\n5 A circuit: for low-power appliances — bulbs, fans, TV\nThis keeps heavy loads separate and safe.' },
    { topic: 'domestic', front: 'Why are household appliances connected in parallel?', back: '• Each appliance gets the same 220 V\n• Each can be switched on or off independently\n• If one fails, others still work' },
    { topic: 'domestic', front: 'Where is the switch connected — live or neutral wire? Why?', back: 'In the LIVE wire. When the switch is off, the appliance is cut off from the high potential, so it is safe to touch.' },
    { topic: 'domestic', front: 'What is the role of the electricity meter and main fuse?', back: 'Meter: records the electrical energy used (in kWh / units).\nMain fuse: protects the whole house wiring from too much current.' },
    { topic: 'safety', front: 'What is an electric fuse? How does it protect?', back: 'A safety device connected in series in the live wire. If too much current flows, the fuse wire heats up (Joule heating), melts and breaks the circuit, preventing damage and fire.' },
    { topic: 'safety', front: 'What is an MCB?', back: 'Miniature circuit breaker — a switch that automatically turns off the circuit when the current is too high. Unlike a fuse, it does not need replacing; it can simply be switched on again after the fault is fixed.' },
    { topic: 'safety', front: 'What is earthing? Why is it important?', back: 'The earth wire is connected to a metal plate buried deep in the ground near the house. Metal bodies of appliances (iron, toaster, fridge) are connected to it.\nIf current leaks to the metal body, it flows to the earth through this low-resistance path, so the user does not get a severe shock.' },
    { topic: 'safety', front: 'What is short-circuiting?', back: 'When the live wire and neutral wire come into direct contact (e.g. damaged insulation or a fault in the appliance). The resistance becomes almost zero, so the current increases suddenly to a very high value.' },
    { topic: 'safety', front: 'What is overloading? What causes it?', back: 'When too much current is drawn in a circuit.\nCauses:\n• Connecting too many appliances to one socket\n• Accidental rise in the supply voltage\n• Live and neutral touching (short circuit)' },
    { topic: 'safety', front: 'Why should many high-power appliances not be used from one socket?', back: 'They together draw a very high current, which overloads the circuit. Wires can overheat and cause a fire.' },
    { topic: 'safety', front: 'Worked example: Can a 2 kW oven be used on a 5 A, 220 V circuit?', back: 'I = P/V = 2000 / 220 ≈ 9.1 A\nThis is more than 5 A, so the circuit would be overloaded and the fuse would blow. It must be used on the 15 A circuit.' },
    { topic: 'safety', front: 'Worked example: Maximum power on a 5 A, 220 V circuit', back: 'P = VI = 220 × 5 = 1100 W\nAppliances totalling more than 1100 W would overload it.' },
    { topic: 'field', front: 'Activity: iron filings around a bar magnet', back: 'Place a bar magnet under a white paper and sprinkle iron filings on it. Tap the paper gently. The filings arrange themselves along the magnetic field lines, crowded near the poles.' },
    { topic: 'straight', front: 'Right-hand thumb rule vs Fleming\'s left-hand rule', back: 'Right-hand thumb rule: finds the DIRECTION OF THE MAGNETIC FIELD around a current-carrying wire.\nFleming\'s left-hand rule: finds the DIRECTION OF THE FORCE on a current-carrying wire placed in a magnetic field.' },
    { topic: 'loop', front: 'Why is the field at the centre of a circular loop strong?', back: 'Every part of the loop produces field lines that point in the SAME direction inside the loop, so they all add up at the centre.' },
    { topic: 'domestic', front: 'What is a distribution box?', back: 'A box where the mains supply is divided into separate circuits for different parts of the house. Each circuit has its own fuse or MCB.' },
    { topic: 'safety', front: 'How is the rating of a fuse chosen?', back: 'Slightly more than the normal current drawn by the circuit or appliance. Too low and it blows during normal use; too high and it will not protect the circuit.' }
  ],

  quiz: [
    { topic: 'field', q: 'Who discovered that a current-carrying wire deflects a compass needle?', options: ['Faraday', 'Oersted', 'Ampère', 'Fleming'], answer: 1, explain: 'Hans Christian Oersted, 1820.' },
    { topic: 'field', q: 'A compass needle is a…', options: ['Small bar magnet', 'Piece of copper', 'Soft iron rod', 'Solenoid'], answer: 0, explain: 'Its north end points north.' },
    { topic: 'field', q: 'Outside a bar magnet, field lines go from…', options: ['S to N', 'N to S', 'Centre to poles', 'Nowhere'], answer: 1, explain: 'Inside the magnet they go S to N.' },
    { topic: 'field', q: 'Inside a bar magnet, field lines go from…', options: ['N to S', 'S to N', 'There are none', 'Both ways'], answer: 1, explain: 'So the lines form closed curves.' },
    { topic: 'field', q: 'Two magnetic field lines never intersect because…', options: ['They are parallel', 'A compass would point in two directions at one point', 'They are curved', 'They are too far apart'], answer: 1, explain: 'There can be only one field direction at a point.' },
    { topic: 'field', q: 'Where is the magnetic field of a bar magnet strongest?', options: ['At the centre', 'Near the poles', 'Far away', 'Equal everywhere'], answer: 1, explain: 'Field lines are most crowded near the poles.' },
    { topic: 'field', q: 'Crowded field lines show a…', options: ['Weak field', 'Strong field', 'Zero field', 'Changing field'], answer: 1, explain: 'Closer lines = stronger field.' },
    { topic: 'field', q: 'The direction of the field at a point on a field line is given by the…', options: ['Normal', 'Tangent', 'Radius', 'Length'], answer: 1, explain: 'The tangent to the line at that point.' },
    { topic: 'straight', q: 'Field lines around a straight current-carrying wire are…', options: ['Straight lines', 'Concentric circles', 'Ellipses', 'Parallel lines'], answer: 1, explain: 'In a plane perpendicular to the wire.' },
    { topic: 'straight', q: 'The direction of the field around a straight wire is found by…', options: ['Fleming\'s left-hand rule', 'Right-hand thumb rule', 'Ohm\'s law', 'Joule\'s law'], answer: 1, explain: 'Thumb along current, fingers curl along the field.' },
    { topic: 'straight', q: 'As you move away from a straight current-carrying wire, the magnetic field…', options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero at once'], answer: 1, explain: 'Field is weaker farther from the wire.' },
    { topic: 'straight', q: 'If the current in a straight wire is increased, the magnetic field…', options: ['Decreases', 'Increases', 'Reverses', 'Does not change'], answer: 1, explain: 'Field strength ∝ current.' },
    { topic: 'straight', q: 'Reversing the current in a straight wire…', options: ['Destroys the field', 'Reverses the field direction', 'Doubles the field', 'Has no effect'], answer: 1, explain: 'The compass deflects the other way.' },
    { topic: 'straight', q: 'Current flows vertically upward in a wire. Seen from above, the field lines are…', options: ['Clockwise', 'Anticlockwise', 'Straight', 'Absent'], answer: 1, explain: 'Right-hand thumb rule with thumb pointing up.' },
    { topic: 'loop', q: 'At the centre of a circular current-carrying loop, the field lines are…', options: ['Circles', 'Almost straight', 'Zero', 'Spirals'], answer: 1, explain: 'All parts of the loop add to the field in the same direction there.' },
    { topic: 'loop', q: 'The field at the centre of a coil increases if…', options: ['The number of turns increases', 'Current decreases', 'The wire is thinner', 'The coil is larger'], answer: 0, explain: 'Field ∝ number of turns and current.' },
    { topic: 'loop', q: 'Inside a long solenoid, the magnetic field is…', options: ['Zero', 'Uniform', 'Strongest at one end', 'Circular'], answer: 1, explain: 'Field lines are parallel straight lines inside.' },
    { topic: 'loop', q: 'The field pattern of a solenoid is similar to that of a…', options: ['Straight wire', 'Bar magnet', 'Horseshoe magnet only', 'Single loop'], answer: 1, explain: 'One end is N, the other S.' },
    { topic: 'loop', q: 'An electromagnet is made by placing ___ inside a solenoid.', options: ['Copper', 'Soft iron', 'Aluminium', 'Plastic'], answer: 1, explain: 'Soft iron is magnetised only while current flows.' },
    { topic: 'loop', q: 'Seen from one end, current in a solenoid flows anticlockwise. That end is a…', options: ['North pole', 'South pole', 'Neutral point', 'Cannot say'], answer: 0, explain: 'Anticlockwise = North, clockwise = South.' },
    { topic: 'loop', q: 'Permanent magnets are usually made of…', options: ['Soft iron', 'Steel', 'Copper', 'Aluminium'], answer: 1, explain: 'Steel keeps its magnetism.' },
    { topic: 'force', q: 'Who suggested that a magnet exerts a force on a current-carrying conductor?', options: ['Oersted', 'Ampère', 'Ohm', 'Joule'], answer: 1, explain: 'André-Marie Ampère.' },
    { topic: 'force', q: 'The force on a current-carrying conductor is maximum when the current is ___ to the field.', options: ['Parallel', 'Perpendicular', 'At 45°', 'Opposite'], answer: 1, explain: 'It is zero when parallel.' },
    { topic: 'force', q: 'The force on a current-carrying conductor in a field is zero when the current is…', options: ['Perpendicular to the field', 'Parallel to the field', 'Very large', 'Alternating'], answer: 1, explain: 'No force when current is along the field.' },
    { topic: 'force', q: 'In Fleming\'s left-hand rule, the forefinger shows the direction of…', options: ['Current', 'Magnetic field', 'Motion', 'Voltage'], answer: 1, explain: 'Middle finger = current, thumb = motion.' },
    { topic: 'force', q: 'In Fleming\'s left-hand rule, the middle finger shows the direction of…', options: ['Current', 'Field', 'Force', 'Charge'], answer: 0, explain: 'Forefinger = field, thumb = force (motion).' },
    { topic: 'force', q: 'In Fleming\'s left-hand rule, the thumb shows the direction of…', options: ['Field', 'Current', 'Motion (force)', 'Voltage'], answer: 2, explain: 'Thumb = motion of the conductor.' },
    { topic: 'force', q: 'The direction of force on a conductor reverses if…', options: ['Current is increased', 'Current direction is reversed', 'The wire is longer', 'Field is stronger'], answer: 1, explain: 'Reversing the field also reverses it.' },
    { topic: 'force', q: 'An alpha particle moving west is deflected north. The magnetic field is…', options: ['Downward', 'Upward', 'Towards east', 'Towards south'], answer: 1, explain: 'Current west, force north -> field upward (Fleming\'s left-hand rule).' },
    { topic: 'force', q: 'Which device uses the force on a current-carrying conductor in a magnetic field?', options: ['Electric heater', 'Loudspeaker', 'Fuse', 'Bulb'], answer: 1, explain: 'Also motors and measuring instruments.' },
    { topic: 'force', q: 'MRI is used to…', options: ['Generate electricity', 'Make images of inside the body', 'Measure current', 'Store charge'], answer: 1, explain: 'Magnetic Resonance Imaging.' },
    { topic: 'acdc', q: 'A cell gives…', options: ['Alternating current', 'Direct current', 'No current', 'Both'], answer: 1, explain: 'DC flows in one direction.' },
    { topic: 'acdc', q: 'The frequency of AC in India is…', options: ['60 Hz', '50 Hz', '100 Hz', '220 Hz'], answer: 1, explain: '50 cycles per second.' },
    { topic: 'acdc', q: 'In India, AC changes direction every…', options: ['1/50 s', '1/100 s', '1 s', '1/220 s'], answer: 1, explain: 'Twice in each cycle of 1/50 s.' },
    { topic: 'acdc', q: 'An advantage of AC over DC is that it…', options: ['Can be stored in cells', 'Can be transmitted over long distances with less loss', 'Flows in one direction', 'Is not dangerous'], answer: 1, explain: 'That is why power stations supply AC.' },
    { topic: 'domestic', q: 'The potential difference between live and neutral wires in Indian homes is…', options: ['110 V', '220 V', '440 V', '50 V'], answer: 1, explain: '220 V at 50 Hz.' },
    { topic: 'domestic', q: 'The live wire usually has ___ insulation.', options: ['Green', 'Black', 'Red', 'Blue'], answer: 2, explain: 'Red (or brown in the new code).' },
    { topic: 'domestic', q: 'The neutral wire usually has ___ insulation.', options: ['Red', 'Black', 'Green', 'Yellow'], answer: 1, explain: 'Black (or light blue in the new code).' },
    { topic: 'domestic', q: 'The earth wire has ___ insulation.', options: ['Red', 'Black', 'Green', 'White'], answer: 2, explain: 'Green (or green-yellow).' },
    { topic: 'domestic', q: 'Geysers and air conditioners are connected to the…', options: ['5 A circuit', '15 A circuit', '1 A circuit', 'Earth wire only'], answer: 1, explain: 'High-power appliances need the 15 A circuit.' },
    { topic: 'domestic', q: 'Bulbs and fans are usually on the…', options: ['5 A circuit', '15 A circuit', '30 A circuit', 'Main fuse only'], answer: 0, explain: 'Low-power appliances.' },
    { topic: 'domestic', q: 'Household appliances are connected in…', options: ['Series', 'Parallel', 'Either', 'Only one at a time'], answer: 1, explain: 'Each gets 220 V and can be switched independently.' },
    { topic: 'domestic', q: 'Switches should be connected in the…', options: ['Neutral wire', 'Live wire', 'Earth wire', 'Any wire'], answer: 1, explain: 'So the appliance is cut off from high potential when switched off.' },
    { topic: 'safety', q: 'A fuse is connected in ___ in the live wire.', options: ['Series', 'Parallel', 'Earth', 'No connection'], answer: 0, explain: 'All current must pass through it.' },
    { topic: 'safety', q: 'A fuse works on the ___ effect of current.', options: ['Magnetic', 'Chemical', 'Heating', 'Lighting'], answer: 2, explain: 'Too much current melts the fuse wire.' },
    { topic: 'safety', q: 'An MCB is better than a fuse because it…', options: ['Never trips', 'Can be reset and need not be replaced', 'Uses more current', 'Is cheaper'], answer: 1, explain: 'Miniature circuit breaker.' },
    { topic: 'safety', q: 'Earthing protects us from…', options: ['High bills', 'Electric shock', 'Low voltage', 'Power cuts'], answer: 1, explain: 'Leaked current flows safely to the earth.' },
    { topic: 'safety', q: 'Earthing is needed for appliances with…', options: ['Plastic bodies', 'Metallic bodies', 'Glass bodies', 'No body'], answer: 1, explain: 'e.g. iron, toaster, fridge.' },
    { topic: 'safety', q: 'Short-circuiting happens when…', options: ['Many appliances are on', 'Live and neutral wires touch directly', 'The fuse melts', 'Voltage falls'], answer: 1, explain: 'Resistance becomes almost zero and current shoots up.' },
    { topic: 'safety', q: 'Connecting too many appliances to one socket causes…', options: ['Earthing', 'Overloading', 'Low current', 'Magnetism'], answer: 1, explain: 'Too much current is drawn.' },
    { topic: 'safety', q: 'A 2 kW oven on a 220 V supply draws about…', options: ['0.9 A', '9.1 A', '91 A', '4.4 A'], answer: 1, explain: 'I = 2000/220 ≈ 9.1 A — too much for a 5 A circuit.' },
    { topic: 'safety', q: 'The maximum power that can be safely used on a 5 A, 220 V circuit is…', options: ['44 W', '1100 W', '2200 W', '225 W'], answer: 1, explain: 'P = VI = 220 × 5 = 1100 W' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'field', a: 'Two magnetic field lines never intersect.', r: 'At the point of intersection, a compass needle would point in two directions, which is impossible.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'field', a: 'Magnetic field lines are closed curves.', r: 'Outside a magnet, field lines go from the south pole to the north pole.', answer: 2, explain: 'A is true, but R is false — outside the magnet they go from NORTH to SOUTH.' },
      { topic: 'straight', a: 'A compass needle deflects when placed near a current-carrying wire.', r: 'A current-carrying wire produces a magnetic field around it.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'straight', a: 'The magnetic field of a straight wire is stronger close to the wire.', r: 'The field lines around a straight wire are straight lines.', answer: 2, explain: 'A is true, but R is false — the field lines are concentric CIRCLES.' },
      { topic: 'loop', a: 'The magnetic field inside a long solenoid is uniform.', r: 'The field lines inside a solenoid are parallel straight lines.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'loop', a: 'Soft iron is used as the core of an electromagnet.', r: 'Soft iron loses its magnetism when the current is switched off.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'force', a: 'A current-carrying conductor placed parallel to a magnetic field feels the maximum force.', r: 'The force is maximum when current is perpendicular to the field.', answer: 3, explain: 'A is false — the force is ZERO when parallel. R is true.' },
      { topic: 'force', a: 'The direction of force on a current-carrying conductor is reversed when the current is reversed.', r: 'Fleming\'s left-hand rule gives the direction of the force.', answer: 1, explain: 'Both true, but R does not explain A.' },
      { topic: 'acdc', a: 'Power stations supply alternating current.', r: 'AC can be transmitted over long distances with less loss of energy.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'domestic', a: 'Household appliances are connected in parallel.', r: 'In parallel, each appliance can be switched on or off independently.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'safety', a: 'Metallic bodies of electric appliances are connected to the earth wire.', r: 'The earth wire gives a low-resistance path for leaked current, protecting the user from shock.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'safety', a: 'During a short circuit, the current in the circuit becomes very low.', r: 'In a short circuit, the live and neutral wires come into direct contact.', answer: 3, explain: 'A is false — the current becomes VERY HIGH because resistance is almost zero. R is true.' }
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
    { title: 'Field Patterns', pairs: [
      ['Bar magnet (outside)', 'N to S'],
      ['Straight wire', 'Concentric circles'],
      ['Centre of a loop', 'Almost straight lines'],
      ['Inside a solenoid', 'Uniform, parallel lines'],
      ['Crowded field lines', 'Strong field'],
      ['Field lines never', 'Intersect']
    ] },
    { title: 'Rules & Scientists', pairs: [
      ['Oersted', 'Current deflects compass'],
      ['Ampère', 'Magnet exerts force on conductor'],
      ['Right-hand thumb rule', 'Field around a wire'],
      ['Fleming\'s left-hand rule', 'Force on a conductor'],
      ['Forefinger', 'Field'],
      ['Middle finger', 'Current']
    ] },
    { title: 'Solenoid & Magnets', pairs: [
      ['Solenoid', 'Coil of many turns'],
      ['Soft iron core', 'Electromagnet'],
      ['Steel', 'Permanent magnet'],
      ['Anticlockwise current at an end', 'North pole'],
      ['Clockwise current at an end', 'South pole'],
      ['More turns', 'Stronger field']
    ] },
    { title: 'AC and DC', pairs: [
      ['Cell or battery', 'Direct current'],
      ['Power station', 'Alternating current'],
      ['AC frequency in India', '50 Hz'],
      ['AC changes direction every', '1/100 s'],
      ['Advantage of AC', 'Less loss over long distances'],
      ['Mains voltage in India', '220 V']
    ] },
    { title: 'House Wiring', pairs: [
      ['Live wire', 'Red (or brown)'],
      ['Neutral wire', 'Black (or light blue)'],
      ['Earth wire', 'Green'],
      ['15 A circuit', 'Geyser, AC, iron'],
      ['5 A circuit', 'Bulbs, fans'],
      ['Switch', 'In the live wire']
    ] },
    { title: 'Safety', pairs: [
      ['Fuse', 'Melts on high current'],
      ['MCB', 'Trips and can be reset'],
      ['Earthing', 'Protects from shock'],
      ['Short circuit', 'Live touches neutral'],
      ['Overloading', 'Too many appliances'],
      ['Metal plate deep in ground', 'Earth connection']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Why does a compass needle get deflected when brought near a bar magnet?',
      keypoints: [
        { text: 'The compass needle is a small magnet; the magnet\'s field exerts a force on it', kw: ['magnet', 'field|force'] }
      ],
      model: 'A compass needle is a small bar magnet. The magnetic field of the bar magnet exerts a force on its poles, so the needle gets deflected.' },
    { marks: 1, q: 'What is the frequency of AC supplied in India?',
      keypoints: [
        { text: '50 Hz', kw: ['50'] }
      ],
      model: '50 Hz — the current changes direction every 1/100 second.' },
    { marks: 1, q: 'Name the rule used to find the direction of force on a current-carrying conductor in a magnetic field.',
      keypoints: [
        { text: 'Fleming\'s left-hand rule', kw: ['left'] }
      ],
      model: 'Fleming\'s left-hand rule.' },
    { marks: 1, q: 'Why is the switch always connected in the live wire?',
      keypoints: [
        { text: 'So that when switched off, the appliance is disconnected from high potential and safe', kw: ['safe|shock|potential|disconnect'] }
      ],
      model: 'So that when the switch is off, the appliance is cut off from the live (high potential) wire and is safe to touch or repair.' },
    { marks: 2, q: 'List two properties of magnetic field lines.',
      keypoints: [
        { text: 'They go from N to S outside the magnet and form closed curves', kw: ['north|n to s', 'closed'] },
        { text: 'They never intersect; closer lines mean a stronger field', kw: ['intersect|cross'] }
      ],
      model: '• Outside a magnet, field lines go from the north pole to the south pole (and S to N inside), so they are closed curves.\n• No two field lines ever intersect.\n• Where field lines are closer, the field is stronger.' },
    { marks: 2, q: 'Why don\'t two magnetic field lines intersect each other?',
      keypoints: [
        { text: 'At the intersection, there would be two directions of field', kw: ['two direction'] },
        { text: 'A compass would point in two directions at once, which is impossible', kw: ['compass|impossible|not possible'] }
      ],
      model: 'If two field lines intersected, there would be two directions of the magnetic field at that point. A compass needle placed there would have to point in two directions at once, which is not possible. So field lines never intersect.' },
    { marks: 2, q: 'State the right-hand thumb rule.',
      keypoints: [
        { text: 'Hold the wire in the right hand with the thumb in the direction of current', kw: ['thumb', 'current'] },
        { text: 'The curled fingers show the direction of the magnetic field', kw: ['finger', 'field'] }
      ],
      model: 'Imagine holding a current-carrying straight conductor in your right hand so that the thumb points in the direction of the current. Then the direction in which your fingers curl around the conductor gives the direction of the magnetic field lines.' },
    { marks: 2, q: 'What is a solenoid? Describe the magnetic field inside it.',
      keypoints: [
        { text: 'A coil of many circular turns of insulated copper wire in a cylinder shape', kw: ['coil', 'turns'] },
        { text: 'The field inside is uniform — parallel straight lines', kw: ['uniform', 'parallel'] }
      ],
      model: 'A solenoid is a coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.\nInside the solenoid, the magnetic field lines are parallel straight lines, so the field is uniform (the same at all points). The solenoid behaves like a bar magnet.' },
    { marks: 2, q: 'When is the force on a current-carrying conductor in a magnetic field (a) maximum and (b) zero?',
      keypoints: [
        { text: '(a) Maximum when current is perpendicular to the field', kw: ['perpendicular|right angle|90'] },
        { text: '(b) Zero when current is parallel to the field', kw: ['parallel'] }
      ],
      model: '(a) The force is maximum when the direction of current is perpendicular (at right angles) to the magnetic field.\n(b) The force is zero when the current is parallel (or antiparallel) to the magnetic field.' },
    { marks: 2, q: 'What is the difference between direct current and alternating current? Give one advantage of AC.',
      keypoints: [
        { text: 'DC flows in one direction; AC reverses direction periodically', kw: ['one direction', 'revers'] },
        { text: 'AC can be transmitted over long distances with less loss', kw: ['long distance', 'loss'] }
      ],
      model: 'Direct current (DC) always flows in one direction (e.g. from a cell).\nAlternating current (AC) reverses its direction periodically — in India, 50 times per second (50 Hz).\nAdvantage of AC: it can be transmitted over long distances without much loss of energy.' },
    { marks: 2, q: 'What is the function of an earth wire? Why is it necessary to earth metallic appliances?',
      keypoints: [
        { text: 'Gives a low-resistance path for current to the earth', kw: ['low', 'resistance', 'earth|ground'] },
        { text: 'If current leaks to the metal body, it goes to earth and the user is protected from shock', kw: ['leak', 'shock'] }
      ],
      model: 'The earth wire is connected to a metal plate deep in the ground. It provides a low-resistance conducting path for current.\nIf the live wire touches the metal body of an appliance (current leaks), the current flows to the earth through this path instead of through the user, so the user is protected from a severe electric shock.' },
    { marks: 3, q: 'Describe an activity to show that a current-carrying straight wire produces a magnetic field around it. How does the field depend on current and distance?',
      keypoints: [
        { text: 'Pass a thick wire vertically through a cardboard; sprinkle iron filings; pass current and tap', kw: ['cardboard', 'iron filings'] },
        { text: 'Filings form concentric circles; a compass shows the direction', kw: ['concentric', 'compass'] },
        { text: 'Field increases with current; decreases with distance', kw: ['current', 'distance'] }
      ],
      model: 'Pass a thick copper wire vertically through the centre of a horizontal cardboard. Connect it to a battery through a key. Sprinkle iron filings on the cardboard, switch on the current and tap the cardboard gently.\nThe iron filings arrange themselves in concentric circles around the wire. A compass placed on a circle shows the direction of the field; reversing the current reverses the compass.\nThe field is stronger with more current and becomes weaker as the distance from the wire increases.' },
    { marks: 3, q: 'Draw (describe) the magnetic field lines of a current-carrying circular loop. How does the field change with the number of turns?',
      keypoints: [
        { text: 'Near the wire, field lines are concentric circles', kw: ['circle'] },
        { text: 'At the centre, lines are nearly straight; all parts add in the same direction', kw: ['centre|center', 'straight'] },
        { text: 'Field increases with the number of turns', kw: ['turns', 'increase|more|stronger'] }
      ],
      model: 'Every small part of the loop acts like a straight wire, so near the wire the field lines are concentric circles. As we move towards the centre, the circles become larger, and at the centre the field lines are nearly straight.\nAll parts of the loop make the field point in the same direction inside the loop, so they add up.\nIf the coil has n turns, the field is n times larger — the field increases with the number of turns (and with the current).' },
    { marks: 3, q: 'What is an electromagnet? How is it different from a permanent magnet? Give two uses.',
      keypoints: [
        { text: 'A soft iron core placed inside a solenoid carrying current', kw: ['soft iron', 'solenoid'] },
        { text: 'Temporary — magnetic only while current flows; strength can be changed; permanent magnet keeps magnetism', kw: ['temporary|only while|switched off'] },
        { text: 'Uses: electric bells, cranes, motors, loudspeakers, MRI', kw: ['bell|crane|motor|loudspeaker|mri|relay'] }
      ],
      model: 'An electromagnet is a soft iron core placed inside a solenoid. When current flows, the strong field inside the solenoid magnetises the soft iron.\nDifferences: an electromagnet is temporary (magnetic only while current flows), its strength can be changed by changing the current or turns, and its poles can be reversed. A permanent magnet (usually steel) keeps its magnetism and has fixed strength and poles.\nUses: electric bells, cranes for lifting scrap iron, electric motors, loudspeakers.' },
    { marks: 3, q: 'State Fleming\'s left-hand rule. An alpha particle (positively charged) moving towards the west is deflected towards the north by a magnetic field. Find the direction of the field.',
      keypoints: [
        { text: 'Thumb, forefinger and middle finger of left hand mutually perpendicular', kw: ['left', 'perpendicular'] },
        { text: 'Forefinger = field, middle finger = current, thumb = motion/force', kw: ['forefinger', 'middle', 'thumb'] },
        { text: 'Current towards west, force north -> field upward', kw: ['upward'] }
      ],
      model: 'Fleming\'s left-hand rule: stretch the thumb, forefinger and middle finger of the left hand so they are mutually perpendicular. If the forefinger points in the direction of the magnetic field and the middle finger in the direction of current, the thumb points in the direction of motion (force) on the conductor.\nThe alpha particle is positive, so the current is towards the west (middle finger). The force is towards the north (thumb). Then the forefinger points upward — the magnetic field is upward.' },
    { marks: 3, q: 'What is (a) short-circuiting and (b) overloading? How does a fuse protect a circuit?',
      keypoints: [
        { text: '(a) Live and neutral wires come into direct contact; current rises sharply', kw: ['live', 'neutral', 'contact|touch'] },
        { text: '(b) Too much current drawn — too many appliances in one socket or voltage rise', kw: ['too many|many appliances|voltage'] },
        { text: 'Fuse wire melts due to heating and breaks the circuit', kw: ['melt', 'break|stop|cut'] }
      ],
      model: '(a) Short-circuiting: when the live wire and neutral wire come into direct contact (due to damaged insulation or a fault), the resistance becomes almost zero and the current increases suddenly to a very high value.\n(b) Overloading: when too much current is drawn — by connecting too many appliances to one socket, or by an accidental rise in supply voltage.\nA fuse is connected in series in the live wire. When the current becomes too high, the fuse wire heats up, melts and breaks the circuit, preventing damage to appliances and fire.' },
    { marks: 3, q: 'An electric oven of 2 kW is used on a 220 V domestic circuit with a current rating of 5 A. What will happen? Explain with a calculation.',
      keypoints: [
        { text: 'I = P/V = 2000/220', kw: ['2000', '220'] },
        { text: '≈ 9.1 A, more than 5 A', kw: ['9.1|9.09'] },
        { text: 'Circuit is overloaded; fuse blows / MCB trips; use 15 A circuit', kw: ['overload|fuse|trip'] }
      ],
      model: 'P = 2 kW = 2000 W, V = 220 V\nI = P/V = 2000 / 220 ≈ 9.1 A\nThis is much more than the 5 A rating, so the circuit will be overloaded. The fuse will melt (or the MCB will trip) and cut off the supply. The oven should be used on the 15 A power circuit.' },
    { marks: 5, q: 'Describe a domestic electric circuit: the wires and their colours, voltage, the two circuits, the role of the meter, fuse/MCB and earth wire, and why appliances are in parallel.',
      keypoints: [
        { text: 'Live (red/brown), neutral (black/blue), earth (green); 220 V', kw: ['live', 'neutral', '220'] },
        { text: 'Supply comes through main fuse and electricity meter to the distribution box', kw: ['meter'] },
        { text: '15 A circuit for high-power and 5 A for bulbs and fans', kw: ['15 a', '5 a'] },
        { text: 'Fuse/MCB protects; earth wire protects from shock', kw: ['fuse|mcb', 'earth', 'shock'] },
        { text: 'Appliances in parallel: same voltage, independent switching', kw: ['parallel', 'independ|separately'] }
      ],
      model: 'Electricity reaches the house through overhead poles or underground cables. It passes through the main fuse and the electricity meter (records energy used in kWh) into a distribution box.\nWires: live wire with red (or brown) insulation, neutral wire with black (or light blue) insulation, and earth wire with green insulation. The potential difference between live and neutral is 220 V (AC, 50 Hz).\nTwo circuits: a 15 A circuit for high-power appliances (geysers, ACs, irons) and a 5 A circuit for bulbs and fans.\nEach circuit has a fuse or MCB in the live wire to protect against short-circuiting and overloading. Switches are placed in the live wire.\nThe earth wire is connected to a metal plate deep in the ground; metal bodies of appliances are connected to it so that leaked current goes to the earth and the user is protected from shock.\nAll appliances are connected in parallel so each gets 220 V and can be switched on or off independently.' },
    { marks: 5, q: '(a) Describe the magnetic field of a current-carrying solenoid and compare it with a bar magnet. (b) How can a solenoid be used to make an electromagnet? (c) Give two ways to increase the strength of the magnetic field of a solenoid.',
      keypoints: [
        { text: 'One end acts as N, the other as S — like a bar magnet', kw: ['bar magnet', 'north|n pole'] },
        { text: 'Field inside is uniform — parallel straight lines', kw: ['uniform', 'parallel'] },
        { text: 'Place a soft iron core inside; it becomes magnetised while current flows', kw: ['soft iron'] },
        { text: 'Increase the current', kw: ['current'] },
        { text: 'Increase the number of turns (or use a soft iron core)', kw: ['turns'] }
      ],
      model: '(a) The field pattern of a solenoid is like that of a bar magnet: one end behaves as a north pole and the other as a south pole. Outside, the field lines go from the north end to the south end. Inside the solenoid, the field lines are parallel straight lines, so the field is uniform.\n(b) A piece of soft iron is placed inside the solenoid. When current flows, the strong uniform field inside magnetises the soft iron, forming an electromagnet. It loses its magnetism when the current is switched off.\n(c) The field can be made stronger by:\n• increasing the current\n• increasing the number of turns\n• placing a soft iron core inside' },
    { marks: 4, q: 'CASE STUDY: Simran passed current through a straight wire placed in a north–south direction over a compass needle. The needle deflected. When she reversed the current, the needle deflected the other way.\n(a) What does this show?\n(b) Who first observed this?\n(c) Which rule gives the direction of the magnetic field around the wire?\n(d) What happens to the deflection if the current is increased?',
      keypoints: [
        { text: '(a) A current-carrying wire produces a magnetic field; its direction depends on current direction', kw: ['magnetic field'] },
        { text: '(b) Hans Christian Oersted', kw: ['oersted'] },
        { text: '(c) Right-hand thumb rule', kw: ['right-hand thumb|right hand thumb'] },
        { text: '(d) Deflection increases', kw: ['increase|more|larger'] }
      ],
      model: '(a) A current-carrying wire produces a magnetic field around it, and the direction of the field depends on the direction of the current.\n(b) Hans Christian Oersted (1820).\n(c) The right-hand thumb rule.\n(d) The deflection increases, because a larger current produces a stronger magnetic field.' },
    { marks: 4, q: 'CASE STUDY: A small aluminium rod is hung horizontally between the poles of a horseshoe magnet, with the north pole below and the south pole above the rod. When current is passed through the rod, it moves.\n(a) Why does the rod move?\n(b) Which rule gives the direction of motion?\n(c) What happens if the current is reversed?\n(d) When will the force on the rod be maximum?',
      keypoints: [
        { text: '(a) The magnetic field exerts a force on the current-carrying rod', kw: ['force'] },
        { text: '(b) Fleming\'s left-hand rule', kw: ['left'] },
        { text: '(c) The rod moves in the opposite direction', kw: ['opposite|reverse'] },
        { text: '(d) When current is perpendicular to the field', kw: ['perpendicular|right angle'] }
      ],
      model: '(a) A current-carrying conductor placed in a magnetic field experiences a force, which moves the rod.\n(b) Fleming\'s left-hand rule.\n(c) The direction of force reverses, so the rod moves in the opposite direction. (Reversing the magnet\'s poles would also do this.)\n(d) When the direction of current in the rod is perpendicular to the magnetic field.' },
    { marks: 4, q: 'CASE STUDY: In a house, the fuse often blows when the geyser (2.2 kW) and the electric iron (1 kW) are switched on together on the same 220 V circuit with a 10 A fuse.\n(a) Find the total current drawn.\n(b) Why does the fuse blow?\n(c) What is this situation called?\n(d) Suggest one solution.',
      keypoints: [
        { text: '(a) Total power 3200 W; I = 3200/220 ≈ 14.5 A', kw: ['3200', '14.5'] },
        { text: '(b) Current is more than the 10 A rating, so the fuse wire melts', kw: ['10 a', 'melt'] },
        { text: '(c) Overloading', kw: ['overload'] },
        { text: '(d) Use them on separate circuits / use one at a time / use the 15 A circuit', kw: ['separate|one at a time|15 a|different'] }
      ],
      model: '(a) Total power = 2200 + 1000 = 3200 W\nI = P/V = 3200 / 220 ≈ 14.5 A\n(b) 14.5 A is more than the fuse rating of 10 A, so the fuse wire heats up, melts and breaks the circuit.\n(c) Overloading.\n(d) Do not use both on the same circuit at the same time — use them one at a time, or connect the geyser to a separate 15 A power circuit.' }
  ]
});
