// CBSE Class 10 Maths (NCERT, rationalised syllabus) — Chapter 13: Statistics
// In the syllabus: mean (direct, assumed mean, step-deviation), mode and median of grouped data, 3 Median = Mode + 2 Mean.
// Not in the syllabus: graphical representation of cumulative frequency (ogives). CBSE avoids bimodal data.
// Note: the app turns a digit after a letter into a subscript, so f1, f0, f2 show as f₁, f₀, f₂ (wanted here).
(function () {
  const r2 = v => Math.round(v * 100) / 100;
  const exact2 = v => Math.abs(v * 100 - Math.round(v * 100)) < 1e-6;
  const dn = (mk, x) => mk.num(r2(x));
  const CTX = [
    ['Marks', 'Number of students'], ['Daily wages (₹)', 'Number of workers'], ['Height (cm)', 'Number of plants'],
    ['Weight (kg)', 'Number of students'], ['Age (years)', 'Number of patients'], ['Time taken (minutes)', 'Number of runners']
  ];
  // Equal-width classes: lo[i] to lo[i] + h
  function makeTable(mk, k) {
    const h = mk.pick([5, 10, 10, 10, 20, 20, 50, 100]);
    const s = h * mk.ri(0, h >= 50 ? 4 : 6);
    return { h, k, lo: Array.from({ length: k }, (_, i) => s + i * h), ctx: mk.pick(CTX) };
  }
  const lab = (t, i) => `${t.lo[i]}–${t.lo[i] + t.h}`;
  const mark = (t, i) => t.lo[i] + t.h / 2;
  const freqs = (mk, k, lo = 2, hi = 20) => Array.from({ length: k }, () => mk.ri(lo, hi));
  const show = (t, f) => `${t.ctx[0]} → ${t.ctx[1]}\n` + f.map((v, i) => `${lab(t, i)}: ${v}`).join('\n');
  const cum = f => f.reduce((acc, v) => (acc.push((acc.length ? acc[acc.length - 1] : 0) + v), acc), []);
  // Index of the median class (first cf > n/2), or -1 if some cf equals n/2 exactly (ambiguous).
  function medianIdx(f) {
    const cf = cum(f), half = cf[cf.length - 1] / 2;
    if (cf.some(c => c === half)) return -1;
    return cf.findIndex(c => c > half);
  }
  // Index of the unique highest frequency, or -1.
  function modalIdx(f) {
    const m = Math.max(...f), at = f.indexOf(m);
    return f.lastIndexOf(m) === at ? at : -1;
  }

  SWG.addChapter('math', {
    id: 'math-ch13',
    number: 13,
    title: 'Statistics',
    icon: '📊',

    topics: {
      mean: 'Mean of Grouped Data',
      mode: 'Mode of Grouped Data',
      median: 'Median of Grouped Data',
      emp: 'Empirical Relation & Choosing a Measure'
    },

    summary: [
      'Class mark xᵢ = (upper limit + lower limit)/2. For grouped data we treat every value in a class as if it were its class mark.',
      'Mean (direct method): x̄ = Σfᵢxᵢ / Σfᵢ.',
      'Mean (assumed mean method): dᵢ = xᵢ − a, x̄ = a + Σfᵢdᵢ / Σfᵢ. a is the assumed mean, usually a class mark near the middle.',
      'Mean (step-deviation method): uᵢ = (xᵢ − a)/h, x̄ = a + (Σfᵢuᵢ / Σfᵢ) × h. h is the class width. All three methods give the same mean.',
      'Mode = l + ((f1 − f0)/(2f1 − f0 − f2)) × h. Modal class = class with the highest frequency; l = its lower limit, f1 = its frequency, f0 = frequency of the class before it, f2 = frequency of the class after it.',
      'Median = l + ((n/2 − cf)/f) × h. Median class = first class whose cumulative frequency is greater than n/2; l = its lower limit, cf = cumulative frequency of the class BEFORE it, f = its frequency, n = Σfᵢ.',
      'Empirical relation: 3 Median = Mode + 2 Mean.',
      'For median and mode the classes must be continuous: 10–19, 20–29 become 9.5–19.5, 19.5–29.5.'
    ],

    flashcards: [
      { topic: 'mean', front: 'What is the class mark of a class? Find it for 10–25.', back: 'Class mark = (upper limit + lower limit)/2\n10–25 → (10 + 25)/2 = 17.5' },
      { topic: 'mean', front: 'Why do we use class marks to find the mean of grouped data?', back: 'We do not know the exact values inside a class, so we assume every value in the class is at its middle (the class mark xᵢ).\nSo the mean of grouped data is a good estimate, not an exact value.' },
      { topic: 'mean', front: 'Mean by the direct method', back: 'x̄ = Σfᵢxᵢ / Σfᵢ\nxᵢ = class mark, fᵢ = frequency\nΣfᵢ = n = total number of observations' },
      { topic: 'mean', front: 'Mean by the assumed mean method', back: 'Choose an assumed mean a (a class mark near the middle).\ndᵢ = xᵢ − a\nx̄ = a + Σfᵢdᵢ / Σfᵢ' },
      { topic: 'mean', front: 'Mean by the step-deviation method', back: 'uᵢ = (xᵢ − a)/h\nx̄ = a + (Σfᵢuᵢ / Σfᵢ) × h\na = assumed mean, h = class width' },
      { topic: 'mean', front: 'When is the step-deviation method useful?', back: 'When the class marks are big numbers and all the dᵢ have a common factor h (the class width). Dividing by h keeps the numbers small.' },
      { topic: 'mean', front: 'Do the direct, assumed mean and step-deviation methods give the same mean?', back: 'Yes. They are just different ways of doing the same calculation.' },
      { topic: 'mean', front: 'How should you choose the assumed mean a?', back: 'Take a class mark near the middle of the table (often the one with a large frequency). Then the dᵢ or uᵢ values are small, some negative and some positive.' },
      { topic: 'mean', front: 'If Σfᵢuᵢ is negative, is the mean bigger or smaller than a?', back: 'Smaller. x̄ = a + (negative) × h, so x̄ < a.' },
      { topic: 'mean', front: 'Marks of 30 students: 10–25: 2, 25–40: 3, 40–55: 7, 55–70: 6, 70–85: 6, 85–100: 6. Find the mean.', back: 'xᵢ: 17.5, 32.5, 47.5, 62.5, 77.5, 92.5\nΣfᵢxᵢ = 35 + 97.5 + 332.5 + 375 + 465 + 555 = 1860\nMean = 1860/30 = 62' },
      { topic: 'mean', front: 'Daily wages of 50 workers: 500–520: 12, 520–540: 14, 540–560: 8, 560–580: 6, 580–600: 10. Find the mean.', back: 'xᵢ: 510, 530, 550, 570, 590\nΣfᵢxᵢ = 6120 + 7420 + 4400 + 3420 + 5900 = 27260\nMean = 27260/50 = ₹545.20' },
      { topic: 'mean', front: 'Pocket money: 11–13: 7, 13–15: 6, 15–17: 9, 17–19: 13, 19–21: f, 21–23: 5, 23–25: 4. The mean is 18. Find f.', back: 'xᵢ: 12, 14, 16, 18, 20, 22, 24\nΣfᵢ = 44 + f, Σfᵢxᵢ = 752 + 20f\n18(44 + f) = 752 + 20f\n792 + 18f = 752 + 20f → f = 20' },
      { topic: 'mean', front: 'Daily expenses: 100–150: 4, 150–200: 5, 200–250: 12, 250–300: 2, 300–350: 2. Find the mean (step-deviation).', back: 'a = 225, h = 50\nuᵢ: −2, −1, 0, 1, 2\nΣfᵢuᵢ = −8 − 5 + 0 + 2 + 4 = −7, Σfᵢ = 25\nMean = 225 + (−7/25) × 50 = 225 − 14 = 211' },

      { topic: 'mode', front: 'What is the mode? What is the modal class?', back: 'Mode: the value that occurs most often.\nModal class: the class with the highest frequency. For grouped data the mode lies inside the modal class.' },
      { topic: 'mode', front: 'Formula for the mode of grouped data (explain every symbol)', back: 'Mode = l + ((f1 − f0)/(2f1 − f0 − f2)) × h\nl = lower limit of the modal class\nh = class width\nf1 = frequency of the modal class\nf0 = frequency of the class BEFORE it\nf2 = frequency of the class AFTER it' },
      { topic: 'mode', front: 'Is the modal class the same as the mode?', back: 'No. The modal class is a class (like 60–80). The mode is a single value inside it (like 65.625).' },
      { topic: 'mode', front: 'Family size: 1–3: 7, 3–5: 8, 5–7: 2, 7–9: 2, 9–11: 1. Find the mode.', back: 'Modal class 3–5: l = 3, h = 2, f1 = 8, f0 = 7, f2 = 2\nMode = 3 + ((8 − 7)/(16 − 7 − 2)) × 2 = 3 + 2/7 ≈ 3.286' },
      { topic: 'mode', front: 'Lifetimes (hours): 0–20: 10, 20–40: 35, 40–60: 52, 60–80: 61, 80–100: 38, 100–120: 29. Find the modal lifetime.', back: 'Modal class 60–80: l = 60, h = 20, f1 = 61, f0 = 52, f2 = 38\nMode = 60 + (9/(122 − 52 − 38)) × 20 = 60 + (9/32) × 20 = 65.625 hours' },
      { topic: 'mode', front: 'Ages of patients: 5–15: 6, 15–25: 11, 25–35: 21, 35–45: 23, 45–55: 14, 55–65: 5. Find the mode.', back: 'Modal class 35–45: l = 35, f1 = 23, f0 = 21, f2 = 14, h = 10\nMode = 35 + (2/(46 − 21 − 14)) × 10 = 35 + 20/11 ≈ 36.8 years' },
      { topic: 'mode', front: 'Marks: 0–10: 5, 10–20: 8, 20–30: 12, 30–40: 7, 40–50: 3. Find the mode.', back: 'Modal class 20–30: l = 20, f1 = 12, f0 = 8, f2 = 7, h = 10\nMode = 20 + (4/(24 − 8 − 7)) × 10 = 20 + 40/9 ≈ 24.44' },
      { topic: 'mode', front: 'What do you do if the classes are like 10–19, 20–29, … for the mode or median?', back: 'Make them continuous: subtract 0.5 from each lower limit and add 0.5 to each upper limit.\n9.5–19.5, 19.5–29.5, …' },

      { topic: 'median', front: 'What is the median?', back: 'The middle value of the data when it is arranged in order. Half the observations are below it and half above it.' },
      { topic: 'median', front: 'What is cumulative frequency (cf)?', back: 'The total of the frequencies up to and including a class.\ne.g. frequencies 5, 8, 20 → cf 5, 13, 33' },
      { topic: 'median', front: 'How do you find the median class?', back: '1. Find n = Σfᵢ and n/2\n2. Make the cf column\n3. The median class is the first class whose cf is greater than (and nearest to) n/2' },
      { topic: 'median', front: 'Formula for the median of grouped data (explain every symbol)', back: 'Median = l + ((n/2 − cf)/f) × h\nl = lower limit of the median class\nn = Σfᵢ\ncf = cumulative frequency of the class BEFORE the median class\nf = frequency of the median class\nh = class width' },
      { topic: 'median', front: 'For grouped data, do we use n/2 or (n + 1)/2?', back: 'n/2, whether n is odd or even.\n((n + 1)/2 is only for ungrouped data with n odd.)' },
      { topic: 'median', front: 'Marks: 0–10: 5, 10–20: 8, 20–30: 20, 30–40: 15, 40–50: 7, 50–60: 5. Find the median.', back: 'n = 60, n/2 = 30; cf: 5, 13, 33, …\nMedian class 20–30: l = 20, cf = 13, f = 20, h = 10\nMedian = 20 + ((30 − 13)/20) × 10 = 20 + 8.5 = 28.5' },
      { topic: 'median', front: 'Heights of 51 girls: below 140: 4, 140–145: 7, 145–150: 18, 150–155: 11, 155–160: 6, 160–165: 5. Find the median height.', back: 'n = 51, n/2 = 25.5; cf: 4, 11, 29, …\nMedian class 145–150: l = 145, cf = 11, f = 18, h = 5\nMedian = 145 + (14.5/18) × 5 ≈ 149.03 cm' },
      { topic: 'median', front: 'Electricity used: 65–85: 4, 85–105: 5, 105–125: 13, 125–145: 20, 145–165: 14, 165–185: 8, 185–205: 4. Find the median.', back: 'n = 68, n/2 = 34; cf: 4, 9, 22, 42, …\nMedian class 125–145: l = 125, cf = 22, f = 20, h = 20\nMedian = 125 + (12/20) × 20 = 137 units' },
      { topic: 'median', front: 'Median 28.5, n = 60: 0–10: 5, 10–20: x, 20–30: 20, 30–40: 15, 40–50: y, 50–60: 5. Find x and y.', back: '45 + x + y = 60 → x + y = 15\nMedian class 20–30: cf = 5 + x, f = 20\n28.5 = 20 + ((30 − 5 − x)/20) × 10\n8.5 = (25 − x)/2 → x = 8, y = 7' },
      { topic: 'median', front: 'A "less than" table: less than 20: 12, less than 30: 30, less than 40: 41. Find the frequencies of 20–30 and 30–40.', back: 'Subtract neighbouring cumulative values:\n20–30: 30 − 12 = 18\n30–40: 41 − 30 = 11' },
      { topic: 'median', front: 'Median 525, n = 100: 0–100: 2, 100–200: 5, 200–300: x, 300–400: 12, 400–500: 17, 500–600: 20, 600–700: y, 700–800: 9, 800–900: 7, 900–1000: 4. Find x and y.', back: '76 + x + y = 100 → x + y = 24\nMedian class 500–600: cf = 36 + x, f = 20, h = 100\n525 = 500 + ((50 − 36 − x)/20) × 100\n25 = 5(14 − x) → x = 9, y = 15' },

      { topic: 'emp', front: 'Empirical relation between mean, median and mode', back: '3 Median = Mode + 2 Mean\nSo Mode = 3 Median − 2 Mean' },
      { topic: 'emp', front: 'The median is 26 and the mean is 24. Find the mode.', back: 'Mode = 3 Median − 2 Mean = 78 − 48 = 30' },
      { topic: 'emp', front: 'The mode is 24 and the mean is 30. Find the median.', back: '3 Median = Mode + 2 Mean = 24 + 60 = 84\nMedian = 28' },
      { topic: 'emp', front: 'What are mean, median and mode together called?', back: 'Measures of central tendency: each gives one value that represents the whole data.' },
      { topic: 'emp', front: 'When is the median a better choice than the mean?', back: 'When there are a few very big or very small values (extreme values), e.g. salaries in a company. The mean gets pulled by them; the median does not.' },
      { topic: 'emp', front: 'When is the mode the best choice?', back: 'When you want the most popular or most common value, e.g. the shoe size a shop should stock most, or the most common family size.' },
      { topic: 'emp', front: 'When is the mean the best choice?', back: 'When you want a fair average using every value, e.g. comparing the average marks of two classes.' },
      { topic: 'emp', front: 'In a perfectly symmetric distribution with one peak, how are mean, median and mode related?', back: 'All three are equal.' },
      { topic: 'emp', front: 'Electricity data: mean ≈ 137.06, median 137, mode ≈ 135.77. Check the empirical relation.', back: 'Mode + 2 Mean = 135.77 + 274.12 = 409.89\n3 Median = 411\nThey are close (it is only an approximate relation).' }
    ],

    quiz: [
      { topic: 'mean', q: 'The class mark of the class 10–25 is…', options: ['15', '17.5', '12.5', '35'], answer: 1, explain: '(10 + 25)/2 = 17.5' },
      { topic: 'mean', q: 'The mean of grouped data by the direct method is…', options: ['Σfᵢxᵢ / Σfᵢ', 'Σxᵢ / Σfᵢ', 'Σfᵢ / Σxᵢ', 'Σfᵢxᵢ / n²'], answer: 0, explain: 'x̄ = Σfᵢxᵢ / Σfᵢ' },
      { topic: 'mean', q: 'In the assumed mean method, dᵢ = …', options: ['xᵢ + a', 'xᵢ − a', '(xᵢ − a)/h', 'a − xᵢ'], answer: 1, explain: 'dᵢ is the deviation of xᵢ from the assumed mean a.' },
      { topic: 'mean', q: 'In the step-deviation method, uᵢ = …', options: ['xᵢ − a', '(xᵢ − a)/h', '(xᵢ + a)/h', 'h(xᵢ − a)'], answer: 1, explain: 'The deviation is divided by the class width h.' },
      { topic: 'mean', q: 'In the step-deviation method, x̄ = …', options: ['a + (Σfᵢuᵢ / Σfᵢ) × h', 'a − (Σfᵢuᵢ / Σfᵢ) × h', '(Σfᵢuᵢ / Σfᵢ) × h', 'a + Σfᵢuᵢ / h'], answer: 0, explain: 'Multiply back by h at the end.' },
      { topic: 'mean', q: 'If Σfᵢ = 20 and Σfᵢxᵢ = 640, the mean is…', options: ['30', '32', '34', '12800'], answer: 1, explain: '640 ÷ 20 = 32' },
      { topic: 'mean', q: 'a = 45, h = 10, Σfᵢuᵢ = −10 and Σfᵢ = 50. The mean is…', options: ['43', '47', '44.8', '45.2'], answer: 0, explain: '45 + (−10/50) × 10 = 45 − 2 = 43' },
      { topic: 'mean', q: 'a = 150, Σfᵢdᵢ = 120 and Σfᵢ = 40. The mean is…', options: ['147', '153', '150.3', '180'], answer: 1, explain: '150 + 120/40 = 153' },
      { topic: 'mean', q: 'Classes 0–10, 10–20, 20–30, 30–40, 40–50 have frequencies 3, 5, 9, 5, 3. The mean is…', options: ['20', '25', '30', '22.5'], answer: 1, explain: 'The table is symmetric about 25. (Σfᵢxᵢ = 625, Σfᵢ = 25.)' },
      { topic: 'mean', q: 'Daily wages: 500–520: 12, 520–540: 14, 540–560: 8, 560–580: 6, 580–600: 10. The mean wage is…', options: ['₹540', '₹545.20', '₹550', '₹548.60'], answer: 1, explain: '27260 ÷ 50 = 545.2' },
      { topic: 'mean', q: 'The direct, assumed mean and step-deviation methods give…', options: ['Different answers', 'The same answer', 'Answers that differ by h', 'The same answer only if a = 0'], answer: 1, explain: 'They are the same calculation done differently.' },
      { topic: 'mean', q: 'The mean of grouped data found using class marks is…', options: ['Always exact', 'An estimate (approximate)', 'Always a whole number', 'Equal to the median'], answer: 1, explain: 'We assume all values in a class sit at its class mark.' },
      { topic: 'mean', q: 'Marks of 30 students: 10–25: 2, 25–40: 3, 40–55: 7, 55–70: 6, 70–85: 6, 85–100: 6. The mean is…', options: ['59', '62', '64', '60.5'], answer: 1, explain: '1860 ÷ 30 = 62' },

      { topic: 'mode', q: 'The mode of data is…', options: ['The middle value', 'The average value', 'The most frequent value', 'The largest value'], answer: 2, explain: 'Mode = value that occurs most often.' },
      { topic: 'mode', q: 'The modal class is the class with…', options: ['The highest frequency', 'The highest cumulative frequency', 'The middle position', 'The largest class mark'], answer: 0, explain: 'The mode lies in the class with the highest frequency.' },
      { topic: 'mode', q: 'The formula for the mode of grouped data is…', options: ['l + ((f1 − f0)/(2f1 − f0 − f2)) × h', 'l + ((f1 − f2)/(2f1 − f0 − f2)) × h', 'l + ((n/2 − cf)/f) × h', 'l − ((f1 − f0)/(2f1 − f0 − f2)) × h'], answer: 0, explain: 'Top: f1 − f0 (modal minus the one before).' },
      { topic: 'mode', q: 'In the mode formula, f0 is the frequency of…', options: ['The modal class', 'The class before the modal class', 'The class after the modal class', 'The first class'], answer: 1, explain: 'f0 = the class just before; f2 = the class just after.' },
      { topic: 'mode', q: 'Classes 0–10, 10–20, 20–30, 30–40, 40–50 have frequencies 5, 8, 12, 7, 3. The modal class is…', options: ['10–20', '20–30', '30–40', '0–10'], answer: 1, explain: '12 is the highest frequency.' },
      { topic: 'mode', q: 'For the same table (5, 8, 12, 7, 3), the mode is about…', options: ['24.44', '25', '22.5', '26.67'], answer: 0, explain: '20 + (4/9) × 10 ≈ 24.44' },
      { topic: 'mode', q: 'Family size: 1–3: 7, 3–5: 8, 5–7: 2, 7–9: 2, 9–11: 1. The mode is about…', options: ['3.286', '4', '3.5', '2.857'], answer: 0, explain: '3 + (1/7) × 2' },
      { topic: 'mode', q: 'If f1 = 61, f0 = 52 and f2 = 38, then 2f1 − f0 − f2 = …', options: ['32', '71', '9', '23'], answer: 0, explain: '122 − 52 − 38 = 32' },
      { topic: 'mode', q: 'Lifetimes: modal class 60–80 with f1 = 61, f0 = 52, f2 = 38. The mode is…', options: ['65.625 hours', '64.5 hours', '70 hours', '68.25 hours'], answer: 0, explain: '60 + (9/32) × 20 = 65.625' },
      { topic: 'mode', q: 'To use the mode or median formula with classes 10–19, 20–29, …, you first change them to…', options: ['10–20, 20–30, …', '9.5–19.5, 19.5–29.5, …', '10.5–19.5, …', 'Class marks only'], answer: 1, explain: 'Subtract 0.5 from lower limits and add 0.5 to upper limits.' },

      { topic: 'median', q: 'The cumulative frequency of a class is…', options: ['Its own frequency', 'The total of frequencies up to and including it', 'The total of all frequencies', 'Its class mark × frequency'], answer: 1, explain: 'Add up all frequencies so far.' },
      { topic: 'median', q: 'The median class is the first class whose cumulative frequency is…', options: ['Less than n/2', 'Greater than n/2', 'Equal to n', 'The largest frequency'], answer: 1, explain: 'It is the class that contains the (n/2)th observation.' },
      { topic: 'median', q: 'The formula for the median of grouped data is…', options: ['l + ((n/2 − cf)/f) × h', 'l + ((cf − n/2)/f) × h', 'l + ((n − cf)/f) × h', 'l + ((f1 − f0)/(2f1 − f0 − f2)) × h'], answer: 0, explain: 'Median = l + ((n/2 − cf)/f) × h' },
      { topic: 'median', q: 'In the median formula, cf is the cumulative frequency of…', options: ['The median class', 'The class before the median class', 'The class after the median class', 'The last class'], answer: 1, explain: 'cf counts the observations BEFORE the median class.' },
      { topic: 'median', q: 'Frequencies 5, 8, 20, 15, 7, 5 for 0–10, 10–20, …, 50–60. The median class is…', options: ['10–20', '20–30', '30–40', '40–50'], answer: 1, explain: 'n/2 = 30; cf: 5, 13, 33 → first cf above 30 is 33.' },
      { topic: 'median', q: 'For the same table (5, 8, 20, 15, 7, 5), the median is…', options: ['28.5', '25', '30', '26.5'], answer: 0, explain: '20 + ((30 − 13)/20) × 10 = 28.5' },
      { topic: 'median', q: 'Heights of 51 girls: median class 145–150 with cf = 11 before it and f = 18. The median is about…', options: ['147.5 cm', '149.03 cm', '150 cm', '146.4 cm'], answer: 1, explain: '145 + (14.5/18) × 5 ≈ 149.03' },
      { topic: 'median', q: 'Median 28.5, n = 60: 0–10: 5, 10–20: x, 20–30: 20, 30–40: 15, 40–50: y, 50–60: 5. Then x is…', options: ['7', '8', '9', '10'], answer: 1, explain: '8.5 = (25 − x)/2 → x = 8' },
      { topic: 'median', q: '"Less than 20": 12 and "less than 30": 30. The frequency of 20–30 is…', options: ['12', '18', '30', '42'], answer: 1, explain: '30 − 12 = 18' },
      { topic: 'median', q: 'For grouped data, to find the median class we look at…', options: ['n/2', '(n + 1)/2', 'n', '2n'], answer: 0, explain: 'Use n/2 for grouped data.' },
      { topic: 'median', q: 'Electricity data: median class 125–145, cf = 22, f = 20, n = 68. The median is…', options: ['137', '135', '140', '132'], answer: 0, explain: '125 + ((34 − 22)/20) × 20 = 137' },

      { topic: 'emp', q: 'The empirical relation between mean, median and mode is…', options: ['3 Median = Mode + 2 Mean', '3 Mean = Mode + 2 Median', '2 Median = Mode + 3 Mean', 'Mode = Mean + Median'], answer: 0, explain: 'Mode = 3 Median − 2 Mean' },
      { topic: 'emp', q: 'If the median is 26 and the mean is 24, the mode is…', options: ['28', '30', '22', '25'], answer: 1, explain: '3 × 26 − 2 × 24 = 30' },
      { topic: 'emp', q: 'If the mode is 24 and the mean is 30, the median is…', options: ['27', '28', '26', '29'], answer: 1, explain: '(24 + 60)/3 = 28' },
      { topic: 'emp', q: 'If the mode is 45 and the median is 42, the mean is…', options: ['40.5', '43.5', '39', '41'], answer: 0, explain: '2 Mean = 3 × 42 − 45 = 81' },
      { topic: 'emp', q: 'Which measure is best when the data has a few extreme values (like salaries)?', options: ['Mean', 'Median', 'Mode', 'Range'], answer: 1, explain: 'The median is not pulled by extreme values.' },
      { topic: 'emp', q: 'A shoe shop wants to know which size to stock most. It should use the…', options: ['Mean', 'Median', 'Mode', 'Class mark'], answer: 2, explain: 'The mode is the most popular size.' },
      { topic: 'emp', q: 'Mean, median and mode are called measures of…', options: ['Dispersion', 'Central tendency', 'Probability', 'Frequency'], answer: 1, explain: 'Each gives one central value for the data.' },
      { topic: 'emp', q: 'In a perfectly symmetric distribution with one peak…', options: ['Mean > Median > Mode', 'Mean = Median = Mode', 'Mode > Mean', 'Median = 0'], answer: 1, explain: 'All three are at the centre.' }
    ],

    // Practice: each gen(mk) makes a new problem every time (see js/mathkit.js for mk).
    practice: [
      { topic: 'mean', gen(mk) {
        let t, f, n, S, m;
        for (;;) {
          t = makeTable(mk, mk.ri(5, 6)); f = freqs(mk, t.k);
          n = f.reduce((a, b) => a + b, 0); S = f.reduce((a, v, i) => a + v * mark(t, i), 0); m = S / n;
          if (exact2(m)) break;
        }
        const step = t.h >= 10 && Math.random() < 0.6;
        let steps;
        if (step) {
          const ai = Math.floor(t.k / 2), a = mark(t, ai), u = f.map((_, i) => i - ai), U = f.reduce((s, v, i) => s + v * u[i], 0);
          steps = `Step-deviation method: a = ${a}, h = ${t.h}\nClass | xᵢ | fᵢ | uᵢ | fᵢuᵢ\n` +
            f.map((v, i) => `${lab(t, i)} | ${dn(mk, mark(t, i))} | ${v} | ${mk.num(u[i])} | ${mk.num(v * u[i])}`).join('\n') +
            `\nΣfᵢ = ${n}, Σfᵢuᵢ = ${mk.num(U)}\nMean = a + (Σfᵢuᵢ/Σfᵢ) × h = ${a} + (${mk.num(U)}/${n}) × ${t.h}\n= ${a} ${U < 0 ? '−' : '+'} ${dn(mk, Math.abs(U * t.h / n))} = ${dn(mk, m)}`;
        } else {
          steps = `Direct method\nClass | xᵢ | fᵢ | fᵢxᵢ\n` +
            f.map((v, i) => `${lab(t, i)} | ${dn(mk, mark(t, i))} | ${v} | ${dn(mk, v * mark(t, i))}`).join('\n') +
            `\nΣfᵢ = ${n}, Σfᵢxᵢ = ${dn(mk, S)}\nMean = Σfᵢxᵢ/Σfᵢ = ${dn(mk, S)}/${n} = ${dn(mk, m)}`;
        }
        return {
          q: `Find the mean of this data:\n${show(t, f)}`,
          fields: [{ label: 'Mean =', answer: r2(m), show: dn(mk, m) }],
          hint: 'Find each class mark xᵢ = (lower + upper)/2. Then mean = Σfᵢxᵢ/Σfᵢ (or use the step-deviation method).',
          steps
        };
      } },
      { topic: 'mode', gen(mk) {
        let t, f, j, val, f0, f1, f2, den;
        for (;;) {
          t = makeTable(mk, mk.ri(5, 6)); f = freqs(mk, t.k, 2, 25); j = modalIdx(f);
          if (j < 1 || j > t.k - 2) continue;
          [f0, f1, f2] = [f[j - 1], f[j], f[j + 1]]; den = 2 * f1 - f0 - f2;
          val = t.lo[j] + (f1 - f0) / den * t.h;
          if (exact2(val)) break;
        }
        const l = t.lo[j], h = t.h;
        return {
          q: `Find the mode of this data:\n${show(t, f)}`,
          fields: [{ label: 'Mode =', answer: r2(val), show: dn(mk, val) }],
          hint: 'The modal class has the highest frequency. Mode = l + ((f1 − f0)/(2f1 − f0 − f2)) × h',
          steps: `Highest frequency = ${f1}, so the modal class is ${lab(t, j)}.\nl = ${l}, h = ${h}, f1 = ${f1}, f0 = ${f0}, f2 = ${f2}\n` +
            `Mode = l + ((f1 − f0)/(2f1 − f0 − f2)) × h\n= ${l} + ((${f1} − ${f0})/(${2 * f1} − ${f0} − ${f2})) × ${h}\n= ${l} + (${f1 - f0}/${den}) × ${h}\n= ${l} + ${dn(mk, (f1 - f0) * h / den)} = ${dn(mk, val)}`
        };
      } },
      { topic: 'median', gen(mk) {
        let t, f, j, val, cf, n;
        for (;;) {
          t = makeTable(mk, mk.ri(5, 6)); f = freqs(mk, t.k, 2, 25); j = medianIdx(f);
          if (j < 1) continue;
          cf = cum(f); n = cf[t.k - 1];
          val = t.lo[j] + (n / 2 - cf[j - 1]) / f[j] * t.h;
          if (exact2(val)) break;
        }
        const l = t.lo[j], cb = cf[j - 1];
        return {
          q: `Find the median of this data:\n${show(t, f)}`,
          fields: [{ label: 'Median =', answer: r2(val), show: dn(mk, val) }],
          hint: 'Find n/2 and the cumulative frequencies. The median class is the first class with cf greater than n/2. Median = l + ((n/2 − cf)/f) × h',
          steps: `n = ${n}, n/2 = ${dn(mk, n / 2)}\nClass | fᵢ | cf\n` + f.map((v, i) => `${lab(t, i)} | ${v} | ${cf[i]}`).join('\n') +
            `\nThe first cf greater than ${dn(mk, n / 2)} is ${cf[j]}, so the median class is ${lab(t, j)}.\nl = ${l}, cf = ${cb} (class before), f = ${f[j]}, h = ${t.h}\n` +
            `Median = l + ((n/2 − cf)/f) × h\n= ${l} + ((${dn(mk, n / 2)} − ${cb})/${f[j]}) × ${t.h}\n= ${l} + ${dn(mk, (n / 2 - cb) * t.h / f[j])} = ${dn(mk, val)}`
        };
      } },
      { topic: 'median', gen(mk) {
        const modal = Math.random() < 0.5;
        let t, f, j;
        do { t = makeTable(mk, mk.ri(5, 6)); f = freqs(mk, t.k, 2, 25); j = modal ? modalIdx(f) : medianIdx(f); } while (j < 0);
        const cf = cum(f), n = cf[t.k - 1];
        return {
          q: `Which is the ${modal ? 'modal' : 'median'} class of this data?\n${show(t, f)}`,
          choices: f.map((_, i) => lab(t, i)),
          answer: j,
          steps: modal ? `The modal class is the class with the highest frequency.\nHighest frequency = ${f[j]} → modal class ${lab(t, j)}`
            : `n = ${n}, n/2 = ${dn(mk, n / 2)}\ncf: ${cf.join(', ')}\nThe first cf greater than ${dn(mk, n / 2)} is ${cf[j]} → median class ${lab(t, j)}`
        };
      } },
      { topic: 'mean', gen(mk) {
        let t, f, i, n, S, m;
        for (;;) {
          t = makeTable(mk, mk.ri(5, 6)); f = freqs(mk, t.k, 3, 20); i = mk.ri(1, t.k - 2);
          n = f.reduce((a, b) => a + b, 0); S = f.reduce((a, v, k) => a + v * mark(t, k), 0); m = S / n;
          if (exact2(m) && Math.abs(mark(t, i) - m) > 1e-9) break;
        }
        const p = f[i], F = n - p, Sk = S - p * mark(t, i), xi = mark(t, i);
        const shown = f.map((v, k) => k === i ? 'p' : v);
        return {
          q: `The mean of this data is ${dn(mk, m)}. Find the missing frequency p.\n${show(t, shown)}`,
          fields: [{ label: 'p =', answer: p }],
          hint: 'Write Σfᵢ and Σfᵢxᵢ in terms of p, then use Mean × Σfᵢ = Σfᵢxᵢ.',
          steps: `Class | xᵢ | fᵢ | fᵢxᵢ\n` + f.map((v, k) => k === i ? `${lab(t, k)} | ${dn(mk, xi)} | p | ${dn(mk, xi)}p` : `${lab(t, k)} | ${dn(mk, mark(t, k))} | ${v} | ${dn(mk, v * mark(t, k))}`).join('\n') +
            `\nΣfᵢ = ${F} + p, Σfᵢxᵢ = ${dn(mk, Sk)} + ${dn(mk, xi)}p\n${dn(mk, m)}(${F} + p) = ${dn(mk, Sk)} + ${dn(mk, xi)}p\n${dn(mk, m * F)} + ${dn(mk, m)}p = ${dn(mk, Sk)} + ${dn(mk, xi)}p\n` +
            `${dn(mk, m * F - Sk)} = ${dn(mk, xi - m)}p\np = ${p}`
        };
      } },
      { topic: 'median', gen(mk) {
        let t, f, j, xi, yi, cf, n, val;
        for (;;) {
          t = makeTable(mk, mk.ri(6, 7)); f = freqs(mk, t.k, 3, 25); j = medianIdx(f);
          if (j < 2 || j > t.k - 2) continue;
          xi = mk.ri(1, j - 1); yi = mk.ri(j + 1, t.k - 1);
          cf = cum(f); n = cf[t.k - 1];
          val = t.lo[j] + (n / 2 - cf[j - 1]) / f[j] * t.h;
          if (exact2(val)) break;
        }
        const x = f[xi], y = f[yi], F = n - x - y, C = cf[j - 1] - x, l = t.lo[j], g = (val - l) * f[j] / t.h;
        const shown = f.map((v, k) => k === xi ? 'x' : k === yi ? 'y' : v);
        return {
          q: `The median of this data is ${dn(mk, val)} and the total frequency is ${n}. Find x and y.\n${show(t, shown)}`,
          fields: [{ label: 'x =', answer: x }, { label: 'y =', answer: y }],
          hint: `The median ${dn(mk, val)} lies in the class ${lab(t, j)}, so that is the median class. Its cf (class before) includes x.`,
          steps: `${F} + x + y = ${n} → x + y = ${n - F}\nMedian ${dn(mk, val)} lies in ${lab(t, j)}, so it is the median class.\nl = ${l}, f = ${f[j]}, h = ${t.h}, cf = ${C} + x, n/2 = ${dn(mk, n / 2)}\n` +
            `${dn(mk, val)} = ${l} + ((${dn(mk, n / 2)} − ${C} − x)/${f[j]}) × ${t.h}\n${dn(mk, val - l)} × ${f[j]}/${t.h} = ${dn(mk, n / 2 - C)} − x\n${dn(mk, g)} = ${dn(mk, n / 2 - C)} − x → x = ${x}\ny = ${n - F} − ${x} = ${y}`
        };
      } },
      { topic: 'emp', gen(mk) {
        const md = mk.ri(150, 800), mn = md + mk.ri(-40, 40), mo = 3 * md - 2 * mn; // in tenths
        const D = v => dn(mk, v / 10);
        const ask = mk.pick(['mode', 'median', 'mean']);
        const given = ask === 'mode' ? `the median is ${D(md)} and the mean is ${D(mn)}` : ask === 'median' ? `the mode is ${D(mo)} and the mean is ${D(mn)}` : `the mode is ${D(mo)} and the median is ${D(md)}`;
        const ans = ask === 'mode' ? mo : ask === 'median' ? md : mn;
        const steps = ask === 'mode' ? `Mode = 3 Median − 2 Mean = 3 × ${D(md)} − 2 × ${D(mn)} = ${D(3 * md)} − ${D(2 * mn)} = ${D(mo)}`
          : ask === 'median' ? `3 Median = Mode + 2 Mean = ${D(mo)} + ${D(2 * mn)} = ${D(3 * md)}\nMedian = ${D(3 * md)} ÷ 3 = ${D(md)}`
            : `2 Mean = 3 Median − Mode = ${D(3 * md)} − ${D(mo)} = ${D(2 * mn)}\nMean = ${D(2 * mn)} ÷ 2 = ${D(mn)}`;
        return {
          q: `For a distribution, ${given}. Use the empirical relation to find the ${ask}.`,
          fields: [{ label: `${ask[0].toUpperCase() + ask.slice(1)} =`, answer: r2(ans / 10), show: D(ans), signed: true }],
          hint: '3 Median = Mode + 2 Mean',
          steps
        };
      } },
      { topic: 'mean', gen(mk) {
        const t = makeTable(mk, mk.ri(5, 6)), f = freqs(mk, t.k), cf = cum(f), n = cf[t.k - 1];
        const i = mk.ri(0, t.k - 1), j = mk.ri(1, t.k - 2);
        return {
          q: `For this data, find n (the total frequency), the class mark of ${lab(t, i)}, and the cumulative frequency of ${lab(t, j)}.\n${show(t, f)}`,
          fields: [{ label: 'n =', answer: n }, { label: `Class mark of ${lab(t, i)} =`, answer: mark(t, i), show: dn(mk, mark(t, i)) },
            { label: `cf of ${lab(t, j)} =`, answer: cf[j] }],
          hint: 'n = add all frequencies. Class mark = (lower + upper)/2. cf = add frequencies up to and including that class.',
          steps: `n = ${f.join(' + ')} = ${n}\nClass mark of ${lab(t, i)} = (${t.lo[i]} + ${t.lo[i] + t.h})/2 = ${dn(mk, mark(t, i))}\ncf of ${lab(t, j)} = ${f.slice(0, j + 1).join(' + ')} = ${cf[j]}`
        };
      } }
    ],

    match: [
      { title: 'Symbols', pairs: [
        ['xᵢ', 'Class mark'],
        ['fᵢ', 'Frequency'],
        ['a', 'Assumed mean'],
        ['h', 'Class width'],
        ['uᵢ', '(xᵢ − a)/h'],
        ['dᵢ', 'xᵢ − a']
      ] },
      { title: 'Formulas', pairs: [
        ['Mean (direct)', 'Σfᵢxᵢ / Σfᵢ'],
        ['Mean (step-deviation)', 'a + (Σfᵢuᵢ / Σfᵢ) × h'],
        ['Mode', 'l + ((f1 − f0)/(2f1 − f0 − f2)) × h'],
        ['Median', 'l + ((n/2 − cf)/f) × h'],
        ['Empirical relation', '3 Median = Mode + 2 Mean'],
        ['Class mark', '(upper limit + lower limit)/2']
      ] },
      { title: 'In the Formula…', pairs: [
        ['f1 (mode)', 'Frequency of the modal class'],
        ['f0 (mode)', 'Frequency of the class before the modal class'],
        ['f2 (mode)', 'Frequency of the class after the modal class'],
        ['cf (median)', 'Cumulative frequency of the class before the median class'],
        ['f (median)', 'Frequency of the median class'],
        ['n (median)', 'Total of all frequencies']
      ] },
      { title: 'Question → Answer', pairs: [
        ['Class mark of 10–25', '17.5'],
        ['Mean marks of 30 students (10–25 … 85–100)', '62'],
        ['Mode of family size (1–3 … 9–11)', '≈ 3.286'],
        ['Median height of 51 girls', '≈ 149.03 cm'],
        ['Mode when median = 26, mean = 24', '30'],
        ['Mean daily wage of 50 workers', '₹545.20']
      ] }
    ],

    balance: [],

    // Each key point has keyword groups: all groups must appear in the answer
    // ("a|b" means a OR b) for the point to be auto-ticked.
    written: [
      { marks: 2, q: 'Find the mean daily wage:\nDaily wages (₹): 500–520, 520–540, 540–560, 560–580, 580–600\nNumber of workers: 12, 14, 8, 6, 10',
        keypoints: [
          { text: 'Class marks 510, 530, 550, 570, 590; Σfᵢxᵢ = 27260', kw: ['27260'] },
          { text: 'Mean = 27260/50 = ₹545.20', kw: ['545.2'] }
        ],
        model: 'xᵢ: 510, 530, 550, 570, 590\nfᵢxᵢ: 6120, 7420, 4400, 3420, 5900\nΣfᵢ = 50, Σfᵢxᵢ = 27260\nMean = 27260/50 = ₹545.20' },
      { marks: 2, q: 'Find the mode:\nFamily size: 1–3, 3–5, 5–7, 7–9, 9–11\nNumber of families: 7, 8, 2, 2, 1',
        keypoints: [
          { text: 'Modal class 3–5: l = 3, f1 = 8, f0 = 7, f2 = 2, h = 2', kw: ['3–5|3-5'] },
          { text: 'Mode = 3 + (1/7) × 2 ≈ 3.286', kw: ['3.28|3.29'] }
        ],
        model: 'Modal class = 3–5 (highest frequency 8)\nl = 3, h = 2, f1 = 8, f0 = 7, f2 = 2\nMode = 3 + ((8 − 7)/(16 − 7 − 2)) × 2 = 3 + 2/7 ≈ 3.286' },
      { marks: 2, q: 'Find the median:\nMarks: 0–10, 10–20, 20–30, 30–40, 40–50, 50–60\nNumber of students: 5, 8, 20, 15, 7, 5',
        keypoints: [
          { text: 'n = 60, n/2 = 30; median class 20–30 (cf 33)', kw: ['30', '20–30|20-30'] },
          { text: 'Median = 20 + ((30 − 13)/20) × 10 = 28.5', kw: ['28.5'] }
        ],
        model: 'cf: 5, 13, 33, 48, 55, 60; n = 60, n/2 = 30\nMedian class 20–30: l = 20, cf = 13, f = 20, h = 10\nMedian = 20 + ((30 − 13)/20) × 10 = 20 + 8.5 = 28.5' },
      { marks: 2, q: 'The mode of a distribution is 24 and its mean is 30. Find its median using the empirical relation.',
        keypoints: [
          { text: '3 Median = Mode + 2 Mean', kw: ['3'] },
          { text: '3 Median = 24 + 60 = 84, Median = 28', kw: ['28'] }
        ],
        model: '3 Median = Mode + 2 Mean = 24 + 2 × 30 = 84\nMedian = 84 ÷ 3 = 28' },
      { marks: 2, q: 'A company has 9 workers earning ₹15000 each and a manager earning ₹3,00,000. Which is a better "typical" salary: the mean or the median? Why?',
        keypoints: [
          { text: 'Median', kw: ['median'] },
          { text: 'The mean is pulled up by one extreme value', kw: ['extreme|large|manager|pulled'] }
        ],
        model: 'The median (₹15000) is better. The mean = (135000 + 300000)/10 = ₹43500, which is pulled up by one extreme value (the manager) and does not show what most workers earn.' },
      { marks: 3, q: 'Find the mean marks:\nMarks: 10–25, 25–40, 40–55, 55–70, 70–85, 85–100\nNumber of students: 2, 3, 7, 6, 6, 6',
        keypoints: [
          { text: 'Class marks 17.5, 32.5, 47.5, 62.5, 77.5, 92.5', kw: ['17.5', '92.5'] },
          { text: 'Σfᵢxᵢ = 1860, Σfᵢ = 30', kw: ['1860'] },
          { text: 'Mean = 62', kw: ['62'] }
        ],
        model: 'xᵢ: 17.5, 32.5, 47.5, 62.5, 77.5, 92.5\nfᵢxᵢ: 35, 97.5, 332.5, 375, 465, 555\nΣfᵢ = 30, Σfᵢxᵢ = 1860\nMean = 1860/30 = 62' },
      { marks: 3, q: 'The mean pocket allowance is ₹18. Find the missing frequency f:\nAllowance (₹): 11–13, 13–15, 15–17, 17–19, 19–21, 21–23, 23–25\nNumber of children: 7, 6, 9, 13, f, 5, 4',
        keypoints: [
          { text: 'Σfᵢ = 44 + f', kw: ['44'] },
          { text: 'Σfᵢxᵢ = 752 + 20f', kw: ['752'] },
          { text: '18(44 + f) = 752 + 20f → f = 20', kw: ['20'] }
        ],
        model: 'xᵢ: 12, 14, 16, 18, 20, 22, 24\nfᵢxᵢ: 84, 84, 144, 234, 20f, 110, 96\nΣfᵢ = 44 + f, Σfᵢxᵢ = 752 + 20f\n18(44 + f) = 752 + 20f\n792 + 18f = 752 + 20f\n2f = 40 → f = 20' },
      { marks: 3, q: 'Find the modal lifetime of the components:\nLifetime (hours): 0–20, 20–40, 40–60, 60–80, 80–100, 100–120\nFrequency: 10, 35, 52, 61, 38, 29',
        keypoints: [
          { text: 'Modal class 60–80', kw: ['60–80|60-80'] },
          { text: 'f1 = 61, f0 = 52, f2 = 38, h = 20', kw: ['61', '52', '38'] },
          { text: 'Mode = 60 + (9/32) × 20 = 65.625 hours', kw: ['65.6'] }
        ],
        model: 'Modal class = 60–80 (highest frequency 61)\nl = 60, h = 20, f1 = 61, f0 = 52, f2 = 38\nMode = 60 + ((61 − 52)/(122 − 52 − 38)) × 20 = 60 + (9/32) × 20 = 60 + 5.625 = 65.625 hours' },
      { marks: 3, q: 'Find the median height of 51 girls:\nHeight (cm): below 140, 140–145, 145–150, 150–155, 155–160, 160–165\nNumber of girls: 4, 7, 18, 11, 6, 5',
        keypoints: [
          { text: 'n/2 = 25.5; cf: 4, 11, 29, …', kw: ['25.5'] },
          { text: 'Median class 145–150: l = 145, cf = 11, f = 18, h = 5', kw: ['145'] },
          { text: 'Median ≈ 149.03 cm', kw: ['149'] }
        ],
        model: 'cf: 4, 11, 29, 40, 46, 51; n = 51, n/2 = 25.5\nMedian class = 145–150\nl = 145, cf = 11, f = 18, h = 5\nMedian = 145 + ((25.5 − 11)/18) × 5 = 145 + 72.5/18 ≈ 149.03 cm' },
      { marks: 3, q: 'The median of this distribution of 60 observations is 28.5. Find x and y.\nClass: 0–10, 10–20, 20–30, 30–40, 40–50, 50–60\nFrequency: 5, x, 20, 15, y, 5',
        keypoints: [
          { text: '45 + x + y = 60 → x + y = 15', kw: ['15'] },
          { text: '28.5 = 20 + ((30 − 5 − x)/20) × 10', kw: ['28.5'] },
          { text: 'x = 8, y = 7', kw: ['8', '7'] }
        ],
        model: '5 + x + 20 + 15 + y + 5 = 60 → x + y = 15\nMedian 28.5 lies in 20–30: l = 20, cf = 5 + x, f = 20, h = 10\n28.5 = 20 + ((30 − 5 − x)/20) × 10\n8.5 = (25 − x)/2 → 25 − x = 17 → x = 8\ny = 15 − 8 = 7' },
      { marks: 3, q: 'Find the mean daily expense using the step-deviation method:\nDaily expense (₹): 100–150, 150–200, 200–250, 250–300, 300–350\nNumber of households: 4, 5, 12, 2, 2',
        keypoints: [
          { text: 'a = 225, h = 50, uᵢ: −2, −1, 0, 1, 2', kw: ['225', '50'] },
          { text: 'Σfᵢuᵢ = −7, Σfᵢ = 25', kw: ['7', '25'] },
          { text: 'Mean = 225 − 14 = ₹211', kw: ['211'] }
        ],
        model: 'a = 225, h = 50\nuᵢ: −2, −1, 0, 1, 2\nfᵢuᵢ: −8, −5, 0, 2, 4\nΣfᵢ = 25, Σfᵢuᵢ = −7\nMean = 225 + (−7/25) × 50 = 225 − 14 = ₹211' },
      { marks: 3, q: 'Find the mode of the marks:\nMarks: 0–10, 10–20, 20–30, 30–40, 40–50\nNumber of students: 5, 8, 12, 7, 3',
        keypoints: [
          { text: 'Modal class 20–30', kw: ['20–30|20-30'] },
          { text: 'f1 = 12, f0 = 8, f2 = 7', kw: ['12', '8', '7'] },
          { text: 'Mode = 20 + (4/9) × 10 ≈ 24.44', kw: ['24.4'] }
        ],
        model: 'Modal class = 20–30\nl = 20, h = 10, f1 = 12, f0 = 8, f2 = 7\nMode = 20 + ((12 − 8)/(24 − 8 − 7)) × 10 = 20 + 40/9 ≈ 24.44' },
      { marks: 3, q: 'Find the mean electricity consumption (step-deviation):\nUnits: 65–85, 85–105, 105–125, 125–145, 145–165, 165–185, 185–205\nNumber of consumers: 4, 5, 13, 20, 14, 8, 4',
        keypoints: [
          { text: 'a = 135, h = 20, uᵢ: −3 to 3', kw: ['135'] },
          { text: 'Σfᵢuᵢ = 7, Σfᵢ = 68', kw: ['68'] },
          { text: 'Mean = 135 + (7/68) × 20 ≈ 137.06', kw: ['137.0'] }
        ],
        model: 'a = 135, h = 20\nuᵢ: −3, −2, −1, 0, 1, 2, 3\nfᵢuᵢ: −12, −10, −13, 0, 14, 16, 12\nΣfᵢ = 68, Σfᵢuᵢ = 7\nMean = 135 + (7/68) × 20 ≈ 135 + 2.06 = 137.06\n(Direct method: Σfᵢxᵢ = 9320, 9320/68 ≈ 137.06)' },
      { marks: 5, q: 'For this data find the median, the mean and the mode, and compare them:\nUnits: 65–85, 85–105, 105–125, 125–145, 145–165, 165–185, 185–205\nNumber of consumers: 4, 5, 13, 20, 14, 8, 4',
        keypoints: [
          { text: 'n = 68, n/2 = 34, median class 125–145, cf = 22', kw: ['34', '22'] },
          { text: 'Median = 125 + (12/20) × 20 = 137', kw: ['137'] },
          { text: 'Mean = 9320/68 ≈ 137.06', kw: ['9320|137.0'] },
          { text: 'Mode = 125 + (7/13) × 20 ≈ 135.77', kw: ['135.7'] },
          { text: 'All three are close to each other (about 136–137 units)', kw: ['close|same|approximately|nearly'] }
        ],
        model: 'cf: 4, 9, 22, 42, 56, 64, 68; n = 68, n/2 = 34\nMedian class 125–145: l = 125, cf = 22, f = 20, h = 20\nMedian = 125 + ((34 − 22)/20) × 20 = 137\nxᵢ: 75, 95, 115, 135, 155, 175, 195\nΣfᵢxᵢ = 300 + 475 + 1495 + 2700 + 2170 + 1400 + 780 = 9320\nMean = 9320/68 ≈ 137.06\nModal class 125–145: f1 = 20, f0 = 13, f2 = 14\nMode = 125 + ((20 − 13)/(40 − 13 − 14)) × 20 = 125 + 140/13 ≈ 135.77\nThe three values are very close: about 136–137 units.' },
      { marks: 5, q: 'The median of this distribution of 100 observations is 525. Find x and y.\nClass: 0–100, 100–200, 200–300, 300–400, 400–500, 500–600, 600–700, 700–800, 800–900, 900–1000\nFrequency: 2, 5, x, 12, 17, 20, y, 9, 7, 4',
        keypoints: [
          { text: '76 + x + y = 100 → x + y = 24', kw: ['24'] },
          { text: 'Median class 500–600: cf = 36 + x, f = 20, h = 100', kw: ['36'] },
          { text: '525 = 500 + ((50 − 36 − x)/20) × 100', kw: ['525'] },
          { text: 'x = 9, y = 15', kw: ['9', '15'] }
        ],
        model: 'Σf = 76 + x + y = 100 → x + y = 24\nMedian 525 lies in 500–600: l = 500, h = 100, f = 20, cf = 2 + 5 + x + 12 + 17 = 36 + x\n525 = 500 + ((50 − 36 − x)/20) × 100\n25 = (14 − x) × 5 → 14 − x = 5 → x = 9\ny = 24 − 9 = 15' },
      { marks: 5, q: 'Find the mean and the mode of the ages of patients, and say what each tells you:\nAge (years): 5–15, 15–25, 25–35, 35–45, 45–55, 55–65\nNumber of patients: 6, 11, 21, 23, 14, 5',
        keypoints: [
          { text: 'Σfᵢ = 80, Σfᵢxᵢ = 2830', kw: ['2830'] },
          { text: 'Mean = 35.375 ≈ 35.37 years', kw: ['35.3|35.4'] },
          { text: 'Modal class 35–45: f1 = 23, f0 = 21, f2 = 14', kw: ['23', '21', '14'] },
          { text: 'Mode = 35 + 20/11 ≈ 36.8 years', kw: ['36.8'] },
          { text: 'Most patients are about 36.8; the average age is about 35.4', kw: ['most|maximum|largest'] }
        ],
        model: 'xᵢ: 10, 20, 30, 40, 50, 60\nfᵢxᵢ: 60, 220, 630, 920, 700, 300\nΣfᵢ = 80, Σfᵢxᵢ = 2830\nMean = 2830/80 = 35.375 ≈ 35.37 years\nModal class 35–45: l = 35, h = 10, f1 = 23, f0 = 21, f2 = 14\nMode = 35 + ((23 − 21)/(46 − 21 − 14)) × 10 = 35 + 20/11 ≈ 36.8 years\nThe largest number of patients are about 36.8 years old, while the average age of a patient is about 35.37 years.' }
    ]
  });
})();
