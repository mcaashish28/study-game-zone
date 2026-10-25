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
    { topic: 'daily', front: 'How can rancidity be prevented?', back: '• Add antioxidants\n• Flush packets with nitrogen (e.g. chips)\n• Store in airtight containers\n• Keep in the refrigerator' }
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
    { topic: 'daily', q: 'Rust on iron is ___ in colour.', options: ['Black', 'Green', 'Reddish brown', 'White'], answer: 2, explain: 'Rust is a reddish-brown flaky substance formed by corrosion of iron.' }
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
    { name: 'Barium chloride + aluminium sulphate', reactants: ['BaCl2', 'Al2(SO4)3'], products: ['BaSO4', 'AlCl3'], answer: [3, 1, 3, 2] }
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
      model: '(a) 3H2(g) + N2(g) -> 2NH3(g)\n(b) 2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g)' }
  ]
});
