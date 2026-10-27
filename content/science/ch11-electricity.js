// CBSE Class 10 Science (NCERT) — Chapter 11: Electricity
// Use Unicode superscripts for powers (I²R, 10⁶) — plain digits after a letter show as subscripts.
// No chemical equations, so balance is empty and Balance Lab is hidden.
SWG.addChapter('science', {
  id: 'sci-ch11',
  number: 11,
  title: 'Electricity',
  icon: '⚡',

  topics: {
    charge: 'Charge & Current',
    pd: 'Potential Difference & Circuits',
    ohm: 'Ohm\'s Law',
    resist: 'Resistance & Resistivity',
    series: 'Resistors in Series',
    parallel: 'Resistors in Parallel',
    heat: 'Heating Effect',
    power: 'Electric Power & Energy'
  },

  summary: [
    'Electric current is the rate of flow of charge: I = Q/t. SI unit: ampere (A) = 1 C/s. Charge on an electron = 1.6 × 10⁻¹⁹ C; 1 C ≈ 6 × 10¹⁸ electrons. Ammeter is connected in series.',
    'Conventional current flows from + to −, opposite to the flow of electrons.',
    'Potential difference V = W/Q. SI unit: volt (V) = 1 J/C. Voltmeter is connected in parallel.',
    'Ohm\'s law: at constant temperature, V = IR. The V–I graph is a straight line through the origin. 1 Ω = 1 V/A.',
    'R = ρl/A: resistance increases with length, decreases with area, and depends on the material. ρ (resistivity) is in Ω m. Alloys like nichrome have high resistivity.',
    'Series: Rs = R1 + R2 + R3 (same current). Parallel: 1/Rp = 1/R1 + 1/R2 + 1/R3 (same voltage). Homes use parallel wiring.',
    'Joule\'s law of heating: H = I²Rt. Used in heaters, irons, bulbs (tungsten filament) and fuses.',
    'Power P = VI = I²R = V²/R. SI unit: watt (W). Commercial unit of energy: 1 kWh = 3.6 × 10⁶ J (1 unit).'
  ],

  flashcards: [
    { topic: 'charge', front: 'What is electric current?', back: 'The rate of flow of electric charge through a conductor.\nI = Q/t\nQ = charge (coulomb), t = time (second)' },
    { topic: 'charge', front: 'SI unit of current. Define 1 ampere.', back: 'Ampere (A).\n1 ampere is the current when 1 coulomb of charge flows through a conductor in 1 second.\n1 A = 1 C/s' },
    { topic: 'charge', front: 'SI unit of charge and the charge on an electron', back: 'Coulomb (C).\nCharge on one electron = 1.6 × 10⁻¹⁹ C (negative).' },
    { topic: 'charge', front: 'How many electrons make 1 coulomb of charge?', back: 'n = Q/e = 1 / (1.6 × 10⁻¹⁹) ≈ 6.25 × 10¹⁸ electrons\n(NCERT rounds this to about 6 × 10¹⁸.)' },
    { topic: 'charge', front: 'Direction of conventional current vs flow of electrons', back: 'Conventional current flows from the positive (+) terminal to the negative (−) terminal.\nElectrons flow the opposite way: from − to +.' },
    { topic: 'charge', front: 'What instrument measures current? How is it connected?', back: 'Ammeter — always connected in SERIES in the circuit.' },
    { topic: 'charge', front: 'Small units of current', back: '1 milliampere (mA) = 10⁻³ A\n1 microampere (μA) = 10⁻⁶ A' },
    { topic: 'charge', front: 'Worked example: 0.5 A flows through a bulb for 10 minutes. Find the charge.', back: 't = 10 min = 600 s\nQ = I × t = 0.5 × 600 = 300 C' },
    { topic: 'pd', front: 'Why does charge flow in a conductor?', back: 'Charge flows only when there is a difference of electric pressure — a potential difference — between the two ends of the conductor. A cell or battery provides this.' },
    { topic: 'pd', front: 'What is potential difference?', back: 'The work done to move a unit charge from one point to another in a circuit.\nV = W/Q' },
    { topic: 'pd', front: 'SI unit of potential difference. Define 1 volt.', back: 'Volt (V).\n1 volt is the potential difference when 1 joule of work is done to move 1 coulomb of charge.\n1 V = 1 J/C' },
    { topic: 'pd', front: 'What instrument measures potential difference? How is it connected?', back: 'Voltmeter — connected in PARALLEL across the points where the potential difference is measured.' },
    { topic: 'pd', front: 'Worked example: How much work is done to move 2 C across 12 V?', back: 'W = V × Q = 12 × 2 = 24 J' },
    { topic: 'pd', front: 'What is an electric circuit?', back: 'A continuous, closed path of an electric current.\nIf the circuit is broken (switch off), current stops flowing.' },
    { topic: 'pd', front: 'Name 6 common circuit symbols.', back: '• Electric cell: a long line (+) and a short line (−)\n• Battery: two or more cells joined\n• Plug key / switch (open or closed)\n• Wire joint and wires crossing without joining\n• Bulb, resistor, rheostat (variable resistance)\n• Ammeter (A in a circle), voltmeter (V in a circle)' },
    { topic: 'pd', front: 'What is a rheostat?', back: 'A variable resistance used to change the current in a circuit without changing the voltage source.' },
    { topic: 'ohm', front: 'State Ohm\'s law.', back: 'The current through a metallic conductor is directly proportional to the potential difference across its ends, provided its temperature remains the same.\nV ∝ I, so V = IR' },
    { topic: 'ohm', front: 'What does the V–I graph look like for a conductor that obeys Ohm\'s law?', back: 'A straight line passing through the origin. The slope gives the resistance (R = V/I).' },
    { topic: 'ohm', front: 'What is resistance? SI unit?', back: 'The property of a conductor to oppose the flow of charge through it.\nSI unit: ohm (Ω).\n1 Ω = 1 V / 1 A' },
    { topic: 'ohm', front: 'Define 1 ohm.', back: 'If a potential difference of 1 V across a conductor makes a current of 1 A flow through it, its resistance is 1 Ω.' },
    { topic: 'ohm', front: 'If resistance is doubled (same voltage), what happens to the current?', back: 'I = V/R, so current becomes HALF.' },
    { topic: 'ohm', front: 'Worked example: A 1100 Ω heater coil works on 220 V. Find the current.', back: 'I = V/R = 220 / 1100 = 0.2 A' },
    { topic: 'ohm', front: 'Worked example: 2 A flows through a 5 Ω resistor. Find the potential difference.', back: 'V = IR = 2 × 5 = 10 V' },
    { topic: 'resist', front: 'On what factors does the resistance of a conductor depend?', back: '• Length (l): R ∝ l — longer wire, more resistance\n• Area of cross-section (A): R ∝ 1/A — thicker wire, less resistance\n• Nature of the material\n• Temperature' },
    { topic: 'resist', front: 'What is resistivity? Formula and SI unit.', back: 'R = ρl/A, so ρ = RA/l\nρ (rho) is the resistivity — a property of the material.\nSI unit: ohm metre (Ω m).' },
    { topic: 'resist', front: 'Does resistivity change with length or thickness of a wire?', back: 'No. Resistivity depends only on the material (and temperature), not on the size of the wire. Resistance depends on size.' },
    { topic: 'resist', front: 'Resistivity range of conductors and insulators', back: 'Metals and alloys: very low, 10⁻⁸ to 10⁻⁶ Ω m — good conductors\nInsulators (rubber, glass): very high, 10¹² to 10¹⁷ Ω m' },
    { topic: 'resist', front: 'Why are alloys used in heating devices?', back: 'Alloys (like nichrome) have higher resistivity than pure metals and do not oxidise (burn) easily at high temperatures.' },
    { topic: 'resist', front: 'Why are copper and aluminium used for transmission wires?', back: 'They have very low resistivity, so little energy is wasted as heat.' },
    { topic: 'resist', front: 'Why is tungsten used for bulb filaments?', back: 'It has a very high melting point (3380 °C) and high resistivity, so it can glow white-hot without melting.' },
    { topic: 'resist', front: 'A wire is stretched to double its length. What happens to its resistance?', back: 'Volume stays the same, so area becomes half.\nR = ρl/A -> length ×2, area ×½ -> resistance becomes 4 TIMES.' },
    { topic: 'resist', front: 'Which is a better conductor: material with resistivity 1.6 × 10⁻⁸ Ω m or 100 × 10⁻⁸ Ω m?', back: 'The one with LOWER resistivity — 1.6 × 10⁻⁸ Ω m (silver/copper range). The other is like nichrome.' },
    { topic: 'series', front: 'Equivalent resistance in series', back: 'Rs = R1 + R2 + R3\nThe total resistance is the SUM, so it is more than any single resistor.' },
    { topic: 'series', front: 'What stays the same in a series circuit?', back: 'The CURRENT is the same through every resistor.\nThe total voltage is shared: V = V1 + V2 + V3' },
    { topic: 'series', front: 'Worked example: 5 Ω, 10 Ω and 15 Ω are in series with a 30 V battery. Find total resistance and current.', back: 'Rs = 5 + 10 + 15 = 30 Ω\nI = V/R = 30 / 30 = 1 A' },
    { topic: 'series', front: 'Why is series arrangement not used in homes?', back: '• If one appliance fails or is switched off, the circuit breaks and ALL stop working\n• All appliances get the same current, but each needs a different current\n• The total resistance becomes large, so current falls' },
    { topic: 'series', front: 'Two bulbs are in series. One fuses. What happens?', back: 'The circuit breaks, so the other bulb also goes off.' },
    { topic: 'parallel', front: 'Equivalent resistance in parallel', back: '1/Rp = 1/R1 + 1/R2 + 1/R3\nThe total resistance is LESS than the smallest resistor.' },
    { topic: 'parallel', front: 'What stays the same in a parallel circuit?', back: 'The POTENTIAL DIFFERENCE across each resistor is the same.\nThe total current is shared: I = I1 + I2 + I3' },
    { topic: 'parallel', front: 'Worked example: 3 Ω and 6 Ω in parallel', back: '1/Rp = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2\nRp = 2 Ω' },
    { topic: 'parallel', front: 'Shortcut for two resistors in parallel', back: 'Rp = (R1 × R2) / (R1 + R2)\ne.g. 4 Ω and 12 Ω: (4 × 12) / (4 + 12) = 48 / 16 = 3 Ω' },
    { topic: 'parallel', front: 'n equal resistors R in parallel', back: 'Rp = R/n\ne.g. three 6 Ω resistors in parallel: 6/3 = 2 Ω' },
    { topic: 'parallel', front: 'Advantages of parallel connection in homes', back: '• Each appliance gets the full voltage (220 V)\n• Each can be switched on or off independently\n• If one fails, the others keep working\n• Each draws the current it needs' },
    { topic: 'parallel', front: 'Highest and lowest resistance from 4 Ω, 8 Ω, 12 Ω and 24 Ω', back: 'Highest (all in series): 4 + 8 + 12 + 24 = 48 Ω\nLowest (all in parallel): 1/4 + 1/8 + 1/12 + 1/24 = 6/24 + 3/24 + 2/24 + 1/24 = 12/24 -> 2 Ω' },
    { topic: 'parallel', front: 'A 10 Ω wire is cut into 5 equal pieces, which are joined in parallel. New resistance?', back: 'Each piece: 10/5 = 2 Ω\nFive 2 Ω in parallel: 2/5 = 0.4 Ω\n(Rule: R/n² = 10/25 = 0.4 Ω)' },
    { topic: 'heat', front: 'What is the heating effect of electric current?', back: 'When current flows through a resistor, some electrical energy is converted into heat. The resistor gets hot.' },
    { topic: 'heat', front: 'State Joule\'s law of heating.', back: 'H = I²Rt\nHeat produced is directly proportional to:\n• the square of the current (I²)\n• the resistance (R)\n• the time for which current flows (t)' },
    { topic: 'heat', front: 'If the current through a heater is doubled, how much more heat is produced?', back: 'H ∝ I², so heat becomes 2² = 4 TIMES.' },
    { topic: 'heat', front: 'Worked example: 2 A flows through 10 Ω for 1 minute. Find the heat.', back: 'H = I²Rt = 2² × 10 × 60 = 4 × 10 × 60 = 2400 J' },
    { topic: 'heat', front: 'Name 4 devices that use the heating effect of current.', back: 'Electric heater, electric iron, toaster, kettle, electric bulb, fuse.' },
    { topic: 'heat', front: 'Why are bulbs filled with nitrogen or argon?', back: 'These are chemically inactive gases. They stop the hot tungsten filament from reacting with oxygen and burning out, so the filament lasts longer.' },
    { topic: 'heat', front: 'What is an electric fuse? How does it work?', back: 'A safety device connected in SERIES with the circuit. It is a wire of an alloy with a low melting point (aluminium, copper, iron, lead etc.).\nIf too much current flows, the fuse wire heats up, melts and breaks the circuit, protecting the appliances.' },
    { topic: 'heat', front: 'Common fuse ratings in homes', back: '1 A, 2 A, 3 A, 5 A and 10 A.\ne.g. a 1 kW iron at 220 V draws about 4.5 A, so it needs a 5 A fuse.' },
    { topic: 'heat', front: 'Why does the cord of a heater not glow while the element does?', back: 'The element is made of nichrome with high resistance, so it produces a lot of heat (H = I²Rt). The cord is copper with very low resistance, so it produces little heat.' },
    { topic: 'power', front: 'What is electric power? SI unit.', back: 'The rate at which electrical energy is used (consumed).\nSI unit: watt (W).\n1 W = 1 V × 1 A = 1 J/s' },
    { topic: 'power', front: 'Three formulas for electric power', back: 'P = VI\nP = I²R\nP = V²/R' },
    { topic: 'power', front: 'What is 1 kilowatt hour (kWh)?', back: 'The energy used by a 1 kW appliance in 1 hour. It is the commercial unit of electrical energy ("1 unit").\n1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J' },
    { topic: 'power', front: 'Worked example: A device works on 220 V and draws 5 A. Find its power.', back: 'P = VI = 220 × 5 = 1100 W = 1.1 kW' },
    { topic: 'power', front: 'Worked example: Resistance of a 100 W, 220 V bulb', back: 'R = V²/P = 220² / 100 = 48400 / 100 = 484 Ω' },
    { topic: 'power', front: 'Worked example: A 100 W bulb is used 10 hours a day for 30 days. Find units and cost at ₹6 per unit.', back: 'Energy = 100 W × 10 h × 30 = 30000 Wh = 30 kWh = 30 units\nCost = 30 × 6 = ₹180' },
    { topic: 'power', front: 'Two bulbs, 100 W and 60 W, run on 220 V in parallel. Total current?', back: 'Total power = 100 + 60 = 160 W\nI = P/V = 160 / 220 ≈ 0.73 A' }
  ],

  quiz: [
    { topic: 'charge', q: 'Electric current is the rate of flow of…', options: ['Energy', 'Charge', 'Voltage', 'Resistance'], answer: 1, explain: 'I = Q/t' },
    { topic: 'charge', q: 'The SI unit of electric current is…', options: ['Volt', 'Coulomb', 'Ampere', 'Ohm'], answer: 2, explain: '1 A = 1 C/s' },
    { topic: 'charge', q: 'The charge on an electron is…', options: ['1.6 × 10⁻¹⁹ C', '1.6 × 10¹⁹ C', '6 × 10¹⁸ C', '1 C'], answer: 0, explain: 'It is negative: −1.6 × 10⁻¹⁹ C.' },
    { topic: 'charge', q: 'About how many electrons make up 1 coulomb?', options: ['1.6 × 10¹⁹', '6 × 10¹⁸', '6 × 10²³', '1000'], answer: 1, explain: '1 / (1.6 × 10⁻¹⁹) ≈ 6.25 × 10¹⁸' },
    { topic: 'charge', q: 'A current of 0.5 A flows for 10 minutes. The charge is…', options: ['5 C', '50 C', '300 C', '3000 C'], answer: 2, explain: 'Q = It = 0.5 × 600 = 300 C' },
    { topic: 'charge', q: 'An ammeter is connected in…', options: ['Series', 'Parallel', 'Either', 'Neither'], answer: 0, explain: 'It must carry the whole current.' },
    { topic: 'charge', q: 'Conventional current flows from…', options: ['− to +', '+ to −', 'Both ways', 'Earth to wire'], answer: 1, explain: 'Electrons flow from − to +, opposite to conventional current.' },
    { topic: 'pd', q: 'The SI unit of potential difference is…', options: ['Ampere', 'Volt', 'Watt', 'Joule'], answer: 1, explain: '1 V = 1 J/C' },
    { topic: 'pd', q: 'A voltmeter is connected in…', options: ['Series', 'Parallel', 'Either', 'Neither'], answer: 1, explain: 'Across the two points.' },
    { topic: 'pd', q: 'Work done to move 2 C of charge across 12 V is…', options: ['6 J', '14 J', '24 J', '10 J'], answer: 2, explain: 'W = VQ = 12 × 2 = 24 J' },
    { topic: 'pd', q: '1 volt is equal to…', options: ['1 J/C', '1 C/s', '1 J/s', '1 C/J'], answer: 0, explain: 'Work per unit charge.' },
    { topic: 'pd', q: 'A device used to change the current in a circuit without changing the source is a…', options: ['Fuse', 'Rheostat', 'Voltmeter', 'Ammeter'], answer: 1, explain: 'A rheostat is a variable resistance.' },
    { topic: 'ohm', q: 'According to Ohm\'s law (at constant temperature)…', options: ['V ∝ 1/I', 'V ∝ I', 'V ∝ I²', 'V is constant'], answer: 1, explain: 'V = IR' },
    { topic: 'ohm', q: 'The V–I graph of an ohmic conductor is…', options: ['A curve', 'A straight line through the origin', 'A horizontal line', 'A circle'], answer: 1, explain: 'Its slope is the resistance.' },
    { topic: 'ohm', q: 'The SI unit of resistance is…', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], answer: 2, explain: '1 Ω = 1 V/A' },
    { topic: 'ohm', q: 'A heater coil of 1100 Ω on 220 V draws a current of…', options: ['0.2 A', '2 A', '5 A', '0.5 A'], answer: 0, explain: 'I = 220/1100 = 0.2 A' },
    { topic: 'ohm', q: '2 A flows through a 5 Ω resistor. The potential difference is…', options: ['2.5 V', '7 V', '10 V', '0.4 V'], answer: 2, explain: 'V = IR = 2 × 5 = 10 V' },
    { topic: 'ohm', q: 'Keeping voltage the same, if resistance is doubled, the current becomes…', options: ['Double', 'Half', 'Four times', 'Same'], answer: 1, explain: 'I = V/R' },
    { topic: 'ohm', q: 'An electric iron draws 4 A from 220 V. Its resistance is…', options: ['880 Ω', '55 Ω', '224 Ω', '0.018 Ω'], answer: 1, explain: 'R = V/I = 220/4 = 55 Ω' },
    { topic: 'resist', q: 'Resistance of a wire is directly proportional to its…', options: ['Area of cross-section', 'Length', 'Thickness', 'Mass'], answer: 1, explain: 'R = ρl/A' },
    { topic: 'resist', q: 'The SI unit of resistivity is…', options: ['Ω', 'Ω m', 'Ω/m', 'Ω m²'], answer: 1, explain: 'ρ = RA/l -> Ω × m² / m = Ω m' },
    { topic: 'resist', q: 'If the length of a wire is doubled (same area), its resistance becomes…', options: ['Half', 'Double', 'Four times', 'Same'], answer: 1, explain: 'R ∝ l' },
    { topic: 'resist', q: 'If the area of cross-section of a wire is doubled, its resistance becomes…', options: ['Half', 'Double', 'Four times', 'Same'], answer: 0, explain: 'R ∝ 1/A' },
    { topic: 'resist', q: 'A wire is stretched to twice its length. Its resistance becomes…', options: ['Double', 'Half', 'Four times', 'Same'], answer: 2, explain: 'Length ×2 and area ×½, so R × 4.' },
    { topic: 'resist', q: 'Resistivity of a wire depends on its…', options: ['Length', 'Thickness', 'Material', 'Shape'], answer: 2, explain: 'And temperature — not size.' },
    { topic: 'resist', q: 'The filament of an electric bulb is made of…', options: ['Copper', 'Nichrome', 'Tungsten', 'Aluminium'], answer: 2, explain: 'Very high melting point (3380 °C).' },
    { topic: 'resist', q: 'The heating element of an electric iron is made of…', options: ['Copper', 'Nichrome', 'Silver', 'Tungsten'], answer: 1, explain: 'An alloy with high resistivity that does not oxidise easily.' },
    { topic: 'resist', q: 'Which is the best conductor?', options: ['Glass', 'Rubber', 'Silver', 'Nichrome'], answer: 2, explain: 'Silver has the lowest resistivity.' },
    { topic: 'series', q: 'Equivalent resistance of 5 Ω, 10 Ω and 15 Ω in series is…', options: ['30 Ω', '2.7 Ω', '15 Ω', '750 Ω'], answer: 0, explain: '5 + 10 + 15 = 30 Ω' },
    { topic: 'series', q: 'In a series circuit, what is the same through all resistors?', options: ['Voltage', 'Current', 'Power', 'Heat'], answer: 1, explain: 'There is only one path.' },
    { topic: 'series', q: '5 Ω, 10 Ω and 15 Ω in series with 30 V. The current is…', options: ['1 A', '2 A', '3 A', '0.5 A'], answer: 0, explain: 'I = 30/30 = 1 A' },
    { topic: 'series', q: 'Household appliances are NOT connected in series because…', options: ['It costs more', 'If one fails, all stop working', 'Current becomes too high', 'Wires get cold'], answer: 1, explain: 'Each also needs a different current.' },
    { topic: 'series', q: 'Two 4 Ω resistors in series with a 2 Ω resistor give…', options: ['10 Ω', '8 Ω', '1 Ω', '6 Ω'], answer: 0, explain: '4 + 4 + 2 = 10 Ω' },
    { topic: 'parallel', q: 'Equivalent resistance of 3 Ω and 6 Ω in parallel is…', options: ['9 Ω', '2 Ω', '18 Ω', '4.5 Ω'], answer: 1, explain: '(3 × 6)/(3 + 6) = 18/9 = 2 Ω' },
    { topic: 'parallel', q: 'In a parallel circuit, what is the same across all resistors?', options: ['Current', 'Potential difference', 'Resistance', 'Charge'], answer: 1, explain: 'Each branch gets the full voltage.' },
    { topic: 'parallel', q: 'Three 6 Ω resistors in parallel give…', options: ['18 Ω', '2 Ω', '3 Ω', '6 Ω'], answer: 1, explain: 'R/n = 6/3 = 2 Ω' },
    { topic: 'parallel', q: 'The equivalent resistance in parallel is…', options: ['More than the largest', 'Less than the smallest', 'Equal to the sum', 'Equal to the average'], answer: 1, explain: 'Adding more paths lowers the total resistance.' },
    { topic: 'parallel', q: 'The lowest resistance you can get from 4 Ω, 8 Ω, 12 Ω and 24 Ω is…', options: ['48 Ω', '2 Ω', '4 Ω', '1 Ω'], answer: 1, explain: '1/4 + 1/8 + 1/12 + 1/24 = 12/24, so 2 Ω' },
    { topic: 'parallel', q: '(6 Ω parallel with 3 Ω) in series with 4 Ω gives…', options: ['13 Ω', '6 Ω', '2 Ω', '9 Ω'], answer: 1, explain: '6 || 3 = 2 Ω; 2 + 4 = 6 Ω' },
    { topic: 'parallel', q: 'A 10 Ω wire is cut into 5 equal parts joined in parallel. The resistance is…', options: ['50 Ω', '2 Ω', '0.4 Ω', '10 Ω'], answer: 2, explain: 'Each part 2 Ω; 2/5 = 0.4 Ω' },
    { topic: 'heat', q: 'Joule\'s law of heating is…', options: ['H = IRt', 'H = I²Rt', 'H = V²t', 'H = IR²t'], answer: 1, explain: 'Heat ∝ I², R and t.' },
    { topic: 'heat', q: 'If the current through a resistor is doubled, the heat produced becomes…', options: ['Double', 'Half', 'Four times', 'Same'], answer: 2, explain: 'H ∝ I², so 2² = 4.' },
    { topic: 'heat', q: '2 A flows through 10 Ω for 60 s. The heat produced is…', options: ['1200 J', '2400 J', '120 J', '240 J'], answer: 1, explain: 'H = 4 × 10 × 60 = 2400 J' },
    { topic: 'heat', q: 'Electric bulbs are filled with…', options: ['Oxygen', 'Hydrogen', 'Nitrogen or argon', 'Carbon dioxide'], answer: 2, explain: 'Inactive gases protect the filament.' },
    { topic: 'heat', q: 'A fuse wire should have…', options: ['High melting point', 'Low melting point', 'Zero resistance', 'Very thick size'], answer: 1, explain: 'It melts when current is too high.' },
    { topic: 'heat', q: 'A fuse is connected in ___ with the appliance.', options: ['Series', 'Parallel', 'Either', 'No connection'], answer: 0, explain: 'So that the whole current passes through it.' },
    { topic: 'heat', q: 'Which device does NOT work on the heating effect of current?', options: ['Electric iron', 'Toaster', 'Electric fan', 'Fuse'], answer: 2, explain: 'A fan uses an electric motor.' },
    { topic: 'power', q: 'The SI unit of electric power is…', options: ['Joule', 'Watt', 'kWh', 'Volt'], answer: 1, explain: '1 W = 1 J/s = 1 V × 1 A' },
    { topic: 'power', q: 'Which formula is NOT correct for power?', options: ['P = VI', 'P = I²R', 'P = V²/R', 'P = IR²'], answer: 3, explain: 'P = VI = I²R = V²/R' },
    { topic: 'power', q: '1 kWh is equal to…', options: ['3.6 × 10⁶ J', '3.6 × 10³ J', '1000 J', '3600 J'], answer: 0, explain: '1000 W × 3600 s' },
    { topic: 'power', q: 'A device on 220 V draws 5 A. Its power is…', options: ['44 W', '225 W', '1100 W', '1.1 W'], answer: 2, explain: 'P = VI = 220 × 5' },
    { topic: 'power', q: 'The resistance of a 100 W, 220 V bulb is…', options: ['484 Ω', '2.2 Ω', '22 Ω', '48.4 Ω'], answer: 0, explain: 'R = V²/P = 48400/100' },
    { topic: 'power', q: 'A 1 kW heater runs for 2 hours. Energy used is…', options: ['2 kWh', '0.5 kWh', '2000 kWh', '1 kWh'], answer: 0, explain: '1 kW × 2 h = 2 kWh (2 units)' },
    { topic: 'power', q: 'A 100 W bulb runs 10 h a day for 30 days. Units used are…', options: ['3 units', '30 units', '300 units', '3000 units'], answer: 1, explain: '100 × 10 × 30 = 30000 Wh = 30 kWh' },
    { topic: 'power', q: 'At ₹5 per unit, the cost of running a 1 kW heater for 2 hours is…', options: ['₹2', '₹5', '₹10', '₹20'], answer: 2, explain: '2 units × ₹5 = ₹10' },
    { topic: 'power', q: 'The commercial unit of electrical energy is…', options: ['Joule', 'Watt', 'Kilowatt hour', 'Volt'], answer: 2, explain: '1 kWh = 1 unit.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'charge', a: 'An ammeter is always connected in series.', r: 'The whole current to be measured must pass through the ammeter.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'pd', a: 'A voltmeter is connected in series in a circuit.', r: 'A voltmeter measures potential difference between two points.', answer: 3, explain: 'A is false — a voltmeter is connected in PARALLEL. R is true.' },
      { topic: 'ohm', a: 'The V–I graph for a metallic conductor is a straight line.', r: 'At constant temperature, current is directly proportional to potential difference.', answer: 0, explain: 'Both true, and R explains A — Ohm\'s law.' },
      { topic: 'resist', a: 'Alloys are used in electric heaters.', r: 'Alloys have high resistivity and do not oxidise easily at high temperatures.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'resist', a: 'A thick wire has less resistance than a thin wire of the same length and material.', r: 'Resistance is directly proportional to the area of cross-section.', answer: 2, explain: 'A is true, but R is false — resistance is INVERSELY proportional to area.' },
      { topic: 'resist', a: 'Resistivity of a copper wire depends on its length.', r: 'Resistance of a wire depends on its length.', answer: 3, explain: 'A is false — resistivity depends only on the material and temperature. R is true.' },
      { topic: 'series', a: 'In a series circuit, the same current flows through every resistor.', r: 'There is only one path for the current in a series circuit.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'parallel', a: 'Household appliances are connected in parallel.', r: 'In parallel, each appliance gets the same potential difference.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'parallel', a: 'The equivalent resistance of resistors in parallel is less than the smallest resistance.', r: 'In parallel, the current through each resistor is the same.', answer: 2, explain: 'A is true, but R is false — in parallel the VOLTAGE is the same; current divides.' },
      { topic: 'heat', a: 'Tungsten is used for the filaments of electric bulbs.', r: 'Tungsten has a very high melting point.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'heat', a: 'A fuse wire is made of a material with a low melting point.', r: 'The fuse is connected in series with the appliance.', answer: 1, explain: 'Both true, but R does not explain A — a low melting point lets it melt quickly when current is too high.' },
      { topic: 'power', a: '1 kWh is equal to 3.6 × 10⁶ J.', r: '1 kW = 1000 W and 1 h = 3600 s.', answer: 0, explain: 'Both true, and R explains A: 1000 × 3600 = 3.6 × 10⁶.' }
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
    { title: 'Quantities & SI Units', pairs: [
      ['Current', 'Ampere (A)'],
      ['Charge', 'Coulomb (C)'],
      ['Potential difference', 'Volt (V)'],
      ['Resistance', 'Ohm (Ω)'],
      ['Resistivity', 'Ohm metre (Ω m)'],
      ['Power', 'Watt (W)']
    ] },
    { title: 'Formulas', pairs: [
      ['I =', 'Q/t'],
      ['V =', 'W/Q'],
      ['Ohm\'s law', 'V = IR'],
      ['R =', 'ρl/A'],
      ['H =', 'I²Rt'],
      ['P =', 'VI']
    ] },
    { title: 'Instruments & Devices', pairs: [
      ['Ammeter', 'Connected in series'],
      ['Voltmeter', 'Connected in parallel'],
      ['Rheostat', 'Changes the current'],
      ['Fuse', 'Melts on high current'],
      ['Bulb filament', 'Tungsten'],
      ['Heater element', 'Nichrome']
    ] },
    { title: 'Series vs Parallel', pairs: [
      ['Series: same', 'Current'],
      ['Parallel: same', 'Potential difference'],
      ['Series total', 'R1 + R2 + R3'],
      ['Parallel total', '1/R1 + 1/R2 + 1/R3'],
      ['Home wiring', 'Parallel'],
      ['One bulb fuses, all go off', 'Series']
    ] },
    { title: 'Quick Numericals', pairs: [
      ['0.5 A for 600 s', '300 C'],
      ['2 A through 5 Ω', '10 V'],
      ['3 Ω parallel 6 Ω', '2 Ω'],
      ['220 V, 5 A', '1100 W'],
      ['100 W, 220 V bulb', '484 Ω'],
      ['1 kWh', '3.6 × 10⁶ J']
    ] },
    { title: 'What Happens?', pairs: [
      ['Length doubled', 'R doubles'],
      ['Area doubled', 'R halves'],
      ['Wire stretched to double length', 'R × 4'],
      ['Current doubled', 'Heat × 4'],
      ['Resistance doubled (same V)', 'Current halves'],
      ['Bulb filled with argon', 'Filament lasts longer']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Define 1 ampere.',
      keypoints: [
        { text: 'Current when 1 coulomb of charge flows in 1 second', kw: ['coulomb', 'second'] }
      ],
      model: '1 ampere is the current that flows when 1 coulomb of charge passes through a conductor in 1 second (1 A = 1 C/s).' },
    { marks: 1, q: 'How is a voltmeter connected in a circuit to measure the potential difference between two points?',
      keypoints: [
        { text: 'In parallel across the two points', kw: ['parallel'] }
      ],
      model: 'A voltmeter is connected in parallel across the two points between which the potential difference is to be measured.' },
    { marks: 1, q: 'Why are copper and aluminium wires used for electricity transmission?',
      keypoints: [
        { text: 'They have low resistivity, so less energy is lost as heat', kw: ['low', 'resistivity|resistance'] }
      ],
      model: 'Copper and aluminium have very low resistivity, so very little electrical energy is lost as heat in the wires.' },
    { marks: 1, q: 'What is the commercial unit of electrical energy? Express it in joules.',
      keypoints: [
        { text: 'Kilowatt hour (kWh) = 3.6 × 10⁶ J', kw: ['kwh|kilowatt hour', '3.6'] }
      ],
      model: 'The commercial unit is the kilowatt hour (kWh), also called 1 unit.\n1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J' },
    { marks: 2, q: 'How much charge flows through a bulb that draws 0.5 A for 10 minutes? How many electrons is this?',
      keypoints: [
        { text: 'Q = It = 0.5 × 600 = 300 C', kw: ['300'] },
        { text: 'n = Q/e = 300 / 1.6 × 10⁻¹⁹ ≈ 1.875 × 10²¹ electrons', kw: ['1.875|1.87|1.9'] }
      ],
      model: 't = 10 min = 600 s\nQ = I × t = 0.5 × 600 = 300 C\nNumber of electrons n = Q/e = 300 / (1.6 × 10⁻¹⁹) = 1.875 × 10²¹ electrons' },
    { marks: 2, q: 'State Ohm\'s law. Draw (describe) the V–I graph.',
      keypoints: [
        { text: 'Current is directly proportional to potential difference at constant temperature: V = IR', kw: ['proportional', 'temperature'] },
        { text: 'V–I graph is a straight line through the origin', kw: ['straight line', 'origin'] }
      ],
      model: 'Ohm\'s law: the current through a metallic conductor is directly proportional to the potential difference across its ends, provided its temperature remains the same. V = IR.\nThe V–I graph is a straight line passing through the origin; its slope gives the resistance.' },
    { marks: 2, q: 'On what factors does the resistance of a conductor depend?',
      keypoints: [
        { text: 'Directly proportional to length; inversely proportional to area of cross-section', kw: ['length', 'area'] },
        { text: 'Depends on the nature of material and temperature: R = ρl/A', kw: ['material|nature', 'temperature|ρl/a|resistivity'] }
      ],
      model: '1. Length (l): R ∝ l — a longer wire has more resistance.\n2. Area of cross-section (A): R ∝ 1/A — a thicker wire has less resistance.\n3. Nature of the material (its resistivity ρ).\n4. Temperature.\nSo R = ρl/A.' },
    { marks: 2, q: 'Why is tungsten used for bulb filaments, and why are bulbs filled with argon or nitrogen?',
      keypoints: [
        { text: 'Tungsten has a very high melting point (3380 °C)', kw: ['melting point'] },
        { text: 'Inactive gases prevent the filament from oxidising/burning, so it lasts longer', kw: ['oxid|burn|react', 'longer|life|prolong'] }
      ],
      model: 'Tungsten has a very high melting point (3380 °C), so it can glow white-hot without melting.\nArgon and nitrogen are chemically inactive gases. They stop the hot filament from reacting with oxygen and burning out, so the filament lasts longer.' },
    { marks: 2, q: 'Find the equivalent resistance of 3 Ω and 6 Ω connected (a) in series and (b) in parallel.',
      keypoints: [
        { text: '(a) Series: 3 + 6 = 9 Ω', kw: ['9'] },
        { text: '(b) Parallel: (3 × 6)/(3 + 6) = 2 Ω', kw: ['2 ω|= 2'] }
      ],
      model: '(a) Series: Rs = 3 + 6 = 9 Ω\n(b) Parallel: 1/Rp = 1/3 + 1/6 = 3/6 = 1/2, so Rp = 2 Ω' },
    { marks: 2, q: 'Calculate the heat produced when 2 A flows through a 10 Ω resistor for 1 minute.',
      keypoints: [
        { text: 'H = I²Rt', kw: ['i²rt|i² × r × t'] },
        { text: '= 2² × 10 × 60 = 2400 J', kw: ['2400'] }
      ],
      model: 'H = I²Rt\n= 2² × 10 × 60\n= 4 × 10 × 60\n= 2400 J' },
    { marks: 2, q: 'What is the resistance of a 100 W, 220 V bulb? What current does it draw?',
      keypoints: [
        { text: 'R = V²/P = 48400/100 = 484 Ω', kw: ['484'] },
        { text: 'I = P/V = 100/220 ≈ 0.45 A', kw: ['0.45'] }
      ],
      model: 'R = V²/P = 220² / 100 = 48400 / 100 = 484 Ω\nI = P/V = 100 / 220 ≈ 0.45 A' },
    { marks: 3, q: 'Give three disadvantages of connecting household appliances in series. Why is parallel connection used instead?',
      keypoints: [
        { text: 'If one appliance fails, all stop working', kw: ['all', 'stop|fail|off'] },
        { text: 'All get the same current, but each needs a different current; total resistance becomes high', kw: ['same current|different current|high|large'] },
        { text: 'In parallel each gets full 220 V and can be switched independently', kw: ['parallel', 'independ|separately|same voltage|full voltage|220'] }
      ],
      model: 'Disadvantages of series:\n• If one appliance fails or is switched off, the circuit breaks and all appliances stop.\n• The same current flows through all, but each appliance needs a different current.\n• The total resistance becomes large, so the current is low.\nIn parallel, each appliance gets the full 220 V, draws the current it needs, and can be switched on or off independently.' },
    { marks: 3, q: 'Resistors of 5 Ω, 10 Ω and 15 Ω are connected in series to a 30 V battery. Find (a) the total resistance, (b) the current, (c) the potential difference across the 10 Ω resistor.',
      keypoints: [
        { text: '(a) Rs = 5 + 10 + 15 = 30 Ω', kw: ['30'] },
        { text: '(b) I = 30/30 = 1 A', kw: ['1 a'] },
        { text: '(c) V = IR = 1 × 10 = 10 V', kw: ['10 v'] }
      ],
      model: '(a) Rs = 5 + 10 + 15 = 30 Ω\n(b) I = V/R = 30 / 30 = 1 A\n(c) Same current in series, so V = IR = 1 × 10 = 10 V' },
    { marks: 3, q: 'How will you connect three 6 Ω resistors to get (a) 9 Ω and (b) 4 Ω?',
      keypoints: [
        { text: '(a) Two in parallel (3 Ω) + one in series: 3 + 6 = 9 Ω', kw: ['parallel', 'series', '9'] },
        { text: '(b) Two in series (12 Ω) in parallel with the third: 12 × 6 / 18 = 4 Ω', kw: ['12', '4'] },
        { text: 'Correct working shown', kw: ['3 + 6|72|18'] }
      ],
      model: '(a) Connect two 6 Ω in parallel: 6/2 = 3 Ω. Connect this in series with the third: 3 + 6 = 9 Ω.\n(b) Connect two 6 Ω in series: 12 Ω. Connect this in parallel with the third: (12 × 6)/(12 + 6) = 72/18 = 4 Ω.' },
    { marks: 3, q: 'State Joule\'s law of heating. Give two applications of the heating effect of current.',
      keypoints: [
        { text: 'H = I²Rt', kw: ['i²rt|i² × r × t'] },
        { text: 'Heat ∝ square of current, resistance and time', kw: ['square', 'time'] },
        { text: 'Applications: heater, iron, toaster, bulb, fuse', kw: ['heater|iron|toaster|bulb|fuse|kettle'] }
      ],
      model: 'Joule\'s law: the heat produced in a resistor is directly proportional to the square of the current, the resistance, and the time for which the current flows.\nH = I²Rt\nApplications: electric heater, electric iron, toaster, electric bulb (filament glows), electric fuse.' },
    { marks: 3, q: 'What is an electric fuse? How does it protect a circuit? Why is it connected in series?',
      keypoints: [
        { text: 'A safety device — wire of low melting point alloy', kw: ['low melting|melting point'] },
        { text: 'When excess current flows, it heats up, melts and breaks the circuit', kw: ['melt', 'break|stop'] },
        { text: 'In series so the whole current passes through it', kw: ['series', 'whole|all|entire|same'] }
      ],
      model: 'A fuse is a safety device: a piece of wire made of an alloy with a low melting point.\nIf an unduly high current flows (short circuit or overload), the fuse wire heats up (H = I²Rt), melts and breaks the circuit, protecting the appliances and wiring.\nIt is connected in series so that the whole current of the circuit passes through it.' },
    { marks: 3, q: 'A family uses a 100 W bulb for 10 hours a day and a 1000 W heater for 2 hours a day. Find the electricity used in 30 days and the cost at ₹6 per unit.',
      keypoints: [
        { text: 'Bulb: 0.1 kW × 10 h = 1 kWh a day; heater: 1 kW × 2 h = 2 kWh a day', kw: ['1 kwh', '2 kwh'] },
        { text: 'Total per day 3 kWh; 30 days = 90 units', kw: ['90'] },
        { text: 'Cost = 90 × 6 = ₹540', kw: ['540'] }
      ],
      model: 'Bulb: 100 W = 0.1 kW; energy per day = 0.1 × 10 = 1 kWh\nHeater: 1000 W = 1 kW; energy per day = 1 × 2 = 2 kWh\nTotal per day = 3 kWh\nIn 30 days = 3 × 30 = 90 kWh = 90 units\nCost = 90 × ₹6 = ₹540' },
    { marks: 5, q: '(a) Derive the formula for the equivalent resistance of three resistors connected in parallel. (b) Find the highest and lowest resistance that can be obtained from 4 Ω, 8 Ω, 12 Ω and 24 Ω.',
      keypoints: [
        { text: 'In parallel, V is the same; I = I1 + I2 + I3', kw: ['same', 'i1 + i2 + i3'] },
        { text: 'V/Rp = V/R1 + V/R2 + V/R3 -> 1/Rp = 1/R1 + 1/R2 + 1/R3', kw: ['1/rp'] },
        { text: 'Highest: all in series = 48 Ω', kw: ['48'] },
        { text: 'Lowest: all in parallel: 1/4 + 1/8 + 1/12 + 1/24 = 12/24', kw: ['12/24'] },
        { text: 'Lowest = 2 Ω', kw: ['2 ω'] }
      ],
      model: '(a) In parallel, the potential difference V across each resistor is the same. The total current divides:\nI = I1 + I2 + I3\nBy Ohm\'s law, I = V/Rp, I1 = V/R1, I2 = V/R2, I3 = V/R3\nSo V/Rp = V/R1 + V/R2 + V/R3\nDividing by V: 1/Rp = 1/R1 + 1/R2 + 1/R3\n(b) Highest — all in series: 4 + 8 + 12 + 24 = 48 Ω\nLowest — all in parallel: 1/Rp = 1/4 + 1/8 + 1/12 + 1/24 = 6/24 + 3/24 + 2/24 + 1/24 = 12/24 = 1/2\nRp = 2 Ω' },
    { marks: 5, q: '(a) What is resistivity? Write its SI unit. (b) How does resistance change if a wire is stretched to double its length? (c) Why are alloys used in heating devices? (d) Two wires of the same material have lengths l and 2l and areas A and 2A. Compare their resistances.',
      keypoints: [
        { text: '(a) ρ = RA/l, property of the material; unit Ω m', kw: ['ρ|rho', 'ω m|ohm metre|ohm meter'] },
        { text: '(b) Length doubles, area halves -> resistance becomes 4 times', kw: ['4|four'] },
        { text: '(c) Alloys have high resistivity and do not oxidise at high temperature', kw: ['high resistivity', 'oxidi'] },
        { text: '(d) R1 = ρl/A; R2 = ρ(2l)/(2A) = ρl/A', kw: ['2l', '2a'] },
        { text: 'So the resistances are equal (1 : 1)', kw: ['equal|1 : 1|same'] }
      ],
      model: '(a) Resistivity (ρ) is the resistance of a conductor of unit length and unit area of cross-section. From R = ρl/A, ρ = RA/l. It depends only on the material and temperature. SI unit: ohm metre (Ω m).\n(b) When stretched to double length, the volume stays the same, so the area becomes half. R = ρl/A -> (2l)/(A/2) = 4 × l/A. The resistance becomes 4 times.\n(c) Alloys like nichrome have high resistivity and do not oxidise (burn) readily at high temperatures, so they are used in heaters, irons and toasters.\n(d) R1 = ρl/A\nR2 = ρ(2l)/(2A) = ρl/A\nSo R1 : R2 = 1 : 1 — the resistances are equal.' },
    { marks: 4, q: 'CASE STUDY: Aarav set up a circuit with a battery, a 10 Ω resistor, an ammeter, a voltmeter and a rheostat. He recorded: 1 V -> 0.1 A, 2 V -> 0.2 A, 3 V -> 0.3 A.\n(a) Which law is he verifying?\n(b) How are the ammeter and voltmeter connected?\n(c) What will the current be at 5 V?\n(d) What will the V–I graph look like?',
      keypoints: [
        { text: '(a) Ohm\'s law', kw: ['ohm'] },
        { text: '(b) Ammeter in series, voltmeter in parallel', kw: ['series', 'parallel'] },
        { text: '(c) I = 5/10 = 0.5 A', kw: ['0.5'] },
        { text: '(d) Straight line through the origin', kw: ['straight', 'origin'] }
      ],
      model: '(a) Ohm\'s law — V/I stays constant (10 Ω).\n(b) The ammeter is in series with the resistor; the voltmeter is in parallel across the resistor.\n(c) I = V/R = 5 / 10 = 0.5 A\n(d) A straight line passing through the origin (slope = R = 10 Ω).' },
    { marks: 4, q: 'CASE STUDY: An electric iron is rated 1100 W, 220 V. The house has fuses of 1 A, 2 A, 5 A and 10 A.\n(a) What current does the iron draw?\n(b) What is the resistance of its element?\n(c) Which fuse is best for it, and why?\n(d) How much energy does it use in 30 minutes, in kWh?',
      keypoints: [
        { text: '(a) I = P/V = 1100/220 = 5 A', kw: ['5 a'] },
        { text: '(b) R = V/I = 220/5 = 44 Ω', kw: ['44'] },
        { text: '(c) 10 A fuse — the rating must be slightly more than the current drawn', kw: ['10 a', 'more|higher|greater|above'] },
        { text: '(d) 1.1 kW × 0.5 h = 0.55 kWh', kw: ['0.55'] }
      ],
      model: '(a) I = P/V = 1100 / 220 = 5 A\n(b) R = V/I = 220 / 5 = 44 Ω (or V²/P = 48400/1100 = 44 Ω)\n(c) The 10 A fuse. A fuse rating must be a little more than the normal current; a 5 A fuse would melt at the normal working current of 5 A.\n(d) Energy = P × t = 1.1 kW × 0.5 h = 0.55 kWh' },
    { marks: 4, q: 'CASE STUDY: Two identical bulbs are connected first in series and then in parallel to the same battery.\n(a) In which case is the total resistance lower?\n(b) In which case do the bulbs glow brighter? Why?\n(c) If one bulb fuses in the series circuit, what happens to the other?\n(d) If one bulb fuses in the parallel circuit, what happens to the other?',
      keypoints: [
        { text: '(a) Parallel', kw: ['parallel'] },
        { text: '(b) Parallel — each bulb gets the full voltage, so more current and power', kw: ['full voltage|same voltage|more current|more power|whole voltage'] },
        { text: '(c) Series: the other goes off — circuit broken', kw: ['off|stop|goes out', 'broken|break|open'] },
        { text: '(d) Parallel: the other keeps glowing', kw: ['keeps|continues|still'] }
      ],
      model: '(a) In parallel (R/2), compared with series (2R).\n(b) In parallel. Each bulb gets the full battery voltage, so more current flows through it and its power (V²/R) is higher. In series, the voltage is shared.\n(c) The other bulb also goes off, because the circuit is broken.\n(d) The other bulb keeps glowing, because its own path is still complete.' }
  ]
});
