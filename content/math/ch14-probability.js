// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 14: Probability
// In the syllabus: classical (theoretical) probability, 0 ≤ P(E) ≤ 1, sure/impossible events, P(E) + P(not E) = 1,
// simple problems with coins, dice, cards, balls, numbers and letters.
// Note: the app turns a digit after a letter or ')' into a subscript — never write ')digit' in text.
(function () {
  // "6/36 = 1/6" (or just "1/2" when it is already simplest)
  const pf = (mk, f, t) => { const r = `${f}/${t}`, s = mk.frac(f, t); return r === s ? r : `${r} = ${s}`; };
  const field = (mk, f, t) => ({ label: 'Probability =', answer: f / t, show: mk.frac(f, t), signed: true });
  const HINT = 'P(E) = number of favourable outcomes ÷ total number of outcomes. Type a fraction like 3/8.';
  const co = (k, v = 'x') => k === 1 ? v : k + v;
  const shuffleIdx = (opts) => opts.map((t, k) => ({ t, k })).sort(() => Math.random() - 0.5);

  // A full pack of 52 cards.
  const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const SUITS = [['spades', 'black'], ['clubs', 'black'], ['hearts', 'red'], ['diamonds', 'red']];
  const DECK = [];
  for (const [suit, colour] of SUITS) for (const r of RANKS) DECK.push({ r, suit, colour, face: 'JQK'.includes(r) });
  const CARD_EVENTS = [
    ['a face card', c => c.face, 'Face cards are the jack, queen and king: 3 in each of the 4 suits'],
    ['a red face card', c => c.face && c.colour === 'red', 'Red suits are hearts and diamonds: 3 face cards in each'],
    ['a black face card', c => c.face && c.colour === 'black', 'Black suits are spades and clubs: 3 face cards in each'],
    ['a king', c => c.r === 'K', 'One king in each suit'],
    ['a red king', c => c.r === 'K' && c.colour === 'red', 'King of hearts and king of diamonds'],
    ['a black ace', c => c.r === 'A' && c.colour === 'black', 'Ace of spades and ace of clubs'],
    ['a spade', c => c.suit === 'spades', 'There are 13 spades'],
    ['not a spade', c => c.suit !== 'spades', 'Hearts, diamonds and clubs'],
    ['a red card', c => c.colour === 'red', 'Hearts and diamonds are red'],
    ['not a face card', c => !c.face, 'Every card except the jacks, queens and kings'],
    ['the ace of hearts', c => c.r === 'A' && c.suit === 'hearts', 'There is only one ace of hearts'],
    ['the queen of diamonds', c => c.r === 'Q' && c.suit === 'diamonds', 'There is only one queen of diamonds'],
    ['a jack or a queen', c => c.r === 'J' || c.r === 'Q', '4 jacks and 4 queens'],
    ['not an ace', c => c.r !== 'A', 'Every card except the 4 aces'],
    ['a heart', c => c.suit === 'hearts', 'There are 13 hearts'],
    ['a black card', c => c.colour === 'black', 'Spades and clubs are black']
  ];
  const CARD_REMOVALS = [
    ['all the aces are removed', c => c.r === 'A'],
    ['all the red face cards are removed', c => c.face && c.colour === 'red'],
    ['all the kings and queens are removed', c => c.r === 'K' || c.r === 'Q'],
    ['all the spades are removed', c => c.suit === 'spades'],
    ['all the face cards are removed', c => c.face]
  ];

  const isPrime = n => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
  const isSq = n => Number.isInteger(Math.sqrt(n));

  SWG.addChapter('math', {
    id: 'math-ch14',
    number: 14,
    title: 'Probability',
    icon: '🎲',

    topics: {
      basics: 'Meaning of Probability',
      comp: 'Complementary Events',
      coins: 'Coins',
      dice: 'Dice',
      cards: 'Playing Cards',
      bags: 'Balls, Numbers & Letters'
    },

    summary: [
      'Theoretical (classical) probability: P(E) = (number of outcomes favourable to E) ÷ (total number of possible outcomes), when all outcomes are equally likely.',
      '0 ≤ P(E) ≤ 1 for every event. A probability can never be negative or more than 1.',
      'A sure (certain) event has probability 1. An impossible event has probability 0.',
      'An elementary event has only one outcome. The probabilities of all the elementary events of an experiment add up to 1.',
      'E and "not E" are complementary events: P(E) + P(not E) = 1, so P(not E) = 1 − P(E).',
      'Coin: 2 outcomes (H, T). Two coins: 4 (HH, HT, TH, TT). Three coins: 8. One die: 6 outcomes. Two dice: 6 × 6 = 36 outcomes.',
      'A pack of 52 cards has 4 suits of 13: spades ♠ and clubs ♣ are black, hearts ♥ and diamonds ♦ are red. Face cards: jack, queen, king → 12 in all. 4 aces.'
    ],

    flashcards: [
      { topic: 'basics', front: 'What is the theoretical (classical) probability of an event E?', back: 'P(E) = Number of outcomes favourable to E ÷ Number of all possible outcomes\n(the outcomes must be equally likely)' },
      { topic: 'basics', front: 'What are "equally likely" outcomes?', back: 'Outcomes that each have the same chance of happening.\ne.g. each face of a fair die, head or tail on a fair coin.' },
      { topic: 'basics', front: 'What are the smallest and largest values a probability can take?', back: '0 ≤ P(E) ≤ 1\nIt can never be negative and never more than 1.' },
      { topic: 'basics', front: 'What is a sure (certain) event? Its probability?', back: 'An event that is certain to happen.\nP(sure event) = 1\ne.g. getting a number less than 7 on a die.' },
      { topic: 'basics', front: 'What is an impossible event? Its probability?', back: 'An event that can never happen.\nP(impossible event) = 0\ne.g. getting 8 on a die.' },
      { topic: 'basics', front: 'What is an elementary event?', back: 'An event that has only ONE outcome of the experiment.\ne.g. getting a 4 on a die.\nThe probabilities of all elementary events add up to 1.' },
      { topic: 'basics', front: 'Which of these cannot be a probability: 2/3, −1.5, 15%, 0.7?', back: '−1.5, because a probability can never be negative.\n(15% = 0.15 is fine.)' },
      { topic: 'basics', front: 'Which of these cannot be a probability: 0, 1, 1.01, 0.99?', back: '1.01, because a probability can never be more than 1.' },
      { topic: 'basics', front: 'Is "a player either wins or loses a match" a case of equally likely outcomes?', back: 'No. Winning and losing depend on skill and many other things, so they are not equally likely.' },

      { topic: 'comp', front: 'What are complementary events?', back: 'An event E and the event "not E" (written Ē). Exactly one of them must happen.' },
      { topic: 'comp', front: 'Rule for complementary events', back: 'P(E) + P(not E) = 1\nSo P(not E) = 1 − P(E)' },
      { topic: 'comp', front: 'If P(E) = 0.05, what is P(not E)?', back: '1 − 0.05 = 0.95' },
      { topic: 'comp', front: 'The probability that Sangeeta wins a match is 0.08. What is the probability she loses (no draws)?', back: '1 − 0.08 = 0.92' },
      { topic: 'comp', front: 'If P(E) = 2/7, what is P(not E)?', back: '1 − 2/7 = 5/7' },
      { topic: 'comp', front: 'When is "1 − P(E)" the quick way?', back: 'When the opposite event is easier to count.\ne.g. P(at least one head in 3 tosses) = 1 − P(no head) = 1 − 1/8 = 7/8' },

      { topic: 'coins', front: 'Outcomes when one coin is tossed', back: 'H, T → 2 outcomes\nP(head) = P(tail) = 1/2' },
      { topic: 'coins', front: 'Outcomes when two coins are tossed (or one coin twice)', back: 'HH, HT, TH, TT → 4 outcomes' },
      { topic: 'coins', front: 'Two coins: P(at least one head)? P(at most one head)? P(exactly one head)?', back: 'At least one head: HH, HT, TH → 3/4\nAt most one head: HT, TH, TT → 3/4\nExactly one head: HT, TH → 2/4 = 1/2' },
      { topic: 'coins', front: 'Outcomes when three coins are tossed', back: 'HHH, HHT, HTH, THH, HTT, THT, TTH, TTT → 8 outcomes' },
      { topic: 'coins', front: 'Hanif tosses a coin 3 times. He wins if all tosses give the same result. P(Hanif loses)?', back: 'Wins: HHH, TTT → 2/8 = 1/4\nLoses: 1 − 1/4 = 3/4' },
      { topic: 'coins', front: 'Three coins: P(at least two heads)?', back: 'HHH, HHT, HTH, THH → 4/8 = 1/2' },

      { topic: 'dice', front: 'Outcomes when one die is thrown', back: '1, 2, 3, 4, 5, 6 → 6 outcomes' },
      { topic: 'dice', front: 'One die: P(prime number)? P(number between 2 and 6)? P(odd number)?', back: 'Prime: 2, 3, 5 → 3/6 = 1/2\nBetween 2 and 6: 3, 4, 5 → 1/2\nOdd: 1, 3, 5 → 1/2' },
      { topic: 'dice', front: 'One die: P(getting 8)? P(number less than 7)?', back: 'Getting 8: impossible → 0\nLess than 7: sure → 1' },
      { topic: 'dice', front: 'How many outcomes when two dice are thrown together?', back: '6 × 6 = 36, from (1, 1), (1, 2), … to (6, 6).\n(1, 2) and (2, 1) are DIFFERENT outcomes.' },
      { topic: 'dice', front: 'Two dice: how many ways can each sum happen?', back: 'Sum 2: 1   Sum 3: 2   Sum 4: 3\nSum 5: 4   Sum 6: 5   Sum 7: 6\nSum 8: 5   Sum 9: 4   Sum 10: 3\nSum 11: 2   Sum 12: 1   (total 36)' },
      { topic: 'dice', front: 'Two dice: P(sum is 8)? P(sum is 13)? P(sum is at most 12)?', back: 'Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2) → 5/36\nSum 13: impossible → 0\nSum ≤ 12: sure → 1' },
      { topic: 'dice', front: 'Two dice: P(doublet, i.e. the same number on both)?', back: '(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6) → 6/36 = 1/6\nDifferent numbers: 1 − 1/6 = 5/6' },
      { topic: 'dice', front: 'Two dice: P(product of the numbers is 6)?', back: '(1, 6), (6, 1), (2, 3), (3, 2) → 4/36 = 1/9' },
      { topic: 'dice', front: 'Two dice: P(sum is a prime number)?', back: 'Sums 2, 3, 5, 7, 11 happen 1 + 2 + 4 + 6 + 2 = 15 ways\nP = 15/36 = 5/12' },
      { topic: 'dice', front: 'A child\'s die has the letters A, B, C, D, E, A on its faces. P(A)? P(D)?', back: 'A is on 2 faces → 2/6 = 1/3\nD is on 1 face → 1/6' },

      { topic: 'cards', front: 'What is in a pack of 52 playing cards?', back: '4 suits of 13 cards: spades ♠, clubs ♣ (black), hearts ♥, diamonds ♦ (red)\nEach suit: A, 2, 3, …, 10, J, Q, K\n26 red, 26 black' },
      { topic: 'cards', front: 'How many face cards are there? Aces?', back: 'Face cards: jack, queen, king in each suit → 3 × 4 = 12\nAces: 4' },
      { topic: 'cards', front: 'One card from 52: P(a face card)? P(a red face card)?', back: 'Face card: 12/52 = 3/13\nRed face card: 6/52 = 3/26' },
      { topic: 'cards', front: 'One card from 52: P(a red king)? P(the jack of hearts)?', back: 'Red king: 2/52 = 1/26\nJack of hearts: 1/52' },
      { topic: 'cards', front: 'One card from 52: P(a spade)? P(an ace)? P(not an ace)?', back: 'Spade: 13/52 = 1/4\nAce: 4/52 = 1/13\nNot an ace: 1 − 1/13 = 12/13' },
      { topic: 'cards', front: 'The ten, jack, queen, king and ace of diamonds are shuffled face down. P(queen)? If the queen is drawn and put aside, P(ace)? P(queen)?', back: 'P(queen) = 1/5\nAfter: 4 cards left → P(ace) = 1/4, P(queen) = 0' },

      { topic: 'bags', front: 'A bag has 3 red and 5 black balls. P(red)? P(not red)?', back: 'Total = 8\nP(red) = 3/8\nP(not red) = 1 − 3/8 = 5/8' },
      { topic: 'bags', front: 'A box has 5 red, 8 white and 4 green marbles. P(red)? P(white)? P(not green)?', back: 'Total = 17\nRed: 5/17\nWhite: 8/17\nNot green: 13/17' },
      { topic: 'bags', front: 'A box has 90 discs numbered 1 to 90. P(two-digit number)? P(perfect square)? P(divisible by 5)?', back: 'Two-digit: 10 to 90 → 81/90 = 9/10\nSquares: 1, 4, 9, …, 81 → 9/90 = 1/10\nDivisible by 5: 5, 10, …, 90 → 18/90 = 1/5' },
      { topic: 'bags', front: '144 ball pens: 20 are defective. Nuri buys a pen only if it is good. P(she buys it)?', back: 'Good pens = 124\nP = 124/144 = 31/36\nP(she does not buy) = 5/36' },
      { topic: 'bags', front: 'A jar has 24 marbles, red and green. P(green) = 2/3. How many red marbles?', back: 'Green = 2/3 × 24 = 16\nRed = 24 − 16 = 8' },
      { topic: 'bags', front: 'A box has 12 balls, x of them black. If 6 more black balls are added, P(black) doubles. Find x.', back: 'x/12 × 2 = (x + 6)/18\n36x = 12x + 72\n24x = 72 → x = 3' },
      { topic: 'bags', front: 'A bag has 5 red balls and some blue balls. P(blue) is twice P(red). How many blue balls?', back: 'Same total, so blue = 2 × red = 10' },
      { topic: 'bags', front: 'A letter is chosen at random from the word PROBABILITY. P(vowel)?', back: '11 letters: P, R, O, B, A, B, I, L, I, T, Y\nVowels: O, A, I, I → 4\nP = 4/11' },
      { topic: 'bags', front: 'A piggy bank has 100 fifty-paise coins, 50 one-rupee, 20 two-rupee and 10 five-rupee coins. P(a 50 p coin)? P(not a ₹5 coin)?', back: 'Total = 180\n50 p: 100/180 = 5/9\nNot ₹5: 170/180 = 17/18' }
    ],

    quiz: [
      { topic: 'basics', q: 'The probability of an event E is…', options: ['Total outcomes ÷ favourable outcomes', 'Favourable outcomes ÷ total outcomes', 'Favourable outcomes − total outcomes', 'Favourable outcomes × total outcomes'], answer: 1, explain: 'P(E) = favourable ÷ total' },
      { topic: 'basics', q: 'For any event E…', options: ['P(E) > 1', '−1 ≤ P(E) ≤ 1', '0 ≤ P(E) ≤ 1', 'P(E) < 0'], answer: 2, explain: 'A probability is between 0 and 1 (both included).' },
      { topic: 'basics', q: 'The probability of a sure event is…', options: ['0', '1/2', '1', '100'], answer: 2, explain: 'It always happens.' },
      { topic: 'basics', q: 'The probability of an impossible event is…', options: ['0', '1', '−1', '1/2'], answer: 0, explain: 'It never happens.' },
      { topic: 'basics', q: 'Which of these cannot be the probability of an event?', options: ['2/3', '−1.5', '15%', '0.7'], answer: 1, explain: 'A probability cannot be negative.' },
      { topic: 'basics', q: 'Which of these cannot be the probability of an event?', options: ['0', '1', '1.01', '0.99'], answer: 2, explain: 'A probability cannot be more than 1.' },
      { topic: 'basics', q: 'The sum of the probabilities of all the elementary events of an experiment is…', options: ['0', '1/2', '1', 'It depends'], answer: 2, explain: 'Together they cover every outcome.' },
      { topic: 'basics', q: 'An event that has only one outcome is called…', options: ['A sure event', 'An impossible event', 'An elementary event', 'A complementary event'], answer: 2, explain: 'e.g. getting a 4 on a die.' },
      { topic: 'basics', q: 'The probability of getting 7 on a single throw of a die is…', options: ['1/6', '7/6', '0', '1'], answer: 2, explain: 'A die has only 1 to 6, so it is impossible.' },

      { topic: 'comp', q: 'P(E) + P(not E) = …', options: ['0', '1', '2', 'P(E)'], answer: 1, explain: 'E and "not E" are complementary events.' },
      { topic: 'comp', q: 'If P(E) = 0.05, then P(not E) is…', options: ['0.05', '0.5', '0.95', '1.05'], answer: 2, explain: '1 − 0.05' },
      { topic: 'comp', q: 'The probability of winning a game is 0.08. The probability of losing it (no draws) is…', options: ['0.92', '0.08', '0.8', '0.2'], answer: 0, explain: '1 − 0.08' },
      { topic: 'comp', q: 'If P(E) = 2/7, then P(not E) is…', options: ['2/7', '5/7', '7/2', '1/7'], answer: 1, explain: '1 − 2/7' },
      { topic: 'comp', q: 'If P(not E) = 0.3, then P(E) is…', options: ['0.3', '0.7', '1.3', '0.03'], answer: 1, explain: '1 − 0.3' },
      { topic: 'comp', q: 'E and "not E" are called…', options: ['Equally likely events', 'Complementary events', 'Impossible events', 'Elementary events'], answer: 1, explain: 'Exactly one of them happens.' },

      { topic: 'coins', q: 'A coin is tossed once. P(head) is…', options: ['0', '1/2', '1', '2'], answer: 1, explain: 'H or T: 1 out of 2.' },
      { topic: 'coins', q: 'The number of outcomes when two coins are tossed is…', options: ['2', '3', '4', '8'], answer: 2, explain: 'HH, HT, TH, TT' },
      { topic: 'coins', q: 'Two coins are tossed. P(at least one head) is…', options: ['1/4', '1/2', '3/4', '1'], answer: 2, explain: 'HH, HT, TH → 3 out of 4' },
      { topic: 'coins', q: 'Two coins are tossed. P(at most one head) is…', options: ['1/4', '1/2', '3/4', '1'], answer: 2, explain: 'HT, TH, TT → 3 out of 4' },
      { topic: 'coins', q: 'Two coins are tossed. P(exactly one head) is…', options: ['1/4', '1/2', '3/4', '1/3'], answer: 1, explain: 'HT, TH → 2 out of 4' },
      { topic: 'coins', q: 'The number of outcomes when three coins are tossed is…', options: ['3', '6', '8', '9'], answer: 2, explain: '2 × 2 × 2' },
      { topic: 'coins', q: 'Three coins are tossed. P(all heads) is…', options: ['1/8', '1/3', '1/6', '3/8'], answer: 0, explain: 'Only HHH.' },
      { topic: 'coins', q: 'A coin is tossed 3 times. P(all three results are the same) is…', options: ['1/8', '1/4', '1/2', '3/4'], answer: 1, explain: 'HHH, TTT → 2/8' },
      { topic: 'coins', q: 'Three coins are tossed. P(at least two heads) is…', options: ['3/8', '1/2', '5/8', '1/4'], answer: 1, explain: 'HHH, HHT, HTH, THH → 4/8' },

      { topic: 'dice', q: 'A die is thrown once. P(a prime number) is…', options: ['1/3', '1/2', '2/3', '1/6'], answer: 1, explain: '2, 3, 5 → 3/6' },
      { topic: 'dice', q: 'A die is thrown once. P(a number lying between 2 and 6) is…', options: ['1/2', '2/3', '1/3', '5/6'], answer: 0, explain: '3, 4, 5 → 3/6' },
      { topic: 'dice', q: 'A die is thrown once. P(a number greater than 4) is…', options: ['1/6', '1/3', '1/2', '2/3'], answer: 1, explain: '5, 6 → 2/6' },
      { topic: 'dice', q: 'A die is thrown once. P(a number less than 7) is…', options: ['0', '6/7', '1', '1/6'], answer: 2, explain: 'Every face is less than 7: a sure event.' },
      { topic: 'dice', q: 'The number of outcomes when two dice are thrown together is…', options: ['12', '24', '36', '6'], answer: 2, explain: '6 × 6' },
      { topic: 'dice', q: 'Two dice are thrown. P(sum is 8) is…', options: ['1/9', '5/36', '1/6', '2/9'], answer: 1, explain: '(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)' },
      { topic: 'dice', q: 'Two dice are thrown. P(sum is 13) is…', options: ['1/36', '0', '1/13', '1'], answer: 1, explain: 'The largest sum is 12.' },
      { topic: 'dice', q: 'Two dice are thrown. P(a doublet) is…', options: ['1/36', '1/12', '1/6', '1/3'], answer: 2, explain: '6 doublets out of 36' },
      { topic: 'dice', q: 'Two dice are thrown. P(sum is 7) is…', options: ['1/6', '7/36', '1/12', '5/36'], answer: 0, explain: '6 ways: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)' },
      { topic: 'dice', q: 'Two dice are thrown. P(product is 6) is…', options: ['1/6', '1/9', '1/12', '1/18'], answer: 1, explain: '(1, 6), (6, 1), (2, 3), (3, 2) → 4/36' },
      { topic: 'dice', q: 'Two dice are thrown. P(sum is a prime number) is…', options: ['1/2', '5/12', '7/18', '1/3'], answer: 1, explain: '1 + 2 + 4 + 6 + 2 = 15 ways → 15/36' },
      { topic: 'dice', q: 'A die has A, B, C, D, E, A on its faces. P(A) is…', options: ['1/6', '1/3', '1/2', '2/5'], answer: 1, explain: 'A is on 2 of the 6 faces.' },

      { topic: 'cards', q: 'The number of face cards in a pack of 52 cards is…', options: ['4', '12', '16', '13'], answer: 1, explain: 'J, Q, K in each of 4 suits' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(a face card) is…', options: ['3/13', '1/13', '4/13', '3/26'], answer: 0, explain: '12/52' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(a red face card) is…', options: ['3/13', '3/26', '1/26', '6/13'], answer: 1, explain: '6/52' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(a king of red colour) is…', options: ['1/13', '1/26', '1/52', '2/13'], answer: 1, explain: '2/52' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(a spade) is…', options: ['1/13', '1/4', '1/2', '13/4'], answer: 1, explain: '13/52' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(the jack of hearts) is…', options: ['1/52', '1/13', '1/4', '4/52'], answer: 0, explain: 'Only one such card' },
      { topic: 'cards', q: 'One card is drawn from a pack of 52. P(not an ace) is…', options: ['1/13', '12/13', '4/13', '48/13'], answer: 1, explain: '1 − 4/52' },
      { topic: 'cards', q: 'The ten, jack, queen, king and ace of diamonds are shuffled. P(the card is the queen) is…', options: ['1/4', '1/5', '1/13', '4/5'], answer: 1, explain: '1 queen out of 5 cards' },
      { topic: 'cards', q: 'From those 5 cards, the queen is drawn and put aside. Now P(an ace) is…', options: ['1/5', '1/4', '0', '1/3'], answer: 1, explain: '1 ace out of the 4 cards left' },

      { topic: 'bags', q: 'A bag has 3 red and 5 black balls. P(red) is…', options: ['3/5', '3/8', '5/8', '1/3'], answer: 1, explain: '3 out of 8' },
      { topic: 'bags', q: 'A box has 5 red, 8 white and 4 green marbles. P(not green) is…', options: ['4/17', '13/17', '5/17', '8/17'], answer: 1, explain: '5 + 8 = 13 out of 17' },
      { topic: 'bags', q: 'Discs numbered 1 to 90: P(a perfect square) is…', options: ['1/10', '1/9', '9/10', '1/90'], answer: 0, explain: '1, 4, 9, …, 81 → 9/90' },
      { topic: 'bags', q: 'Discs numbered 1 to 90: P(a two-digit number) is…', options: ['1/10', '9/10', '8/9', '81/89'], answer: 1, explain: '10 to 90 → 81/90' },
      { topic: 'bags', q: 'In 144 pens, 20 are defective. P(a pen taken out is good) is…', options: ['5/36', '31/36', '20/144', '1/2'], answer: 1, explain: '124/144' },
      { topic: 'bags', q: 'A jar has 24 marbles and P(green) = 2/3. The number of green marbles is…', options: ['8', '12', '16', '18'], answer: 2, explain: '2/3 × 24' },
      { topic: 'bags', q: 'A box of 12 balls has x black balls. Adding 6 black balls doubles P(black). x is…', options: ['2', '3', '4', '6'], answer: 1, explain: '2 × x/12 = (x + 6)/18 → x = 3' },
      { topic: 'bags', q: 'A bag has 5 red balls and some blue balls. P(blue) = 2 × P(red). The number of blue balls is…', options: ['5', '10', '15', '2'], answer: 1, explain: 'Same total, so blue = 2 × 5' },
      { topic: 'bags', q: 'A letter is chosen at random from the word PROBABILITY. P(a vowel) is…', options: ['3/11', '4/11', '5/11', '4/7'], answer: 1, explain: 'O, A, I, I → 4 of 11 letters' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'bags', gen(mk) {
        const names = ['red', 'blue', 'green', 'white', 'black', 'yellow'].sort(() => Math.random() - 0.5);
        const k = mk.pick([2, 3, 3]), cs = names.slice(0, k), n = cs.map(() => mk.ri(1, 12));
        if (Math.max(...n) < 2) n[0] = mk.ri(2, 12);
        const T = n.reduce((s, x) => s + x, 0), thing = mk.pick(['balls', 'marbles']);
        const desc = cs.map((c, i) => `${n[i]} ${c}`).join(k === 2 ? ' and ' : ', ').replace(/, ([^,]*)$/, ' and $1');
        const v = mk.pick(k === 3 ? ['one', 'not', 'either', 'removed'] : ['one', 'not', 'removed']);
        const i = mk.ri(0, k - 1), c = cs[i];
        let q, f, t, steps;
        if (v === 'one') { f = n[i]; t = T; q = `it is ${c}`; steps = `Total = ${T}\n${c} ${thing} = ${f}\nP(${c}) = ${pf(mk, f, t)}`; }
        if (v === 'not') { f = T - n[i]; t = T; q = `it is not ${c}`; steps = `Total = ${T}\nNot ${c} = ${T} − ${n[i]} = ${f}\nP(not ${c}) = ${pf(mk, f, t)}\n(or 1 − ${mk.frac(n[i], T)})`; }
        if (v === 'either') { const j = (i + 1) % 3; f = n[i] + n[j]; t = T; q = `it is ${c} or ${cs[j]}`; steps = `Total = ${T}\n${c} or ${cs[j]} = ${n[i]} + ${n[j]} = ${f}\nP = ${pf(mk, f, t)}`; }
        if (v === 'removed') {
          let r = 1, ii = i; while (n[ii] < 2) ii = (ii + 1) % k;
          r = mk.ri(1, n[ii] - 1); const cr = cs[ii], ask = mk.ri(0, k - 1);
          t = T - r; f = n[ask] - (ask === ii ? r : 0);
          return {
            q: `A bag contains ${desc} ${thing}. ${r} ${cr} ${r === 1 ? thing.slice(0, -1) + ' is' : thing + ' are'} taken out and kept aside. Now one ${thing.slice(0, -1)} is drawn at random from the bag. Find the probability that it is ${cs[ask]}.`,
            fields: [field(mk, f, t)], hint: `First work out how many ${thing} are left in the bag, and how many of them are ${cs[ask]}.`,
            steps: `${thing[0].toUpperCase() + thing.slice(1)} left = ${T} − ${r} = ${t}\n${cs[ask][0].toUpperCase() + cs[ask].slice(1)} ${thing} left = ${ask === ii ? `${n[ask]} − ${r} = ` : ''}${f}\nP(${cs[ask]}) = ${pf(mk, f, t)}`
          };
        }
        return { q: `A bag contains ${desc} ${thing}. One ${thing.slice(0, -1)} is drawn at random. Find the probability that ${q}.`, fields: [field(mk, f, t)], hint: HINT, steps };
      } },
      { topic: 'bags', gen(mk) {
        const v = mk.pick(['ratio', 'times', 'total', 'double']);
        if (v === 'ratio') {
          let r, b, p, q; do { r = mk.ri(2, 15); b = mk.ri(2, 20); const g = mk.gcd(b, r + b); p = b / g; q = (r + b) / g; } while (q > 12 || p === q);
          return {
            q: `A bag contains ${r} red balls and some blue balls. The probability of drawing a blue ball is ${p}/${q}. How many blue balls are there?`,
            fields: [{ label: 'Blue balls', answer: b }],
            hint: `Let there be x blue balls. Then x/(${r} + x) = ${p}/${q}. Cross-multiply.`,
            steps: `Let blue = x. Total = ${r} + x\nx/(${r} + x) = ${p}/${q}\n${co(q)} = ${p * r} + ${co(p)}\n${co(q - p)} = ${p * r}\nx = ${b}`
          };
        }
        if (v === 'times') {
          const r = mk.ri(2, 12), k = mk.ri(2, 5);
          return {
            q: `A bag contains ${r} red balls and some blue balls. The probability of drawing a blue ball is ${k === 2 ? 'twice' : k === 3 ? 'three times' : k + ' times'} that of drawing a red ball. How many blue balls are there?`,
            fields: [{ label: 'Blue balls', answer: k * r }],
            hint: 'Both probabilities have the same total at the bottom, so compare the numbers of balls.',
            steps: `Let blue = x. Total = ${r} + x\nx/(${r} + x) = ${k} × ${r}/(${r} + x)\nSo x = ${k} × ${r} = ${k * r}`
          };
        }
        if (v === 'total') {
          let N, p, q; do { q = mk.pick([3, 4, 5, 6, 8]); p = mk.ri(1, q - 1); N = q * mk.ri(3, 10); } while (mk.gcd(p, q) !== 1);
          const g = N * p / q;
          return {
            q: `A jar contains ${N} marbles. Some are green and the rest are red. The probability of drawing a green marble is ${p}/${q}. How many red marbles are in the jar?`,
            fields: [{ label: 'Red marbles', answer: N - g }],
            hint: `Green marbles = ${p}/${q} × ${N}. The rest are red.`,
            steps: `Green = ${p}/${q} × ${N} = ${g}\nRed = ${N} − ${g} = ${N - g}\n(or P(red) = 1 − ${p}/${q} = ${mk.frac(q - p, q)}, and ${mk.frac(q - p, q)} × ${N} = ${N - g})`
          };
        }
        let N, m, x; for (;;) { N = mk.ri(6, 30); m = mk.ri(1, 12); const top = N * m, bot = N + 2 * m; if (top % bot === 0) { x = top / bot; if (x >= 1 && x < N && 2 * x <= N) break; } }
        return {
          q: `A box contains ${N} balls, of which x are black. If ${m} more black balls are put in the box, the probability of drawing a black ball becomes double what it was before. Find x.`,
          fields: [{ label: 'x =', answer: x }],
          hint: `Before: x/${N}. After: (x + ${m})/${N + m}. Set the new one equal to 2 × the old one.`,
          steps: `(x + ${m})/${N + m} = 2 × x/${N}\n${N}(x + ${m}) = ${2 * (N + m)}x\n${N}x + ${N * m} = ${2 * (N + m)}x\n${N * m} = ${2 * (N + m) - N}x\nx = ${x}`
        };
      } },
      { topic: 'dice', gen(mk) {
        const k = mk.ri(2, 5), lo = mk.ri(1, 3), hi = lo + mk.ri(3, 5);
        const ev = mk.pick([
          ['an even number', x => x % 2 === 0], ['an odd number', x => x % 2 === 1], ['a prime number', isPrime],
          [`a number greater than ${k}`, x => x > k], [`a number less than ${k}`, x => x < k], [`a number at least ${k}`, x => x >= k],
          ['a multiple of 3', x => x % 3 === 0], ['a factor of 6', x => 6 % x === 0], [`a number between ${lo} and ${hi}`, x => x > lo && x < hi],
          ['a composite number', x => x > 1 && !isPrime(x)], ['a perfect square', isSq], ['a number greater than 6', x => x > 6], ['a number less than 7', x => x < 7]
        ]);
        const fav = [1, 2, 3, 4, 5, 6].filter(ev[1]);
        return {
          q: `A die is thrown once. Find the probability of getting ${ev[0]}.`,
          fields: [field(mk, fav.length, 6)], hint: HINT,
          steps: `Possible outcomes: 1, 2, 3, 4, 5, 6 (6 in all)\nFavourable: ${fav.length ? fav.join(', ') : 'none'} (${fav.length})\nP = ${pf(mk, fav.length, 6)}` +
            (fav.length === 0 ? '\nIt is an impossible event.' : fav.length === 6 ? '\nIt is a sure event.' : '') +
            (ev[0].startsWith('a number between') ? `\n("Between" does not include ${lo} and ${hi}.)` : '') + (ev[0] === 'a composite number' ? '\n(1 is neither prime nor composite.)' : '')
        };
      } },
      { topic: 'dice', gen(mk) {
        const s = mk.ri(2, 12), k1 = mk.ri(8, 11), k2 = mk.ri(3, 6), p = mk.pick([4, 5, 6, 8, 10, 12, 18, 36]), d = mk.ri(1, 6);
        const ev = mk.pick([
          [`the sum of the two numbers is ${s}`, (a, b) => a + b === s],
          ['a doublet (the same number on both dice)', (a, b) => a === b],
          [`the sum is at least ${k1}`, (a, b) => a + b >= k1],
          [`the sum is at most ${k2}`, (a, b) => a + b <= k2],
          [`the product of the two numbers is ${p}`, (a, b) => a * b === p],
          ['the sum is a prime number', (a, b) => isPrime(a + b)],
          ['the sum is a multiple of 3', (a, b) => (a + b) % 3 === 0],
          [`at least one die shows ${d}`, (a, b) => a === d || b === d],
          ['the two numbers are different', (a, b) => a !== b, 'Different numbers = 36 − 6 doublets = 30'],
          ['the sum is even', (a, b) => (a + b) % 2 === 0],
          ['the number on the first die is greater than the number on the second', (a, b) => a > b],
          ['the product is even', (a, b) => a * b % 2 === 0, 'Product is odd only when both are odd: 3 × 3 = 9 ways. So even = 36 − 9 = 27'],
          ['the sum is 13', () => false]
        ]);
        const fav = [];
        for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (ev[1](a, b)) fav.push(`(${a}, ${b})`);
        const f = fav.length;
        return {
          q: `Two dice are thrown at the same time. Find the probability that ${ev[0]}.`,
          fields: [field(mk, f, 36)], hint: 'There are 6 × 6 = 36 outcomes, written (first die, second die). (1, 2) and (2, 1) are different.',
          steps: `Total outcomes = 6 × 6 = 36\n` + (ev[2] ? ev[2] + '\n' : f === 0 ? 'Favourable: none (it is impossible)\n' : f <= 12 ? `Favourable: ${fav.join(', ')} (${f})\n` : `Favourable: ${f} pairs (count them in the 6 × 6 table of outcomes)\n`) +
            `P = ${pf(mk, f, 36)}`
        };
      } },
      { topic: 'cards', gen(mk) {
        const ev = mk.pick(CARD_EVENTS), rem = Math.random() < 0.35 ? mk.pick(CARD_REMOVALS) : null;
        const pack = rem ? DECK.filter(c => !rem[1](c)) : DECK, f = pack.filter(ev[1]).length, t = pack.length;
        if (!rem) return {
          q: `One card is drawn at random from a well-shuffled pack of 52 playing cards. Find the probability that it is ${ev[0]}.`,
          fields: [field(mk, f, 52)], hint: 'A pack has 4 suits of 13 cards. Hearts and diamonds are red; spades and clubs are black. Face cards: J, Q, K.',
          steps: `Total = 52\n${ev[2]} → ${f} cards\nP = ${pf(mk, f, 52)}`
        };
        return {
          q: `From a pack of 52 playing cards, ${rem[0]}. The remaining cards are shuffled and one card is drawn. Find the probability that it is ${ev[0]}.`,
          fields: [field(mk, f, t)], hint: 'First count how many cards are left. Then count how many of THOSE are favourable.',
          steps: `Cards removed: ${52 - t}, so cards left = ${t}\nCards left that are ${ev[0]}: ${f}\nP = ${pf(mk, f, t)}`
        };
      } },
      { topic: 'coins', gen(mk) {
        const n = mk.pick([2, 3, 3]), outs = [];
        for (let m = 0; m < 2 ** n; m++) outs.push(Array.from({ length: n }, (_, i) => (m >> (n - 1 - i)) & 1 ? 'T' : 'H').join(''));
        const H = o => o.split('').filter(c => c === 'H').length, k = mk.ri(1, n - 1);
        const ev = mk.pick([
          [`exactly ${k} head${k > 1 ? 's' : ''}`, o => H(o) === k], [`at least ${k} head${k > 1 ? 's' : ''}`, o => H(o) >= k],
          [`at most ${k} head${k > 1 ? 's' : ''}`, o => H(o) <= k], ['no head', o => H(o) === 0], ['all the same result', o => H(o) === 0 || H(o) === n],
          ['at least one tail', o => H(o) < n], [`exactly ${k} tail${k > 1 ? 's' : ''}`, o => n - H(o) === k],
          ...(n === 3 ? [['more heads than tails', o => H(o) >= 2]] : [])
        ]);
        const fav = outs.filter(ev[1]), T = outs.length;
        return {
          q: `${n === 2 ? 'Two coins are tossed together' : 'A coin is tossed three times'}. Find the probability of getting ${ev[0]}.`,
          fields: [field(mk, fav.length, T)], hint: `List all ${T} outcomes first, like ${outs.slice(0, 3).join(', ')}, …`,
          steps: `All outcomes: ${outs.join(', ')} (${T})\nFavourable: ${fav.join(', ')} (${fav.length})\nP = ${pf(mk, fav.length, T)}`
        };
      } },
      { topic: 'bags', gen(mk) {
        const s = mk.pick([1, 1, 1, 2, 3, 5, 11]), e = Math.min(100, s + mk.ri(14, 89)), k = mk.ri(3, 9);
        const evs = [['a prime number', isPrime, true], ['a perfect square', isSq, true], [`a multiple of ${k}`, x => x % k === 0, true],
          ['an even number', x => x % 2 === 0, false], ['an odd number', x => x % 2 === 1, false], ['a multiple of 10', x => x % 10 === 0, true]];
        if (s < 10 && e >= 10) evs.push(['a two-digit number', x => x >= 10 && x <= 99, false]);
        const ev = mk.pick(evs), all = []; for (let x = s; x <= e; x++) all.push(x);
        const fav = all.filter(ev[1]), T = all.length;
        const thing = mk.pick(['cards', 'discs', 'tickets']);
        let how = fav.length <= 25 && ev[2] ? `${fav.join(', ') || 'none'} (${fav.length})` : `${fav.length}`;
        if (ev[0] === 'a two-digit number') how = `10 to ${e} → ${e} − 10 + 1 = ${fav.length}`;
        if (ev[0] === 'an even number' || ev[0] === 'an odd number') how = `${fav[0]}, ${fav[1]}, …, ${fav[fav.length - 1]} → ${fav.length}`;
        return {
          q: `A box contains ${T} ${thing} numbered ${s} to ${e}. One is drawn at random. Find the probability that the number on it is ${ev[0]}.`,
          fields: [field(mk, fav.length, T)], hint: `There are ${e} − ${s} + 1 = ${T} ${thing}. Count the favourable numbers carefully.`,
          steps: `Total = ${e} − ${s} + 1 = ${T}\nFavourable: ${how}` + (ev[0] === 'a prime number' && s === 1 ? '\n(1 is not a prime number.)' : '') + `\nP = ${pf(mk, fav.length, T)}`
        };
      } },
      { topic: 'bags', gen(mk) {
        const w = mk.pick(['MATHEMATICS', 'EXAMINATION', 'PROBABILITY', 'ASSASSINATION', 'INDEPENDENCE', 'ALLAHABAD', 'MISSISSIPPI', 'EDUCATION', 'CHANDIGARH', 'SCIENCE']);
        const L = w.split(''), V = c => 'AEIOU'.includes(c), letter = mk.pick([...new Set(L)]);
        const ev = mk.pick([['a vowel', V], ['a consonant', c => !V(c)], [`the letter ${letter}`, c => c === letter]]);
        const fav = L.filter(ev[1]);
        return {
          q: `A letter is chosen at random from the letters of the word ${w}. Find the probability that it is ${ev[0]}.`,
          fields: [field(mk, fav.length, L.length)], hint: 'Count every letter, including repeated ones. Vowels are A, E, I, O, U.',
          steps: `Letters: ${L.join(', ')} (${L.length})\nFavourable: ${fav.join(', ') || 'none'} (${fav.length})\nP = ${pf(mk, fav.length, L.length)}`
        };
      } },
      { topic: 'comp', gen(mk) {
        const v = mk.pick(['frac', 'dec', 'which']);
        if (v === 'frac') {
          let p, q; do { q = mk.ri(3, 20); p = mk.ri(1, q - 1); } while (mk.gcd(p, q) !== 1);
          const ctx = mk.pick([['it rains tomorrow', 'it does not rain tomorrow'], ['Riya wins the game', 'Riya does not win'], ['a bulb is defective', 'the bulb is not defective']]);
          return {
            q: `The probability that ${ctx[0]} is ${p}/${q}. What is the probability that ${ctx[1]}?`,
            fields: [field(mk, q - p, q)], hint: 'P(E) + P(not E) = 1',
            steps: `P(not E) = 1 − P(E) = 1 − ${p}/${q} = ${q - p}/${q}`
          };
        }
        if (v === 'dec') {
          const k = mk.ri(1, 99), p = k / 100, ans = (100 - k) / 100;
          return {
            q: `If P(E) = ${p}, find P(not E).`,
            fields: [{ label: 'P(not E) =', answer: ans, show: String(ans), signed: true }], hint: 'P(not E) = 1 − P(E)',
            steps: `P(not E) = 1 − ${p} = ${ans}`
          };
        }
        const bad = mk.pick([['−0.2', 'it is negative'], ['1.5', 'it is more than 1'], ['3/2', 'it is more than 1'], ['120%', '120% = 1.2, which is more than 1'], ['−1/3', 'it is negative'], ['1.01', 'it is more than 1'], ['7/5', 'it is more than 1']]);
        const good = ['0', '1', '0.7', '2/3', '15%', '0.99', '1/2', '5/8', '100%'].sort(() => Math.random() - 0.5).slice(0, 3);
        const order = shuffleIdx([bad[0], ...good]);
        return {
          q: 'Which of these CANNOT be the probability of an event?',
          choices: order.map(o => o.t), answer: order.findIndex(o => o.k === 0),
          steps: `A probability must be between 0 and 1 (0 ≤ P(E) ≤ 1).\n${bad[0]} cannot be a probability: ${bad[1]}.`
        };
      } }
    ],

    match: [
      { title: 'Event → Probability', pairs: [
        ['A sure event', '1'],
        ['An impossible event', '0'],
        ['Head when one coin is tossed', '1/2'],
        ['Sum 7 with two dice', '1/6'],
        ['A face card from 52 cards', '3/13'],
        ['Sum 8 with two dice', '5/36']
      ] },
      { title: 'Two Dice', pairs: [
        ['Sum is 2', '1/36'],
        ['A doublet', '1/6'],
        ['Sum is 13', '0'],
        ['Sum is at most 12', '1'],
        ['Product is 6', '1/9'],
        ['Sum is a prime number', '5/12']
      ] },
      { title: 'One Card from 52', pairs: [
        ['A spade', '1/4'],
        ['A face card', '3/13'],
        ['A red face card', '3/26'],
        ['A red king', '1/26'],
        ['The jack of hearts', '1/52'],
        ['Not an ace', '12/13']
      ] },
      { title: 'Key Words', pairs: [
        ['P(E)', 'Favourable outcomes ÷ total outcomes'],
        ['P(E) + P(not E)', 'Always equal to 1'],
        ['Range of a probability', '0 ≤ P(E) ≤ 1'],
        ['Elementary event', 'Has only one outcome'],
        ['Complementary events', 'E and not E'],
        ['Equally likely outcomes', 'Each has the same chance']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'If P(E) = 0.05, what is the probability of "not E"?',
        keypoints: [{ text: 'P(not E) = 1 − 0.05 = 0.95', kw: ['0.95'] }],
        model: 'P(not E) = 1 − P(E) = 1 − 0.05 = 0.95' },
      { marks: 1, q: 'Which of the following cannot be the probability of an event: 2/3, −1.5, 15%, 0.7? Why?',
        keypoints: [{ text: '−1.5, because a probability cannot be negative', kw: ['1.5', 'negative|less than 0|< 0'] }],
        model: '−1.5 cannot be a probability, because 0 ≤ P(E) ≤ 1 and −1.5 is negative.' },
      { marks: 1, q: 'A die is thrown once. Find the probability of getting a prime number.',
        keypoints: [{ text: 'Primes 2, 3, 5 → 3/6 = 1/2', kw: ['1/2|3/6'] }],
        model: 'Outcomes: 1 to 6 (6)\nPrime numbers: 2, 3, 5 (3)\nP = 3/6 = 1/2' },
      { marks: 1, q: 'What is the probability of a sure event? Give an example.',
        keypoints: [{ text: 'Probability 1', kw: ['1'] }, { text: 'An example like a number less than 7 on a die', kw: ['die|dice|coin|always'] }],
        model: 'The probability of a sure event is 1.\nExample: getting a number less than 7 when a die is thrown.' },
      { marks: 2, q: 'A bag contains 3 red balls and 5 black balls. A ball is drawn at random. What is the probability that the ball is (i) red (ii) not red?',
        keypoints: [{ text: 'P(red) = 3/8', kw: ['3/8'] }, { text: 'P(not red) = 5/8', kw: ['5/8'] }],
        model: 'Total balls = 3 + 5 = 8\n(i) P(red) = 3/8\n(ii) P(not red) = 1 − 3/8 = 5/8' },
      { marks: 2, q: 'A box contains 5 red, 8 white and 4 green marbles. One marble is taken out at random. Find the probability that it is (i) red (ii) white (iii) not green.',
        keypoints: [{ text: 'Total 17', kw: ['17'] }, { text: 'Red 5/17, white 8/17', kw: ['5/17', '8/17'] }, { text: 'Not green 13/17', kw: ['13/17'] }],
        model: 'Total = 5 + 8 + 4 = 17\n(i) P(red) = 5/17\n(ii) P(white) = 8/17\n(iii) P(not green) = (5 + 8)/17 = 13/17' },
      { marks: 2, q: 'A lot of 144 ball pens has 20 defective pens. Nuri will buy a pen only if it is good. One pen is taken out at random. Find the probability that (i) she buys it (ii) she does not buy it.',
        keypoints: [{ text: 'Good pens = 124', kw: ['124'] }, { text: 'P(buys) = 31/36', kw: ['31/36'] }, { text: 'P(does not buy) = 5/36', kw: ['5/36'] }],
        model: 'Good pens = 144 − 20 = 124\n(i) P(buys) = 124/144 = 31/36\n(ii) P(does not buy) = 1 − 31/36 = 5/36' },
      { marks: 2, q: 'Two coins are tossed together. Find the probability of getting (i) at most one head (ii) at least one head.',
        keypoints: [{ text: 'Outcomes HH, HT, TH, TT', kw: ['HH', 'TT'] }, { text: 'At most one head: 3/4', kw: ['3/4'] }, { text: 'At least one head: 3/4', kw: ['3/4'] }],
        model: 'Outcomes: HH, HT, TH, TT (4)\n(i) At most one head: HT, TH, TT → 3/4\n(ii) At least one head: HH, HT, TH → 3/4' },
      { marks: 2, q: 'A jar contains 24 marbles, some green and the others red. If the probability of drawing a green marble is 2/3, find the number of red marbles.',
        keypoints: [{ text: 'Green = 2/3 × 24 = 16', kw: ['16'] }, { text: 'Red = 8', kw: ['8'] }],
        model: 'Let green = x. x/24 = 2/3 → x = 16\nRed = 24 − 16 = 8' },
      { marks: 3, q: 'A box contains 90 discs numbered 1 to 90. One disc is drawn at random. Find the probability that it bears (i) a two-digit number (ii) a perfect square (iii) a number divisible by 5.',
        keypoints: [
          { text: 'Two-digit: 81/90 = 9/10', kw: ['9/10|81/90'] },
          { text: 'Perfect squares: 9/90 = 1/10', kw: ['1/10|9/90'] },
          { text: 'Divisible by 5: 18/90 = 1/5', kw: ['1/5|18/90'] }
        ],
        model: 'Total = 90\n(i) Two-digit numbers: 10 to 90 → 81. P = 81/90 = 9/10\n(ii) Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81 → 9. P = 9/90 = 1/10\n(iii) Divisible by 5: 5, 10, …, 90 → 18. P = 18/90 = 1/5' },
      { marks: 3, q: 'Two dice are thrown at the same time. Find the probability that the sum of the two numbers is (i) 8 (ii) 13 (iii) less than or equal to 12.',
        keypoints: [
          { text: '36 outcomes', kw: ['36'] },
          { text: 'Sum 8: 5/36', kw: ['5/36'] },
          { text: 'Sum 13: 0 (impossible)', kw: ['0|impossible'] },
          { text: 'Sum ≤ 12: 1 (sure)', kw: ['1|sure'] }
        ],
        model: 'Total outcomes = 6 × 6 = 36\n(i) Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2) → 5/36\n(ii) Sum 13: no outcome → 0\n(iii) Sum ≤ 12: every outcome → 36/36 = 1' },
      { marks: 3, q: 'A box contains 12 balls, of which x are black. If one ball is drawn at random, what is the probability that it is black? If 6 more black balls are put in the box, the probability of drawing a black ball becomes double. Find x.',
        keypoints: [
          { text: 'P(black) = x/12', kw: ['x/12'] },
          { text: '(x + 6)/18 = 2x/12', kw: ['18'] },
          { text: 'x = 3', kw: ['3'] }
        ],
        model: 'P(black) = x/12\nAfter adding 6: (x + 6)/18\n(x + 6)/18 = 2 × x/12\n12(x + 6) = 36x\n12x + 72 = 36x → 24x = 72 → x = 3' },
      { marks: 3, q: 'The ten, jack, queen, king and ace of diamonds are shuffled with their faces down. One card is picked. (i) What is the probability that it is the queen? (ii) If the queen is drawn and put aside, what is the probability that the second card picked is (a) an ace (b) a queen?',
        keypoints: [
          { text: 'P(queen) = 1/5', kw: ['1/5'] },
          { text: 'P(ace) = 1/4 from 4 cards', kw: ['1/4'] },
          { text: 'P(queen) = 0', kw: ['0'] }
        ],
        model: '(i) 5 cards, 1 queen: P(queen) = 1/5\n(ii) 4 cards left: ten, jack, king, ace\n(a) P(ace) = 1/4\n(b) No queen left: P(queen) = 0' },
      { marks: 3, q: 'A game consists of tossing a one-rupee coin 3 times and noting the result each time. Hanif wins if all the tosses give the same result (three heads or three tails), and loses otherwise. Find the probability that Hanif will lose the game.',
        keypoints: [
          { text: '8 outcomes: HHH, HHT, …, TTT', kw: ['8'] },
          { text: 'Wins: HHH, TTT → 2/8 = 1/4', kw: ['HHH', 'TTT'] },
          { text: 'Loses: 1 − 1/4 = 3/4', kw: ['3/4|6/8'] }
        ],
        model: 'Outcomes: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT (8)\nHanif wins: HHH, TTT → 2/8 = 1/4\nP(Hanif loses) = 1 − 1/4 = 3/4' },
      { marks: 3, q: 'A piggy bank contains hundred 50 p coins, fifty ₹1 coins, twenty ₹2 coins and ten ₹5 coins. One coin falls out when the bank is turned upside down. Find the probability that the coin (i) will be a 50 p coin (ii) will not be a ₹5 coin.',
        keypoints: [
          { text: 'Total = 180', kw: ['180'] },
          { text: 'P(50 p) = 100/180 = 5/9', kw: ['5/9'] },
          { text: 'P(not ₹5) = 170/180 = 17/18', kw: ['17/18'] }
        ],
        model: 'Total coins = 100 + 50 + 20 + 10 = 180\n(i) P(50 p) = 100/180 = 5/9\n(ii) Not a ₹5 coin: 180 − 10 = 170 → 170/180 = 17/18' },
      { marks: 5, q: 'One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting (i) a king of red colour (ii) a face card (iii) a red face card (iv) the jack of hearts (v) a spade (vi) the queen of diamonds.',
        keypoints: [
          { text: 'Red king: 2/52 = 1/26', kw: ['1/26'] },
          { text: 'Face card: 12/52 = 3/13', kw: ['3/13'] },
          { text: 'Red face card: 6/52 = 3/26', kw: ['3/26'] },
          { text: 'Jack of hearts and queen of diamonds: 1/52 each', kw: ['1/52'] },
          { text: 'Spade: 13/52 = 1/4', kw: ['1/4'] }
        ],
        model: 'Total = 52\n(i) Red kings: hearts and diamonds → 2/52 = 1/26\n(ii) Face cards: 12 → 12/52 = 3/13\n(iii) Red face cards: 6 → 6/52 = 3/26\n(iv) Jack of hearts: 1 → 1/52\n(v) Spades: 13 → 13/52 = 1/4\n(vi) Queen of diamonds: 1 → 1/52' },
      { marks: 5, q: 'Two dice are thrown together. Find the probability that (i) the same number appears on both dice (ii) different numbers appear (iii) the product of the numbers is 6 (iv) the sum is a prime number.',
        keypoints: [
          { text: '36 outcomes', kw: ['36'] },
          { text: 'Same number: 6/36 = 1/6', kw: ['1/6'] },
          { text: 'Different numbers: 5/6', kw: ['5/6'] },
          { text: 'Product 6: (1, 6), (6, 1), (2, 3), (3, 2) → 1/9', kw: ['1/9|4/36'] },
          { text: 'Sum prime: 15/36 = 5/12', kw: ['5/12|15/36'] }
        ],
        model: 'Total outcomes = 36\n(i) Doublets (1, 1), …, (6, 6): 6 → 6/36 = 1/6\n(ii) Different numbers: 1 − 1/6 = 5/6\n(iii) Product 6: (1, 6), (6, 1), (2, 3), (3, 2) → 4/36 = 1/9\n(iv) Prime sums 2, 3, 5, 7, 11 happen 1 + 2 + 4 + 6 + 2 = 15 ways → 15/36 = 5/12' }
    ]
  });
})();
