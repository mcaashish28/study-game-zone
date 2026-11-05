// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 5: Arithmetic Progressions
// In the syllabus: meaning of AP, nth term, sum of the first n terms, daily-life problems.
// Note: the app turns a digit after a letter into a subscript, so "a10" shows as a₁₀ and "S20" as S₂₀ (wanted here).
(function () {
  const nz = (mk, n) => { let v; do v = mk.ri(-n, n); while (!v); return v; };
  // Numbers that may be halves/quarters: 2.5 -> "2.5", -0.25 -> "−0.25"
  const dn = (mk, x) => mk.num(Math.round(x * 100) / 100);
  const par = (mk, x) => x < 0 ? `(${dn(mk, x)})` : dn(mk, x);
  function ord(n) { const s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  const seq = (mk, a, d, k = 4) => Array.from({ length: k }, (_, i) => dn(mk, a + i * d)).join(', ');
  // A start and a step: whole numbers mostly, sometimes halves.
  function ad(mk) {
    if (Math.random() < 0.25) return [mk.ri(-20, 20) / 2, nz(mk, 9) / 2];
    return [mk.ri(-20, 30), nz(mk, 9)];
  }

  SWG.addChapter('math', {
    id: 'math-ch05',
    number: 5,
    title: 'Arithmetic Progressions',
    icon: '🪜',

    topics: {
      basics: 'What is an AP?',
      nth: 'nth Term',
      find: 'Finding Terms & Counting Terms',
      sum: 'Sum of n Terms',
      word: 'Word Problems'
    },

    summary: [
      'An arithmetic progression (AP) is a list of numbers where each term after the first is got by adding the same number d (the common difference).',
      'General form: a, a + d, a + 2d, a + 3d, … where a is the first term. d = a2 − a1 = a3 − a2 = … and can be positive, negative or zero.',
      'nth term: aₙ = a + (n − 1)d.',
      'nth term from the end of an AP with last term l: l − (n − 1)d.',
      'Sum of the first n terms: Sₙ = n/2 [2a + (n − 1)d], or Sₙ = n/2 (a + l) when the last term l is known.',
      'If you know Sₙ, then aₙ = Sₙ − Sₙ₋₁ (and a = S1).',
      'Sum of the first n natural numbers: n(n + 1)/2. Sum of the first n odd numbers: n².',
      'A number is a term of the AP only if n comes out as a positive whole number.'
    ],

    flashcards: [
      { topic: 'basics', front: 'What is an arithmetic progression (AP)?', back: 'A list of numbers in which each term (after the first) is got by adding a fixed number d to the term before it.\ne.g. 3, 7, 11, 15, … (d = 4)' },
      { topic: 'basics', front: 'What is the common difference d? How do you find it?', back: 'd = any term − the term before it\nd = a2 − a1 = a3 − a2 = …\nIt can be positive, negative or zero.' },
      { topic: 'basics', front: 'General form of an AP', back: 'a, a + d, a + 2d, a + 3d, …\na = first term, d = common difference' },
      { topic: 'basics', front: 'How do you check whether a list is an AP?', back: 'Find the difference between every pair of neighbouring terms.\nIf ALL the differences are the same, it is an AP.' },
      { topic: 'basics', front: 'Is 2, 4, 8, 16, … an AP?', back: 'Differences: 2, 4, 8 — not the same.\nNo, it is not an AP.' },
      { topic: 'basics', front: 'Is 3, 3, 3, 3, … an AP?', back: 'Yes! d = 0.' },
      { topic: 'basics', front: 'Is 1, −1/2, −2, −7/2, … an AP? If yes, find the next term.', back: 'd = −1/2 − 1 = −3/2 each time.\nYes. Next term = −7/2 − 3/2 = −5' },
      { topic: 'basics', front: 'Is √2, √8, √18, √32, … an AP?', back: '= √2, 2√2, 3√2, 4√2\nYes, d = √2. Next term = 5√2 = √50' },
      { topic: 'basics', front: 'Write the first four terms of the AP with a = −1.25, d = −0.25.', back: '−1.25, −1.50, −1.75, −2.00' },
      { topic: 'basics', front: 'Taxi fare: ₹15 for the first km and ₹8 for each extra km. Is the list of fares an AP?', back: '15, 23, 31, 39, …\nYes, d = 8.' },
      { topic: 'basics', front: 'A vacuum pump removes 1/4 of the air left in a cylinder each time. Is the amount of air left an AP?', back: 'Amounts: V, 3V/4, 9V/16, …\nThe differences are not equal (each time it is MULTIPLIED by 3/4).\nNo, it is not an AP.' },
      { topic: 'basics', front: 'Finite and infinite AP', back: 'Finite AP: has a last term, e.g. 2, 4, 6, …, 100\nInfinite AP: goes on for ever, e.g. 1, 4, 7, 10, …' },

      { topic: 'nth', front: 'Formula for the nth term of an AP', back: 'aₙ = a + (n − 1)d\na = first term, d = common difference, n = position of the term' },
      { topic: 'nth', front: 'Find the 10th term of 2, 7, 12, …', back: 'a = 2, d = 5\na10 = 2 + 9 × 5 = 47' },
      { topic: 'nth', front: 'Find the 30th term of 10, 7, 4, …', back: 'a = 10, d = −3\na30 = 10 + 29 × (−3) = 10 − 87 = −77' },
      { topic: 'nth', front: 'Which term of 21, 18, 15, … is −81?', back: '21 + (n − 1)(−3) = −81\n(n − 1)(−3) = −102\nn − 1 = 34 → n = 35\nIt is the 35th term.' },
      { topic: 'nth', front: 'Is 301 a term of 5, 11, 17, 23, …?', back: '5 + (n − 1) × 6 = 301\nn − 1 = 296/6 = 148/3\nn is not a whole number, so 301 is NOT a term.' },
      { topic: 'nth', front: 'If aₙ = 3n + 2, is the list an AP?', back: 'Yes. a1 = 5, a2 = 8, a3 = 11, … d = 3.\nIf aₙ is of the form pn + q, it is an AP with d = p.' },
      { topic: 'nth', front: 'Which term of 3, 15, 27, 39, … will be 132 more than its 54th term?', back: 'd = 12; 132 = 11 × 12, so it is 11 terms later.\n54 + 11 = 65th term' },
      { topic: 'nth', front: 'Two APs have the same d. The difference of their 100th terms is 100. What is the difference of their 1000th terms?', back: 'Still 100. With the same d, the gap between matching terms never changes: (a + 999d) − (b + 999d) = a − b.' },

      { topic: 'find', front: 'The 3rd term of an AP is 5 and the 7th term is 9. Find the AP.', back: 'a + 2d = 5, a + 6d = 9\nSubtract: 4d = 4 → d = 1, a = 3\nAP: 3, 4, 5, 6, …' },
      { topic: 'find', front: 'The 11th term is 38 and the 16th term is 73. Find the 31st term.', back: 'a + 10d = 38, a + 15d = 73\n5d = 35 → d = 7, a = −32\na31 = −32 + 30 × 7 = 178' },
      { topic: 'find', front: 'How many terms are in 7, 13, 19, …, 205?', back: '205 = 7 + (n − 1) × 6\nn − 1 = 33 → n = 34 terms' },
      { topic: 'find', front: 'How many three-digit numbers are divisible by 7?', back: 'AP: 105, 112, …, 994\n994 = 105 + (n − 1) × 7\nn − 1 = 127 → n = 128' },
      { topic: 'find', front: 'nth term from the END of an AP', back: 'l − (n − 1)d\nl = last term\n(or reverse the AP: first term l, common difference −d)' },
      { topic: 'find', front: 'Find the 10th term from the end of 4, 9, 14, …, 254.', back: 'l = 254, d = 5\n254 − 9 × 5 = 209' },
      { topic: 'find', front: 'Middle term of an AP with an odd number of terms n', back: 'It is the ((n + 1)/2)th term.\ne.g. 7 terms → the 4th term' },

      { topic: 'sum', front: 'Sum of the first n terms of an AP', back: 'Sₙ = n/2 [2a + (n − 1)d]' },
      { topic: 'sum', front: 'Sum when the last term l is known', back: 'Sₙ = n/2 (a + l)\n(first term + last term) × half the number of terms' },
      { topic: 'sum', front: 'Sum of the first n natural numbers', back: '1 + 2 + 3 + … + n = n(n + 1)/2\ne.g. first 1000: 1000 × 1001/2 = 500500' },
      { topic: 'sum', front: 'Sum of the first n odd numbers', back: '1 + 3 + 5 + … (n terms) = n²\ne.g. 1 + 3 + … + 49 (25 terms) = 625' },
      { topic: 'sum', front: 'How do you find aₙ from the sums?', back: 'aₙ = Sₙ − Sₙ₋₁\nand a = a1 = S1' },
      { topic: 'sum', front: 'Find the sum of the first 22 terms of 8, 3, −2, …', back: 'a = 8, d = −5, n = 22\nS22 = 11[16 + 21(−5)] = 11(−89) = −979' },
      { topic: 'sum', front: 'Find 2 + 5 + 8 + … + 50.', back: '50 = 2 + 3(n − 1) → n = 17\nS = 17/2 (2 + 50) = 17 × 26 = 442' },
      { topic: 'sum', front: 'Find the sum of the first 15 multiples of 8.', back: '8 + 16 + … + 120\nS = 15/2 (8 + 120) = 15 × 64 = 960' },
      { topic: 'sum', front: 'If Sₙ = 4n − n², find the first term and the 10th term.', back: 'a = S1 = 3\nS2 = 4, so a2 = 4 − 3 = 1 → d = −2\na10 = 3 + 9(−2) = −15' },
      { topic: 'sum', front: 'How many terms of 24, 21, 18, … make a sum of 78?', back: 'n/2 [48 + (n − 1)(−3)] = 78\nn² − 17n + 52 = 0 → (n − 4)(n − 13) = 0\nn = 4 or 13. Both work: terms 5 to 13 add up to 0.' },

      { topic: 'word', front: 'Ramkali saved ₹5 in the first week and ₹1.75 more every week. In which week does she save ₹20.75?', back: '5 + (n − 1) × 1.75 = 20.75\n(n − 1) × 1.75 = 15.75 → n − 1 = 9\nThe 10th week' },
      { topic: 'word', front: 'Subba Rao earned ₹5000 in 1995 with a ₹200 rise every year. In which year did he reach ₹7000?', back: '5000 + (n − 1) × 200 = 7000\nn − 1 = 10 → n = 11\n11th year: 2005' },
      { topic: 'word', front: '₹700 is given as 7 prizes. Each prize is ₹20 less than the one before. Find the prizes.', back: '7/2 [2a + 6(−20)] = 700\n2a − 120 = 200 → a = 160\n₹160, 140, 120, 100, 80, 60, 40' },
      { topic: 'word', front: 'A factory made 600 TVs in year 3 and 700 in year 7 (steady rise). Find year 1, year 10 and the total in 7 years.', back: 'a + 2d = 600, a + 6d = 700 → d = 25, a = 550\nYear 10: 550 + 9 × 25 = 775\nS7 = 7/2 [1100 + 150] = 4375' },
      { topic: 'word', front: '200 logs are stacked: 20 in the bottom row, 19 in the next, 18 next, … How many rows, and how many logs in the top row?', back: 'n/2 [40 − (n − 1)] = 200\nn² − 41n + 400 = 0 → n = 16 or 25\n25 rows is impossible (rows would go negative)\n16 rows; top row 20 − 15 = 5 logs' },
      { topic: 'word', front: 'Penalty for late work: ₹200 on day 1, ₹250 on day 2, ₹300 on day 3, … Total for 30 days?', back: 'a = 200, d = 50, n = 30\nS30 = 15[400 + 29 × 50] = 15 × 1850 = ₹27750' }
    ],

    quiz: [
      { topic: 'basics', q: 'The common difference of 3, 1, −1, −3, … is…', options: ['2', '−2', '−1', '4'], answer: 1, explain: '1 − 3 = −2' },
      { topic: 'basics', q: 'Which of these is an AP?', options: ['2, 4, 8, 16', '1, 4, 9, 16', '5, 9, 13, 17', '1, 2, 4, 7'], answer: 2, explain: 'Differences are all 4.' },
      { topic: 'basics', q: 'Which of these is NOT an AP?', options: ['−10, −6, −2, 2', '3, 3, 3, 3', '1², 3², 5², 7²', '0.2, 0.22, 0.24, 0.26'], answer: 2, explain: '1, 9, 25, 49: differences 8, 16, 24.' },
      { topic: 'basics', q: 'The next term of √2, √8, √18, √32, … is…', options: ['√36', '√50', '√40', '6'], answer: 1, explain: '√2, 2√2, 3√2, 4√2 → 5√2 = √50' },
      { topic: 'basics', q: 'For the AP 1/2, 1, 3/2, 2, …, d is…', options: ['1', '1/2', '2', '3/2'], answer: 1, explain: '1 − 1/2 = 1/2' },
      { topic: 'basics', q: 'An AP with a = 10 and d = −3 starts…', options: ['10, 13, 16', '10, 7, 4', '−3, 7, 17', '10, −30, 90'], answer: 1, explain: 'Keep adding −3.' },
      { topic: 'basics', q: 'In an AP, d can be…', options: ['Only positive', 'Only negative', 'Positive, negative or zero', 'Never zero'], answer: 2, explain: 'e.g. 3, 3, 3 has d = 0.' },
      { topic: 'basics', q: 'Taxi fare is ₹15 for the first km and ₹8 for each extra km. The fares form…', options: ['An AP with d = 15', 'An AP with d = 8', 'Not an AP', 'An AP with d = 23'], answer: 1, explain: '15, 23, 31, 39, …' },
      { topic: 'basics', q: 'If k + 2, 4k − 6 and 3k − 2 are in AP, then k is…', options: ['2', '3', '4', '5'], answer: 1, explain: '2(4k − 6) = (k + 2) + (3k − 2) → 8k − 12 = 4k → k = 3' },

      { topic: 'nth', q: 'The nth term of an AP is…', options: ['a + nd', 'a + (n − 1)d', 'a + (n + 1)d', 'n/2 [2a + (n − 1)d]'], answer: 1, explain: 'aₙ = a + (n − 1)d' },
      { topic: 'nth', q: 'The 10th term of 2, 7, 12, … is…', options: ['45', '47', '50', '52'], answer: 1, explain: '2 + 9 × 5 = 47' },
      { topic: 'nth', q: 'The 30th term of 10, 7, 4, … is…', options: ['97', '77', '−77', '−87'], answer: 2, explain: '10 + 29(−3) = −77' },
      { topic: 'nth', q: 'Which term of 21, 18, 15, … is −81?', options: ['34th', '35th', '36th', '27th'], answer: 1, explain: '(n − 1)(−3) = −102 → n = 35' },
      { topic: 'nth', q: 'Is 301 a term of 5, 11, 17, 23, …?', options: ['Yes, the 50th', 'Yes, the 49th', 'No', 'Yes, the 51st'], answer: 2, explain: 'n − 1 = 296/6 is not a whole number.' },
      { topic: 'nth', q: 'If aₙ = 3 + 4n, the common difference is…', options: ['3', '4', '7', '1'], answer: 1, explain: 'The number in front of n is d.' },
      { topic: 'nth', q: 'The 11th term of √2, 3√2, 5√2, … is…', options: ['21√2', '22√2', '19√2', '20√2'], answer: 0, explain: '√2 + 10 × 2√2 = 21√2' },
      { topic: 'nth', q: 'Which term of 3, 15, 27, 39, … is 132 more than its 54th term?', options: ['64th', '65th', '66th', '76th'], answer: 1, explain: '132 ÷ 12 = 11 terms after the 54th.' },
      { topic: 'nth', q: 'The first negative term of 20, 19¼, 18½, 17¾, … is the…', options: ['27th', '28th', '26th', '29th'], answer: 1, explain: '20 − (n − 1)(3/4) < 0 → n − 1 > 26.67 → n = 28' },

      { topic: 'find', q: 'The 3rd term of an AP is 5 and the 7th is 9. The common difference is…', options: ['1', '2', '4', '−1'], answer: 0, explain: '4d = 9 − 5' },
      { topic: 'find', q: 'The 11th term is 38 and the 16th term is 73. The 31st term is…', options: ['178', '171', '185', '213'], answer: 0, explain: 'd = 7, a = −32 → −32 + 210' },
      { topic: 'find', q: 'The number of terms in 7, 13, 19, …, 205 is…', options: ['33', '34', '35', '36'], answer: 1, explain: '(205 − 7)/6 + 1 = 34' },
      { topic: 'find', q: 'The number of three-digit numbers divisible by 7 is…', options: ['127', '128', '129', '142'], answer: 1, explain: '105 to 994: (994 − 105)/7 + 1 = 128' },
      { topic: 'find', q: 'The number of two-digit numbers divisible by 3 is…', options: ['30', '31', '29', '33'], answer: 0, explain: '12 to 99: (99 − 12)/3 + 1 = 30' },
      { topic: 'find', q: 'The 10th term from the end of 4, 9, 14, …, 254 is…', options: ['209', '204', '214', '49'], answer: 0, explain: '254 − 9 × 5' },
      { topic: 'find', q: 'The nth term from the end of an AP with last term l is…', options: ['l + (n − 1)d', 'l − (n − 1)d', 'l − nd', 'a − (n − 1)d'], answer: 1, explain: 'Go backwards from l.' },
      { topic: 'find', q: 'The middle term of an AP with 9 terms is the…', options: ['4th', '5th', '4.5th', '6th'], answer: 1, explain: '(9 + 1)/2 = 5' },

      { topic: 'sum', q: 'The sum of the first n terms of an AP is…', options: ['n/2 [2a + (n − 1)d]', 'n [2a + (n − 1)d]', 'a + (n − 1)d', 'n/2 [a + (n − 1)d]'], answer: 0, explain: 'Sₙ = n/2 [2a + (n − 1)d]' },
      { topic: 'sum', q: 'If the last term is l, then Sₙ = …', options: ['n(a + l)', 'n/2 (a + l)', '(a + l)/2', 'n/2 (a − l)'], answer: 1, explain: 'Half of n times (first + last).' },
      { topic: 'sum', q: 'The sum of the first 1000 positive integers is…', options: ['500000', '500500', '1001000', '499500'], answer: 1, explain: '1000 × 1001/2' },
      { topic: 'sum', q: 'The sum of the first 22 terms of 8, 3, −2, … is…', options: ['979', '−979', '−989', '−969'], answer: 1, explain: '11[16 + 21(−5)] = 11 × (−89)' },
      { topic: 'sum', q: '2 + 5 + 8 + … + 50 = …', options: ['442', '432', '416', '468'], answer: 0, explain: '17 terms: 17/2 × 52' },
      { topic: 'sum', q: 'The sum of the first 15 multiples of 8 is…', options: ['960', '920', '1020', '840'], answer: 0, explain: '15/2 × (8 + 120)' },
      { topic: 'sum', q: '1 + 3 + 5 + … + 49 = …', options: ['600', '625', '650', '2500'], answer: 1, explain: '25 odd numbers → 25²' },
      { topic: 'sum', q: 'If Sₙ = 4n − n², the first term is…', options: ['3', '4', '1', '−1'], answer: 0, explain: 'a = S1 = 4 − 1' },
      { topic: 'sum', q: 'If Sₙ = 4n − n², the 10th term is…', options: ['−60', '−15', '−17', '15'], answer: 1, explain: 'S10 − S9 = −60 − (−45)' },
      { topic: 'sum', q: 'aₙ can be found from the sums by…', options: ['Sₙ + Sₙ₋₁', 'Sₙ − Sₙ₋₁', 'Sₙ × n', 'Sₙ/n'], answer: 1, explain: 'Sₙ is Sₙ₋₁ plus the nth term.' },
      { topic: 'sum', q: 'How many terms of 24, 21, 18, … give a sum of 78?', options: ['4 only', '13 only', '4 or 13', '6'], answer: 2, explain: '(n − 4)(n − 13) = 0, and both work.' },

      { topic: 'word', q: 'Ramkali saves ₹5 in week 1 and ₹1.75 more each week. She saves ₹20.75 in week…', options: ['9', '10', '11', '12'], answer: 1, explain: '5 + 9 × 1.75 = 20.75' },
      { topic: 'word', q: 'A salary of ₹5000 in 1995 rises by ₹200 every year. It reaches ₹7000 in…', options: ['2004', '2005', '2006', '2010'], answer: 1, explain: '11th year → 1995 + 10' },
      { topic: 'word', q: '7 prizes total ₹700, each ₹20 less than the one before. The first prize is…', options: ['₹100', '₹140', '₹160', '₹180'], answer: 2, explain: '7/2 [2a − 120] = 700 → a = 160' },
      { topic: 'word', q: 'Logs: 20 in the bottom row, 1 fewer in each row above, 200 logs in all. The number of rows is…', options: ['16', '25', '20', '10'], answer: 0, explain: 'n = 16 or 25, but 25 rows would need negative logs.' },
      { topic: 'word', q: 'Penalty: ₹200 on day 1, ₹250 on day 2, ₹300 on day 3, … The total for 30 days is…', options: ['₹27750', '₹25750', '₹30000', '₹1650'], answer: 0, explain: '15[400 + 29 × 50]' },
      { topic: 'word', q: 'TV production: 600 sets in year 3, 700 in year 7, rising steadily. Production in year 1 was…', options: ['500', '550', '575', '525'], answer: 1, explain: '4d = 100 → d = 25, a = 600 − 50' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'basics', gen(mk) {
        const [a, d] = ad(mk);
        const t = [0, 1, 2, 3].map(i => a + i * d);
        let isAP = Math.random() < 0.5, how = '';
        if (!isAP) {
          const kind = mk.pick(['bump', 'bump', 'sq', 'dbl']);
          if (kind === 'bump') { const i = mk.ri(2, 3); t[i] += mk.pick([-2, -1, 1, 2]); }
          if (kind === 'sq') { const s = mk.ri(1, 5); for (let i = 0; i < 4; i++) t[i] = (s + i) * (s + i); }
          if (kind === 'dbl') { const s = mk.pick([1, 2, 3, -1, -2]); for (let i = 0; i < 4; i++) t[i] = s * 2 ** i; }
        }
        const diffs = [1, 2, 3].map(i => t[i] - t[i - 1]);
        isAP = diffs.every(x => Math.abs(x - diffs[0]) < 1e-9);
        how = diffs.map(x => dn(mk, x)).join(', ');
        return {
          q: `Is this list an AP?\n${t.map(x => dn(mk, x)).join(', ')}, …`,
          choices: ['Yes, it is an AP', 'No, it is not an AP'],
          answer: isAP ? 0 : 1,
          steps: `Differences between neighbouring terms: ${how}\n` + (isAP ? `They are all the same, so it IS an AP with d = ${dn(mk, diffs[0])}.` : 'They are not all the same, so it is NOT an AP.')
        };
      } },
      { topic: 'basics', gen(mk) {
        const [a, d] = ad(mk);
        return {
          q: `Find the common difference and the next term of the AP:\n${seq(mk, a, d)}, …`,
          fields: [{ label: 'd =', answer: d, show: dn(mk, d), signed: true }, { label: 'Next term =', answer: a + 4 * d, show: dn(mk, a + 4 * d), signed: true }],
          hint: 'd = second term − first term. Then add d to the last term.',
          steps: `d = ${dn(mk, a + d)} − ${par(mk, a)} = ${dn(mk, d)}\nNext term = ${dn(mk, a + 3 * d)} + ${par(mk, d)} = ${dn(mk, a + 4 * d)}`
        };
      } },
      { topic: 'nth', gen(mk) {
        const [a, d] = ad(mk), n = mk.ri(8, 60), v = a + (n - 1) * d;
        return {
          q: `Find the ${ord(n)} term of the AP:\n${seq(mk, a, d, 3)}, …`,
          fields: [{ label: `${ord(n)} term =`, answer: v, show: dn(mk, v), signed: true }],
          hint: 'aₙ = a + (n − 1)d. First find a and d.',
          steps: `a = ${dn(mk, a)}, d = ${dn(mk, a + d)} − ${par(mk, a)} = ${dn(mk, d)}\naₙ = a + (n − 1)d\na${n} = ${dn(mk, a)} + ${n - 1} × ${par(mk, d)} = ${dn(mk, a)} ${d < 0 ? '−' : '+'} ${dn(mk, Math.abs((n - 1) * d))} = ${dn(mk, v)}`
        };
      } },
      { topic: 'nth', gen(mk) {
        const a = mk.ri(-20, 40), d = nz(mk, 9), n = mk.ri(10, 60), v = a + (n - 1) * d;
        if (Math.random() < 0.35) {
          const yes = Math.abs(d) === 1 || Math.random() < 0.4, x = yes ? v : v + Math.sign(d) * mk.ri(1, Math.abs(d) - 1);
          const k = (x - a) / d + 1, whole = Number.isInteger(k) && k >= 1;
          const ratio = `${dn(mk, x - a)}/${par(mk, d)}`;
          return {
            q: `Is ${dn(mk, x)} a term of the AP ${seq(mk, a, d, 4)}, …?`,
            choices: ['Yes', 'No'],
            answer: whole ? 0 : 1,
            steps: `a = ${mk.num(a)}, d = ${mk.num(d)}\n${mk.num(a)} + (n − 1) × ${par(mk, d)} = ${dn(mk, x)}\nn − 1 = ${ratio}` + (whole ? ` = ${k - 1}\nn = ${k}, a whole number, so YES: it is the ${ord(k)} term.` : `\nThis is not a whole number, so ${dn(mk, x)} is NOT a term.`)
          };
        }
        return {
          q: `Which term of the AP ${seq(mk, a, d, 4)}, … is ${mk.num(v)}?`,
          fields: [{ label: 'n =', answer: n }],
          hint: `Solve a + (n − 1)d = ${mk.num(v)} for n.`,
          steps: `a = ${mk.num(a)}, d = ${mk.num(d)}\n${mk.num(a)} + (n − 1) × ${par(mk, d)} = ${mk.num(v)}\n(n − 1) × ${par(mk, d)} = ${mk.num(v - a)}\nn − 1 = ${n - 1}\nn = ${n}: it is the ${ord(n)} term.`
        };
      } },
      { topic: 'find', gen(mk) {
        const a = mk.ri(-30, 30), d = nz(mk, 9);
        let p, q; do { p = mk.ri(2, 15); q = mk.ri(3, 30); } while (q <= p);
        const P = a + (p - 1) * d, Q = a + (q - 1) * d;
        return {
          q: `The ${ord(p)} term of an AP is ${mk.num(P)} and the ${ord(q)} term is ${mk.num(Q)}. Find the first term a and the common difference d.`,
          fields: [{ label: 'a =', answer: a, signed: true }, { label: 'd =', answer: d, signed: true }],
          hint: `Write a + ${p === 2 ? '' : p - 1}d = ${mk.num(P)} and a + ${q - 1}d = ${mk.num(Q)}, then subtract.`,
          steps: `a + ${p === 2 ? '' : p - 1}d = ${mk.num(P)} …(1)\na + ${q - 1}d = ${mk.num(Q)} …(2)\n(2) − (1): ${q - p}d = ${mk.num(Q - P)} → d = ${mk.num(d)}\na = ${mk.num(P)} − ${p - 1} × ${par(mk, d)} = ${mk.num(a)}`
        };
      } },
      { topic: 'find', gen(mk) {
        const a = mk.ri(-20, 30), d = nz(mk, 9), n = mk.ri(12, 60), l = a + (n - 1) * d;
        if (Math.random() < 0.5) return {
          q: `How many terms are there in the AP ${seq(mk, a, d, 3)}, …, ${mk.num(l)}?`,
          fields: [{ label: 'Number of terms', answer: n }],
          hint: `The last term ${mk.num(l)} is aₙ. Solve a + (n − 1)d = ${mk.num(l)}.`,
          steps: `a = ${mk.num(a)}, d = ${mk.num(d)}, last term = ${mk.num(l)}\n${mk.num(a)} + (n − 1) × ${par(mk, d)} = ${mk.num(l)}\nn − 1 = ${mk.num(l - a)}/${par(mk, d)} = ${n - 1}\nn = ${n}`
        };
        const k = mk.ri(2, Math.min(15, n - 1)), v = l - (k - 1) * d;
        return {
          q: `Find the ${ord(k)} term from the end of the AP ${seq(mk, a, d, 3)}, …, ${mk.num(l)}.`,
          fields: [{ label: 'Term =', answer: v, signed: true }],
          hint: 'The kth term from the end = l − (k − 1)d.',
          steps: `l = ${mk.num(l)}, d = ${mk.num(d)}\n${ord(k)} term from the end = l − (${k} − 1)d = ${mk.num(l)} − ${k - 1} × ${par(mk, d)} = ${mk.num(v)}`
        };
      } },
      { topic: 'sum', gen(mk) {
        const a = mk.ri(-15, 25), d = nz(mk, 8), n = mk.ri(8, 30), l = a + (n - 1) * d, S = n * (2 * a + (n - 1) * d) / 2;
        if (Math.random() < 0.5) return {
          q: `Find the sum of the first ${n} terms of the AP ${seq(mk, a, d, 3)}, …`,
          fields: [{ label: `Sum of ${n} terms =`, answer: S, signed: true }],
          hint: 'Sₙ = n/2 [2a + (n − 1)d]',
          steps: `a = ${mk.num(a)}, d = ${mk.num(d)}, n = ${n}\nS${n} = ${n}/2 [2 × ${par(mk, a)} + ${n - 1} × ${par(mk, d)}]\n= ${dn(mk, n / 2)} × [${mk.num(2 * a)} ${(n - 1) * d < 0 ? '−' : '+'} ${Math.abs((n - 1) * d)}]\n= ${dn(mk, n / 2)} × ${par(mk, 2 * a + (n - 1) * d)} = ${mk.num(S)}`
        };
        return {
          q: `Find the sum: ${[0, 1, 2].map(i => i ? par(mk, a + i * d) : mk.num(a)).join(' + ')} + … + ${par(mk, l)}`,
          fields: [{ label: 'Sum =', answer: S, signed: true }],
          hint: 'First find how many terms there are (aₙ = l), then use Sₙ = n/2 (a + l).',
          steps: `a = ${mk.num(a)}, d = ${mk.num(d)}, l = ${mk.num(l)}\nNumber of terms: ${mk.num(a)} + (n − 1) × ${par(mk, d)} = ${mk.num(l)} → n = ${n}\nS = n/2 (a + l) = ${n}/2 × (${mk.num(a)} + ${par(mk, l)}) = ${dn(mk, n / 2)} × ${par(mk, a + l)} = ${mk.num(S)}`
        };
      } },
      { topic: 'sum', gen(mk) {
        if (Math.random() < 0.45) {
          const p = nz(mk, 3), q = nz(mk, 9), a = p + q, d = 2 * p;
          const Sn = mk.poly([p, q, 0], 'n');
          return {
            q: `The sum of the first n terms of an AP is Sₙ = ${Sn}. Find the first term a and the common difference d.`,
            fields: [{ label: 'a =', answer: a, signed: true }, { label: 'd =', answer: d, signed: true }],
            hint: 'a = S1. The second term = S2 − S1. Then d = a2 − a1.',
            steps: `S1 = ${mk.num(p)} + ${par(mk, q)} = ${mk.num(a)} → a = ${mk.num(a)}\nS2 = ${mk.num(4 * p)} + ${par(mk, 2 * q)} = ${mk.num(4 * p + 2 * q)}\na2 = S2 − S1 = ${mk.num(3 * p + q)}\nd = a2 − a1 = ${mk.num(3 * p + q)} − ${par(mk, a)} = ${mk.num(d)}`
          };
        }
        const a = mk.ri(1, 15), d = mk.ri(1, 6), N = mk.ri(5, 25), S = N * (2 * a + (N - 1) * d) / 2, f = 2 * S / N;
        return {
          q: `How many terms of the AP ${seq(mk, a, d, 3)}, … must be taken to make the sum ${S}?`,
          fields: [{ label: 'n =', answer: N }],
          hint: `Put Sₙ = ${S} in n/2 [2a + (n − 1)d] and solve the quadratic in n.`,
          steps: `n/2 [2 × ${a} + (n − 1) × ${d}] = ${S}\nn[${2 * a} + ${d === 1 ? '' : d}n − ${d}] = ${2 * S}\n${mk.poly([d, 2 * a - d, -2 * S], 'n')} = 0\n(n − ${N})(${d === 1 ? '' : d}n + ${f}) = 0\nn = ${N} (the other root is negative)`
        };
      } },
      { topic: 'word', gen(mk) {
        const t = mk.pick(['save', 'salary', 'rows']);
        if (t === 'save') {
          const s = mk.ri(2, 20) * 5, i = mk.pick([5, 10, 15, 20, 25]), n = mk.ri(6, 20), X = s + (n - 1) * i;
          if (Math.random() < 0.5) return {
            q: `Riya saves ₹${s} in the first week and then ₹${i} more each week than the week before. In which week will she save ₹${X}?`,
            fields: [{ label: 'Week number', answer: n }],
            hint: `Weekly savings form an AP: a = ${s}, d = ${i}. Solve a + (n − 1)d = ${X}.`,
            steps: `${s} + (n − 1) × ${i} = ${X}\n(n − 1) × ${i} = ${X - s}\nn − 1 = ${n - 1} → n = ${n}\nIn week ${n}.`
          };
          const S = n * (2 * s + (n - 1) * i) / 2;
          return {
            q: `Riya saves ₹${s} in the first week and then ₹${i} more each week than the week before. How much will she have saved in total after ${n} weeks?`,
            fields: [{ label: 'Total (₹)', answer: S }],
            hint: `Use Sₙ = n/2 [2a + (n − 1)d] with a = ${s}, d = ${i}, n = ${n}.`,
            steps: `S${n} = ${n}/2 [2 × ${s} + ${n - 1} × ${i}] = ${dn(mk, n / 2)} × ${2 * s + (n - 1) * i} = ₹${S}`
          };
        }
        if (t === 'salary') {
          const S0 = mk.ri(10, 40) * 1000, inc = mk.ri(5, 20) * 100, n = mk.ri(5, 15), Y = mk.ri(2008, 2016), T = S0 + (n - 1) * inc;
          return {
            q: `Aman's monthly salary was ₹${S0} in ${Y}. It rises by ₹${inc} every year. In which year will it be ₹${T}?`,
            fields: [{ label: 'Year', answer: Y + n - 1 }],
            hint: `Salaries form an AP: a = ${S0}, d = ${inc}. Find n, then the year is ${Y} + (n − 1).`,
            steps: `${S0} + (n − 1) × ${inc} = ${T}\nn − 1 = ${T - S0}/${inc} = ${n - 1}\nIt is the ${ord(n)} year: ${Y} + ${n - 1} = ${Y + n - 1}`
          };
        }
        const r = mk.ri(10, 30), d = mk.ri(1, 4), N = mk.ri(10, 25), last = r + (N - 1) * d, tot = N * (r + last) / 2;
        return {
          q: `A hall has ${N} rows of seats. The first row has ${r} seats and each row has ${d} more seat${d > 1 ? 's' : ''} than the row in front. How many seats are in the last row, and in the whole hall?`,
          fields: [{ label: 'Last row', answer: last }, { label: 'Total seats', answer: tot }],
          hint: `a = ${r}, d = ${d}, n = ${N}. Last row = a + (n − 1)d. Total = n/2 (a + l).`,
          steps: `Last row = ${r} + ${N - 1} × ${d} = ${last}\nTotal = ${N}/2 × (${r} + ${last}) = ${dn(mk, N / 2)} × ${r + last} = ${tot}`
        };
      } },
      { topic: 'word', gen(mk) {
        const t = mk.pick(['count', 'summ', 'prize']);
        if (t === 'count' || t === 'summ') {
          const k = mk.ri(3, 13), three = Math.random() < 0.5 && t === 'count';
          const lo = three ? 100 : 10, hi = three ? 999 : 99, first = Math.ceil(lo / k) * k, last = Math.floor(hi / k) * k, n = (last - first) / k + 1;
          const what = three ? 'three-digit' : 'two-digit';
          if (t === 'count') return {
            q: `How many ${what} numbers are divisible by ${k}?`,
            fields: [{ label: 'How many', answer: n }],
            hint: `Find the first and last ${what} multiples of ${k}. They form an AP with d = ${k}.`,
            steps: `First: ${first}, last: ${last}, d = ${k}\n${last} = ${first} + (n − 1) × ${k}\nn − 1 = ${(last - first) / k} → n = ${n}`
          };
          const S = n * (first + last) / 2;
          return {
            q: `Find the sum of all two-digit numbers that are multiples of ${k}.`,
            fields: [{ label: 'Sum', answer: S }],
            hint: `They form an AP from ${first} to ${last} with d = ${k}. Find n, then use n/2 (a + l).`,
            steps: `AP: ${first}, ${first + k}, …, ${last}\n${last} = ${first} + (n − 1) × ${k} → n = ${n}\nS = ${n}/2 × (${first} + ${last}) = ${dn(mk, n / 2)} × ${first + last} = ${S}`
          };
        }
        let N, d, a; do { N = mk.ri(5, 10); d = mk.ri(1, 5) * 10; a = mk.ri(10, 60) * 10; } while (a - (N - 1) * d < 10);
        const T = N * (2 * a - (N - 1) * d) / 2;
        return {
          q: `A school gives ₹${T} as ${N} cash prizes. Each prize is ₹${d} less than the prize before it. Find the first (biggest) prize.`,
          fields: [{ label: 'First prize (₹)', answer: a }],
          hint: `Prizes form an AP with d = −${d} and n = ${N}. Put Sₙ = ${T} and solve for a.`,
          steps: `${N}/2 [2a + ${N - 1} × (−${d})] = ${T}\n${dn(mk, N / 2)}(2a − ${(N - 1) * d}) = ${T}\n2a − ${(N - 1) * d} = ${2 * T / N}\n2a = ${2 * a} → a = ${a}\nFirst prize ₹${a}`
        };
      } }
    ],

    match: [
      { title: 'Formulas', pairs: [
        ['nth term aₙ', 'a + (n − 1)d'],
        ['Sum of n terms Sₙ', 'n/2 [2a + (n − 1)d]'],
        ['Sum when the last term l is known', 'n/2 (a + l)'],
        ['Common difference d', 'a2 − a1'],
        ['nth term from the end', 'l − (n − 1)d'],
        ['aₙ from the sums', 'Sₙ − Sₙ₋₁']
      ] },
      { title: 'AP → Common Difference', pairs: [
        ['3, 1, −1, −3, …', '−2'],
        ['2, 7, 12, …', '5'],
        ['1, −1/2, −2, …', '−3/2'],
        ['√2, √8, √18, …', '√2'],
        ['3, 3, 3, …', '0'],
        ['0.6, 1.7, 2.8, …', '1.1']
      ] },
      { title: 'Question → Answer', pairs: [
        ['10th term of 2, 7, 12, …', '47'],
        ['Which term of 21, 18, 15, … is −81?', '35th'],
        ['Sum of the first 1000 natural numbers', '500500'],
        ['Sum of the first 22 terms of 8, 3, −2, …', '−979'],
        ['Three-digit numbers divisible by 7', '128'],
        ['10th term from the end of 4, 9, …, 254', '209']
      ] },
      { title: 'AP or Not?', pairs: [
        ['2, 4, 8, 16, …', 'Not an AP (differences 2, 4, 8)'],
        ['Taxi fares ₹15, ₹23, ₹31, …', 'AP with d = 8'],
        ['Air left when 1/4 is pumped out each time', 'Not an AP (multiplied by 3/4)'],
        ['1², 3², 5², 7², …', 'Not an AP (differences 8, 16, 24)'],
        ['√2, √8, √18, √32, …', 'AP with d = √2'],
        ['0, −4, −8, −12, …', 'AP with d = −4']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 1, q: 'Find the common difference of the AP 3, 1, −1, −3, …',
        keypoints: [{ text: 'd = 1 − 3 = −2', kw: ['2'] }],
        model: 'd = a2 − a1 = 1 − 3 = −2' },
      { marks: 1, q: 'Find the 10th term of the AP 2, 7, 12, …',
        keypoints: [{ text: 'a10 = 2 + 9 × 5 = 47', kw: ['47'] }],
        model: 'a = 2, d = 5\na10 = a + 9d = 2 + 45 = 47' },
      { marks: 1, q: 'Which term of the AP 3, 8, 13, 18, … is 78?',
        keypoints: [{ text: '3 + (n − 1) × 5 = 78 → n = 16', kw: ['16'] }],
        model: '3 + (n − 1) × 5 = 78\nn − 1 = 15 → n = 16\n78 is the 16th term.' },
      { marks: 1, q: 'Find the sum of the first 20 odd natural numbers.',
        keypoints: [{ text: 'n² = 20² = 400', kw: ['400'] }],
        model: 'a = 1, d = 2, n = 20\nS20 = 20/2 [2 + 19 × 2] = 10 × 40 = 400' },
      { marks: 2, q: 'Is 301 a term of the AP 5, 11, 17, 23, …? Give a reason.',
        keypoints: [
          { text: '5 + (n − 1) × 6 = 301 → n − 1 = 296/6', kw: ['296'] },
          { text: 'n is not a whole number, so 301 is not a term', kw: ['not'] }
        ],
        model: 'a = 5, d = 6\n5 + (n − 1) × 6 = 301\n(n − 1) × 6 = 296 → n − 1 = 148/3\nn is not a whole number, so 301 is NOT a term of this AP.' },
      { marks: 2, q: 'Find the AP whose 3rd term is 5 and 7th term is 9.',
        keypoints: [
          { text: 'a + 2d = 5 and a + 6d = 9', kw: ['2d', '6d'] },
          { text: 'd = 1, a = 3: AP 3, 4, 5, 6, …', kw: ['3, 4, 5|3,4,5'] }
        ],
        model: 'a + 2d = 5 …(1)\na + 6d = 9 …(2)\n(2) − (1): 4d = 4 → d = 1\na = 5 − 2 = 3\nAP: 3, 4, 5, 6, …' },
      { marks: 2, q: 'How many three-digit numbers are divisible by 7?',
        keypoints: [
          { text: 'AP: 105, 112, …, 994', kw: ['105', '994'] },
          { text: 'n = 128', kw: ['128'] }
        ],
        model: 'First three-digit multiple of 7: 105. Last: 994. d = 7\n994 = 105 + (n − 1) × 7\n(n − 1) × 7 = 889 → n − 1 = 127 → n = 128' },
      { marks: 2, q: 'Find the sum 2 + 5 + 8 + … + 50.',
        keypoints: [
          { text: '50 = 2 + 3(n − 1) → n = 17', kw: ['17'] },
          { text: 'S = 17/2 × 52 = 442', kw: ['442'] }
        ],
        model: 'a = 2, d = 3, l = 50\n50 = 2 + (n − 1) × 3 → n − 1 = 16 → n = 17\nS = n/2 (a + l) = 17/2 × 52 = 442' },
      { marks: 2, q: 'If the sum of the first n terms of an AP is 4n − n², find the first term and the 10th term.',
        keypoints: [
          { text: 'a = S1 = 3', kw: ['3'] },
          { text: 'a10 = S10 − S9 = −60 − (−45) = −15', kw: ['15'] }
        ],
        model: 'S1 = 4 − 1 = 3, so a = 3\nS10 = 40 − 100 = −60\nS9 = 36 − 81 = −45\na10 = S10 − S9 = −60 + 45 = −15' },
      { marks: 3, q: 'The 11th term of an AP is 38 and the 16th term is 73. Find the 31st term.',
        keypoints: [
          { text: 'a + 10d = 38 and a + 15d = 73', kw: ['10d', '15d'] },
          { text: 'd = 7, a = −32', kw: ['7', '32'] },
          { text: 'a31 = −32 + 210 = 178', kw: ['178'] }
        ],
        model: 'a + 10d = 38 …(1)\na + 15d = 73 …(2)\n(2) − (1): 5d = 35 → d = 7\na = 38 − 70 = −32\na31 = a + 30d = −32 + 210 = 178' },
      { marks: 3, q: 'Find the 10th term from the last term of the AP 4, 9, 14, …, 254.',
        keypoints: [
          { text: 'l = 254, d = 5', kw: ['254', '5'] },
          { text: '10th from end = l − 9d', kw: ['9'] },
          { text: '= 254 − 45 = 209', kw: ['209'] }
        ],
        model: 'l = 254, d = 5\nnth term from the end = l − (n − 1)d\n10th term from the end = 254 − 9 × 5 = 254 − 45 = 209' },
      { marks: 3, q: 'Find the sum of the first 22 terms of the AP 8, 3, −2, …',
        keypoints: [
          { text: 'a = 8, d = −5, n = 22', kw: ['−5|-5'] },
          { text: 'S22 = 11[16 + 21(−5)]', kw: ['11'] },
          { text: '= 11 × (−89) = −979', kw: ['979'] }
        ],
        model: 'a = 8, d = 3 − 8 = −5, n = 22\nS22 = 22/2 [2 × 8 + 21 × (−5)]\n= 11[16 − 105]\n= 11 × (−89) = −979' },
      { marks: 3, q: 'Ramkali saved ₹5 in the first week of a year and then increased her weekly saving by ₹1.75. In which week will her weekly saving be ₹20.75?',
        keypoints: [
          { text: 'a = 5, d = 1.75', kw: ['1.75'] },
          { text: '5 + (n − 1) × 1.75 = 20.75', kw: ['20.75'] },
          { text: 'n = 10: the 10th week', kw: ['10'] }
        ],
        model: 'Weekly savings form an AP: a = 5, d = 1.75\naₙ = 20.75\n5 + (n − 1) × 1.75 = 20.75\n(n − 1) × 1.75 = 15.75 → n − 1 = 9 → n = 10\nIn the 10th week.' },
      { marks: 3, q: 'A sum of ₹700 is to be used to give seven cash prizes. Each prize is ₹20 less than the one before it. Find the value of each prize.',
        keypoints: [
          { text: '7/2 [2a + 6(−20)] = 700', kw: ['700'] },
          { text: 'a = 160', kw: ['160'] },
          { text: 'Prizes 160, 140, 120, 100, 80, 60, 40', kw: ['140', '40'] }
        ],
        model: 'n = 7, d = −20, S7 = 700\n7/2 [2a + 6(−20)] = 700\n2a − 120 = 200 → a = 160\nPrizes: ₹160, ₹140, ₹120, ₹100, ₹80, ₹60, ₹40' },
      { marks: 3, q: 'How many terms of the AP 24, 21, 18, … must be taken so that their sum is 78? Explain the double answer.',
        keypoints: [
          { text: 'n/2 [48 − 3(n − 1)] = 78', kw: ['78'] },
          { text: 'n² − 17n + 52 = 0 → n = 4 or 13', kw: ['4', '13'] },
          { text: 'Both work: terms 5 to 13 add up to 0', kw: ['0|zero'] }
        ],
        model: 'a = 24, d = −3\nn/2 [48 + (n − 1)(−3)] = 78\nn(51 − 3n) = 156\n3n² − 51n + 156 = 0 → n² − 17n + 52 = 0\n(n − 4)(n − 13) = 0 → n = 4 or 13\nBoth are correct: the 5th to 13th terms (12, 9, …, −12) add up to 0.' },
      { marks: 5, q: '200 logs are stacked so that there are 20 logs in the bottom row, 19 in the next row, 18 in the row after that, and so on. In how many rows are the 200 logs placed, and how many logs are in the top row?',
        keypoints: [
          { text: 'a = 20, d = −1, Sₙ = 200', kw: ['200'] },
          { text: 'n/2 [40 − (n − 1)] = 200 → n² − 41n + 400 = 0', kw: ['400'] },
          { text: '(n − 16)(n − 25) = 0', kw: ['16', '25'] },
          { text: 'n = 25 is impossible (a25 = −4), so 16 rows', kw: ['16'] },
          { text: 'Top row: a16 = 20 − 15 = 5 logs', kw: ['5'] }
        ],
        model: 'Logs per row form an AP: a = 20, d = −1\nn/2 [2 × 20 + (n − 1)(−1)] = 200\nn(41 − n) = 400\nn² − 41n + 400 = 0\n(n − 16)(n − 25) = 0 → n = 16 or 25\na25 = 20 − 24 = −4 (impossible), so n = 16\nTop row: a16 = 20 + 15(−1) = 5 logs' },
      { marks: 5, q: 'A manufacturer of TV sets produced 600 sets in the 3rd year and 700 sets in the 7th year. Assuming production rises by the same number every year, find (i) the production in the 1st year (ii) the production in the 10th year (iii) the total production in the first 7 years.',
        keypoints: [
          { text: 'a + 2d = 600, a + 6d = 700', kw: ['2d', '6d'] },
          { text: 'd = 25, a = 550 (1st year)', kw: ['550'] },
          { text: '10th year: 550 + 225 = 775', kw: ['775'] },
          { text: 'S7 = 7/2 [1100 + 150] = 4375', kw: ['4375'] }
        ],
        model: 'a + 2d = 600 …(1)\na + 6d = 700 …(2)\n4d = 100 → d = 25, a = 550\n(i) 1st year: 550 sets\n(ii) a10 = 550 + 9 × 25 = 775 sets\n(iii) S7 = 7/2 [2 × 550 + 6 × 25] = 7/2 × 1250 = 4375 sets' }
    ]
  });
})();
