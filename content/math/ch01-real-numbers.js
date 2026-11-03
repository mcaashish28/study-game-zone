// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 1: Real Numbers
// Not in the rationalised syllabus: Euclid's division lemma, decimal expansions of rational numbers.
// Write powers with Unicode superscripts (2², 2³): the app turns a digit after a letter into a subscript.
SWG.addChapter('math', {
  id: 'math-ch01',
  number: 1,
  title: 'Real Numbers',
  icon: '🔢',

  topics: {
    fta: 'Fundamental Theorem of Arithmetic',
    hcf: 'HCF & LCM by Prime Factors',
    word: 'HCF & LCM Word Problems',
    irr: 'Proving Numbers Irrational',
    ops: 'Rational & Irrational Mix'
  },

  summary: [
    'Fundamental Theorem of Arithmetic: every composite number can be written as a product of primes in exactly one way (apart from the order of the factors).',
    'HCF = product of the SMALLEST power of each COMMON prime factor.',
    'LCM = product of the GREATEST power of EVERY prime factor that appears.',
    'For two numbers a and b: HCF(a, b) × LCM(a, b) = a × b. (This does NOT work for three numbers.)',
    'Word problems: "largest / greatest / maximum that divides" → HCF. "Smallest / least / at the same time again" → LCM.',
    'If a prime p divides a², then p divides a. This is used to prove √2, √3, √5 are irrational (proof by contradiction).',
    'rational + irrational = irrational; non-zero rational × irrational = irrational. So 5 − √3 and 3√2 are irrational.'
  ],

  flashcards: [
    { topic: 'fta', front: 'What is a prime number?', back: 'A number greater than 1 that has exactly two factors: 1 and itself.\ne.g. 2, 3, 5, 7, 11, 13' },
    { topic: 'fta', front: 'What is a composite number?', back: 'A number greater than 1 that has more than two factors.\ne.g. 4, 6, 8, 9, 10, 12\n(1 is neither prime nor composite.)' },
    { topic: 'fta', front: 'State the Fundamental Theorem of Arithmetic.', back: 'Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.' },
    { topic: 'fta', front: 'Write 140 as a product of its prime factors.', back: '140 = 2 × 70 = 2 × 2 × 35 = 2 × 2 × 5 × 7\n140 = 2² × 5 × 7' },
    { topic: 'fta', front: 'Write 3825 as a product of its prime factors.', back: '3825 = 3 × 1275 = 3 × 3 × 425 = 3 × 3 × 5 × 85 = 3 × 3 × 5 × 5 × 17\n3825 = 3² × 5² × 17' },
    { topic: 'fta', front: 'Write 5005 as a product of its prime factors.', back: '5005 = 5 × 1001 = 5 × 7 × 143 = 5 × 7 × 11 × 13' },
    { topic: 'fta', front: 'Write 7429 as a product of its prime factors.', back: '7429 = 17 × 437 = 17 × 19 × 23' },
    { topic: 'fta', front: 'How do you find prime factors quickly? (Factor tree / division method)', back: 'Keep dividing by the smallest prime that goes in: 2, then 3, then 5, 7, 11, 13…\nStop when the quotient is 1. The divisors you used are the prime factors.' },
    { topic: 'fta', front: 'Divisibility rules for 2, 3 and 5', back: '2: last digit is even\n3: sum of digits is divisible by 3\n5: last digit is 0 or 5' },
    { topic: 'fta', front: 'Can 4ⁿ end with the digit 0 for any natural number n?', back: 'No.\nTo end with 0, a number must be divisible by 10 = 2 × 5, so 5 must be a prime factor.\n4ⁿ = 2²ⁿ has only the prime 2. By the uniqueness in the Fundamental Theorem, 5 can never be a factor.' },
    { topic: 'fta', front: 'Can 6ⁿ end with the digit 0 for any natural number n?', back: 'No.\n6ⁿ = 2ⁿ × 3ⁿ. Its only prime factors are 2 and 3. A number ending in 0 needs 5 as a factor, so 6ⁿ can never end with 0.' },
    { topic: 'fta', front: 'Why is 7 × 11 × 13 + 13 a composite number?', back: '7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × 78\nIt has factors other than 1 and itself, so it is composite.' },
    { topic: 'fta', front: 'Why is 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 a composite number?', back: '= 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × 1009\nIt has 5 as a factor, so it is composite.' },
    { topic: 'hcf', front: 'What is the HCF?', back: 'Highest Common Factor: the largest number that divides each of the given numbers exactly.' },
    { topic: 'hcf', front: 'What is the LCM?', back: 'Lowest Common Multiple: the smallest number that is a multiple of each of the given numbers.' },
    { topic: 'hcf', front: 'How do you find the HCF using prime factorisation?', back: 'Write each number as a product of primes.\nHCF = product of the SMALLEST power of each COMMON prime factor.' },
    { topic: 'hcf', front: 'How do you find the LCM using prime factorisation?', back: 'Write each number as a product of primes.\nLCM = product of the GREATEST power of EACH prime factor involved (common or not).' },
    { topic: 'hcf', front: 'Find the HCF and LCM of 6 and 20.', back: '6 = 2 × 3\n20 = 2² × 5\nHCF = 2 (smallest power of the common prime 2)\nLCM = 2² × 3 × 5 = 60' },
    { topic: 'hcf', front: 'Find the HCF and LCM of 96 and 404.', back: '96 = 2⁵ × 3\n404 = 2² × 101\nHCF = 2² = 4\nLCM = 2⁵ × 3 × 101 = 9696' },
    { topic: 'hcf', front: 'Find the HCF and LCM of 6, 72 and 120.', back: '6 = 2 × 3\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\nHCF = 2 × 3 = 6\nLCM = 2³ × 3² × 5 = 360' },
    { topic: 'hcf', front: 'Find the HCF and LCM of 12, 15 and 21.', back: '12 = 2² × 3\n15 = 3 × 5\n21 = 3 × 7\nHCF = 3\nLCM = 2² × 3 × 5 × 7 = 420' },
    { topic: 'hcf', front: 'Find the HCF and LCM of 17, 23 and 29.', back: 'All three are prime, so they have no common factor except 1.\nHCF = 1\nLCM = 17 × 23 × 29 = 11339' },
    { topic: 'hcf', front: 'What is the relation between HCF, LCM and two numbers a and b?', back: 'HCF(a, b) × LCM(a, b) = a × b\nOnly for TWO numbers.' },
    { topic: 'hcf', front: 'Find the LCM of 96 and 404 using HCF = 4.', back: 'LCM = (96 × 404) / HCF = 38784 / 4 = 9696' },
    { topic: 'hcf', front: 'HCF(306, 657) = 9. Find LCM(306, 657).', back: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338' },
    { topic: 'hcf', front: 'Check that LCM × HCF = product for 26 and 91.', back: '26 = 2 × 13, 91 = 7 × 13\nHCF = 13, LCM = 2 × 7 × 13 = 182\nHCF × LCM = 13 × 182 = 2366\n26 × 91 = 2366 ✓' },
    { topic: 'hcf', front: 'Why can HCF × LCM = product fail for three numbers?', back: 'Example: 6, 72, 120\nHCF × LCM = 6 × 360 = 2160\n6 × 72 × 120 = 51840\nThey are not equal, so the rule is only for two numbers.' },
    { topic: 'hcf', front: 'What is the HCF and LCM of two co-prime numbers a and b?', back: 'Co-prime numbers have no common factor except 1.\nHCF = 1\nLCM = a × b' },
    { topic: 'hcf', front: 'The HCF of two numbers is always a ____ of their LCM.', back: 'Factor.\n(LCM is always a multiple of the HCF.) So HCF = 18 and LCM = 380 is impossible: 18 does not divide 380.' },
    { topic: 'word', front: 'How do you know whether a word problem needs HCF or LCM?', back: 'HCF: "largest / greatest / maximum", "divide into equal groups", "same number in each row", "longest tape to measure exactly".\nLCM: "smallest / least / minimum", "meet again", "ring together again", "at the same time".' },
    { topic: 'word', front: 'An army contingent of 616 marches behind a band of 32 in the same number of columns. Maximum columns?', back: 'HCF(616, 32)\n616 = 2³ × 7 × 11\n32 = 2⁵\nHCF = 2³ = 8 columns' },
    { topic: 'word', front: 'Sonia takes 18 min and Ravi 12 min to drive one round of a field. Starting together, when do they meet again at the start?', back: 'LCM(18, 12)\n18 = 2 × 3², 12 = 2² × 3\nLCM = 2² × 3² = 36\nThey meet after 36 minutes.' },
    { topic: 'word', front: 'Three bells ring every 6, 8 and 12 minutes. If they ring together at 8:00 am, when will they next ring together?', back: 'LCM(6, 8, 12) = 2³ × 3 = 24 minutes\nThey ring together again at 8:24 am.' },
    { topic: 'word', front: 'Find the largest number that divides 245 and 1029, leaving remainder 5 in each case.', back: 'Subtract the remainder: 245 − 5 = 240, 1029 − 5 = 1024\nHCF(240, 1024): 240 = 2⁴ × 3 × 5, 1024 = 2¹⁰\nHCF = 2⁴ = 16' },
    { topic: 'word', front: 'Find the smallest number which, when divided by 12, 16 and 24, leaves remainder 3 each time.', back: 'LCM(12, 16, 24) = 2⁴ × 3 = 48\nAdd the remainder: 48 + 3 = 51' },
    { topic: 'irr', front: 'What is a rational number?', back: 'A number that can be written as p/q, where p and q are integers and q ≠ 0.\ne.g. 3, −5, 2/7, 0.75' },
    { topic: 'irr', front: 'What is an irrational number?', back: 'A number that CANNOT be written as p/q (p, q integers, q ≠ 0).\ne.g. √2, √3, √5, π, 0.1011011101111…' },
    { topic: 'irr', front: 'What are real numbers?', back: 'All rational and irrational numbers together make up the real numbers.' },
    { topic: 'irr', front: 'State the theorem used to prove √2 is irrational.', back: 'Let p be a prime number. If p divides a², then p divides a (a is a positive integer).' },
    { topic: 'irr', front: 'What method is used to prove √2 is irrational?', back: 'Proof by contradiction:\nAssume √2 IS rational, follow the steps, and reach something impossible (a and b have a common factor). So the assumption was wrong.' },
    { topic: 'irr', front: 'Outline the proof that √2 is irrational.', back: '1. Assume √2 = a/b, a and b co-prime\n2. b√2 = a → 2b² = a²\n3. 2 divides a², so 2 divides a. Let a = 2c\n4. 2b² = 4c² → b² = 2c²\n5. So 2 divides b too\n6. 2 divides both a and b: contradiction (they were co-prime)\n7. So √2 is irrational' },
    { topic: 'irr', front: 'In the proof for √3, which step gives the contradiction?', back: 'After showing 3 divides a AND 3 divides b, but we assumed a and b are co-prime (no common factor except 1). That is the contradiction.' },
    { topic: 'irr', front: 'What does "co-prime" mean in the proof?', back: 'a and b have no common factor other than 1. We can always cancel a fraction down to this form, so assuming it is allowed.' },
    { topic: 'ops', front: 'Rational + irrational = ?', back: 'Always irrational.\ne.g. 5 + √3, 2 − √5' },
    { topic: 'ops', front: 'Non-zero rational × irrational = ?', back: 'Always irrational.\ne.g. 3√2, 7√5, √2/3\n(0 × √2 = 0 is rational, so the rational must be non-zero.)' },
    { topic: 'ops', front: 'Irrational + irrational = ?', back: 'Can be either!\n√2 + √3 → irrational\n√2 + (−√2) = 0 → rational' },
    { topic: 'ops', front: 'Irrational × irrational = ?', back: 'Can be either!\n√2 × √3 = √6 → irrational\n√2 × √2 = 2 → rational' },
    { topic: 'ops', front: 'Outline the proof that 5 − √3 is irrational.', back: '1. Assume 5 − √3 = a/b (a, b co-prime integers, b ≠ 0)\n2. Then √3 = 5 − a/b = (5b − a)/b\n3. The right side is rational (a, b are integers)\n4. So √3 would be rational: contradiction, since √3 is irrational\n5. So 5 − √3 is irrational' },
    { topic: 'ops', front: 'Outline the proof that 3√2 is irrational.', back: '1. Assume 3√2 = a/b (a, b co-prime, b ≠ 0)\n2. Then √2 = a/(3b)\n3. a/(3b) is rational, so √2 would be rational\n4. Contradiction, since √2 is irrational\n5. So 3√2 is irrational' },
    { topic: 'ops', front: 'Is √4 irrational?', back: 'No! √4 = 2, which is rational.\nOnly square roots of numbers that are NOT perfect squares are irrational: √2, √3, √5, √6, √7, √8…' }
  ],

  quiz: [
    { topic: 'fta', q: 'Which of these is a prime number?', options: ['51', '57', '91', '97'], answer: 3, explain: '51 = 3 × 17, 57 = 3 × 19, 91 = 7 × 13. Only 97 is prime.' },
    { topic: 'fta', q: 'The number 1 is…', options: ['Prime', 'Composite', 'Neither prime nor composite', 'Both'], answer: 2, explain: 'A prime needs exactly two factors; 1 has only one.' },
    { topic: 'fta', q: 'The only even prime number is…', options: ['0', '2', '4', '6'], answer: 1, explain: 'Every other even number has 2 as a factor.' },
    { topic: 'fta', q: 'The prime factorisation of 140 is…', options: ['2² × 5 × 7', '2 × 5 × 14', '2³ × 5 × 7', '4 × 5 × 7'], answer: 0, explain: '140 = 2 × 2 × 5 × 7. (4 and 14 are not prime.)' },
    { topic: 'fta', q: 'The prime factorisation of 156 is…', options: ['2² × 3 × 13', '2 × 3 × 26', '2² × 39', '2³ × 3 × 13'], answer: 0, explain: '156 = 2 × 78 = 2 × 2 × 39 = 2 × 2 × 3 × 13' },
    { topic: 'fta', q: 'The prime factorisation of 7429 is…', options: ['17 × 19 × 23', '7 × 1061', '13 × 571', '11 × 17 × 41'], answer: 0, explain: '7429 = 17 × 437 = 17 × 19 × 23' },
    { topic: 'fta', q: 'The Fundamental Theorem of Arithmetic says the prime factorisation of a composite number is…', options: ['Not possible', 'Unique, apart from order', 'Different every time', 'Only possible for even numbers'], answer: 1, explain: 'Every composite number has exactly one set of prime factors.' },
    { topic: 'fta', q: 'For any natural number n, 6ⁿ can NOT end with the digit…', options: ['6', '0', 'Both 6 and 0', 'It can end with any digit'], answer: 1, explain: 'Ending with 0 needs 5 as a prime factor. 6ⁿ = 2ⁿ × 3ⁿ has no 5.' },
    { topic: 'fta', q: 'A number ending with 0 must have which two primes as factors?', options: ['2 and 3', '2 and 5', '3 and 5', '5 and 7'], answer: 1, explain: 'It must be divisible by 10 = 2 × 5.' },
    { topic: 'fta', q: '7 × 11 × 13 + 13 is…', options: ['Prime', 'Composite', 'Irrational', 'Neither'], answer: 1, explain: '= 13 × (77 + 1) = 13 × 78, so it has factors other than 1 and itself.' },
    { topic: 'fta', q: 'If 2ˣ × 3ʸ = 72, then x and y are…', options: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4'], answer: 0, explain: '72 = 8 × 9 = 2³ × 3²' },
    { topic: 'fta', q: 'In a factor tree, 210 = 2 × ?. The missing number is…', options: ['105', '35', '15', '70'], answer: 0, explain: '210 / 2 = 105, and 105 = 3 × 5 × 7' },
    { topic: 'hcf', q: 'HCF is found by taking the ____ power of each common prime factor.', options: ['Greatest', 'Smallest', 'Sum of the', 'Average'], answer: 1, explain: 'HCF: smallest power of common primes. LCM: greatest power of all primes.' },
    { topic: 'hcf', q: 'LCM is found by taking the ____ power of each prime factor involved.', options: ['Greatest', 'Smallest', 'Middle', 'Common'], answer: 0, explain: 'Include every prime that appears, with its highest power.' },
    { topic: 'hcf', q: 'HCF of 6 and 20 is…', options: ['1', '2', '4', '60'], answer: 1, explain: '6 = 2 × 3, 20 = 2² × 5 → HCF = 2' },
    { topic: 'hcf', q: 'LCM of 6 and 20 is…', options: ['120', '30', '60', '40'], answer: 2, explain: '2² × 3 × 5 = 60' },
    { topic: 'hcf', q: 'HCF of 96 and 404 is…', options: ['2', '4', '8', '12'], answer: 1, explain: '96 = 2⁵ × 3, 404 = 2² × 101 → HCF = 2² = 4' },
    { topic: 'hcf', q: 'HCF of 6, 72 and 120 is…', options: ['6', '12', '24', '2'], answer: 0, explain: '6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5 → HCF = 2 × 3' },
    { topic: 'hcf', q: 'LCM of 6, 72 and 120 is…', options: ['720', '360', '240', '120'], answer: 1, explain: '2³ × 3² × 5 = 360' },
    { topic: 'hcf', q: 'LCM of 12, 15 and 21 is…', options: ['210', '420', '840', '3780'], answer: 1, explain: '2² × 3 × 5 × 7 = 420' },
    { topic: 'hcf', q: 'HCF of 8, 9 and 25 is…', options: ['1', '8', '72', '1800'], answer: 0, explain: '8 = 2³, 9 = 3², 25 = 5². No common prime.' },
    { topic: 'hcf', q: 'If a = 2³ × 3 and b = 2 × 3 × 5, then HCF(a, b) is…', options: ['2', '3', '6', '120'], answer: 2, explain: 'Common primes 2 and 3, smallest powers: 2¹ × 3¹ = 6' },
    { topic: 'hcf', q: 'If a = 2³ × 3 and b = 2 × 3 × 5, then LCM(a, b) is…', options: ['30', '60', '120', '240'], answer: 2, explain: '2³ × 3 × 5 = 120' },
    { topic: 'hcf', q: 'For two numbers a and b, HCF × LCM equals…', options: ['a + b', 'a × b', 'a − b', 'a ÷ b'], answer: 1, explain: 'HCF(a, b) × LCM(a, b) = a × b (two numbers only).' },
    { topic: 'hcf', q: 'HCF of two numbers is 9 and their product is 1458. Their LCM is…', options: ['81', '162', '1449', '13122'], answer: 1, explain: 'LCM = 1458 / 9 = 162' },
    { topic: 'hcf', q: 'HCF(306, 657) = 9. LCM(306, 657) is…', options: ['22338', '20106', '2233', '201'], answer: 0, explain: '306 × 657 / 9 = 34 × 657 = 22338' },
    { topic: 'hcf', q: 'Two numbers have LCM 180 and HCF 6. One number is 30. The other is…', options: ['36', '24', '18', '60'], answer: 0, explain: 'Other = 180 × 6 / 30 = 36' },
    { topic: 'hcf', q: 'HCF of two co-prime numbers is always…', options: ['0', '1', 'Their product', 'The smaller number'], answer: 1, explain: 'Co-prime means no common factor except 1.' },
    { topic: 'hcf', q: 'LCM of two prime numbers p and q is…', options: ['1', 'p + q', 'pq', 'p − q'], answer: 2, explain: 'Primes are co-prime, so LCM = p × q.' },
    { topic: 'hcf', q: 'Can two numbers have HCF 18 and LCM 380?', options: ['Yes', 'No, HCF must divide LCM', 'No, LCM must be odd', 'Only if both are even'], answer: 1, explain: '380 / 18 is not a whole number, so this is impossible.' },
    { topic: 'hcf', q: 'If one number is a factor of the other (e.g. 15 and 45), their HCF is…', options: ['The bigger number', 'The smaller number', '1', 'Their product'], answer: 1, explain: 'HCF(15, 45) = 15 and LCM(15, 45) = 45.' },
    { topic: 'word', q: 'A question asks for the "largest" size that measures or divides exactly. You should find the…', options: ['HCF', 'LCM', 'Product', 'Sum'], answer: 0, explain: 'Largest common divider → HCF.' },
    { topic: 'word', q: 'A question asks when two events "happen together again". You should find the…', options: ['HCF', 'LCM', 'Difference', 'Average'], answer: 1, explain: 'First common multiple of the time gaps → LCM.' },
    { topic: 'word', q: '616 soldiers march behind a 32-member band in the same number of columns. The maximum number of columns is…', options: ['4', '8', '16', '32'], answer: 1, explain: 'HCF(616, 32) = 2³ = 8' },
    { topic: 'word', q: 'Sonia takes 18 min and Ravi 12 min for one round. Starting together, they meet at the start after…', options: ['6 min', '30 min', '36 min', '216 min'], answer: 2, explain: 'LCM(18, 12) = 36' },
    { topic: 'word', q: 'Three lights flash every 4, 6 and 10 seconds. Starting together, they flash together again after…', options: ['20 s', '30 s', '60 s', '240 s'], answer: 2, explain: 'LCM(4, 6, 10) = 2² × 3 × 5 = 60' },
    { topic: 'word', q: 'Ribbons of 36 cm, 48 cm and 60 cm are cut into equal pieces of the greatest possible length. Each piece is…', options: ['6 cm', '12 cm', '24 cm', '720 cm'], answer: 1, explain: 'HCF(36, 48, 60) = 12' },
    { topic: 'word', q: 'The smallest number divisible by 8, 12 and 15 is…', options: ['60', '120', '240', '1440'], answer: 1, explain: 'LCM = 2³ × 3 × 5 = 120' },
    { topic: 'word', q: 'The largest number that divides 70 and 125 leaving remainders 5 and 8 is…', options: ['5', '13', '65', '117'], answer: 1, explain: '70 − 5 = 65, 125 − 8 = 117. HCF(65, 117) = 13' },
    { topic: 'word', q: 'The smallest number which leaves remainder 2 when divided by 3, 4 and 5 is…', options: ['60', '62', '58', '122'], answer: 1, explain: 'LCM(3, 4, 5) = 60, then add 2.' },
    { topic: 'irr', q: 'Which of these is irrational?', options: ['√4', '√9', '√5', '√16'], answer: 2, explain: '4, 9, 16 are perfect squares. 5 is not.' },
    { topic: 'irr', q: 'Which of these is rational?', options: ['√2', 'π', '√49', '√7'], answer: 2, explain: '√49 = 7 = 7/1' },
    { topic: 'irr', q: 'A rational number can be written in the form p/q where…', options: ['q = 0', 'p, q integers and q ≠ 0', 'p is prime', 'p and q are irrational'], answer: 1, explain: 'q cannot be 0 because division by 0 is not defined.' },
    { topic: 'irr', q: 'If a prime p divides a², then p also divides…', options: ['a', 'a + 1', '2a', 'Nothing'], answer: 0, explain: 'This theorem is the key step in proving √2, √3, √5 irrational.' },
    { topic: 'irr', q: 'The proof that √2 is irrational uses…', options: ['Direct calculation', 'Proof by contradiction', 'Drawing a graph', 'A calculator'], answer: 1, explain: 'Assume it is rational and reach an impossible result.' },
    { topic: 'irr', q: 'In the proof for √2, we assume √2 = a/b where a and b are…', options: ['Both even', 'Co-prime', 'Both prime', 'Equal'], answer: 1, explain: 'Any fraction can be reduced so a and b have no common factor except 1.' },
    { topic: 'irr', q: 'In the √2 proof, from 2b² = a² we conclude that…', options: ['2 divides a', '2 divides b only', 'a = b', 'b = 2'], answer: 0, explain: '2 divides a², so (since 2 is prime) 2 divides a.' },
    { topic: 'irr', q: 'The contradiction in the √3 proof is that…', options: ['a is negative', '3 divides both a and b', 'b = 0', 'a = 3'], answer: 1, explain: 'We assumed a and b had no common factor, but 3 divides both.' },
    { topic: 'ops', q: '5 − √3 is…', options: ['Rational', 'Irrational', 'An integer', 'A whole number'], answer: 1, explain: 'Rational − irrational = irrational.' },
    { topic: 'ops', q: '3√2 is…', options: ['Rational', 'Irrational', 'Equal to 6', 'Equal to √6'], answer: 1, explain: 'Non-zero rational × irrational = irrational.' },
    { topic: 'ops', q: '√2 × √2 is…', options: ['Irrational', 'Rational', '√4 which is irrational', '2√2'], answer: 1, explain: '√2 × √2 = 2' },
    { topic: 'ops', q: '(3 + √5) − √5 is…', options: ['Rational', 'Irrational', '2√5', '0'], answer: 0, explain: 'The √5 cancels out, leaving 3.' },
    { topic: 'ops', q: '(2 + √3)(2 − √3) is…', options: ['Irrational', 'Rational (= 1)', '4 − √3', '7'], answer: 1, explain: '(a + b)(a − b) = a² − b² = 4 − 3 = 1' },
    { topic: 'ops', q: '(√2 + 1)² is…', options: ['3', 'Rational', 'Irrational (= 3 + 2√2)', '2 + √2'], answer: 2, explain: '(√2)² + 2√2 + 1 = 3 + 2√2' },
    { topic: 'ops', q: 'Which statement is ALWAYS true?', options: ['Irrational + irrational is irrational', 'Rational + irrational is irrational', 'Irrational × irrational is irrational', 'Rational × irrational is rational'], answer: 1, explain: 'The other two "irrational with irrational" results can be rational (√2 − √2 = 0, √2 × √2 = 2).' },
    { topic: 'ops', q: 'To prove 5 − √3 irrational, we assume it equals a/b and get √3 = …', options: ['(5b − a)/b', '(a − 5)/b', 'a/5b', '5a/b'], answer: 0, explain: '√3 = 5 − a/b = (5b − a)/b, which would be rational: contradiction.' },
    { topic: 'ops', q: 'To prove 3 + 2√5 irrational, we get √5 = …', options: ['(a − 3b)/2b', '(a + 3b)/2b', '2a/3b', 'a/b − 3'], answer: 0, explain: '3 + 2√5 = a/b → 2√5 = a/b − 3 = (a − 3b)/b → √5 = (a − 3b)/2b' }
  ],

  // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
  practice: [
    { topic: 'fta', gen(mk) {
      const n = mk.composite([2, 2, 2, 3, 3, 5, 7, 11, 13], mk.ri(3, 5), 3000);
      const lines = [];
      let m = n;
      for (let d = 2; m > 1; d++) while (m % d === 0) { lines.push(`${m} ÷ ${d} = ${m / d}`); m /= d; }
      return {
        q: `Write ${n} as a product of its prime factors.`,
        fields: [{ label: `${n} =`, kind: 'factors', answer: n }],
        hint: 'Keep dividing by the smallest prime that goes in: 2, then 3, 5, 7, 11…',
        steps: lines.join('\n') + `\nSo ${n} = ${mk.fstr(n)}`
      };
    } },
    { topic: 'hcf', gen(mk) {
      let a, b, g;
      do {
        g = mk.composite([2, 2, 3, 3, 5, 7], mk.ri(1, 3), 60);
        const m = mk.ri(2, 15), k = mk.ri(2, 15);
        a = g * m; b = g * k;
        if (m === k || mk.gcd(m, k) !== 1) a = 0;
      } while (!a || a > 600 || b > 600);
      const l = mk.lcm(a, b);
      return {
        q: `Find the HCF and LCM of ${a} and ${b} by prime factorisation.`,
        fields: [{ label: 'HCF', answer: g }, { label: 'LCM', answer: l }],
        hint: `${a} = ${mk.fstr(a)} and ${b} = ${mk.fstr(b)}.\nHCF: smallest power of each COMMON prime. LCM: greatest power of EVERY prime.`,
        steps: `${a} = ${mk.fstr(a)}\n${b} = ${mk.fstr(b)}\nHCF = ${mk.feq(g)}\nLCM = ${mk.feq(l)}`
      };
    } },
    { topic: 'hcf', gen(mk) {
      let nums, h, l;
      do {
        const g = mk.pick([2, 3, 4, 5, 6]);
        nums = [mk.ri(2, 12), mk.ri(2, 12), mk.ri(2, 12)].map(x => x * g);
        h = nums.reduce(mk.gcd);
        l = nums.reduce(mk.lcm);
      } while (new Set(nums).size < 3 || l > 3000);
      nums.sort((x, y) => x - y);
      return {
        q: `Find the HCF and LCM of ${nums.join(', ')}.`,
        fields: [{ label: 'HCF', answer: h }, { label: 'LCM', answer: l }],
        hint: nums.map(x => `${x} = ${mk.fstr(x)}`).join('\n'),
        steps: nums.map(x => `${x} = ${mk.fstr(x)}`).join('\n') + `\nHCF = ${h === 1 ? '1 (no common prime)' : mk.feq(h)}\nLCM = ${mk.feq(l)}`
      };
    } },
    { topic: 'hcf', gen(mk) {
      let a, b, g;
      do {
        g = mk.pick([2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);
        const m = mk.ri(2, 13), k = mk.ri(2, 13);
        a = g * m; b = g * k;
        if (m === k || mk.gcd(m, k) !== 1) a = 0;
      } while (!a);
      const l = mk.lcm(a, b);
      if (Math.random() < 0.5) return {
        q: `The HCF of ${a} and ${b} is ${g}. Find their LCM.`,
        fields: [{ label: 'LCM', answer: l }],
        hint: 'HCF × LCM = product of the two numbers.',
        steps: `LCM = (${a} × ${b}) ÷ HCF\n= ${a * b} ÷ ${g}\n= ${l}`
      };
      return {
        q: `Two numbers have HCF ${g} and LCM ${l}. One of them is ${a}. Find the other.`,
        fields: [{ label: 'Other number', answer: b }],
        hint: 'HCF × LCM = product of the two numbers.',
        steps: `HCF × LCM = ${a} × other\n${g} × ${l} = ${a} × other\nother = ${g * l} ÷ ${a} = ${b}`
      };
    } },
    { topic: 'word', gen(mk) {
      let xs, l;
      const kind = mk.pick(['bells', 'track', 'divisible', 'remainder']);
      const count = kind === 'track' ? 2 : 3;
      do {
        xs = Array.from({ length: count }, () => mk.pick([4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24]));
        l = xs.reduce(mk.lcm);
      } while (new Set(xs).size < count || l > 360 || xs.includes(l));
      xs.sort((x, y) => x - y);
      const r = mk.ri(1, xs[0] - 1);
      const list = xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1];
      const fact = xs.map(x => `${x} = ${mk.fstr(x)}`).join('\n') + `\nLCM = ${mk.feq(l)}`;
      const t = {
        bells: { q: `Three bells ring every ${list} minutes. They ring together at 9:00 am. After how many minutes will they next ring together?`, unit: 'minutes', answer: l, end: `They ring together again after ${l} minutes.` },
        track: { q: `On a circular track, Aman takes ${xs[0]} minutes and Simran takes ${xs[1]} minutes for one round. They start together from the same point, in the same direction. After how many minutes will they meet again at the start?`, unit: 'minutes', answer: l, end: `They meet at the start after ${l} minutes.` },
        divisible: { q: `Find the smallest number that is exactly divisible by ${list}.`, unit: '', answer: l, end: `The smallest such number is ${l}.` },
        remainder: { q: `Find the smallest number which, when divided by ${list}, leaves remainder ${r} each time.`, unit: '', answer: l + r, end: `Add the remainder: ${l} + ${r} = ${l + r}` }
      }[kind];
      return {
        q: t.q,
        fields: [{ label: t.unit ? `Answer (${t.unit})` : 'Answer', answer: t.answer }],
        hint: kind === 'remainder' ? 'Find the LCM first, then add the remainder.' : '"Together again" or "smallest" means LCM.',
        steps: fact + '\n' + t.end
      };
    } },
    { topic: 'word', gen(mk) {
      const kind = mk.pick(['columns', 'ribbons', 'remainder', 'two-remainders']);
      const g = mk.pick([4, 6, 8, 9, 12, 14, 15, 16, 18, 21, 24]);
      let m, k, j;
      do { m = mk.ri(2, 20); k = mk.ri(2, 20); j = mk.ri(2, 20); } while (m === k || k === j || m === j || mk.gcd(m, k) !== 1);
      const steps = (nums) => nums.map(x => `${x} = ${mk.fstr(x)}`).join('\n') + `\nHCF = ${mk.feq(g)}`;
      if (kind === 'columns') {
        const army = g * Math.max(m, k) * mk.pick([1, 1, 2]) , band = g * Math.min(m, k);
        const h = mk.gcd(army, band);
        return {
          q: `An army group of ${army} members marches behind a band of ${band} members. Both groups must march in the same number of columns. What is the maximum number of columns?`,
          fields: [{ label: 'Columns', answer: h }],
          hint: '"Maximum number that divides both" means HCF.',
          steps: `${army} = ${mk.fstr(army)}\n${band} = ${mk.fstr(band)}\nHCF = ${mk.feq(h)}\nMaximum columns = ${h}`
        };
      }
      if (kind === 'ribbons') {
        const ls = [g * m, g * k, g * j].sort((x, y) => x - y);
        const h = ls.reduce(mk.gcd);
        return {
          q: `Three ribbons are ${ls[0]} cm, ${ls[1]} cm and ${ls[2]} cm long. They are cut into pieces of equal length, as long as possible, with nothing left over. How long is each piece?`,
          fields: [{ label: 'Length (cm)', answer: h }],
          hint: '"Greatest length that measures each exactly" means HCF.',
          steps: ls.map(x => `${x} = ${mk.fstr(x)}`).join('\n') + `\nHCF = ${mk.feq(h)}\nEach piece is ${h} cm.`
        };
      }
      if (kind === 'remainder') {
        const r = mk.ri(1, Math.min(9, g - 1));
        const A = g * m + r, B = g * k + r;
        return {
          q: `Find the largest number that divides ${A} and ${B}, leaving remainder ${r} in each case.`,
          fields: [{ label: 'Answer', answer: g }],
          hint: `First subtract the remainder from each number, then find the HCF.`,
          steps: `${A} − ${r} = ${A - r}, ${B} − ${r} = ${B - r}\n` + steps([A - r, B - r]) + `\nThe largest such number is ${g}.`
        };
      }
      const r1 = mk.ri(1, g - 1), r2 = mk.ri(1, g - 1);
      const A = g * m + r1, B = g * k + r2;
      return {
        q: `Find the largest number that divides ${A} and ${B}, leaving remainders ${r1} and ${r2} respectively.`,
        fields: [{ label: 'Answer', answer: g }],
        hint: `Subtract each remainder from its own number, then find the HCF.`,
        steps: `${A} − ${r1} = ${A - r1}, ${B} − ${r2} = ${B - r2}\n` + steps([A - r1, B - r2]) + `\nThe largest such number is ${g}.`
      };
    } },
    { topic: 'ops', gen(mk) {
      const p = mk.pick([2, 3, 5, 6, 7, 10, 11]), q = mk.pick([2, 3, 5, 7].filter(x => x !== p));
      const a = mk.ri(2, 9), s = mk.ri(2, 4);
      const items = [
        [`√${a * a}`, true, `√${a * a} = ${a}, which is rational.`],
        [`√${p} × √${p * s * s}`, true, `√${p} × √${p * s * s} = √${p * p * s * s} = ${p * s}, which is rational.`],
        [`(${a} + √${p})(${a} − √${p})`, true, `(a + b)(a − b) = a² − b²\n= ${a * a} − ${p} = ${a * a - p}, which is rational.`],
        [`(${a} + √${p}) − √${p}`, true, `The √${p} cancels, leaving ${a}, which is rational.`],
        [`${a} + √${p}`, false, `rational + irrational = irrational.`],
        [`${a} − √${p}`, false, `rational − irrational = irrational.`],
        [`${a}√${p}`, false, `non-zero rational × irrational = irrational.`],
        [`√${p}/${a}`, false, `irrational ÷ non-zero rational = irrational.`],
        [`√${p} + √${q}`, false, `√${p} + √${q} cannot be simplified to a fraction p/q. It is irrational.`],
        [`(√${p} + ${a})²`, false, `= ${p} + ${2 * a}√${p} + ${a * a} = ${p + a * a} + ${2 * a}√${p}\nrational + irrational = irrational.`],
        [`√${p * s * s}`, false, `√${p * s * s} = ${s}√${p}, which is irrational.`]
      ];
      const [expr, rational, why] = mk.pick(items);
      return {
        q: `Is ${expr} rational or irrational?`,
        choices: ['Rational', 'Irrational'],
        answer: rational ? 0 : 1,
        steps: why
      };
    } },
    { topic: 'fta', gen(mk) {
      const k = mk.pick([4, 6, 8, 9, 12, 14, 15, 18, 10, 20, 30]);
      const yes = k % 10 === 0;
      return {
        q: `Can ${k}ⁿ end with the digit 0 for some natural number n?`,
        choices: ['Yes', 'No'],
        answer: yes ? 0 : 1,
        steps: `To end with 0, a number must be divisible by 10 = 2 × 5.\n${k} = ${mk.fstr(k)}\n` + (yes
          ? `${k} has both 2 and 5 as factors, so ${k}ⁿ always ends with 0.`
          : `${k}ⁿ = (${mk.fstr(k)})ⁿ has ${k % 5 === 0 ? 'no 2' : 'no 5'} among its prime factors. By the uniqueness of prime factorisation, ${k}ⁿ can never end with 0.`)
      };
    } }
  ],

  match: [
    { title: 'Prime Factorisation', pairs: [
      ['140', '2² × 5 × 7'],
      ['156', '2² × 3 × 13'],
      ['3825', '3² × 5² × 17'],
      ['5005', '5 × 7 × 11 × 13'],
      ['7429', '17 × 19 × 23'],
      ['72', '2³ × 3²']
    ] },
    { title: 'HCF or LCM?', pairs: [
      ['HCF(6, 20)', '2'],
      ['LCM(6, 20)', '60'],
      ['HCF(96, 404)', '4'],
      ['LCM(6, 72, 120)', '360'],
      ['LCM(12, 15, 21)', '420'],
      ['HCF(17, 23, 29)', '1']
    ] },
    { title: 'Rational or Irrational?', pairs: [
      ['√49', 'Rational: 7'],
      ['5 − √3', 'Irrational'],
      ['√2 × √8', 'Rational: 4'],
      ['(2 + √3)(2 − √3)', 'Rational: 1'],
      ['0.75', 'Rational: 3/4'],
      ['π', 'Irrational (not 22/7)']
    ] },
    { title: 'Key Words', pairs: [
      ['Prime', 'Exactly two factors'],
      ['Co-prime', 'HCF is 1'],
      ['Composite', 'More than two factors'],
      ['Fundamental Theorem', 'Unique prime factorisation'],
      ['Proof by contradiction', 'Assume the opposite'],
      ['HCF × LCM', 'Product of two numbers']
    ] }
  ],

  balance: [],

  // Each key point has keyword groups: all groups must appear in the answer
  // ("a|b" means a OR b) for the point to be auto-ticked.
  written: [
    { marks: 1, q: 'State the Fundamental Theorem of Arithmetic.',
      keypoints: [
        { text: 'Every composite number is a product of primes, and this is unique apart from order', kw: ['composite', 'prime', 'unique'] }
      ],
      model: 'Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.' },
    { marks: 1, q: 'Express 3825 as a product of its prime factors.',
      keypoints: [
        { text: '3825 = 3² × 5² × 17', kw: ['17'] }
      ],
      model: '3825 = 3 × 1275 = 3 × 3 × 425 = 3 × 3 × 5 × 85 = 3 × 3 × 5 × 5 × 17\n3825 = 3² × 5² × 17' },
    { marks: 1, q: 'The HCF of two numbers is 13 and their LCM is 182. If one number is 26, find the other.',
      keypoints: [
        { text: 'Other number = 13 × 182 / 26 = 91', kw: ['91'] }
      ],
      model: 'HCF × LCM = product of the two numbers\n13 × 182 = 26 × other\nOther = 2366 / 26 = 91' },
    { marks: 2, q: 'Find the LCM and HCF of 26 and 91, and verify that LCM × HCF = product of the two numbers.',
      keypoints: [
        { text: '26 = 2 × 13, 91 = 7 × 13', kw: ['7', '13'] },
        { text: 'HCF = 13, LCM = 182', kw: ['182'] },
        { text: 'Both products equal 2366', kw: ['2366'] }
      ],
      model: '26 = 2 × 13\n91 = 7 × 13\nHCF = 13\nLCM = 2 × 7 × 13 = 182\nLCM × HCF = 182 × 13 = 2366\n26 × 91 = 2366\nSo LCM × HCF = product of the two numbers. Verified.' },
    { marks: 2, q: 'Find the HCF and LCM of 12, 15 and 21 by the prime factorisation method.',
      keypoints: [
        { text: '12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7', kw: ['2²|2^2|2 × 2|2x2'] },
        { text: 'HCF = 3', kw: ['hcf'] },
        { text: 'LCM = 2² × 3 × 5 × 7 = 420', kw: ['420'] }
      ],
      model: '12 = 2² × 3\n15 = 3 × 5\n21 = 3 × 7\nHCF = 3 (the only common prime, smallest power)\nLCM = 2² × 3 × 5 × 7 = 420' },
    { marks: 2, q: 'Check whether 6ⁿ can end with the digit 0 for any natural number n.',
      keypoints: [
        { text: 'Ending in 0 needs divisibility by 10, i.e. prime factors 2 and 5', kw: ['5', '10|2 × 5|2x5'] },
        { text: '6ⁿ = 2ⁿ × 3ⁿ has no factor 5', kw: ['3'] },
        { text: 'By uniqueness (Fundamental Theorem), 6ⁿ cannot end with 0', kw: ['cannot|can not|never|not'] }
      ],
      model: 'If 6ⁿ ended with 0, it would be divisible by 10 = 2 × 5, so 5 would be one of its prime factors.\nBut 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ. Its only prime factors are 2 and 3.\nBy the uniqueness of prime factorisation (Fundamental Theorem of Arithmetic), 5 is not a factor of 6ⁿ.\nSo 6ⁿ can never end with the digit 0.' },
    { marks: 2, q: 'Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.',
      keypoints: [
        { text: '7 × 11 × 13 + 13 = 13 × 78', kw: ['78'] },
        { text: '7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5 × 1009', kw: ['1009'] },
        { text: 'Both have factors other than 1 and themselves', kw: ['factor'] }
      ],
      model: '7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × 78\n7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × 1009\nEach number has a factor other than 1 and itself, so both are composite.' },
    { marks: 2, q: 'There is a circular path around a sports field. Sonia takes 18 minutes to drive one round, while Ravi takes 12 minutes. They start at the same point, at the same time, in the same direction. After how many minutes will they meet again at the starting point?',
      keypoints: [
        { text: 'Use LCM of 18 and 12', kw: ['lcm'] },
        { text: '18 = 2 × 3², 12 = 2² × 3', kw: ['3²|3^2|3 × 3|2²|2^2'] },
        { text: 'LCM = 36 minutes', kw: ['36'] }
      ],
      model: 'They meet at the start after a time that is a multiple of both 18 and 12. The first such time is LCM(18, 12).\n18 = 2 × 3²\n12 = 2² × 3\nLCM = 2² × 3² = 36\nThey meet again at the starting point after 36 minutes.' },
    { marks: 2, q: 'An army contingent of 616 members is to march behind an army band of 32 members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?',
      keypoints: [
        { text: 'Use HCF of 616 and 32', kw: ['hcf'] },
        { text: '616 = 2³ × 7 × 11, 32 = 2⁵', kw: ['11'] },
        { text: 'HCF = 8 columns', kw: ['8'] }
      ],
      model: 'The number of columns must divide both 616 and 32, and should be the largest such number, so we find HCF(616, 32).\n616 = 2³ × 7 × 11\n32 = 2⁵\nHCF = 2³ = 8\nMaximum number of columns = 8' },
    { marks: 3, q: 'Find the largest number which divides 245 and 1029, leaving remainder 5 in each case.',
      keypoints: [
        { text: 'Subtract the remainder: 240 and 1024', kw: ['240', '1024'] },
        { text: '240 = 2⁴ × 3 × 5, 1024 = 2¹⁰', kw: ['2⁴|2^4|16'] },
        { text: 'Required number = HCF = 16', kw: ['16'] }
      ],
      model: 'The required number divides 245 − 5 = 240 and 1029 − 5 = 1024 exactly.\nSo it is HCF(240, 1024).\n240 = 2⁴ × 3 × 5\n1024 = 2¹⁰\nHCF = 2⁴ = 16\nThe largest such number is 16.' },
    { marks: 3, q: 'Prove that √5 is irrational.',
      keypoints: [
        { text: 'Assume √5 = a/b with a, b co-prime integers, b ≠ 0', kw: ['co-prime|coprime', 'assume|suppose|let'] },
        { text: 'Squaring: 5b² = a², so 5 divides a', kw: ['5b²|5b^2|5 b²|5 b^2'] },
        { text: 'Put a = 5c: b² = 5c², so 5 divides b', kw: ['5c|c²|c^2'] },
        { text: '5 divides both a and b: contradiction, so √5 is irrational', kw: ['contradict'] }
      ],
      model: 'Let us assume, to the contrary, that √5 is rational.\nThen √5 = a/b, where a and b are co-prime integers and b ≠ 0.\nSo b√5 = a. Squaring: 5b² = a².\nSo 5 divides a², and since 5 is prime, 5 divides a.\nLet a = 5c for some integer c. Then 5b² = 25c², so b² = 5c².\nSo 5 divides b², and hence 5 divides b.\nSo 5 divides both a and b. This contradicts the fact that a and b are co-prime.\nSo our assumption is wrong. Hence √5 is irrational.' },
    { marks: 3, q: 'Prove that √3 is irrational.',
      keypoints: [
        { text: 'Assume √3 = a/b with a, b co-prime integers, b ≠ 0', kw: ['co-prime|coprime', 'assume|suppose|let'] },
        { text: 'Squaring: 3b² = a², so 3 divides a', kw: ['3b²|3b^2|3 b²|3 b^2'] },
        { text: 'Put a = 3c: b² = 3c², so 3 divides b', kw: ['3c|c²|c^2'] },
        { text: '3 divides both a and b: contradiction, so √3 is irrational', kw: ['contradict'] }
      ],
      model: 'Let us assume, to the contrary, that √3 is rational.\nThen √3 = a/b, where a and b are co-prime integers and b ≠ 0.\nSo b√3 = a. Squaring: 3b² = a².\nSo 3 divides a², and since 3 is prime, 3 divides a.\nLet a = 3c for some integer c. Then 3b² = 9c², so b² = 3c².\nSo 3 divides b², and hence 3 divides b.\nSo 3 divides both a and b. This contradicts the fact that a and b are co-prime.\nSo our assumption is wrong. Hence √3 is irrational.' },
    { marks: 3, q: 'Given that √5 is irrational, prove that 3 + 2√5 is irrational.',
      keypoints: [
        { text: 'Assume 3 + 2√5 = a/b (a, b co-prime, b ≠ 0)', kw: ['assume|suppose|let'] },
        { text: 'Rearrange: √5 = (a − 3b)/2b', kw: ['2b'] },
        { text: 'Right side is rational, so √5 would be rational: contradiction', kw: ['rational', 'contradict'] }
      ],
      model: 'Let us assume, to the contrary, that 3 + 2√5 is rational.\nThen 3 + 2√5 = a/b, where a and b are co-prime integers and b ≠ 0.\nSo 2√5 = a/b − 3 = (a − 3b)/b\n√5 = (a − 3b)/2b\nSince a and b are integers, (a − 3b)/2b is rational, so √5 would be rational.\nThis contradicts the fact that √5 is irrational.\nHence 3 + 2√5 is irrational.' },
    { marks: 3, q: 'Prove that 1/√2 is irrational.',
      keypoints: [
        { text: 'Assume 1/√2 = a/b (a, b co-prime, a, b ≠ 0)', kw: ['assume|suppose|let'] },
        { text: 'Then √2 = b/a', kw: ['b/a'] },
        { text: 'b/a is rational, so √2 would be rational: contradiction', kw: ['rational', 'contradict'] }
      ],
      model: 'Let us assume, to the contrary, that 1/√2 is rational.\nThen 1/√2 = a/b, where a and b are co-prime integers, both non-zero.\nSo √2 = b/a.\nSince a and b are integers, b/a is rational, so √2 would be rational.\nThis contradicts the fact that √2 is irrational.\nHence 1/√2 is irrational.' },
    { marks: 3, q: 'Three bells toll at intervals of 9, 12 and 15 minutes. If they start tolling together, after what time will they next toll together?',
      keypoints: [
        { text: 'Use LCM of 9, 12 and 15', kw: ['lcm'] },
        { text: '9 = 3², 12 = 2² × 3, 15 = 3 × 5', kw: ['3²|3^2|3 × 3'] },
        { text: 'LCM = 180 minutes = 3 hours', kw: ['180|3 hours|3 hr'] }
      ],
      model: 'They toll together after a time that is a multiple of 9, 12 and 15. The first such time is the LCM.\n9 = 3²\n12 = 2² × 3\n15 = 3 × 5\nLCM = 2² × 3² × 5 = 180\nThey toll together again after 180 minutes = 3 hours.' }
  ]
});
