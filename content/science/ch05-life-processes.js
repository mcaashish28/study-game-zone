// CBSE Class 10 Science (NCERT) — Chapter 5: Life Processes
// Formulas are written plainly (C6H12O6, CO2); the app shows the numbers as subscripts.
// Write "->" for the arrow.
SWG.addChapter('science', {
  id: 'sci-ch05',
  number: 5,
  title: 'Life Processes',
  icon: '🫀',

  topics: {
    intro: 'What are Life Processes?',
    auto: 'Photosynthesis',
    hetero: 'Heterotrophic Nutrition',
    digest: 'Human Digestion',
    resp: 'Respiration',
    breath: 'Human Respiratory System',
    heart: 'Heart & Circulation',
    blood: 'Blood, Vessels & Lymph',
    plant: 'Transport in Plants',
    excr: 'Excretion'
  },

  summary: [
    'Life processes are the basic functions that keep an organism alive: nutrition, respiration, transportation and excretion.',
    'Autotrophs (green plants) make food by photosynthesis: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O, using sunlight and chlorophyll. Gases move in and out through stomata.',
    'Heterotrophs take food from others: holozoic (Amoeba, humans), saprophytic (fungi) or parasitic (Cuscuta, tapeworm, lice).',
    'In humans: saliva (amylase) starts starch digestion; the stomach (HCl, pepsin, mucus) digests protein; the small intestine completes digestion with bile, pancreatic juice and intestinal juice; villi absorb food; the large intestine absorbs water.',
    'Glucose -> pyruvate in the cytoplasm. Then: no oxygen (yeast) -> ethanol + CO2; lack of oxygen (muscles) -> lactic acid; oxygen (mitochondria) -> CO2 + H2O + much more energy. Energy is stored as ATP.',
    'Air path: nostrils -> pharynx -> trachea -> bronchi -> bronchioles -> alveoli. Haemoglobin in RBCs carries oxygen.',
    'The human heart has 4 chambers. Double circulation keeps oxygenated and deoxygenated blood separate. Arteries carry blood away from the heart; veins bring it back; capillaries exchange materials.',
    'In plants, xylem carries water and minerals (pulled up by transpiration); phloem carries food (translocation, uses ATP).',
    'Kidneys filter blood in nephrons and make urine. Dialysis is an artificial kidney. Plants get rid of wastes through stomata, falling leaves, resins, gums and the soil.'
  ],

  flashcards: [
    { topic: 'intro', front: 'What are life processes? Name 4.', back: 'The basic processes that maintain life in an organism.\n• Nutrition\n• Respiration\n• Transportation\n• Excretion' },
    { topic: 'intro', front: 'How do we decide whether something is alive?', back: 'Visible movement is not enough. Living things show molecular movement — repair and maintenance of their structures goes on all the time, even when they seem to be sleeping.' },
    { topic: 'intro', front: 'Why do large multicellular organisms need special systems for nutrition, respiration and transport?', back: 'Diffusion is enough for single cells, but in large bodies most cells are far from the outside. Diffusion is too slow to supply oxygen and food to every cell, so special organs and a transport system are needed.' },
    { topic: 'intro', front: 'What is nutrition? Name its two main types.', back: 'Taking in food and using it for energy and growth.\n1. Autotrophic — make their own food (green plants, some bacteria)\n2. Heterotrophic — depend on others for food (animals, fungi)' },
    { topic: 'auto', front: 'What is photosynthesis? Write the equation.', back: 'The process by which green plants make carbohydrates from carbon dioxide and water, using sunlight and chlorophyll.\n6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O\n(Sunlight + chlorophyll)' },
    { topic: 'auto', front: 'Three main events of photosynthesis', back: '1. Absorption of light energy by chlorophyll\n2. Conversion of light energy to chemical energy, and splitting of water into hydrogen and oxygen\n3. Reduction of carbon dioxide to carbohydrates' },
    { topic: 'auto', front: 'Where does photosynthesis happen in a leaf cell?', back: 'In chloroplasts — the green dots in the cell that contain chlorophyll.' },
    { topic: 'auto', front: 'In what form do plants store extra carbohydrate?', back: 'As starch. It is an internal energy reserve. (Animals store it as glycogen.)' },
    { topic: 'auto', front: 'How do desert plants manage photosynthesis?', back: 'They open their stomata at NIGHT to take in CO2 (less water loss) and store it as an intermediate. In the day, they use it with the energy absorbed by chlorophyll.' },
    { topic: 'auto', front: 'What are stomata? Name 2 functions.', back: 'Tiny pores on the surface of leaves.\n• Exchange of gases (CO2 in, O2 out)\n• Loss of water vapour (transpiration)' },
    { topic: 'auto', front: 'How do stomata open and close?', back: 'Each stoma is surrounded by two guard cells.\nWater flows INTO guard cells -> they swell -> pore opens\nGuard cells lose water -> they shrink -> pore closes\nThe plant closes stomata when it does not need CO2, to save water.' },
    { topic: 'auto', front: 'Activity: how do we show chlorophyll is needed for photosynthesis?', back: 'Take a variegated leaf (green and white patches) from a plant kept in sunlight. Boil in alcohol to remove chlorophyll, then add iodine.\nOnly the parts that were GREEN turn blue-black (starch present).' },
    { topic: 'auto', front: 'Activity: how do we show CO2 is needed for photosynthesis?', back: 'Destarch two potted plants (keep in dark for 3 days). Put one under a bell jar with potassium hydroxide (KOH absorbs CO2), the other without. Keep in sunlight.\nThe leaf from the KOH plant shows NO starch in the iodine test.' },
    { topic: 'auto', front: 'Why is a plant kept in the dark before the starch test?', back: 'To destarch it — the plant uses up its stored starch, so any starch found later was made during the experiment.' },
    { topic: 'auto', front: 'What raw materials do plants take from the soil, besides water?', back: 'Nitrogen, phosphorus, iron, magnesium and other minerals. Nitrogen is taken as inorganic nitrates or nitrites (used to make proteins).' },
    { topic: 'hetero', front: 'Saprophytic nutrition', back: 'Organisms break down food OUTSIDE their body and then absorb it.\nExamples: fungi like bread mould, yeast, mushrooms.' },
    { topic: 'hetero', front: 'Parasitic nutrition', back: 'Organisms get food from another living organism (the host) without killing it.\nExamples: Cuscuta (amar-bel), ticks, lice, leeches, tapeworms.' },
    { topic: 'hetero', front: 'Holozoic nutrition', back: 'Taking in whole food and breaking it down inside the body.\nExamples: Amoeba, humans, most animals.' },
    { topic: 'hetero', front: 'How does Amoeba take in food?', back: 'It surrounds the food with finger-like projections (pseudopodia), which fuse to form a food vacuole. Food is broken down inside the vacuole and absorbed; undigested material is thrown out at the surface.' },
    { topic: 'hetero', front: 'How does Paramecium take in food?', back: 'Paramecium has a definite shape. Food is taken in at a specific spot. Cilia (hair-like structures) covering the cell move food to that spot.' },
    { topic: 'digest', front: 'Path of food through the human alimentary canal', back: 'Mouth -> oesophagus (food pipe) -> stomach -> small intestine -> large intestine -> rectum -> anus' },
    { topic: 'digest', front: 'What happens to food in the mouth?', back: '• Teeth chew and grind it\n• Tongue mixes it with saliva\n• Salivary amylase (enzyme in saliva) breaks starch into simple sugar' },
    { topic: 'digest', front: 'What is peristalsis?', back: 'Rhythmic contraction and relaxation of muscles in the lining of the alimentary canal that pushes food forward. It happens all along the gut.' },
    { topic: 'digest', front: 'Three secretions of gastric glands and their roles', back: '• Hydrochloric acid: makes the medium acidic for pepsin, kills germs\n• Pepsin: digests proteins\n• Mucus: protects the stomach lining from the acid' },
    { topic: 'digest', front: 'What is the function of the sphincter muscle at the exit of the stomach?', back: 'It controls how food moves from the stomach into the small intestine — releasing it a little at a time.' },
    { topic: 'digest', front: 'Why is the small intestine longer in herbivores than in carnivores?', back: 'Herbivores eat grass, which contains cellulose. It takes longer to digest, so they need a longer small intestine. Meat is easier to digest.' },
    { topic: 'digest', front: 'Bile juice: made where? What does it do?', back: 'Made in the liver (stored in gall bladder).\n• Makes the medium alkaline (food from stomach is acidic) so pancreatic enzymes can act\n• Emulsifies fats — breaks large fat globules into small ones' },
    { topic: 'digest', front: 'Enzymes in pancreatic juice', back: 'Trypsin — digests proteins\nLipase — digests emulsified fats\nAmylase — digests starch' },
    { topic: 'digest', front: 'Final products of digestion', back: 'Carbohydrates -> glucose\nProteins -> amino acids\nFats -> fatty acids and glycerol\n(Completed by intestinal juice in the small intestine.)' },
    { topic: 'digest', front: 'What are villi? Why are they important?', back: 'Finger-like projections on the inner wall of the small intestine.\nThey greatly increase the surface area for absorption. They are rich in blood vessels that carry digested food to every cell.' },
    { topic: 'digest', front: 'Function of the large intestine', back: 'Absorbs extra water from undigested food. The rest is removed through the anus; the anal sphincter controls this.' },
    { topic: 'digest', front: 'How does tooth decay (dental caries) happen?', back: 'Bacteria act on sugars and produce acids that soften the enamel. Bacteria and food particles stick to teeth as plaque. If not brushed away, the bacteria reach the pulp, causing pain and infection.' },
    { topic: 'resp', front: 'What is respiration?', back: 'Breaking down food (glucose) inside cells to release energy.\nIt is different from breathing, which is just taking in and giving out air.' },
    { topic: 'resp', front: 'First step of respiration — in all organisms', back: 'Glucose (6 carbons) is broken into pyruvate (3 carbons) in the CYTOPLASM.\nThis happens with or without oxygen.' },
    { topic: 'resp', front: 'Anaerobic respiration in yeast', back: 'Without oxygen:\nGlucose -> pyruvate -> ethanol + carbon dioxide + energy\nThis is fermentation (used for bread and alcohol).' },
    { topic: 'resp', front: 'What happens in our muscles when there is lack of oxygen?', back: 'During heavy exercise, oxygen runs short.\nGlucose -> pyruvate -> lactic acid + energy\nBuild-up of lactic acid causes muscle cramps.' },
    { topic: 'resp', front: 'Aerobic respiration', back: 'With oxygen, in the MITOCHONDRIA:\nGlucose -> pyruvate -> carbon dioxide + water + energy\nIt releases much more energy than anaerobic respiration.' },
    { topic: 'resp', front: 'What is ATP?', back: 'Adenosine triphosphate — the ENERGY CURRENCY of the cell.\nEnergy from respiration is used to make ATP from ADP and phosphate. When ATP is broken, energy (about 30.5 kJ/mol) is released for muscle work, making proteins, nerve impulses and so on.' },
    { topic: 'resp', front: 'Aerobic vs anaerobic respiration', back: 'Aerobic: needs oxygen; in mitochondria; products CO2 + H2O; much energy\nAnaerobic: no oxygen; in cytoplasm; products ethanol + CO2 (yeast) or lactic acid (muscles); little energy' },
    { topic: 'resp', front: 'How do plants exchange gases for respiration?', back: 'By diffusion through stomata in leaves and through the surface of stems and roots.\nIn the DAY, photosynthesis uses CO2, so O2 is released overall.\nAt NIGHT, only respiration happens, so CO2 is released.' },
    { topic: 'resp', front: 'Why do aquatic animals breathe much faster than land animals?', back: 'Water has much less dissolved oxygen than air. So fish and other aquatic animals must move water over their gills quickly to get enough oxygen.' },
    { topic: 'breath', front: 'Path of air in the human respiratory system', back: 'Nostrils -> nasal passage -> pharynx (throat) -> larynx -> trachea (windpipe) -> bronchi -> bronchioles -> alveoli' },
    { topic: 'breath', front: 'How is air cleaned in the nose?', back: 'Fine hairs and mucus in the nasal passage trap dust and germs.' },
    { topic: 'breath', front: 'Why does the trachea not collapse?', back: 'It has rings of cartilage that keep it open even when there is little air inside.' },
    { topic: 'breath', front: 'What are alveoli?', back: 'Tiny balloon-like air sacs at the ends of bronchioles in the lungs.\nThey have thin walls and many blood capillaries, and give a huge surface (about 80 m² if spread out) for exchange of gases.' },
    { topic: 'breath', front: 'What happens when we breathe in?', back: 'Ribs move up and out, and the diaphragm flattens (moves down). The chest cavity gets larger, so air is sucked into the lungs.' },
    { topic: 'breath', front: 'Why is some air always left in the lungs?', back: 'The lungs always contain a residual volume of air, so there is enough time for oxygen to be absorbed and CO2 to be released, even while we breathe out.' },
    { topic: 'breath', front: 'What is haemoglobin?', back: 'The respiratory pigment in red blood cells. It has a very high affinity for oxygen and carries it from the lungs to all tissues.\nCO2 is mostly carried dissolved in blood plasma.' },
    { topic: 'heart', front: 'Structure of the human heart', back: '4 chambers:\n• 2 upper — atria (thin walls, receive blood)\n• 2 lower — ventricles (thick walls, pump blood out)\nThe right side has deoxygenated blood, the left side oxygenated. A wall (septum) keeps them separate.' },
    { topic: 'heart', front: 'Why do ventricles have thicker walls than atria?', back: 'Ventricles pump blood to the whole body (or lungs) with force. Atria only push blood into the ventricles just below them.' },
    { topic: 'heart', front: 'Why are there valves in the heart?', back: 'They make sure blood does not flow backwards when the atria or ventricles contract.' },
    { topic: 'heart', front: 'Path of deoxygenated blood', back: 'Body -> vena cava -> right atrium -> right ventricle -> pulmonary artery -> lungs (gets oxygen)' },
    { topic: 'heart', front: 'Path of oxygenated blood', back: 'Lungs -> pulmonary vein -> left atrium -> left ventricle -> aorta -> body' },
    { topic: 'heart', front: 'What is double circulation?', back: 'Blood passes through the heart TWICE in one complete cycle — once to the lungs (pulmonary) and once to the body (systemic).\nIt keeps oxygenated and deoxygenated blood separate, giving efficient oxygen supply.' },
    { topic: 'heart', front: 'Why do birds and mammals need a 4-chambered heart?', back: 'They are warm-blooded and need a lot of energy to keep their body temperature constant. Separating oxygenated and deoxygenated blood gives a high, efficient supply of oxygen.' },
    { topic: 'heart', front: 'Heart chambers: fish, amphibians, reptiles', back: 'Fish: 2 chambers; blood passes through the heart only once (single circulation)\nAmphibians and many reptiles: 3 chambers; some mixing of blood is tolerated (body temperature depends on surroundings)' },
    { topic: 'blood', front: 'Components of blood', back: '• Plasma — fluid that carries food, CO2, salts and nitrogenous wastes in dissolved form\n• Red blood cells — carry oxygen (haemoglobin)\n• White blood cells — fight infection\n• Platelets — help blood clot' },
    { topic: 'blood', front: 'Why do we need platelets?', back: 'When a blood vessel is cut, platelets help blood to clot at the injury, plugging the leak and stopping blood loss.' },
    { topic: 'blood', front: 'Arteries vs veins', back: 'Arteries: carry blood AWAY from the heart; thick, elastic walls (blood under high pressure); no valves\nVeins: carry blood TO the heart; thinner walls; have valves to stop backflow' },
    { topic: 'blood', front: 'What are capillaries?', back: 'The smallest blood vessels, with walls only one cell thick. Exchange of materials between blood and cells happens here.' },
    { topic: 'blood', front: 'What is blood pressure? Normal values?', back: 'The force blood puts on the walls of a vessel.\nSystolic (ventricle contracts): about 120 mm Hg\nDiastolic (ventricle relaxes): about 80 mm Hg\nMeasured with a sphygmomanometer.' },
    { topic: 'blood', front: 'What is hypertension?', back: 'High blood pressure. It is caused by narrowing of arterioles, which resists blood flow. It can lead to a burst artery and internal bleeding.' },
    { topic: 'blood', front: 'What is lymph? Name 2 functions.', back: 'A colourless fluid (tissue fluid) that leaks out of capillaries into spaces between cells. It is like plasma but has less protein.\n• Carries digested and absorbed FAT from the intestine\n• Drains excess fluid from tissues back into the blood' },
    { topic: 'plant', front: 'Two transport tissues in plants', back: 'Xylem — carries water and minerals from roots to leaves (one direction: up)\nPhloem — carries food from leaves to other parts (up and down)' },
    { topic: 'plant', front: 'How does water enter the root?', back: 'Root cells take in ions from the soil, so the root has a higher ion concentration than the soil. Water moves into the root to remove this difference, and is pushed up the xylem.' },
    { topic: 'plant', front: 'What is transpiration? Give 2 uses.', back: 'Loss of water as vapour from the aerial parts of a plant, mainly through stomata.\n• Creates a suction pull that draws water up the xylem (main force in the DAY)\n• Helps control the temperature of the plant' },
    { topic: 'plant', front: 'Which force moves water up at night?', back: 'Root pressure. (Stomata are closed at night, so the transpiration pull is less.)' },
    { topic: 'plant', front: 'What is translocation?', back: 'Transport of food (sugar, amino acids) from leaves to other parts through PHLOEM.\nIt uses energy from ATP. Sucrose is moved into phloem using ATP, which raises osmotic pressure; water enters and pushes the food along.' },
    { topic: 'plant', front: 'Parts of phloem', back: 'Sieve tubes and companion cells. Food moves through sieve tubes in both upward and downward directions.' },
    { topic: 'excr', front: 'What is excretion?', back: 'Removal of harmful nitrogenous wastes (like urea and uric acid) made during metabolism.' },
    { topic: 'excr', front: 'Organs of the human excretory system', back: '• A pair of kidneys — filter blood, make urine\n• A pair of ureters — carry urine to the bladder\n• Urinary bladder — stores urine\n• Urethra — urine passes out' },
    { topic: 'excr', front: 'What is a nephron?', back: 'The basic filtration unit of the kidney. Each kidney has a large number of nephrons packed close together.' },
    { topic: 'excr', front: 'Parts of a nephron and their jobs', back: 'Glomerulus — a cluster of thin-walled blood capillaries where blood is filtered\nBowman\'s capsule — cup-shaped end that collects the filtrate\nTubule — reabsorbs useful substances (glucose, amino acids, salts, water) back into blood' },
    { topic: 'excr', front: 'What is reabsorbed in the tubule? What decides how much water?', back: 'Glucose, amino acids, salts and a lot of water.\nThe amount of water reabsorbed depends on how much extra water the body has, and how much dissolved waste must be removed.' },
    { topic: 'excr', front: 'How much is filtered daily vs how much urine is made?', back: 'About 180 litres of filtrate per day, but only about 1–2 litres of urine. The rest is reabsorbed.' },
    { topic: 'excr', front: 'What controls passing of urine?', back: 'Urine is stored in the bladder, which is muscular and under nervous control. We can usually control the urge to urinate.' },
    { topic: 'excr', front: 'What is haemodialysis (artificial kidney)?', back: 'Used when kidneys fail. Blood is passed through long tubes with semi-permeable lining, in a tank of dialysing fluid. Nitrogenous wastes pass out into the fluid; clean blood returns to the body.\nUnlike the kidney, there is NO reabsorption.' },
    { topic: 'excr', front: 'How do plants get rid of wastes?', back: '• O2 and CO2 — through stomata\n• Extra water — by transpiration\n• Wastes stored in leaves that fall off, and in cell vacuoles\n• Resins and gums stored in old xylem\n• Some wastes released into the soil around roots' }
  ],

  quiz: [
    { topic: 'intro', q: 'Which of these is NOT a life process?', options: ['Nutrition', 'Respiration', 'Excretion', 'Sleeping'], answer: 3, explain: 'The basic life processes are nutrition, respiration, transportation and excretion.' },
    { topic: 'intro', q: 'Organisms that make their own food are called…', options: ['Heterotrophs', 'Autotrophs', 'Parasites', 'Saprophytes'], answer: 1, explain: 'e.g. green plants.' },
    { topic: 'auto', q: 'The green pigment needed for photosynthesis is…', options: ['Haemoglobin', 'Chlorophyll', 'Melanin', 'Carotene'], answer: 1, explain: 'It is found in chloroplasts.' },
    { topic: 'auto', q: 'Plants store extra carbohydrate as…', options: ['Glucose', 'Glycogen', 'Starch', 'Cellulose'], answer: 2, explain: 'Animals store it as glycogen.' },
    { topic: 'auto', q: 'Stomata open when guard cells…', options: ['Lose water', 'Take in water and swell', 'Die', 'Get starch'], answer: 1, explain: 'Swollen guard cells open the pore.' },
    { topic: 'auto', q: 'Which is NOT an event of photosynthesis?', options: ['Absorption of light by chlorophyll', 'Splitting of water', 'Reduction of CO2 to carbohydrate', 'Breaking glucose into pyruvate'], answer: 3, explain: 'Glucose -> pyruvate is the first step of respiration.' },
    { topic: 'auto', q: 'In the experiment to show CO2 is needed for photosynthesis, KOH is used to…', options: ['Give CO2', 'Absorb CO2', 'Give oxygen', 'Kill germs'], answer: 1, explain: 'The leaf in the KOH jar shows no starch.' },
    { topic: 'auto', q: 'Starch in a leaf is tested with…', options: ['Litmus', 'Iodine solution', 'Lime water', 'Phenolphthalein'], answer: 1, explain: 'Starch turns blue-black with iodine.' },
    { topic: 'auto', q: 'Desert plants take in CO2…', options: ['During the day', 'At night', 'Only in winter', 'Through roots'], answer: 1, explain: 'Opening stomata at night reduces water loss.' },
    { topic: 'auto', q: 'Plants take nitrogen from soil in the form of…', options: ['Nitrogen gas', 'Nitrates and nitrites', 'Ammonia gas', 'Proteins'], answer: 1, explain: 'Inorganic nitrates or nitrites.' },
    { topic: 'auto', q: 'A plant is kept in the dark for 3 days before a starch test to…', options: ['Make it grow', 'Destarch it', 'Kill it', 'Make chlorophyll'], answer: 1, explain: 'So any starch found was made during the experiment.' },
    { topic: 'hetero', q: 'Bread mould and mushrooms show ___ nutrition.', options: ['Holozoic', 'Parasitic', 'Saprophytic', 'Autotrophic'], answer: 2, explain: 'They break down food outside the body and absorb it.' },
    { topic: 'hetero', q: 'Cuscuta (amar-bel) is a…', options: ['Saprophyte', 'Parasite', 'Autotroph', 'Holozoic organism'], answer: 1, explain: 'It takes food from the host plant.' },
    { topic: 'hetero', q: 'Amoeba takes in food using…', options: ['Cilia', 'Pseudopodia', 'Tentacles', 'Mouth'], answer: 1, explain: 'Pseudopodia surround the food and form a food vacuole.' },
    { topic: 'hetero', q: 'In Paramecium, food is moved to a specific spot by…', options: ['Pseudopodia', 'Cilia', 'Flagella', 'Teeth'], answer: 1, explain: 'Paramecium has a definite shape.' },
    { topic: 'digest', q: 'Salivary amylase breaks down…', options: ['Proteins', 'Fats', 'Starch', 'Vitamins'], answer: 2, explain: 'Starch -> simple sugar.' },
    { topic: 'digest', q: 'The movement of food along the gut by muscle contraction is called…', options: ['Peristalsis', 'Digestion', 'Absorption', 'Egestion'], answer: 0, explain: 'Rhythmic contraction and relaxation of gut muscles.' },
    { topic: 'digest', q: 'Pepsin digests…', options: ['Starch', 'Proteins', 'Fats', 'Cellulose'], answer: 1, explain: 'It acts in the acidic medium of the stomach.' },
    { topic: 'digest', q: 'The role of mucus in the stomach is to…', options: ['Digest protein', 'Protect the stomach lining from acid', 'Kill germs', 'Absorb food'], answer: 1, explain: 'HCl kills germs; mucus protects the lining.' },
    { topic: 'digest', q: 'Bile juice is made by the…', options: ['Pancreas', 'Stomach', 'Liver', 'Small intestine'], answer: 2, explain: 'It is stored in the gall bladder.' },
    { topic: 'digest', q: 'Bile juice helps by…', options: ['Digesting proteins', 'Emulsifying fats', 'Absorbing water', 'Digesting starch'], answer: 1, explain: 'It also makes the medium alkaline.' },
    { topic: 'digest', q: 'Trypsin is secreted by the…', options: ['Liver', 'Pancreas', 'Salivary glands', 'Stomach'], answer: 1, explain: 'Trypsin digests proteins.' },
    { topic: 'digest', q: 'Lipase digests…', options: ['Proteins', 'Starch', 'Fats', 'Sugars'], answer: 2, explain: 'Fats -> fatty acids + glycerol' },
    { topic: 'digest', q: 'Digested food is absorbed mainly by…', options: ['Stomach walls', 'Villi of the small intestine', 'Large intestine', 'Oesophagus'], answer: 1, explain: 'Villi give a huge surface area.' },
    { topic: 'digest', q: 'The main job of the large intestine is to absorb…', options: ['Glucose', 'Water', 'Amino acids', 'Fats'], answer: 1, explain: 'Undigested food then leaves through the anus.' },
    { topic: 'digest', q: 'Herbivores have a longer small intestine because…', options: ['They eat more', 'Cellulose takes longer to digest', 'They have no teeth', 'They drink more water'], answer: 1, explain: 'Grass contains cellulose.' },
    { topic: 'digest', q: 'Proteins are finally digested into…', options: ['Glucose', 'Amino acids', 'Fatty acids', 'Glycerol'], answer: 1, explain: 'Carbohydrates -> glucose; fats -> fatty acids and glycerol.' },
    { topic: 'resp', q: 'Glucose is first broken into pyruvate in the…', options: ['Mitochondria', 'Cytoplasm', 'Nucleus', 'Chloroplast'], answer: 1, explain: 'This step happens with or without oxygen.' },
    { topic: 'resp', q: 'Pyruvate is a ___-carbon molecule.', options: ['2', '3', '6', '1'], answer: 1, explain: 'Glucose (6C) -> 2 pyruvate (3C each).' },
    { topic: 'resp', q: 'Anaerobic respiration in yeast produces…', options: ['Lactic acid', 'Ethanol + CO2', 'CO2 + water', 'Oxygen'], answer: 1, explain: 'This is fermentation.' },
    { topic: 'resp', q: 'Muscle cramps after heavy exercise are due to build-up of…', options: ['Ethanol', 'Lactic acid', 'CO2', 'Glucose'], answer: 1, explain: 'Lack of oxygen: pyruvate -> lactic acid.' },
    { topic: 'resp', q: 'Aerobic respiration takes place in the…', options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'Ribosome'], answer: 1, explain: 'Pyruvate -> CO2 + water + energy.' },
    { topic: 'resp', q: 'The energy currency of the cell is…', options: ['ADP', 'ATP', 'Glucose', 'DNA'], answer: 1, explain: 'Adenosine triphosphate.' },
    { topic: 'resp', q: 'Which releases the most energy?', options: ['Aerobic respiration', 'Fermentation in yeast', 'Lactic acid formation', 'All equal'], answer: 0, explain: 'Complete breakdown to CO2 and water releases much more energy.' },
    { topic: 'resp', q: 'At night, plants mainly release…', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Water only'], answer: 1, explain: 'No photosynthesis at night, only respiration.' },
    { topic: 'resp', q: 'Aquatic animals breathe faster than land animals because…', options: ['They are smaller', 'Water has less dissolved oxygen than air', 'Water is cold', 'They swim'], answer: 1, explain: 'They must move a lot of water over their gills.' },
    { topic: 'breath', q: 'Gas exchange in the lungs takes place in the…', options: ['Trachea', 'Bronchi', 'Alveoli', 'Pharynx'], answer: 2, explain: 'Alveoli are thin-walled and surrounded by capillaries.' },
    { topic: 'breath', q: 'The trachea does not collapse because of…', options: ['Muscles', 'Rings of cartilage', 'Mucus', 'Bones'], answer: 1, explain: 'Cartilage rings keep it open.' },
    { topic: 'breath', q: 'When we breathe in, the diaphragm…', options: ['Moves up', 'Flattens (moves down)', 'Stays still', 'Folds'], answer: 1, explain: 'The chest cavity gets larger and air is sucked in.' },
    { topic: 'breath', q: 'The respiratory pigment in humans is…', options: ['Chlorophyll', 'Haemoglobin', 'Melanin', 'Insulin'], answer: 1, explain: 'It is in red blood cells and carries oxygen.' },
    { topic: 'breath', q: 'CO2 is mainly carried in the blood…', options: ['By haemoglobin', 'Dissolved in plasma', 'By platelets', 'By WBCs'], answer: 1, explain: 'CO2 is more soluble in water than oxygen.' },
    { topic: 'breath', q: 'If the alveoli were spread out, they would cover about…', options: ['8 m²', '80 m²', '800 m²', '1 m²'], answer: 1, explain: 'A huge surface area for gas exchange.' },
    { topic: 'heart', q: 'How many chambers does the human heart have?', options: ['2', '3', '4', '5'], answer: 2, explain: '2 atria and 2 ventricles.' },
    { topic: 'heart', q: 'Oxygenated blood from the lungs enters the…', options: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'], answer: 1, explain: 'Lungs -> pulmonary vein -> left atrium.' },
    { topic: 'heart', q: 'Which vessel carries deoxygenated blood to the lungs?', options: ['Aorta', 'Pulmonary vein', 'Pulmonary artery', 'Vena cava'], answer: 2, explain: 'It is the only artery that carries deoxygenated blood.' },
    { topic: 'heart', q: 'Which vessel carries oxygenated blood from the heart to the body?', options: ['Aorta', 'Vena cava', 'Pulmonary artery', 'Pulmonary vein'], answer: 0, explain: 'Left ventricle -> aorta -> body.' },
    { topic: 'heart', q: 'Deoxygenated blood from the body enters the heart through the…', options: ['Aorta', 'Vena cava', 'Pulmonary vein', 'Pulmonary artery'], answer: 1, explain: 'Vena cava -> right atrium.' },
    { topic: 'heart', q: 'Valves in the heart…', options: ['Pump blood', 'Prevent backflow of blood', 'Make blood', 'Clean blood'], answer: 1, explain: 'They let blood flow one way only.' },
    { topic: 'heart', q: 'Fish have a ___-chambered heart.', options: ['2', '3', '4', '1'], answer: 0, explain: 'Blood passes through the heart only once (single circulation).' },
    { topic: 'heart', q: 'Double circulation means blood passes through the heart…', options: ['Once in a cycle', 'Twice in a cycle', 'Four times', 'Never'], answer: 1, explain: 'Once to the lungs and once to the body.' },
    { topic: 'blood', q: 'Blood clotting is helped by…', options: ['RBCs', 'WBCs', 'Platelets', 'Plasma proteins only'], answer: 2, explain: 'Platelets plug the leak at an injury.' },
    { topic: 'blood', q: 'Arteries have thick, elastic walls because…', options: ['They carry less blood', 'Blood flows in them under high pressure', 'They have valves', 'They are near the skin'], answer: 1, explain: 'Blood leaves the heart with force.' },
    { topic: 'blood', q: 'Valves are present in…', options: ['Arteries', 'Veins', 'Capillaries', 'All vessels'], answer: 1, explain: 'They stop blood from flowing backwards.' },
    { topic: 'blood', q: 'Exchange of materials between blood and cells happens through…', options: ['Arteries', 'Veins', 'Capillaries', 'Aorta'], answer: 2, explain: 'Their walls are one cell thick.' },
    { topic: 'blood', q: 'Normal blood pressure is about…', options: ['80/120 mm Hg', '120/80 mm Hg', '100/100 mm Hg', '140/60 mm Hg'], answer: 1, explain: 'Systolic 120, diastolic 80.' },
    { topic: 'blood', q: 'Blood pressure is measured with a…', options: ['Thermometer', 'Sphygmomanometer', 'Stethoscope only', 'Barometer'], answer: 1, explain: 'Sphygmomanometer.' },
    { topic: 'blood', q: 'Lymph carries digested ___ from the intestine.', options: ['Proteins', 'Fats', 'Glucose', 'Water'], answer: 1, explain: 'It also drains extra tissue fluid back to the blood.' },
    { topic: 'plant', q: 'Water and minerals are carried in plants by…', options: ['Phloem', 'Xylem', 'Stomata', 'Guard cells'], answer: 1, explain: 'Xylem carries them up from the roots.' },
    { topic: 'plant', q: 'Food is carried in plants by…', options: ['Xylem', 'Phloem', 'Roots', 'Stomata'], answer: 1, explain: 'This is called translocation.' },
    { topic: 'plant', q: 'The main force that pulls water up in a tall tree during the day is…', options: ['Root pressure', 'Transpiration pull', 'Gravity', 'Translocation'], answer: 1, explain: 'Evaporation from leaves creates suction.' },
    { topic: 'plant', q: 'Translocation of food in phloem uses energy from…', options: ['Sunlight directly', 'ATP', 'Transpiration', 'Gravity'], answer: 1, explain: 'ATP is used to move sucrose into phloem.' },
    { topic: 'plant', q: 'Loss of water vapour from leaves is called…', options: ['Translocation', 'Transpiration', 'Respiration', 'Guttation'], answer: 1, explain: 'It also helps cool the plant.' },
    { topic: 'excr', q: 'The basic filtering unit of the kidney is the…', options: ['Neuron', 'Nephron', 'Alveolus', 'Villus'], answer: 1, explain: 'Each kidney has a large number of nephrons.' },
    { topic: 'excr', q: 'Blood is filtered in the…', options: ['Tubule', 'Glomerulus', 'Ureter', 'Bladder'], answer: 1, explain: 'A cluster of capillaries inside Bowman\'s capsule.' },
    { topic: 'excr', q: 'Urine is carried from the kidneys to the bladder by the…', options: ['Urethra', 'Ureters', 'Arteries', 'Nephrons'], answer: 1, explain: 'Urethra carries urine out of the body.' },
    { topic: 'excr', q: 'Which substance is reabsorbed in the tubule of the nephron?', options: ['Urea', 'Glucose', 'Uric acid', 'All wastes'], answer: 1, explain: 'Glucose, amino acids, salts and water are reabsorbed.' },
    { topic: 'excr', q: 'About how much filtrate do the kidneys make per day?', options: ['1–2 L', '18 L', '180 L', '1800 L'], answer: 2, explain: 'But only 1–2 L becomes urine.' },
    { topic: 'excr', q: 'Unlike a real kidney, a dialysis machine has no…', options: ['Filtration', 'Reabsorption', 'Blood flow', 'Semi-permeable lining'], answer: 1, explain: 'Wastes are just removed into the dialysing fluid.' },
    { topic: 'excr', q: 'Plants store some wastes as resins and gums in…', options: ['New leaves', 'Old xylem', 'Phloem', 'Root hairs'], answer: 1, explain: 'Wastes are also lost when old leaves fall.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'auto', a: 'Desert plants open their stomata at night.', r: 'This reduces water loss during the hot day.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'auto', a: 'Only the green parts of a variegated leaf turn blue-black with iodine.', r: 'Chlorophyll is needed for photosynthesis.', answer: 0, explain: 'Both true, and R explains A — only green parts made starch.' },
      { topic: 'digest', a: 'The stomach lining is not harmed by hydrochloric acid.', r: 'Mucus protects the inner lining of the stomach.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'digest', a: 'Herbivores have a shorter small intestine than carnivores.', r: 'Cellulose takes longer to digest.', answer: 3, explain: 'A is false — herbivores have a LONGER small intestine. R is true.' },
      { topic: 'digest', a: 'Villi increase the surface area of the small intestine.', r: 'Bile emulsifies fats.', answer: 1, explain: 'Both true, but R has nothing to do with A.' },
      { topic: 'resp', a: 'We get muscle cramps after running fast.', r: 'Lack of oxygen in muscles leads to lactic acid formation.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'resp', a: 'Aerobic respiration releases more energy than anaerobic respiration.', r: 'Aerobic respiration happens in the cytoplasm.', answer: 2, explain: 'A is true, but R is false — it happens in the MITOCHONDRIA.' },
      { topic: 'breath', a: 'Rings of cartilage are present in the trachea.', r: 'They make sure the air passage does not collapse.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'heart', a: 'The walls of ventricles are thicker than those of atria.', r: 'Ventricles pump blood to various organs with force.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'heart', a: 'The pulmonary artery carries oxygenated blood.', r: 'Arteries carry blood away from the heart.', answer: 3, explain: 'A is false — the pulmonary artery carries DEOXYGENATED blood to the lungs. R is true.' },
      { topic: 'plant', a: 'Transpiration helps in the upward movement of water in plants.', r: 'Water evaporating from leaves creates a suction pull in the xylem.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'excr', a: 'Only 1–2 litres of urine is made from 180 litres of filtrate daily.', r: 'Most of the water is reabsorbed in the kidney tubules.', answer: 0, explain: 'Both true, and R explains A.' }
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
    { title: 'Types of Nutrition', pairs: [
      ['Green plants', 'Autotrophic'],
      ['Bread mould, mushroom', 'Saprophytic'],
      ['Cuscuta, tapeworm', 'Parasitic'],
      ['Amoeba, humans', 'Holozoic'],
      ['Amoeba takes food by', 'Pseudopodia'],
      ['Paramecium moves food by', 'Cilia']
    ] },
    { title: 'Digestive Juices', pairs: [
      ['Salivary amylase', 'Starch -> sugar'],
      ['Pepsin', 'Proteins (stomach)'],
      ['Hydrochloric acid', 'Acidic medium, kills germs'],
      ['Bile', 'Emulsifies fats'],
      ['Trypsin', 'Proteins (pancreas)'],
      ['Lipase', 'Fats -> fatty acids + glycerol']
    ] },
    { title: 'Respiration', pairs: [
      ['Glucose -> pyruvate', 'Cytoplasm'],
      ['Yeast, no oxygen', 'Ethanol + CO2'],
      ['Muscles, lack of oxygen', 'Lactic acid'],
      ['With oxygen', 'CO2 + water (mitochondria)'],
      ['Energy currency', 'ATP'],
      ['Carries oxygen in blood', 'Haemoglobin']
    ] },
    { title: 'Path of Blood', pairs: [
      ['Vena cava', 'Brings body blood to right atrium'],
      ['Pulmonary artery', 'Right ventricle to lungs'],
      ['Pulmonary vein', 'Lungs to left atrium'],
      ['Aorta', 'Left ventricle to body'],
      ['Valves', 'Stop backflow'],
      ['Septum', 'Keeps two sides separate']
    ] },
    { title: 'Body Parts & Jobs', pairs: [
      ['Villi', 'Absorb digested food'],
      ['Alveoli', 'Gas exchange'],
      ['Capillaries', 'Exchange with cells'],
      ['Platelets', 'Blood clotting'],
      ['Lymph', 'Carries absorbed fat'],
      ['Nephron', 'Filters blood']
    ] },
    { title: 'Plants', pairs: [
      ['Xylem', 'Water and minerals'],
      ['Phloem', 'Food (translocation)'],
      ['Transpiration', 'Water loss; suction pull'],
      ['Guard cells', 'Open and close stomata'],
      ['Old xylem', 'Stores resins and gums'],
      ['Root pressure', 'Pushes water up at night']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'Photosynthesis (simple form)', reactants: ['CO2', 'H2O'], products: ['C6H12O6', 'O2'], answer: [6, 6, 1, 6] },
    { name: 'Aerobic respiration', reactants: ['C6H12O6', 'O2'], products: ['CO2', 'H2O'], answer: [1, 6, 6, 6] },
    { name: 'Anaerobic respiration in yeast', reactants: ['C6H12O6'], products: ['C2H5OH', 'CO2'], answer: [1, 2, 2] },
    { name: 'Lactic acid in muscles', reactants: ['C6H12O6'], products: ['C3H6O3'], answer: [1, 2] },
    { name: 'CO2 turns lime water milky (breath test)', reactants: ['Ca(OH)2', 'CO2'], products: ['CaCO3', 'H2O'], answer: [1, 1, 1, 1] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'What is the role of mucus in the stomach?',
      keypoints: [
        { text: 'Protects the inner lining of the stomach from hydrochloric acid', kw: ['protect', 'acid|hcl'] }
      ],
      model: 'Mucus protects the inner lining of the stomach from the action of hydrochloric acid.' },
    { marks: 1, q: 'Why do muscle cramps occur after vigorous exercise?',
      keypoints: [
        { text: 'Lack of oxygen -> pyruvate converted to lactic acid, which builds up', kw: ['lactic'] }
      ],
      model: 'During vigorous exercise there is a lack of oxygen in muscle cells. Pyruvate is converted to lactic acid, and its build-up causes cramps.' },
    { marks: 1, q: 'What is the function of platelets?',
      keypoints: [
        { text: 'Help blood to clot at an injury', kw: ['clot'] }
      ],
      model: 'Platelets help blood to clot at the site of an injury, which stops further blood loss.' },
    { marks: 1, q: 'Name the energy currency of the cell.',
      keypoints: [
        { text: 'ATP (adenosine triphosphate)', kw: ['atp|adenosine'] }
      ],
      model: 'ATP — adenosine triphosphate.' },
    { marks: 2, q: 'How do guard cells regulate the opening and closing of stomata?',
      keypoints: [
        { text: 'Water enters guard cells -> they swell -> stoma opens', kw: ['swell', 'open'] },
        { text: 'Guard cells lose water -> they shrink -> stoma closes', kw: ['shrink|lose water|loses water', 'close'] }
      ],
      model: 'When water flows into the guard cells, they swell and curve, opening the pore (stoma). When the guard cells lose water, they shrink and the pore closes.' },
    { marks: 2, q: 'What are the functions of bile juice?',
      keypoints: [
        { text: 'Makes the medium alkaline for pancreatic enzymes', kw: ['alkaline'] },
        { text: 'Emulsifies fats — breaks large fat globules into smaller ones', kw: ['emulsif|globule|smaller'] }
      ],
      model: '1. Food coming from the stomach is acidic; bile makes it alkaline so pancreatic enzymes can act.\n2. Bile salts emulsify fats — they break large fat globules into smaller ones, so enzymes can digest them faster.' },
    { marks: 2, q: 'How are the alveoli designed to maximise the exchange of gases?',
      keypoints: [
        { text: 'Balloon-like, give a very large surface area (~80 m²)', kw: ['surface area'] },
        { text: 'Thin walls with an extensive network of blood capillaries', kw: ['thin', 'capillar|blood vessel'] }
      ],
      model: 'Alveoli are balloon-like structures that give a very large surface area (about 80 m² if spread out). Their walls are very thin and are surrounded by an extensive network of blood capillaries, so gases can diffuse quickly between air and blood.' },
    { marks: 2, q: 'Why is it necessary to separate oxygenated and deoxygenated blood in mammals and birds?',
      keypoints: [
        { text: 'They need a lot of energy to maintain a constant body temperature (warm-blooded)', kw: ['temperature|warm'] },
        { text: 'Separation gives a highly efficient supply of oxygen', kw: ['efficient|more oxygen|oxygen supply'] }
      ],
      model: 'Birds and mammals are warm-blooded — they need a lot of energy to keep their body temperature constant. Separating oxygenated and deoxygenated blood gives a highly efficient supply of oxygen to the body, so enough energy can be produced.' },
    { marks: 2, q: 'What are the differences between arteries and veins?',
      keypoints: [
        { text: 'Arteries carry blood away from the heart; veins carry blood to the heart', kw: ['away', 'to the heart|towards'] },
        { text: 'Arteries have thick elastic walls, no valves; veins have thin walls with valves', kw: ['thick', 'valve'] }
      ],
      model: 'Arteries:\n• carry blood away from the heart to organs\n• have thick, elastic walls (blood is under high pressure)\n• have no valves\nVeins:\n• carry blood from organs back to the heart\n• have thinner walls\n• have valves to prevent backflow' },
    { marks: 2, q: 'What is transpiration? Give its two functions.',
      keypoints: [
        { text: 'Loss of water as vapour from aerial parts of the plant (mainly stomata)', kw: ['vapour|evaporat', 'leaves|aerial|stomata'] },
        { text: 'Creates suction pull for upward movement of water; regulates temperature', kw: ['pull|suction|upward', 'temperature|cool'] }
      ],
      model: 'Transpiration is the loss of water in the form of vapour from the aerial parts of a plant, mainly through stomata.\nFunctions:\n1. It creates a suction pull that helps water and minerals move up from the roots through xylem.\n2. It helps regulate the temperature of the plant.' },
    { marks: 2, q: 'What are the methods used by plants to get rid of excretory products?',
      keypoints: [
        { text: 'O2/CO2 through stomata; excess water by transpiration', kw: ['stomata|transpiration'] },
        { text: 'Wastes stored in falling leaves, vacuoles, resins and gums in old xylem, released into soil', kw: ['leaves|resin|gum|vacuole|soil'] }
      ],
      model: '• Oxygen and carbon dioxide are removed by diffusion through stomata.\n• Excess water is removed by transpiration.\n• Many wastes are stored in leaves, which fall off.\n• Some wastes are stored in cell vacuoles.\n• Resins and gums are stored in old xylem.\n• Some wastes are released into the soil around the roots.' },
    { marks: 3, q: 'Explain the three pathways of breakdown of glucose in living organisms.',
      keypoints: [
        { text: 'Glucose -> pyruvate in the cytoplasm (all organisms)', kw: ['pyruvate', 'cytoplasm'] },
        { text: 'No oxygen (yeast): ethanol + CO2 + energy', kw: ['ethanol|alcohol', 'yeast|absence'] },
        { text: 'Lack of oxygen (muscles): lactic acid; with oxygen (mitochondria): CO2 + H2O + more energy', kw: ['lactic', 'mitochondria'] }
      ],
      model: 'In all cases, glucose (6-carbon) is first broken into pyruvate (3-carbon) in the cytoplasm.\n1. Absence of oxygen (e.g. yeast): pyruvate -> ethanol + carbon dioxide + energy (fermentation)\n2. Lack of oxygen (e.g. our muscle cells): pyruvate -> lactic acid + energy\n3. Presence of oxygen (in mitochondria): pyruvate -> carbon dioxide + water + much more energy (aerobic respiration)' },
    { marks: 3, q: 'Describe the double circulation of blood in human beings.',
      keypoints: [
        { text: 'Deoxygenated: body -> vena cava -> right atrium -> right ventricle -> pulmonary artery -> lungs', kw: ['right', 'pulmonary artery'] },
        { text: 'Oxygenated: lungs -> pulmonary vein -> left atrium -> left ventricle -> aorta -> body', kw: ['left', 'aorta'] },
        { text: 'Blood passes through the heart twice in one cycle', kw: ['twice|two times'] }
      ],
      model: 'Deoxygenated blood from the body enters the right atrium through the vena cava. The right atrium contracts and sends it to the right ventricle, which pumps it through the pulmonary artery to the lungs, where it picks up oxygen.\nOxygenated blood returns through the pulmonary vein to the left atrium, then into the left ventricle, which pumps it through the aorta to the whole body.\nSo blood passes through the heart twice in one complete cycle — this is called double circulation.' },
    { marks: 3, q: 'How is food digested in the stomach?',
      keypoints: [
        { text: 'Gastric glands release HCl, pepsin and mucus', kw: ['gastric', 'pepsin'] },
        { text: 'HCl makes medium acidic and kills germs; pepsin digests proteins', kw: ['acid', 'protein'] },
        { text: 'Mucus protects stomach lining; sphincter releases food slowly', kw: ['mucus', 'protect'] }
      ],
      model: 'The muscular walls of the stomach mix food thoroughly with digestive juices from the gastric glands.\n• Hydrochloric acid makes the medium acidic (needed for pepsin) and kills germs.\n• Pepsin begins digestion of proteins.\n• Mucus protects the stomach lining from the acid.\nThe sphincter muscle then releases the food into the small intestine a little at a time.' },
    { marks: 3, q: 'What is lymph? How is it different from blood? Give its functions.',
      keypoints: [
        { text: 'Lymph is tissue fluid that leaks from capillaries into spaces between cells', kw: ['capillar|tissue fluid'] },
        { text: 'Colourless, has less protein, no RBCs', kw: ['colourless|less protein|no rbc|no red'] },
        { text: 'Carries digested fat from intestine; drains excess fluid back into blood', kw: ['fat', 'drain|back into blood|returns'] }
      ],
      model: 'Lymph (tissue fluid) is the fluid that escapes from capillaries into the spaces between cells.\nDifference: it is like plasma, but colourless and has less protein. It has no red blood cells.\nFunctions:\n• Carries digested and absorbed fat from the intestine\n• Drains excess fluid from the tissues back into the blood' },
    { marks: 3, q: 'How is water transported in plants?',
      keypoints: [
        { text: 'Root cells take in ions, creating a concentration difference; water enters the xylem', kw: ['ion|concentration', 'root'] },
        { text: 'Transpiration pull — water lost from leaves creates suction (main force in the day)', kw: ['transpiration', 'pull|suction'] },
        { text: 'Root pressure — important at night', kw: ['root pressure'] }
      ],
      model: 'Xylem vessels and tracheids of roots, stems and leaves are connected into a continuous system of water-conducting channels.\nRoot cells actively take up ions from the soil. This creates a difference in ion concentration between the root and soil, so water moves into the root xylem — this is root pressure (important at night).\nIn the day, water evaporates from the leaves through stomata (transpiration). This creates a suction pull that draws water up through the xylem from the roots. Transpiration is the main force in the day.' },
    { marks: 3, q: 'Describe how urine is formed in a nephron.',
      keypoints: [
        { text: 'Blood is filtered in the glomerulus; filtrate collects in Bowman\'s capsule', kw: ['glomerulus', 'bowman'] },
        { text: 'Useful substances (glucose, amino acids, salts, water) are reabsorbed in the tubule', kw: ['reabsor', 'glucose|amino|salt'] },
        { text: 'Remaining fluid is urine, carried by ureter to bladder', kw: ['urine', 'ureter|bladder'] }
      ],
      model: 'Blood enters the kidney through the renal artery. In each nephron, blood is filtered in the glomerulus (a cluster of capillaries) and the filtrate collects in the cup-shaped Bowman\'s capsule.\nAs the filtrate passes along the tubule, useful substances — glucose, amino acids, salts and a major amount of water — are selectively reabsorbed into the surrounding capillaries.\nThe remaining fluid is urine. It goes into a collecting duct, then through the ureter to the urinary bladder, where it is stored until passed out through the urethra.' },
    { marks: 5, q: 'Describe the process of digestion of food in human beings from the mouth to the large intestine.',
      keypoints: [
        { text: 'Mouth: teeth chew; salivary amylase converts starch to sugar', kw: ['amylase', 'starch'] },
        { text: 'Oesophagus: peristalsis pushes food', kw: ['peristalsis'] },
        { text: 'Stomach: HCl, pepsin (proteins), mucus', kw: ['pepsin', 'hcl|hydrochloric'] },
        { text: 'Small intestine: bile (emulsifies fat, alkaline), pancreatic juice (trypsin, lipase), intestinal juice; villi absorb', kw: ['bile', 'trypsin|lipase', 'villi'] },
        { text: 'Large intestine absorbs water; waste removed through anus', kw: ['water', 'anus'] }
      ],
      model: 'Mouth: teeth chew and grind the food. Saliva contains salivary amylase, which breaks starch into simple sugar.\nOesophagus: food is pushed down by peristalsis (rhythmic contraction of muscles).\nStomach: gastric glands release hydrochloric acid (acidic medium, kills germs), pepsin (digests proteins) and mucus (protects the lining).\nSmall intestine:\n• Bile from the liver makes the food alkaline and emulsifies fats.\n• Pancreatic juice: trypsin digests proteins, lipase digests emulsified fats, amylase digests starch.\n• Intestinal juice completes digestion: proteins -> amino acids, carbohydrates -> glucose, fats -> fatty acids + glycerol.\n• Villi absorb digested food into the blood.\nLarge intestine: absorbs extra water. The remaining waste is removed through the anus, controlled by the anal sphincter.' },
    { marks: 5, q: 'Draw (describe) the structure of the human heart and explain how it works. Why is the heart called a double pump?',
      keypoints: [
        { text: '4 chambers: 2 atria (upper, thin) and 2 ventricles (lower, thick)', kw: ['atri', 'ventricle'] },
        { text: 'Right side: deoxygenated blood; left side: oxygenated; septum separates', kw: ['right', 'left', 'deoxygenated'] },
        { text: 'Vena cava -> RA -> RV -> pulmonary artery -> lungs', kw: ['vena cava', 'pulmonary artery'] },
        { text: 'Pulmonary vein -> LA -> LV -> aorta -> body', kw: ['pulmonary vein', 'aorta'] },
        { text: 'Valves prevent backflow; double pump = pumps to lungs and to body', kw: ['valve', 'twice|double|two'] }
      ],
      model: 'The human heart is a muscular organ with 4 chambers: 2 upper atria with thin walls and 2 lower ventricles with thick walls. A wall (septum) separates the right side (deoxygenated blood) from the left side (oxygenated blood).\nWorking:\n• Deoxygenated blood from the body enters the right atrium through the vena cava, passes to the right ventricle, and is pumped through the pulmonary artery to the lungs.\n• Oxygenated blood from the lungs returns through the pulmonary vein to the left atrium, passes to the left ventricle, and is pumped through the aorta to the whole body.\n• Valves between the chambers prevent backflow.\nThe heart is a double pump because its right side pumps blood to the lungs and its left side pumps blood to the body, and blood passes through the heart twice in each cycle (double circulation).' },
    { marks: 5, q: 'Describe the human respiratory system and the mechanism of breathing. How are gases transported in blood?',
      keypoints: [
        { text: 'Nostrils (hairs, mucus filter air) -> pharynx -> larynx -> trachea (cartilage rings)', kw: ['nostril|nose', 'trachea'] },
        { text: 'Trachea -> bronchi -> bronchioles -> alveoli', kw: ['bronchi', 'alveoli'] },
        { text: 'Breathing in: ribs lift, diaphragm flattens, chest cavity larger, air sucked in', kw: ['diaphragm', 'rib'] },
        { text: 'Gas exchange in alveoli with capillaries; residual air', kw: ['exchange|diffus'] },
        { text: 'Haemoglobin carries oxygen; CO2 dissolved in plasma', kw: ['haemoglobin|hemoglobin', 'plasma'] }
      ],
      model: 'Air enters through the nostrils, where fine hairs and mucus filter it. It passes through the pharynx and larynx into the trachea (windpipe), which has rings of cartilage to stop it collapsing. The trachea divides into two bronchi, which divide into smaller bronchioles and end in balloon-like alveoli.\nBreathing in: the ribs are lifted and the diaphragm flattens, so the chest cavity becomes larger and air is sucked into the lungs. Breathing out reverses this. The lungs always hold some residual air.\nGas exchange: the alveoli have thin walls surrounded by capillaries. Oxygen diffuses into the blood and CO2 diffuses out.\nTransport: haemoglobin in red blood cells carries oxygen to tissues. Carbon dioxide is more soluble in water, so it is mostly carried dissolved in plasma.' },
    { marks: 4, q: 'CASE STUDY: Meena took a potted plant with variegated leaves and kept it in the dark for 3 days. Then she kept it in sunlight for 6 hours, plucked a leaf, boiled it in alcohol, and added iodine.\n(a) Why was the plant kept in the dark?\n(b) Why was the leaf boiled in alcohol?\n(c) Which parts of the leaf turned blue-black?\n(d) What does this prove?',
      keypoints: [
        { text: '(a) To destarch the leaves', kw: ['destarch|remove starch|use up'] },
        { text: '(b) To remove chlorophyll', kw: ['chlorophyll'] },
        { text: '(c) Only the green parts', kw: ['green'] },
        { text: '(d) Chlorophyll is necessary for photosynthesis', kw: ['necessary|needed|essential|required'] }
      ],
      model: '(a) To destarch the leaves — the plant uses up its stored starch in the dark, so any starch found later was made during the experiment.\n(b) To remove chlorophyll, so the colour change with iodine can be seen clearly.\n(c) Only the parts that were green turned blue-black (starch present); the white parts did not.\n(d) Chlorophyll is necessary for photosynthesis.' },
    { marks: 4, q: 'CASE STUDY: A patient\'s kidneys have stopped working, and the doctor advises dialysis.\n(a) What is the basic filtration unit of the kidney?\n(b) Name the part where blood is filtered.\n(c) How does an artificial kidney work?\n(d) How is it different from a natural kidney?',
      keypoints: [
        { text: '(a) Nephron', kw: ['nephron'] },
        { text: '(b) Glomerulus (in Bowman\'s capsule)', kw: ['glomerulus'] },
        { text: '(c) Blood passes through semi-permeable tubes in dialysing fluid; wastes diffuse out', kw: ['semi-permeable|semipermeable|dialysing'] },
        { text: '(d) No reabsorption in the artificial kidney', kw: ['reabsor'] }
      ],
      model: '(a) The nephron.\n(b) The glomerulus, a cluster of capillaries inside Bowman\'s capsule.\n(c) Blood from an artery is passed through long tubes lined with a semi-permeable membrane, kept in a tank of dialysing fluid (same osmotic pressure as blood but without nitrogenous wastes). Wastes pass from the blood into the fluid, and the clean blood is returned to a vein.\n(d) In the artificial kidney there is no reabsorption, unlike the natural kidney, which reabsorbs glucose, amino acids, salts and water.' },
    { marks: 4, q: 'CASE STUDY: Rahul ran a 400 m race. Afterwards he was breathing fast and had cramps in his legs.\n(a) Why was he breathing fast?\n(b) What caused the cramps?\n(c) Write the pathway of glucose breakdown in his muscles at that time.\n(d) Where in the cell does aerobic respiration take place?',
      keypoints: [
        { text: '(a) To take in more oxygen for his muscles', kw: ['oxygen'] },
        { text: '(b) Build-up of lactic acid', kw: ['lactic'] },
        { text: '(c) Glucose -> pyruvate (cytoplasm) -> lactic acid + energy', kw: ['pyruvate'] },
        { text: '(d) Mitochondria', kw: ['mitochondria'] }
      ],
      model: '(a) His muscles needed more oxygen for respiration to release energy, so he breathed faster to take in more oxygen.\n(b) Lack of oxygen in muscle cells caused anaerobic respiration, and lactic acid built up, causing cramps.\n(c) Glucose -> (in cytoplasm) -> pyruvate -> (lack of oxygen, in muscle cells) -> lactic acid + energy\n(d) Aerobic respiration takes place in the mitochondria.' }
  ]
});
