// CBSE Class 10 Science (NCERT) — Chapter 8: Heredity
// No equations in this chapter, so balance is empty and Balance Lab is hidden.
// Write ratios with spaces ("3 : 1") so the numbers are not shown as subscripts.
SWG.addChapter('science', {
  id: 'sci-ch08',
  number: 8,
  title: 'Heredity',
  icon: '🧬',

  topics: {
    vari: 'Variation',
    inherit: 'Inherited Traits',
    mendel: 'Mendel & His Peas',
    mono: 'Monohybrid Cross',
    di: 'Dihybrid Cross',
    express: 'How Traits are Expressed',
    sex: 'Sex Determination'
  },

  summary: [
    'Variations arise during reproduction. Asexual reproduction gives very little variation; sexual reproduction gives much more. Variations that help survival are kept in a population.',
    'Heredity is the passing of traits from parents to offspring. Both parents contribute equal amounts of genetic material, so each trait is controlled by two copies of a gene — one from each parent.',
    'Mendel worked with garden pea plants and studied contrasting traits like tall/short, round/wrinkled seeds and yellow/green seeds.',
    'Monohybrid cross (one trait): TT x tt -> F1 all tall (Tt). F2: tall : short = 3 : 1; TT : Tt : tt = 1 : 2 : 1. The trait seen in F1 is dominant; the hidden one is recessive.',
    'Dihybrid cross (two traits): RRYY x rryy -> F1 all round yellow. F2: 9 : 3 : 3 : 1, with new combinations — so traits are inherited independently.',
    'A gene is a section of DNA that carries information for making a protein. Proteins (enzymes, hormones) control traits — e.g. a gene for an efficient enzyme makes enough growth hormone for a tall plant.',
    'Genes are on chromosomes. Each body cell has two copies of each chromosome; each germ cell gets one from each pair, so fertilisation restores the full set.',
    'Sex determination: in some reptiles it depends on egg temperature; snails can change sex. In humans, women are XX and men are XY. The child\'s sex depends on whether the father\'s sperm carries X (girl) or Y (boy).'
  ],

  flashcards: [
    { topic: 'vari', front: 'What is heredity?', back: 'The passing of traits (characteristics) from parents to their offspring.' },
    { topic: 'vari', front: 'What is variation?', back: 'The differences between individuals of the same species, including between parents and offspring.' },
    { topic: 'vari', front: 'Why does asexual reproduction give very little variation?', back: 'There is only one parent, and the only source of variation is small errors in DNA copying.' },
    { topic: 'vari', front: 'Why does sexual reproduction give more variation?', back: 'DNA from TWO parents combines in new ways in each offspring, in addition to small errors in DNA copying.' },
    { topic: 'vari', front: 'How do variations accumulate over generations?', back: 'Each generation inherits the variations of the previous one and adds new ones. So over many generations, the differences build up.' },
    { topic: 'vari', front: 'Do all variations have an equal chance of surviving?', back: 'No. Depending on the environment, some variations help an individual survive better. Bacteria that can withstand heat, for example, survive a heat wave better than others.' },
    { topic: 'vari', front: 'Why is variation important?', back: 'It helps a species survive when the environment changes, because some individuals may have useful variations.' },
    { topic: 'inherit', front: 'What is a trait? Give examples.', back: 'A characteristic that can be passed on from parents to offspring.\nExamples: height, eye colour, free or attached earlobes, seed shape in peas.' },
    { topic: 'inherit', front: 'How much genetic material does each parent contribute?', back: 'An equal amount. So each trait is controlled by two copies of a gene — one from the father and one from the mother.' },
    { topic: 'inherit', front: 'What is a gene?', back: 'A section of DNA that carries the information for making one protein. Genes control traits.' },
    { topic: 'inherit', front: 'What are alleles (two versions of a gene)?', back: 'Different forms of the same gene, e.g. T (tall) and t (short). An individual has two copies — they may be the same (TT, tt) or different (Tt).' },
    { topic: 'inherit', front: 'Dominant vs recessive trait', back: 'Dominant: shows up even if only ONE copy of its gene is present (written in capital letter, e.g. T)\nRecessive: shows up only when BOTH copies are recessive (small letter, e.g. tt)' },
    { topic: 'inherit', front: 'Genotype vs phenotype', back: 'Genotype: the genes present, e.g. TT, Tt or tt\nPhenotype: the trait we can see, e.g. tall or short' },
    { topic: 'inherit', front: 'Homozygous vs heterozygous', back: 'Homozygous (pure): both copies the same — TT or tt\nHeterozygous (hybrid): two different copies — Tt' },
    { topic: 'mendel', front: 'Who is called the father of genetics?', back: 'Gregor Johann Mendel. He did experiments on garden pea plants and found the basic rules of inheritance.' },
    { topic: 'mendel', front: 'Why did Mendel choose the garden pea?', back: '• Many clear contrasting traits (tall/short, round/wrinkled)\n• Short life cycle\n• Many seeds in one generation\n• Naturally self-pollinating, but can be cross-pollinated by hand' },
    { topic: 'mendel', front: 'Name contrasting traits in pea plants studied by Mendel.', back: '• Tall / short plant\n• Round / wrinkled seeds\n• Yellow / green seeds\n• Violet / white flowers\n(The first trait in each pair is dominant.)' },
    { topic: 'mendel', front: 'What are the P, F1 and F2 generations?', back: 'P: the parent plants that are crossed\nF1: first filial generation — their offspring\nF2: second filial generation — offspring of F1 plants (usually by self-pollination)' },
    { topic: 'mendel', front: 'What did Mendel conclude from his experiments?', back: '• Traits are controlled by "factors" (now called genes)\n• Each individual has two copies of each factor\n• One copy may be dominant over the other\n• Each parent passes on one copy to the offspring\n• Different traits are inherited independently' },
    { topic: 'mono', front: 'What is a monohybrid cross?', back: 'A cross between two plants that differ in ONE pair of contrasting traits, e.g. tall x short.' },
    { topic: 'mono', front: 'Tall (TT) x short (tt): what is the F1 generation?', back: 'All plants are TALL. Their genotype is Tt.\nT from the tall parent, t from the short parent. T is dominant, so they look tall.' },
    { topic: 'mono', front: 'Monohybrid F2: phenotype ratio', back: 'Tall : short = 3 : 1' },
    { topic: 'mono', front: 'Monohybrid F2: genotype ratio', back: 'TT : Tt : tt = 1 : 2 : 1\nTT and Tt are tall; tt is short.' },
    { topic: 'mono', front: 'Why does the short trait reappear in F2?', back: 'F1 plants (Tt) carry the hidden recessive gene t. When two Tt plants cross, 1 in 4 offspring gets t from both parents (tt) and is short.' },
    { topic: 'mono', front: 'How does the monohybrid cross show that a trait can be hidden?', back: 'The short trait does not appear in F1 but comes back in F2. So the gene for shortness was present in F1 but was not expressed — it was recessive.' },
    { topic: 'mono', front: 'Checkerboard (Punnett square) for Tt x Tt', back: 'Gametes: T, t from each parent\nT x T -> TT (tall)\nT x t -> Tt (tall)\nt x T -> Tt (tall)\nt x t -> tt (short)\nResult: 3 tall : 1 short' },
    { topic: 'mono', front: 'Is a single copy of T enough to make a plant tall?', back: 'Yes. Both TT and Tt plants are tall. A plant is short only if it is tt.' },
    { topic: 'di', front: 'What is a dihybrid cross?', back: 'A cross between two plants that differ in TWO pairs of contrasting traits, e.g. round yellow seeds x wrinkled green seeds.' },
    { topic: 'di', front: 'Round yellow (RRYY) x wrinkled green (rryy): F1?', back: 'All F1 plants have ROUND YELLOW seeds (RrYy).\nRound (R) is dominant over wrinkled (r); yellow (Y) is dominant over green (y).' },
    { topic: 'di', front: 'Dihybrid F2 phenotype ratio', back: '9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green\n(9 : 3 : 3 : 1)' },
    { topic: 'di', front: 'What does the dihybrid cross show?', back: 'Traits are inherited INDEPENDENTLY. New combinations (round green, wrinkled yellow) appear in F2 that were not in either parent.' },
    { topic: 'di', front: 'Which are the new combinations in the dihybrid F2?', back: 'Round green and wrinkled yellow. The parents were round yellow and wrinkled green.' },
    { topic: 'di', front: 'Gametes made by an RrYy plant', back: 'RY, Ry, rY, ry — four kinds in equal numbers, because the two genes separate independently.' },
    { topic: 'express', front: 'How do genes control traits?', back: 'A gene carries information to make a protein. Proteins (like enzymes and hormones) control how the body grows and works, so they decide the trait.\nGene -> protein (enzyme) -> trait' },
    { topic: 'express', front: 'How does a gene decide the height of a pea plant?', back: 'Plant height depends on the amount of a growth hormone. The hormone is made with the help of an enzyme.\nEfficient enzyme -> more hormone -> tall plant\nAltered gene -> less efficient enzyme -> less hormone -> short plant' },
    { topic: 'express', front: 'Where are genes found?', back: 'On chromosomes, inside the nucleus. Each chromosome is a long DNA molecule with many genes.' },
    { topic: 'express', front: 'How many copies of each chromosome are in a body cell?', back: 'Two — one from each parent. Germ cells have only ONE copy of each.' },
    { topic: 'express', front: 'How is the amount of DNA kept constant in each generation?', back: 'Each germ cell takes only one chromosome from each pair. When a male and a female germ cell fuse, the full set (two copies) is restored in the offspring.' },
    { topic: 'express', front: 'Why do offspring show traits of both parents?', back: 'Each offspring gets one set of chromosomes from the father and one set from the mother, so it carries genes from both.' },
    { topic: 'sex', front: 'What is sex determination?', back: 'The process that decides whether an offspring will be male or female.' },
    { topic: 'sex', front: 'How is sex determined in some reptiles?', back: 'By the TEMPERATURE at which the fertilised eggs are kept. (e.g. in some turtles and lizards)' },
    { topic: 'sex', front: 'What is special about snails?', back: 'Some snails can change their sex. So sex is not fixed genetically in them.' },
    { topic: 'sex', front: 'How many chromosome pairs do humans have?', back: '23 pairs.\n22 pairs have a maternal and a paternal copy that look alike. The 23rd pair is the sex chromosomes.' },
    { topic: 'sex', front: 'Sex chromosomes in women and men', back: 'Women: XX (a perfect pair)\nMen: XY (Y is shorter)' },
    { topic: 'sex', front: 'What sex chromosome does a child always get from the mother?', back: 'An X chromosome. The mother has only X chromosomes (XX), so every egg carries X.' },
    { topic: 'sex', front: 'How is the sex of a human child decided?', back: 'By the sperm from the father:\nSperm with X + egg (X) -> XX -> girl\nSperm with Y + egg (X) -> XY -> boy' },
    { topic: 'sex', front: 'What is the chance of a baby being a boy or a girl?', back: '50% each. Half the sperms carry X and half carry Y.' },
    { topic: 'vari', front: 'Example: how can variation help bacteria survive?', back: 'If the temperature of water rises suddenly, most bacteria may die. A few variants that can resist heat survive and multiply, so the population continues.' },
    { topic: 'inherit', front: 'Earlobes: an example of an inherited trait', back: 'Earlobes may be free (hanging) or attached to the side of the head. This trait is inherited from parents, so it varies between people in a class.' },
    { topic: 'mendel', front: 'What is self-pollination and cross-pollination in Mendel\'s work?', back: 'Self-pollination: F1 plants were allowed to pollinate themselves to get F2.\nCross-pollination: Mendel transferred pollen by hand between a tall and a short plant to cross them.' },
    { topic: 'mendel', front: 'What is a pure-breeding (true-breeding) plant?', back: 'A plant that always gives offspring with the same trait when self-pollinated, because both copies of its gene are the same (TT or tt).' },
    { topic: 'mono', front: 'Tt x tt: what are the offspring?', back: 'Tt : tt = 1 : 1\nHalf tall, half short.' },
    { topic: 'mono', front: 'How can you find whether a tall plant is TT or Tt?', back: 'Cross it with a short plant (tt).\nIf all offspring are tall -> it was TT\nIf half are short -> it was Tt' },
    { topic: 'di', front: 'In a dihybrid F2 of 16 plants, how many show each type?', back: 'Round yellow: 9\nRound green: 3\nWrinkled yellow: 3\nWrinkled green: 1' },
    { topic: 'express', front: 'What is DNA?', back: 'Deoxyribonucleic acid — the chemical in chromosomes that carries hereditary information in the form of genes.' },
    { topic: 'express', front: 'Two copies of each gene: where do they come from?', back: 'One copy comes from the father (in the sperm) and one from the mother (in the egg).' },
    { topic: 'sex', front: 'Which human sex chromosome is shorter?', back: 'The Y chromosome is shorter than the X chromosome.' },
    { topic: 'sex', front: 'Is the mother responsible for the sex of the child?', back: 'No. The mother always gives an X. The father\'s sperm (X or Y) decides the sex of the child.' }
  ],

  quiz: [
    { topic: 'vari', q: 'Which type of reproduction gives more variation?', options: ['Asexual', 'Sexual', 'Budding', 'Fission'], answer: 1, explain: 'DNA from two parents combines.' },
    { topic: 'vari', q: 'In asexual reproduction, variation arises only from…', options: ['Two parents', 'Small errors in DNA copying', 'Pollination', 'Hormones'], answer: 1, explain: 'There is only one parent.' },
    { topic: 'vari', q: 'Variations that help in survival are…', options: ['Lost quickly', 'Kept in the population', 'Always harmful', 'Never passed on'], answer: 1, explain: 'Individuals with useful variations survive and reproduce.' },
    { topic: 'vari', q: 'Passing of traits from parents to offspring is called…', options: ['Variation', 'Heredity', 'Evolution', 'Fertilisation'], answer: 1, explain: 'Heredity.' },
    { topic: 'inherit', q: 'Each parent contributes ___ genetic material to the offspring.', options: ['No', 'Equal', 'More from mother', 'More from father'], answer: 1, explain: 'So each trait has two copies of a gene.' },
    { topic: 'inherit', q: 'A gene is a section of…', options: ['Protein', 'DNA', 'Cell membrane', 'Cytoplasm'], answer: 1, explain: 'It carries information for making a protein.' },
    { topic: 'inherit', q: 'A trait that shows up even with one copy of its gene is…', options: ['Recessive', 'Dominant', 'Hidden', 'Neutral'], answer: 1, explain: 'e.g. T (tall) in Tt.' },
    { topic: 'inherit', q: 'A recessive trait is expressed only when…', options: ['One copy is present', 'Both copies are recessive', 'It is dominant', 'The plant is tall'], answer: 1, explain: 'e.g. tt is short.' },
    { topic: 'inherit', q: 'Which of these is heterozygous?', options: ['TT', 'tt', 'Tt', 'RR'], answer: 2, explain: 'Two different copies of the gene.' },
    { topic: 'inherit', q: 'Tall or short (what we can see) is the plant\'s…', options: ['Genotype', 'Phenotype', 'Chromosome', 'Gene'], answer: 1, explain: 'Genotype is the gene combination, like Tt.' },
    { topic: 'mendel', q: 'Mendel did his experiments on…', options: ['Mango', 'Garden pea', 'Wheat', 'Rose'], answer: 1, explain: 'Garden pea plants.' },
    { topic: 'mendel', q: 'Which is NOT a reason Mendel chose pea plants?', options: ['Clear contrasting traits', 'Short life cycle', 'Self-pollinating', 'They grow only in winter'], answer: 3, explain: 'The others made peas ideal for his experiments.' },
    { topic: 'mendel', q: 'In pea plants, which seed shape is dominant?', options: ['Wrinkled', 'Round', 'Both equal', 'Neither'], answer: 1, explain: 'Round (R) is dominant over wrinkled (r).' },
    { topic: 'mendel', q: 'In pea plants, which seed colour is dominant?', options: ['Green', 'Yellow', 'White', 'Violet'], answer: 1, explain: 'Yellow (Y) is dominant over green (y).' },
    { topic: 'mendel', q: 'The offspring of the parent generation is called…', options: ['F2', 'F1', 'P', 'F0'], answer: 1, explain: 'First filial generation.' },
    { topic: 'mendel', q: 'Mendel called the units of inheritance…', options: ['Genes', 'Factors', 'Proteins', 'Chromosomes'], answer: 1, explain: 'Today we call them genes.' },
    { topic: 'mono', q: 'A cross between plants differing in one pair of traits is…', options: ['Dihybrid', 'Monohybrid', 'Test cross', 'Self cross'], answer: 1, explain: 'e.g. tall x short.' },
    { topic: 'mono', q: 'TT x tt gives F1 plants that are…', options: ['All short', 'All tall', 'Half tall, half short', 'Medium height'], answer: 1, explain: 'All Tt; T is dominant.' },
    { topic: 'mono', q: 'The phenotype ratio in the F2 of a monohybrid cross is…', options: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'], answer: 1, explain: 'Tall : short = 3 : 1' },
    { topic: 'mono', q: 'The genotype ratio in the F2 of a monohybrid cross is…', options: ['3 : 1', '1 : 2 : 1', '1 : 1', '9 : 3 : 3 : 1'], answer: 1, explain: 'TT : Tt : tt = 1 : 2 : 1' },
    { topic: 'mono', q: 'In the F2 of a tall x short cross, what fraction of plants are short?', options: ['1/4', '1/2', '3/4', 'None'], answer: 0, explain: 'Only tt plants are short — 1 in 4.' },
    { topic: 'mono', q: 'In the F2 of a monohybrid cross, what fraction of plants are pure tall (TT)?', options: ['1/4', '2/4', '3/4', '0'], answer: 0, explain: 'TT : Tt : tt = 1 : 2 : 1' },
    { topic: 'mono', q: 'Tt x Tt gives how many tall plants out of 4?', options: ['1', '2', '3', '4'], answer: 2, explain: 'TT, Tt, Tt are tall; tt is short.' },
    { topic: 'mono', q: 'The short trait disappears in F1 and reappears in F2. This shows it is…', options: ['Dominant', 'Recessive', 'Lost', 'New'], answer: 1, explain: 'It was hidden in Tt plants.' },
    { topic: 'mono', q: 'A tall pea plant crossed with a short one gives half tall and half short plants. The tall parent was…', options: ['TT', 'Tt', 'tt', 'Cannot say'], answer: 1, explain: 'Tt x tt -> Tt : tt = 1 : 1' },
    { topic: 'di', q: 'A cross involving two pairs of contrasting traits is…', options: ['Monohybrid', 'Dihybrid', 'Single cross', 'Back cross'], answer: 1, explain: 'e.g. seed shape and seed colour.' },
    { topic: 'di', q: 'RRYY x rryy gives F1 seeds that are…', options: ['Wrinkled green', 'Round yellow', 'Round green', 'Wrinkled yellow'], answer: 1, explain: 'All RrYy — both dominant traits show.' },
    { topic: 'di', q: 'The F2 phenotype ratio in a dihybrid cross is…', options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1 : 1 : 1'], answer: 2, explain: '9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green' },
    { topic: 'di', q: 'In the dihybrid F2, the smallest group (1 part) is…', options: ['Round yellow', 'Round green', 'Wrinkled yellow', 'Wrinkled green'], answer: 3, explain: 'Both recessive traits: rryy.' },
    { topic: 'di', q: 'The appearance of round green and wrinkled yellow seeds in F2 shows that…', options: ['Traits are inherited independently', 'Traits always stay together', 'Recessive traits are lost', 'Mendel made a mistake'], answer: 0, explain: 'New combinations prove independent inheritance.' },
    { topic: 'di', q: 'Out of 16 F2 plants in a dihybrid cross, how many are round yellow?', options: ['1', '3', '9', '16'], answer: 2, explain: '9 : 3 : 3 : 1' },
    { topic: 'di', q: 'How many kinds of gametes does an RrYy plant make?', options: ['1', '2', '4', '8'], answer: 2, explain: 'RY, Ry, rY, ry.' },
    { topic: 'express', q: 'Genes control traits by making…', options: ['Carbohydrates', 'Proteins', 'Fats', 'Water'], answer: 1, explain: 'Proteins such as enzymes and hormones.' },
    { topic: 'express', q: 'The height of a pea plant depends on the amount of…', options: ['Water', 'A growth hormone', 'Sunlight only', 'Chlorophyll'], answer: 1, explain: 'An efficient enzyme makes more hormone -> tall plant.' },
    { topic: 'express', q: 'If the gene for the enzyme is altered and the enzyme becomes less efficient, the plant will be…', options: ['Taller', 'Shorter', 'Greener', 'Unchanged'], answer: 1, explain: 'Less hormone is made.' },
    { topic: 'express', q: 'Genes are located on…', options: ['Ribosomes', 'Chromosomes', 'Cell wall', 'Vacuoles'], answer: 1, explain: 'Inside the nucleus.' },
    { topic: 'express', q: 'A germ cell has ___ copy of each chromosome.', options: ['One', 'Two', 'Four', 'No'], answer: 0, explain: 'The full pair is restored at fertilisation.' },
    { topic: 'express', q: 'The full set of chromosomes is restored in the zygote by…', options: ['Budding', 'Fertilisation', 'Mutation', 'Pollination'], answer: 1, explain: 'One set comes from each parent.' },
    { topic: 'sex', q: 'In some reptiles, the sex of the offspring is decided by…', options: ['Chromosomes', 'Temperature of the eggs', 'Food', 'Light'], answer: 1, explain: 'Sex is decided by the environment.' },
    { topic: 'sex', q: 'Which animal can change its sex?', options: ['Frog', 'Snail', 'Lizard', 'Fish'], answer: 1, explain: 'Some snails can change sex.' },
    { topic: 'sex', q: 'Humans have ___ pairs of chromosomes.', options: ['22', '23', '46', '24'], answer: 1, explain: '22 pairs + 1 pair of sex chromosomes.' },
    { topic: 'sex', q: 'The sex chromosomes of a human female are…', options: ['XY', 'XX', 'YY', 'X only'], answer: 1, explain: 'Males are XY.' },
    { topic: 'sex', q: 'The sex chromosomes of a human male are…', options: ['XX', 'XY', 'YY', 'Y only'], answer: 1, explain: 'Y is shorter than X.' },
    { topic: 'sex', q: 'A sperm carrying Y fertilises an egg. The child will be a…', options: ['Girl', 'Boy', 'Either', 'Cannot say'], answer: 1, explain: 'X (egg) + Y (sperm) = XY.' },
    { topic: 'sex', q: 'The sex of a human child is decided by…', options: ['The mother', 'The father\'s sperm', 'Food during pregnancy', 'Luck only, not genes'], answer: 1, explain: 'Eggs always carry X; sperms carry X or Y.' },
    { topic: 'sex', q: 'The chance of a newborn baby being a girl is…', options: ['25%', '50%', '75%', '100%'], answer: 1, explain: 'Half the sperms carry X.' },
    { topic: 'sex', q: 'Every child gets an X chromosome from…', options: ['The father', 'The mother', 'Both always', 'Neither'], answer: 1, explain: 'The mother is XX.' },
    // Assertion–Reason (CBSE board format; options stay in this order)
    ...[
      { topic: 'vari', a: 'Sexual reproduction gives more variation than asexual reproduction.', r: 'In sexual reproduction, DNA from two parents combines.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'inherit', a: 'Each trait is controlled by two copies of a gene.', r: 'Both parents contribute equal genetic material to the offspring.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mendel', a: 'Mendel chose pea plants for his experiments.', r: 'Pea plants have many clear contrasting traits.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mono', a: 'All F1 plants of a TT x tt cross are tall.', r: 'Tallness is a recessive trait.', answer: 2, explain: 'A is true, but R is false — tallness is DOMINANT.' },
      { topic: 'mono', a: 'The short trait reappears in the F2 generation.', r: 'F1 plants carry the recessive gene t in a hidden form.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'mono', a: 'The genotype ratio in the F2 of a monohybrid cross is 3 : 1.', r: 'TT and Tt plants look the same.', answer: 3, explain: 'A is false — the genotype ratio is 1 : 2 : 1 (3 : 1 is the phenotype ratio). R is true.' },
      { topic: 'di', a: 'Round green seeds appear in the F2 of a round yellow x wrinkled green cross.', r: 'Seed shape and seed colour are inherited independently.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'express', a: 'A pea plant with a less efficient enzyme for growth hormone is short.', r: 'Genes carry information for making proteins.', answer: 1, explain: 'Both true, but R is a general fact; the reason is that less hormone is made.' },
      { topic: 'express', a: 'Germ cells have only one copy of each chromosome.', r: 'This keeps the amount of DNA constant across generations.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'sex', a: 'The father decides the sex of a human child.', r: 'Half of the sperms carry X and half carry Y.', answer: 0, explain: 'Both true, and R explains A.' },
      { topic: 'sex', a: 'In all animals, sex is decided by chromosomes.', r: 'In some reptiles, the temperature of the eggs decides the sex.', answer: 3, explain: 'A is false — in some animals the environment decides it. R is true.' },
      { topic: 'sex', a: 'A human female has two X chromosomes.', r: 'Snails can change their sex.', answer: 1, explain: 'Both true, but R has nothing to do with A.' }
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
    { title: 'Key Terms', pairs: [
      ['Heredity', 'Passing of traits to offspring'],
      ['Variation', 'Differences between individuals'],
      ['Gene', 'Section of DNA for a protein'],
      ['Dominant', 'Shows with one copy'],
      ['Recessive', 'Shows only when both copies'],
      ['Phenotype', 'Trait we can see']
    ] },
    { title: 'Genotypes', pairs: [
      ['TT', 'Pure tall'],
      ['Tt', 'Hybrid tall'],
      ['tt', 'Short'],
      ['RRYY', 'Pure round yellow'],
      ['rryy', 'Wrinkled green'],
      ['RrYy', 'F1 of dihybrid cross']
    ] },
    { title: 'Ratios', pairs: [
      ['Monohybrid F2 phenotype', '3 : 1'],
      ['Monohybrid F2 genotype', '1 : 2 : 1'],
      ['Dihybrid F2 phenotype', '9 : 3 : 3 : 1'],
      ['Tt x tt', '1 tall : 1 short'],
      ['TT x tt (F1)', 'All tall'],
      ['Chance of a girl', '50%']
    ] },
    { title: 'Pea Traits', pairs: [
      ['Plant height', 'Tall dominant over short'],
      ['Seed shape', 'Round dominant over wrinkled'],
      ['Seed colour', 'Yellow dominant over green'],
      ['Flower colour', 'Violet dominant over white'],
      ['F1', 'First filial generation'],
      ['F2', 'Offspring of F1 plants']
    ] },
    { title: 'Genes at Work', pairs: [
      ['Gene', 'Makes a protein'],
      ['Enzyme', 'Helps make growth hormone'],
      ['More growth hormone', 'Tall plant'],
      ['Chromosome', 'Long DNA with many genes'],
      ['Germ cell', 'One copy of each chromosome'],
      ['Fertilisation', 'Restores two copies']
    ] },
    { title: 'Sex Determination', pairs: [
      ['Human female', 'XX'],
      ['Human male', 'XY'],
      ['Some reptiles', 'Egg temperature'],
      ['Snails', 'Can change sex'],
      ['X sperm + egg', 'Girl'],
      ['Y sperm + egg', 'Boy']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'What is heredity?',
      keypoints: [
        { text: 'The passing of traits from parents to offspring', kw: ['trait|characteristic', 'parent|offspring'] }
      ],
      model: 'Heredity is the passing of traits (characteristics) from parents to their offspring.' },
    { marks: 1, q: 'What are the sex chromosomes of a human male and female?',
      keypoints: [
        { text: 'Male: XY; female: XX', kw: ['xy', 'xx'] }
      ],
      model: 'A human male has XY sex chromosomes and a female has XX.' },
    { marks: 1, q: 'What is the F2 phenotype ratio in a monohybrid cross?',
      keypoints: [
        { text: '3 : 1 (dominant : recessive)', kw: ['3 : 1|3:1'] }
      ],
      model: 'The F2 phenotype ratio is 3 : 1 — e.g. 3 tall : 1 short.' },
    { marks: 1, q: 'How is sex determined in some reptiles?',
      keypoints: [
        { text: 'By the temperature at which the fertilised eggs are kept', kw: ['temperature'] }
      ],
      model: 'In some reptiles, the temperature at which the fertilised eggs are kept decides whether the young will be male or female.' },
    { marks: 2, q: 'Why does sexual reproduction give more variation than asexual reproduction?',
      keypoints: [
        { text: 'Asexual: one parent; only small errors in DNA copying', kw: ['one parent|single parent|copying'] },
        { text: 'Sexual: DNA from two parents combines in new ways', kw: ['two parent|both parent', 'combin'] }
      ],
      model: 'In asexual reproduction, there is only one parent, so variation comes only from small errors in DNA copying.\nIn sexual reproduction, DNA from two parents combines in new ways in each offspring, along with copying errors. So there is much more variation.' },
    { marks: 2, q: 'What are dominant and recessive traits? Give an example.',
      keypoints: [
        { text: 'Dominant: expressed even with one copy of its gene', kw: ['dominant', 'one copy|single copy|even'] },
        { text: 'Recessive: expressed only when both copies are recessive; e.g. tall (T) dominant, short (t) recessive', kw: ['recessive', 'both'] }
      ],
      model: 'A dominant trait is expressed even if only one copy of its gene is present.\nA recessive trait is expressed only when both copies of the gene are recessive.\nExample: in pea plants, tall (T) is dominant and short (t) is recessive — TT and Tt are tall; only tt is short.' },
    { marks: 2, q: 'How do genes control the characteristics (traits) of an organism?',
      keypoints: [
        { text: 'A gene carries information to make a specific protein', kw: ['protein'] },
        { text: 'Proteins (enzymes, hormones) control traits, e.g. height through growth hormone', kw: ['enzyme|hormone'] }
      ],
      model: 'A gene is a section of DNA that carries the information to make a specific protein. These proteins, such as enzymes and hormones, control body processes and therefore the traits. For example, a gene for an efficient enzyme makes enough growth hormone, so the pea plant is tall.' },
    { marks: 2, q: 'How is the sex of a child determined in human beings?',
      keypoints: [
        { text: 'Mother (XX) always gives X; father (XY) gives X or Y', kw: ['mother', 'father'] },
        { text: 'X from father -> girl (XX); Y from father -> boy (XY)', kw: ['girl', 'boy'] }
      ],
      model: 'Women have XX and men have XY sex chromosomes. All eggs from the mother carry an X chromosome. Half of the father\'s sperms carry X and half carry Y.\nIf a sperm with X fertilises the egg, the child is XX — a girl.\nIf a sperm with Y fertilises the egg, the child is XY — a boy.\nSo the sex of the child is decided by the father\'s sperm.' },
    { marks: 2, q: 'How does the amount of DNA stay the same from one generation to the next?',
      keypoints: [
        { text: 'Germ cells have only one copy of each chromosome (half the DNA)', kw: ['germ cell|gamete', 'one|half'] },
        { text: 'Fusion at fertilisation restores the full set', kw: ['fertilis|fertiliz|fuse|fusion', 'restore|full|two'] }
      ],
      model: 'Each body cell has two copies of each chromosome, but germ cells get only one chromosome from each pair (half the DNA). When a male germ cell and a female germ cell fuse during fertilisation, the full set of two copies is restored. So the amount of DNA stays the same in every generation.' },
    { marks: 2, q: 'Why did Mendel choose the garden pea for his experiments? Give two reasons.',
      keypoints: [
        { text: 'Many clear contrasting traits', kw: ['contrasting'] },
        { text: 'Short life cycle / self-pollinating / many seeds', kw: ['life cycle|self-pollinat|self pollinat|many seeds'] }
      ],
      model: '• Pea plants have many clear contrasting traits, e.g. tall/short, round/wrinkled seeds.\n• They have a short life cycle and produce many seeds.\n• They are naturally self-pollinating but can be cross-pollinated by hand.' },
    { marks: 3, q: 'Explain a monohybrid cross between a pure tall and a pure short pea plant up to the F2 generation.',
      keypoints: [
        { text: 'P: TT x tt; F1 all tall (Tt)', kw: ['tt', 'f1', 'all tall'] },
        { text: 'F1 self-pollinated: Tt x Tt', kw: ['tt x tt|self'] },
        { text: 'F2: 3 tall : 1 short; TT : Tt : tt = 1 : 2 : 1', kw: ['3 : 1', '1 : 2 : 1'] }
      ],
      model: 'Parents (P): pure tall TT x pure short tt\nGametes: T and t\nF1: all Tt — all tall (T is dominant)\nF1 self-pollinated: Tt x Tt\nGametes: T, t from each\nF2: TT, Tt, Tt, tt\nPhenotype ratio: 3 tall : 1 short = 3 : 1\nGenotype ratio: TT : Tt : tt = 1 : 2 : 1' },
    { marks: 3, q: 'What did Mendel conclude from his monohybrid crosses?',
      keypoints: [
        { text: 'Traits are controlled by factors (genes); each individual has two copies', kw: ['factor|gene', 'two'] },
        { text: 'One copy may be dominant over the other (recessive)', kw: ['dominant', 'recessive'] },
        { text: 'Each parent passes one copy to the offspring', kw: ['one copy|each parent|one of'] }
      ],
      model: '1. Characteristics are controlled by "factors" (now called genes).\n2. Each individual has two copies of the factor for each trait.\n3. One copy may be dominant and hide the effect of the other, which is recessive.\n4. Each parent passes on only one copy to each offspring, so the recessive trait can reappear in later generations.' },
    { marks: 3, q: 'How does a gene decide whether a pea plant is tall or short?',
      keypoints: [
        { text: 'Plant height depends on the amount of growth hormone', kw: ['growth hormone|hormone'] },
        { text: 'The hormone is made with the help of an enzyme coded by the gene', kw: ['enzyme'] },
        { text: 'Efficient enzyme -> more hormone -> tall; altered gene -> less hormone -> short', kw: ['efficient', 'short'] }
      ],
      model: 'The height of a pea plant depends on the amount of a particular growth hormone. The amount of hormone made depends on how efficient an enzyme is in making it, and the enzyme is made using the information in a gene.\nIf the gene makes an efficient enzyme, a lot of hormone is made and the plant is tall.\nIf the gene is altered and the enzyme is less efficient, less hormone is made and the plant is short.' },
    { marks: 3, q: 'Explain how sex is determined in different organisms.',
      keypoints: [
        { text: 'Some reptiles: temperature of fertilised eggs', kw: ['reptile', 'temperature'] },
        { text: 'Snails can change sex', kw: ['snail'] },
        { text: 'Humans: genetically, XX female and XY male', kw: ['xx', 'xy'] }
      ],
      model: '• In some reptiles, the temperature at which the fertilised eggs are kept decides the sex of the offspring.\n• In some animals like snails, individuals can change sex, so sex is not fixed genetically.\n• In humans, sex is decided genetically. Women have XX and men XY sex chromosomes. The child\'s sex depends on whether the sperm carries X (girl) or Y (boy).' },
    { marks: 5, q: 'Explain Mendel\'s dihybrid cross between a plant with round yellow seeds and one with wrinkled green seeds. What is the F2 ratio, and what does it show?',
      keypoints: [
        { text: 'P: RRYY x rryy', kw: ['rryy'] },
        { text: 'F1: all round yellow (RrYy)', kw: ['f1', 'round yellow'] },
        { text: 'F1 x F1 gives four types of gametes: RY, Ry, rY, ry', kw: ['ry'] },
        { text: 'F2: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green', kw: ['9 : 3 : 3 : 1'] },
        { text: 'New combinations show traits are inherited independently', kw: ['independent'] }
      ],
      model: 'Parents: round yellow (RRYY) x wrinkled green (rryy)\nGametes: RY and ry\nF1: all RrYy — round yellow (round and yellow are dominant)\nF1 self-pollinated: RrYy x RrYy. Each makes four kinds of gametes: RY, Ry, rY, ry.\nF2 (16 combinations):\n9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green\nRatio 9 : 3 : 3 : 1\nRound green and wrinkled yellow are NEW combinations not found in either parent. This shows that seed shape and seed colour are inherited independently of each other.' },
    { marks: 5, q: 'What are genes and chromosomes? How do they ensure that offspring get traits from both parents and that the DNA amount stays constant? Explain sex determination in humans.',
      keypoints: [
        { text: 'Gene: section of DNA coding for a protein; genes are on chromosomes', kw: ['gene', 'chromosome'] },
        { text: 'Body cells have two copies of each chromosome, one from each parent', kw: ['two cop|pair'] },
        { text: 'Germ cells get one of each pair; fertilisation restores the pair', kw: ['germ cell|gamete', 'fertilis|fertiliz'] },
        { text: 'Humans: 22 pairs + sex chromosomes; XX female, XY male', kw: ['22', 'xy'] },
        { text: 'Sperm with X -> girl; sperm with Y -> boy; father decides', kw: ['sperm', 'father'] }
      ],
      model: 'A gene is a section of DNA that carries the information to make a protein, which controls a trait. Genes are arranged on chromosomes in the nucleus.\nEach body cell has two copies of each chromosome — one from the father and one from the mother — so offspring show traits of both parents.\nWhen germ cells are made, each gets only one chromosome from each pair. At fertilisation, the male and female germ cells fuse and the pairs are restored. So the amount of DNA stays constant across generations.\nSex determination in humans: there are 22 pairs of matching chromosomes and one pair of sex chromosomes. Women are XX, men are XY. Every egg carries X. Half the sperms carry X and half carry Y. A sperm with X gives a girl (XX); a sperm with Y gives a boy (XY). So the father\'s sperm decides the sex of the child.' },
    { marks: 4, q: 'CASE STUDY: A pure tall pea plant (TT) was crossed with a pure short pea plant (tt). The F1 plants were self-pollinated to get the F2 generation.\n(a) What will the F1 plants look like? Write their genotype.\n(b) Write the genotypes of the F2 plants.\n(c) What is the phenotype ratio in F2?\n(d) Which trait is recessive, and how do you know?',
      keypoints: [
        { text: '(a) All tall, Tt', kw: ['all tall'] },
        { text: '(b) TT, Tt, tt in ratio 1 : 2 : 1', kw: ['1 : 2 : 1'] },
        { text: '(c) 3 tall : 1 short', kw: ['3 : 1|3 tall'] },
        { text: '(d) Shortness — hidden in F1, reappears in F2', kw: ['short', 'f2|reappear|hidden'] }
      ],
      model: '(a) All tall — every F1 plant is tall; genotype Tt.\n(b) TT, Tt and tt in the ratio 1 : 2 : 1.\n(c) 3 tall : 1 short (3 : 1).\n(d) Shortness is recessive — it does not appear in F1 (it is hidden) and reappears in F2 only in tt plants.' },
    { marks: 4, q: 'CASE STUDY: Pea plants with round yellow seeds (RRYY) were crossed with plants having wrinkled green seeds (rryy).\n(a) What type of cross is this?\n(b) What seeds will F1 plants produce?\n(c) Out of 160 F2 seeds, about how many will be wrinkled green?\n(d) Name the new combinations seen in F2.',
      keypoints: [
        { text: '(a) Dihybrid cross', kw: ['dihybrid'] },
        { text: '(b) All round yellow', kw: ['round yellow'] },
        { text: '(c) About 10 (1/16 of 160)', kw: ['10'] },
        { text: '(d) Round green and wrinkled yellow', kw: ['round green', 'wrinkled yellow'] }
      ],
      model: '(a) A dihybrid cross (two pairs of contrasting traits).\n(b) All F1 plants produce round yellow seeds (RrYy).\n(c) Wrinkled green is 1 part in 16 (9 : 3 : 3 : 1). 160 / 16 = 10 seeds.\n(d) Round green and wrinkled yellow — they were not present in either parent.' },
    { marks: 4, q: 'CASE STUDY: A couple has two daughters. Relatives blame the mother for not having a son.\n(a) What are the sex chromosomes of the mother and father?\n(b) Which sex chromosome does every egg carry?\n(c) Who decides the sex of the child? Explain.\n(d) What is the chance that their next child will be a boy?',
      keypoints: [
        { text: '(a) Mother XX, father XY', kw: ['xx', 'xy'] },
        { text: '(b) X', kw: ['x'] },
        { text: '(c) The father — his sperm carries X or Y', kw: ['father', 'sperm'] },
        { text: '(d) 50%', kw: ['50'] }
      ],
      model: '(a) Mother: XX; father: XY.\n(b) Every egg carries an X chromosome.\n(c) The father. His sperms carry either X or Y. A sperm with X gives a girl (XX); a sperm with Y gives a boy (XY). So the mother is not responsible.\n(d) 50% — each child has an equal chance of being a boy or a girl.' }
  ]
});
