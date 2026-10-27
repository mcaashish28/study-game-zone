// CBSE Class 10 Science (NCERT) — Chapter 4: Carbon and its Compounds
// Formulas are written plainly (C2H5OH, CH3COOH); the app shows the numbers as subscripts.
// Write "->" for the reaction arrow.
SWG.addChapter('science', {
  id: 'sci-ch04',
  number: 4,
  title: 'Carbon and its Compounds',
  icon: '💎',

  topics: {
    bond: 'Covalent Bonding',
    allo: 'Allotropes & Versatility',
    hydro: 'Hydrocarbons & Isomers',
    func: 'Functional Groups & Homologous Series',
    name: 'Naming Carbon Compounds',
    react: 'Chemical Properties',
    eth: 'Ethanol',
    acid: 'Ethanoic Acid',
    soap: 'Soaps & Detergents'
  },

  summary: [
    'Carbon (2,4) has 4 valence electrons. It cannot easily gain or lose 4 electrons, so it SHARES electrons and forms covalent bonds.',
    'Covalent compounds have low melting and boiling points and do not conduct electricity, because they have no ions.',
    'Carbon is versatile because of catenation (bonding with other carbon atoms into chains, branches and rings) and tetravalency (4 bonds).',
    'Diamond, graphite and fullerene (C60) are allotropes of carbon. Diamond is the hardest; graphite is slippery and conducts electricity.',
    'Saturated hydrocarbons (alkanes) have only single bonds. Unsaturated ones have double (alkenes) or triple (alkynes) bonds.',
    'A homologous series has the same functional group; successive members differ by CH2 (14 u). Functional groups: halo, -OH, -CHO, -CO-, -COOH.',
    'Reactions: combustion, oxidation (ethanol -> ethanoic acid), addition (hydrogenation of oils with Ni catalyst), substitution (methane + chlorine in sunlight).',
    'Ethanol reacts with sodium to give hydrogen; with hot conc. H2SO4 it gives ethene. Ethanoic acid + ethanol -> ester (sweet smell); ester + NaOH -> soap (saponification).',
    'Soap molecules form micelles that trap oily dirt. Soaps form scum in hard water; detergents do not.'
  ],

  flashcards: [
    { topic: 'bond', front: 'Atomic number and electronic configuration of carbon', back: 'Atomic number 6\nConfiguration: 2, 4\nIt has 4 valence electrons, so its valency is 4 (tetravalent).' },
    { topic: 'bond', front: 'Why can carbon not form C⁴⁺ or C⁴⁻ ions?', back: 'C⁴⁻: gaining 4 electrons is hard — 6 protons cannot hold 10 electrons.\nC⁴⁺: losing 4 electrons needs a lot of energy.\nSo carbon SHARES electrons instead.' },
    { topic: 'bond', front: 'What is a covalent bond?', back: 'A bond formed by SHARING a pair of electrons between two atoms. Both atoms get a stable outer shell.' },
    { topic: 'bond', front: 'Single, double and triple bonds — give an example of each.', back: 'Single (1 shared pair): H2, Cl2, CH4\nDouble (2 shared pairs): O2, C2H4 (ethene)\nTriple (3 shared pairs): N2, C2H2 (ethyne)' },
    { topic: 'bond', front: 'Electron dot structure of methane (CH4)', back: 'Carbon in the centre shares one electron pair with each of 4 hydrogen atoms.\n4 single covalent bonds. Carbon gets 8 electrons; each H gets 2.' },
    { topic: 'bond', front: 'Electron dot structure of oxygen (O2) and nitrogen (N2)', back: 'O (2,6) needs 2 electrons: two O atoms share 2 pairs -> double bond, O=O\nN (2,5) needs 3 electrons: two N atoms share 3 pairs -> triple bond' },
    { topic: 'bond', front: 'Properties of covalent compounds', back: '• Low melting and boiling points (weak forces between molecules)\n• Poor conductors of electricity (no ions)\n• Mostly insoluble in water' },
    { topic: 'bond', front: 'Why do covalent compounds not conduct electricity?', back: 'They are made of molecules, not ions. There are no charged particles free to carry current.' },
    { topic: 'allo', front: 'What are allotropes? Name 3 allotropes of carbon.', back: 'Different physical forms of the same element.\nCarbon: diamond, graphite and fullerene (C60).' },
    { topic: 'allo', front: 'Structure and properties of diamond', back: 'Each carbon is bonded to 4 other carbons -> rigid 3-D structure.\n• Hardest natural substance\n• Does not conduct electricity\n• Used in cutting tools and jewellery' },
    { topic: 'allo', front: 'Structure and properties of graphite', back: 'Each carbon is bonded to 3 other carbons in a flat hexagonal layer; one of the bonds is a double bond. Layers sit on top of one another.\n• Smooth and slippery (used as lubricant, pencil lead)\n• Good conductor of electricity (used as electrodes)' },
    { topic: 'allo', front: 'What is fullerene?', back: 'An allotrope of carbon. The first one found was C60 — 60 carbon atoms arranged like a football. Named after the architect Buckminster Fuller.' },
    { topic: 'allo', front: 'Why does carbon form such a huge number of compounds?', back: '1. Catenation — it bonds with other carbon atoms to form long chains, branches and rings.\n2. Tetravalency — it forms 4 bonds, with C, H, O, N, S, Cl and other elements.\nCarbon bonds are also very strong because the carbon atom is small.' },
    { topic: 'allo', front: 'What is catenation?', back: 'The unique ability of carbon to form bonds with other carbon atoms, giving long chains, branched chains and rings. (Silicon shows it a little, but its compounds are reactive.)' },
    { topic: 'allo', front: 'Why are carbon compounds stable?', back: 'Carbon is small, so its nucleus holds the shared electron pairs strongly. This makes carbon bonds very strong.' },
    { topic: 'hydro', front: 'What are hydrocarbons?', back: 'Compounds made of ONLY carbon and hydrogen.\ne.g. methane CH4, ethene C2H4, ethyne C2H2' },
    { topic: 'hydro', front: 'Saturated vs unsaturated hydrocarbons', back: 'Saturated: only single bonds between carbons (alkanes), e.g. ethane C2H6\nUnsaturated: at least one double or triple bond (alkenes, alkynes), e.g. ethene C2H4, ethyne C2H2' },
    { topic: 'hydro', front: 'General formulas: alkanes, alkenes, alkynes', back: 'Alkanes: CₙH₂ₙ₊₂ (single bonds)\nAlkenes: CₙH₂ₙ (one double bond)\nAlkynes: CₙH₂ₙ₋₂ (one triple bond)' },
    { topic: 'hydro', front: 'First 6 alkanes', back: 'Methane CH4\nEthane C2H6\nPropane C3H8\nButane C4H10\nPentane C5H12\nHexane C6H14' },
    { topic: 'hydro', front: 'First 3 alkenes and alkynes', back: 'Alkenes: ethene C2H4, propene C3H6, butene C4H8\nAlkynes: ethyne C2H2, propyne C3H4, butyne C4H6\n(There is no "methene" — you need at least 2 carbons for a double bond.)' },
    { topic: 'hydro', front: 'What are structural isomers? Give an example.', back: 'Compounds with the SAME molecular formula but DIFFERENT structures.\nButane C4H10 has two: a straight chain (n-butane) and a branched chain (isobutane).' },
    { topic: 'hydro', front: 'Name two cyclic (ring) hydrocarbons.', back: 'Cyclohexane C6H12 — a ring of 6 carbons with single bonds\nBenzene C6H6 — a ring of 6 carbons with alternate single and double bonds' },
    { topic: 'hydro', front: 'What is a heteroatom?', back: 'An atom other than carbon or hydrogen in a carbon compound, e.g. O, N, S, Cl, Br. Heteroatoms give the compound its special properties.' },
    { topic: 'func', front: 'What is a functional group?', back: 'An atom or group of atoms (heteroatom) that gives a carbon compound its characteristic chemical properties, whatever the length of the chain.' },
    { topic: 'func', front: 'Functional groups: formula and name ending', back: 'Halo (Cl, Br): prefix chloro-, bromo-\nAlcohol -OH: suffix -ol\nAldehyde -CHO: suffix -al\nKetone -CO-: suffix -one\nCarboxylic acid -COOH: suffix -oic acid\nDouble bond: -ene\nTriple bond: -yne' },
    { topic: 'func', front: 'What is a homologous series?', back: 'A series of carbon compounds with the same functional group and the same general formula, in which successive members differ by a -CH2- unit.' },
    { topic: 'func', front: 'Features of a homologous series', back: '• Same functional group and general formula\n• Successive members differ by CH2 = 14 u in mass\n• Similar chemical properties\n• Physical properties (melting point, boiling point) change gradually with size' },
    { topic: 'func', front: 'Why do members of a homologous series have similar chemical properties?', back: 'Because chemical properties depend on the functional group, which is the same in all members.' },
    { topic: 'func', front: 'Homologous series of alcohols', back: 'Methanol CH3OH\nEthanol C2H5OH\nPropanol C3H7OH\nButanol C4H9OH\nEach differs from the next by CH2.' },
    { topic: 'name', front: 'Steps to name a carbon compound', back: '1. Count the carbons -> root: meth (1), eth (2), prop (3), but (4), pent (5), hex (6)\n2. Add the prefix or suffix of the functional group\n3. If the suffix starts with a vowel (a, e, i, o, u), drop the final "e": propane -> propanol' },
    { topic: 'name', front: 'Name the 3-carbon compounds: CH3CH2CH2Cl, CH3CH2CH2OH, CH3CH2CHO', back: 'CH3CH2CH2Cl — chloropropane\nCH3CH2CH2OH — propanol\nCH3CH2CHO — propanal' },
    { topic: 'name', front: 'Name: CH3COCH3, CH3CH2COOH, CH3CH=CH2', back: 'CH3COCH3 — propanone (a ketone; acetone)\nCH3CH2COOH — propanoic acid\nCH3CH=CH2 — propene' },
    { topic: 'name', front: 'Name: HCHO, CH3CHO, CH3COOH, CH3Br', back: 'HCHO — methanal (formaldehyde)\nCH3CHO — ethanal\nCH3COOH — ethanoic acid (acetic acid)\nCH3Br — bromomethane' },
    { topic: 'name', front: 'Why can there be no ketone with fewer than 3 carbons?', back: 'In a ketone, the C=O carbon must be bonded to TWO other carbons. So the smallest ketone is propanone, CH3COCH3.' },
    { topic: 'react', front: 'What happens when carbon compounds burn (combustion)?', back: 'They burn in oxygen to give carbon dioxide, water, heat and light.\nCH4 + 2O2 -> CO2 + 2H2O + heat and light' },
    { topic: 'react', front: 'Flame: saturated vs unsaturated hydrocarbons', back: 'Saturated: clean blue flame\nUnsaturated: yellow, sooty (smoky) flame — they do not burn completely' },
    { topic: 'react', front: 'Why does a gas stove flame turn yellow and blacken the vessel?', back: 'The air holes are blocked, so there is not enough oxygen. Fuel burns incompletely and gives soot (unburnt carbon). Clean the holes to get a blue flame.' },
    { topic: 'react', front: 'Why do coal and petroleum cause pollution when burnt?', back: 'They contain some nitrogen and sulphur. On burning, they form oxides of sulphur and nitrogen, which pollute the air and cause acid rain.' },
    { topic: 'react', front: 'Why do some substances burn with a flame and others (like charcoal) only glow?', back: 'A flame forms only when gaseous substances burn. Wax and LPG vaporise and give a flame; charcoal and coal glow red without a flame.' },
    { topic: 'react', front: 'Oxidation of ethanol', back: 'Ethanol is oxidised to ethanoic acid by alkaline potassium permanganate (KMnO4) or acidified potassium dichromate (K2Cr2O7) on heating.\nC2H5OH + O2 -> CH3COOH + H2O' },
    { topic: 'react', front: 'What is an oxidising agent? Give 2 examples.', back: 'A substance that adds oxygen to another substance.\nAlkaline KMnO4, acidified K2Cr2O7' },
    { topic: 'react', front: 'In the oxidation of ethanol, why does the purple colour of KMnO4 disappear at first?', back: 'KMnO4 is used up as it oxidises ethanol. Once all the ethanol has reacted, extra KMnO4 stays and the purple colour remains.' },
    { topic: 'react', front: 'What is an addition reaction?', back: 'Unsaturated hydrocarbons add hydrogen in the presence of a catalyst (nickel or palladium) to form saturated hydrocarbons.\nC2H4 + H2 -> C2H6 (Ni catalyst)' },
    { topic: 'react', front: 'What is hydrogenation of vegetable oil?', back: 'Adding hydrogen to unsaturated vegetable oils with a nickel catalyst. This turns liquid oil into solid fat — vanaspati ghee.' },
    { topic: 'react', front: 'Why are vegetable oils healthier than animal fats?', back: 'Vegetable oils are unsaturated. Animal fats (butter, ghee) are saturated and are said to be harmful for health (raise cholesterol).' },
    { topic: 'react', front: 'What is a catalyst?', back: 'A substance that changes the speed of a reaction without itself being used up or changed. e.g. nickel in hydrogenation.' },
    { topic: 'react', front: 'What is a substitution reaction?', back: 'One atom (or group) is replaced by another.\nSaturated hydrocarbons react with chlorine in SUNLIGHT; H atoms are replaced by Cl one by one.\nCH4 + Cl2 -> CH3Cl + HCl' },
    { topic: 'eth', front: 'Properties of ethanol', back: '• Liquid at room temperature\n• Commonly called alcohol\n• Good solvent; dissolves in water in all proportions\n• Does not change the colour of litmus (neutral)' },
    { topic: 'eth', front: 'Uses of ethanol', back: '• Active ingredient of alcoholic drinks\n• Solvent in medicines: tincture iodine, cough syrups, tonics\n• Fuel additive mixed with petrol\n• Making other chemicals' },
    { topic: 'eth', front: 'Why is drinking alcohol harmful?', back: 'It slows down body processes, affects judgement and causes drowsiness. Long-term use damages health.\nEven small amounts of METHANOL can cause blindness and death.' },
    { topic: 'eth', front: 'What is denatured alcohol?', back: 'Industrial ethanol mixed with poisonous methanol and a blue dye, so that it cannot be misused for drinking and can be recognised.' },
    { topic: 'eth', front: 'Ethanol + sodium -> ?', back: 'Sodium ethoxide + hydrogen gas\n2Na + 2C2H5OH -> 2C2H5ONa + H2\nThe gas burns with a pop sound (test for hydrogen).' },
    { topic: 'eth', front: 'Ethanol + hot concentrated sulphuric acid -> ?', back: 'Heated at 443 K with excess conc. H2SO4, ethanol is dehydrated to ethene.\nC2H5OH -> C2H4 + H2O\nConc. H2SO4 is a dehydrating agent (removes water).' },
    { topic: 'eth', front: 'Why is ethanol called a clean fuel?', back: 'It burns completely in air giving only CO2 and water. It is made from sugarcane, a renewable source, and is mixed with petrol in many countries.' },
    { topic: 'acid', front: 'Ethanoic acid: common name and what vinegar is', back: 'Common name: acetic acid, CH3COOH\nVinegar is a 5–8% solution of acetic acid in water, used as a preservative in pickles.' },
    { topic: 'acid', front: 'What is glacial acetic acid?', back: 'Pure ethanoic acid. Its melting point is 290 K, so it often freezes in cold weather and looks like ice (glacier).' },
    { topic: 'acid', front: 'Is ethanoic acid a strong or weak acid?', back: 'A weak acid — it does not ionise completely, unlike mineral acids like HCl.' },
    { topic: 'acid', front: 'What is esterification?', back: 'Carboxylic acid + alcohol -> ester + water, with an acid catalyst (conc. H2SO4).\nCH3COOH + C2H5OH -> CH3COOC2H5 + H2O\nEsters are sweet-smelling; used in perfumes and flavourings.' },
    { topic: 'acid', front: 'What is saponification?', back: 'An ester reacts with an alkali (NaOH) to give back the alcohol and the sodium salt of the acid.\nCH3COOC2H5 + NaOH -> CH3COONa + C2H5OH\nThis reaction is used to make soap.' },
    { topic: 'acid', front: 'Ethanoic acid + base -> ?', back: 'Salt + water\nCH3COOH + NaOH -> CH3COONa + H2O\n(CH3COONa = sodium ethanoate / sodium acetate)' },
    { topic: 'acid', front: 'Ethanoic acid + carbonate or hydrogencarbonate -> ?', back: 'Salt + water + carbon dioxide\n2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2\nCH3COOH + NaHCO3 -> CH3COONa + H2O + CO2' },
    { topic: 'acid', front: 'How can you tell ethanol and ethanoic acid apart by a simple test?', back: 'Add sodium hydrogencarbonate. Ethanoic acid gives brisk effervescence of CO2 (turns lime water milky). Ethanol gives no bubbles.\nAlso: ethanoic acid turns blue litmus red; ethanol does not.' },
    { topic: 'soap', front: 'What are soaps?', back: 'Sodium or potassium salts of long-chain carboxylic acids (fatty acids).\ne.g. sodium stearate' },
    { topic: 'soap', front: 'Two ends of a soap molecule', back: 'Ionic (hydrophilic) end: dissolves in water — the -COO- Na+ head\nHydrocarbon (hydrophobic) end: long tail that dissolves in oil, not water' },
    { topic: 'soap', front: 'What is a micelle?', back: 'A cluster of soap molecules in water. The hydrocarbon tails point inwards (into the oily dirt) and the ionic ends point outwards (towards water).' },
    { topic: 'soap', front: 'How does soap remove oily dirt?', back: 'The oily dirt collects in the centre of the micelles. The ionic ends face the water, so the micelles form an emulsion and the dirt is washed away by water.' },
    { topic: 'soap', front: 'Why do micelles not come together to form a precipitate?', back: 'All micelles have ionic ends on the outside, so they repel each other (like charges).' },
    { topic: 'soap', front: 'Why does a soap solution look cloudy?', back: 'Micelles are large enough to scatter light, so the solution looks cloudy.' },
    { topic: 'soap', front: 'Why does soap not lather well in hard water?', back: 'Hard water contains calcium and magnesium salts. These react with soap to form an insoluble, sticky substance called SCUM, so a lot of soap is wasted.' },
    { topic: 'soap', front: 'What are detergents? Why do they work in hard water?', back: 'Ammonium or sulphonate salts of long-chain carboxylic acids.\nTheir charged ends do NOT form insoluble precipitates with calcium and magnesium ions, so they work well even in hard water.\nUsed in shampoos and washing powders.' },
    { topic: 'soap', front: 'How can you test whether water is hard?', back: 'Shake it with soap solution. Hard water gives little foam and forms scum; soft water gives lots of foam.' }
  ],

  quiz: [
    { topic: 'bond', q: 'The electronic configuration of carbon is…', options: ['2, 6', '2, 4', '2, 8, 4', '2, 2'], answer: 1, explain: 'Atomic number 6 -> 2, 4. It has 4 valence electrons.' },
    { topic: 'bond', q: 'Carbon forms compounds mainly by…', options: ['Losing electrons', 'Gaining electrons', 'Sharing electrons', 'Transferring protons'], answer: 2, explain: 'It forms covalent bonds by sharing electrons.' },
    { topic: 'bond', q: 'The bond between two nitrogen atoms in N2 is a…', options: ['Single bond', 'Double bond', 'Triple bond', 'Ionic bond'], answer: 2, explain: 'N (2,5) needs 3 electrons, so 3 pairs are shared.' },
    { topic: 'bond', q: 'The O2 molecule has a…', options: ['Single bond', 'Double bond', 'Triple bond', 'Ionic bond'], answer: 1, explain: 'Each O (2,6) needs 2 electrons, so 2 pairs are shared.' },
    { topic: 'bond', q: 'How many single covalent bonds are there in methane (CH4)?', options: ['2', '3', '4', '5'], answer: 2, explain: 'Carbon shares one electron pair with each of the 4 hydrogens.' },
    { topic: 'bond', q: 'Covalent compounds generally have…', options: ['High melting points', 'Low melting points', 'Ions', 'Good conductivity'], answer: 1, explain: 'The forces between molecules are weak.' },
    { topic: 'bond', q: 'Covalent compounds are poor conductors of electricity because…', options: ['They are solids', 'They have no free ions', 'They have high melting points', 'They are metals'], answer: 1, explain: 'No charged particles to carry current.' },
    { topic: 'bond', q: 'The valency of carbon is…', options: ['2', '3', '4', '6'], answer: 2, explain: 'Carbon is tetravalent.' },
    { topic: 'allo', q: 'Which allotrope of carbon conducts electricity?', options: ['Diamond', 'Graphite', 'Fullerene', 'None'], answer: 1, explain: 'Graphite is used to make electrodes.' },
    { topic: 'allo', q: 'In diamond, each carbon atom is bonded to…', options: ['2 carbon atoms', '3 carbon atoms', '4 carbon atoms', '6 carbon atoms'], answer: 2, explain: 'This gives a rigid 3-D structure — the hardest natural substance.' },
    { topic: 'allo', q: 'In graphite, each carbon atom is bonded to…', options: ['2 carbon atoms', '3 carbon atoms', '4 carbon atoms', '1 carbon atom'], answer: 1, explain: 'It forms flat hexagonal layers.' },
    { topic: 'allo', q: 'Fullerene C60 is shaped like a…', options: ['Pyramid', 'Football', 'Cube', 'Flat sheet'], answer: 1, explain: 'Named after architect Buckminster Fuller.' },
    { topic: 'allo', q: 'The ability of carbon to form bonds with other carbon atoms is called…', options: ['Tetravalency', 'Catenation', 'Isomerism', 'Hydrogenation'], answer: 1, explain: 'It forms chains, branches and rings.' },
    { topic: 'allo', q: 'Graphite is used as a lubricant because it is…', options: ['Hard', 'Smooth and slippery', 'A good conductor', 'Transparent'], answer: 1, explain: 'Its layers slide over each other.' },
    { topic: 'hydro', q: 'Compounds of only carbon and hydrogen are called…', options: ['Carbohydrates', 'Hydrocarbons', 'Alcohols', 'Esters'], answer: 1, explain: 'e.g. methane, ethene, ethyne.' },
    { topic: 'hydro', q: 'Which of these is a saturated hydrocarbon?', options: ['C2H4', 'C2H2', 'C2H6', 'C3H6'], answer: 2, explain: 'Ethane C2H6 has only single bonds (CₙH₂ₙ₊₂).' },
    { topic: 'hydro', q: 'The general formula of alkenes is…', options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CnHn'], answer: 1, explain: 'e.g. ethene C2H4.' },
    { topic: 'hydro', q: 'Ethyne (C2H2) has a…', options: ['Single bond', 'Double bond', 'Triple bond', 'No bond between carbons'], answer: 2, explain: 'Alkynes have a triple bond.' },
    { topic: 'hydro', q: 'The formula of butane is…', options: ['C4H8', 'C4H10', 'C4H6', 'C3H8'], answer: 1, explain: 'Alkane: CₙH₂ₙ₊₂ with n = 4.' },
    { topic: 'hydro', q: 'Compounds with the same molecular formula but different structures are called…', options: ['Allotropes', 'Isotopes', 'Structural isomers', 'Homologues'], answer: 2, explain: 'e.g. n-butane and isobutane (C4H10).' },
    { topic: 'hydro', q: 'The formula of benzene is…', options: ['C6H12', 'C6H6', 'C6H14', 'C5H12'], answer: 1, explain: 'A ring with alternate single and double bonds.' },
    { topic: 'hydro', q: 'How many isomers does butane have?', options: ['1', '2', '3', '4'], answer: 1, explain: 'Straight chain (n-butane) and branched (isobutane).' },
    { topic: 'func', q: 'The functional group of alcohols is…', options: ['-CHO', '-COOH', '-OH', '-CO-'], answer: 2, explain: 'Suffix: -ol' },
    { topic: 'func', q: 'The functional group of aldehydes is…', options: ['-CHO', '-COOH', '-OH', '-CO-'], answer: 0, explain: 'Suffix: -al' },
    { topic: 'func', q: 'The functional group of carboxylic acids is…', options: ['-CHO', '-COOH', '-OH', '-CO-'], answer: 1, explain: 'Suffix: -oic acid' },
    { topic: 'func', q: 'Successive members of a homologous series differ by…', options: ['CH', 'CH2', 'CH3', 'C2H4'], answer: 1, explain: 'A difference of 14 u in molecular mass.' },
    { topic: 'func', q: 'The difference in molecular mass between successive members of a homologous series is…', options: ['12 u', '14 u', '16 u', '18 u'], answer: 1, explain: 'CH2 = 12 + 2 = 14 u' },
    { topic: 'func', q: 'Members of a homologous series have similar…', options: ['Melting points', 'Boiling points', 'Chemical properties', 'Molecular masses'], answer: 2, explain: 'Because they have the same functional group. Physical properties change gradually.' },
    { topic: 'func', q: 'Which is the next member of the series CH4, C2H6, C3H8…?', options: ['C4H8', 'C4H10', 'C3H10', 'C5H12'], answer: 1, explain: 'Add CH2: C3H8 + CH2 = C4H10 (butane).' },
    { topic: 'name', q: 'The IUPAC name of CH3CH2CHO is…', options: ['Propanol', 'Propanal', 'Propanone', 'Propanoic acid'], answer: 1, explain: '3 carbons + aldehyde (-al).' },
    { topic: 'name', q: 'The IUPAC name of CH3COCH3 is…', options: ['Propanal', 'Propanone', 'Ethanone', 'Propanol'], answer: 1, explain: 'A 3-carbon ketone (-one), also called acetone.' },
    { topic: 'name', q: 'CH3CH2CH2Cl is named…', options: ['Chloroethane', 'Chloropropane', 'Propyl chloride acid', 'Chlorobutane'], answer: 1, explain: 'Halo groups are added as a prefix.' },
    { topic: 'name', q: 'The common name of ethanoic acid is…', options: ['Formic acid', 'Acetic acid', 'Citric acid', 'Lactic acid'], answer: 1, explain: 'CH3COOH' },
    { topic: 'name', q: 'HCHO is called…', options: ['Methanol', 'Methanal', 'Methanoic acid', 'Ethanal'], answer: 1, explain: 'Methanal (formaldehyde), 1 carbon + aldehyde.' },
    { topic: 'name', q: 'The root word for a 4-carbon compound is…', options: ['Prop', 'But', 'Pent', 'Eth'], answer: 1, explain: 'Meth 1, eth 2, prop 3, but 4, pent 5, hex 6.' },
    { topic: 'name', q: 'CH3CH=CH2 is…', options: ['Propane', 'Propene', 'Propyne', 'Ethene'], answer: 1, explain: '3 carbons with a double bond (-ene).' },
    { topic: 'react', q: 'Saturated hydrocarbons burn with a…', options: ['Yellow sooty flame', 'Clean blue flame', 'Green flame', 'No flame'], answer: 1, explain: 'Unsaturated ones give a yellow sooty flame.' },
    { topic: 'react', q: 'The flame of a gas stove turns yellow. This means…', options: ['Too much oxygen', 'The air holes are blocked', 'The gas is pure', 'The vessel is wet'], answer: 1, explain: 'Incomplete combustion gives soot.' },
    { topic: 'react', q: 'Conversion of ethanol to ethanoic acid is an example of…', options: ['Addition', 'Substitution', 'Oxidation', 'Saponification'], answer: 2, explain: 'Using alkaline KMnO4 or acidified K2Cr2O7.' },
    { topic: 'react', q: 'Which of these is an oxidising agent?', options: ['Nickel', 'Alkaline KMnO4', 'Sodium', 'Hydrogen'], answer: 1, explain: 'Acidified K2Cr2O7 is another.' },
    { topic: 'react', q: 'Hydrogenation of vegetable oils uses the catalyst…', options: ['Iron', 'Nickel', 'Copper', 'Platinum'], answer: 1, explain: 'Nickel (or palladium). It gives vanaspati ghee.' },
    { topic: 'react', q: 'Methane reacts with chlorine in sunlight. This is…', options: ['Addition', 'Substitution', 'Oxidation', 'Combustion'], answer: 1, explain: 'H is replaced by Cl: CH4 + Cl2 -> CH3Cl + HCl' },
    { topic: 'react', q: 'Which compound will undergo an addition reaction?', options: ['CH4', 'C2H6', 'C2H4', 'C3H8'], answer: 2, explain: 'Only unsaturated compounds (with double or triple bonds) undergo addition.' },
    { topic: 'react', q: 'Burning of coal and petroleum produces oxides of…', options: ['Sodium and calcium', 'Sulphur and nitrogen', 'Iron and copper', 'Helium and neon'], answer: 1, explain: 'These pollute the air and cause acid rain.' },
    { topic: 'react', q: 'Which of these is healthier for cooking?', options: ['Animal fat', 'Vanaspati ghee', 'Vegetable oil', 'Butter'], answer: 2, explain: 'Vegetable oils are unsaturated; animal fats are saturated.' },
    { topic: 'eth', q: 'Ethanol reacts with sodium to give…', options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Chlorine'], answer: 1, explain: '2Na + 2C2H5OH -> 2C2H5ONa + H2' },
    { topic: 'eth', q: 'Ethanol heated with excess conc. H2SO4 at 443 K gives…', options: ['Ethane', 'Ethene', 'Ethyne', 'Ethanoic acid'], answer: 1, explain: 'Conc. H2SO4 removes water (dehydration).' },
    { topic: 'eth', q: 'In the dehydration of ethanol, concentrated H2SO4 acts as a…', options: ['Reducing agent', 'Dehydrating agent', 'Oxidising agent only', 'Base'], answer: 1, explain: 'It removes water from ethanol.' },
    { topic: 'eth', q: 'Denatured alcohol contains ethanol mixed with…', options: ['Water', 'Methanol and a blue dye', 'Vinegar', 'Sugar'], answer: 1, explain: 'This makes it unfit for drinking.' },
    { topic: 'eth', q: 'Even small amounts of which alcohol can cause blindness?', options: ['Ethanol', 'Methanol', 'Propanol', 'Glycerol'], answer: 1, explain: 'Methanol is very poisonous.' },
    { topic: 'eth', q: 'Ethanol is used in…', options: ['Tincture iodine and cough syrups', 'Fertilisers', 'Bleaching', 'Plaster'], answer: 0, explain: 'It is a good solvent for medicines.' },
    { topic: 'acid', q: 'Vinegar is a solution of ___ acetic acid in water.', options: ['1–2%', '5–8%', '20–30%', '50%'], answer: 1, explain: 'It is used to preserve pickles.' },
    { topic: 'acid', q: 'Pure ethanoic acid is called glacial acetic acid because…', options: ['It is found in glaciers', 'It freezes in cold weather', 'It is very cold', 'It is blue'], answer: 1, explain: 'Its melting point is 290 K.' },
    { topic: 'acid', q: 'Ethanoic acid + ethanol (with acid catalyst) gives…', options: ['Soap', 'Ester', 'Ethene', 'Ethanal'], answer: 1, explain: 'Esterification: CH3COOH + C2H5OH -> CH3COOC2H5 + H2O' },
    { topic: 'acid', q: 'Esters are known for their…', options: ['Bitter taste', 'Sweet smell', 'Blue colour', 'Sour taste'], answer: 1, explain: 'Used in perfumes and flavourings.' },
    { topic: 'acid', q: 'Ester + NaOH -> alcohol + sodium salt of acid. This is called…', options: ['Esterification', 'Saponification', 'Hydrogenation', 'Dehydration'], answer: 1, explain: 'It is used to make soap.' },
    { topic: 'acid', q: 'Ethanoic acid reacts with sodium hydrogencarbonate to give the gas…', options: ['Hydrogen', 'Oxygen', 'Carbon dioxide', 'Chlorine'], answer: 2, explain: 'CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2' },
    { topic: 'acid', q: 'Ethanoic acid is a…', options: ['Strong acid', 'Weak acid', 'Strong base', 'Neutral substance'], answer: 1, explain: 'It does not ionise completely in water.' },
    { topic: 'soap', q: 'Soaps are sodium or potassium salts of…', options: ['Short-chain alcohols', 'Long-chain carboxylic acids', 'Mineral acids', 'Hydrocarbons'], answer: 1, explain: 'e.g. sodium stearate.' },
    { topic: 'soap', q: 'The hydrocarbon tail of a soap molecule is…', options: ['Hydrophilic', 'Hydrophobic', 'Ionic', 'Charged'], answer: 1, explain: 'It dissolves in oil, not water.' },
    { topic: 'soap', q: 'In a micelle, the ionic ends of soap molecules point…', options: ['Inwards', 'Outwards, towards water', 'Towards the oil', 'Randomly'], answer: 1, explain: 'The tails point inwards into the oily dirt.' },
    { topic: 'soap', q: 'Soap forms scum in hard water because of…', options: ['Sodium salts', 'Calcium and magnesium salts', 'Chlorine', 'Dissolved oxygen'], answer: 1, explain: 'They form an insoluble precipitate with soap.' },
    { topic: 'soap', q: 'Which works well even in hard water?', options: ['Soap', 'Detergent', 'Both', 'Neither'], answer: 1, explain: 'Detergents do not form scum with Ca and Mg ions.' },
    { topic: 'soap', q: 'Detergents are used in…', options: ['Shampoos and washing powders', 'Fuels', 'Fertilisers', 'Food'], answer: 0, explain: 'They clean well in hard water.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'bond', a: 'Carbon forms covalent compounds.', r: 'Carbon cannot easily gain or lose 4 electrons.', answer: 0, explain: 'Both true, and R explains A — so carbon shares electrons.' },
      { topic: 'bond', a: 'Covalent compounds are good conductors of electricity.', r: 'Covalent compounds are made of molecules, not ions.', answer: 3, explain: 'A is false — they are POOR conductors. R is true.' },
      { topic: 'allo', a: 'Graphite is a good conductor of electricity.', r: 'Each carbon atom in graphite is bonded to three other carbon atoms.', answer: 1, explain: 'Both true, but R does not explain why it conducts (free electrons from the fourth bond do).' },
      { topic: 'allo', a: 'Diamond is the hardest natural substance.', r: 'In diamond each carbon atom is bonded to four other carbon atoms in a rigid 3-D structure.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'hydro', a: 'Ethene undergoes addition reactions.', r: 'Ethene is a saturated hydrocarbon.', answer: 2, explain: 'A is true, but R is false — ethene is UNSATURATED (has a double bond).' },
      { topic: 'func', a: 'Methanol and ethanol have similar chemical properties.', r: 'They have the same functional group, -OH.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'react', a: 'Unsaturated hydrocarbons burn with a yellow sooty flame.', r: 'Unsaturated hydrocarbons do not burn completely in air.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'react', a: 'Vegetable oils are converted to vanaspati ghee by hydrogenation.', r: 'Hydrogenation is a substitution reaction.', answer: 2, explain: 'A is true, but R is false — hydrogenation is an ADDITION reaction.' },
      { topic: 'eth', a: 'Industrial alcohol is coloured blue.', r: 'This helps people recognise denatured alcohol and prevents misuse.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'acid', a: 'Pure ethanoic acid is called glacial acetic acid.', r: 'Ethanoic acid is a weak acid.', answer: 1, explain: 'Both true, but being weak does not explain the name — it freezes in cold weather (melting point 290 K).' },
      { topic: 'soap', a: 'Soap does not work well in hard water.', r: 'Calcium and magnesium ions in hard water form scum with soap.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'soap', a: 'Micelles do not come together to form a precipitate.', r: 'Detergents can be used in hard water.', answer: 1, explain: 'Both true, but R does not explain A — micelles repel each other because of their ionic ends.' }
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
    { title: 'Functional Groups', pairs: [
      ['-OH', 'Alcohol (-ol)'],
      ['-CHO', 'Aldehyde (-al)'],
      ['-CO-', 'Ketone (-one)'],
      ['-COOH', 'Carboxylic acid'],
      ['-Cl, -Br', 'Halo (chloro, bromo)'],
      ['C=C', 'Alkene (-ene)']
    ] },
    { title: 'Name the Compound', pairs: [
      ['CH3CH2CH2OH', 'Propanol'],
      ['CH3CH2CHO', 'Propanal'],
      ['CH3COCH3', 'Propanone'],
      ['CH3COOH', 'Ethanoic acid'],
      ['HCHO', 'Methanal'],
      ['CH3Cl', 'Chloromethane']
    ] },
    { title: 'Hydrocarbons', pairs: [
      ['CH4', 'Methane'],
      ['C2H4', 'Ethene'],
      ['C2H2', 'Ethyne'],
      ['C4H10', 'Butane'],
      ['C6H6', 'Benzene'],
      ['C6H12', 'Cyclohexane']
    ] },
    { title: 'Types of Reactions', pairs: [
      ['CH4 + Cl2 in sunlight', 'Substitution'],
      ['C2H4 + H2 with nickel', 'Addition'],
      ['Ethanol + alkaline KMnO4', 'Oxidation'],
      ['Acid + alcohol -> ester', 'Esterification'],
      ['Ester + NaOH', 'Saponification'],
      ['Ethanol + hot conc. H2SO4', 'Dehydration']
    ] },
    { title: 'Carbon Facts', pairs: [
      ['Diamond', 'Each C bonded to 4 C'],
      ['Graphite', 'Hexagonal layers; conducts'],
      ['Fullerene', 'C60, football shape'],
      ['Catenation', 'C bonds with C'],
      ['Isomers', 'Same formula, different structure'],
      ['Homologous series', 'Differ by CH2']
    ] },
    { title: 'Ethanol, Acid & Soap', pairs: [
      ['Vinegar', '5–8% acetic acid'],
      ['Glacial acetic acid', 'Freezes at 290 K'],
      ['Denatured alcohol', 'Ethanol + methanol + dye'],
      ['Esters', 'Sweet smell'],
      ['Scum', 'Soap + hard water'],
      ['Detergent', 'Works in hard water']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'Burning methane', reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'], answer: [1, 2, 1, 2] },
    { name: 'Burning ethane', reactants: ['C2H6', 'O2'], products: ['CO2', 'H2O'], answer: [2, 7, 4, 6] },
    { name: 'Burning propane', reactants: ['C3H8', 'O2'], products: ['CO2', 'H2O'], answer: [1, 5, 3, 4] },
    { name: 'Burning butane (LPG)', reactants: ['C4H10', 'O2'], products: ['CO2', 'H2O'], answer: [2, 13, 8, 10] },
    { name: 'Burning ethene', reactants: ['C2H4', 'O2'], products: ['CO2', 'H2O'], answer: [1, 3, 2, 2] },
    { name: 'Burning ethyne (welding)', reactants: ['C2H2', 'O2'], products: ['CO2', 'H2O'], answer: [2, 5, 4, 2] },
    { name: 'Burning ethanol', reactants: ['C2H5OH', 'O2'], products: ['CO2', 'H2O'], answer: [1, 3, 2, 3] },
    { name: 'Burning carbon', reactants: ['C', 'O2'], products: ['CO2'], answer: [1, 1, 1] },
    { name: 'Oxidation of ethanol', reactants: ['C2H5OH', 'O2'], products: ['CH3COOH', 'H2O'], answer: [1, 1, 1, 1] },
    { name: 'Addition: ethene + hydrogen', reactants: ['C2H4', 'H2'], products: ['C2H6'], answer: [1, 1, 1] },
    { name: 'Addition: ethyne + hydrogen', reactants: ['C2H2', 'H2'], products: ['C2H6'], answer: [1, 2, 1] },
    { name: 'Substitution: methane + chlorine', reactants: ['CH4', 'Cl2'], products: ['CH3Cl', 'HCl'], answer: [1, 1, 1, 1] },
    { name: 'Substitution: second step', reactants: ['CH3Cl', 'Cl2'], products: ['CH2Cl2', 'HCl'], answer: [1, 1, 1, 1] },
    { name: 'Sodium + ethanol', reactants: ['Na', 'C2H5OH'], products: ['C2H5ONa', 'H2'], answer: [2, 2, 2, 1] },
    { name: 'Dehydration of ethanol', reactants: ['C2H5OH'], products: ['C2H4', 'H2O'], answer: [1, 1, 1] },
    { name: 'Esterification', reactants: ['CH3COOH', 'C2H5OH'], products: ['CH3COOC2H5', 'H2O'], answer: [1, 1, 1, 1] },
    { name: 'Saponification', reactants: ['CH3COOC2H5', 'NaOH'], products: ['CH3COONa', 'C2H5OH'], answer: [1, 1, 1, 1] },
    { name: 'Ethanoic acid + sodium hydroxide', reactants: ['CH3COOH', 'NaOH'], products: ['CH3COONa', 'H2O'], answer: [1, 1, 1, 1] },
    { name: 'Ethanoic acid + sodium carbonate', reactants: ['CH3COOH', 'Na2CO3'], products: ['CH3COONa', 'H2O', 'CO2'], answer: [2, 1, 2, 1, 1] },
    { name: 'Ethanoic acid + baking soda', reactants: ['CH3COOH', 'NaHCO3'], products: ['CH3COONa', 'H2O', 'CO2'], answer: [1, 1, 1, 1, 1] },
    { name: 'Ethanoic acid + sodium', reactants: ['CH3COOH', 'Na'], products: ['CH3COONa', 'H2'], answer: [2, 2, 2, 1] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'Why does carbon form covalent bonds?',
      keypoints: [
        { text: 'It cannot easily gain or lose 4 electrons, so it shares electrons', kw: ['shar'] }
      ],
      model: 'Carbon has 4 valence electrons. Gaining 4 (C⁴⁻) or losing 4 (C⁴⁺) electrons is very difficult, so carbon shares electrons with other atoms and forms covalent bonds.' },
    { marks: 1, q: 'Name the functional group present in (a) propanone and (b) propanal.',
      keypoints: [
        { text: '(a) Ketone (-CO-); (b) aldehyde (-CHO)', kw: ['ketone|-co-', 'aldehyde|cho'] }
      ],
      model: '(a) Propanone — ketone group, -CO-\n(b) Propanal — aldehyde group, -CHO' },
    { marks: 1, q: 'What is glacial acetic acid?',
      keypoints: [
        { text: 'Pure ethanoic acid; freezes in cold weather (m.p. 290 K)', kw: ['pure', 'freez|290'] }
      ],
      model: 'Pure ethanoic acid is called glacial acetic acid. Its melting point is 290 K, so it often freezes in cold climates and looks like ice.' },
    { marks: 1, q: 'Why is the flame of a gas stove sometimes yellow, blackening the vessel?',
      keypoints: [
        { text: 'Air holes are blocked; incomplete combustion gives soot', kw: ['air|oxygen', 'incomplete|soot|carbon'] }
      ],
      model: 'When the air holes are blocked, there is not enough oxygen. The fuel burns incompletely, giving a yellow flame and soot (unburnt carbon) that blackens the vessel.' },
    { marks: 2, q: 'Draw the electron dot structure of methane (CH4) and describe it.',
      keypoints: [
        { text: 'Carbon in the centre shares one electron pair with each of 4 H atoms', kw: ['4|four', 'shar|pair'] },
        { text: 'Four single covalent bonds; carbon gets 8 electrons', kw: ['single|covalent', '8|eight|octet'] }
      ],
      model: 'In methane, the carbon atom (2,4) is in the centre. It shares one pair of electrons with each of the 4 hydrogen atoms.\nSo there are 4 single covalent bonds. Carbon gets 8 electrons in its outer shell, and each hydrogen gets 2 (like helium).' },
    { marks: 2, q: 'Give two reasons why carbon forms a large number of compounds.',
      keypoints: [
        { text: 'Catenation — forms chains, branches and rings with other carbon atoms', kw: ['catenation|chain'] },
        { text: 'Tetravalency — forms 4 bonds with C, H, O, N, Cl etc.', kw: ['tetravalen|valency of 4|valency 4|four bond|4 bond'] }
      ],
      model: '1. Catenation: carbon can bond with other carbon atoms to form long chains, branched chains and rings.\n2. Tetravalency: carbon has a valency of 4, so it can bond with four other atoms — carbon, hydrogen, oxygen, nitrogen, sulphur, chlorine and others.\nAlso, carbon bonds are very strong because carbon is a small atom.' },
    { marks: 2, q: 'What are structural isomers? Draw (describe) the isomers of butane.',
      keypoints: [
        { text: 'Same molecular formula, different structures', kw: ['same', 'different|structure'] },
        { text: 'Butane C4H10: straight chain (n-butane) and branched chain (isobutane)', kw: ['straight', 'branch'] }
      ],
      model: 'Structural isomers are compounds with the same molecular formula but different structures.\nButane (C4H10) has two isomers:\n• n-butane: CH3-CH2-CH2-CH3 (straight chain)\n• isobutane: CH3-CH(CH3)-CH3 (branched chain — 3 carbons in a row with one CH3 on the middle carbon)' },
    { marks: 2, q: 'Why are covalent compounds generally poor conductors of electricity and have low melting points?',
      keypoints: [
        { text: 'No ions / charged particles to carry current', kw: ['ion|charged'] },
        { text: 'Weak forces between molecules, so low melting point', kw: ['weak', 'force|attraction'] }
      ],
      model: 'Covalent compounds are made of molecules, not ions, so there are no charged particles to carry current — they are poor conductors.\nThe forces of attraction between their molecules are weak, so little energy is needed to separate them — they have low melting and boiling points.' },
    { marks: 2, q: 'What is a homologous series? Give two of its characteristics.',
      keypoints: [
        { text: 'Same functional group, successive members differ by CH2', kw: ['functional', 'ch2'] },
        { text: 'Similar chemical properties; gradual change in physical properties; differ by 14 u', kw: ['chemical|physical|14'] }
      ],
      model: 'A homologous series is a series of carbon compounds with the same functional group, in which successive members differ by a -CH2- unit.\nCharacteristics:\n• Same general formula; successive members differ in mass by 14 u\n• Similar chemical properties\n• Physical properties like melting and boiling points increase gradually with molecular mass' },
    { marks: 2, q: 'How can you distinguish between ethanol and ethanoic acid using a chemical test?',
      keypoints: [
        { text: 'Add sodium hydrogencarbonate (or carbonate)', kw: ['nahco3|hydrogencarbonate|hydrogen carbonate|bicarbonate|carbonate|baking soda'] },
        { text: 'Ethanoic acid gives CO2 bubbles (lime water milky); ethanol does not', kw: ['co2|carbon dioxide|bubble|efferves'] }
      ],
      model: 'Add a little sodium hydrogencarbonate to each.\nEthanoic acid gives brisk effervescence of carbon dioxide, which turns lime water milky:\nCH3COOH + NaHCO3 -> CH3COONa + H2O + CO2\nEthanol shows no reaction.' },
    { marks: 3, q: 'Explain with examples: (a) addition reaction, (b) substitution reaction, (c) oxidation reaction.',
      keypoints: [
        { text: '(a) Addition: unsaturated + H2 with Ni catalyst, e.g. C2H4 + H2 -> C2H6', kw: ['nickel|ni|catalyst', 'h2|hydrogen'] },
        { text: '(b) Substitution: CH4 + Cl2 -> CH3Cl + HCl in sunlight', kw: ['cl2|chlorine', 'sunlight'] },
        { text: '(c) Oxidation: ethanol -> ethanoic acid with alkaline KMnO4 / acidified K2Cr2O7', kw: ['kmno4|k2cr2o7|permanganate|dichromate', 'ethanoic|ch3cooh|acetic'] }
      ],
      model: '(a) Addition: unsaturated hydrocarbons add hydrogen in the presence of nickel or palladium catalyst.\nC2H4 + H2 -> C2H6 (Ni)\nUsed in hydrogenation of vegetable oils.\n(b) Substitution: in sunlight, chlorine replaces hydrogen atoms of saturated hydrocarbons one by one.\nCH4 + Cl2 -> CH3Cl + HCl\n(c) Oxidation: alkaline KMnO4 or acidified K2Cr2O7 oxidise ethanol to ethanoic acid on heating.\nC2H5OH -> CH3COOH' },
    { marks: 3, q: 'What is hydrogenation? What is its industrial use? Why are vegetable oils considered healthier than animal fats?',
      keypoints: [
        { text: 'Addition of hydrogen to unsaturated compounds with nickel catalyst', kw: ['hydrogen', 'nickel|ni|catalyst'] },
        { text: 'Used to make vanaspati ghee from vegetable oils', kw: ['vanaspati|ghee|solid fat'] },
        { text: 'Vegetable oils are unsaturated; animal fats are saturated and harmful', kw: ['unsaturated'] }
      ],
      model: 'Hydrogenation is the addition of hydrogen to unsaturated hydrocarbons in the presence of a catalyst like nickel or palladium.\nIndustrial use: vegetable oils are hydrogenated to make solid vanaspati ghee.\nVegetable oils have unsaturated fatty acid chains, which are healthier. Animal fats contain saturated fatty acids, which are said to be harmful for health.' },
    { marks: 3, q: 'Write three reactions of ethanol with equations.',
      keypoints: [
        { text: 'With sodium: 2Na + 2C2H5OH -> 2C2H5ONa + H2', kw: ['na', 'h2|hydrogen'] },
        { text: 'With hot conc. H2SO4 at 443 K: C2H5OH -> C2H4 + H2O', kw: ['h2so4|sulphuric', 'c2h4|ethene'] },
        { text: 'Oxidation/combustion: -> CH3COOH or CO2 + H2O', kw: ['ch3cooh|ethanoic|co2'] }
      ],
      model: '1. With sodium (gives hydrogen):\n2Na + 2C2H5OH -> 2C2H5ONa + H2\n2. Dehydration with hot concentrated H2SO4 at 443 K (gives ethene):\nC2H5OH -> C2H4 + H2O\n3. Oxidation with alkaline KMnO4 or acidified K2Cr2O7 (gives ethanoic acid):\nC2H5OH + O2 -> CH3COOH + H2O\n4. Combustion:\nC2H5OH + 3O2 -> 2CO2 + 3H2O' },
    { marks: 3, q: 'What is esterification? Describe an activity to show it. What is saponification?',
      keypoints: [
        { text: 'Acid + alcohol -> ester + water with acid catalyst: CH3COOH + C2H5OH -> CH3COOC2H5 + H2O', kw: ['ester', 'ch3cooc2h5|acid catalyst|h2so4'] },
        { text: 'Warm ethanol + glacial acetic acid + few drops conc. H2SO4 in water bath; sweet smell', kw: ['sweet|fruity|smell'] },
        { text: 'Saponification: ester + NaOH -> alcohol + sodium salt; used for soap', kw: ['naoh|sodium hydroxide|alkali', 'soap'] }
      ],
      model: 'Esterification: a carboxylic acid reacts with an alcohol in the presence of an acid catalyst to form an ester.\nCH3COOH + C2H5OH -> CH3COOC2H5 + H2O\nActivity: take 1 mL ethanol and 1 mL glacial acetic acid in a test tube with a few drops of concentrated sulphuric acid. Warm in a water bath for 5 minutes, then pour into water. A sweet (fruity) smell shows an ester has formed.\nSaponification: the ester reacts with NaOH to give back the alcohol and the sodium salt of the acid. It is used to make soap.\nCH3COOC2H5 + NaOH -> CH3COONa + C2H5OH' },
    { marks: 3, q: 'Why does soap not work well in hard water? How are detergents better?',
      keypoints: [
        { text: 'Hard water has Ca and Mg salts', kw: ['calcium|magnesium|ca|mg'] },
        { text: 'They react with soap to form insoluble scum; soap is wasted', kw: ['scum|precipitate|insoluble'] },
        { text: 'Detergents do not form insoluble precipitates, so they work in hard water', kw: ['detergent'] }
      ],
      model: 'Hard water contains calcium and magnesium salts. Soap reacts with these to form an insoluble substance called scum, so it does not lather and a lot of soap is wasted.\nDetergents are ammonium or sulphonate salts of long-chain carboxylic acids. Their charged ends do not form insoluble precipitates with calcium and magnesium ions, so they work well even in hard water.' },
    { marks: 3, q: 'Write the name and structure-formula of (a) an alcohol, (b) an aldehyde, (c) a carboxylic acid, each with 3 carbon atoms.',
      keypoints: [
        { text: '(a) Propanol CH3CH2CH2OH', kw: ['propanol'] },
        { text: '(b) Propanal CH3CH2CHO', kw: ['propanal'] },
        { text: '(c) Propanoic acid CH3CH2COOH', kw: ['propanoic'] }
      ],
      model: '(a) Propanol: CH3-CH2-CH2-OH\n(b) Propanal: CH3-CH2-CHO\n(c) Propanoic acid: CH3-CH2-COOH' },
    { marks: 5, q: 'Explain the cleansing action of soap. Why do micelles not form a precipitate? Why is a soap solution cloudy?',
      keypoints: [
        { text: 'Soap molecule has an ionic (hydrophilic) head and a long hydrocarbon (hydrophobic) tail', kw: ['ionic|hydrophilic', 'hydrocarbon|hydrophobic|tail'] },
        { text: 'In water, molecules form micelles: tails inwards, ionic ends outwards', kw: ['micelle'] },
        { text: 'Oily dirt is trapped in the centre of the micelle and washed away by water', kw: ['dirt|oil|grease', 'wash|rins|away'] },
        { text: 'Micelles repel each other because of the charged ends — no precipitate', kw: ['repel|repuls'] },
        { text: 'Micelles are large enough to scatter light — cloudy', kw: ['scatter'] }
      ],
      model: 'A soap molecule (e.g. sodium stearate) has two ends:\n• an ionic end (-COO- Na+), which is hydrophilic — it dissolves in water\n• a long hydrocarbon tail, which is hydrophobic — it dissolves in oil\nIn water, soap molecules arrange themselves into clusters called micelles: the hydrocarbon tails point inwards and the ionic ends point outwards towards the water.\nOily dirt dissolves in the tails and collects at the centre of the micelle. The micelle stays in water as an emulsion, so when we rinse, the dirt is washed away.\nMicelles do not come together to form a precipitate because their outer ionic ends have the same charge and repel each other.\nA soap solution looks cloudy because micelles are large enough to scatter light.' },
    { marks: 5, q: 'Write the reactions of ethanoic acid with (a) ethanol, (b) sodium hydroxide, (c) sodium carbonate, (d) sodium hydrogencarbonate. What is vinegar?',
      keypoints: [
        { text: '(a) Esterification: CH3COOH + C2H5OH -> CH3COOC2H5 + H2O', kw: ['ch3cooc2h5|ester'] },
        { text: '(b) CH3COOH + NaOH -> CH3COONa + H2O', kw: ['naoh', 'ch3coona'] },
        { text: '(c) 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2', kw: ['na2co3'] },
        { text: '(d) CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2', kw: ['nahco3'] },
        { text: 'Vinegar: 5–8% solution of acetic acid in water', kw: ['5|8', 'vinegar|water'] }
      ],
      model: '(a) With ethanol (acid catalyst) — esterification:\nCH3COOH + C2H5OH -> CH3COOC2H5 + H2O\n(b) With sodium hydroxide — neutralisation:\nCH3COOH + NaOH -> CH3COONa + H2O\n(c) With sodium carbonate:\n2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2\n(d) With sodium hydrogencarbonate:\nCH3COOH + NaHCO3 -> CH3COONa + H2O + CO2\nThe CO2 in (c) and (d) turns lime water milky.\nVinegar is a 5–8% solution of acetic acid (ethanoic acid) in water. It is used as a preservative in pickles.' },
    { marks: 5, q: 'Compare diamond and graphite: structure, hardness, conductivity and one use each. What is fullerene?',
      keypoints: [
        { text: 'Diamond: each C bonded to 4 C, rigid 3-D structure', kw: ['diamond', '4|four'] },
        { text: 'Graphite: each C bonded to 3 C in hexagonal layers', kw: ['graphite', '3|three', 'hexagon|layer'] },
        { text: 'Diamond hardest; graphite smooth and slippery', kw: ['hard', 'slippery|smooth|soft'] },
        { text: 'Graphite conducts electricity; diamond does not', kw: ['conduct'] },
        { text: 'Fullerene: C60, football shaped', kw: ['c60|football'] }
      ],
      model: 'Diamond: each carbon atom is bonded to four other carbon atoms, forming a rigid three-dimensional structure. It is the hardest natural substance and does not conduct electricity. Used in cutting and drilling tools and jewellery.\nGraphite: each carbon atom is bonded to three other carbon atoms in the same plane, forming hexagonal layers (one bond is a double bond). The layers slide over each other, so graphite is smooth and slippery. It is a good conductor of electricity. Used as electrodes, lubricant and pencil lead.\nFullerene is another allotrope of carbon. The first one found, C60, has 60 carbon atoms arranged like a football; it is named after the architect Buckminster Fuller.' },
    { marks: 4, q: 'CASE STUDY: Riya heated a mixture of ethanol and ethanoic acid with a few drops of concentrated sulphuric acid in a water bath. A sweet smell came from the test tube.\n(a) Name the reaction.\n(b) Write the equation.\n(c) What is the role of concentrated H2SO4?\n(d) If NaOH is added to the product, what happens? Name the reaction.',
      keypoints: [
        { text: '(a) Esterification', kw: ['esterification'] },
        { text: '(b) CH3COOH + C2H5OH -> CH3COOC2H5 + H2O', kw: ['ch3cooc2h5'] },
        { text: '(c) Acid catalyst (also removes water)', kw: ['catalyst'] },
        { text: '(d) Ester splits into ethanol and sodium ethanoate — saponification', kw: ['saponification'] }
      ],
      model: '(a) Esterification.\n(b) CH3COOH + C2H5OH -> CH3COOC2H5 + H2O (product: ethyl ethanoate, a sweet-smelling ester)\n(c) Concentrated sulphuric acid acts as a catalyst (and also absorbs the water formed).\n(d) The ester is converted back to ethanol and sodium ethanoate. This is saponification:\nCH3COOC2H5 + NaOH -> CH3COONa + C2H5OH' },
    { marks: 4, q: 'CASE STUDY: Three hydrocarbons are A = C2H6, B = C2H4, C = C2H2.\n(a) Which is saturated?\n(b) Which will undergo an addition reaction with hydrogen, and what catalyst is used?\n(c) Which burns with a clean blue flame?\n(d) Name the type of bond between the carbon atoms in C.',
      keypoints: [
        { text: '(a) A (ethane) is saturated', kw: ['ethane| a '] },
        { text: '(b) B and C, with nickel catalyst', kw: ['nickel|ni|palladium'] },
        { text: '(c) A — saturated hydrocarbons burn with a blue flame', kw: ['blue'] },
        { text: '(d) Triple bond', kw: ['triple'] }
      ],
      model: '(a) A, ethane (C2H6), is saturated — it has only single bonds.\n(b) B (ethene) and C (ethyne) are unsaturated, so they undergo addition with hydrogen in the presence of a nickel (or palladium) catalyst.\n(c) A — saturated hydrocarbons burn with a clean blue flame; B and C give a sooty flame.\n(d) C (ethyne) has a triple bond between its two carbon atoms.' },
    { marks: 4, q: 'CASE STUDY: A student wrote the formulas of the first four members of a series: CH3OH, C2H5OH, C3H7OH, C4H9OH.\n(a) What is this series called?\n(b) Name the functional group.\n(c) What is the difference in molecular mass between two successive members?\n(d) Name the second member and give one use.',
      keypoints: [
        { text: '(a) Homologous series (of alcohols)', kw: ['homologous'] },
        { text: '(b) Alcohol, -OH', kw: ['alcohol|-oh|hydroxyl'] },
        { text: '(c) 14 u (CH2)', kw: ['14'] },
        { text: '(d) Ethanol — solvent in medicines / fuel', kw: ['ethanol'] }
      ],
      model: '(a) A homologous series (of alcohols).\n(b) Alcohol group, -OH.\n(c) Successive members differ by CH2, which is 12 + 2 = 14 u.\n(d) C2H5OH is ethanol. Uses: solvent in medicines like tincture iodine and cough syrups; fuel mixed with petrol.' }
  ]
});
