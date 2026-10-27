// CBSE Class 10 Science (NCERT) — Chapter 3: Metals and Non-metals
// Formulas are written plainly (Al2O3, Fe3O4); the app shows the numbers as subscripts.
// Write "->" for the reaction arrow.
SWG.addChapter('science', {
  id: 'sci-ch03',
  number: 3,
  title: 'Metals and Non-metals',
  icon: '⚙️',

  topics: {
    phys: 'Physical Properties',
    oxy: 'Metals + Oxygen',
    water: 'Metals + Water',
    acid: 'Metals + Acids',
    displ: 'Reactivity Series & Displacement',
    ionic: 'Ionic Compounds',
    ore: 'Ores & Extraction',
    refine: 'Refining of Metals',
    corr: 'Corrosion & Alloys'
  },

  summary: [
    'Metals are lustrous, malleable, ductile, sonorous, and good conductors of heat and electricity. Non-metals are mostly brittle, dull and poor conductors.',
    'Exceptions: mercury is a liquid metal; Na and K are soft; gallium and caesium melt in your palm; iodine is a lustrous non-metal; graphite conducts; diamond is the hardest natural substance; bromine is a liquid non-metal.',
    'Metal + oxygen -> basic oxide. Non-metal + oxygen -> acidic (or neutral) oxide. Al2O3 and ZnO are amphoteric: they react with both acids and bases.',
    'Metal + water -> metal hydroxide (or oxide) + hydrogen. Na and K react violently; Al, Fe and Zn react only with steam; Cu, Ag and Au do not react.',
    'Metal + dilute acid -> salt + hydrogen. With nitric acid, H2 forms only with Mg and Mn and very dilute HNO3. Aqua regia (3 HCl : 1 HNO3) dissolves gold and platinum.',
    'Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. A more reactive metal displaces a less reactive one from its salt solution.',
    'Metals lose electrons and non-metals gain electrons to form ionic compounds. Ionic compounds are hard, have high melting points, dissolve in water and conduct in solution or when molten.',
    'Extraction: low reactivity (Hg, Cu) — heat the ore; middle (Zn, Fe, Pb) — roasting/calcination, then reduction with carbon; high (Na, Mg, Ca, Al) — electrolysis of the molten compound. Metals are refined by electrolysis.',
    'Corrosion: silver turns black, copper turns green, iron rusts (needs air AND water). Prevent with paint, oil, grease, galvanising, chrome plating, anodising or alloying.'
  ],

  flashcards: [
    { topic: 'phys', front: 'Name 5 physical properties of metals.', back: '• Lustrous (shiny)\n• Hard (mostly)\n• Malleable — can be beaten into thin sheets\n• Ductile — can be drawn into wires\n• Good conductors of heat and electricity\n• Sonorous — make a ringing sound' },
    { topic: 'phys', front: 'What is malleability? Which metals are the most malleable?', back: 'The property of being beaten into thin sheets.\nGold and silver are the most malleable metals.' },
    { topic: 'phys', front: 'What is ductility? Which metal is the most ductile?', back: 'The property of being drawn into thin wires.\nGold is the most ductile — a wire about 2 km long can be drawn from just 1 g of gold.' },
    { topic: 'phys', front: 'Which metals are the best conductors of heat? Which are poor conductors?', back: 'Best: silver and copper\nPoor: lead and mercury' },
    { topic: 'phys', front: 'Why are cooking vessels made of metals?', back: 'Metals are good conductors of heat, so food gets heated quickly. They also have high melting points.' },
    { topic: 'phys', front: 'Why are school bells made of metal?', back: 'Metals are sonorous — they produce a ringing sound when struck.' },
    { topic: 'phys', front: 'Which metal is a liquid at room temperature?', back: 'Mercury (Hg).' },
    { topic: 'phys', front: 'Which metals are so soft they can be cut with a knife?', back: 'Sodium (Na) and potassium (K).\nThey also have low densities and low melting points.' },
    { topic: 'phys', front: 'Which metals melt if you keep them on your palm?', back: 'Gallium and caesium — they have very low melting points.' },
    { topic: 'phys', front: 'Name 4 physical properties of non-metals.', back: '• Solids or gases (bromine is the only liquid)\n• Not lustrous (dull)\n• Brittle — break into pieces when hammered\n• Poor conductors of heat and electricity\n• Not sonorous' },
    { topic: 'phys', front: 'Exceptions among non-metals', back: '• Iodine — lustrous (shiny)\n• Graphite (carbon) — conducts electricity\n• Diamond (carbon) — hardest natural substance, very high melting point\n• Bromine — liquid at room temperature' },
    { topic: 'phys', front: 'What are allotropes? Give an example.', back: 'Different forms of the same element.\nDiamond and graphite are allotropes of carbon.' },
    { topic: 'phys', front: 'Name 2 uses of non-metals in daily life.', back: '• Oxygen is needed for breathing\n• Nitrogen and phosphorus are used in fertilisers\n• Chlorine is used to purify water\n• Iodine (tincture) is an antiseptic for wounds' },
    { topic: 'oxy', front: 'Metal + oxygen -> ? Give an example.', back: 'Metal oxide\n2Cu + O2 -> 2CuO (black)\n4Al + 3O2 -> 2Al2O3' },
    { topic: 'oxy', front: 'Are metal oxides acidic or basic?', back: 'Most metal oxides are basic. Some dissolve in water to form alkalis.\nNa2O + H2O -> 2NaOH\nK2O + H2O -> 2KOH' },
    { topic: 'oxy', front: 'What are amphoteric oxides? Give 2 examples.', back: 'Metal oxides that react with BOTH acids and bases to give salt and water.\nExamples: aluminium oxide (Al2O3) and zinc oxide (ZnO).' },
    { topic: 'oxy', front: 'Write the reactions of Al2O3 with HCl and with NaOH.', back: 'Al2O3 + 6HCl -> 2AlCl3 + 3H2O\nAl2O3 + 2NaOH -> 2NaAlO2 + H2O\n(NaAlO2 = sodium aluminate)' },
    { topic: 'oxy', front: 'How do different metals react with oxygen?', back: '• Na, K: react so fast they catch fire in open air\n• Mg: burns with a dazzling white flame\n• Fe: does not burn as a block, but iron filings burn when sprinkled in a flame\n• Cu: does not burn; gets coated with black CuO\n• Ag, Au: do not react even at high temperature' },
    { topic: 'oxy', front: 'Why are sodium and potassium kept in kerosene?', back: 'They react so vigorously with air (and water) that they catch fire. Kerosene keeps air and moisture away.' },
    { topic: 'oxy', front: 'Why do Mg, Al, Zn and Pb not corrode further once they are exposed to air?', back: 'They form a thin protective oxide layer on their surface that stops further oxidation.' },
    { topic: 'oxy', front: 'What is anodising?', back: 'Making a thick protective oxide layer on aluminium.\nAluminium is made the anode during electrolysis of dilute sulphuric acid. Oxygen from the anode forms a thicker Al2O3 layer, which resists corrosion and can be dyed.' },
    { topic: 'oxy', front: 'Non-metal + oxygen -> ?', back: 'Acidic oxides (or neutral oxides)\nC + O2 -> CO2\nS + O2 -> SO2\nCO and N2O are neutral oxides.' },
    { topic: 'water', front: 'Metal + water -> ?', back: 'Metal oxide + hydrogen\nSoluble metal oxides then dissolve to give metal hydroxide.\nSo: metal + water -> metal hydroxide (or oxide) + hydrogen' },
    { topic: 'water', front: 'How do sodium and potassium react with water?', back: 'Violently, even with cold water. So much heat is released that the hydrogen catches fire.\n2Na + 2H2O -> 2NaOH + H2\n2K + 2H2O -> 2KOH + H2' },
    { topic: 'water', front: 'How does calcium react with water? Why does it float?', back: 'Less violently; the heat is not enough to set hydrogen on fire.\nCa + 2H2O -> Ca(OH)2 + H2\nCalcium floats because bubbles of hydrogen stick to its surface.' },
    { topic: 'water', front: 'How does magnesium react with water?', back: 'Not with cold water. It reacts with hot water and floats (hydrogen bubbles stick to it).\nMg + 2H2O -> Mg(OH)2 + H2' },
    { topic: 'water', front: 'Which metals react only with steam? Write their reactions.', back: 'Aluminium, iron and zinc.\n2Al + 3H2O -> Al2O3 + 3H2\n3Fe + 4H2O -> Fe3O4 + 4H2\nZn + H2O -> ZnO + H2' },
    { topic: 'water', front: 'Which metals do not react with water at all?', back: 'Lead, copper, silver and gold.' },
    { topic: 'water', front: 'Why is white phosphorus stored under water?', back: 'It is very reactive and catches fire in air. Water keeps air away.' },
    { topic: 'acid', front: 'Metal + dilute acid -> ?', back: 'Salt + hydrogen gas\nFe + 2HCl -> FeCl2 + H2\nMg + 2HCl -> MgCl2 + H2' },
    { topic: 'acid', front: 'Order of reactivity of Mg, Al, Zn, Fe with dilute HCl', back: 'Mg > Al > Zn > Fe\nMg reacts most vigorously (most bubbles, test tube gets hottest). Copper does not react.' },
    { topic: 'acid', front: 'Why is hydrogen NOT usually given off when a metal reacts with nitric acid?', back: 'HNO3 is a strong oxidising agent. It oxidises the H2 to water and itself is reduced to oxides of nitrogen (N2O, NO, NO2).' },
    { topic: 'acid', front: 'Which metals give hydrogen with nitric acid?', back: 'Magnesium (Mg) and manganese (Mn), with VERY dilute HNO3.\nMg + 2HNO3 -> Mg(NO3)2 + H2' },
    { topic: 'acid', front: 'What is aqua regia?', back: '"Royal water": a freshly prepared mixture of concentrated HCl and concentrated HNO3 in the ratio 3 : 1.\nIt can dissolve gold and platinum. It is highly corrosive and fuming.' },
    { topic: 'displ', front: 'What is the reactivity series?', back: 'A list of metals in decreasing order of their reactivity:\nK > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au' },
    { topic: 'displ', front: 'A trick to remember the reactivity series', back: 'Please Stop Calling Me A Zebra, I Like Her Calling Me Silly Goose\nK Na Ca Mg Al Zn Fe Pb H Cu Hg Ag Au' },
    { topic: 'displ', front: 'Which metals can displace hydrogen from dilute acids?', back: 'Metals ABOVE hydrogen in the reactivity series (K to Pb).\nMetals below hydrogen (Cu, Hg, Ag, Au) cannot.' },
    { topic: 'displ', front: 'What is a displacement reaction of metals?', back: 'A more reactive metal pushes out a less reactive metal from its salt solution.\nFe + CuSO4 -> FeSO4 + Cu' },
    { topic: 'displ', front: 'Copper wire in silver nitrate solution — what happens?', back: 'Copper is more reactive than silver, so it displaces silver. The solution turns blue and shiny silver coats the wire.\nCu + 2AgNO3 -> Cu(NO3)2 + 2Ag' },
    { topic: 'displ', front: 'Iron nail in copper sulphate solution — what happens?', back: 'The blue solution turns pale green (FeSO4) and a reddish-brown coat of copper forms on the nail.\nFe + CuSO4 -> FeSO4 + Cu' },
    { topic: 'displ', front: 'Silver in copper sulphate solution — what happens?', back: 'Nothing. Silver is less reactive than copper, so it cannot displace copper.' },
    { topic: 'ionic', front: 'Why do metals form positive ions and non-metals negative ions?', back: 'Atoms want a stable octet (8 electrons in the outer shell, like noble gases).\nMetals have 1–3 outer electrons and LOSE them -> positive ions (cations)\nNon-metals have 5–7 outer electrons and GAIN electrons -> negative ions (anions)' },
    { topic: 'ionic', front: 'How is NaCl formed? (Electron transfer)', back: 'Na (2,8,1) loses 1 electron -> Na+ (2,8)\nCl (2,8,7) gains 1 electron -> Cl- (2,8,8)\nNa+ and Cl- are held by strong electrostatic attraction -> NaCl' },
    { topic: 'ionic', front: 'How is MgCl2 formed?', back: 'Mg (2,8,2) loses 2 electrons -> Mg²⁺ (2,8)\nEach of 2 Cl atoms (2,8,7) gains 1 electron -> 2Cl- (2,8,8)\nMg²⁺ + 2Cl- -> MgCl2' },
    { topic: 'ionic', front: 'What are ionic (electrovalent) compounds?', back: 'Compounds formed by the TRANSFER of electrons from a metal to a non-metal. They are made of positive and negative ions held by strong forces of attraction.\ne.g. NaCl, MgCl2, CaO' },
    { topic: 'ionic', front: 'Properties of ionic compounds', back: '• Solid and hard (strong attraction), but brittle\n• High melting and boiling points\n• Soluble in water; insoluble in kerosene and petrol\n• Conduct electricity when molten or dissolved in water, NOT as a solid' },
    { topic: 'ionic', front: 'Why do ionic compounds have high melting points?', back: 'A lot of energy is needed to overcome the strong attraction between the oppositely charged ions.' },
    { topic: 'ionic', front: 'Why does solid NaCl not conduct electricity, but its solution does?', back: 'In the solid, ions are fixed in place and cannot move. In solution or molten state, ions are free to move and carry current.' },
    { topic: 'ore', front: 'Mineral vs ore', back: 'Mineral: a naturally occurring element or compound in the Earth\'s crust.\nOre: a mineral from which a metal can be extracted PROFITABLY.' },
    { topic: 'ore', front: 'What is gangue?', back: 'Impurities like soil and sand mixed with the ore. They are removed before extracting the metal (enrichment of ore).' },
    { topic: 'ore', front: 'Which metals are found free (native) in nature? Why?', back: 'Gold, silver, platinum, and sometimes copper.\nThey are at the bottom of the reactivity series, so they are not attacked by air, water or other chemicals.' },
    { topic: 'ore', front: 'Three steps to get a pure metal from its ore', back: '1. Enrichment (concentration) of the ore — remove gangue\n2. Extraction — convert to metal (depends on reactivity)\n3. Refining — purify the metal' },
    { topic: 'ore', front: 'How are LOW reactivity metals (Hg, Cu) extracted?', back: 'By just heating their ores in air.\n2HgS + 3O2 -> 2HgO + 2SO2\n2HgO -> 2Hg + O2\n2Cu2S + 3O2 -> 2Cu2O + 2SO2\n2Cu2O + Cu2S -> 6Cu + SO2' },
    { topic: 'ore', front: 'Roasting vs calcination', back: 'Roasting: heating a SULPHIDE ore strongly in EXCESS air.\n2ZnS + 3O2 -> 2ZnO + 2SO2\nCalcination: heating a CARBONATE ore strongly in LIMITED air.\nZnCO3 -> ZnO + CO2' },
    { topic: 'ore', front: 'Why are sulphide and carbonate ores converted to oxides?', back: 'It is easier to get a metal from its oxide than from its sulphide or carbonate.' },
    { topic: 'ore', front: 'How are MIDDLE reactivity metals (Zn, Fe, Pb) extracted?', back: 'Ore -> oxide (roasting or calcination), then the oxide is reduced with carbon (coke).\nZnO + C -> Zn + CO' },
    { topic: 'ore', front: 'What is the thermit reaction? Where is it used?', back: 'Iron(III) oxide reduced by aluminium. So much heat is produced that iron is formed in the molten state.\nFe2O3 + 2Al -> 2Fe + Al2O3 + heat\nUsed to join (weld) railway tracks and cracked machine parts.' },
    { topic: 'ore', front: 'Why is aluminium used as a reducing agent?', back: 'Aluminium is more reactive than metals like Fe, Mn and Cr, so it can take away oxygen from their oxides.\n3MnO2 + 4Al -> 3Mn + 2Al2O3 + heat' },
    { topic: 'ore', front: 'How are HIGH reactivity metals (Na, Mg, Ca, Al) extracted? Why not with carbon?', back: 'By electrolytic reduction of their molten chlorides (or molten oxide for Al).\nThey have more affinity for oxygen than carbon has, so carbon cannot reduce them.\nNa is deposited at the cathode, Cl2 is released at the anode.' },
    { topic: 'ore', front: 'Summary: extraction by reactivity', back: 'High (K, Na, Ca, Mg, Al): electrolysis of molten ore\nMiddle (Zn, Fe, Pb, Cu): roasting/calcination -> reduction with carbon\nLow (Cu, Hg, Ag, Au): heating, or found native' },
    { topic: 'refine', front: 'What is electrolytic refining? Name metals refined this way.', back: 'Purifying a metal by electrolysis.\nUsed for copper, zinc, tin, nickel, silver, gold.' },
    { topic: 'refine', front: 'Electrolytic refining of copper: anode, cathode, electrolyte', back: 'Anode: impure copper\nCathode: thin strip of pure copper\nElectrolyte: acidified copper sulphate solution\nPure copper from the anode dissolves and deposits on the cathode.' },
    { topic: 'refine', front: 'What is anode mud?', back: 'Insoluble impurities that settle at the bottom below the anode during electrolytic refining. Soluble impurities go into the solution.' },
    { topic: 'corr', front: 'What is corrosion? Give 3 examples.', back: 'Slow eating away of a metal by air, moisture or chemicals around it.\n• Silver turns black (silver sulphide, with sulphur in air)\n• Copper gets a green coat (basic copper carbonate, with moist CO2)\n• Iron gets a reddish-brown coat — rust' },
    { topic: 'corr', front: 'What conditions are needed for iron to rust?', back: 'BOTH air (oxygen) AND water (moisture).\nIron does not rust in dry air (CaCl2 tube) or in boiled water covered with oil (no air).' },
    { topic: 'corr', front: 'Name 5 ways to prevent rusting.', back: '• Painting\n• Oiling or greasing\n• Galvanising\n• Chrome plating\n• Anodising (for aluminium)\n• Making alloys' },
    { topic: 'corr', front: 'What is galvanisation?', back: 'Coating iron or steel with a thin layer of ZINC.\nThe iron stays protected even if the zinc coating breaks, because zinc is more reactive and corrodes first.' },
    { topic: 'corr', front: 'What is an alloy?', back: 'A homogeneous mixture of two or more metals, or a metal and a non-metal.\nMade by melting the main metal and dissolving the others in it, then cooling.' },
    { topic: 'corr', front: 'Why are alloys made?', back: '• Harder and stronger than pure metal\n• Resist corrosion\n• Lower melting point (useful for solder)\n• Lower electrical conductivity (useful for heating coils)' },
    { topic: 'corr', front: 'Composition: steel, stainless steel, brass, bronze, solder', back: 'Steel: iron + carbon (~0.05%)\nStainless steel: iron + nickel + chromium\nBrass: copper + zinc\nBronze: copper + tin\nSolder: lead + tin' },
    { topic: 'corr', front: 'What is an amalgam?', back: 'An alloy in which one of the metals is MERCURY.' },
    { topic: 'corr', front: 'Why is solder used for welding electrical wires?', back: 'Solder (lead + tin) has a low melting point, so it melts easily to join wires.' },
    { topic: 'corr', front: 'What is 22 carat gold? Why is 24 carat gold not used for jewellery?', back: '24 carat = pure gold, which is very soft.\n22 carat = 22 parts gold + 2 parts silver or copper — this alloy is harder and better for jewellery.' },
    { topic: 'corr', front: 'Why is iron used as steel and not in pure form?', back: 'Pure iron is very soft and stretches easily when hot. Adding a little carbon makes it hard and strong (steel).' }
  ],

  quiz: [
    { topic: 'phys', q: 'Which metal is a liquid at room temperature?', options: ['Sodium', 'Mercury', 'Gallium', 'Bromine'], answer: 1, explain: 'Mercury is the liquid metal. Bromine is a liquid NON-metal.' },
    { topic: 'phys', q: 'Which non-metal is a liquid at room temperature?', options: ['Mercury', 'Iodine', 'Bromine', 'Sulphur'], answer: 2, explain: 'Bromine is the only liquid non-metal.' },
    { topic: 'phys', q: 'The most ductile metal is…', options: ['Iron', 'Copper', 'Silver', 'Gold'], answer: 3, explain: '1 g of gold can be drawn into a wire about 2 km long.' },
    { topic: 'phys', q: 'Which metal can be cut with a knife?', options: ['Iron', 'Sodium', 'Copper', 'Aluminium'], answer: 1, explain: 'Sodium and potassium are soft metals.' },
    { topic: 'phys', q: 'Which metals melt on your palm?', options: ['Sodium and potassium', 'Gallium and caesium', 'Lead and mercury', 'Zinc and tin'], answer: 1, explain: 'They have very low melting points.' },
    { topic: 'phys', q: 'The best conductors of heat are…', options: ['Lead and mercury', 'Silver and copper', 'Iron and zinc', 'Sodium and potassium'], answer: 1, explain: 'Lead and mercury are comparatively poor conductors.' },
    { topic: 'phys', q: 'Which non-metal is lustrous?', options: ['Sulphur', 'Iodine', 'Phosphorus', 'Carbon (charcoal)'], answer: 1, explain: 'Iodine is a shiny non-metal.' },
    { topic: 'phys', q: 'Which non-metal is a good conductor of electricity?', options: ['Diamond', 'Graphite', 'Sulphur', 'Iodine'], answer: 1, explain: 'Graphite conducts electricity. Diamond does not.' },
    { topic: 'phys', q: 'The hardest natural substance is…', options: ['Iron', 'Diamond', 'Graphite', 'Steel'], answer: 1, explain: 'Diamond, an allotrope of carbon (a non-metal).' },
    { topic: 'phys', q: 'Metals that make a ringing sound when struck are called…', options: ['Malleable', 'Ductile', 'Sonorous', 'Lustrous'], answer: 2, explain: 'That is why bells are made of metal.' },
    { topic: 'phys', q: 'Non-metals break into pieces when hammered. They are…', options: ['Malleable', 'Brittle', 'Ductile', 'Sonorous'], answer: 1, explain: 'e.g. sulphur, coal.' },
    { topic: 'oxy', q: 'When copper is heated in air, it gets coated with…', options: ['Red copper oxide', 'Black copper oxide', 'Green copper carbonate', 'White copper sulphate'], answer: 1, explain: '2Cu + O2 -> 2CuO (black)' },
    { topic: 'oxy', q: 'Which of these is an amphoteric oxide?', options: ['Na2O', 'MgO', 'Al2O3', 'CO2'], answer: 2, explain: 'Al2O3 and ZnO react with both acids and bases.' },
    { topic: 'oxy', q: 'Sodium is stored in…', options: ['Water', 'Kerosene', 'Alcohol', 'Open air'], answer: 1, explain: 'It reacts vigorously with air and water and catches fire.' },
    { topic: 'oxy', q: 'Which metal burns with a dazzling white flame?', options: ['Copper', 'Iron', 'Magnesium', 'Silver'], answer: 2, explain: '2Mg + O2 -> 2MgO' },
    { topic: 'oxy', q: 'Which metal does NOT react with oxygen even at high temperature?', options: ['Iron', 'Copper', 'Gold', 'Zinc'], answer: 2, explain: 'Gold and silver do not react with oxygen.' },
    { topic: 'oxy', q: 'Na2O dissolves in water to form…', options: ['An acid', 'An alkali (NaOH)', 'A neutral salt', 'Hydrogen only'], answer: 1, explain: 'Na2O + H2O -> 2NaOH' },
    { topic: 'oxy', q: 'Oxides of non-metals are generally…', options: ['Basic', 'Acidic', 'Amphoteric', 'Alkaline'], answer: 1, explain: 'e.g. CO2 and SO2 dissolve in water to form acids.' },
    { topic: 'oxy', q: 'Anodising is done to…', options: ['Iron', 'Copper', 'Aluminium', 'Silver'], answer: 2, explain: 'It makes a thick protective oxide layer on aluminium.' },
    { topic: 'water', q: 'Which metal reacts violently with cold water and catches fire?', options: ['Calcium', 'Magnesium', 'Potassium', 'Iron'], answer: 2, explain: 'Potassium and sodium react violently; hydrogen catches fire.' },
    { topic: 'water', q: 'Calcium floats on water during its reaction because…', options: ['It is lighter than water', 'Hydrogen bubbles stick to its surface', 'It melts', 'It forms an oil layer'], answer: 1, explain: 'Ca + 2H2O -> Ca(OH)2 + H2' },
    { topic: 'water', q: 'Iron reacts with steam to form…', options: ['FeO + H2', 'Fe2O3 + H2', 'Fe3O4 + H2', 'Fe(OH)3 + H2'], answer: 2, explain: '3Fe + 4H2O -> Fe3O4 + 4H2' },
    { topic: 'water', q: 'Which metal reacts with hot water but not with cold water?', options: ['Sodium', 'Magnesium', 'Copper', 'Gold'], answer: 1, explain: 'Mg + 2H2O -> Mg(OH)2 + H2' },
    { topic: 'water', q: 'Which metal does NOT react with water or steam?', options: ['Zinc', 'Iron', 'Aluminium', 'Copper'], answer: 3, explain: 'Lead, copper, silver and gold do not react with water.' },
    { topic: 'water', q: 'White phosphorus is stored under…', options: ['Kerosene', 'Water', 'Alcohol', 'Sand'], answer: 1, explain: 'It catches fire in air.' },
    { topic: 'acid', q: 'Metal + dilute HCl gives…', options: ['Salt + water', 'Salt + hydrogen', 'Oxide + hydrogen', 'Base + hydrogen'], answer: 1, explain: 'e.g. Fe + 2HCl -> FeCl2 + H2' },
    { topic: 'acid', q: 'Which metal reacts most vigorously with dilute HCl?', options: ['Iron', 'Zinc', 'Magnesium', 'Copper'], answer: 2, explain: 'Mg > Al > Zn > Fe. Copper does not react.' },
    { topic: 'acid', q: 'Hydrogen gas is evolved with very dilute HNO3 only by…', options: ['Cu and Ag', 'Mg and Mn', 'Fe and Zn', 'Na and K'], answer: 1, explain: 'HNO3 is an oxidising agent, so it usually oxidises H2 to water.' },
    { topic: 'acid', q: 'Aqua regia is a mixture of conc. HCl and conc. HNO3 in the ratio…', options: ['1 : 3', '3 : 1', '1 : 1', '2 : 1'], answer: 1, explain: '3 parts HCl : 1 part HNO3. It dissolves gold and platinum.' },
    { topic: 'acid', q: 'Which metal does NOT give hydrogen with dilute HCl?', options: ['Zinc', 'Iron', 'Copper', 'Aluminium'], answer: 2, explain: 'Copper is below hydrogen in the reactivity series.' },
    { topic: 'displ', q: 'Which is the most reactive metal?', options: ['Sodium', 'Potassium', 'Calcium', 'Magnesium'], answer: 1, explain: 'K is at the top of the reactivity series.' },
    { topic: 'displ', q: 'Which is the least reactive metal?', options: ['Silver', 'Copper', 'Gold', 'Mercury'], answer: 2, explain: 'Gold is at the bottom of the reactivity series.' },
    { topic: 'displ', q: 'An iron nail kept in copper sulphate solution turns the solution…', options: ['Colourless', 'Pale green', 'Deep blue', 'Red'], answer: 1, explain: 'Fe + CuSO4 -> FeSO4 (pale green) + Cu' },
    { topic: 'displ', q: 'Which reaction will NOT take place?', options: ['Zn + CuSO4', 'Fe + CuSO4', 'Cu + AgNO3', 'Ag + CuSO4'], answer: 3, explain: 'Silver is less reactive than copper, so it cannot displace it.' },
    { topic: 'displ', q: 'Copper wire in silver nitrate solution makes the solution…', options: ['Green', 'Blue', 'Colourless', 'Black'], answer: 1, explain: 'Cu + 2AgNO3 -> Cu(NO3)2 (blue) + 2Ag' },
    { topic: 'displ', q: 'Metal A displaces metal B from its salt solution. So…', options: ['B is more reactive than A', 'A is more reactive than B', 'Both are equally reactive', 'A is a non-metal'], answer: 1, explain: 'A more reactive metal displaces a less reactive one.' },
    { topic: 'displ', q: 'Which metal can displace hydrogen from dilute acids?', options: ['Copper', 'Silver', 'Zinc', 'Gold'], answer: 2, explain: 'Zinc is above hydrogen in the reactivity series.' },
    { topic: 'ionic', q: 'The electronic configuration of Na+ is…', options: ['2,8,1', '2,8', '2,8,2', '2,7'], answer: 1, explain: 'Na (2,8,1) loses 1 electron -> Na+ (2,8)' },
    { topic: 'ionic', q: 'The electronic configuration of Cl- is…', options: ['2,8,7', '2,8,8', '2,8', '2,8,6'], answer: 1, explain: 'Cl (2,8,7) gains 1 electron -> Cl- (2,8,8)' },
    { topic: 'ionic', q: 'Ionic compounds are formed by…', options: ['Sharing of electrons', 'Transfer of electrons', 'Sharing of protons', 'Transfer of neutrons'], answer: 1, explain: 'A metal gives electrons to a non-metal.' },
    { topic: 'ionic', q: 'Ionic compounds conduct electricity…', options: ['In solid state', 'In molten state or in solution', 'Never', 'Only in kerosene'], answer: 1, explain: 'Ions must be free to move.' },
    { topic: 'ionic', q: 'Ionic compounds are generally soluble in…', options: ['Kerosene', 'Petrol', 'Water', 'All of these'], answer: 2, explain: 'They are insoluble in kerosene and petrol.' },
    { topic: 'ionic', q: 'Ionic compounds have high melting points because…', options: ['They are liquids', 'There is strong attraction between ions', 'They are made of molecules', 'They are soft'], answer: 1, explain: 'A lot of energy is needed to break the strong attraction.' },
    { topic: 'ionic', q: 'How many electrons does Mg lose to form Mg²⁺?', options: ['1', '2', '3', '0'], answer: 1, explain: 'Mg (2,8,2) -> Mg²⁺ (2,8)' },
    { topic: 'ore', q: 'Minerals from which metals can be extracted profitably are called…', options: ['Gangue', 'Ores', 'Alloys', 'Slag'], answer: 1, explain: 'All ores are minerals, but not all minerals are ores.' },
    { topic: 'ore', q: 'Impurities like soil and sand in an ore are called…', options: ['Flux', 'Slag', 'Gangue', 'Amalgam'], answer: 2, explain: 'They are removed during enrichment of the ore.' },
    { topic: 'ore', q: 'Heating a sulphide ore strongly in excess air is called…', options: ['Calcination', 'Roasting', 'Reduction', 'Refining'], answer: 1, explain: '2ZnS + 3O2 -> 2ZnO + 2SO2' },
    { topic: 'ore', q: 'Heating a carbonate ore strongly in limited air is called…', options: ['Calcination', 'Roasting', 'Galvanising', 'Anodising'], answer: 0, explain: 'ZnCO3 -> ZnO + CO2' },
    { topic: 'ore', q: 'Zinc oxide is reduced to zinc using…', options: ['Oxygen', 'Carbon', 'Water', 'Chlorine'], answer: 1, explain: 'ZnO + C -> Zn + CO' },
    { topic: 'ore', q: 'Which metal is found in the free (native) state?', options: ['Sodium', 'Gold', 'Iron', 'Zinc'], answer: 1, explain: 'Gold is very unreactive.' },
    { topic: 'ore', q: 'Sodium is extracted by…', options: ['Heating its ore', 'Reduction with carbon', 'Electrolysis of molten NaCl', 'Displacement with iron'], answer: 2, explain: 'Highly reactive metals are obtained by electrolytic reduction.' },
    { topic: 'ore', q: 'The thermit reaction is used for…', options: ['Making steel', 'Joining railway tracks', 'Refining copper', 'Galvanising'], answer: 1, explain: 'Fe2O3 + 2Al -> 2Fe + Al2O3 + heat (molten iron)' },
    { topic: 'ore', q: 'Mercury is obtained from cinnabar (HgS) by…', options: ['Electrolysis', 'Just heating in air', 'Reduction with Al', 'Reduction with carbon'], answer: 1, explain: 'Hg is low in the reactivity series: 2HgS + 3O2 -> 2HgO + 2SO2, then 2HgO -> 2Hg + O2' },
    { topic: 'refine', q: 'In electrolytic refining of copper, the anode is made of…', options: ['Pure copper', 'Impure copper', 'Graphite', 'Zinc'], answer: 1, explain: 'The cathode is a thin strip of pure copper.' },
    { topic: 'refine', q: 'The electrolyte used to refine copper is…', options: ['Acidified copper sulphate', 'Sodium chloride', 'Silver nitrate', 'Dilute HCl'], answer: 0, explain: 'Copper ions move from the anode to the cathode through it.' },
    { topic: 'refine', q: 'Insoluble impurities that settle below the anode are called…', options: ['Gangue', 'Slag', 'Anode mud', 'Rust'], answer: 2, explain: 'Soluble impurities go into the solution.' },
    { topic: 'corr', q: 'Silver articles turn black in air due to the formation of…', options: ['Silver oxide', 'Silver sulphide', 'Silver chloride', 'Silver carbonate'], answer: 1, explain: 'Silver reacts with sulphur compounds in the air.' },
    { topic: 'corr', q: 'Copper vessels get a green coating of…', options: ['Copper oxide', 'Basic copper carbonate', 'Copper sulphate', 'Copper chloride'], answer: 1, explain: 'Copper reacts with moist CO2 in the air.' },
    { topic: 'corr', q: 'Iron rusts in the presence of…', options: ['Air only', 'Water only', 'Both air and water', 'Neither'], answer: 2, explain: 'Both oxygen and moisture are needed.' },
    { topic: 'corr', q: 'Galvanisation is coating iron with…', options: ['Tin', 'Zinc', 'Chromium', 'Copper'], answer: 1, explain: 'Zinc protects iron even if the coating breaks.' },
    { topic: 'corr', q: 'Brass is an alloy of…', options: ['Copper and tin', 'Copper and zinc', 'Lead and tin', 'Iron and carbon'], answer: 1, explain: 'Bronze is copper + tin.' },
    { topic: 'corr', q: 'Solder is an alloy of…', options: ['Lead and tin', 'Copper and zinc', 'Iron and nickel', 'Copper and tin'], answer: 0, explain: 'It has a low melting point, so it is used for welding wires.' },
    { topic: 'corr', q: 'Stainless steel contains iron, nickel and…', options: ['Copper', 'Chromium', 'Zinc', 'Lead'], answer: 1, explain: 'It does not rust.' },
    { topic: 'corr', q: 'An alloy that contains mercury is called…', options: ['Amalgam', 'Bronze', 'Solder', 'Brass'], answer: 0, explain: 'Any alloy of mercury is an amalgam.' },
    { topic: 'corr', q: 'Compared with pure metals, alloys usually have…', options: ['Higher conductivity', 'Lower conductivity and lower melting point', 'Higher melting point', 'No difference'], answer: 1, explain: 'That is why alloys are used in heating elements and solder.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'oxy', a: 'Sodium is stored in kerosene.', r: 'Sodium reacts vigorously with air and water and catches fire.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'oxy', a: 'Aluminium oxide is an amphoteric oxide.', r: 'Aluminium oxide reacts with both acids and bases to give salt and water.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'phys', a: 'Graphite is used to make electrodes.', r: 'Graphite is the hardest natural substance.', answer: 2, explain: 'A is true, but R is false — DIAMOND is the hardest. Graphite is used because it conducts electricity.' },
      { topic: 'water', a: 'Calcium floats on water during its reaction.', r: 'Bubbles of hydrogen gas stick to the surface of calcium.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'acid', a: 'Copper reacts with dilute HCl to give hydrogen gas.', r: 'Copper is below hydrogen in the reactivity series.', answer: 3, explain: 'A is false — copper does NOT react with dilute HCl. R is true and is the reason why.' },
      { topic: 'acid', a: 'Hydrogen is not usually evolved when metals react with nitric acid.', r: 'Nitric acid is a strong oxidising agent.', answer: 0, explain: 'Both true, and R explains A — HNO3 oxidises H2 to water.' },
      { topic: 'displ', a: 'An iron nail in copper sulphate solution gets a brown coat.', r: 'Iron is more reactive than copper.', answer: 0, explain: 'Both true, and R explains A — iron displaces copper.' },
      { topic: 'ionic', a: 'Ionic compounds conduct electricity in the solid state.', r: 'Ions in a solid are not free to move.', answer: 3, explain: 'A is false — solid ionic compounds do NOT conduct. R is true.' },
      { topic: 'ionic', a: 'Ionic compounds have high melting points.', r: 'Ionic compounds are soluble in water.', answer: 1, explain: 'Both true, but solubility does not explain the high melting point (strong attraction between ions does).' },
      { topic: 'ore', a: 'Highly reactive metals cannot be obtained by reducing their oxides with carbon.', r: 'These metals have more affinity for oxygen than carbon has.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'corr', a: 'Galvanised iron does not rust even if the zinc coating is broken.', r: 'Zinc is less reactive than iron.', answer: 2, explain: 'A is true, but R is false — zinc is MORE reactive, so it corrodes first and protects iron.' },
      { topic: 'corr', a: '22 carat gold is used for making jewellery.', r: 'Pure (24 carat) gold is very soft.', answer: 0, explain: 'Both true, and R explains A — adding silver or copper makes it harder.' }
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
    { title: 'Odd Metals & Non-metals', pairs: [
      ['Liquid metal', 'Mercury'],
      ['Liquid non-metal', 'Bromine'],
      ['Lustrous non-metal', 'Iodine'],
      ['Non-metal that conducts', 'Graphite'],
      ['Metals cut with a knife', 'Sodium, potassium'],
      ['Melt on your palm', 'Gallium, caesium']
    ] },
    { title: 'Metals and Water', pairs: [
      ['Sodium, potassium', 'Violent with cold water'],
      ['Calcium', 'Less violent; floats'],
      ['Magnesium', 'Hot water'],
      ['Aluminium, iron, zinc', 'Only steam'],
      ['Copper, silver, gold', 'No reaction'],
      ['White phosphorus', 'Stored under water']
    ] },
    { title: 'Extraction Methods', pairs: [
      ['Sulphide ore in excess air', 'Roasting'],
      ['Carbonate ore in limited air', 'Calcination'],
      ['ZnO + C', 'Reduction with carbon'],
      ['Fe2O3 + Al', 'Thermit reaction'],
      ['Sodium from molten NaCl', 'Electrolytic reduction'],
      ['Mercury from HgS', 'Heating alone']
    ] },
    { title: 'Alloys', pairs: [
      ['Brass', 'Copper + zinc'],
      ['Bronze', 'Copper + tin'],
      ['Solder', 'Lead + tin'],
      ['Stainless steel', 'Iron + nickel + chromium'],
      ['Steel', 'Iron + carbon'],
      ['Amalgam', 'Contains mercury']
    ] },
    { title: 'Corrosion & Protection', pairs: [
      ['Silver tarnish', 'Black silver sulphide'],
      ['Copper tarnish', 'Green basic copper carbonate'],
      ['Rust', 'Needs air and water'],
      ['Galvanising', 'Zinc coating'],
      ['Anodising', 'Thick oxide on aluminium'],
      ['Aqua regia', 'Dissolves gold']
    ] },
    { title: 'Key Terms', pairs: [
      ['Gangue', 'Sand and soil in ore'],
      ['Ore', 'Mineral used to extract a metal'],
      ['Amphoteric oxide', 'Al2O3, ZnO'],
      ['Anode mud', 'Insoluble impurities'],
      ['Malleable', 'Beaten into sheets'],
      ['Ductile', 'Drawn into wires']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'Copper heated in air', reactants: ['Cu', 'O2'], products: ['CuO'], answer: [2, 1, 2] },
    { name: 'Aluminium + oxygen', reactants: ['Al', 'O2'], products: ['Al2O3'], answer: [4, 3, 2] },
    { name: 'Magnesium burns in air', reactants: ['Mg', 'O2'], products: ['MgO'], answer: [2, 1, 2] },
    { name: 'Sodium + oxygen', reactants: ['Na', 'O2'], products: ['Na2O'], answer: [4, 1, 2] },
    { name: 'Sodium oxide + water', reactants: ['Na2O', 'H2O'], products: ['NaOH'], answer: [1, 1, 2] },
    { name: 'Aluminium oxide + NaOH (amphoteric)', reactants: ['Al2O3', 'NaOH'], products: ['NaAlO2', 'H2O'], answer: [1, 2, 2, 1] },
    { name: 'Zinc oxide + hydrochloric acid', reactants: ['ZnO', 'HCl'], products: ['ZnCl2', 'H2O'], answer: [1, 2, 1, 1] },
    { name: 'Sodium + cold water', reactants: ['Na', 'H2O'], products: ['NaOH', 'H2'], answer: [2, 2, 2, 1] },
    { name: 'Potassium + cold water', reactants: ['K', 'H2O'], products: ['KOH', 'H2'], answer: [2, 2, 2, 1] },
    { name: 'Calcium + water', reactants: ['Ca', 'H2O'], products: ['Ca(OH)2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Magnesium + hot water', reactants: ['Mg', 'H2O'], products: ['Mg(OH)2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Aluminium + steam', reactants: ['Al', 'H2O'], products: ['Al2O3', 'H2'], answer: [2, 3, 1, 3] },
    { name: 'Iron + steam', reactants: ['Fe', 'H2O'], products: ['Fe3O4', 'H2'], answer: [3, 4, 1, 4] },
    { name: 'Iron + hydrochloric acid', reactants: ['Fe', 'HCl'], products: ['FeCl2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Magnesium + very dilute nitric acid', reactants: ['Mg', 'HNO3'], products: ['Mg(NO3)2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Iron displaces copper', reactants: ['Fe', 'CuSO4'], products: ['FeSO4', 'Cu'], answer: [1, 1, 1, 1] },
    { name: 'Copper displaces silver', reactants: ['Cu', 'AgNO3'], products: ['Cu(NO3)2', 'Ag'], answer: [1, 2, 1, 2] },
    { name: 'Sodium + chlorine', reactants: ['Na', 'Cl2'], products: ['NaCl'], answer: [2, 1, 2] },
    { name: 'Roasting zinc blende', reactants: ['ZnS', 'O2'], products: ['ZnO', 'SO2'], answer: [2, 3, 2, 2] },
    { name: 'Calcination of calamine', reactants: ['ZnCO3'], products: ['ZnO', 'CO2'], answer: [1, 1, 1] },
    { name: 'Reduction of zinc oxide with carbon', reactants: ['ZnO', 'C'], products: ['Zn', 'CO'], answer: [1, 1, 1, 1] },
    { name: 'Heating cinnabar in air', reactants: ['HgS', 'O2'], products: ['HgO', 'SO2'], answer: [2, 3, 2, 2] },
    { name: 'Mercury oxide on heating', reactants: ['HgO'], products: ['Hg', 'O2'], answer: [2, 2, 1] },
    { name: 'Copper(I) sulphide in air', reactants: ['Cu2S', 'O2'], products: ['Cu2O', 'SO2'], answer: [2, 3, 2, 2] },
    { name: 'Copper(I) oxide + copper(I) sulphide', reactants: ['Cu2O', 'Cu2S'], products: ['Cu', 'SO2'], answer: [2, 1, 6, 1] },
    { name: 'Thermit reaction', reactants: ['Fe2O3', 'Al'], products: ['Fe', 'Al2O3'], answer: [1, 2, 2, 1] },
    { name: 'Manganese dioxide + aluminium', reactants: ['MnO2', 'Al'], products: ['Mn', 'Al2O3'], answer: [3, 4, 3, 2] },
    { name: 'Electrolysis of molten sodium chloride', reactants: ['NaCl'], products: ['Na', 'Cl2'], answer: [2, 2, 1] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Name a metal that is liquid and a non-metal that is liquid at room temperature.',
      keypoints: [
        { text: 'Mercury (metal) and bromine (non-metal)', kw: ['mercury|hg', 'bromine|br'] }
      ],
      model: 'Mercury is a liquid metal and bromine is a liquid non-metal at room temperature.' },
    { marks: 1, q: 'Why is sodium kept immersed in kerosene oil?',
      keypoints: [
        { text: 'It reacts vigorously with air/moisture and catches fire', kw: ['air|oxygen|moisture|water', 'fire|vigorous|react'] }
      ],
      model: 'Sodium reacts so vigorously with oxygen and moisture in the air that it catches fire. Kerosene keeps air and water away from it.' },
    { marks: 1, q: 'What is aqua regia?',
      keypoints: [
        { text: 'Mixture of conc. HCl and conc. HNO3 in 3 : 1 ratio; dissolves gold', kw: ['hcl|hydrochloric', 'hno3|nitric', '3'] }
      ],
      model: 'Aqua regia is a freshly prepared mixture of concentrated hydrochloric acid and concentrated nitric acid in the ratio 3 : 1. It can dissolve gold and platinum.' },
    { marks: 1, q: 'Why is solder used for welding electrical wires?',
      keypoints: [
        { text: 'It has a low melting point', kw: ['low', 'melt'] }
      ],
      model: 'Solder is an alloy of lead and tin with a low melting point, so it melts easily and joins wires.' },
    { marks: 2, q: 'What are amphoteric oxides? Give two examples.',
      keypoints: [
        { text: 'Metal oxides that react with both acids and bases to give salt and water', kw: ['acid', 'base'] },
        { text: 'Examples: aluminium oxide (Al2O3), zinc oxide (ZnO)', kw: ['al2o3|aluminium oxide|zno|zinc oxide'] }
      ],
      model: 'Amphoteric oxides are metal oxides that react with both acids and bases to produce salt and water.\nExamples: aluminium oxide (Al2O3) and zinc oxide (ZnO).\nAl2O3 + 6HCl -> 2AlCl3 + 3H2O\nAl2O3 + 2NaOH -> 2NaAlO2 + H2O' },
    { marks: 2, q: 'Name two metals that can displace hydrogen from dilute acids and two that cannot.',
      keypoints: [
        { text: 'Can: Zn, Fe, Mg, Al (above hydrogen)', kw: ['zinc|iron|magnesium|aluminium| zn| fe| mg| al'] },
        { text: 'Cannot: Cu, Ag, Au, Hg (below hydrogen)', kw: ['copper|silver|gold|mercury| cu| ag| au| hg'] }
      ],
      model: 'Metals above hydrogen in the reactivity series, such as zinc and magnesium (also iron, aluminium), can displace hydrogen from dilute acids.\nMetals below hydrogen, such as copper and silver (also gold, mercury), cannot.' },
    { marks: 2, q: 'What happens when an iron nail is dipped in copper sulphate solution? Write the equation.',
      keypoints: [
        { text: 'Blue solution turns pale green; brown copper coats the nail', kw: ['green', 'brown|copper|red'] },
        { text: 'Fe + CuSO4 -> FeSO4 + Cu', kw: ['feso4'] }
      ],
      model: 'Iron is more reactive than copper, so it displaces copper from copper sulphate. The blue solution turns pale green and a reddish-brown coat of copper forms on the nail.\nFe + CuSO4 -> FeSO4 + Cu' },
    { marks: 2, q: 'Why do ionic compounds have high melting points?',
      keypoints: [
        { text: 'Strong electrostatic attraction between oppositely charged ions', kw: ['strong', 'attraction|force|bond'] },
        { text: 'A lot of energy is needed to break it', kw: ['energy|heat'] }
      ],
      model: 'Ionic compounds are made of positive and negative ions held together by strong electrostatic forces of attraction. A large amount of energy is needed to break these forces, so ionic compounds have high melting points.' },
    { marks: 2, q: 'Differentiate between roasting and calcination with one example each.',
      keypoints: [
        { text: 'Roasting: sulphide ore heated in excess air; 2ZnS + 3O2 -> 2ZnO + 2SO2', kw: ['sulphide|zns', 'excess'] },
        { text: 'Calcination: carbonate ore heated in limited air; ZnCO3 -> ZnO + CO2', kw: ['carbonate|znco3', 'limited|absence|little'] }
      ],
      model: 'Roasting: a sulphide ore is heated strongly in excess air.\n2ZnS + 3O2 -> 2ZnO + 2SO2\nCalcination: a carbonate ore is heated strongly in limited air.\nZnCO3 -> ZnO + CO2' },
    { marks: 2, q: 'What is an alloy? Name the constituents of brass and bronze.',
      keypoints: [
        { text: 'Homogeneous mixture of two or more metals, or a metal and a non-metal', kw: ['mixture'] },
        { text: 'Brass: Cu + Zn; Bronze: Cu + Sn', kw: ['zinc|zn', 'tin|sn'] }
      ],
      model: 'An alloy is a homogeneous mixture of two or more metals, or of a metal and a non-metal.\nBrass = copper + zinc\nBronze = copper + tin' },
    { marks: 2, q: 'Why are metals like Na, K and Ca not obtained by reducing their oxides with carbon?',
      keypoints: [
        { text: 'They have more affinity for oxygen than carbon', kw: ['affinity|reactive|more', 'oxygen'] },
        { text: 'They are obtained by electrolytic reduction of molten chlorides', kw: ['electroly'] }
      ],
      model: 'These metals are very reactive and have more affinity for oxygen than carbon has, so carbon cannot take oxygen away from their oxides. They are obtained by electrolytic reduction of their molten chlorides.' },
    { marks: 3, q: 'Show the formation of NaCl and MgCl2 by the transfer of electrons.',
      keypoints: [
        { text: 'Na (2,8,1) loses 1 electron -> Na+; Cl (2,8,7) gains 1 -> Cl-', kw: ['na+', 'cl-'] },
        { text: 'Mg (2,8,2) loses 2 electrons -> Mg²⁺', kw: ['mg2+|mg 2+|mg²⁺|2e-|2 electron|two electron'] },
        { text: 'Two Cl atoms each gain 1 electron; Mg²⁺ + 2Cl- -> MgCl2', kw: ['2cl|two cl|2 cl'] }
      ],
      model: 'NaCl:\nNa (2,8,1) -> Na+ (2,8) + e-\nCl (2,8,7) + e- -> Cl- (2,8,8)\nNa+ + Cl- -> NaCl\n\nMgCl2:\nMg (2,8,2) -> Mg²⁺ (2,8) + 2e-\n2Cl (2,8,7) + 2e- -> 2Cl- (2,8,8)\nMg²⁺ + 2Cl- -> MgCl2\n\nThe oppositely charged ions are held by strong electrostatic attraction.' },
    { marks: 3, q: 'Give three properties of ionic compounds.',
      keypoints: [
        { text: 'Hard solids, brittle', kw: ['solid|hard|brittle'] },
        { text: 'High melting and boiling points', kw: ['melting|boiling'] },
        { text: 'Soluble in water, insoluble in kerosene; conduct in solution/molten state', kw: ['water|conduct'] }
      ],
      model: '1. They are solid and hard, but brittle, because of strong attraction between ions.\n2. They have high melting and boiling points.\n3. They are soluble in water but insoluble in kerosene and petrol.\n4. They conduct electricity when molten or dissolved in water, but not as solids.' },
    { marks: 3, q: 'Write the reactions of (a) sodium, (b) magnesium and (c) iron with water. State the conditions.',
      keypoints: [
        { text: '(a) Cold water: 2Na + 2H2O -> 2NaOH + H2', kw: ['naoh', 'cold'] },
        { text: '(b) Hot water: Mg + 2H2O -> Mg(OH)2 + H2', kw: ['mg(oh)2', 'hot'] },
        { text: '(c) Steam: 3Fe + 4H2O -> Fe3O4 + 4H2', kw: ['fe3o4', 'steam'] }
      ],
      model: '(a) Sodium reacts violently with cold water:\n2Na + 2H2O -> 2NaOH + H2 + heat\n(b) Magnesium reacts with hot water:\nMg + 2H2O -> Mg(OH)2 + H2\n(c) Iron reacts only with steam:\n3Fe + 4H2O -> Fe3O4 + 4H2' },
    { marks: 3, q: 'Explain the electrolytic refining of copper with a labelled description.',
      keypoints: [
        { text: 'Anode: impure copper; cathode: thin strip of pure copper', kw: ['anode', 'cathode', 'impure'] },
        { text: 'Electrolyte: acidified copper sulphate solution', kw: ['copper sulphate|cuso4'] },
        { text: 'Pure copper deposits on cathode; impurities form anode mud', kw: ['anode mud|mud'] }
      ],
      model: 'Anode: a thick block of impure copper\nCathode: a thin strip of pure copper\nElectrolyte: acidified copper sulphate solution\nWhen current is passed, copper from the anode dissolves into the solution, and an equal amount of pure copper deposits on the cathode. Soluble impurities go into the solution; insoluble impurities settle below the anode as anode mud.' },
    { marks: 3, q: 'What is galvanisation? Why does galvanised iron not rust even when the zinc coating is broken? Name two other methods of preventing rusting.',
      keypoints: [
        { text: 'Coating iron/steel with a thin layer of zinc', kw: ['zinc'] },
        { text: 'Zinc is more reactive, so it corrodes instead of iron', kw: ['reactive'] },
        { text: 'Other methods: painting, oiling, greasing, chrome plating, alloying', kw: ['paint|oil|grease|chrom|alloy'] }
      ],
      model: 'Galvanisation is coating iron or steel with a thin layer of zinc.\nZinc is more reactive than iron, so even if the coating breaks, zinc gets oxidised first and the iron stays protected.\nOther methods: painting, oiling, greasing, chrome plating, anodising, making alloys.' },
    { marks: 3, q: 'Describe an activity to show that both air and water are needed for rusting.',
      keypoints: [
        { text: 'Tube A: nail in ordinary water (air + water) — rusts', kw: ['water', 'rust'] },
        { text: 'Tube B: nail in boiled water covered with oil (no air) — no rust', kw: ['boiled|oil'] },
        { text: 'Tube C: nail with anhydrous calcium chloride (dry air) — no rust', kw: ['calcium chloride|cacl2|dry'] }
      ],
      model: 'Take three test tubes with clean iron nails.\nA: nail in ordinary tap water (air + water) — the nail rusts.\nB: nail in boiled distilled water with a layer of oil on top (no dissolved air) — no rust.\nC: nail with anhydrous calcium chloride, which absorbs moisture (dry air only) — no rust.\nConclusion: rusting needs both air and water.' },
    { marks: 3, q: 'Explain why (a) copper vessels get a green coat, (b) silver articles turn black, and (c) 24 carat gold is not used for jewellery.',
      keypoints: [
        { text: '(a) Copper reacts with moist CO2 to form basic copper carbonate (green)', kw: ['carbonate'] },
        { text: '(b) Silver reacts with sulphur in air to form silver sulphide (black)', kw: ['sulphide|sulfide'] },
        { text: '(c) Pure gold is very soft; alloyed with Ag/Cu to make 22 carat', kw: ['soft'] }
      ],
      model: '(a) Copper reacts with moist carbon dioxide in the air and gets a green coat of basic copper carbonate.\n(b) Silver reacts with sulphur compounds in the air and forms a black coat of silver sulphide.\n(c) 24 carat gold is pure gold, which is very soft. It is alloyed with silver or copper to make 22 carat gold, which is harder.' },
    { marks: 5, q: 'Explain how metals are extracted depending on their position in the reactivity series: (a) low, (b) middle, (c) high. Give one equation for each.',
      keypoints: [
        { text: '(a) Low (Hg, Cu): heating ore in air, e.g. 2HgO -> 2Hg + O2', kw: ['hg|mercury|cu2s|copper', 'heat'] },
        { text: '(b) Middle: sulphide roasted / carbonate calcined to oxide', kw: ['roast', 'calcin'] },
        { text: '(b) Oxide reduced with carbon, e.g. ZnO + C -> Zn + CO', kw: ['carbon|coke', 'zno|oxide'] },
        { text: '(c) High (Na, Mg, Ca, Al): electrolysis of molten chlorides/oxide', kw: ['electroly', 'molten'] },
        { text: 'Na at cathode, Cl2 at anode', kw: ['cathode', 'anode'] }
      ],
      model: '(a) Low reactivity (Hg, Cu): oxides are reduced by heating alone.\n2HgS + 3O2 -> 2HgO + 2SO2\n2HgO -> 2Hg + O2\n(b) Middle reactivity (Zn, Fe, Pb): the ore is first converted to an oxide — sulphide ores by roasting (2ZnS + 3O2 -> 2ZnO + 2SO2), carbonate ores by calcination (ZnCO3 -> ZnO + CO2). Then the oxide is reduced with carbon:\nZnO + C -> Zn + CO\nHighly reactive metals like Al can also be used as reducing agents (thermit: Fe2O3 + 2Al -> 2Fe + Al2O3).\n(c) High reactivity (Na, Mg, Ca, Al): obtained by electrolytic reduction of their molten chlorides (aluminium from molten oxide). Metal deposits at the cathode, chlorine at the anode.\nAt cathode: Na+ + e- -> Na\nAt anode: 2Cl- -> Cl2 + 2e-' },
    { marks: 5, q: 'Compare metals and non-metals on any five properties. Give exceptions where they exist.',
      keypoints: [
        { text: 'Lustre: metals shiny, non-metals dull (iodine is lustrous)', kw: ['lustr|shiny', 'iodine'] },
        { text: 'Malleable & ductile vs brittle', kw: ['malleable|ductile', 'brittle'] },
        { text: 'Conductivity: metals good, non-metals poor (graphite conducts)', kw: ['conduct', 'graphite'] },
        { text: 'State: metals solid (mercury liquid), non-metals solid/gas (bromine liquid)', kw: ['mercury', 'bromine'] },
        { text: 'Oxides: metal oxides basic, non-metal oxides acidic/neutral', kw: ['basic', 'acidic'] }
      ],
      model: '1. Lustre: metals are shiny; non-metals are dull (exception: iodine is lustrous).\n2. Malleability/ductility: metals are malleable and ductile; non-metals are brittle.\n3. Conductivity: metals are good conductors of heat and electricity; non-metals are poor conductors (exception: graphite conducts electricity).\n4. State: metals are solids (exception: mercury is liquid); non-metals are solids or gases (exception: bromine is liquid).\n5. Hardness: metals are generally hard (exception: Na, K are soft); non-metals are generally soft (exception: diamond is the hardest natural substance).\n6. Oxides: metal oxides are basic (Al2O3, ZnO are amphoteric); non-metal oxides are acidic or neutral.\n7. Sound: metals are sonorous; non-metals are not.' },
    { marks: 4, q: 'CASE STUDY: Aman took four test tubes with solutions of ZnSO4, FeSO4, CuSO4 and Al2(SO4)3. He put a clean iron nail into each.\n(a) In which tubes will a reaction take place?\n(b) What colour change will he see there?\n(c) Write the equation.\n(d) What does this tell us about the reactivity of iron?',
      keypoints: [
        { text: '(a) Only in the CuSO4 tube', kw: ['cuso4|copper sulphate'] },
        { text: '(b) Blue solution turns pale green; brown copper on nail', kw: ['green'] },
        { text: '(c) Fe + CuSO4 -> FeSO4 + Cu', kw: ['feso4'] },
        { text: '(d) Iron is more reactive than Cu but less than Zn and Al', kw: ['zinc|aluminium| zn| al', 'copper| cu'] }
      ],
      model: '(a) Only in the copper sulphate tube. (No change with FeSO4 — same metal; Zn and Al are more reactive than Fe.)\n(b) The blue solution turns pale green and a reddish-brown layer of copper forms on the nail.\n(c) Fe + CuSO4 -> FeSO4 + Cu\n(d) Iron is more reactive than copper, but less reactive than zinc and aluminium.' },
    { marks: 4, q: 'CASE STUDY: Railway workers place a mixture of iron(III) oxide and aluminium powder in the gap between two rails and ignite it. Molten metal flows into the gap and joins the rails.\n(a) Name this reaction.\n(b) Write the balanced equation.\n(c) Which substance is reduced and which is the reducing agent?\n(d) Why is the iron formed in the molten state?',
      keypoints: [
        { text: '(a) Thermit reaction', kw: ['thermit'] },
        { text: '(b) Fe2O3 + 2Al -> 2Fe + Al2O3', kw: ['fe2o3', 'al2o3'] },
        { text: '(c) Fe2O3 is reduced; Al is the reducing agent', kw: ['reduc', 'aluminium| al '] },
        { text: '(d) The reaction is highly exothermic', kw: ['exothermic|heat'] }
      ],
      model: '(a) Thermit reaction.\n(b) Fe2O3 + 2Al -> 2Fe + Al2O3 + heat\n(c) Iron(III) oxide (Fe2O3) is reduced to iron. Aluminium is the reducing agent (it is oxidised to Al2O3).\n(d) The reaction is highly exothermic — so much heat is released that iron is formed in the molten state.' },
    { marks: 4, q: 'CASE STUDY: Element X has electronic configuration 2,8,1 and element Y has 2,8,7.\n(a) Identify X and Y as metal or non-metal.\n(b) Write the formula of the compound formed.\n(c) What type of bond is formed?\n(d) Will the compound conduct electricity in the solid state? Why?',
      keypoints: [
        { text: '(a) X (sodium) is a metal; Y (chlorine) is a non-metal', kw: ['metal'] },
        { text: '(b) XY (NaCl)', kw: ['xy|nacl'] },
        { text: '(c) Ionic (electrovalent) bond', kw: ['ionic|electrovalent'] },
        { text: '(d) No — ions are not free to move in the solid', kw: ['no|not', 'move|free'] }
      ],
      model: '(a) X (2,8,1) is sodium, a metal — it loses 1 electron. Y (2,8,7) is chlorine, a non-metal — it gains 1 electron.\n(b) XY, i.e. NaCl.\n(c) An ionic (electrovalent) bond, formed by transfer of an electron from X to Y.\n(d) No. In the solid state the ions are held in fixed positions and cannot move. It conducts only when molten or dissolved in water.' }
  ]
});
