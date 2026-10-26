// CBSE Class 10 Science (NCERT) — Chapter 2: Acids, Bases and Salts
// Formulas are written plainly (H2O, Ca(OH)2); the app shows the numbers as subscripts.
// Write "->" for the reaction arrow. Write "pH 7" with a space so the 7 is not shown as a subscript.
SWG.addChapter('science', {
  id: 'sci-ch02',
  number: 2,
  title: 'Acids, Bases and Salts',
  icon: '🧫',

  topics: {
    ind: 'Indicators',
    acid: 'Reactions of Acids & Bases',
    ions: 'H⁺ and OH⁻ Ions in Water',
    ph: 'pH Scale & Daily Life',
    salt: 'Salts and their pH',
    nacl: 'Chemicals from Common Salt',
    cryst: 'Water of Crystallisation & POP'
  },

  summary: [
    'Acids taste sour and turn blue litmus red. Bases taste bitter, feel soapy and turn red litmus blue.',
    'Indicators: litmus, turmeric, phenolphthalein (pink in base), methyl orange (red in acid, yellow in base). Onion, vanilla and clove oil are olfactory indicators.',
    'Acid + metal -> salt + hydrogen. Acid + carbonate/hydrogencarbonate -> salt + water + CO2. Acid + base -> salt + water (neutralisation).',
    'Metal oxides are basic; non-metal oxides are acidic.',
    'In water, acids give H+ ions (H3O+) and bases give OH- ions. Soluble bases are called alkalis.',
    'pH 0–7 is acidic, 7 is neutral, 7–14 is basic. pH matters in our body, soil, tooth decay and stings.',
    'From common salt we get NaOH (chlor-alkali process), bleaching powder, baking soda and washing soda.',
    'Water of crystallisation: CuSO4.5H2O, Na2CO3.10H2O, gypsum CaSO4.2H2O. Plaster of Paris is CaSO4.½H2O.'
  ],

  flashcards: [
    { topic: 'ind', front: 'Name 3 properties of acids.', back: '• Sour in taste\n• Turn blue litmus red\n• React with metals to give hydrogen gas' },
    { topic: 'ind', front: 'Name 3 properties of bases.', back: '• Bitter in taste\n• Soapy to touch\n• Turn red litmus blue' },
    { topic: 'ind', front: 'What is an indicator?', back: 'A substance that changes colour (or smell) to tell us whether a solution is acidic or basic.' },
    { topic: 'ind', front: 'Where does litmus come from? What colour is it in a neutral solution?', back: 'Litmus is extracted from lichen (a plant). In a neutral solution it is purple.' },
    { topic: 'ind', front: 'Name 3 natural indicators.', back: 'Litmus (from lichen), turmeric, red cabbage leaves. Coloured petals of hydrangea, petunia and geranium also work.' },
    { topic: 'ind', front: 'Turmeric in acid and in base', back: 'Acid: stays yellow\nBase: turns reddish brown\n(That is why a curry stain turns red when washed with soap, which is basic.)' },
    { topic: 'ind', front: 'Phenolphthalein in acid and in base', back: 'Acid: colourless\nBase: pink' },
    { topic: 'ind', front: 'Methyl orange in acid and in base', back: 'Acid: red\nBase: yellow' },
    { topic: 'ind', front: 'What are olfactory indicators? Give examples.', back: 'Substances whose SMELL changes in acid or base.\nExamples: onion, vanilla essence, clove oil.' },
    { topic: 'ind', front: 'Onion and vanilla — what happens to their smell in an acid and in a base?', back: 'In a base (NaOH), the smell of onion and vanilla goes away.\nIn an acid (HCl), the smell stays.' },
    { topic: 'ind', front: 'Name the acids found in: vinegar, orange, tamarind, tomato', back: 'Vinegar — acetic acid\nOrange — citric acid\nTamarind — tartaric acid\nTomato — oxalic acid' },
    { topic: 'ind', front: 'Name the acids found in: sour milk (curd), lemon, ant sting, nettle sting', back: 'Sour milk (curd) — lactic acid\nLemon — citric acid\nAnt sting — methanoic acid\nNettle sting — methanoic acid' },
    { topic: 'acid', front: 'Acid + metal -> ?', back: 'Salt + hydrogen gas\nZn + H2SO4 -> ZnSO4 + H2' },
    { topic: 'acid', front: 'How do we test for hydrogen gas?', back: 'Bring a burning candle (or matchstick) near the gas. It burns with a "pop" sound.' },
    { topic: 'acid', front: 'Base + metal -> ? Give an example.', back: 'Some metals react with NaOH on heating to give a salt and hydrogen.\n2NaOH + Zn -> Na2ZnO2 + H2\n(Na2ZnO2 = sodium zincate)' },
    { topic: 'acid', front: 'Acid + metal carbonate (or hydrogencarbonate) -> ?', back: 'Salt + water + carbon dioxide\nNa2CO3 + 2HCl -> 2NaCl + H2O + CO2\nNaHCO3 + HCl -> NaCl + H2O + CO2' },
    { topic: 'acid', front: 'How do we test for carbon dioxide gas?', back: 'Pass it through lime water (calcium hydroxide solution). The lime water turns milky.\nCa(OH)2 + CO2 -> CaCO3 + H2O\n(CaCO3 is the white precipitate)' },
    { topic: 'acid', front: 'What happens when excess CO2 is passed through lime water?', back: 'The milkiness disappears, because soluble calcium hydrogencarbonate forms.\nCaCO3 + H2O + CO2 -> Ca(HCO3)2' },
    { topic: 'acid', front: 'Limestone, chalk and marble are all forms of…?', back: 'Calcium carbonate (CaCO3). All of them react with acids to give CO2.' },
    { topic: 'acid', front: 'What is a neutralisation reaction?', back: 'Acid + base -> salt + water\nThe acid and base cancel each other\'s effect.\nNaOH + HCl -> NaCl + H2O' },
    { topic: 'acid', front: 'Acid + metal oxide -> ? Give an example.', back: 'Salt + water\nCuO + 2HCl -> CuCl2 + H2O\nThe black copper oxide dissolves and the solution turns blue-green (copper chloride).' },
    { topic: 'acid', front: 'Why are metal oxides called basic oxides?', back: 'Because they react with acids to give salt and water, just like bases do.' },
    { topic: 'acid', front: 'Why are non-metal oxides called acidic oxides?', back: 'Because they react with bases to give salt and water, just like acids do.\nCa(OH)2 + CO2 -> CaCO3 + H2O' },
    { topic: 'ions', front: 'What is common to all acids?', back: 'All acids give H+ ions (hydrogen ions) in water. H+ ions cannot exist alone, so they join water to form H3O+ (hydronium ions).\nHCl + H2O -> H3O+ + Cl-' },
    { topic: 'ions', front: 'What is common to all bases?', back: 'All bases give OH- ions (hydroxide ions) in water.\nNaOH -> Na+ + OH-' },
    { topic: 'ions', front: 'Glucose and alcohol contain hydrogen. Why are they not acids?', back: 'They do not give H+ ions in water. So their solutions do not conduct electricity and are not acidic.' },
    { topic: 'ions', front: 'Why does an acid solution conduct electricity?', back: 'Because acids give ions (H+ / H3O+) in water, and ions carry the current.' },
    { topic: 'ions', front: 'Why does dry HCl gas NOT change the colour of dry blue litmus paper?', back: 'Without water, HCl does not give H+ ions. Acidic behaviour needs H+ ions, which form only in water.' },
    { topic: 'ions', front: 'What are alkalis? Name 3.', back: 'Bases that dissolve in water.\nNaOH (sodium hydroxide), KOH (potassium hydroxide), Ca(OH)2 (calcium hydroxide)\nAll alkalis are bases, but not all bases are alkalis.' },
    { topic: 'ions', front: 'Why should we add acid to water, and NOT water to acid?', back: 'Mixing acid with water is highly exothermic (gives a lot of heat). If water is added to concentrated acid, the heat can make the mixture splash out and cause burns, or crack the glass.\nSo add acid slowly to water, stirring all the time.' },
    { topic: 'ions', front: 'What is dilution? What happens to the ions?', back: 'Mixing an acid or base with water. The number of H3O+ or OH- ions per unit volume decreases, so the solution becomes weaker.' },
    { topic: 'ph', front: 'What is the pH scale?', back: 'A scale from 0 to 14 that measures the H+ ion concentration of a solution.\np stands for "potenz" (German for power).' },
    { topic: 'ph', front: 'pH values: acidic, neutral, basic', back: 'Less than 7: acidic\nExactly 7: neutral\nMore than 7: basic\nThe lower the pH, the stronger the acid. The higher the pH, the stronger the base.' },
    { topic: 'ph', front: 'What is a universal indicator?', back: 'A mixture of indicators that shows a different colour at each pH value, so it tells HOW acidic or basic a solution is.' },
    { topic: 'ph', front: 'Strong acid vs weak acid', back: 'Strong acid: gives MORE H+ ions, e.g. HCl, H2SO4, HNO3\nWeak acid: gives FEWER H+ ions, e.g. acetic acid, citric acid' },
    { topic: 'ph', front: 'Approximate pH: gastric juice, lemon juice, pure water, blood, milk of magnesia, NaOH', back: 'Gastric juice ≈ 1.2\nLemon juice ≈ 2.2\nPure water = 7\nBlood ≈ 7.4\nMilk of magnesia ≈ 10\nNaOH solution ≈ 14' },
    { topic: 'ph', front: 'What pH range does our body work in?', back: '7.0 to 7.8 (a narrow range around neutral). Living things survive only in a narrow pH range.' },
    { topic: 'ph', front: 'What is acid rain? How does it harm?', back: 'Rain with pH less than 5.6. When it flows into rivers, it lowers their pH, which makes it hard for aquatic animals to survive.' },
    { topic: 'ph', front: 'Why do plants need the right soil pH?', back: 'Plants grow best in a specific pH range. Farmers test soil pH to know which crop to grow and whether to treat the soil.' },
    { topic: 'ph', front: 'Why do we get acidity (indigestion)? How is it cured?', back: 'Our stomach makes hydrochloric acid to digest food. Too much acid causes pain and irritation.\nAntacids (mild bases like milk of magnesia, Mg(OH)2) neutralise the extra acid.' },
    { topic: 'ph', front: 'How does tooth decay happen?', back: 'Bacteria in the mouth break down sugar and food pieces left after eating, and produce acids. When the pH in the mouth falls below 5.5, tooth enamel (calcium hydroxyapatite, the hardest substance in the body) starts to corrode.' },
    { topic: 'ph', front: 'How do toothpastes prevent tooth decay?', back: 'Toothpastes are basic. They neutralise the extra acid in the mouth. Cleaning the mouth after eating also helps.' },
    { topic: 'ph', front: 'Why does a bee sting hurt? What is the remedy?', back: 'The sting injects methanoic acid, which causes pain and irritation. Rubbing a mild base like baking soda neutralises it.' },
    { topic: 'ph', front: 'What is the remedy for a nettle sting?', back: 'Nettle leaves have stinging hairs that inject methanoic acid. Rubbing the leaf of the dock plant (which grows near nettle) gives relief.' },
    { topic: 'salt', front: 'What is a salt?', back: 'A compound formed when an acid reacts with a base (neutralisation).\nHCl + NaOH -> NaCl + H2O' },
    { topic: 'salt', front: 'What is a family of salts?', back: 'Salts having the same positive or negative radical.\ne.g. NaCl and Na2SO4 — sodium family\nNaCl and KCl — chloride family' },
    { topic: 'salt', front: 'pH of salts: which salts are neutral, acidic or basic?', back: 'Strong acid + strong base -> neutral (pH 7), e.g. NaCl\nStrong acid + weak base -> acidic (pH < 7), e.g. NH4Cl\nWeak acid + strong base -> basic (pH > 7), e.g. Na2CO3, CH3COONa' },
    { topic: 'salt', front: 'Which acid and base form common salt (NaCl)?', back: 'Hydrochloric acid (HCl) + sodium hydroxide (NaOH)\nHCl + NaOH -> NaCl + H2O' },
    { topic: 'salt', front: 'What is rock salt? Why is it brown?', back: 'Rock salt is common salt found as large crystals in deposits. It is brown because of impurities. Seawater is another source of salt.' },
    { topic: 'nacl', front: 'What is the chlor-alkali process?', back: 'Electricity is passed through brine (concentrated NaCl solution).\n2NaCl + 2H2O -> 2NaOH + Cl2 + H2\nChlor = chlorine, alkali = sodium hydroxide.' },
    { topic: 'nacl', front: 'Chlor-alkali process: what forms at the anode and at the cathode?', back: 'Chlorine gas at the anode (positive)\nHydrogen gas at the cathode (negative)\nSodium hydroxide solution forms near the cathode.' },
    { topic: 'nacl', front: 'Uses of the products of the chlor-alkali process', back: 'H2: fuels, margarine (hydrogenation of oils), ammonia for fertilisers\nCl2: water treatment, PVC, pesticides, disinfectants\nNaOH: degreasing metals, soaps and detergents, paper, artificial fibres\nH2 + Cl2 -> HCl: cleaning steel, medicines, cosmetics' },
    { topic: 'nacl', front: 'How is bleaching powder made?', back: 'By passing chlorine over dry slaked lime.\nCa(OH)2 + Cl2 -> CaOCl2 + H2O\nCaOCl2 = bleaching powder (calcium oxychloride)' },
    { topic: 'nacl', front: 'Uses of bleaching powder', back: '• Bleaching cotton and linen in textiles, wood pulp in paper factories, washed clothes in laundry\n• Oxidising agent in chemical industries\n• Disinfecting drinking water' },
    { topic: 'nacl', front: 'Baking soda: chemical name, formula and how it is made', back: 'Sodium hydrogencarbonate, NaHCO3\nNaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3\nIt is a mild, non-corrosive base.' },
    { topic: 'nacl', front: 'What happens when baking soda is heated?', back: '2NaHCO3 -> Na2CO3 + H2O + CO2\nThe CO2 makes bread and cake soft and spongy.' },
    { topic: 'nacl', front: 'What is baking powder?', back: 'Baking soda + a mild edible acid (tartaric acid).\nWhen heated or mixed with water, CO2 is released, which makes the dough rise. The acid removes the bitter taste of sodium carbonate.' },
    { topic: 'nacl', front: 'Uses of baking soda', back: '• Baking powder (cakes, bread)\n• Antacid — neutralises extra stomach acid\n• Soda-acid fire extinguishers' },
    { topic: 'nacl', front: 'Washing soda: formula and how it is made', back: 'Sodium carbonate decahydrate, Na2CO3.10H2O\nHeat baking soda to get sodium carbonate, then recrystallise it from water:\nNa2CO3 + 10H2O -> Na2CO3.10H2O' },
    { topic: 'nacl', front: 'Uses of washing soda', back: '• Glass, soap and paper industries\n• Making borax\n• Cleaning at home\n• Removing permanent hardness of water' },
    { topic: 'cryst', front: 'What is water of crystallisation?', back: 'A fixed number of water molecules present in one formula unit of a salt crystal.\ne.g. CuSO4.5H2O has 5 water molecules.' },
    { topic: 'cryst', front: 'What happens when blue copper sulphate crystals are heated? What if water is added back?', back: 'They lose their water of crystallisation and turn white (anhydrous CuSO4).\nAdding a few drops of water turns them blue again.' },
    { topic: 'cryst', front: 'Formulas: blue vitriol, washing soda, gypsum', back: 'Copper sulphate: CuSO4.5H2O (5 water)\nWashing soda: Na2CO3.10H2O (10 water)\nGypsum: CaSO4.2H2O (2 water)' },
    { topic: 'cryst', front: 'How is Plaster of Paris made?', back: 'By heating gypsum at 373 K.\nCaSO4.2H2O -> CaSO4.½H2O + 1½H2O\nPlaster of Paris = calcium sulphate hemihydrate.' },
    { topic: 'cryst', front: 'What happens when Plaster of Paris is mixed with water?', back: 'It sets into a hard solid mass — gypsum.\nCaSO4.½H2O + 1½H2O -> CaSO4.2H2O' },
    { topic: 'cryst', front: 'Uses of Plaster of Paris', back: '• Plaster for supporting fractured bones\n• Making toys and decoration materials\n• Making surfaces (walls, ceilings) smooth' },
    { topic: 'cryst', front: 'Why is Plaster of Paris stored in a moisture-proof container?', back: 'Because it absorbs moisture from the air and sets into hard gypsum, becoming useless.' }
  ],

  quiz: [
    { topic: 'ind', q: 'Acids turn blue litmus…', options: ['Red', 'Green', 'Yellow', 'Pink'], answer: 0, explain: 'Acids: blue litmus -> red. Bases: red litmus -> blue.' },
    { topic: 'ind', q: 'Phenolphthalein turns ___ in a basic solution.', options: ['Red', 'Pink', 'Yellow', 'Blue'], answer: 1, explain: 'It is colourless in acid and pink in base.' },
    { topic: 'ind', q: 'Methyl orange in an acidic solution is…', options: ['Yellow', 'Pink', 'Red', 'Colourless'], answer: 2, explain: 'Methyl orange: red in acid, yellow in base.' },
    { topic: 'ind', q: 'Litmus is extracted from…', options: ['Turmeric', 'Lichen', 'Red cabbage', 'Petunia'], answer: 1, explain: 'Litmus comes from lichen, a plant of the Thallophyta group.' },
    { topic: 'ind', q: 'A turmeric stain on a white shirt turns red when washed with soap because soap is…', options: ['Acidic', 'Neutral', 'Basic', 'A salt'], answer: 2, explain: 'Turmeric turns reddish brown in a base. Soap is basic.' },
    { topic: 'ind', q: 'Which of these is an olfactory indicator?', options: ['Litmus', 'Methyl orange', 'Vanilla essence', 'Phenolphthalein'], answer: 2, explain: 'Olfactory indicators change smell — onion, vanilla, clove oil.' },
    { topic: 'ind', q: 'Tamarind contains…', options: ['Citric acid', 'Tartaric acid', 'Oxalic acid', 'Lactic acid'], answer: 1, explain: 'Tamarind — tartaric acid.' },
    { topic: 'ind', q: 'Tomato contains…', options: ['Oxalic acid', 'Acetic acid', 'Methanoic acid', 'Citric acid'], answer: 0, explain: 'Tomato — oxalic acid.' },
    { topic: 'ind', q: 'Curd (sour milk) contains…', options: ['Acetic acid', 'Tartaric acid', 'Lactic acid', 'Oxalic acid'], answer: 2, explain: 'Sour milk — lactic acid.' },
    { topic: 'acid', q: 'When zinc reacts with dilute hydrochloric acid, the gas given off is…', options: ['Oxygen', 'Chlorine', 'Hydrogen', 'Carbon dioxide'], answer: 2, explain: 'Zn + 2HCl -> ZnCl2 + H2' },
    { topic: 'acid', q: 'Hydrogen gas burns with a…', options: ['Pop sound', 'Hissing sound', 'Green flame', 'Smell of sulphur'], answer: 0, explain: 'A burning candle near hydrogen gives a pop sound.' },
    { topic: 'acid', q: 'Lime water turns milky when ___ is passed through it.', options: ['Hydrogen', 'Oxygen', 'Carbon dioxide', 'Chlorine'], answer: 2, explain: 'Ca(OH)2 + CO2 -> CaCO3 (white) + H2O' },
    { topic: 'acid', q: 'Acid + metal carbonate gives…', options: ['Salt + hydrogen', 'Salt + water + CO2', 'Salt + water only', 'Base + water'], answer: 1, explain: 'e.g. Na2CO3 + 2HCl -> 2NaCl + H2O + CO2' },
    { topic: 'acid', q: 'Zinc reacts with sodium hydroxide to form…', options: ['Zinc hydroxide + sodium', 'Sodium zincate + hydrogen', 'Zinc oxide + water', 'No reaction'], answer: 1, explain: '2NaOH + Zn -> Na2ZnO2 + H2' },
    { topic: 'acid', q: 'Acid + base -> salt + water is called…', options: ['Decomposition', 'Neutralisation', 'Displacement', 'Combination'], answer: 1, explain: 'The acid and base neutralise each other.' },
    { topic: 'acid', q: 'Copper oxide + dilute HCl gives a solution that is…', options: ['Colourless', 'Blue-green', 'Red', 'Milky white'], answer: 1, explain: 'CuO + 2HCl -> CuCl2 + H2O. Copper chloride is blue-green.' },
    { topic: 'acid', q: 'Metal oxides are generally…', options: ['Acidic', 'Basic', 'Neutral', 'Salts'], answer: 1, explain: 'They react with acids to give salt and water.' },
    { topic: 'acid', q: 'CO2 reacts with Ca(OH)2 to form salt and water. So CO2 is…', options: ['A basic oxide', 'An acidic oxide', 'A neutral oxide', 'A metal oxide'], answer: 1, explain: 'Non-metal oxides react with bases, so they are acidic.' },
    { topic: 'acid', q: 'Chalk, limestone and marble are all…', options: ['Calcium oxide', 'Calcium hydroxide', 'Calcium carbonate', 'Calcium sulphate'], answer: 2, explain: 'All are forms of CaCO3.' },
    { topic: 'ions', q: 'All acids produce ___ ions in water.', options: ['OH-', 'H+ (H3O+)', 'Na+', 'Cl-'], answer: 1, explain: 'H+ ions combine with water to form hydronium ions, H3O+.' },
    { topic: 'ions', q: 'Bases that dissolve in water are called…', options: ['Salts', 'Alkalis', 'Indicators', 'Oxides'], answer: 1, explain: 'e.g. NaOH, KOH, Ca(OH)2' },
    { topic: 'ions', q: 'Which of these does NOT conduct electricity in water?', options: ['HCl', 'H2SO4', 'Glucose', 'NaOH'], answer: 2, explain: 'Glucose does not give ions in water.' },
    { topic: 'ions', q: 'While diluting an acid, it is safer to…', options: ['Add water to acid quickly', 'Add acid to water slowly with stirring', 'Heat the acid first', 'Add both together'], answer: 1, explain: 'The process is highly exothermic; adding water to acid can make it splash.' },
    { topic: 'ions', q: 'When an acid is diluted, the concentration of H3O+ ions per unit volume…', options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'], answer: 1, explain: 'The same ions spread through more water.' },
    { topic: 'ions', q: 'H+ ions in water exist as…', options: ['H2', 'OH-', 'H3O+', 'H2O2'], answer: 2, explain: 'H+ + H2O -> H3O+ (hydronium ion)' },
    { topic: 'ph', q: 'A solution with pH 7 is…', options: ['Acidic', 'Basic', 'Neutral', 'Strongly basic'], answer: 2, explain: 'pH 7 is neutral, like pure water.' },
    { topic: 'ph', q: 'Which pH is the most acidic?', options: ['pH 1', 'pH 5', 'pH 7', 'pH 12'], answer: 0, explain: 'The lower the pH, the stronger the acid.' },
    { topic: 'ph', q: 'A solution turns red litmus blue. Its pH is likely to be…', options: ['1', '4', '5', '10'], answer: 3, explain: 'It is basic, so its pH is more than 7.' },
    { topic: 'ph', q: 'The pH of gastric juice is about…', options: ['1.2', '7', '7.4', '10'], answer: 0, explain: 'Our stomach makes hydrochloric acid.' },
    { topic: 'ph', q: 'Tooth decay starts when the pH in the mouth falls below…', options: ['7', '6.5', '5.5', '3'], answer: 2, explain: 'Below 5.5, tooth enamel starts to corrode.' },
    { topic: 'ph', q: 'An antacid used for acidity is…', options: ['Vinegar', 'Milk of magnesia', 'Lemon juice', 'Sodium chloride'], answer: 1, explain: 'Milk of magnesia, Mg(OH)2, is a mild base.' },
    { topic: 'ph', q: 'A bee sting contains…', options: ['Acetic acid', 'Methanoic acid', 'Citric acid', 'Hydrochloric acid'], answer: 1, explain: 'Rub baking soda (a mild base) to neutralise it.' },
    { topic: 'ph', q: 'Rain is called acid rain when its pH is less than…', options: ['7', '6.5', '5.6', '4'], answer: 2, explain: 'Acid rain has pH less than 5.6.' },
    { topic: 'ph', q: 'Our body works within a pH range of…', options: ['1 to 2', '5 to 6', '7.0 to 7.8', '9 to 10'], answer: 2, explain: 'A narrow range around neutral.' },
    { topic: 'ph', q: 'Which acid is a strong acid?', options: ['Acetic acid', 'Citric acid', 'Hydrochloric acid', 'Carbonic acid'], answer: 2, explain: 'HCl gives a large number of H+ ions.' },
    { topic: 'salt', q: 'NH4Cl solution is…', options: ['Acidic', 'Basic', 'Neutral', 'An indicator'], answer: 0, explain: 'Strong acid (HCl) + weak base (NH4OH) -> acidic salt.' },
    { topic: 'salt', q: 'Sodium carbonate solution is…', options: ['Acidic', 'Basic', 'Neutral', 'Colourless with phenolphthalein'], answer: 1, explain: 'Weak acid (H2CO3) + strong base (NaOH) -> basic salt.' },
    { topic: 'salt', q: 'NaCl and KCl belong to the…', options: ['Sodium family', 'Potassium family', 'Chloride family', 'Sulphate family'], answer: 2, explain: 'They have the same negative radical, chloride.' },
    { topic: 'salt', q: 'Common salt is formed from…', options: ['HCl and NaOH', 'H2SO4 and NaOH', 'HCl and KOH', 'HNO3 and NaOH'], answer: 0, explain: 'HCl + NaOH -> NaCl + H2O' },
    { topic: 'nacl', q: 'In the chlor-alkali process, the gas formed at the anode is…', options: ['Hydrogen', 'Oxygen', 'Chlorine', 'Carbon dioxide'], answer: 2, explain: 'Cl2 at the anode, H2 at the cathode, NaOH near the cathode.' },
    { topic: 'nacl', q: 'The chemical formula of bleaching powder is…', options: ['CaCl2', 'CaOCl2', 'Ca(OH)2', 'CaCO3'], answer: 1, explain: 'Ca(OH)2 + Cl2 -> CaOCl2 + H2O' },
    { topic: 'nacl', q: 'Bleaching powder is made by passing chlorine over…', options: ['Quicklime', 'Dry slaked lime', 'Limestone', 'Gypsum'], answer: 1, explain: 'Dry slaked lime is Ca(OH)2.' },
    { topic: 'nacl', q: 'The chemical name of baking soda is…', options: ['Sodium carbonate', 'Sodium hydrogencarbonate', 'Sodium hydroxide', 'Sodium chloride'], answer: 1, explain: 'Baking soda = NaHCO3.' },
    { topic: 'nacl', q: 'Baking powder is baking soda mixed with…', options: ['Tartaric acid', 'Hydrochloric acid', 'Washing soda', 'Salt'], answer: 0, explain: 'The mild acid removes the bitter taste and helps release CO2.' },
    { topic: 'nacl', q: 'Cakes become soft and spongy because baking soda releases…', options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Steam only'], answer: 2, explain: '2NaHCO3 -> Na2CO3 + H2O + CO2' },
    { topic: 'nacl', q: 'Washing soda is used to…', options: ['Make bread rise', 'Remove permanent hardness of water', 'Set fractured bones', 'Disinfect drinking water'], answer: 1, explain: 'Washing soda also goes into glass, soap and paper.' },
    { topic: 'nacl', q: 'The number of water molecules in washing soda is…', options: ['2', '5', '7', '10'], answer: 3, explain: 'Na2CO3.10H2O' },
    { topic: 'nacl', q: 'Which is used to disinfect drinking water?', options: ['Baking soda', 'Washing soda', 'Bleaching powder', 'Plaster of Paris'], answer: 2, explain: 'Bleaching powder releases chlorine, which kills germs.' },
    { topic: 'cryst', q: 'The number of water molecules in CuSO4.5H2O is…', options: ['1', '2', '5', '10'], answer: 2, explain: 'Copper sulphate crystals have 5 molecules of water of crystallisation.' },
    { topic: 'cryst', q: 'Blue copper sulphate crystals on heating turn…', options: ['Green', 'White', 'Black', 'Red'], answer: 1, explain: 'They lose water of crystallisation and become anhydrous (white).' },
    { topic: 'cryst', q: 'Plaster of Paris is made by heating…', options: ['Limestone', 'Gypsum', 'Washing soda', 'Bleaching powder'], answer: 1, explain: 'Gypsum (CaSO4.2H2O) is heated at 373 K.' },
    { topic: 'cryst', q: 'The formula of Plaster of Paris is…', options: ['CaSO4.2H2O', 'CaSO4.½H2O', 'CaSO4', 'CaCO3'], answer: 1, explain: 'Calcium sulphate hemihydrate — half a water molecule per CaSO4.' },
    { topic: 'cryst', q: 'Plaster of Paris is used for…', options: ['Supporting fractured bones', 'Making bread', 'Bleaching cloth', 'Antacids'], answer: 0, explain: 'It sets hard when mixed with water.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'ind', a: 'A turmeric stain on a shirt turns red when washed with soap.', r: 'Soap is basic, and turmeric turns reddish brown in a base.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'ions', a: 'Glucose solution does not conduct electricity.', r: 'Glucose does not give H+ ions in water.', answer: 0, explain: 'Both true, and R explains A — no ions, no current.' },
      { topic: 'ions', a: 'Dry HCl gas does not change the colour of dry blue litmus paper.', r: 'HCl gives H+ ions only in the presence of water.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'ions', a: 'Water should be added to concentrated acid while diluting it.', r: 'Mixing an acid with water is highly exothermic.', answer: 3, explain: 'A is false — ACID should be added to WATER. R is true.' },
      { topic: 'ph', a: 'A solution of pH 2 is more acidic than a solution of pH 5.', r: 'The lower the pH, the higher the H+ ion concentration.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'ph', a: 'Tooth decay starts when the pH in the mouth falls below 5.5.', r: 'Tooth enamel is the hardest substance in the body.', answer: 1, explain: 'Both true, but the hardness of enamel does not explain why low pH causes decay.' },
      { topic: 'ph', a: 'Baking soda is rubbed on a bee sting.', r: 'Baking soda is a mild base that neutralises methanoic acid.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'salt', a: 'Sodium chloride solution is neutral.', r: 'NaCl is formed from a weak acid and a strong base.', answer: 2, explain: 'A is true, but R is false — NaCl comes from a strong acid (HCl) and a strong base (NaOH).' },
      { topic: 'acid', a: 'Metal oxides are called basic oxides.', r: 'Metal oxides react with acids to give salt and water.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'acid', a: 'Lime water turns milky when CO2 is passed through it.', r: 'Calcium hydrogencarbonate is insoluble in water.', answer: 2, explain: 'A is true, but R is false — milkiness is due to insoluble CaCO3; calcium hydrogencarbonate is soluble.' },
      { topic: 'cryst', a: 'Plaster of Paris is stored in a moisture-proof container.', r: 'Plaster of Paris absorbs moisture and sets into hard gypsum.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'nacl', a: 'Baking soda is used in soda-acid fire extinguishers.', r: 'Baking soda is used as an antacid.', answer: 1, explain: 'Both true, but being an antacid does not explain its use in fire extinguishers (it releases CO2 with acid).' }
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
    { title: 'Indicator Colours', pairs: [
      ['Blue litmus in acid', 'Turns red'],
      ['Red litmus in base', 'Turns blue'],
      ['Phenolphthalein in base', 'Pink'],
      ['Methyl orange in acid', 'Red'],
      ['Turmeric in base', 'Reddish brown'],
      ['Onion smell in base', 'Disappears']
    ] },
    { title: 'Acids Around Us', pairs: [
      ['Vinegar', 'Acetic acid'],
      ['Orange', 'Citric acid'],
      ['Tamarind', 'Tartaric acid'],
      ['Tomato', 'Oxalic acid'],
      ['Sour milk (curd)', 'Lactic acid'],
      ['Ant / nettle sting', 'Methanoic acid']
    ] },
    { title: 'Name It!', pairs: [
      ['NaHCO3', 'Baking soda'],
      ['Na2CO3.10H2O', 'Washing soda'],
      ['CaOCl2', 'Bleaching powder'],
      ['CaSO4.½H2O', 'Plaster of Paris'],
      ['CaSO4.2H2O', 'Gypsum'],
      ['CuSO4.5H2O', 'Blue vitriol (copper sulphate)']
    ] },
    { title: 'What Is It Used For?', pairs: [
      ['Baking soda', 'Antacid and baking'],
      ['Washing soda', 'Removing hardness of water'],
      ['Bleaching powder', 'Disinfecting drinking water'],
      ['Plaster of Paris', 'Supporting fractured bones'],
      ['Sodium hydroxide', 'Soaps and paper'],
      ['Chlorine', 'Making PVC']
    ] },
    { title: 'pH Values', pairs: [
      ['Gastric juice', 'About 1.2'],
      ['Lemon juice', 'About 2.2'],
      ['Pure water', 'Exactly 7'],
      ['Blood', 'About 7.4'],
      ['Milk of magnesia', 'About 10'],
      ['Sodium hydroxide solution', 'About 14']
    ] },
    { title: 'Acid, Base or Neutral?', pairs: [
      ['NH4Cl solution', 'Acidic salt'],
      ['Na2CO3 solution', 'Basic salt'],
      ['NaCl solution', 'Neutral salt'],
      ['CO2 (non-metal oxide)', 'Acidic oxide'],
      ['CuO (metal oxide)', 'Basic oxide'],
      ['NaOH, KOH', 'Alkalis']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'Zinc + hydrochloric acid', reactants: ['Zn', 'HCl'], products: ['ZnCl2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Magnesium + hydrochloric acid', reactants: ['Mg', 'HCl'], products: ['MgCl2', 'H2'], answer: [1, 2, 1, 1] },
    { name: 'Aluminium + hydrochloric acid', reactants: ['Al', 'HCl'], products: ['AlCl3', 'H2'], answer: [2, 6, 2, 3] },
    { name: 'Zinc + sodium hydroxide', reactants: ['NaOH', 'Zn'], products: ['Na2ZnO2', 'H2'], answer: [2, 1, 1, 1] },
    { name: 'Sodium carbonate + hydrochloric acid', reactants: ['Na2CO3', 'HCl'], products: ['NaCl', 'H2O', 'CO2'], answer: [1, 2, 2, 1, 1] },
    { name: 'Baking soda + hydrochloric acid', reactants: ['NaHCO3', 'HCl'], products: ['NaCl', 'H2O', 'CO2'], answer: [1, 1, 1, 1, 1] },
    { name: 'Marble + hydrochloric acid', reactants: ['CaCO3', 'HCl'], products: ['CaCl2', 'H2O', 'CO2'], answer: [1, 2, 1, 1, 1] },
    { name: 'Lime water turns milky', reactants: ['Ca(OH)2', 'CO2'], products: ['CaCO3', 'H2O'], answer: [1, 1, 1, 1] },
    { name: 'Excess CO2: milkiness disappears', reactants: ['CaCO3', 'H2O', 'CO2'], products: ['Ca(HCO3)2'], answer: [1, 1, 1, 1] },
    { name: 'Copper oxide + hydrochloric acid', reactants: ['CuO', 'HCl'], products: ['CuCl2', 'H2O'], answer: [1, 2, 1, 1] },
    { name: 'Aluminium oxide + hydrochloric acid', reactants: ['Al2O3', 'HCl'], products: ['AlCl3', 'H2O'], answer: [1, 6, 2, 3] },
    { name: 'Neutralisation: KOH + sulphuric acid', reactants: ['KOH', 'H2SO4'], products: ['K2SO4', 'H2O'], answer: [2, 1, 1, 2] },
    { name: 'Neutralisation: slaked lime + HCl', reactants: ['Ca(OH)2', 'HCl'], products: ['CaCl2', 'H2O'], answer: [1, 2, 1, 2] },
    { name: 'Antacid: milk of magnesia + stomach acid', reactants: ['Mg(OH)2', 'HCl'], products: ['MgCl2', 'H2O'], answer: [1, 2, 1, 2] },
    { name: 'Chlor-alkali process', reactants: ['NaCl', 'H2O'], products: ['NaOH', 'Cl2', 'H2'], answer: [2, 2, 2, 1, 1] },
    { name: 'Hydrogen + chlorine', reactants: ['H2', 'Cl2'], products: ['HCl'], answer: [1, 1, 2] },
    { name: 'Making bleaching powder', reactants: ['Ca(OH)2', 'Cl2'], products: ['CaOCl2', 'H2O'], answer: [1, 1, 1, 1] },
    { name: 'Making baking soda', reactants: ['NaCl', 'H2O', 'CO2', 'NH3'], products: ['NH4Cl', 'NaHCO3'], answer: [1, 1, 1, 1, 1, 1] },
    { name: 'Heating baking soda', reactants: ['NaHCO3'], products: ['Na2CO3', 'H2O', 'CO2'], answer: [2, 1, 1, 1] },
    { name: 'Iron + sulphuric acid', reactants: ['Fe', 'H2SO4'], products: ['FeSO4', 'H2'], answer: [1, 1, 1, 1] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'You have two solutions, A and B. The pH of A is 6 and the pH of B is 8. Which is acidic and which is basic?',
      keypoints: [
        { text: 'A (pH 6) is acidic, B (pH 8) is basic', kw: ['acid', 'basic|base|alkal'] }
      ],
      model: 'Solution A (pH 6) is acidic because its pH is less than 7. Solution B (pH 8) is basic because its pH is more than 7.' },
    { marks: 1, q: 'Why should curd and sour substances not be kept in brass and copper vessels?',
      keypoints: [
        { text: 'They contain acids that react with the metal and form harmful/poisonous compounds', kw: ['acid', 'react|poison|toxic|harm'] }
      ],
      model: 'Curd and sour substances contain acids. These acids react with copper and brass to form harmful (poisonous) compounds, which spoil the food and can make us ill.' },
    { marks: 2, q: 'Why do HCl and HNO3 show acidic character in water, while glucose and alcohol do not?',
      keypoints: [
        { text: 'HCl and HNO3 give H+ ions in water', kw: ['h+|hydrogen ion|h3o|hydronium'] },
        { text: 'Glucose and alcohol do not give H+ ions, so they are not acidic', kw: ['glucose|alcohol', 'not|do not|don'] }
      ],
      model: 'The acidic character of a solution is due to H+ ions. HCl and HNO3 ionise in water to give H+ (H3O+) ions, so they are acidic. Glucose and alcohol also contain hydrogen, but they do not give H+ ions in water, so they do not show acidic character.' },
    { marks: 2, q: 'Why does an aqueous solution of an acid conduct electricity, but distilled water does not?',
      keypoints: [
        { text: 'Acid solution has ions (H+ / H3O+) that carry current', kw: ['ion'] },
        { text: 'Distilled water has almost no ions', kw: ['distilled|pure', 'no|not|few'] }
      ],
      model: 'An acid gives H+ (H3O+) ions in water, and these ions carry electric current. Distilled water does not contain ions (it has no dissolved salts), so it does not conduct electricity.' },
    { marks: 2, q: 'Why does dry HCl gas not change the colour of dry litmus paper?',
      keypoints: [
        { text: 'HCl gives H+ ions only in water', kw: ['h+|hydrogen ion|ion', 'water|moist|aqueous'] },
        { text: 'Without water there are no H+ ions, so no acidic behaviour', kw: ['dry|without|absence'] }
      ],
      model: 'An acid shows acidic behaviour only because of H+ ions, which form only in the presence of water. Dry HCl gas and dry litmus have no water, so no H+ ions are formed and the colour does not change.' },
    { marks: 2, q: 'While diluting an acid, why is it recommended that the acid be added to water and not water to the acid?',
      keypoints: [
        { text: 'The process is highly exothermic (a lot of heat is given out)', kw: ['exothermic|heat'] },
        { text: 'Adding water to acid can make the mixture splash out and cause burns / break the glass', kw: ['splash|burn|break|crack'] }
      ],
      model: 'Mixing an acid with water is a highly exothermic process. If water is added to concentrated acid, the heat produced can make the mixture splash out and cause burns, and the glass container may break. So the acid is added slowly to water with constant stirring.' },
    { marks: 2, q: 'How is the concentration of H3O+ ions affected when a solution of an acid is diluted?',
      keypoints: [
        { text: 'The concentration of H3O+ ions per unit volume decreases', kw: ['decreas|less|lower|reduc'] },
        { text: 'The same ions are spread through a larger volume of water', kw: ['volume|water|spread'] }
      ],
      model: 'When an acid is diluted, the number of H3O+ ions per unit volume decreases, because the same ions get spread through a larger volume of water. So the solution becomes less acidic.' },
    { marks: 2, q: 'A milkman adds a very small amount of baking soda to fresh milk.\n(a) Why does he shift the pH of the milk from 6 to slightly alkaline?\n(b) Why does this milk take a long time to set as curd?',
      keypoints: [
        { text: '(a) So that the milk does not turn sour quickly (the base neutralises acid formed)', kw: ['sour|spoil|neutrali'] },
        { text: '(b) The lactic acid formed is first neutralised by baking soda, so setting is slow', kw: ['lactic|acid', 'neutrali'] }
      ],
      model: '(a) In alkaline conditions, milk does not turn sour quickly, because the baking soda neutralises the acid produced. So the milk stays fresh for longer.\n(b) To set as curd, the milk must become acidic (lactic acid). The acid formed is first neutralised by the baking soda, so the milk takes longer to set.' },
    { marks: 2, q: 'Plaster of Paris should be stored in a moisture-proof container. Explain why.',
      keypoints: [
        { text: 'It absorbs moisture (water) from the air', kw: ['moisture|water'] },
        { text: 'It sets into hard gypsum: CaSO4.½H2O + 1½H2O -> CaSO4.2H2O', kw: ['gypsum|hard|set'] }
      ],
      model: 'Plaster of Paris absorbs moisture from the air and slowly sets into a hard mass of gypsum, after which it is useless.\nCaSO4.½H2O + 1½H2O -> CaSO4.2H2O' },
    { marks: 3, q: 'What is a neutralisation reaction? Give two examples.',
      keypoints: [
        { text: 'Acid + base -> salt + water', kw: ['acid', 'base', 'salt', 'water'] },
        { text: 'Example 1, e.g. NaOH + HCl -> NaCl + H2O', kw: ['naoh|koh|ca(oh)2|mg(oh)2'] },
        { text: 'Example 2, e.g. antacid for acidity / baking soda on a bee sting', kw: ['antacid|sting|magnesia|baking|h2so4|hno3|k2so4'] }
      ],
      model: 'A reaction between an acid and a base that gives a salt and water is called a neutralisation reaction.\nAcid + Base -> Salt + Water\n1. NaOH + HCl -> NaCl + H2O\n2. 2KOH + H2SO4 -> K2SO4 + 2H2O\nDaily-life example: an antacid like milk of magnesia neutralises extra acid in the stomach.' },
    { marks: 3, q: 'Give two important uses each of washing soda and baking soda.',
      keypoints: [
        { text: 'Washing soda: glass, soap and paper industries', kw: ['glass|soap|paper|borax'] },
        { text: 'Washing soda: cleaning at home / removing permanent hardness of water', kw: ['hardness|clean'] },
        { text: 'Baking soda: baking powder, antacid, soda-acid fire extinguisher', kw: ['antacid|fire|baking powder|cake|bread'] }
      ],
      model: 'Washing soda (Na2CO3.10H2O):\n1. Used in glass, soap and paper industries, and to make borax.\n2. Used for cleaning at home and for removing permanent hardness of water.\nBaking soda (NaHCO3):\n1. Used in baking powder to make cakes and bread soft and spongy.\n2. Used as an antacid and in soda-acid fire extinguishers.' },
    { marks: 3, q: 'What is the chlor-alkali process? Write the equation and name the products formed at the anode and the cathode.',
      keypoints: [
        { text: 'Electricity is passed through brine (concentrated NaCl solution)', kw: ['brine|sodium chloride|nacl', 'electric'] },
        { text: '2NaCl + 2H2O -> 2NaOH + Cl2 + H2', kw: ['naoh', 'cl2'] },
        { text: 'Chlorine at anode, hydrogen at cathode, NaOH near cathode', kw: ['anode', 'cathode'] }
      ],
      model: 'When electricity is passed through brine (a concentrated solution of sodium chloride), it decomposes to form sodium hydroxide, chlorine and hydrogen. It is called chlor-alkali because the products are chlorine and an alkali (NaOH).\n2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + Cl2(g) + H2(g)\nChlorine gas forms at the anode, hydrogen gas at the cathode, and sodium hydroxide solution near the cathode.' },
    { marks: 3, q: 'How is bleaching powder prepared? Write the equation and give two uses.',
      keypoints: [
        { text: 'Chlorine is passed over dry slaked lime', kw: ['chlorine|cl2', 'slaked|ca(oh)2|calcium hydroxide'] },
        { text: 'Ca(OH)2 + Cl2 -> CaOCl2 + H2O', kw: ['caocl2'] },
        { text: 'Uses: bleaching cotton/linen/paper, disinfecting drinking water, oxidising agent', kw: ['bleach|disinfect|oxidis|oxidiz'] }
      ],
      model: 'Bleaching powder is made by passing chlorine gas over dry slaked lime.\nCa(OH)2 + Cl2 -> CaOCl2 + H2O\nUses:\n1. Bleaching cotton and linen in the textile industry, and wood pulp in paper factories.\n2. Disinfecting drinking water to make it free of germs.\n(Also an oxidising agent in chemical industries.)' },
    { marks: 3, q: 'What is baking powder? How does it make cake soft and spongy? Write the reaction.',
      keypoints: [
        { text: 'Baking soda (NaHCO3) mixed with a mild edible acid like tartaric acid', kw: ['baking soda|nahco3', 'tartaric|acid'] },
        { text: 'On heating / with water, CO2 is released, which makes the cake rise', kw: ['co2|carbon dioxide'] },
        { text: '2NaHCO3 -> Na2CO3 + H2O + CO2', kw: ['na2co3|nahco3'] }
      ],
      model: 'Baking powder is a mixture of baking soda (NaHCO3) and a mild edible acid such as tartaric acid.\nWhen it is heated or mixed with water, carbon dioxide gas is released. The gas gets trapped in the dough and makes the cake soft and spongy.\n2NaHCO3 -> Na2CO3 + H2O + CO2 (on heating)\nThe tartaric acid neutralises the sodium carbonate, so the cake does not taste bitter.' },
    { marks: 3, q: 'What is water of crystallisation? Give two examples. What happens when copper sulphate crystals are heated?',
      keypoints: [
        { text: 'Fixed number of water molecules in one formula unit of a salt', kw: ['fixed|number', 'water'] },
        { text: 'Examples: CuSO4.5H2O, Na2CO3.10H2O, CaSO4.2H2O', kw: ['5h2o|10h2o|2h2o'] },
        { text: 'On heating, blue copper sulphate loses water and turns white; adding water turns it blue again', kw: ['white'] }
      ],
      model: 'Water of crystallisation is the fixed number of water molecules present in one formula unit of a salt.\nExamples: copper sulphate CuSO4.5H2O, washing soda Na2CO3.10H2O, gypsum CaSO4.2H2O.\nWhen blue copper sulphate crystals are heated, they lose their water of crystallisation and turn white (anhydrous CuSO4). If a few drops of water are added, the blue colour comes back.' },
    { marks: 3, q: 'How is Plaster of Paris obtained? Write the equation. What happens when it is mixed with water? Give one use.',
      keypoints: [
        { text: 'By heating gypsum at 373 K: CaSO4.2H2O -> CaSO4.½H2O + 1½H2O', kw: ['gypsum', '373|heat'] },
        { text: 'With water it sets into hard gypsum again', kw: ['hard|gypsum|set'] },
        { text: 'Use: plaster for fractured bones, toys, decoration, smooth surfaces', kw: ['fracture|bone|toy|decorat|smooth'] }
      ],
      model: 'Plaster of Paris is obtained by heating gypsum at 373 K.\nCaSO4.2H2O -> CaSO4.½H2O + 1½H2O\nWhen mixed with water, it sets into a hard solid mass of gypsum.\nCaSO4.½H2O + 1½H2O -> CaSO4.2H2O\nUse: doctors use it as plaster for supporting fractured bones. It is also used for making toys and decoration materials.' },
    { marks: 3, q: 'How does tooth decay happen? How can it be prevented?',
      keypoints: [
        { text: 'Bacteria break down sugar and food in the mouth and produce acids', kw: ['bacteria', 'acid'] },
        { text: 'When pH falls below 5.5, tooth enamel (calcium hydroxyapatite) corrodes', kw: ['5.5|enamel'] },
        { text: 'Prevention: basic toothpaste neutralises acid; clean the mouth after eating', kw: ['toothpaste|brush|clean', 'basic|base|neutrali'] }
      ],
      model: 'Bacteria in the mouth break down sugar and food particles left after eating and produce acids. This lowers the pH in the mouth. When the pH falls below 5.5, tooth enamel (made of calcium hydroxyapatite, the hardest substance in the body) starts to corrode, causing tooth decay.\nPrevention: Clean the mouth after eating. Toothpastes are basic, so brushing neutralises the extra acid.' },
    { marks: 3, q: 'Explain the importance of pH in everyday life with any three examples.',
      keypoints: [
        { text: 'Digestion: excess stomach acid is neutralised by antacids', kw: ['antacid|stomach|digest|acidity'] },
        { text: 'Tooth decay: starts below pH 5.5; toothpaste is basic', kw: ['tooth|teeth'] },
        { text: 'Bee/nettle stings, soil pH for plants, or acid rain', kw: ['sting|soil|plant|acid rain|body'] }
      ],
      model: '1. Digestion: Our stomach makes hydrochloric acid. Too much acid causes pain; an antacid like milk of magnesia neutralises it.\n2. Tooth decay: When pH in the mouth falls below 5.5, enamel corrodes. Basic toothpastes neutralise the acid.\n3. Stings: A bee sting injects methanoic acid; rubbing baking soda (a mild base) gives relief.\nOther examples: plants need soil of the right pH; acid rain (pH below 5.6) harms aquatic life; our body works between pH 7.0 and 7.8.' },
    { marks: 5, q: 'Write the reactions of acids with (a) metals, (b) metal carbonates and hydrogencarbonates, (c) bases, and (d) metal oxides. Give one balanced equation for each. How will you test the gas evolved in (a) and (b)?',
      keypoints: [
        { text: '(a) Acid + metal -> salt + H2, e.g. Zn + H2SO4 -> ZnSO4 + H2', kw: ['zn|mg|fe', 'h2'] },
        { text: '(b) Acid + carbonate -> salt + water + CO2, e.g. Na2CO3 + 2HCl -> 2NaCl + H2O + CO2', kw: ['co3', 'co2'] },
        { text: '(c) Acid + base -> salt + water, e.g. NaOH + HCl -> NaCl + H2O', kw: ['naoh|koh|ca(oh)2'] },
        { text: '(d) Acid + metal oxide -> salt + water, e.g. CuO + 2HCl -> CuCl2 + H2O', kw: ['cuo|oxide'] },
        { text: 'Tests: H2 burns with a pop sound; CO2 turns lime water milky', kw: ['pop', 'lime water|limewater|milky'] }
      ],
      model: '(a) Acid + metal -> salt + hydrogen\nZn + H2SO4 -> ZnSO4 + H2\n(b) Acid + metal carbonate/hydrogencarbonate -> salt + water + carbon dioxide\nNa2CO3 + 2HCl -> 2NaCl + H2O + CO2\nNaHCO3 + HCl -> NaCl + H2O + CO2\n(c) Acid + base -> salt + water (neutralisation)\nNaOH + HCl -> NaCl + H2O\n(d) Acid + metal oxide -> salt + water\nCuO + 2HCl -> CuCl2 + H2O\nTests: Hydrogen burns with a pop sound when a burning candle is brought near. Carbon dioxide turns lime water milky: Ca(OH)2 + CO2 -> CaCO3 + H2O' },
    { marks: 5, q: 'Name the salt used to make (a) baking soda and (b) washing soda. Write the chemical name, formula and preparation of each with equations. Give two uses of each.',
      keypoints: [
        { text: 'Both are made from common salt, sodium chloride (NaCl)', kw: ['sodium chloride|nacl|common salt'] },
        { text: 'Baking soda: sodium hydrogencarbonate NaHCO3', kw: ['nahco3|hydrogencarbonate|hydrogen carbonate|bicarbonate'] },
        { text: 'NaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3', kw: ['nh3|nh4cl|ammonia'] },
        { text: 'Washing soda: sodium carbonate decahydrate Na2CO3.10H2O, by heating baking soda and recrystallising', kw: ['10h2o|decahydrate', 'recrystal|heat'] },
        { text: 'Uses: baking powder, antacid / glass, soap, paper, hardness of water', kw: ['antacid|baking powder|fire', 'glass|soap|paper|hardness'] }
      ],
      model: 'Both are made from common salt (sodium chloride, NaCl).\n(a) Baking soda — sodium hydrogencarbonate, NaHCO3\nNaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3\nUses: in baking powder for cakes and bread; as an antacid; in soda-acid fire extinguishers.\n(b) Washing soda — sodium carbonate decahydrate, Na2CO3.10H2O\nBaking soda is heated to get sodium carbonate:\n2NaHCO3 -> Na2CO3 + H2O + CO2\nThen sodium carbonate is recrystallised:\nNa2CO3 + 10H2O -> Na2CO3.10H2O\nUses: in glass, soap and paper industries; for removing permanent hardness of water; for cleaning at home.' },
    { marks: 4, q: 'CASE STUDY: Simran added zinc granules to dilute sulphuric acid in a test tube. Bubbles formed around the granules. She brought a burning matchstick near the mouth of the tube.\n(a) Name the gas formed.\n(b) What did she observe with the matchstick?\n(c) Write the balanced equation.\n(d) Name one base that also reacts with zinc to give the same gas.',
      keypoints: [
        { text: '(a) Hydrogen gas', kw: ['hydrogen|h2'] },
        { text: '(b) The gas burns with a pop sound', kw: ['pop'] },
        { text: '(c) Zn + H2SO4 -> ZnSO4 + H2', kw: ['znso4'] },
        { text: '(d) Sodium hydroxide: 2NaOH + Zn -> Na2ZnO2 + H2', kw: ['naoh|sodium hydroxide'] }
      ],
      model: '(a) Hydrogen gas.\n(b) The gas burns with a pop sound.\n(c) Zn(s) + H2SO4(aq) -> ZnSO4(aq) + H2(g)\n(d) Sodium hydroxide: 2NaOH + Zn -> Na2ZnO2 (sodium zincate) + H2' },
    { marks: 4, q: 'CASE STUDY: Rohan tested four solutions with universal indicator: P = pH 4, Q = pH 1, R = pH 11, S = pH 7.\n(a) Which solution is neutral?\n(b) Which is strongly acidic?\n(c) Arrange them in increasing order of H+ ion concentration.\n(d) Which one would turn phenolphthalein pink?',
      keypoints: [
        { text: '(a) S is neutral', kw: ['neutral'] },
        { text: '(b) Q is strongly acidic', kw: ['strong'] },
        { text: '(c) R < S < P < Q', kw: ['r', 's', 'p', 'q', '<|increas|order'] },
        { text: '(d) R (basic)', kw: ['pink|basic|base'] }
      ],
      model: '(a) S (pH 7) is neutral.\n(b) Q (pH 1) is strongly acidic.\n(c) The lower the pH, the more H+ ions. Increasing order of H+ ion concentration: R (11) < S (7) < P (4) < Q (1).\n(d) R (pH 11) is basic, so it turns phenolphthalein pink.' }
  ]
});
