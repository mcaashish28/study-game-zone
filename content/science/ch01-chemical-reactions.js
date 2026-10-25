// CBSE Class 10 Science (NCERT) — Chapter 1: Chemical Reactions and Equations
// Formulas are written plainly (H2O, Ca(OH)2); the app shows the numbers as subscripts.
// Write "->" for the reaction arrow.
SWG.addChapter('science', {
  id: 'sci-ch01',
  number: 1,
  title: 'Chemical Reactions and Equations',
  icon: '⚗️',

  topics: {
    eq: 'Chemical Equations',
    comb: 'Combination Reactions',
    energy: 'Exothermic & Endothermic',
    decomp: 'Decomposition Reactions',
    disp: 'Displacement Reactions',
    double: 'Double Displacement',
    redox: 'Oxidation & Reduction',
    daily: 'Corrosion & Rancidity'
  },

  summary: [
    'A chemical reaction turns reactants into new substances (products). Signs: change in state, colour, temperature, or a gas is given off.',
    'A balanced equation has the same number of atoms of each element on both sides (law of conservation of mass).',
    'Combination: A + B -> AB. Decomposition: AB -> A + B (needs heat, light or electricity).',
    'Displacement: a more reactive element pushes out a less reactive one. Double displacement: two compounds swap ions, often forming a precipitate.',
    'Oxidation = gain of oxygen / loss of hydrogen. Reduction = loss of oxygen / gain of hydrogen. Both together = redox.',
    'Exothermic reactions give out heat; endothermic reactions take in energy.',
    'Corrosion (rusting) and rancidity (oily food going bad) are effects of oxidation in daily life.'
  ],

  flashcards: [
    { topic: 'eq', front: 'What is a chemical reaction?', back: 'A process in which one or more substances (reactants) change into new substances (products) with new properties.' },
    { topic: 'eq', front: 'Name 4 signs that tell us a chemical reaction has taken place.', back: '1. Change in state\n2. Change in colour\n3. Evolution of a gas\n4. Change in temperature' },
    { topic: 'eq', front: 'What happens when a magnesium ribbon burns in air?', back: 'It burns with a dazzling white flame and forms a white powder — magnesium oxide.\n2Mg + O2 -> 2MgO' },
    { topic: 'eq', front: 'Why is a magnesium ribbon cleaned with sandpaper before burning?', back: 'To remove the layer of magnesium oxide on its surface. This layer stops the ribbon from burning easily.' },
    { topic: 'eq', front: 'What is a skeletal chemical equation?', back: 'An unbalanced equation: the formulas are correct but the atoms are not equal on both sides.\ne.g. Mg + O2 -> MgO' },
    { topic: 'eq', front: 'Why must a chemical equation be balanced?', back: 'Because of the law of conservation of mass — mass can neither be created nor destroyed in a chemical reaction. So the atoms of each element must be equal on both sides.' },
    { topic: 'eq', front: 'What do the state symbols (s), (l), (g) and (aq) mean?', back: '(s) solid\n(l) liquid\n(g) gas\n(aq) aqueous — dissolved in water' },
    { topic: 'eq', front: 'Balanced equation: iron + steam', back: '3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)' },
    { topic: 'comb', front: 'What is a combination reaction?', back: 'Two or more reactants combine to form a single product.\nA + B -> AB' },
    { topic: 'comb', front: 'What happens when water is added to quicklime?', back: 'CaO + H2O -> Ca(OH)2 + heat\nQuicklime (calcium oxide) becomes slaked lime (calcium hydroxide). A lot of heat is released.' },
    { topic: 'comb', front: 'Why does a white-washed wall become shiny after 2–3 days?', back: 'Calcium hydroxide slowly reacts with carbon dioxide in the air and forms a thin layer of calcium carbonate, which is shiny.\nCa(OH)2 + CO2 -> CaCO3 + H2O' },
    { topic: 'comb', front: 'Give two more examples of combination reactions.', back: 'Burning of coal: C + O2 -> CO2\nFormation of water: 2H2 + O2 -> 2H2O' },
    { topic: 'energy', front: 'What is an exothermic reaction?', back: 'A reaction in which heat is given out along with the products.\ne.g. burning natural gas: CH4 + 2O2 -> CO2 + 2H2O + energy' },
    { topic: 'energy', front: 'Why is respiration an exothermic reaction?', back: 'In our cells, glucose combines with oxygen and releases energy.\nC6H12O6 + 6O2 -> 6CO2 + 6H2O + energy' },
    { topic: 'energy', front: 'What is an endothermic reaction?', back: 'A reaction that absorbs energy (heat, light or electricity). Most decomposition reactions are endothermic.' },
    { topic: 'decomp', front: 'What is a decomposition reaction?', back: 'A single reactant breaks down into two or more simpler products.\nAB -> A + B\nIt is the opposite of a combination reaction.' },
    { topic: 'decomp', front: 'What are the 3 types of decomposition, based on the energy used?', back: 'Thermal — using heat\nElectrolytic — using electricity\nPhotolytic — using light' },
    { topic: 'decomp', front: 'What happens when ferrous sulphate crystals are heated?', back: 'The green crystals lose water and change colour, then decompose. A smell of burning sulphur comes.\n2FeSO4 -> Fe2O3 + SO2 + SO3' },
    { topic: 'decomp', front: 'What happens when calcium carbonate (limestone) is heated?', back: 'CaCO3 -> CaO + CO2\nCalcium oxide (quicklime) is formed. It is used to make cement.' },
    { topic: 'decomp', front: 'What happens when lead nitrate is heated?', back: '2Pb(NO3)2 -> 2PbO + 4NO2 + O2\nBrown fumes of nitrogen dioxide (NO2) are given off.' },
    { topic: 'decomp', front: 'What happens in the electrolysis of water?', back: '2H2O -> 2H2 + O2 (using electricity)\nThe volume of hydrogen is double the volume of oxygen (2 : 1).' },
    { topic: 'decomp', front: 'What happens to silver chloride in sunlight?', back: '2AgCl -> 2Ag + Cl2\nThe white silver chloride turns grey. Silver bromide behaves the same way — this is used in black & white photography.' },
    { topic: 'decomp', front: 'Why is silver chloride kept in dark-coloured bottles?', back: 'Because it decomposes in sunlight into silver and chlorine. Dark bottles keep the light out.' },
    { topic: 'disp', front: 'What is a displacement reaction?', back: 'A more reactive element displaces (pushes out) a less reactive element from its compound.\nFe + CuSO4 -> FeSO4 + Cu' },
    { topic: 'disp', front: 'An iron nail is dipped in copper sulphate solution. What do you see?', back: 'The nail gets a brownish coating (copper), and the blue solution slowly turns light green (ferrous sulphate).' },
    { topic: 'disp', front: 'Give two more displacement reactions.', back: 'Zn + CuSO4 -> ZnSO4 + Cu\nPb + CuCl2 -> PbCl2 + Cu' },
    { topic: 'disp', front: 'Why should copper sulphate solution not be stored in an iron vessel?', back: 'Iron is more reactive than copper. It would displace copper from the solution, and the vessel would get damaged.' },
    { topic: 'double', front: 'What is a double displacement reaction?', back: 'Two compounds exchange their ions to form two new compounds.\nNa2SO4 + BaCl2 -> BaSO4 + 2NaCl' },
    { topic: 'double', front: 'What is a precipitate? What is a precipitation reaction?', back: 'A precipitate is an insoluble solid formed in a reaction.\nAny reaction that forms a precipitate is a precipitation reaction. e.g. the white precipitate of BaSO4' },
    { topic: 'double', front: 'What happens when lead nitrate solution is mixed with potassium iodide solution?', back: 'Pb(NO3)2 + 2KI -> PbI2 + 2KNO3\nA yellow precipitate of lead iodide forms. It is a double displacement and a precipitation reaction.' },
    { topic: 'redox', front: 'What is oxidation?', back: 'Gain of oxygen\nOR\nLoss of hydrogen' },
    { topic: 'redox', front: 'What is reduction?', back: 'Loss of oxygen\nOR\nGain of hydrogen' },
    { topic: 'redox', front: 'What happens when copper powder is heated in air?', back: '2Cu + O2 -> 2CuO\nThe brown surface turns black (copper oxide). Copper is oxidised.' },
    { topic: 'redox', front: 'What happens when hydrogen is passed over hot copper oxide?', back: 'CuO + H2 -> Cu + H2O\nThe black coating turns brown. CuO is reduced; H2 is oxidised.' },
    { topic: 'redox', front: 'What is a redox reaction?', back: 'A reaction in which one reactant is oxidised and another is reduced at the same time.\ne.g. ZnO + C -> Zn + CO (ZnO reduced, C oxidised)' },
    { topic: 'redox', front: 'Oxidising agent vs reducing agent', back: 'Oxidising agent: gives oxygen or removes hydrogen (it gets reduced itself).\nReducing agent: removes oxygen or gives hydrogen (it gets oxidised itself).' },
    { topic: 'daily', front: 'What is corrosion? Give examples.', back: 'When a metal is attacked by moisture, acids, etc. around it, it corrodes.\nRust on iron (reddish brown), black coating on silver, green coating on copper.' },
    { topic: 'daily', front: 'Why is corrosion a serious problem?', back: 'It damages car bodies, bridges, iron railings, ships and anything made of metal. A lot of money is spent every year replacing damaged iron.' },
    { topic: 'daily', front: 'What is rancidity?', back: 'When fats and oils in food get oxidised, the food smells and tastes bad. This is rancidity.' },
    { topic: 'daily', front: 'How can rancidity be prevented?', back: '• Add antioxidants\n• Flush packets with nitrogen (e.g. chips)\n• Store in airtight containers\n• Keep in the refrigerator' },
    // ---- added in v2: more depth, NCERT activities, exam points
    { topic: 'eq', front: 'What is a word equation?', back: 'A reaction written in words instead of formulas.\nMagnesium + Oxygen -> Magnesium oxide' },
    { topic: 'eq', front: 'In a chemical equation, where are reactants and products written?', back: 'Reactants on the LEFT, products on the RIGHT. The arrow points from reactants to products. A "+" separates two or more substances on the same side.' },
    { topic: 'eq', front: 'Zinc + dilute sulphuric acid: what happens?', back: 'Zn + H2SO4 -> ZnSO4 + H2\nBubbles of hydrogen gas are given off and the flask becomes warm (temperature rises).' },
    { topic: 'eq', front: 'How are reaction conditions shown in an equation?', back: 'Written above or below the arrow — e.g. heat, sunlight, a catalyst, temperature or pressure.\n6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O (in sunlight, with chlorophyll)' },
    { topic: 'eq', front: 'Steps to balance an equation (hit-and-trial method)', back: '1. Write the skeletal equation\n2. Count atoms of each element on both sides\n3. Start with the compound that has the most atoms\n4. Balance one element at a time using numbers in front of formulas\n5. Check every element again' },
    { topic: 'eq', front: 'While balancing, why must we NOT change the formula?', back: 'Changing a formula (like H2O to H2O2) changes the substance itself. We only change the numbers (coefficients) in front of the formulas.' },
    { topic: 'eq', front: 'What does a balanced equation tell us?', back: 'The substances that react and form, their physical states, and the number of molecules (ratio) of reactants and products. It also shows that mass is conserved.' },
    { topic: 'energy', front: 'Give 3 examples of endothermic reactions.', back: '• CaCO3 -> CaO + CO2 (heat absorbed)\n• 2H2O -> 2H2 + O2 (electricity absorbed)\n• 2AgCl -> 2Ag + Cl2 (light absorbed)' },
    { topic: 'energy', front: 'Is the burning of fuels exothermic or endothermic?', back: 'Exothermic. All burning (combustion) reactions give out heat and light, e.g. burning coal, wood, LPG or natural gas.' },
    { topic: 'decomp', front: 'What happens to silver bromide in sunlight?', back: '2AgBr -> 2Ag + Br2\nIt turns grey. This reaction is used in black & white photography.' },
    { topic: 'decomp', front: 'Electrolysis of water: why are a few drops of dilute sulphuric acid added?', back: 'Pure water is a poor conductor of electricity. The acid makes water conduct electricity so it can be decomposed.' },
    { topic: 'decomp', front: 'Electrolysis of water: which gas collects at which electrode?', back: 'Hydrogen at the cathode (negative electrode) — double volume.\nOxygen at the anode (positive electrode).\nHydrogen burns with a pop sound.' },
    { topic: 'decomp', front: 'Give uses of decomposition reactions.', back: '• Quicklime (from limestone) is used to make cement\n• Silver bromide/chloride in black & white photography\n• Electrolysis is used to extract reactive metals' },
    { topic: 'disp', front: 'Which is more reactive: zinc, iron, lead or copper?', back: 'Zn > Fe > Pb > Cu\nZinc, iron and lead can all displace copper from its compounds. Copper cannot displace them.' },
    { topic: 'disp', front: 'Can copper displace iron from iron sulphate solution?', back: 'No. Copper is less reactive than iron, so no reaction takes place.' },
    { topic: 'disp', front: 'What happens when dilute HCl is added to iron filings?', back: 'Fe + 2HCl -> FeCl2 + H2\nHydrogen gas is given off and iron(II) chloride is formed.' },
    { topic: 'double', front: 'In a double displacement reaction, what is exchanged?', back: 'Ions. The positive and negative ions of the two compounds swap partners.\nAB + CD -> AD + CB' },
    { topic: 'redox', front: 'In ZnO + C -> Zn + CO, name the oxidising and reducing agent.', back: 'ZnO is the oxidising agent (it gives oxygen; it is reduced).\nC is the reducing agent (it takes oxygen; it is oxidised).' },
    { topic: 'redox', front: 'In 4Na + O2 -> 2Na2O, what is oxidised?', back: 'Sodium (Na) is oxidised — it gains oxygen.\nOxygen is reduced.' },
    { topic: 'redox', front: 'In MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2, what is oxidised and reduced?', back: 'HCl is oxidised (it loses hydrogen).\nMnO2 is reduced (it loses oxygen).' },
    { topic: 'daily', front: 'How can rusting of iron be prevented?', back: 'Painting, oiling, greasing, galvanising (coating with zinc), chrome plating, or making alloys. All of these keep air and moisture away.' }
  ],

  quiz: [
    { topic: 'eq', q: 'Which of these is NOT a physical change?', options: ['Boiling of water', 'Melting of ice', 'Dissolving salt in water', 'Burning of LPG'], answer: 3, explain: 'Burning LPG forms new substances (CO2 and H2O), so it is a chemical change.' },
    { topic: 'eq', q: 'Magnesium ribbon burns in air with a…', options: ['Blue flame', 'Dazzling white flame', 'Yellow flame', 'Green flame'], answer: 1, explain: 'It burns with a dazzling white flame and forms white magnesium oxide.' },
    { topic: 'eq', q: 'Balancing a chemical equation follows the law of…', options: ['Conservation of energy', 'Conservation of mass', 'Gravitation', 'Reflection'], answer: 1, explain: 'Mass can neither be created nor destroyed, so atoms must be equal on both sides.' },
    { topic: 'eq', q: 'The state symbol (aq) means…', options: ['Solid', 'Gas', 'Dissolved in water', 'Liquid'], answer: 2, explain: '(aq) = aqueous, i.e. a solution in water.' },
    { topic: 'eq', q: 'Balance: _Al + _O2 -> _Al2O3', options: ['2, 3, 1', '4, 3, 2', '2, 1, 1', '4, 2, 3'], answer: 1, explain: '4Al + 3O2 -> 2Al2O3 : 4 Al and 6 O on each side.' },
    { topic: 'comb', q: 'The chemical name of quicklime is…', options: ['Calcium carbonate', 'Calcium hydroxide', 'Calcium oxide', 'Calcium chloride'], answer: 2, explain: 'Quicklime = CaO. Slaked lime = Ca(OH)2.' },
    { topic: 'comb', q: 'CaO + H2O -> Ca(OH)2 is a…', options: ['Combination and exothermic reaction', 'Decomposition reaction', 'Displacement reaction', 'Combination and endothermic reaction'], answer: 0, explain: 'Two reactants form one product, and a lot of heat is released.' },
    { topic: 'comb', q: 'The shiny finish on white-washed walls is due to…', options: ['Calcium oxide', 'Calcium carbonate', 'Calcium hydroxide', 'Calcium sulphate'], answer: 1, explain: 'Ca(OH)2 reacts with CO2 in the air to form a thin shiny layer of CaCO3.' },
    { topic: 'energy', q: 'Respiration is a/an…', options: ['Endothermic reaction', 'Exothermic reaction', 'Decomposition reaction', 'Displacement reaction'], answer: 1, explain: 'Glucose combines with oxygen and releases energy.' },
    { topic: 'energy', q: 'Decomposition of vegetable matter into compost is…', options: ['Endothermic', 'Exothermic', 'A displacement reaction', 'Not a chemical change'], answer: 1, explain: 'Heat is given out as the vegetable matter decomposes.' },
    { topic: 'energy', q: 'Most decomposition reactions are endothermic because…', options: ['They give out light', 'Energy is needed to break the reactant', 'They form a precipitate', 'They happen in water'], answer: 1, explain: 'Heat, light or electricity must be supplied to break the reactant down.' },
    { topic: 'decomp', q: 'Brown fumes given off when lead nitrate is heated are…', options: ['Oxygen', 'Nitrogen dioxide', 'Carbon dioxide', 'Sulphur dioxide'], answer: 1, explain: '2Pb(NO3)2 -> 2PbO + 4NO2 + O2. NO2 is brown.' },
    { topic: 'decomp', q: 'The colour of ferrous sulphate crystals is…', options: ['Blue', 'White', 'Green', 'Yellow'], answer: 2, explain: 'FeSO4 crystals are green. On heating they change colour.' },
    { topic: 'decomp', q: 'In the electrolysis of water, which gas is collected in double the volume?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Chlorine'], answer: 1, explain: '2H2O -> 2H2 + O2. Hydrogen : oxygen = 2 : 1 by volume.' },
    { topic: 'decomp', q: 'Silver chloride turns ___ in sunlight.', options: ['Grey', 'Blue', 'Red', 'Green'], answer: 0, explain: '2AgCl -> 2Ag + Cl2. Silver formed makes it grey.' },
    { topic: 'decomp', q: 'Which is a thermal decomposition reaction?', options: ['2H2O -> 2H2 + O2', 'CaCO3 -> CaO + CO2', '2AgCl -> 2Ag + Cl2', 'C + O2 -> CO2'], answer: 1, explain: 'Heating limestone breaks it into quicklime and CO2.' },
    { topic: 'disp', q: 'Fe2O3 + 2Al -> Al2O3 + 2Fe is an example of…', options: ['Combination reaction', 'Double displacement', 'Decomposition', 'Displacement reaction'], answer: 3, explain: 'Aluminium is more reactive and displaces iron from iron oxide.' },
    { topic: 'disp', q: 'An iron nail in copper sulphate solution changes the solution\'s colour from…', options: ['Green to blue', 'Blue to light green', 'Colourless to blue', 'Blue to colourless'], answer: 1, explain: 'Blue CuSO4 becomes light green FeSO4.' },
    { topic: 'disp', q: 'Dilute HCl added to iron filings gives…', options: ['Hydrogen gas and iron chloride', 'Chlorine gas and iron hydroxide', 'No reaction', 'Iron salt and water'], answer: 0, explain: 'Fe + 2HCl -> FeCl2 + H2' },
    { topic: 'disp', q: 'In Zn + CuSO4 -> ZnSO4 + Cu, which metal is displaced?', options: ['Zinc', 'Copper', 'Sulphur', 'None'], answer: 1, explain: 'Zinc is more reactive, so it pushes copper out.' },
    { topic: 'double', q: 'Na2SO4 + BaCl2 gives a white precipitate of…', options: ['NaCl', 'BaSO4', 'BaCl2', 'Na2SO4'], answer: 1, explain: 'Barium sulphate (BaSO4) is insoluble — the white precipitate.' },
    { topic: 'double', q: 'Lead nitrate + potassium iodide gives a yellow precipitate of…', options: ['Potassium nitrate', 'Lead oxide', 'Lead iodide', 'Iodine'], answer: 2, explain: 'Pb(NO3)2 + 2KI -> PbI2 + 2KNO3. PbI2 is yellow.' },
    { topic: 'redox', q: 'Oxidation means…', options: ['Gain of oxygen or loss of hydrogen', 'Loss of oxygen or gain of hydrogen', 'Gain of water', 'Loss of heat'], answer: 0, explain: 'Remember: Oxidation = +O or −H.' },
    { topic: 'redox', q: 'In CuO + H2 -> Cu + H2O, the substance reduced is…', options: ['H2', 'Cu', 'CuO', 'H2O'], answer: 2, explain: 'CuO loses oxygen, so it is reduced. H2 gains oxygen, so it is oxidised.' },
    { topic: 'redox', q: '2PbO + C -> 2Pb + CO2. Which statement is INCORRECT?', options: ['Lead oxide is reduced', 'Carbon is oxidised', 'Carbon dioxide is oxidised', 'It is a redox reaction'], answer: 2, explain: 'CO2 is a product — it is not oxidised. PbO is reduced and C is oxidised.' },
    { topic: 'redox', q: 'In MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2, the substance oxidised is…', options: ['MnO2', 'HCl', 'MnCl2', 'H2O'], answer: 1, explain: 'HCl loses hydrogen, so it is oxidised. MnO2 loses oxygen, so it is reduced.' },
    { topic: 'redox', q: 'Copper powder heated in air turns…', options: ['Black', 'Green', 'White', 'Blue'], answer: 0, explain: '2Cu + O2 -> 2CuO. Copper oxide is black.' },
    { topic: 'daily', q: 'Rancidity happens due to…', options: ['Reduction of fats', 'Oxidation of fats and oils', 'Decomposition of water', 'Displacement of salts'], answer: 1, explain: 'Oxidised fats and oils give a bad smell and taste.' },
    { topic: 'daily', q: 'Chips packets are flushed with ___ to prevent rancidity.', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon dioxide'], answer: 2, explain: 'Nitrogen is unreactive and keeps oxygen away from the chips.' },
    { topic: 'daily', q: 'Rust on iron is ___ in colour.', options: ['Black', 'Green', 'Reddish brown', 'White'], answer: 2, explain: 'Rust is a reddish-brown flaky substance formed by corrosion of iron.' },
    // ---- added in v2: Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'comb', a: 'Burning of magnesium ribbon in air is a combination reaction.', r: 'Magnesium and oxygen combine to form a single product, magnesium oxide.', answer: 0, explain: 'Both true, and R explains why it is a combination reaction.' },
      { topic: 'energy', a: 'Decomposition reactions are generally endothermic.', r: 'Energy is needed to break down the reactant.', answer: 0, explain: 'Both true, and R is the reason.' },
      { topic: 'decomp', a: 'In the electrolysis of water, the volume of hydrogen collected is double that of oxygen.', r: 'Water contains two hydrogen atoms for every oxygen atom.', answer: 0, explain: 'Both true, and the 2 : 1 ratio of atoms explains the 2 : 1 volume.' },
      { topic: 'decomp', a: 'Silver chloride is stored in dark-coloured bottles.', r: 'Silver chloride decomposes in the presence of sunlight.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'disp', a: 'Iron displaces copper from copper sulphate solution.', r: 'Copper is more reactive than iron.', answer: 2, explain: 'A is true, but R is false — iron is MORE reactive than copper.' },
      { topic: 'double', a: 'The reaction between lead nitrate and potassium iodide is a double displacement reaction.', r: 'A yellow precipitate of lead iodide is formed.', answer: 1, explain: 'Both true, but it is double displacement because ions are exchanged — the precipitate does not explain that.' },
      { topic: 'energy', a: 'Respiration is an exothermic reaction.', r: 'Glucose combines with oxygen in our cells and releases energy.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'eq', a: 'A chemical equation must be balanced.', r: 'Atoms can be created during a chemical reaction.', answer: 2, explain: 'A is true, but R is false — atoms are neither created nor destroyed.' },
      { topic: 'redox', a: 'Copper powder turns black when heated in air.', r: 'Copper is oxidised to copper oxide.', answer: 0, explain: 'Both true, and R explains the black colour (CuO).' },
      { topic: 'comb', a: 'The reaction of quicklime with water is exothermic.', r: 'Calcium hydroxide (slaked lime) is formed in the reaction.', answer: 1, explain: 'Both true, but forming slaked lime does not explain why heat is released.' },
      { topic: 'disp', a: 'Zinc can displace copper from copper sulphate solution.', r: 'Zinc is more reactive than copper.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'disp', a: 'Copper can displace iron from iron sulphate solution.', r: 'Copper is less reactive than iron.', answer: 3, explain: 'A is false (no reaction happens), but R is true.' }
    ].map(x => ({
      topic: x.topic, fixed: true, answer: x.answer, explain: x.explain,
      q: 'Assertion (A): ' + x.a + '\nReason (R): ' + x.r,
      options: [
        'Both A and R are true, and R is the correct explanation of A',
        'Both A and R are true, but R is NOT the correct explanation of A',
        'A is true, but R is false',
        'A is false, but R is true'
      ]
    })),
    // ---- added in v2: more MCQs
    { topic: 'eq', q: 'When zinc reacts with dilute sulphuric acid, the gas given off is…', options: ['Oxygen', 'Hydrogen', 'Sulphur dioxide', 'Carbon dioxide'], answer: 1, explain: 'Zn + H2SO4 -> ZnSO4 + H2' },
    { topic: 'eq', q: 'In a skeletal chemical equation…', options: ['Atoms are balanced', 'Atoms are not balanced', 'Only words are used', 'State symbols are compulsory'], answer: 1, explain: 'A skeletal equation has correct formulas but is not yet balanced.' },
    { topic: 'eq', q: 'In 3Fe + 4H2O(?) -> Fe3O4 + 4H2, the state of water is…', options: ['(s)', '(l)', '(g)', '(aq)'], answer: 2, explain: 'Iron reacts with steam, so water is a gas (g).' },
    { topic: 'eq', q: 'The coefficients that balance Na + H2O -> NaOH + H2 are…', options: ['1, 1, 1, 1', '2, 2, 2, 1', '2, 1, 2, 1', '1, 2, 1, 2'], answer: 1, explain: '2Na + 2H2O -> 2NaOH + H2' },
    { topic: 'eq', q: 'How many oxygen atoms are there in 2Pb(NO3)2?', options: ['6', '3', '12', '9'], answer: 2, explain: 'One Pb(NO3)2 has 3 × 2 = 6 oxygen atoms, so two have 12.' },
    { topic: 'eq', q: 'While balancing an equation, we can change…', options: ['The formulas', 'The subscripts', 'The coefficients (numbers in front)', 'The products'], answer: 2, explain: 'Only the numbers in front of formulas can be changed.' },
    { topic: 'energy', q: 'Which of these is an endothermic reaction?', options: ['Burning of natural gas', 'Respiration', 'Decomposition of calcium carbonate', 'Quicklime + water'], answer: 2, explain: 'Heat must be supplied to decompose CaCO3.' },
    { topic: 'decomp', q: '2H2O -> 2H2 + O2 using electricity is…', options: ['Thermal decomposition', 'Electrolytic decomposition', 'Photolytic decomposition', 'Combination'], answer: 1, explain: 'Decomposition using electricity is electrolytic.' },
    { topic: 'decomp', q: 'Heating ferrous sulphate gives off the gases…', options: ['SO2 and SO3', 'O2 and SO2', 'H2 and SO3', 'CO2 and SO2'], answer: 0, explain: '2FeSO4 -> Fe2O3 + SO2 + SO3' },
    { topic: 'decomp', q: 'Why are a few drops of dilute sulphuric acid added to water during electrolysis?', options: ['To make it colourless', 'To make water conduct electricity', 'To produce more oxygen', 'To stop the reaction'], answer: 1, explain: 'Pure water conducts electricity poorly; the acid helps.' },
    { topic: 'decomp', q: 'The decomposition of silver bromide in light is used in…', options: ['Cement making', 'Black & white photography', 'Whitewashing', 'Making soap'], answer: 1, explain: '2AgBr -> 2Ag + Br2 in light.' },
    { topic: 'comb', q: 'Which of these is a combination reaction?', options: ['CaCO3 -> CaO + CO2', 'CaO + H2O -> Ca(OH)2', 'Zn + CuSO4 -> ZnSO4 + Cu', '2AgCl -> 2Ag + Cl2'], answer: 1, explain: 'Two reactants form one product.' },
    { topic: 'comb', q: 'A solution of slaked lime is used for…', options: ['Whitewashing walls', 'Photography', 'Making glass', 'Electrolysis'], answer: 0, explain: 'Ca(OH)2 is used for whitewashing; it later forms shiny CaCO3.' },
    { topic: 'disp', q: 'Which metal can displace copper from copper sulphate solution?', options: ['Silver', 'Gold', 'Zinc', 'Mercury'], answer: 2, explain: 'Zinc is more reactive than copper. Silver, gold and mercury are less reactive.' },
    { topic: 'disp', q: 'Pb + CuCl2 -> PbCl2 + Cu is a…', options: ['Combination reaction', 'Displacement reaction', 'Decomposition reaction', 'Double displacement reaction'], answer: 1, explain: 'Lead displaces copper from copper chloride.' },
    { topic: 'double', q: 'Na2SO4 + BaCl2 -> BaSO4 + 2NaCl is a…', options: ['Displacement reaction', 'Combination reaction', 'Double displacement reaction', 'Decomposition reaction'], answer: 2, explain: 'The two compounds exchange ions.' },
    { topic: 'double', q: 'A precipitate is…', options: ['A gas formed in a reaction', 'An insoluble solid formed in a reaction', 'A coloured solution', 'A catalyst'], answer: 1, explain: 'e.g. white BaSO4 or yellow PbI2.' },
    { topic: 'redox', q: 'In ZnO + C -> Zn + CO, the reducing agent is…', options: ['ZnO', 'C', 'Zn', 'CO'], answer: 1, explain: 'Carbon removes oxygen from ZnO, so it is the reducing agent (and is oxidised).' },
    { topic: 'redox', q: 'Reduction means…', options: ['Gain of oxygen', 'Loss of hydrogen', 'Loss of oxygen or gain of hydrogen', 'Gain of heat'], answer: 2, explain: 'Reduction = −O or +H.' },
    { topic: 'redox', q: 'In 4Na + O2 -> 2Na2O, the substance oxidised is…', options: ['O2', 'Na', 'Na2O', 'None'], answer: 1, explain: 'Sodium gains oxygen.' }
  ],

  match: [
    { title: 'Reaction Types', pairs: [
      ['Combination', 'A + B -> AB'],
      ['Decomposition', 'AB -> A + B'],
      ['Displacement', 'A + BC -> AC + B'],
      ['Double displacement', 'AB + CD -> AD + CB'],
      ['Redox', 'Oxidation and reduction together'],
      ['Precipitation', 'An insoluble solid forms']
    ] },
    { title: 'Name It!', pairs: [
      ['CaO', 'Quicklime'],
      ['Ca(OH)2', 'Slaked lime'],
      ['CaCO3', 'Shiny layer on white-washed walls'],
      ['BaSO4', 'White precipitate'],
      ['PbI2', 'Yellow precipitate'],
      ['NO2', 'Brown fumes']
    ] },
    { title: 'What Do You See?', pairs: [
      ['AgCl in sunlight', 'White turns grey'],
      ['Iron nail in CuSO4', 'Blue solution turns light green'],
      ['Heating copper powder', 'Brown turns black'],
      ['Burning magnesium', 'Dazzling white flame'],
      ['Heating FeSO4 crystals', 'Smell of burning sulphur'],
      ['Rancid food', 'Bad smell and taste']
    ] },
    { title: 'Oxidation or Reduction?', pairs: [
      ['Gain of oxygen', 'Oxidation'],
      ['Loss of oxygen', 'Reduction'],
      ['Rusting of iron', 'Corrosion'],
      ['Oily food going bad', 'Rancidity'],
      ['Gives out heat', 'Exothermic'],
      ['Absorbs energy', 'Endothermic']
    ] },
    { title: 'Which Type of Reaction?', pairs: [
      ['C + O2 -> CO2', 'Combination'],
      ['CaCO3 -> CaO + CO2', 'Thermal decomposition'],
      ['2H2O -> 2H2 + O2', 'Electrolytic decomposition'],
      ['2AgCl -> 2Ag + Cl2', 'Photolytic decomposition'],
      ['Fe + CuSO4 -> FeSO4 + Cu', 'Displacement'],
      ['Na2SO4 + BaCl2 -> BaSO4 + 2NaCl', 'Double displacement']
    ] },
    { title: 'Colours of the Chapter', pairs: [
      ['Ferrous sulphate crystals', 'Green'],
      ['Copper sulphate solution', 'Blue'],
      ['Lead iodide', 'Yellow'],
      ['Barium sulphate', 'White'],
      ['Copper oxide', 'Black'],
      ['Rust', 'Reddish brown']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'Formation of water', reactants: ['H2', 'O2'], products: ['H2O'], answer: [2, 1, 2] },
    { name: 'Burning magnesium', reactants: ['Mg', 'O2'], products: ['MgO'], answer: [2, 1, 2] },
    { name: 'Burning natural gas', reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'], answer: [1, 2, 1, 2] },
    { name: 'Sodium in water', reactants: ['Na', 'H2O'], products: ['NaOH', 'H2'], answer: [2, 2, 2, 1] },
    { name: 'Iron and steam', reactants: ['Fe', 'H2O'], products: ['Fe3O4', 'H2'], answer: [3, 4, 1, 4] },
    { name: 'Aluminium burning', reactants: ['Al', 'O2'], products: ['Al2O3'], answer: [4, 3, 2] },
    { name: 'Making ammonia', reactants: ['H2', 'N2'], products: ['NH3'], answer: [3, 1, 2] },
    { name: 'Lead nitrate + potassium iodide', reactants: ['Pb(NO3)2', 'KI'], products: ['PbI2', 'KNO3'], answer: [1, 2, 1, 2] },
    { name: 'Heating ferrous sulphate', reactants: ['FeSO4'], products: ['Fe2O3', 'SO2', 'SO3'], answer: [2, 1, 1, 1] },
    { name: 'Heating lead nitrate', reactants: ['Pb(NO3)2'], products: ['PbO', 'NO2', 'O2'], answer: [2, 2, 4, 1] },
    { name: 'Barium chloride + aluminium sulphate', reactants: ['BaCl2', 'Al2(SO4)3'], products: ['BaSO4', 'AlCl3'], answer: [3, 1, 3, 2] },
    // ---- added in v2
    { name: 'Electrolysis of water', reactants: ['H2O'], products: ['H2', 'O2'], answer: [2, 2, 1] },
    { name: 'Silver chloride in sunlight', reactants: ['AgCl'], products: ['Ag', 'Cl2'], answer: [2, 2, 1] },
    { name: 'Iron + hydrochloric acid', reactants: ['Fe', 'HCl'], products: ['FeCl2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Potassium in water', reactants: ['K', 'H2O'], products: ['KOH', 'H2'], answer: [2, 2, 2, 1] },
    { name: 'Respiration', reactants: ['C6H12O6', 'O2'], products: ['CO2', 'H2O'], answer: [1, 6, 6, 6] },
    { name: 'Nitric acid + calcium hydroxide', reactants: ['HNO3', 'Ca(OH)2'], products: ['Ca(NO3)2', 'H2O'], answer: [2, 1, 1, 2] },
    { name: 'Sodium hydroxide + sulphuric acid', reactants: ['NaOH', 'H2SO4'], products: ['Na2SO4', 'H2O'], answer: [2, 1, 1, 2] },
    { name: 'Barium chloride + sulphuric acid', reactants: ['BaCl2', 'H2SO4'], products: ['BaSO4', 'HCl'], answer: [1, 1, 1, 2] },
    { name: 'Aluminium + iron oxide', reactants: ['Fe2O3', 'Al'], products: ['Al2O3', 'Fe'], answer: [1, 2, 1, 2] },
    { name: 'Manganese dioxide + hydrochloric acid', reactants: ['MnO2', 'HCl'], products: ['MnCl2', 'H2O', 'Cl2'], answer: [1, 4, 1, 2, 1] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Why should a magnesium ribbon be cleaned before burning it in air?',
      keypoints: [
        { text: 'Magnesium forms a layer of magnesium oxide on its surface', kw: ['oxide|layer|coat'] },
        { text: 'This layer stops/slows the burning; cleaning removes it', kw: ['remov|clean|burn'] }
      ],
      model: 'Magnesium reacts with oxygen in the air and forms a layer of magnesium oxide on its surface. This layer prevents the ribbon from burning easily, so it is cleaned with sandpaper to remove it.' },
    { marks: 2, q: 'Why do we apply paint on iron articles?',
      keypoints: [
        { text: 'To prevent rusting / corrosion', kw: ['rust|corro'] },
        { text: 'Paint keeps air (oxygen) and moisture away from the iron', kw: ['air|oxygen', 'moisture|water'] }
      ],
      model: 'Iron rusts when it comes in contact with air (oxygen) and moisture. Paint forms a protective layer that keeps air and moisture away from the iron, so it prevents rusting (corrosion).' },
    { marks: 2, q: 'Oil and fat containing food items are flushed with nitrogen. Why?',
      keypoints: [
        { text: 'Nitrogen is unreactive and keeps oxygen away', kw: ['nitrogen', 'oxygen|unreactive|inert|oxidi'] },
        { text: 'This prevents oxidation of fats/oils, i.e. rancidity (bad smell and taste)', kw: ['rancid|smell|taste'] }
      ],
      model: 'When fats and oils get oxidised, the food becomes rancid and its smell and taste change. Nitrogen is an unreactive gas. Flushing the packet with nitrogen removes oxygen, so the food does not get oxidised and rancidity is prevented.' },
    { marks: 3, q: 'What is a balanced chemical equation? Why should chemical equations be balanced?',
      keypoints: [
        { text: 'Number of atoms of each element is equal on both sides', kw: ['atom', 'equal|same'] },
        { text: 'Law of conservation of mass', kw: ['conservation'] },
        { text: 'Mass can neither be created nor destroyed in a reaction', kw: ['created|destroyed'] }
      ],
      model: 'A balanced chemical equation has an equal number of atoms of each element on the reactant side and the product side.\nEquations must be balanced because of the law of conservation of mass: mass can neither be created nor destroyed in a chemical reaction. So the total mass of the products must equal the total mass of the reactants.' },
    { marks: 3, q: 'Why is respiration considered an exothermic reaction? Explain.',
      keypoints: [
        { text: 'Food is broken down into glucose', kw: ['glucose'] },
        { text: 'Glucose combines with oxygen in the cells', kw: ['oxygen', 'cell'] },
        { text: 'Energy is released: C6H12O6 + 6O2 -> 6CO2 + 6H2O + energy', kw: ['energy|heat'] }
      ],
      model: 'During digestion, food is broken down into simpler substances like glucose. In respiration, glucose combines with oxygen in the cells of our body and provides energy.\nC6H12O6 + 6O2 -> 6CO2 + 6H2O + energy\nSince energy is released, respiration is an exothermic reaction.' },
    { marks: 3, q: 'Why are decomposition reactions called the opposite of combination reactions? Write equations for these reactions.',
      keypoints: [
        { text: 'Combination: two or more reactants form a single product', kw: ['combin', 'single|one'] },
        { text: 'Decomposition: a single reactant breaks into two or more products', kw: ['decompos|break'] },
        { text: 'Correct example equations, e.g. CaO + CO2 -> CaCO3 and CaCO3 -> CaO + CO2', kw: ['->|→'] }
      ],
      model: 'In a combination reaction, two or more reactants combine to form a single product. In a decomposition reaction, a single reactant breaks down into two or more simpler products. So they are opposite to each other.\nCombination: CaO + CO2 -> CaCO3\nDecomposition: CaCO3 -> CaO + CO2 (on heating)' },
    { marks: 3, q: 'Write one equation each for decomposition reactions where energy is supplied in the form of heat, light and electricity.',
      keypoints: [
        { text: 'Heat: CaCO3 -> CaO + CO2', kw: ['heat'] },
        { text: 'Light: 2AgCl -> 2Ag + Cl2', kw: ['light|sun'] },
        { text: 'Electricity: 2H2O -> 2H2 + O2', kw: ['electric'] }
      ],
      model: 'Heat (thermal decomposition): CaCO3 -> CaO + CO2\nLight (photolytic decomposition): 2AgCl -> 2Ag + Cl2\nElectricity (electrolytic decomposition): 2H2O -> 2H2 + O2' },
    { marks: 3, q: 'What is the difference between displacement and double displacement reactions? Write equations.',
      keypoints: [
        { text: 'Displacement: a more reactive element displaces a less reactive one from its compound', kw: ['reactive'] },
        { text: 'Double displacement: two compounds exchange ions', kw: ['exchange|swap|ions'] },
        { text: 'Examples: Fe + CuSO4 -> FeSO4 + Cu; Na2SO4 + BaCl2 -> BaSO4 + 2NaCl', kw: ['->|→'] }
      ],
      model: 'In a displacement reaction, a more reactive element displaces a less reactive element from its compound.\nFe + CuSO4 -> FeSO4 + Cu\nIn a double displacement reaction, two compounds exchange their ions to form two new compounds.\nNa2SO4 + BaCl2 -> BaSO4 + 2NaCl' },
    { marks: 3, q: 'Explain the following with an example: (a) Corrosion (b) Rancidity',
      keypoints: [
        { text: 'Corrosion: metal attacked by moisture, acids etc. around it', kw: ['corro', 'metal'] },
        { text: 'Example: rusting of iron / black coating on silver / green coating on copper', kw: ['rust|silver|copper'] },
        { text: 'Rancidity: oxidation of fats and oils; smell and taste change', kw: ['rancid', 'fat|oil'] }
      ],
      model: '(a) Corrosion: When a metal is attacked by substances around it such as moisture and acids, it is said to corrode. Example: rusting of iron, black coating on silver, green coating on copper.\n(b) Rancidity: When fats and oils are oxidised, they become rancid and their smell and taste change. Example: chips left open for a long time taste bad.' },
    { marks: 2, q: 'What change in colour is seen when an iron nail is dipped in copper sulphate solution? Why?',
      keypoints: [
        { text: 'Blue solution turns light green; nail gets a brown coating', kw: ['green', 'brown'] },
        { text: 'Iron is more reactive and displaces copper: Fe + CuSO4 -> FeSO4 + Cu', kw: ['reactive|displac'] }
      ],
      model: 'The blue colour of the copper sulphate solution fades and becomes light green, and the iron nail gets a brownish coating. This is because iron is more reactive than copper and displaces copper from copper sulphate.\nFe + CuSO4 -> FeSO4 + Cu' },
    { marks: 2, q: 'Identify the substances that are oxidised and reduced:\n(a) 4Na + O2 -> 2Na2O\n(b) CuO + H2 -> Cu + H2O',
      keypoints: [
        { text: '(a) Na is oxidised, O2 is reduced', kw: ['sodium|na ', 'oxidis|oxidiz'] },
        { text: '(b) CuO is reduced, H2 is oxidised', kw: ['cuo', 'h2'] }
      ],
      model: '(a) Sodium (Na) gains oxygen, so it is oxidised. Oxygen (O2) is reduced.\n(b) Copper oxide (CuO) loses oxygen, so it is reduced. Hydrogen (H2) gains oxygen, so it is oxidised.' },
    { marks: 2, q: 'A shiny brown element X becomes black on heating in air. Name X and the black compound. Write the equation.',
      keypoints: [
        { text: 'X is copper (Cu)', kw: ['copper|cu'] },
        { text: 'Black compound is copper oxide: 2Cu + O2 -> 2CuO', kw: ['oxide|cuo'] }
      ],
      model: 'X is copper (Cu). On heating in air it forms black copper oxide (CuO).\n2Cu + O2 -> 2CuO' },
    { marks: 3, q: 'Translate into balanced chemical equations:\n(a) Hydrogen gas combines with nitrogen to form ammonia.\n(b) Potassium metal reacts with water to give potassium hydroxide and hydrogen gas.',
      keypoints: [
        { text: '(a) 3H2 + N2 -> 2NH3', kw: ['nh3'] },
        { text: '(b) 2K + 2H2O -> 2KOH + H2', kw: ['koh'] },
        { text: 'Both equations are balanced', kw: ['3h2', '2k'] }
      ],
      model: '(a) 3H2(g) + N2(g) -> 2NH3(g)\n(b) 2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)' },
    // ---- added in v2: NCERT exercise, long-answer (5 marks) and case-based (4 marks)
    { marks: 2, q: 'A solution of a substance X is used for whitewashing.\n(i) Name X and write its formula.\n(ii) Write the reaction of X with water.',
      keypoints: [
        { text: 'X is calcium oxide (quicklime), CaO', kw: ['calcium oxide|quick|cao'] },
        { text: 'CaO + H2O -> Ca(OH)2 (slaked lime) + heat', kw: ['ca(oh)2|calcium hydroxide|slaked'] }
      ],
      model: '(i) X is calcium oxide (quicklime), CaO.\n(ii) CaO(s) + H2O(l) -> Ca(OH)2(aq) + heat\nCalcium hydroxide (slaked lime) is formed.' },
    { marks: 3, q: 'Write balanced chemical equations with state symbols:\n(a) Solutions of barium chloride and sodium sulphate react to give insoluble barium sulphate and a solution of sodium chloride.\n(b) Sodium hydroxide solution reacts with hydrochloric acid solution to give sodium chloride solution and water.',
      keypoints: [
        { text: '(a) BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)', kw: ['baso4', '2nacl'] },
        { text: '(b) NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)', kw: ['naoh', 'h2o'] },
        { text: 'Correct state symbols used', kw: ['(aq)', '(s)|(l)'] }
      ],
      model: '(a) BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)\n(b) NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)' },
    { marks: 2, q: 'What happens when dilute hydrochloric acid is added to iron filings? Write the equation.',
      keypoints: [
        { text: 'Hydrogen gas is given off and iron chloride is formed', kw: ['hydrogen|h2', 'chloride|fecl'] },
        { text: 'Fe + 2HCl -> FeCl2 + H2', kw: ['fecl2'] }
      ],
      model: 'Hydrogen gas is given off and iron(II) chloride is formed.\nFe(s) + 2HCl(aq) -> FeCl2(aq) + H2(g)' },
    { marks: 3, q: 'Balance the following equations:\n(a) HNO3 + Ca(OH)2 -> Ca(NO3)2 + H2O\n(b) NaOH + H2SO4 -> Na2SO4 + H2O\n(c) BaCl2 + H2SO4 -> BaSO4 + HCl',
      keypoints: [
        { text: '(a) 2HNO3 + Ca(OH)2 -> Ca(NO3)2 + 2H2O', kw: ['2hno3'] },
        { text: '(b) 2NaOH + H2SO4 -> Na2SO4 + 2H2O', kw: ['2naoh'] },
        { text: '(c) BaCl2 + H2SO4 -> BaSO4 + 2HCl', kw: ['2hcl'] }
      ],
      model: '(a) 2HNO3 + Ca(OH)2 -> Ca(NO3)2 + 2H2O\n(b) 2NaOH + H2SO4 -> Na2SO4 + 2H2O\n(c) BaCl2 + H2SO4 -> BaSO4 + 2HCl' },
    { marks: 3, q: 'In the electrolysis of water:\n(a) Why is the volume of gas in one test tube double the other?\n(b) Name the gases collected at the cathode and anode.\n(c) Why are a few drops of dilute sulphuric acid added?',
      keypoints: [
        { text: 'Water has hydrogen and oxygen in the ratio 2 : 1, so hydrogen volume is double', kw: ['2|two|double', 'hydrogen'] },
        { text: 'Hydrogen at cathode, oxygen at anode', kw: ['cathode', 'anode'] },
        { text: 'Acid makes water conduct electricity', kw: ['conduct'] }
      ],
      model: '(a) 2H2O -> 2H2 + O2. Water contains hydrogen and oxygen in the ratio 2 : 1, so the volume of hydrogen formed is double that of oxygen.\n(b) Hydrogen at the cathode (negative), oxygen at the anode (positive).\n(c) Pure water is a poor conductor; dilute sulphuric acid makes it conduct electricity.' },
    { marks: 5, q: 'What is a decomposition reaction? Explain thermal, electrolytic and photolytic decomposition with one balanced equation each. Give one use of decomposition reactions.',
      keypoints: [
        { text: 'Definition: a single reactant breaks into two or more simpler products', kw: ['single|one', 'break|simpler'] },
        { text: 'Thermal (heat): CaCO3 -> CaO + CO2 or 2FeSO4 -> Fe2O3 + SO2 + SO3', kw: ['thermal|heat', 'caco3|feso4|pb(no3)2'] },
        { text: 'Electrolytic (electricity): 2H2O -> 2H2 + O2', kw: ['electric', 'h2o'] },
        { text: 'Photolytic (light): 2AgCl -> 2Ag + Cl2', kw: ['light|photo', 'agcl|agbr'] },
        { text: 'Use: cement (quicklime), photography, extraction of metals', kw: ['cement|photo|extract'] }
      ],
      model: 'A decomposition reaction is one in which a single reactant breaks down into two or more simpler products.\n• Thermal decomposition (heat): CaCO3 -> CaO + CO2\n• Electrolytic decomposition (electricity): 2H2O -> 2H2 + O2\n• Photolytic decomposition (light): 2AgCl -> 2Ag + Cl2\nUse: quicklime from limestone is used to make cement; AgBr/AgCl decomposition is used in black & white photography.' },
    { marks: 5, q: 'Define oxidation and reduction with examples. What is a redox reaction? In ZnO + C -> Zn + CO, identify the substance oxidised, the substance reduced, the oxidising agent and the reducing agent.',
      keypoints: [
        { text: 'Oxidation: gain of oxygen / loss of hydrogen, with example (e.g. 2Cu + O2 -> 2CuO)', kw: ['oxidation', 'gain'] },
        { text: 'Reduction: loss of oxygen / gain of hydrogen, with example (e.g. CuO + H2 -> Cu + H2O)', kw: ['reduction', 'loss'] },
        { text: 'Redox: oxidation and reduction take place together', kw: ['redox', 'together|same time|simultaneous'] },
        { text: 'C is oxidised, ZnO is reduced', kw: ['oxidised|oxidized', 'reduced'] },
        { text: 'ZnO is the oxidising agent, C is the reducing agent', kw: ['oxidising agent|oxidizing agent', 'reducing agent'] }
      ],
      model: 'Oxidation is the gain of oxygen or loss of hydrogen. e.g. 2Cu + O2 -> 2CuO (copper is oxidised).\nReduction is the loss of oxygen or gain of hydrogen. e.g. CuO + H2 -> Cu + H2O (copper oxide is reduced).\nA redox reaction is one in which oxidation and reduction take place at the same time.\nIn ZnO + C -> Zn + CO:\n• Carbon is oxidised (gains oxygen); ZnO is reduced (loses oxygen).\n• ZnO is the oxidising agent; C is the reducing agent.' },
    { marks: 5, q: 'Describe an activity to show that iron is more reactive than copper. Write the equation, the observations and the type of reaction. Why can copper not displace iron from iron sulphate?',
      keypoints: [
        { text: 'Activity: clean iron nails dipped in copper sulphate solution for about 20 minutes', kw: ['nail', 'copper sulphate|cuso4'] },
        { text: 'Observation: brown coating on the nail', kw: ['brown'] },
        { text: 'Observation: blue solution turns light green', kw: ['green'] },
        { text: 'Fe + CuSO4 -> FeSO4 + Cu — displacement reaction', kw: ['displac'] },
        { text: 'Copper is less reactive than iron, so it cannot displace iron', kw: ['less reactive'] }
      ],
      model: 'Activity: Clean two iron nails with sandpaper. Dip one in copper sulphate solution for about 20 minutes and keep the other aside for comparison.\nObservations: The nail dipped in the solution gets a brownish coating of copper, and the blue colour of the solution fades to light green.\nFe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s)\nThis is a displacement reaction: iron, being more reactive, displaces copper.\nCopper is less reactive than iron, so it cannot displace iron from iron sulphate — no reaction takes place.' },
    { marks: 4, q: 'CASE STUDY: Riya took some green crystals of ferrous sulphate in a dry boiling tube and heated them. She noticed that the colour of the crystals changed and there was a smell of burning sulphur.\n(a) Name the type of reaction.\n(b) Write the balanced equation.\n(c) Name the gases given off.\n(d) Is this reaction exothermic or endothermic? Why?',
      keypoints: [
        { text: '(a) Thermal decomposition reaction', kw: ['decompos'] },
        { text: '(b) 2FeSO4 -> Fe2O3 + SO2 + SO3', kw: ['2feso4|fe2o3'] },
        { text: '(c) Sulphur dioxide (SO2) and sulphur trioxide (SO3)', kw: ['so2|sulphur dioxide', 'so3|sulphur trioxide'] },
        { text: '(d) Endothermic — heat is absorbed to decompose the crystals', kw: ['endothermic'] }
      ],
      model: '(a) Thermal decomposition reaction.\n(b) 2FeSO4(s) -> Fe2O3(s) + SO2(g) + SO3(g)\n(c) Sulphur dioxide (SO2) and sulphur trioxide (SO3).\n(d) Endothermic, because heat must be supplied to break down ferrous sulphate.' },
    { marks: 4, q: 'CASE STUDY: Aman mixed solutions of lead nitrate and potassium iodide in a test tube. A yellow solid appeared at once and settled at the bottom.\n(a) Name the yellow solid.\n(b) Write the balanced equation.\n(c) Name the type of reaction (two names).\n(d) What is a precipitate?',
      keypoints: [
        { text: '(a) Lead iodide (PbI2)', kw: ['lead iodide|pbi2'] },
        { text: '(b) Pb(NO3)2 + 2KI -> PbI2 + 2KNO3', kw: ['2ki|2kno3'] },
        { text: '(c) Double displacement and precipitation reaction', kw: ['double', 'precipitat'] },
        { text: '(d) An insoluble solid formed in a reaction', kw: ['insoluble'] }
      ],
      model: '(a) Lead iodide (PbI2).\n(b) Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)\n(c) Double displacement reaction and precipitation reaction.\n(d) An insoluble solid that forms in a reaction and separates out from the solution is called a precipitate.' }
  ]
});
