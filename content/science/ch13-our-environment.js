// CBSE Class 10 Science (NCERT) — Chapter 13: Our Environment
// Formulas are written plainly (O2, O3); the app shows the numbers as subscripts.
// Write "->" for the arrow.
SWG.addChapter('science', {
  id: 'sci-ch13',
  number: 13,
  title: 'Our Environment',
  icon: '🌍',

  topics: {
    eco: 'Ecosystem',
    chain: 'Food Chains & Webs',
    energy: 'Energy Flow & 10% Law',
    mag: 'Biological Magnification',
    ozone: 'Ozone Layer',
    waste: 'Waste & Garbage'
  },

  summary: [
    'An ecosystem is all the living things (biotic) in an area together with the non-living (abiotic) factors like temperature, rainfall, wind, soil and minerals.',
    'Natural ecosystems: forests, ponds, lakes. Artificial (human-made) ecosystems: gardens, crop fields, aquariums.',
    'Producers (green plants, blue-green algae) make food. Consumers eat others: herbivores, carnivores, omnivores, parasites. Decomposers (bacteria, fungi) break down dead remains and return nutrients to the soil.',
    'A food chain shows who eats whom; each step is a trophic level. Many interconnected food chains form a food web.',
    'Green plants capture only about 1% of the sunlight falling on their leaves. Only about 10% of energy passes to the next trophic level (10% law), so food chains have only 3 or 4 steps.',
    'Energy flow is unidirectional — it does not go back to the producers or the sun.',
    'Biological magnification: non-biodegradable chemicals like pesticides build up at each trophic level. Their concentration is highest at the top — humans.',
    'The ozone layer (O3) in the upper atmosphere absorbs harmful UV rays. It is formed by UV acting on O2. CFCs damage it; in 1987 UNEP agreed to freeze CFC production at 1986 levels.',
    'Biodegradable wastes are broken down by microorganisms; non-biodegradable wastes (plastics, glass, DDT) persist and harm the environment. Reduce, reuse, recycle and separate wastes.'
  ],

  flashcards: [
    { topic: 'eco', front: 'What is an environment?', back: 'Everything around an organism — the living things and the physical surroundings — with which it interacts.' },
    { topic: 'eco', front: 'What is an ecosystem?', back: 'All the living organisms in an area together with the non-living (physical) factors of the environment, all interacting with each other.' },
    { topic: 'eco', front: 'Biotic vs abiotic components', back: 'Biotic: living things — plants, animals, microorganisms\nAbiotic: non-living factors — temperature, rainfall, wind, soil, minerals, water, sunlight' },
    { topic: 'eco', front: 'Natural vs artificial ecosystems', back: 'Natural: forests, ponds, lakes, grasslands\nArtificial (human-made): gardens, crop fields, aquariums' },
    { topic: 'eco', front: 'What are producers? Give examples.', back: 'Organisms that make their own food from simple inorganic substances using sunlight (photosynthesis).\nExamples: green plants, blue-green algae.' },
    { topic: 'eco', front: 'What are consumers? Name 4 types.', back: 'Organisms that depend on producers directly or indirectly for food.\n• Herbivores — eat plants (deer, cow)\n• Carnivores — eat animals (lion, tiger)\n• Omnivores — eat both (humans, crow)\n• Parasites — live on a host (lice, tapeworm)' },
    { topic: 'eco', front: 'What are decomposers? Give examples.', back: 'Microorganisms like bacteria and fungi that break down dead remains and waste of plants and animals into simple inorganic substances.' },
    { topic: 'eco', front: 'Why are decomposers important?', back: '• They break down dead organisms and wastes, cleaning the environment\n• They return nutrients to the soil so plants can use them again (replenish the soil)' },
    { topic: 'eco', front: 'What would happen if there were no decomposers?', back: 'Dead bodies and wastes would pile up, and nutrients would not return to the soil. Plants would lack nutrients, and the whole ecosystem would suffer.' },
    { topic: 'eco', front: 'Why do we clean an aquarium but not a pond or lake?', back: 'An aquarium is an incomplete, artificial ecosystem with few decomposers. Ponds and lakes are natural ecosystems where decomposers break down wastes and dead matter.' },
    { topic: 'chain', front: 'What is a food chain? Give an example.', back: 'A series of organisms where each one eats the one before it, showing how food (energy) passes along.\nGrass -> deer -> lion\nGrass -> grasshopper -> frog -> snake -> eagle' },
    { topic: 'chain', front: 'What is a trophic level?', back: 'Each step or level in a food chain where transfer of energy takes place.' },
    { topic: 'chain', front: 'Name the trophic levels.', back: 'T1: producers (plants)\nT2: herbivores — primary consumers\nT3: small carnivores — secondary consumers\nT4: large carnivores — tertiary consumers' },
    { topic: 'chain', front: 'What is a food web?', back: 'A network of many interconnected food chains. One organism may be eaten by many others and may eat many kinds of food.' },
    { topic: 'chain', front: 'Why is a food web more stable than a food chain?', back: 'In a food web, an animal has other food choices. If one organism disappears, others can take its place, so the ecosystem is less disturbed.' },
    { topic: 'chain', front: 'A pond food chain', back: 'Phytoplankton (algae) -> zooplankton -> small fish -> big fish' },
    { topic: 'chain', front: 'What happens if all the herbivores in a food chain are removed?', back: 'Plants (producers) may grow without control, and carnivores will starve because they have no food. The balance of the ecosystem is disturbed.' },
    { topic: 'energy', front: 'How much of the sunlight falling on leaves do plants capture?', back: 'About 1%. They convert it into food (chemical energy).' },
    { topic: 'energy', front: 'What is the 10% law?', back: 'Only about 10% of the energy at one trophic level passes on to the next level. The rest is used in life processes or lost as heat.' },
    { topic: 'energy', front: 'If plants have 10,000 J of energy, how much reaches a lion in grass -> deer -> lion?', back: 'Grass 10,000 J -> deer 1,000 J -> lion 100 J (10% each step)' },
    { topic: 'energy', front: 'Why do food chains usually have only 3 or 4 trophic levels?', back: 'At each step about 90% of energy is lost. After 3–4 levels, so little energy is left that it cannot support another level.' },
    { topic: 'energy', front: 'Why is energy flow called unidirectional?', back: 'Energy moves in ONE direction: sun -> producers -> herbivores -> carnivores. Energy taken by autotrophs does not go back to the sun, and energy passed to herbivores does not come back to the plants.' },
    { topic: 'energy', front: 'Why are there fewer animals at higher trophic levels?', back: 'Less energy is available at each higher level, so fewer organisms can be supported. e.g. many grasshoppers, fewer frogs, very few eagles.' },
    { topic: 'energy', front: 'Why is it better to eat plants than meat (in terms of energy)?', back: 'Eating plants (first consumer level) gives more of the original energy. Eating animals adds a level, and 90% is lost at each step.' },
    { topic: 'mag', front: 'What is biological magnification?', back: 'The increase in concentration of harmful, non-biodegradable chemicals (like pesticides) at each higher trophic level of a food chain.' },
    { topic: 'mag', front: 'How do pesticides enter the food chain?', back: 'Pesticides used on crops are washed into the soil and water. Plants absorb them with water and minerals, and they pass to animals that eat the plants.' },
    { topic: 'mag', front: 'Why is the concentration of pesticides highest in humans?', back: 'Humans are at the top of many food chains. These chemicals cannot be broken down, so they collect in each level and reach the highest concentration at the top.' },
    { topic: 'mag', front: 'Why do pesticides build up instead of being removed?', back: 'They are non-biodegradable — they cannot be broken down by living things or excreted easily — so they accumulate in the body.' },
    { topic: 'mag', front: 'How are we exposed to pesticides daily?', back: 'Through pesticide residues in food grains, vegetables, fruits and meat, even after washing.' },
    { topic: 'ozone', front: 'What is ozone?', back: 'A molecule made of three oxygen atoms, O3. It is a deadly poison at ground level, but in the upper atmosphere it protects us.' },
    { topic: 'ozone', front: 'Why is the ozone layer important?', back: 'It shields the Earth from harmful ultraviolet (UV) radiation from the sun. UV rays can cause skin cancer and harm living things.' },
    { topic: 'ozone', front: 'How is ozone formed?', back: 'In the upper atmosphere, UV radiation splits oxygen molecules into free oxygen atoms. These atoms combine with oxygen molecules to form ozone.\nO2 -> O + O (UV)\nO + O2 -> O3' },
    { topic: 'ozone', front: 'What caused the ozone layer to thin?', back: 'Synthetic chemicals called chlorofluorocarbons (CFCs), used as refrigerants and in fire extinguishers. The amount of ozone began to drop sharply in the 1980s.' },
    { topic: 'ozone', front: 'What was decided in 1987 about CFCs?', back: 'The United Nations Environment Programme (UNEP) got an agreement to freeze CFC production at 1986 levels. Now CFC-free refrigerators are made.' },
    { topic: 'ozone', front: 'Ozone at ground level vs in the upper atmosphere', back: 'Ground level: a deadly poison (pollutant)\nUpper atmosphere: protective layer that absorbs UV rays' },
    { topic: 'waste', front: 'Biodegradable vs non-biodegradable substances', back: 'Biodegradable: broken down by bacteria and other decomposers — vegetable peels, paper, cotton, wood, leaves\nNon-biodegradable: not broken down by biological processes — plastics, glass, metals, DDT, polythene' },
    { topic: 'waste', front: 'Why are some substances non-biodegradable?', back: 'Enzymes are specific in their action. There are no enzymes in decomposers that can break down substances like plastic.' },
    { topic: 'waste', front: 'Harmful effects of non-biodegradable wastes', back: '• Persist in the environment for a long time\n• Pollute soil and water\n• Enter food chains (biological magnification)\n• Choke drains; animals may eat plastic and die' },
    { topic: 'waste', front: 'Why were kulhads (clay cups) not a good long-term solution?', back: 'Kulhads replaced plastic cups on trains. But making them in very large numbers needed a lot of fertile top soil, which was lost.' },
    { topic: 'waste', front: 'Why are paper cups better than plastic cups?', back: 'Paper is biodegradable, so it breaks down. Plastic is non-biodegradable and stays in the environment.' },
    { topic: 'waste', front: 'Ways to manage garbage', back: '• Separate biodegradable and non-biodegradable waste\n• Compost biodegradable waste\n• Reduce, reuse, recycle\n• Avoid plastic bags; use cloth or jute bags' },
    { topic: 'waste', front: 'Why should we separate wet and dry waste at home?', back: 'Biodegradable (wet) waste can be composted, and non-biodegradable (dry) waste like plastic and glass can be recycled. Mixing them makes both harder.' },
    { topic: 'eco', front: 'What are the components of an aquarium ecosystem?', back: 'Biotic: fish, water plants, small animals, microorganisms\nAbiotic: water, sand, pebbles, light, temperature, dissolved oxygen' },
    { topic: 'eco', front: 'Autotrophs vs heterotrophs in an ecosystem', back: 'Autotrophs: make their own food — producers (green plants)\nHeterotrophs: depend on others for food — consumers and decomposers' },
    { topic: 'chain', front: 'Which way do the arrows in a food chain point?', back: 'From the food to the eater (the direction of energy flow).\nGrass -> deer means the deer eats the grass.' },
    { topic: 'chain', front: 'Primary, secondary and tertiary consumers', back: 'Primary: eat producers (herbivores)\nSecondary: eat primary consumers (small carnivores)\nTertiary: eat secondary consumers (large carnivores)' },
    { topic: 'energy', front: 'In what form do plants store energy?', back: 'As chemical energy in food (carbohydrates), made from sunlight by photosynthesis.' },
    { topic: 'energy', front: 'Which trophic level has the maximum energy?', back: 'The producer level (T1). Energy decreases at every higher level.' },
    { topic: 'mag', front: 'Name a pesticide that shows biological magnification.', back: 'DDT — a non-biodegradable pesticide that builds up in food chains.' },
    { topic: 'ozone', front: 'What does UV radiation do to living things?', back: 'It can cause skin cancer and damage living cells.' },
    { topic: 'ozone', front: 'What does CFC stand for?', back: 'Chlorofluorocarbons — synthetic chemicals containing chlorine, fluorine and carbon.' },
    { topic: 'waste', front: 'What is composting?', back: 'Turning biodegradable waste (kitchen waste, leaves) into manure using decomposers. It enriches the soil.' },
    { topic: 'waste', front: 'Name 3 Rs to reduce waste.', back: 'Reduce — use less\nReuse — use things again\nRecycle — turn waste into new products' },
    { topic: 'waste', front: 'How have changes in lifestyle increased waste?', back: 'Use of packaged goods and disposable items (plastic bags, cups, packaging) has greatly increased the amount of non-biodegradable waste.' }
  ],

  quiz: [
    { topic: 'eco', q: 'Which of these is an abiotic component?', options: ['Grass', 'Bacteria', 'Temperature', 'Frog'], answer: 2, explain: 'Abiotic = non-living factors like temperature, rainfall, soil.' },
    { topic: 'eco', q: 'Which of these is an artificial ecosystem?', options: ['Forest', 'Pond', 'Crop field', 'Lake'], answer: 2, explain: 'Gardens, crop fields and aquariums are human-made.' },
    { topic: 'eco', q: 'Green plants are called…', options: ['Consumers', 'Producers', 'Decomposers', 'Parasites'], answer: 1, explain: 'They make food by photosynthesis.' },
    { topic: 'eco', q: 'Bacteria and fungi that break down dead matter are…', options: ['Producers', 'Herbivores', 'Decomposers', 'Carnivores'], answer: 2, explain: 'They return nutrients to the soil.' },
    { topic: 'eco', q: 'Which of these is an omnivore?', options: ['Deer', 'Lion', 'Human', 'Grass'], answer: 2, explain: 'Omnivores eat both plants and animals.' },
    { topic: 'eco', q: 'Which of these is a parasite?', options: ['Cow', 'Lice', 'Eagle', 'Mango tree'], answer: 1, explain: 'Parasites live on a host.' },
    { topic: 'eco', q: 'Decomposers help by…', options: ['Making food from sunlight', 'Returning nutrients to the soil', 'Eating herbivores', 'Making ozone'], answer: 1, explain: 'They replenish the soil.' },
    { topic: 'eco', q: 'An aquarium needs regular cleaning because it…', options: ['Has too many plants', 'Lacks enough decomposers', 'Has no water', 'Has no fish'], answer: 1, explain: 'Ponds and lakes have decomposers to clean them naturally.' },
    { topic: 'chain', q: 'In the food chain grass -> deer -> lion, the deer is a…', options: ['Producer', 'Primary consumer', 'Secondary consumer', 'Decomposer'], answer: 1, explain: 'A herbivore at the second trophic level.' },
    { topic: 'chain', q: 'Each step in a food chain is called a…', options: ['Food web', 'Trophic level', 'Ecosystem', 'Habitat'], answer: 1, explain: 'Energy passes from one level to the next.' },
    { topic: 'chain', q: 'The first trophic level is always made of…', options: ['Herbivores', 'Carnivores', 'Producers', 'Decomposers'], answer: 2, explain: 'Producers (green plants).' },
    { topic: 'chain', q: 'In grass -> grasshopper -> frog -> snake -> eagle, the frog is at trophic level…', options: ['1', '2', '3', '4'], answer: 2, explain: 'Grass 1, grasshopper 2, frog 3.' },
    { topic: 'chain', q: 'Many interconnected food chains form a…', options: ['Trophic level', 'Food web', 'Ecosystem', 'Biome'], answer: 1, explain: 'A food web.' },
    { topic: 'chain', q: 'Which is a correct food chain?', options: ['Lion -> deer -> grass', 'Grass -> lion -> deer', 'Grass -> deer -> lion', 'Deer -> grass -> lion'], answer: 2, explain: 'Arrows point from food to eater.' },
    { topic: 'chain', q: 'Secondary consumers are…', options: ['Plants', 'Herbivores', 'Small carnivores', 'Decomposers'], answer: 2, explain: 'They eat herbivores.' },
    { topic: 'chain', q: 'If all herbivores in an area were removed, carnivores would…', options: ['Increase', 'Starve', 'Become producers', 'Not be affected'], answer: 1, explain: 'They would have no food.' },
    { topic: 'energy', q: 'Plants capture about ___ of the sunlight falling on their leaves.', options: ['1%', '10%', '50%', '100%'], answer: 0, explain: 'About 1% is converted to food energy.' },
    { topic: 'energy', q: 'About how much energy passes from one trophic level to the next?', options: ['1%', '10%', '50%', '90%'], answer: 1, explain: 'The 10% law.' },
    { topic: 'energy', q: 'If grass has 5,000 J, how much energy reaches the deer?', options: ['5,000 J', '500 J', '50 J', '5 J'], answer: 1, explain: '10% of 5,000 J = 500 J' },
    { topic: 'energy', q: 'In grass -> deer -> lion, if grass has 10,000 J, the lion gets…', options: ['1,000 J', '100 J', '10 J', '10,000 J'], answer: 1, explain: '10,000 -> 1,000 -> 100 J' },
    { topic: 'energy', q: 'Food chains generally have only 3 or 4 trophic levels because…', options: ['There are few animals', 'Energy available decreases greatly at each level', 'Plants are small', 'Decomposers eat the rest'], answer: 1, explain: 'About 90% is lost at each step.' },
    { topic: 'energy', q: 'The flow of energy in an ecosystem is…', options: ['Cyclic', 'Unidirectional', 'Two-way', 'Random'], answer: 1, explain: 'It never returns to the producers or the sun.' },
    { topic: 'energy', q: 'The maximum energy is available at the level of…', options: ['Producers', 'Herbivores', 'Carnivores', 'Top carnivores'], answer: 0, explain: 'Energy decreases at each higher level.' },
    { topic: 'energy', q: 'Most of the energy lost at each trophic level is used for…', options: ['Making ozone', 'Life processes and lost as heat', 'Photosynthesis', 'Decomposition only'], answer: 1, explain: 'Only about 10% is stored as body material.' },
    { topic: 'mag', q: 'The increase of harmful chemicals at higher trophic levels is called…', options: ['Eutrophication', 'Biological magnification', 'Decomposition', 'Ozone depletion'], answer: 1, explain: 'Also called biomagnification.' },
    { topic: 'mag', q: 'In a food chain, the concentration of pesticides is highest in…', options: ['Producers', 'Herbivores', 'Top consumers', 'Decomposers'], answer: 2, explain: 'Humans are often at the top.' },
    { topic: 'mag', q: 'Pesticides accumulate in food chains because they are…', options: ['Biodegradable', 'Non-biodegradable', 'Gases', 'Nutrients'], answer: 1, explain: 'They cannot be broken down.' },
    { topic: 'mag', q: 'Pesticides first enter a food chain through…', options: ['Carnivores', 'Plants absorbing them from soil and water', 'The ozone layer', 'Decomposers only'], answer: 1, explain: 'Then they pass up the chain.' },
    { topic: 'ozone', q: 'Ozone is made of ___ oxygen atoms.', options: ['1', '2', '3', '4'], answer: 2, explain: 'O3' },
    { topic: 'ozone', q: 'The ozone layer protects us from…', options: ['Infrared rays', 'Ultraviolet rays', 'Visible light', 'Radio waves'], answer: 1, explain: 'UV rays can cause skin cancer.' },
    { topic: 'ozone', q: 'At ground level, ozone is…', options: ['Protective', 'A deadly poison', 'Harmless', 'Needed for breathing'], answer: 1, explain: 'It is protective only in the upper atmosphere.' },
    { topic: 'ozone', q: 'The main chemicals responsible for ozone depletion are…', options: ['CO2', 'CFCs', 'Oxygen', 'Nitrogen'], answer: 1, explain: 'Chlorofluorocarbons, used as refrigerants and in fire extinguishers.' },
    { topic: 'ozone', q: 'In 1987, UNEP agreed to freeze CFC production at the levels of…', options: ['1980', '1986', '1990', '2000'], answer: 1, explain: '1986 levels.' },
    { topic: 'ozone', q: 'Ozone is formed when ___ acts on oxygen molecules.', options: ['Infrared light', 'UV radiation', 'Heat from the Earth', 'Rain'], answer: 1, explain: 'O2 -> O + O, then O + O2 -> O3' },
    { topic: 'ozone', q: 'CFCs were used in…', options: ['Fertilisers', 'Refrigerators and fire extinguishers', 'Medicines', 'Paper'], answer: 1, explain: 'Now CFC-free refrigerators are made.' },
    { topic: 'waste', q: 'Which of these is biodegradable?', options: ['Plastic bag', 'Glass bottle', 'Vegetable peels', 'Aluminium foil'], answer: 2, explain: 'Broken down by microorganisms.' },
    { topic: 'waste', q: 'Which of these is non-biodegradable?', options: ['Paper', 'Cotton', 'DDT', 'Wood'], answer: 2, explain: 'DDT is a pesticide that persists.' },
    { topic: 'waste', q: 'Plastic is non-biodegradable because…', options: ['It is light', 'Decomposers have no enzymes to break it down', 'It is coloured', 'It floats'], answer: 1, explain: 'Enzymes are specific in their action.' },
    { topic: 'waste', q: 'The problem with using kulhads on a very large scale was…', options: ['They were costly', 'Loss of fertile top soil', 'They were plastic', 'They broke easily'], answer: 1, explain: 'Making them needs a lot of top soil.' },
    { topic: 'waste', q: 'Disposable paper cups are better than plastic cups because paper is…', options: ['Cheaper', 'Biodegradable', 'Waterproof', 'Shiny'], answer: 1, explain: 'It breaks down naturally.' },
    { topic: 'waste', q: 'Which is the best way to handle kitchen waste?', options: ['Burn it', 'Compost it', 'Throw it in a river', 'Mix it with plastic'], answer: 1, explain: 'It is biodegradable and becomes manure.' },
    { topic: 'waste', q: 'Which is an eco-friendly habit?', options: ['Using plastic bags', 'Using cloth or jute bags', 'Mixing all garbage', 'Burning plastic'], answer: 1, explain: 'Reduce the use of non-biodegradable items.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'eco', a: 'Decomposers are important for an ecosystem.', r: 'They break down dead remains and return nutrients to the soil.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'eco', a: 'A crop field is a natural ecosystem.', r: 'A crop field has both biotic and abiotic components.', answer: 3, explain: 'A is false — a crop field is ARTIFICIAL (human-made). R is true.' },
      { topic: 'chain', a: 'A food web is more stable than a single food chain.', r: 'In a food web, animals have alternative food sources.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'energy', a: 'Food chains usually have only 3 or 4 trophic levels.', r: 'Only about 10% of energy passes on to the next level.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'energy', a: 'The flow of energy in an ecosystem is unidirectional.', r: 'Energy captured by plants does not go back to the sun.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'energy', a: 'Producers have the least energy in a food chain.', r: 'Producers trap solar energy.', answer: 3, explain: 'A is false — producers have the MOST energy. R is true.' },
      { topic: 'mag', a: 'The concentration of pesticides is highest in humans.', r: 'Humans are at the top of many food chains.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mag', a: 'Pesticides accumulate in the bodies of animals.', r: 'Pesticides are biodegradable.', answer: 2, explain: 'A is true, but R is false — pesticides are NON-biodegradable.' },
      { topic: 'ozone', a: 'Ozone in the upper atmosphere protects living beings.', r: 'Ozone absorbs harmful UV radiation from the sun.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'ozone', a: 'The ozone layer is getting depleted.', r: 'Ozone is a deadly poison at ground level.', answer: 1, explain: 'Both true, but R does not explain A — depletion is caused by CFCs.' },
      { topic: 'waste', a: 'Plastic is non-biodegradable.', r: 'Enzymes of decomposers are specific and cannot break down plastic.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'waste', a: 'Kulhads are a perfect, harmless replacement for plastic cups.', r: 'Making kulhads on a large scale causes loss of fertile top soil.', answer: 3, explain: 'A is false — large-scale use causes loss of top soil. R is true.' }
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
    { title: 'Ecosystem Parts', pairs: [
      ['Green plants', 'Producers'],
      ['Deer, cow', 'Herbivores'],
      ['Lion, tiger', 'Carnivores'],
      ['Humans, crow', 'Omnivores'],
      ['Bacteria, fungi', 'Decomposers'],
      ['Temperature, soil', 'Abiotic factors']
    ] },
    { title: 'Ecosystem Types', pairs: [
      ['Forest', 'Natural'],
      ['Pond', 'Natural'],
      ['Garden', 'Artificial'],
      ['Aquarium', 'Artificial, needs cleaning'],
      ['Crop field', 'Artificial'],
      ['Food web', 'Interconnected food chains']
    ] },
    { title: 'Trophic Levels', pairs: [
      ['T1', 'Producers'],
      ['T2', 'Primary consumers'],
      ['T3', 'Secondary consumers'],
      ['T4', 'Tertiary consumers'],
      ['Grasshopper', 'Herbivore'],
      ['Eagle', 'Top carnivore']
    ] },
    { title: 'Energy Numbers', pairs: [
      ['Sunlight captured by plants', 'About 1%'],
      ['Energy passed to next level', 'About 10%'],
      ['Usual length of a food chain', '3 or 4 levels'],
      ['Energy flow', 'Unidirectional'],
      ['10,000 J grass -> deer', '1,000 J'],
      ['Most energy', 'Producers']
    ] },
    { title: 'Ozone', pairs: [
      ['O3', 'Ozone'],
      ['UV rays', 'Cause skin cancer'],
      ['CFCs', 'Deplete ozone'],
      ['1987 UNEP', 'Freeze CFCs at 1986 levels'],
      ['Ground-level ozone', 'Deadly poison'],
      ['Upper atmosphere ozone', 'Protective layer']
    ] },
    { title: 'Waste', pairs: [
      ['Vegetable peels', 'Biodegradable'],
      ['Plastic bag', 'Non-biodegradable'],
      ['DDT', 'Biological magnification'],
      ['Kulhads', 'Loss of fertile top soil'],
      ['Paper cups', 'Biodegradable'],
      ['Kitchen waste', 'Compost']
    ] }
  ],

  // reactants/products: formulas; answer: smallest whole-number coefficients in order.
  balance: [
    { name: 'UV splits an oxygen molecule', reactants: ['O2'], products: ['O'], answer: [1, 2] },
    { name: 'Oxygen atom + oxygen molecule -> ozone', reactants: ['O', 'O2'], products: ['O3'], answer: [1, 1, 1] },
    { name: 'Overall: oxygen to ozone', reactants: ['O2'], products: ['O3'], answer: [3, 2] }
  ],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'What are trophic levels?',
      keypoints: [
        { text: 'The various steps in a food chain where energy is transferred', kw: ['step|level', 'food chain'] }
      ],
      model: 'Trophic levels are the various steps in a food chain at which transfer of energy takes place.' },
    { marks: 1, q: 'Why is ozone at ground level harmful?',
      keypoints: [
        { text: 'It is a deadly poison', kw: ['poison|toxic|harm'] }
      ],
      model: 'At ground level, ozone is a deadly poison and harms living things.' },
    { marks: 1, q: 'Name two artificial ecosystems.',
      keypoints: [
        { text: 'Garden, crop field, aquarium (any two)', kw: ['garden|crop field|aquarium'] }
      ],
      model: 'Garden and crop field (also aquarium).' },
    { marks: 1, q: 'Give two examples of non-biodegradable substances.',
      keypoints: [
        { text: 'Plastic, glass, DDT, metals (any two)', kw: ['plastic|glass|ddt|metal|polythene'] }
      ],
      model: 'Plastic and glass (also DDT, metals, polythene).' },
    { marks: 2, q: 'What is the role of decomposers in an ecosystem?',
      keypoints: [
        { text: 'They break down dead remains and wastes into simple substances', kw: ['break|decompos', 'dead|waste'] },
        { text: 'They return nutrients to the soil for plants to reuse', kw: ['soil|nutrient'] }
      ],
      model: 'Decomposers (bacteria and fungi) break down dead remains and wastes of plants and animals into simple inorganic substances. These substances go back into the soil and are used again by plants. So decomposers clean the environment and replenish the soil.' },
    { marks: 2, q: 'Why are some substances biodegradable and some non-biodegradable?',
      keypoints: [
        { text: 'Decomposers break substances down using enzymes', kw: ['enzyme'] },
        { text: 'Enzymes are specific; there are none for plastic etc., so those are non-biodegradable', kw: ['specific'] }
      ],
      model: 'Decomposers break down substances using enzymes. Enzymes are specific in their action — each works only on certain substances. Substances like vegetable peels and paper can be broken down, so they are biodegradable. Substances like plastic have no enzymes that can break them down, so they are non-biodegradable.' },
    { marks: 2, q: 'What is a food web? Why is it more useful than a food chain to describe an ecosystem?',
      keypoints: [
        { text: 'A network of interconnected food chains', kw: ['network|interconnected|connected'] },
        { text: 'Shows that organisms have many food choices; more realistic and stable', kw: ['stable|choice|alternative|more than one|many'] }
      ],
      model: 'A food web is a network of many interconnected food chains in an ecosystem. It is more realistic than a single food chain because one organism usually eats many kinds of food and is eaten by many others. It also shows why ecosystems are stable — if one food source is lost, animals can use another.' },
    { marks: 2, q: 'Why is the flow of energy in an ecosystem unidirectional?',
      keypoints: [
        { text: 'Energy moves from sun -> producers -> herbivores -> carnivores', kw: ['producer|plant', 'herbivore|consumer'] },
        { text: 'It does not return to the previous level or the sun', kw: ['not|does not|cannot'] }
      ],
      model: 'Energy flows from the sun to producers, then to herbivores and then to carnivores. Energy captured by plants does not go back to the sun, and energy passed to herbivores does not come back to the plants. So energy flow is unidirectional (one-way).' },
    { marks: 2, q: 'How is ozone formed in the upper atmosphere? Write the reactions.',
      keypoints: [
        { text: 'UV radiation splits O2 into oxygen atoms: O2 -> O + O', kw: ['uv|ultraviolet', 'o + o'] },
        { text: 'Oxygen atom combines with O2: O + O2 -> O3', kw: ['o3'] }
      ],
      model: 'In the upper atmosphere, high-energy UV radiation splits oxygen molecules into free oxygen atoms:\nO2 -> O + O\nThese oxygen atoms combine with oxygen molecules to form ozone:\nO + O2 -> O3' },
    { marks: 2, q: 'Why should biodegradable and non-biodegradable wastes be put in separate dustbins?',
      keypoints: [
        { text: 'Biodegradable waste can be composted / decomposed', kw: ['compost|manure|decompos'] },
        { text: 'Non-biodegradable waste can be recycled; separation makes disposal easier', kw: ['recycl'] }
      ],
      model: 'Biodegradable waste (like kitchen waste) can be decomposed and turned into compost (manure). Non-biodegradable waste (like plastic, glass and metal) can be sent for recycling. Keeping them separate makes both processes easier and reduces pollution.' },
    { marks: 3, q: 'What is the 10% law? Explain with an example why food chains have only 3 or 4 trophic levels.',
      keypoints: [
        { text: 'Only about 10% of energy passes to the next trophic level', kw: ['10'] },
        { text: 'The rest is used in life processes or lost as heat', kw: ['heat|life process'] },
        { text: 'Example: 10,000 J -> 1,000 J -> 100 J; little left after 3–4 levels', kw: ['1,000|1000', '100'] }
      ],
      model: 'The 10% law states that only about 10% of the energy at one trophic level is passed on to the next level. The rest is used for life processes or lost as heat.\nExample: grass (10,000 J) -> deer (1,000 J) -> lion (100 J).\nAfter 3–4 levels, so little energy remains that it cannot support another trophic level. That is why food chains are short.' },
    { marks: 3, q: 'What is biological magnification? Why is its level highest in human beings?',
      keypoints: [
        { text: 'Increase in concentration of harmful chemicals at each higher trophic level', kw: ['concentration|accumulat', 'trophic'] },
        { text: 'Pesticides are non-biodegradable; enter through plants from soil and water', kw: ['non-biodegradable', 'pesticide'] },
        { text: 'Humans are at the top of food chains, so maximum accumulation', kw: ['top'] }
      ],
      model: 'Biological magnification is the increase in concentration of harmful chemicals at each higher trophic level of a food chain.\nPesticides and other chemicals used on crops wash into soil and water. Plants absorb them, and they pass to animals that eat the plants. Since these chemicals are non-biodegradable, they are not broken down and keep accumulating at each level.\nHumans are at the top of many food chains, so these chemicals reach the highest concentration in our bodies.' },
    { marks: 3, q: 'What is the ozone layer? Why is it important? What caused its depletion and what step was taken?',
      keypoints: [
        { text: 'A layer of O3 in the upper atmosphere that absorbs UV rays (protects from skin cancer)', kw: ['uv|ultraviolet'] },
        { text: 'Depleted by CFCs used as refrigerants and in fire extinguishers', kw: ['cfc'] },
        { text: '1987 UNEP agreement to freeze CFC production at 1986 levels', kw: ['1987|1986|unep'] }
      ],
      model: 'The ozone layer is a layer of ozone (O3) in the upper atmosphere. It shields the Earth from harmful ultraviolet (UV) radiation from the sun, which can cause skin cancer.\nIts amount began to drop sharply in the 1980s due to synthetic chemicals called chlorofluorocarbons (CFCs), used as refrigerants and in fire extinguishers.\nIn 1987, the United Nations Environment Programme (UNEP) got an agreement to freeze CFC production at 1986 levels. CFC-free refrigerators are now made.' },
    { marks: 3, q: 'What will happen if we kill all the organisms in one trophic level (e.g. all herbivores)?',
      keypoints: [
        { text: 'Organisms at the level below (plants) will increase without control', kw: ['plant|producer', 'increase|grow'] },
        { text: 'Organisms at the level above (carnivores) will starve / decrease', kw: ['carnivore', 'starve|die|decrease'] },
        { text: 'The balance of the ecosystem will be disturbed', kw: ['balance'] }
      ],
      model: 'If all the herbivores are killed:\n• The producers (plants) at the level below will grow and increase without control, as nothing eats them.\n• The carnivores at the level above will have no food and will starve or die.\n• The balance of the whole ecosystem will be disturbed.' },
    { marks: 3, q: 'Distinguish between biodegradable and non-biodegradable substances with examples. Give one harmful effect of non-biodegradable substances.',
      keypoints: [
        { text: 'Biodegradable: broken down by microorganisms — e.g. vegetable peels, paper', kw: ['biodegradable', 'peel|paper|cotton|wood'] },
        { text: 'Non-biodegradable: not broken down — e.g. plastic, glass, DDT', kw: ['plastic|glass|ddt'] },
        { text: 'Harm: persist, pollute soil and water, enter food chains', kw: ['pollut|persist|food chain'] }
      ],
      model: 'Biodegradable substances are broken down by bacteria and other decomposers — e.g. vegetable peels, paper, cotton, wood.\nNon-biodegradable substances are not broken down by biological processes — e.g. plastic, glass, DDT, metals.\nHarmful effects: they persist in the environment for a long time, pollute soil and water, and can enter food chains (biological magnification).' },
    { marks: 5, q: 'What is an ecosystem? Describe its components. Explain food chains, trophic levels and the flow of energy with an example.',
      keypoints: [
        { text: 'Ecosystem: living organisms + physical environment interacting', kw: ['living|biotic', 'non-living|abiotic|physical'] },
        { text: 'Components: producers, consumers, decomposers; abiotic factors', kw: ['producer', 'consumer', 'decomposer'] },
        { text: 'Food chain example: grass -> deer -> lion; trophic levels', kw: ['food chain', 'trophic'] },
        { text: '10% law; about 1% of sunlight captured by plants', kw: ['10', '1%'] },
        { text: 'Energy flow is unidirectional', kw: ['unidirectional|one direction|one-way'] }
      ],
      model: 'An ecosystem consists of all the living organisms in an area together with the non-living (physical) environment, all interacting with each other.\nComponents:\n• Abiotic: temperature, rainfall, wind, soil, minerals, water, sunlight\n• Biotic: producers (green plants), consumers (herbivores, carnivores, omnivores, parasites) and decomposers (bacteria, fungi)\nFood chain: a series of organisms where each eats the one before, e.g. grass -> deer -> lion. Each step is a trophic level: producers (T1), herbivores (T2), carnivores (T3).\nEnergy flow: plants capture about 1% of sunlight falling on leaves. At each level only about 10% of energy passes on (10% law); the rest is used or lost as heat. So food chains have only 3–4 levels.\nEnergy flow is unidirectional — it does not go back to the producers or the sun.' },
    { marks: 5, q: 'Explain how human activities affect the environment with reference to (a) biological magnification, (b) ozone depletion and (c) waste disposal. Suggest one solution for each.',
      keypoints: [
        { text: '(a) Pesticides accumulate in food chains, highest in humans', kw: ['pesticide', 'accumulat|concentration'] },
        { text: '(a) Solution: reduce pesticide use / use organic methods', kw: ['reduce|organic|less'] },
        { text: '(b) CFCs deplete ozone, letting in UV rays', kw: ['cfc', 'uv|ultraviolet'] },
        { text: '(b) Solution: CFC-free products; 1987 agreement', kw: ['cfc-free|1987|freeze'] },
        { text: '(c) Non-biodegradable waste pollutes; separate, compost and recycle', kw: ['compost|recycl', 'separat'] }
      ],
      model: '(a) Biological magnification: pesticides sprayed on crops enter soil and water, are absorbed by plants and build up at each trophic level. Their concentration is highest in humans at the top.\nSolution: reduce pesticide use and use organic or biological methods of pest control.\n(b) Ozone depletion: CFCs used in refrigerators and fire extinguishers damage the ozone layer, allowing harmful UV rays to reach the Earth, causing skin cancer.\nSolution: use CFC-free products; the 1987 UNEP agreement froze CFC production at 1986 levels.\n(c) Waste disposal: our lifestyle creates a lot of non-biodegradable waste like plastic, which persists and pollutes soil and water.\nSolution: separate biodegradable and non-biodegradable waste, compost kitchen waste, recycle plastic and glass, and use cloth or jute bags.' },
    { marks: 4, q: 'CASE STUDY: In a grassland, the food chain is: grass -> grasshopper -> frog -> snake -> eagle. The grass has 20,000 J of energy.\n(a) Which organism is the producer, and which is the top consumer?\n(b) How much energy will reach the frog?\n(c) Which organism will have the highest concentration of pesticide if the grass is sprayed?\n(d) Why can\'t this chain go on much further?',
      keypoints: [
        { text: '(a) Producer: grass; top consumer: eagle', kw: ['grass', 'eagle'] },
        { text: '(b) 200 J (20,000 -> 2,000 -> 200)', kw: ['200 j'] },
        { text: '(c) Eagle — biological magnification', kw: ['magnification'] },
        { text: '(d) Too little energy left at higher levels (10% law)', kw: ['energy', '10'] }
      ],
      model: '(a) Producer: grass. Top consumer: eagle.\n(b) Grass 20,000 J -> grasshopper 2,000 J -> frog 200 J.\n(c) The eagle, because of biological magnification — the pesticide builds up at each higher trophic level.\n(d) Only about 10% of energy passes to each next level, so very little energy is left at the top to support another level.' },
    { marks: 4, q: 'CASE STUDY: Scientists found that the ozone layer over Antarctica had become very thin. Many countries then banned the use of CFCs.\n(a) What is the formula of ozone?\n(b) Why is the ozone layer important to us?\n(c) What are CFCs used in?\n(d) What agreement was made in 1987?',
      keypoints: [
        { text: '(a) O3', kw: ['o3'] },
        { text: '(b) Absorbs harmful UV radiation', kw: ['uv|ultraviolet'] },
        { text: '(c) Refrigerants and fire extinguishers', kw: ['refrigera', 'fire'] },
        { text: '(d) UNEP: freeze CFC production at 1986 levels', kw: ['1986'] }
      ],
      model: '(a) O3.\n(b) It absorbs harmful ultraviolet (UV) radiation from the sun, which can cause skin cancer.\n(c) CFCs are used as refrigerants and in fire extinguishers.\n(d) In 1987, the United Nations Environment Programme (UNEP) got an agreement to freeze CFC production at 1986 levels.' },
    { marks: 4, q: 'CASE STUDY: In a train, tea was served in plastic cups. It was suggested to use kulhads (clay cups) instead. Later, paper cups were also used.\n(a) Why were plastic cups a problem?\n(b) What was the disadvantage of using kulhads on a large scale?\n(c) Why are paper cups a better choice?\n(d) Suggest one habit to reduce waste.',
      keypoints: [
        { text: '(a) Plastic is non-biodegradable', kw: ['non-biodegradable'] },
        { text: '(b) Loss of fertile top soil', kw: ['top soil|topsoil'] },
        { text: '(c) Paper is biodegradable', kw: ['biodegradable'] },
        { text: '(d) Carry own cup/bag; reduce, reuse, recycle', kw: ['reuse|reduce|recycl|cloth|jute|own'] }
      ],
      model: '(a) Plastic is non-biodegradable, so used cups stay in the environment for a long time and cause pollution.\n(b) Making kulhads in very large numbers needs a lot of clay, causing loss of fertile top soil.\n(c) Paper is biodegradable and breaks down naturally, and it can be recycled.\n(d) Carry your own reusable cup or cloth bag; reduce, reuse and recycle.' }
  ]
});
