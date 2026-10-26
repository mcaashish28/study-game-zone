// Punjabi — Basic level (10 chapters): first words, vowel signs, the alphabet, then core vocabulary.
// For a beginner who cannot read Gurmukhi yet.
// Every Punjabi word gets a 🔊 button automatically. Write each answer as:
// how it sounds (English letters) — meaning.
// Sound spelling: aa as in "car", ee as in "see", oo as in "food", ai as in "bat", au as in "saw".
SWG.addChapter('punjabi', {
  id: 'pa-ch00', // kept from the demo so her saved progress stays
  level: 'Basic',
  number: 1,
  title: 'First Steps · ਪਹਿਲੇ ਕਦਮ',
  icon: '👋',

  topics: {
    sound: 'Vowel Signs',
    greet: 'Greetings',
    family: 'Family',
    num: 'Numbers',
    colour: 'Colours',
    body: 'Body',
    things: 'Everyday Things',
    sent: 'Sentences'
  },

  summary: [
    'Tap 🔊 to hear any Punjabi word. Tap 🐢 to hear it slowly. In Match Up, tapping a Punjabi tile says it aloud.',
    'Punjabi is written in Gurmukhi script, left to right. Letters hang from a line along the top, and there are no capital letters.',
    'Each letter has a built-in "a" sound: ਕ = ka. Small signs (ਾ ਿ ੀ ੁ ੂ ੇ ੈ ੋ ੌ) change that vowel: ਕਾ kaa, ਕੀ kee, ਕੂ koo.',
    'ੰ (tippi) and ਂ (bindi) add a soft "n" through the nose: ਮਾਂ = maan.',
    'ੱ (addak) makes the next sound double and strong: ਅੱਖ = akkh.',
    'How the sounds are spelt here: aa as in "car", ee as in "see", oo as in "food", ai as in "bat", au as in "saw". An "h" after a letter (bh, dh, kh) means a puff of air.',
    'Learn the vowel signs first: once you know them, you can sound out almost any word.'
  ],

  flashcards: [
    // vowel signs on ਕ (ka)
    { topic: 'sound', front: 'ਕ', back: 'ka\nNo sign = short "a" sound.\nThis letter is called kakkaa.' },
    { topic: 'sound', front: 'ਕਾ', back: 'kaa\nSign ਾ (kannaa) = long "aa" as in "car".\nWord: ਕਾਲਾ (kaa-laa) — black' },
    { topic: 'sound', front: 'ਕਿ', back: 'ki\nSign ਿ (sihaaree) = short "i" as in "sit". It is written BEFORE the letter but said after it.\nWord: ਕਿਤਾਬ (ki-taab) — book' },
    { topic: 'sound', front: 'ਕੀ', back: 'kee\nSign ੀ (bihaaree) = long "ee" as in "see".\nWord: ਕੀ (kee) — what' },
    { topic: 'sound', front: 'ਕੁ', back: 'ku\nSign ੁ (aunkar) = short "u" as in "put".\nWord: ਕੁੜੀ (ku-ree) — girl' },
    { topic: 'sound', front: 'ਕੂ', back: 'koo\nSign ੂ (dulainkar) = long "oo" as in "food".\nWord: ਸਕੂਲ (sa-kool) — school' },
    { topic: 'sound', front: 'ਕੇ', back: 'ke\nSign ੇ (laavaan) = "e" as in "cafe".\nWord: ਕੇਲਾ (ke-laa) — banana' },
    { topic: 'sound', front: 'ਕੈ', back: 'kai\nSign ੈ (dulaavaan) = "ai" as in "bat".\nWord: ਭੈਣ (bhain) — sister' },
    { topic: 'sound', front: 'ਕੋ', back: 'ko\nSign ੋ (horaa) = "o" as in "go".\nWord: ਦੋ (do) — two' },
    { topic: 'sound', front: 'ਕੌ', back: 'kau\nSign ੌ (kanauraa) = "au" as in "saw".\nWord: ਨੌਂ (naun) — nine' },
    { topic: 'sound', front: 'ਕੰ', back: 'kan\nSign ੰ (tippee) adds a soft "n" through the nose. ਂ (bindee) does the same.\nWord: ਕੰਨ (kann) — ear' },
    { topic: 'sound', front: 'ਕੱ', back: 'The sign ੱ (addak) makes the NEXT sound double and strong.\nWord: ਅੱਖ (akkh) — eye\nWord: ਸੱਤ (satt) — seven' },
    // greetings
    { topic: 'greet', front: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', back: 'sat sree a-kaal — Hello / Goodbye\n(the common Punjabi greeting)' },
    { topic: 'greet', front: 'ਧੰਨਵਾਦ', back: 'dhan-vaad — Thank you' },
    { topic: 'greet', front: 'ਹਾਂ', back: 'haan — Yes' },
    { topic: 'greet', front: 'ਨਹੀਂ', back: 'na-heen — No' },
    { topic: 'greet', front: 'ਕੀ ਹਾਲ ਹੈ?', back: 'kee haal hai? — How are you?' },
    { topic: 'greet', front: 'ਮੈਂ ਠੀਕ ਹਾਂ', back: 'main theek haan — I am fine' },
    { topic: 'greet', front: 'ਜੀ ਆਇਆਂ ਨੂੰ', back: 'jee aa-i-aan noon — Welcome' },
    { topic: 'greet', front: 'ਮਾਫ਼ ਕਰਨਾ', back: 'maaf kar-naa — Sorry / Excuse me' },
    { topic: 'greet', front: 'ਫਿਰ ਮਿਲਾਂਗੇ', back: 'phir mi-laan-ge — See you again' },
    // family
    { topic: 'family', front: 'ਮਾਂ', back: 'maan — mother' },
    { topic: 'family', front: 'ਪਿਤਾ', back: 'pi-taa — father\n(ਪਿਤਾ ਜੀ, pi-taa jee, is the respectful way)' },
    { topic: 'family', front: 'ਭਰਾ', back: 'bha-raa — brother' },
    { topic: 'family', front: 'ਭੈਣ', back: 'bhain — sister' },
    { topic: 'family', front: 'ਦਾਦਾ', back: 'daa-daa — grandfather (father\'s father)' },
    { topic: 'family', front: 'ਦਾਦੀ', back: 'daa-dee — grandmother (father\'s mother)' },
    { topic: 'family', front: 'ਨਾਨਾ', back: 'naa-naa — grandfather (mother\'s father)' },
    { topic: 'family', front: 'ਨਾਨੀ', back: 'naa-nee — grandmother (mother\'s mother)' },
    { topic: 'family', front: 'ਪਰਿਵਾਰ', back: 'pa-ri-vaar — family' },
    // numbers
    { topic: 'num', front: 'ਇੱਕ', back: 'ikk — one (1)\nPunjabi numeral: ੧' },
    { topic: 'num', front: 'ਦੋ', back: 'do — two (2)\nPunjabi numeral: ੨' },
    { topic: 'num', front: 'ਤਿੰਨ', back: 'tinn — three (3)\nPunjabi numeral: ੩' },
    { topic: 'num', front: 'ਚਾਰ', back: 'chaar — four (4)\nPunjabi numeral: ੪' },
    { topic: 'num', front: 'ਪੰਜ', back: 'panj — five (5)\nPunjabi numeral: ੫\n(Punjab = land of five rivers!)' },
    { topic: 'num', front: 'ਛੇ', back: 'chhe — six (6)\nPunjabi numeral: ੬' },
    { topic: 'num', front: 'ਸੱਤ', back: 'satt — seven (7)\nPunjabi numeral: ੭' },
    { topic: 'num', front: 'ਅੱਠ', back: 'atth — eight (8)\nPunjabi numeral: ੮' },
    { topic: 'num', front: 'ਨੌਂ', back: 'naun — nine (9)\nPunjabi numeral: ੯' },
    { topic: 'num', front: 'ਦਸ', back: 'das — ten (10)\nPunjabi numeral: ੧੦' },
    // colours
    { topic: 'colour', front: 'ਲਾਲ', back: 'laal — red' },
    { topic: 'colour', front: 'ਨੀਲਾ', back: 'nee-laa — blue' },
    { topic: 'colour', front: 'ਹਰਾ', back: 'ha-raa — green' },
    { topic: 'colour', front: 'ਪੀਲਾ', back: 'pee-laa — yellow' },
    { topic: 'colour', front: 'ਚਿੱਟਾ', back: 'chit-taa — white' },
    { topic: 'colour', front: 'ਕਾਲਾ', back: 'kaa-laa — black' },
    // body
    { topic: 'body', front: 'ਸਿਰ', back: 'sir — head' },
    { topic: 'body', front: 'ਅੱਖ', back: 'akkh — eye' },
    { topic: 'body', front: 'ਕੰਨ', back: 'kann — ear' },
    { topic: 'body', front: 'ਨੱਕ', back: 'nakk — nose' },
    { topic: 'body', front: 'ਮੂੰਹ', back: 'moonh — mouth / face' },
    { topic: 'body', front: 'ਹੱਥ', back: 'hatth — hand' },
    { topic: 'body', front: 'ਪੈਰ', back: 'pair — foot' },
    // everyday things
    { topic: 'things', front: 'ਪਾਣੀ', back: 'paa-nee — water' },
    { topic: 'things', front: 'ਦੁੱਧ', back: 'duddh — milk' },
    { topic: 'things', front: 'ਰੋਟੀ', back: 'ro-tee — roti / bread' },
    { topic: 'things', front: 'ਫਲ', back: 'phal — fruit' },
    { topic: 'things', front: 'ਘਰ', back: 'ghar — house / home' },
    { topic: 'things', front: 'ਸਕੂਲ', back: 'sa-kool — school' },
    { topic: 'things', front: 'ਕਿਤਾਬ', back: 'ki-taab — book' },
    { topic: 'things', front: 'ਕਲਮ', back: 'ka-lam — pen' },
    { topic: 'things', front: 'ਦੋਸਤ', back: 'dost — friend' },
    { topic: 'things', front: 'ਅਧਿਆਪਕ', back: 'a-dhi-aa-pak — teacher' },
    // sentences
    { topic: 'sent', front: 'ਮੇਰਾ ਨਾਮ ਪ੍ਰੀਤ ਹੈ।', back: 'me-raa naam Preet hai — My name is Preet.\n(। is the Punjabi full stop)' },
    { topic: 'sent', front: 'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?', back: 'tu-haa-daa naam kee hai? — What is your name?' },
    { topic: 'sent', front: 'ਮੈਂ ਸਕੂਲ ਜਾਂਦੀ ਹਾਂ।', back: 'main sa-kool jaan-dee haan — I go to school.\n(a girl says ਜਾਂਦੀ jaan-dee; a boy says ਜਾਂਦਾ jaan-daa)' },
    { topic: 'sent', front: 'ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ।', back: 'ih me-ree ki-taab hai — This is my book.' },
    { topic: 'sent', front: 'ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ।', back: 'mai-noon paa-nee chaa-hee-daa hai — I need water.' },
    { topic: 'sent', front: 'ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖ ਰਹੀ ਹਾਂ।', back: 'main pan-jaa-bee sikkh ra-hee haan — I am learning Punjabi.' },
    { topic: 'sent', front: 'ਅੱਜ ਮੌਸਮ ਚੰਗਾ ਹੈ।', back: 'ajj mau-sam chan-gaa hai — The weather is nice today.' }
  ],

  quiz: [
    { topic: 'sound', q: 'How do you say ਕਾ?', options: ['ka', 'kaa', 'kee', 'koo'], answer: 1, explain: 'ਾ (kannaa) makes a long "aa".' },
    { topic: 'sound', q: 'How do you say ਕੀ?', options: ['ki', 'ke', 'kee', 'kai'], answer: 2, explain: 'ੀ (bihaaree) makes a long "ee".' },
    { topic: 'sound', q: 'How do you say ਕੂ?', options: ['koo', 'ku', 'ko', 'kau'], answer: 0, explain: 'ੂ (dulainkar) makes a long "oo".' },
    { topic: 'sound', q: 'How do you say ਕੋ?', options: ['kau', 'ku', 'ko', 'ke'], answer: 2, explain: 'ੋ (horaa) makes "o" as in "go".' },
    { topic: 'sound', q: 'How do you say ਕੈ?', options: ['ke', 'kai', 'kee', 'ki'], answer: 1, explain: 'ੈ (dulaavaan) makes "ai" as in "bat".' },
    { topic: 'sound', q: 'In ਕਿ, the sign ਿ is written before ਕ. When do you say it?', options: ['Before the letter', 'After the letter', 'It is silent', 'Twice'], answer: 1, explain: 'ਕਿ = ki. Sihaaree is written first but said after the letter.' },
    { topic: 'sound', q: 'What does ੱ (addak) do in ਸੱਤ?', options: ['Makes the next sound double and strong', 'Adds an "n" sound', 'Makes a long "aa"', 'Nothing'], answer: 0, explain: 'ਸੱਤ = satt — the "t" is doubled.' },
    { topic: 'sound', q: 'Which sign adds a soft "n" sound, like in ਮਾਂ?', options: ['ਾ', 'ਂ', 'ੁ', 'ੇ'], answer: 1, explain: 'ਂ (bindee) and ੰ (tippee) add a nasal "n".' },
    { topic: 'greet', q: 'What does ਸਤ ਸ੍ਰੀ ਅਕਾਲ mean?', options: ['Thank you', 'Hello / Goodbye', 'Sorry', 'Welcome'], answer: 1, explain: 'sat sree a-kaal is the common Punjabi greeting.' },
    { topic: 'greet', q: 'What does ਧੰਨਵਾਦ mean?', options: ['Yes', 'Thank you', 'No', 'See you again'], answer: 1, explain: 'dhan-vaad = thank you.' },
    { topic: 'greet', q: 'Which word means "No"?', options: ['ਹਾਂ', 'ਨਹੀਂ', 'ਕੀ', 'ਮਾਂ'], answer: 1, explain: 'ਨਹੀਂ (na-heen) = no. ਹਾਂ (haan) = yes.' },
    { topic: 'greet', q: 'Someone asks ਕੀ ਹਾਲ ਹੈ? What is a good reply?', options: ['ਮੈਂ ਠੀਕ ਹਾਂ', 'ਦੁੱਧ', 'ਪੰਜ', 'ਲਾਲ'], answer: 0, explain: 'kee haal hai? = how are you? → main theek haan = I am fine.' },
    { topic: 'family', q: 'What does ਭੈਣ mean?', options: ['Brother', 'Mother', 'Sister', 'Friend'], answer: 2, explain: 'bhain = sister. ਭਰਾ (bha-raa) = brother.' },
    { topic: 'family', q: 'Which word means "mother"?', options: ['ਮਾਂ', 'ਦਾਦੀ', 'ਭੈਣ', 'ਨਾਨੀ'], answer: 0, explain: 'ਮਾਂ = maan = mother.' },
    { topic: 'family', q: 'ਨਾਨੀ is your…', options: ['Father\'s mother', 'Mother\'s mother', 'Sister', 'Aunt'], answer: 1, explain: 'ਨਾਨੀ (naa-nee) = mother\'s mother. ਦਾਦੀ (daa-dee) = father\'s mother.' },
    { topic: 'family', q: 'What does ਪਰਿਵਾਰ mean?', options: ['School', 'Family', 'Friend', 'House'], answer: 1, explain: 'pa-ri-vaar = family.' },
    { topic: 'num', q: 'ਪੰਜ is the number…', options: ['3', '4', '5', '7'], answer: 2, explain: 'panj = 5 (Punjab = land of five rivers).' },
    { topic: 'num', q: 'Which word means "ten"?', options: ['ਦੋ', 'ਦਸ', 'ਛੇ', 'ਅੱਠ'], answer: 1, explain: 'ਦਸ (das) = 10. ਦੋ (do) = 2.' },
    { topic: 'num', q: 'ਤਿੰਨ is the number…', options: ['1', '3', '6', '9'], answer: 1, explain: 'tinn = 3.' },
    { topic: 'num', q: 'The Punjabi numeral ੭ is…', options: ['1', '4', '7', '9'], answer: 2, explain: '੭ = 7 = ਸੱਤ (satt).' },
    { topic: 'colour', q: 'What colour is ਲਾਲ?', options: ['Blue', 'Red', 'Yellow', 'Black'], answer: 1, explain: 'laal = red.' },
    { topic: 'colour', q: 'Which word means "green"?', options: ['ਹਰਾ', 'ਨੀਲਾ', 'ਪੀਲਾ', 'ਚਿੱਟਾ'], answer: 0, explain: 'ਹਰਾ (ha-raa) = green.' },
    { topic: 'colour', q: 'What does ਚਿੱਟਾ mean?', options: ['Black', 'White', 'Red', 'Blue'], answer: 1, explain: 'chit-taa = white. ਕਾਲਾ (kaa-laa) = black.' },
    { topic: 'body', q: 'What does ਹੱਥ mean?', options: ['Head', 'Hand', 'Foot', 'Eye'], answer: 1, explain: 'hatth = hand.' },
    { topic: 'body', q: 'Which word means "eye"?', options: ['ਕੰਨ', 'ਨੱਕ', 'ਅੱਖ', 'ਸਿਰ'], answer: 2, explain: 'ਅੱਖ (akkh) = eye.' },
    { topic: 'things', q: 'What does ਪਾਣੀ mean?', options: ['Milk', 'Water', 'Fruit', 'Bread'], answer: 1, explain: 'paa-nee = water. ਦੁੱਧ (duddh) = milk.' },
    { topic: 'things', q: 'Which word means "book"?', options: ['ਕਲਮ', 'ਕਿਤਾਬ', 'ਸਕੂਲ', 'ਘਰ'], answer: 1, explain: 'ਕਿਤਾਬ (ki-taab) = book.' },
    { topic: 'things', q: 'What does ਦੋਸਤ mean?', options: ['Teacher', 'Friend', 'Brother', 'Family'], answer: 1, explain: 'dost = friend.' },
    { topic: 'sent', q: 'What does ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ? mean?', options: ['How are you?', 'What is your name?', 'Where is school?', 'Thank you'], answer: 1, explain: 'tu-haa-daa naam kee hai? = what is your name?' },
    { topic: 'sent', q: 'What does ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ। mean?', options: ['I like milk.', 'I need water.', 'This is my book.', 'I go to school.'], answer: 1, explain: 'mai-noon paa-nee chaa-hee-daa hai = I need water.' },
    { topic: 'sent', q: 'A girl says "I go to school". Which is correct?', options: ['ਮੈਂ ਸਕੂਲ ਜਾਂਦੀ ਹਾਂ।', 'ਮੈਂ ਸਕੂਲ ਜਾਂਦਾ ਹਾਂ।', 'ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ।', 'ਮੈਂ ਠੀਕ ਹਾਂ।'], answer: 0, explain: 'A girl says ਜਾਂਦੀ (jaan-dee); a boy says ਜਾਂਦਾ (jaan-daa).' }
  ],

  match: [
    { title: 'Family', pairs: [
      ['ਮਾਂ', 'Mother'], ['ਪਿਤਾ', 'Father'], ['ਭਰਾ', 'Brother'],
      ['ਭੈਣ', 'Sister'], ['ਦਾਦੀ', 'Father\'s mother'], ['ਨਾਨੀ', 'Mother\'s mother']
    ] },
    { title: 'Numbers', pairs: [
      ['ਇੱਕ', '1'], ['ਦੋ', '2'], ['ਤਿੰਨ', '3'], ['ਪੰਜ', '5'], ['ਸੱਤ', '7'], ['ਦਸ', '10']
    ] },
    { title: 'Colours', pairs: [
      ['ਲਾਲ', 'Red'], ['ਨੀਲਾ', 'Blue'], ['ਹਰਾ', 'Green'], ['ਪੀਲਾ', 'Yellow'], ['ਚਿੱਟਾ', 'White'], ['ਕਾਲਾ', 'Black']
    ] },
    { title: 'My Body', pairs: [
      ['ਸਿਰ', 'Head'], ['ਅੱਖ', 'Eye'], ['ਕੰਨ', 'Ear'], ['ਨੱਕ', 'Nose'], ['ਹੱਥ', 'Hand'], ['ਪੈਰ', 'Foot']
    ] },
    { title: 'Everyday Things', pairs: [
      ['ਪਾਣੀ', 'Water'], ['ਦੁੱਧ', 'Milk'], ['ਘਰ', 'House'], ['ਸਕੂਲ', 'School'], ['ਕਿਤਾਬ', 'Book'], ['ਦੋਸਤ', 'Friend']
    ] },
    { title: 'Vowel Sounds', pairs: [
      ['ਕਾ', 'kaa'], ['ਕਿ', 'ki'], ['ਕੀ', 'kee'], ['ਕੁ', 'ku'], ['ਕੂ', 'koo'], ['ਕੋ', 'ko']
    ] },
    { title: 'Say It!', pairs: [
      ['ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Hello'], ['ਧੰਨਵਾਦ', 'Thank you'], ['ਹਾਂ', 'Yes'],
      ['ਨਹੀਂ', 'No'], ['ਮਾਫ਼ ਕਰਨਾ', 'Sorry'], ['ਜੀ ਆਇਆਂ ਨੂੰ', 'Welcome']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b02',
  level: 'Basic',
  number: 2,
  title: 'Vowel Signs · ਲਗਾਂ-ਮਾਤਰਾਂ',
  icon: '🔡',

  topics: {
    signs: 'Vowel Signs',
    nasal: 'Tippee, Bindee and Addak',
    read: 'Sounding Out Words'
  },

  summary: [
    'The vowel signs are called ਲਗਾਂ-ਮਾਤਰਾਂ (la-gaan maat-raan). They work the same way on EVERY letter, not just ਕ: ਮ ma → ਮਾ maa → ਮੀ mee → ਮੂ moo.',
    'No sign at all is called mukta: the letter keeps its short "a". In the middle or at the end of a word that "a" is usually dropped: ਘਰ = ghar, not gha-ra.',
    'ਿ (sihaaree) is written BEFORE the letter but said AFTER it: in ਦਿਲ you see ਿ first, but you say d-i-l = dil.',
    'Long and short pairs: ਿ i / ੀ ee, ੁ u / ੂ oo. The signs ੁ and ੂ hang BELOW the letter.',
    'ੰ (tippee) and ਂ (bindee) both add a soft nasal "n". Tippee goes with short sounds (no sign, ਿ, ੁ) and with ੂ; bindee goes with the other long signs: ਦੰਦ dand, ਮੀਂਹ meenh.',
    'ੱ (addak) sits on top and doubles the NEXT letter: ਪੱਤਾ = pat-taa.',
    'To read a new word: split it into letter + sign blocks, say each block, then join them: ਕੁ + ਰ + ਸੀ = kur-see (chair).'
  ],

  flashcards: [
    // vowel signs on different letters
    { topic: 'signs', front: 'ਮਟਰ', back: 'ma-tar — peas\nMukta = no sign. ਮ, ਟ and ਰ have no signs, so you hear only short "a" (and the last "a" is dropped).' },
    { topic: 'signs', front: 'ਮਾ', back: 'maa — ਮ + ਾ (kannaa), long "aa" as in "car"\nWord: ਮਾਤਾ (maa-taa) — mother' },
    { topic: 'signs', front: 'ਦਿ', back: 'di — ਦ + ਿ (sihaaree), short "i" as in "sit"\nWritten before the letter, said after it.\nWord: ਦਿਲ (dil) — heart' },
    { topic: 'signs', front: 'ਦਿਨ', back: 'din — day\nYour eye sees ਿ first, but your mouth says ਦ first: d-i-n.' },
    { topic: 'signs', front: 'ਸੀ', back: 'see — ਸ + ੀ (bihaaree), long "ee" as in "see"\nWord: ਸੀਟੀ (see-tee) — whistle' },
    { topic: 'signs', front: 'ਤੁ', back: 'tu — ਤ + ੁ (aunkar), short "u" as in "put"\nWord: ਤੁਸੀਂ (tu-seen) — you (polite)' },
    { topic: 'signs', front: 'ਸੂ', back: 'soo — ਸ + ੂ (dulainkar), long "oo" as in "food"\nWord: ਸੂਰਜ (soo-raj) — sun' },
    { topic: 'signs', front: 'ਪੇ', back: 'pe — ਪ + ੇ (laavaan), "e" as in "cafe"\nWord: ਪੇਟ (pet) — stomach' },
    { topic: 'signs', front: 'ਮੈ', back: 'mai — ਮ + ੈ (dulaavaan), "ai" as in "bat"\nWord: ਮੈਦਾਨ (mai-daan) — playground / field' },
    { topic: 'signs', front: 'ਤੋ', back: 'to — ਤ + ੋ (horaa), "o" as in "go"\nWord: ਤੋਤਾ (to-taa) — parrot' },
    { topic: 'signs', front: 'ਚੌ', back: 'chau — ਚ + ੌ (kanauraa), "au" as in "saw"\nWord: ਚੌਲ (chaul) — rice' },
    // nasal signs and addak
    { topic: 'nasal', front: 'ਦੰਦ', back: 'dand — teeth\nੰ (tippee) on a letter with no sign adds a soft "n".' },
    { topic: 'nasal', front: 'ਰੰਗ', back: 'rang — colour\nTippee again: ਰ + ੰ + ਗ = rang.' },
    { topic: 'nasal', front: 'ਮੀਂਹ', back: 'meenh — rain\nਂ (bindee) sits next to the long sign ੀ and makes it nasal.' },
    { topic: 'nasal', front: 'ਪੱਤਾ', back: 'pat-taa — leaf\nੱ (addak) doubles the next letter: ਪ + ੱ + ਤਾ = pat-taa.' },
    // reading practice
    { topic: 'read', front: 'ਤਿਤਲੀ', back: 'tit-lee — butterfly\nSound it out: ਤਿ (ti) + ਤ (t) + ਲੀ (lee)' },
    { topic: 'read', front: 'ਕੁਰਸੀ', back: 'kur-see — chair\nSound it out: ਕੁ (ku) + ਰ (r) + ਸੀ (see)' },
    { topic: 'read', front: 'ਗਾਜਰ', back: 'gaa-jar — carrot\nSound it out: ਗਾ (gaa) + ਜ (ja) + ਰ (r)' },
    { topic: 'read', front: 'ਸਬਜ਼ੀ', back: 'sab-zee — vegetable\nSound it out: ਸ (sa) + ਬ (b) + ਜ਼ੀ (zee)' },
    { topic: 'read', front: 'ਖਿੜਕੀ', back: 'khir-kee — window\nSound it out: ਖਿ (khi) + ੜ (r) + ਕੀ (kee)' },
    { topic: 'read', front: 'ਬੱਚਾ', back: 'bach-chaa — child (boy)\nSound it out: ਬ (ba) + ੱ (double!) + ਚਾ (chaa)\nA girl is ਬੱਚੀ (bach-chee).' },
    { topic: 'read', front: 'ਮੇਜ਼', back: 'mez — table\nSound it out: ਮੇ (me) + ਜ਼ (z)' }
  ],

  quiz: [
    { topic: 'signs', q: 'How do you say ਮਾ?', options: ['ma', 'mee', 'maa', 'mai'], answer: 2, explain: 'ਮਾ = maa. ਾ (kannaa) gives a long "aa", as in ਮਾਤਾ (maa-taa) — mother.' },
    { topic: 'signs', q: 'How do you say ਤੁ?', options: ['tu', 'too', 'to', 'ti'], answer: 0, explain: 'ਤੁ = tu. ੁ (aunkar) is a short "u", as in ਤੁਸੀਂ (tu-seen) — you.' },
    { topic: 'signs', q: 'How do you say ਸੂ?', options: ['su', 'so', 'sau', 'soo'], answer: 3, explain: 'ਸੂ = soo. ੂ (dulainkar) is a long "oo", as in ਸੂਰਜ (soo-raj) — sun.' },
    { topic: 'signs', q: 'How do you say ਪੇ?', options: ['pai', 'pe', 'pee', 'po'], answer: 1, explain: 'ਪੇ = pe. ੇ (laavaan) sounds like "e" in "cafe", as in ਪੇਟ (pet) — stomach.' },
    { topic: 'signs', q: 'In ਦਿਲ, the sign ਿ is written first. What do you say?', options: ['id', 'dil', 'deel', 'dal'], answer: 1, explain: 'ਦਿਲ = dil (heart). Sihaaree is written before the letter but said after it.' },
    { topic: 'signs', q: 'What does ਤੋਤਾ mean?', options: ['Parrot', 'Peacock', 'Pigeon', 'Owl'], answer: 0, explain: 'ਤੋਤਾ (to-taa) = parrot. ੋ (horaa) gives the "o" sound.' },
    { topic: 'signs', q: 'What does ਚੌਲ mean?', options: ['Tea', 'Bread', 'Rice', 'Salt'], answer: 2, explain: 'ਚੌਲ (chaul) = rice. ੌ (kanauraa) gives the "au" sound.' },
    { topic: 'signs', q: 'Which word means "sun"?', options: ['ਸੀਟੀ', 'ਸਬਜ਼ੀ', 'ਮੈਦਾਨ', 'ਸੂਰਜ'], answer: 3, explain: 'ਸੂਰਜ (soo-raj) = sun.' },
    { topic: 'signs', q: 'ਘਰ is said "ghar", not "gha-ra". Why?', options: ['ਰ is silent', 'A mukta letter at the end drops its "a"', 'ਘ has a sihaaree', 'It is a mistake'], answer: 1, explain: 'ਘਰ (ghar) — house. A letter with no sign at the end of a word usually loses its short "a".' },
    { topic: 'nasal', q: 'Which sign is in ਮੀਂਹ (rain) to make the "n" sound?', options: ['ੱ addak', 'ੰ tippee', 'ਂ bindee', 'ੈ dulaavaan'], answer: 2, explain: 'ਮੀਂਹ (meenh) uses ਂ (bindee), because it follows the long sign ੀ.' },
    { topic: 'nasal', q: 'How do you say ਪੱਤਾ?', options: ['pa-taa', 'pat-taa', 'paan-taa', 'pee-taa'], answer: 1, explain: 'ਪੱਤਾ = pat-taa (leaf). ੱ (addak) doubles the ਤ.' },
    { topic: 'nasal', q: 'What does ਦੰਦ mean?', options: ['Teeth', 'Day', 'Heart', 'Colour'], answer: 0, explain: 'ਦੰਦ (dand) = teeth. ੰ (tippee) adds the "n".' },
    { topic: 'read', q: 'How do you read ਤਿਤਲੀ?', options: ['ti-ta-lee', 'tee-tal', 'tit-lee', 'tat-lu'], answer: 2, explain: 'ਤਿ + ਤ + ਲੀ = tit-lee (butterfly).' },
    { topic: 'read', q: 'What does ਕੁਰਸੀ mean?', options: ['Table', 'Window', 'Door', 'Chair'], answer: 3, explain: 'ਕੁਰਸੀ (kur-see) = chair. ਮੇਜ਼ (mez) = table.' },
    { topic: 'read', q: 'Which word means "window"?', options: ['ਖਿੜਕੀ', 'ਗਾਜਰ', 'ਕੁਰਸੀ', 'ਬੱਚਾ'], answer: 0, explain: 'ਖਿੜਕੀ (khir-kee) = window.' }
  ],

  match: [
    { title: 'Sign Sounds', pairs: [
      ['ਮਾ', 'maa'], ['ਦਿ', 'di'], ['ਸੀ', 'see'], ['ਤੁ', 'tu'], ['ਸੂ', 'soo'], ['ਪੇ', 'pe']
    ] },
    { title: 'Sound It Out', pairs: [
      ['ਤਿਤਲੀ', 'tit-lee'], ['ਕੁਰਸੀ', 'kur-see'], ['ਗਾਜਰ', 'gaa-jar'], ['ਸਬਜ਼ੀ', 'sab-zee'], ['ਖਿੜਕੀ', 'khir-kee'], ['ਬੱਚਾ', 'bach-chaa']
    ] },
    { title: 'What Does It Mean?', pairs: [
      ['ਸੂਰਜ', 'Sun'], ['ਤੋਤਾ', 'Parrot'], ['ਚੌਲ', 'Rice'], ['ਦੰਦ', 'Teeth'], ['ਪੱਤਾ', 'Leaf'], ['ਮੀਂਹ', 'Rain']
    ] },
    { title: 'More Words', pairs: [
      ['ਮੈਦਾਨ', 'Playground'], ['ਤੁਸੀਂ', 'You'], ['ਦਿਲ', 'Heart'], ['ਪੇਟ', 'Stomach'], ['ਮਟਰ', 'Peas'], ['ਰੰਗ', 'Colour']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b03',
  level: 'Basic',
  number: 3,
  title: 'Alphabet 1 · ਪੈਂਤੀ ਅੱਖਰੀ',
  icon: '🅰️',

  topics: {
    carry: 'Vowel Carriers ੳ ਅ ੲ',
    sh: 'ਸ and ਹ',
    k: 'The ਕ Row',
    ch: 'The ਚ Row'
  },

  summary: [
    'The Gurmukhi alphabet is called ਪੈਂਤੀ (pain-tee), which means "thirty-five": 35 letters in 7 rows of 5. This chapter covers the first 3 rows.',
    'Row 1: ੳ ਅ ੲ ਸ ਹ.  Row 2: ਕ ਖ ਗ ਘ ਙ.  Row 3: ਚ ਛ ਜ ਝ ਞ.',
    'Each letter has a name, usually its sound said twice: ਕ is kak-kaa, ਸ is sas-saa.',
    'ੳ ਅ ੲ are vowel carriers. They hold a vowel sign at the start of a word: ੳ → ਉ ਊ ਓ, ਅ → ਅ ਆ ਐ ਔ, ੲ → ਇ ਈ ਏ.',
    'Each row goes plain, then with a puff of air: ਕ k / ਖ kh, ਗ g / ਘ gh, ਚ ch / ਛ chh, ਜ j / ਝ jh.',
    'ਘ and ਝ often sound softer than you expect, with a dip in the voice: listen with 🔊.',
    'ਙ (ng) and ਞ (ny) are very rare. Learn their place in the alphabet, but you will hardly ever see them in words.'
  ],

  flashcards: [
    // vowel carriers
    { topic: 'carry', front: 'ੳ', back: 'oo-raa — vowel carrier (u, oo, o)\nIt never stands alone; it carries ੁ ੂ ੋ: ਉ (u), ਊ (oo), ਓ (o).\nWord: ਉੱਲੂ (ul-loo) — owl' },
    { topic: 'carry', front: 'ਅ', back: 'ai-raa — vowel carrier (a, aa, ai, au)\nਅ (a), ਆ (aa), ਐ (ai), ਔ (au)\nWord: ਅੰਬ (amb) — mango' },
    { topic: 'carry', front: 'ੲ', back: 'ee-ree — vowel carrier (i, ee, e)\nਇ (i), ਈ (ee), ਏ (e)\nWord: ਇੱਟ (itt) — brick' },
    { topic: 'carry', front: 'ਆਲੂ', back: 'aa-loo — potato\nਅ + ਾ = ਆ (aa)' },
    { topic: 'carry', front: 'ਊਠ', back: 'ooth — camel\nੳ + ੂ = ਊ (oo)' },
    { topic: 'carry', front: 'ਐਨਕ', back: 'ai-nak — spectacles / glasses\nਅ + ੈ = ਐ (ai)' },
    { topic: 'carry', front: 'ਔਖਾ', back: 'au-khaa — difficult\nਅ + ੌ = ਔ (au)\nThe opposite is ਸੌਖਾ (sau-khaa) — easy.' },
    // ਸ ਹ
    { topic: 'sh', front: 'ਸ', back: 'sas-saa — sound "s"\nWord: ਸੇਬ (seb) — apple' },
    { topic: 'sh', front: 'ਹ', back: 'ha-haa — sound "h"\nWord: ਹਾਥੀ (haa-thee) — elephant' },
    // ਕ row
    { topic: 'k', front: 'ਕ', back: 'kak-kaa — sound "k"\nWord: ਕਬੂਤਰ (ka-boo-tar) — pigeon' },
    { topic: 'k', front: 'ਖ', back: 'khakh-khaa — sound "kh" (k with a puff of air)\nWord: ਖੀਰ (kheer) — rice pudding' },
    { topic: 'k', front: 'ਗ', back: 'gag-gaa — sound "g" as in "go"\nWord: ਗੇਂਦ (gend) — ball' },
    { topic: 'k', front: 'ਘ', back: 'ghag-gaa — sound "gh"\nWord: ਘੋੜਾ (gho-raa) — horse\nTip: listen with 🔊 — it sounds a bit like a "k" with a dip in the voice.' },
    { topic: 'k', front: 'ਙ', back: 'ngan-ngaa — sound "ng" as in "sing"\nVery rare: no everyday word starts with it.' },
    // ਚ row
    { topic: 'ch', front: 'ਚ', back: 'chach-chaa — sound "ch" as in "chair"\nWord: ਚਾਹ (chaah) — tea' },
    { topic: 'ch', front: 'ਛ', back: 'chhachh-chhaa — sound "chh" (ch with a puff of air)\nWord: ਛਤਰੀ (chhat-ree) — umbrella' },
    { topic: 'ch', front: 'ਜ', back: 'jaj-jaa — sound "j" as in "jam"\nWord: ਜਹਾਜ਼ (ja-haaz) — aeroplane / ship' },
    { topic: 'ch', front: 'ਝ', back: 'jhaj-jaa — sound "jh"\nWord: ਝੰਡਾ (jhan-daa) — flag' },
    { topic: 'ch', front: 'ਞ', back: 'nyan-nyaa — sound "ny"\nVery rare: no everyday word starts with it.' },
    // words to read
    { topic: 'k', front: 'ਖਾਣਾ', back: 'khaa-naa — food / to eat' },
    { topic: 'k', front: 'ਗਾਂ', back: 'gaan — cow' },
    { topic: 'ch', front: 'ਜੁੱਤੀ', back: 'jut-tee — shoe' },
    { topic: 'sh', front: 'ਹੱਸਣਾ', back: 'has-naa — to laugh' }
  ],

  quiz: [
    { topic: 'carry', q: 'Which three letters are the vowel carriers?', options: ['ਕ ਖ ਗ', 'ੳ ਅ ੲ', 'ਸ ਹ ਕ', 'ਚ ਛ ਜ'], answer: 1, explain: 'ੳ (oo-raa), ਅ (ai-raa) and ੲ (ee-ree) carry vowel signs at the start of a word.' },
    { topic: 'carry', q: 'What does ਅੰਬ mean?', options: ['Apple', 'Banana', 'Mango', 'Potato'], answer: 2, explain: 'ਅੰਬ (amb) = mango.' },
    { topic: 'carry', q: 'Which carrier is used to write the "ee" sound in ਈ?', options: ['ੳ', 'ਅ', 'ਹ', 'ੲ'], answer: 3, explain: 'ੲ (ee-ree) + ੀ = ਈ (ee).' },
    { topic: 'carry', q: 'What does ਉੱਲੂ mean?', options: ['Owl', 'Camel', 'Pigeon', 'Horse'], answer: 0, explain: 'ਉੱਲੂ (ul-loo) = owl. ਊਠ (ooth) = camel.' },
    { topic: 'carry', q: 'What does ਔਖਾ mean?', options: ['Easy', 'Difficult', 'Big', 'Tasty'], answer: 1, explain: 'ਔਖਾ (au-khaa) = difficult. ਸੌਖਾ (sau-khaa) = easy.' },
    { topic: 'sh', q: 'What is the letter ਸ called?', options: ['ha-haa', 'kak-kaa', 'sas-saa', 'chach-chaa'], answer: 2, explain: 'ਸ = sas-saa, sound "s", as in ਸੇਬ (seb) — apple.' },
    { topic: 'sh', q: 'ਹਾਥੀ starts with ਹ. What does it mean?', options: ['Horse', 'Elephant', 'Camel', 'Cow'], answer: 1, explain: 'ਹਾਥੀ (haa-thee) = elephant.' },
    { topic: 'k', q: 'What sound does ਖ make?', options: ['k', 'g', 'kh', 'ch'], answer: 2, explain: 'ਖ (khakh-khaa) = "kh", a k with a puff of air, as in ਖੀਰ (kheer).' },
    { topic: 'k', q: 'Which word starts with ਘ?', options: ['ਗੇਂਦ', 'ਘੋੜਾ', 'ਕਬੂਤਰ', 'ਖੀਰ'], answer: 1, explain: 'ਘੋੜਾ (gho-raa) = horse.' },
    { topic: 'k', q: 'What does ਗੇਂਦ mean?', options: ['Ball', 'Cow', 'Kite', 'Flag'], answer: 0, explain: 'ਗੇਂਦ (gend) = ball.' },
    { topic: 'k', q: 'What is ਙ like?', options: ['Very common, starts many words', 'A vowel carrier', 'Rare: the "ng" sound', 'The same as ਗ'], answer: 2, explain: 'ਙ (ngan-ngaa) is the "ng" sound; it is very rare.' },
    { topic: 'ch', q: 'What sound does ਛ make?', options: ['chh', 'ch', 'j', 'jh'], answer: 0, explain: 'ਛ (chhachh-chhaa) = "chh", as in ਛਤਰੀ (chhat-ree) — umbrella.' },
    { topic: 'ch', q: 'What does ਝੰਡਾ mean?', options: ['Umbrella', 'Shoe', 'Aeroplane', 'Flag'], answer: 3, explain: 'ਝੰਡਾ (jhan-daa) = flag.' },
    { topic: 'ch', q: 'Which word means "tea"?', options: ['ਚਾਹ', 'ਛਤਰੀ', 'ਜੁੱਤੀ', 'ਖੀਰ'], answer: 0, explain: 'ਚਾਹ (chaah) = tea.' },
    { topic: 'ch', q: 'How do you say ਜਹਾਜ਼?', options: ['ja-haaj', 'ja-haaz', 'jha-haaz', 'cha-haaz'], answer: 1, explain: 'ਜਹਾਜ਼ = ja-haaz (aeroplane / ship). The dotted ਜ਼ at the end is "z".' }
  ],

  match: [
    { title: 'Letter Sounds 1', pairs: [
      ['ਸ', 's'], ['ਹ', 'h'], ['ਕ', 'k'], ['ਖ', 'kh'], ['ਗ', 'g'], ['ਘ', 'gh']
    ] },
    { title: 'Letter Sounds 2', pairs: [
      ['ਚ', 'ch'], ['ਛ', 'chh'], ['ਜ', 'j'], ['ਝ', 'jh'], ['ਙ', 'ng'], ['ਞ', 'ny']
    ] },
    { title: 'Letter Names', pairs: [
      ['ਕ', 'kak-kaa'], ['ਖ', 'khakh-khaa'], ['ਸ', 'sas-saa'], ['ਹ', 'ha-haa'], ['ਚ', 'chach-chaa'], ['ਜ', 'jaj-jaa']
    ] },
    { title: 'First-Letter Words', pairs: [
      ['ਸੇਬ', 'Apple'], ['ਹਾਥੀ', 'Elephant'], ['ਘੋੜਾ', 'Horse'], ['ਗੇਂਦ', 'Ball'], ['ਚਾਹ', 'Tea'], ['ਝੰਡਾ', 'Flag']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b04',
  level: 'Basic',
  number: 4,
  title: 'Alphabet 2 · ਪੈਂਤੀ ਅੱਖਰੀ',
  icon: '🔠',

  topics: {
    tt: 'The ਟ Row (hard sounds)',
    t: 'The ਤ Row (soft sounds)',
    p: 'The ਪ Row',
    y: 'The Last Row',
    dot: 'Dotted Letters'
  },

  summary: [
    'Rows 4 to 7: ਟ ਠ ਡ ਢ ਣ / ਤ ਥ ਦ ਧ ਨ / ਪ ਫ ਬ ਭ ਮ / ਯ ਰ ਲ ਵ ੜ. That completes all 35 letters!',
    'HARD sounds (ਟ ਠ ਡ ਢ ਣ): curl your tongue back and tap the roof of your mouth — like the English "t" in "top".',
    'SOFT sounds (ਤ ਥ ਦ ਧ ਨ): put your tongue against the back of your top teeth — a softer "t", like in "pasta" said by an Italian.',
    'ਣ and ੜ never start a word. Look for them inside words: ਪਾਣੀ (paa-nee), ਸੜਕ (sa-rak).',
    'ਫ is "ph" — p with a puff of air (ਫੁੱਲ phull, flower). With a dot, ਫ਼ becomes "f".',
    'A dot under a letter (ਪੈਰ ਬਿੰਦੀ, pair bin-dee) makes a new sound: ਸ਼ sh, ਖ਼ kh (throaty), ਗ਼ g (throaty), ਜ਼ z, ਫ਼ f, ਲ਼ heavy l.'
  ],

  flashcards: [
    // ਟ row
    { topic: 'tt', front: 'ਟ', back: 'tain-kaa — HARD "t" (tongue curled back)\nWord: ਟਮਾਟਰ (ta-maa-tar) — tomato' },
    { topic: 'tt', front: 'ਠ', back: 'thath-thaa — HARD "th" (hard t + puff of air)\nWord: ਠੀਕ (theek) — fine / OK' },
    { topic: 'tt', front: 'ਡ', back: 'dad-daa — HARD "d" (tongue curled back)\nWord: ਡਾਕਟਰ (daak-tar) — doctor' },
    { topic: 'tt', front: 'ਢ', back: 'dhad-daa — HARD "dh"\nWord: ਢੋਲ (dhol) — drum' },
    { topic: 'tt', front: 'ਣ', back: 'naa-naa — HARD "n" (tongue curled back)\nNever starts a word.\nWords: ਪਾਣੀ (paa-nee) — water, ਭੈਣ (bhain) — sister' },
    // ਤ row
    { topic: 't', front: 'ਤ', back: 'tat-taa — SOFT "t" (tongue on the teeth)\nWord: ਤਾਰਾ (taa-raa) — star' },
    { topic: 't', front: 'ਥ', back: 'thath-thaa — SOFT "th" (soft t + puff of air)\nWord: ਥਾਲੀ (thaa-lee) — plate' },
    { topic: 't', front: 'ਦ', back: 'dad-daa — SOFT "d" (tongue on the teeth)\nWord: ਦਰਵਾਜ਼ਾ (dar-vaa-zaa) — door' },
    { topic: 't', front: 'ਧ', back: 'dhad-daa — SOFT "dh"\nWord: ਧੁੱਪ (dhupp) — sunshine' },
    { topic: 't', front: 'ਨ', back: 'nan-naa — SOFT "n", like English "n"\nWord: ਨਦੀ (na-dee) — river' },
    // ਪ row
    { topic: 'p', front: 'ਪ', back: 'pap-paa — sound "p"\nWord: ਪਤੰਗ (pa-tang) — kite' },
    { topic: 'p', front: 'ਫ', back: 'phaph-phaa — sound "ph" (p with a puff of air, not "f")\nWord: ਫੁੱਲ (phull) — flower' },
    { topic: 'p', front: 'ਬ', back: 'bab-baa — sound "b"\nWord: ਬਿੱਲੀ (bil-lee) — cat' },
    { topic: 'p', front: 'ਭ', back: 'bhab-baa — sound "bh"\nWord: ਭਾਲੂ (bhaa-loo) — bear' },
    { topic: 'p', front: 'ਮ', back: 'mam-maa — sound "m"\nWord: ਮੋਰ (mor) — peacock' },
    // last row
    { topic: 'y', front: 'ਯ', back: 'yay-yaa — sound "y"\nWord: ਯਾਰ (yaar) — friend / buddy' },
    { topic: 'y', front: 'ਰ', back: 'raa-raa — sound "r" (a quick roll of the tongue)\nWord: ਰਾਤ (raat) — night' },
    { topic: 'y', front: 'ਲ', back: 'lal-laa — sound "l"\nWord: ਲੂਣ (loon) — salt\nWith a dot, ਲ਼ is a heavier "l", as in ਕਾਲ਼ਾ (kaa-laa) — black. Many people write it without the dot.' },
    { topic: 'y', front: 'ਵ', back: 'vav-vaa — sound "v" (soft, between v and w)\nWord: ਵਾਲ (vaal) — hair' },
    { topic: 'y', front: 'ੜ', back: 'raa-raa — a HARD flapped "r": curl the tongue back and flick it forward\nNever starts a word.\nWords: ਸੜਕ (sa-rak) — road, ਪਹਾੜ (pa-haar) — mountain' },
    // dotted letters
    { topic: 'dot', front: 'ਸ਼', back: 'sh — ਸ with a dot = "sh" as in "shop"\nWord: ਸ਼ੇਰ (sher) — lion' },
    { topic: 'dot', front: 'ਖ਼', back: 'kh — ਖ with a dot = a throaty "kh", like clearing your throat gently\nWord: ਖ਼ਰਗੋਸ਼ (khar-gosh) — rabbit' },
    { topic: 'dot', front: 'ਗ਼', back: 'g — ਗ with a dot = a throaty, gargled "g"\nWord: ਗ਼ਰੀਬ (ga-reeb) — poor' },
    { topic: 'dot', front: 'ਜ਼', back: 'z — ਜ with a dot = "z" as in "zoo"\nWord: ਜ਼ਮੀਨ (za-meen) — ground / land' },
    { topic: 'dot', front: 'ਫ਼', back: 'f — ਫ with a dot = "f" as in "fan"\nWord: ਫ਼ਰਸ਼ (farsh) — floor' }
  ],

  quiz: [
    { topic: 'tt', q: 'How do you make the sound of ਟ?', options: ['Tongue on the teeth', 'Tongue curled back', 'Lips together', 'Through the nose'], answer: 1, explain: 'ਟ (tain-kaa) is a HARD t: tongue curled back, as in ਟਮਾਟਰ (ta-maa-tar) — tomato.' },
    { topic: 't', q: 'Which letter is the SOFT "t" (tongue on the teeth)?', options: ['ਟ', 'ਠ', 'ਤ', 'ਡ'], answer: 2, explain: 'ਤ (tat-taa) is the soft t, as in ਤਾਰਾ (taa-raa) — star.' },
    { topic: 'tt', q: 'Which letter is the HARD "d"?', options: ['ਦ', 'ਡ', 'ਧ', 'ਬ'], answer: 1, explain: 'ਡ (dad-daa) is the hard d, as in ਡਾਕਟਰ (daak-tar) — doctor. ਦ is the soft d.' },
    { topic: 'tt', q: 'What does ਢੋਲ mean?', options: ['Drum', 'Door', 'Doctor', 'River'], answer: 0, explain: 'ਢੋਲ (dhol) = drum.' },
    { topic: 'tt', q: 'Which word has the letter ਣ in it?', options: ['ਨਦੀ', 'ਤਾਰਾ', 'ਮੋਰ', 'ਪਾਣੀ'], answer: 3, explain: 'ਪਾਣੀ (paa-nee) — water. ਣ never starts a word, so look for it in the middle or end.' },
    { topic: 't', q: 'What does ਥਾਲੀ mean?', options: ['Star', 'Plate', 'Sunshine', 'Kite'], answer: 1, explain: 'ਥਾਲੀ (thaa-lee) = plate.' },
    { topic: 't', q: 'What does ਨਦੀ mean?', options: ['Road', 'Mountain', 'River', 'Night'], answer: 2, explain: 'ਨਦੀ (na-dee) = river.' },
    { topic: 'p', q: 'What sound does ਫ make in ਫੁੱਲ?', options: ['f', 'b', 'bh', 'ph'], answer: 3, explain: 'ਫੁੱਲ = phull (flower). ਫ is "ph", a p with a puff of air. Only ਫ਼ (with a dot) is "f".' },
    { topic: 'p', q: 'Which word means "cat"?', options: ['ਬਿੱਲੀ', 'ਭਾਲੂ', 'ਮੋਰ', 'ਸ਼ੇਰ'], answer: 0, explain: 'ਬਿੱਲੀ (bil-lee) = cat.' },
    { topic: 'p', q: 'What does ਭਾਲੂ mean?', options: ['Peacock', 'Lion', 'Bear', 'Rabbit'], answer: 2, explain: 'ਭਾਲੂ (bhaa-loo) = bear.' },
    { topic: 'y', q: 'Which word has the letter ੜ in it?', options: ['ਰਾਤ', 'ਸੜਕ', 'ਲੂਣ', 'ਵਾਲ'], answer: 1, explain: 'ਸੜਕ (sa-rak) — road. ੜ never starts a word.' },
    { topic: 'y', q: 'What does ਰਾਤ mean?', options: ['Night', 'Day', 'Salt', 'Hair'], answer: 0, explain: 'ਰਾਤ (raat) = night.' },
    { topic: 'dot', q: 'How do you say ਸ਼ੇਰ?', options: ['ser', 'sher', 'shair', 'seer'], answer: 1, explain: 'ਸ਼ੇਰ = sher (lion). The dot turns ਸ (s) into ਸ਼ (sh).' },
    { topic: 'dot', q: 'What sound does ਜ਼ make?', options: ['j', 'jh', 'z', 'sh'], answer: 2, explain: 'ਜ਼ = z, as in ਜ਼ਮੀਨ (za-meen) — ground / land.' },
    { topic: 'dot', q: 'What does ਖ਼ਰਗੋਸ਼ mean?', options: ['Lion', 'Bear', 'Cat', 'Rabbit'], answer: 3, explain: 'ਖ਼ਰਗੋਸ਼ (khar-gosh) = rabbit.' },
    { topic: 'dot', q: 'Which letter makes the "f" sound?', options: ['ਫ', 'ਪ', 'ਫ਼', 'ਬ'], answer: 2, explain: 'ਫ਼ (with a dot) = f, as in ਫ਼ਰਸ਼ (farsh) — floor. ਫ without a dot = ph.' }
  ],

  match: [
    { title: 'Hard or Soft?', pairs: [
      ['ਟ', 'hard t'], ['ਤ', 'soft t'], ['ਡ', 'hard d'], ['ਦ', 'soft d'], ['ਣ', 'hard n'], ['ਨ', 'soft n']
    ] },
    { title: 'Dot or No Dot?', pairs: [
      ['ਸ਼', 'sh'], ['ਸ', 's'], ['ਜ਼', 'z'], ['ਜ', 'j'], ['ਫ਼', 'f'], ['ਫ', 'ph']
    ] },
    { title: 'Animals and Things', pairs: [
      ['ਸ਼ੇਰ', 'Lion'], ['ਢੋਲ', 'Drum'], ['ਬਿੱਲੀ', 'Cat'], ['ਫੁੱਲ', 'Flower'], ['ਮੋਰ', 'Peacock'], ['ਥਾਲੀ', 'Plate']
    ] },
    { title: 'Out and About', pairs: [
      ['ਸੜਕ', 'Road'], ['ਪਹਾੜ', 'Mountain'], ['ਜ਼ਮੀਨ', 'Ground'], ['ਤਾਰਾ', 'Star'], ['ਨਦੀ', 'River'], ['ਧੁੱਪ', 'Sunshine']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b05',
  level: 'Basic',
  number: 5,
  title: 'Greetings & Polite Words · ਸਤਿਕਾਰ',
  icon: '🙏',

  topics: {
    greet: 'Hello & Goodbye',
    polite: 'Polite Words',
    talk: 'Small Talk',
    me: 'Introducing Yourself'
  },

  summary: [
    'ਸਤਿਕਾਰ (sa-ti-kaar) means respect. Punjabi shows respect in small words, and people notice when you use them.',
    'ਜੀ (jee) is the magic respect word. Add it after a name or a reply: ਹਾਂ ਜੀ (haan jee) = yes, ਨਹੀਂ ਜੀ (na-heen jee) = no, politely.',
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ (sat sree a-kaal) works for hello AND goodbye, at any time of day.',
    'Polite helpers: ਕਿਰਪਾ ਕਰਕੇ (kir-paa kar-ke) = please, ਧੰਨਵਾਦ (dhan-vaad) = thank you, ਮਾਫ਼ ਕਰਨਾ (maaf kar-naa) = sorry / excuse me.',
    'Stuck? Say ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ (mai-noon sa-majh na-heen aa-ee) = I didn\'t understand, and ਹੌਲੀ ਬੋਲੋ ਜੀ (hau-lee bo-lo jee) = please speak slowly.',
    'Talking about yourself, a girl says ਪੜ੍ਹਦੀ, ਰਹਿੰਦੀ, ਦੀ (ending in ee). A boy would say ਪੜ੍ਹਦਾ, ਰਹਿੰਦਾ, ਦਾ (ending in aa).'
  ],

  flashcards: [
    { topic: 'greet', front: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ', back: 'sat sree a-kaal jee — Hello / Goodbye (with respect)\nAdding ਜੀ makes it extra polite, e.g. to an elder.' },
    { topic: 'greet', front: 'ਜੀ ਆਇਆਂ ਨੂੰ', back: 'jee aa-i-aan noon — Welcome\nYou see it on signs at the entrance of towns and homes in Punjab.' },
    { topic: 'greet', front: 'ਸ਼ੁਭ ਸਵੇਰ', back: 'shubh sa-ver — Good morning\nਸਵੇਰ (sa-ver) = morning.' },
    { topic: 'greet', front: 'ਸ਼ੁਭ ਰਾਤ', back: 'shubh raat — Good night\nਰਾਤ (raat) = night.' },
    { topic: 'greet', front: 'ਫਿਰ ਮਿਲਾਂਗੇ', back: 'phir mi-laan-ge — See you again\n(literally: we will meet again)' },
    { topic: 'polite', front: 'ਜੀ', back: 'jee — the respect word\nPut it after names and replies: ਮਾਤਾ ਜੀ (maa-taa jee), ਹਾਂ ਜੀ (haan jee).' },
    { topic: 'polite', front: 'ਹਾਂ ਜੀ', back: 'haan jee — Yes (politely)' },
    { topic: 'polite', front: 'ਨਹੀਂ ਜੀ', back: 'na-heen jee — No (politely)' },
    { topic: 'polite', front: 'ਕਿਰਪਾ ਕਰਕੇ', back: 'kir-paa kar-ke — Please\n(literally: doing a kindness)' },
    { topic: 'polite', front: 'ਧੰਨਵਾਦ ਜੀ', back: 'dhan-vaad jee — Thank you (with respect)' },
    { topic: 'polite', front: 'ਮਾਫ਼ ਕਰਨਾ ਜੀ', back: 'maaf kar-naa jee — Sorry / Excuse me (politely)' },
    { topic: 'polite', front: 'ਕੋਈ ਗੱਲ ਨਹੀਂ', back: 'ko-ee gall na-heen — No problem / It\'s okay\nA kind reply to ਧੰਨਵਾਦ or ਮਾਫ਼ ਕਰਨਾ.' },
    { topic: 'talk', front: 'ਕੀ ਹਾਲ ਹੈ ਜੀ?', back: 'kee haal hai jee? — How are you? (politely)' },
    { topic: 'talk', front: 'ਮੈਂ ਠੀਕ ਹਾਂ, ਧੰਨਵਾਦ।', back: 'main theek haan, dhan-vaad — I am fine, thank you.' },
    { topic: 'talk', front: 'ਬਹੁਤ ਵਧੀਆ', back: 'ba-hut va-dhee-aa — Very good / Great!\nਬਹੁਤ (ba-hut) = very.' },
    { topic: 'talk', front: 'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ।', back: 'mai-noon sa-majh na-heen aa-ee — I didn\'t understand.' },
    { topic: 'talk', front: 'ਹੌਲੀ ਬੋਲੋ ਜੀ।', back: 'hau-lee bo-lo jee — Please speak slowly.\nਹੌਲੀ (hau-lee) = slowly.' },
    { topic: 'talk', front: 'ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖ਼ੁਸ਼ੀ ਹੋਈ।', back: 'tu-haa-noon mil ke khu-shee ho-ee — Nice to meet you.\nਖ਼ੁਸ਼ੀ (khu-shee) = happiness.' },
    { topic: 'me', front: 'ਮੇਰਾ ਨਾਮ ਸਿਮਰਨ ਹੈ।', back: 'me-raa naam Sim-ran hai — My name is Simran.\nPut your own name in the middle!' },
    { topic: 'me', front: 'ਮੈਂ ਪੰਦਰਾਂ ਸਾਲਾਂ ਦੀ ਹਾਂ।', back: 'main pan-da-raan saa-laan dee haan — I am fifteen years old.\nA girl says ਦੀ (dee); a boy says ਦਾ (daa).' },
    { topic: 'me', front: 'ਮੈਂ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹਾਂ।', back: 'main sin-gaa-pur vichch rehn-dee haan — I live in Singapore.\nA girl says ਰਹਿੰਦੀ (rehn-dee); a boy says ਰਹਿੰਦਾ (rehn-daa).' },
    { topic: 'me', front: 'ਮੈਂ ਦਸਵੀਂ ਜਮਾਤ ਵਿੱਚ ਪੜ੍ਹਦੀ ਹਾਂ।', back: 'main das-veen ja-maat vichch parh-dee haan — I study in class ten.\nਜਮਾਤ (ja-maat) = class. A boy says ਪੜ੍ਹਦਾ (parh-daa).' },
    { topic: 'me', front: 'ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖ ਰਹੀ ਹਾਂ।', back: 'main pan-jaa-bee sikkh ra-hee haan — I am learning Punjabi.\nA boy says ਰਿਹਾ (ri-haa).' }
  ],

  quiz: [
    { topic: 'polite', q: 'What does the word ਜੀ add when you put it after a name or a reply?', options: ['A question', 'Respect', 'The past tense', 'The number two'], answer: 1, explain: 'ਜੀ (jee) is the respect word: ਹਾਂ ਜੀ (haan jee) = yes, politely.' },
    { topic: 'polite', q: 'What does ਕਿਰਪਾ ਕਰਕੇ mean?', options: ['Thank you', 'Sorry', 'Please', 'Welcome'], answer: 2, explain: 'ਕਿਰਪਾ ਕਰਕੇ (kir-paa kar-ke) = please.' },
    { topic: 'polite', q: 'Your aunt asks if you have eaten. You have. What do you say?', options: ['ਨਹੀਂ ਜੀ', 'ਹਾਂ ਜੀ', 'ਸ਼ੁਭ ਰਾਤ', 'ਜੀ ਆਇਆਂ ਨੂੰ'], answer: 1, explain: 'ਹਾਂ ਜੀ (haan jee) = yes, politely.' },
    { topic: 'polite', q: 'Someone says ਧੰਨਵਾਦ to you. Which is a kind reply?', options: ['ਕੋਈ ਗੱਲ ਨਹੀਂ', 'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ', 'ਹੌਲੀ ਬੋਲੋ ਜੀ', 'ਸ਼ੁਭ ਸਵੇਰ'], answer: 0, explain: 'ਕੋਈ ਗੱਲ ਨਹੀਂ (ko-ee gall na-heen) = no problem.' },
    { topic: 'polite', q: 'How do you say ਮਾਫ਼ ਕਰਨਾ?', options: ['maaf kar-naa', 'maa-taa jee', 'mil-naa', 'maaf kar-ke'], answer: 0, explain: 'ਮਾਫ਼ ਕਰਨਾ (maaf kar-naa) = sorry / excuse me.' },
    { topic: 'greet', q: 'What does ਸ਼ੁਭ ਸਵੇਰ mean?', options: ['Good night', 'Good morning', 'See you again', 'Welcome'], answer: 1, explain: 'ਸ਼ੁਭ ਸਵੇਰ (shubh sa-ver) = good morning.' },
    { topic: 'greet', q: 'Which phrase means "Good night"?', options: ['ਸ਼ੁਭ ਸਵੇਰ', 'ਫਿਰ ਮਿਲਾਂਗੇ', 'ਸ਼ੁਭ ਰਾਤ', 'ਬਹੁਤ ਵਧੀਆ'], answer: 2, explain: 'ਸ਼ੁਭ ਰਾਤ (shubh raat) = good night.' },
    { topic: 'greet', q: 'Guests arrive and you say ਜੀ ਆਇਆਂ ਨੂੰ. What does it mean?', options: ['Goodbye', 'Thank you', 'Sorry', 'Welcome'], answer: 3, explain: 'ਜੀ ਆਇਆਂ ਨੂੰ (jee aa-i-aan noon) = welcome.' },
    { topic: 'greet', q: 'What does ਫਿਰ ਮਿਲਾਂਗੇ mean?', options: ['See you again', 'Nice to meet you', 'How are you?', 'Very good'], answer: 0, explain: 'ਫਿਰ ਮਿਲਾਂਗੇ (phir mi-laan-ge) = see you again.' },
    { topic: 'talk', q: 'Your grandmother speaks too fast. What do you say?', options: ['ਬਹੁਤ ਵਧੀਆ', 'ਹੌਲੀ ਬੋਲੋ ਜੀ।', 'ਜੀ ਆਇਆਂ ਨੂੰ', 'ਸ਼ੁਭ ਰਾਤ'], answer: 1, explain: 'ਹੌਲੀ ਬੋਲੋ ਜੀ (hau-lee bo-lo jee) = please speak slowly.' },
    { topic: 'talk', q: 'What does ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ। mean?', options: ['I am fine.', 'I am learning.', 'I didn\'t understand.', 'I live here.'], answer: 2, explain: 'ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ (mai-noon sa-majh na-heen aa-ee) = I didn\'t understand.' },
    { topic: 'talk', q: 'What does ਬਹੁਤ ਵਧੀਆ mean?', options: ['Very good', 'Very slowly', 'No problem', 'Good morning'], answer: 0, explain: 'ਬਹੁਤ ਵਧੀਆ (ba-hut va-dhee-aa) = very good / great.' },
    { topic: 'talk', q: 'What does ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖ਼ੁਸ਼ੀ ਹੋਈ। mean?', options: ['What is your name?', 'See you again.', 'Please sit down.', 'Nice to meet you.'], answer: 3, explain: 'tu-haa-noon mil ke khu-shee ho-ee = nice to meet you.' },
    { topic: 'me', q: 'A girl says "I am fifteen years old". Which is correct?', options: ['ਮੈਂ ਪੰਦਰਾਂ ਸਾਲਾਂ ਦਾ ਹਾਂ।', 'ਮੈਂ ਪੰਦਰਾਂ ਸਾਲਾਂ ਦੀ ਹਾਂ।', 'ਮੇਰਾ ਨਾਮ ਪੰਦਰਾਂ ਹੈ।', 'ਮੈਂ ਠੀਕ ਹਾਂ।'], answer: 1, explain: 'ਮੈਂ ਪੰਦਰਾਂ ਸਾਲਾਂ ਦੀ ਹਾਂ (main pan-da-raan saa-laan dee haan). A girl uses ਦੀ (dee).' },
    { topic: 'me', q: 'In ਮੈਂ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹਾਂ। which word tells you a girl is speaking?', options: ['ਮੈਂ', 'ਸਿੰਗਾਪੁਰ', 'ਰਹਿੰਦੀ', 'ਹਾਂ'], answer: 2, explain: 'ਰਹਿੰਦੀ (rehn-dee) ends in ee, so a girl is speaking. A boy says ਰਹਿੰਦਾ (rehn-daa). Meaning: I live in Singapore.' },
    { topic: 'me', q: 'What does ਮੈਂ ਦਸਵੀਂ ਜਮਾਤ ਵਿੱਚ ਪੜ੍ਹਦੀ ਹਾਂ। mean?', options: ['I have ten books.', 'I live in Singapore.', 'I am ten years old.', 'I study in class ten.'], answer: 3, explain: 'main das-veen ja-maat vichch parh-dee haan = I study in class ten.' }
  ],

  match: [
    { title: 'Polite Words', pairs: [
      ['ਹਾਂ ਜੀ', 'Yes (politely)'], ['ਨਹੀਂ ਜੀ', 'No (politely)'], ['ਕਿਰਪਾ ਕਰਕੇ', 'Please'],
      ['ਧੰਨਵਾਦ', 'Thank you'], ['ਮਾਫ਼ ਕਰਨਾ', 'Sorry'], ['ਕੋਈ ਗੱਲ ਨਹੀਂ', 'No problem']
    ] },
    { title: 'Hello & Goodbye', pairs: [
      ['ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Hello / Goodbye'], ['ਜੀ ਆਇਆਂ ਨੂੰ', 'Welcome'], ['ਸ਼ੁਭ ਸਵੇਰ', 'Good morning'],
      ['ਸ਼ੁਭ ਰਾਤ', 'Good night'], ['ਫਿਰ ਮਿਲਾਂਗੇ', 'See you again'], ['ਕੀ ਹਾਲ ਹੈ?', 'How are you?']
    ] },
    { title: 'Small Talk', pairs: [
      ['ਮੈਂ ਠੀਕ ਹਾਂ', 'I am fine'], ['ਬਹੁਤ ਵਧੀਆ', 'Very good'], ['ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ', 'I didn\'t understand'],
      ['ਹੌਲੀ ਬੋਲੋ ਜੀ', 'Please speak slowly'], ['ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖ਼ੁਸ਼ੀ ਹੋਈ', 'Nice to meet you'], ['ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?', 'What is your name?']
    ] },
    { title: 'Say It Aloud', pairs: [
      ['ਜੀ', 'jee'], ['ਕਿਰਪਾ ਕਰਕੇ', 'kir-paa kar-ke'], ['ਸ਼ੁਭ ਸਵੇਰ', 'shubh sa-ver'],
      ['ਹੌਲੀ', 'hau-lee'], ['ਵਧੀਆ', 'va-dhee-aa'], ['ਧੰਨਵਾਦ', 'dhan-vaad']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b06',
  level: 'Basic',
  number: 6,
  title: 'Family · ਪਰਿਵਾਰ',
  icon: '👨‍👩‍👧',

  topics: {
    home: 'Parents & Children',
    dad: 'Father\'s Side',
    mum: 'Mother\'s Side',
    sent: 'This Is My…'
  },

  summary: [
    'English has one word "uncle". Punjabi has a different word for each uncle, so you know exactly who is meant!',
    'Father\'s side: ਦਾਦਾ/ਦਾਦੀ (grandparents), ਤਾਇਆ/ਤਾਈ (dad\'s ELDER brother and his wife), ਚਾਚਾ/ਚਾਚੀ (dad\'s YOUNGER brother and his wife), ਭੂਆ (dad\'s sister).',
    'Mother\'s side: ਨਾਨਾ/ਨਾਨੀ (grandparents), ਮਾਮਾ/ਮਾਮੀ (mum\'s brother and his wife), ਮਾਸੀ (mum\'s sister).',
    'Many pairs follow a pattern: ending -aa for the man, -ee for the woman: ਚਾਚਾ → ਚਾਚੀ, ਮਾਮਾ → ਮਾਮੀ, ਦਾਦਾ → ਦਾਦੀ.',
    'Add ਜੀ for respect when talking about elders: ਦਾਦੀ ਜੀ (daa-dee jee), ਮਾਮਾ ਜੀ (maa-maa jee).',
    '"My" changes too: ਮੇਰਾ (me-raa) for a male word, ਮੇਰੀ (me-ree) for a female word, ਮੇਰੇ (me-re) for an elder said with respect.'
  ],

  flashcards: [
    { topic: 'home', front: 'ਮਾਤਾ ਜੀ', back: 'maa-taa jee — mother (respectful)\nAt home many say ਮੰਮੀ (mam-mee) or ਮਾਂ (maan).' },
    { topic: 'home', front: 'ਪਿਤਾ ਜੀ', back: 'pi-taa jee — father (respectful)\nAt home many say ਪਾਪਾ (paa-paa).' },
    { topic: 'home', front: 'ਭਰਾ', back: 'bha-raa — brother' },
    { topic: 'home', front: 'ਭੈਣ', back: 'bhain — sister' },
    { topic: 'home', front: 'ਪੁੱਤਰ', back: 'put-tar — son' },
    { topic: 'home', front: 'ਧੀ', back: 'dhee — daughter' },
    { topic: 'home', front: 'ਪਤੀ', back: 'pa-tee — husband' },
    { topic: 'home', front: 'ਪਤਨੀ', back: 'pat-nee — wife' },
    { topic: 'home', front: 'ਬੱਚਾ', back: 'bach-chaa — child\nMany children: ਬੱਚੇ (bach-che).' },
    { topic: 'home', front: 'ਰਿਸ਼ਤੇਦਾਰ', back: 'rish-te-daar — relative\nAt a Punjabi wedding you meet hundreds of ਰਿਸ਼ਤੇਦਾਰ!' },
    { topic: 'dad', front: 'ਦਾਦਾ ਜੀ', back: 'daa-daa jee — grandfather (father\'s side: dad\'s father)' },
    { topic: 'dad', front: 'ਦਾਦੀ ਜੀ', back: 'daa-dee jee — grandmother (father\'s side: dad\'s mother)' },
    { topic: 'dad', front: 'ਤਾਇਆ', back: 'taa-i-aa — uncle (father\'s side: dad\'s ELDER brother)' },
    { topic: 'dad', front: 'ਤਾਈ', back: 'taa-ee — aunt (father\'s side: wife of ਤਾਇਆ)' },
    { topic: 'dad', front: 'ਚਾਚਾ', back: 'chaa-chaa — uncle (father\'s side: dad\'s YOUNGER brother)' },
    { topic: 'dad', front: 'ਚਾਚੀ', back: 'chaa-chee — aunt (father\'s side: wife of ਚਾਚਾ)' },
    { topic: 'dad', front: 'ਭੂਆ', back: 'bhoo-aa — aunt (father\'s side: dad\'s sister)' },
    { topic: 'mum', front: 'ਨਾਨਾ ਜੀ', back: 'naa-naa jee — grandfather (mother\'s side: mum\'s father)' },
    { topic: 'mum', front: 'ਨਾਨੀ ਜੀ', back: 'naa-nee jee — grandmother (mother\'s side: mum\'s mother)' },
    { topic: 'mum', front: 'ਮਾਮਾ', back: 'maa-maa — uncle (mother\'s side: mum\'s brother)' },
    { topic: 'mum', front: 'ਮਾਮੀ', back: 'maa-mee — aunt (mother\'s side: wife of ਮਾਮਾ)' },
    { topic: 'mum', front: 'ਮਾਸੀ', back: 'maa-see — aunt (mother\'s side: mum\'s sister)' },
    { topic: 'mum', front: 'ਮਾਸੜ', back: 'maa-sar — uncle (mother\'s side: husband of ਮਾਸੀ)' },
    { topic: 'sent', front: 'ਇਹ ਮੇਰਾ ਭਰਾ ਹੈ।', back: 'ih me-raa bha-raa hai — This is my brother.\nਭਰਾ is male, so "my" = ਮੇਰਾ (me-raa).' },
    { topic: 'sent', front: 'ਇਹ ਮੇਰੀ ਮਾਸੀ ਹੈ।', back: 'ih me-ree maa-see hai — This is my aunt (mum\'s sister).\nਮਾਸੀ is female, so "my" = ਮੇਰੀ (me-ree).' },
    { topic: 'sent', front: 'ਇਹ ਮੇਰੇ ਦਾਦਾ ਜੀ ਹਨ।', back: 'ih me-re daa-daa jee han — This is my grandfather (father\'s side).\nFor respect, use ਮੇਰੇ (me-re) and ਹਨ (han) instead of ਹੈ.' }
  ],

  quiz: [
    { topic: 'dad', q: 'ਚਾਚਾ is your…', options: ['Mother\'s brother', 'Father\'s younger brother', 'Father\'s elder brother', 'Mother\'s sister'], answer: 1, explain: 'ਚਾਚਾ (chaa-chaa) = father\'s side, dad\'s younger brother.' },
    { topic: 'dad', q: 'ਤਾਇਆ is your…', options: ['Father\'s elder brother', 'Father\'s younger brother', 'Mother\'s brother', 'Grandfather'], answer: 0, explain: 'ਤਾਇਆ (taa-i-aa) = father\'s side, dad\'s elder brother. His wife is ਤਾਈ (taa-ee).' },
    { topic: 'dad', q: 'Your dad\'s sister is your…', options: ['ਮਾਸੀ', 'ਮਾਮੀ', 'ਭੂਆ', 'ਚਾਚੀ'], answer: 2, explain: 'ਭੂਆ (bhoo-aa) = father\'s side, dad\'s sister.' },
    { topic: 'dad', q: 'Your father\'s mother is your…', options: ['ਨਾਨੀ', 'ਮਾਸੀ', 'ਤਾਈ', 'ਦਾਦੀ'], answer: 3, explain: 'ਦਾਦੀ (daa-dee) = father\'s side grandmother. ਨਾਨੀ is mother\'s side.' },
    { topic: 'mum', q: 'ਮਾਮਾ is your…', options: ['Father\'s brother', 'Mother\'s brother', 'Mother\'s father', 'Sister\'s husband'], answer: 1, explain: 'ਮਾਮਾ (maa-maa) = mother\'s side, mum\'s brother.' },
    { topic: 'mum', q: 'Your mum\'s sister is your…', options: ['ਮਾਸੀ', 'ਭੂਆ', 'ਚਾਚੀ', 'ਤਾਈ'], answer: 0, explain: 'ਮਾਸੀ (maa-see) = mother\'s side, mum\'s sister.' },
    { topic: 'mum', q: 'ਮਾਮੀ is…', options: ['Mum\'s sister', 'Dad\'s sister', 'Wife of ਮਾਮਾ', 'Mum\'s mother'], answer: 2, explain: 'ਮਾਮੀ (maa-mee) = mother\'s side, wife of your ਮਾਮਾ.' },
    { topic: 'mum', q: 'Your mother\'s father is your…', options: ['ਦਾਦਾ', 'ਤਾਇਆ', 'ਚਾਚਾ', 'ਨਾਨਾ'], answer: 3, explain: 'ਨਾਨਾ (naa-naa) = mother\'s side grandfather.' },
    { topic: 'home', q: 'What does ਧੀ mean?', options: ['Son', 'Daughter', 'Wife', 'Sister'], answer: 1, explain: 'ਧੀ (dhee) = daughter. ਪੁੱਤਰ (put-tar) = son.' },
    { topic: 'home', q: 'Which word means "son"?', options: ['ਪੁੱਤਰ', 'ਪਤੀ', 'ਭਰਾ', 'ਬੱਚਾ'], answer: 0, explain: 'ਪੁੱਤਰ (put-tar) = son.' },
    { topic: 'home', q: 'What does ਪਤਨੀ mean?', options: ['Husband', 'Aunt', 'Wife', 'Grandmother'], answer: 2, explain: 'ਪਤਨੀ (pat-nee) = wife. ਪਤੀ (pa-tee) = husband.' },
    { topic: 'home', q: 'What does ਰਿਸ਼ਤੇਦਾਰ mean?', options: ['Friend', 'Neighbour', 'Teacher', 'Relative'], answer: 3, explain: 'ਰਿਸ਼ਤੇਦਾਰ (rish-te-daar) = relative.' },
    { topic: 'home', q: 'How do you say ਬੱਚਾ?', options: ['bach-chaa', 'ba-chaa', 'bhoo-aa', 'bach-che'], answer: 0, explain: 'ਬੱਚਾ (bach-chaa) = child. The ੱ doubles the "ch".' },
    { topic: 'sent', q: 'Which sentence means "This is my sister"?', options: ['ਇਹ ਮੇਰਾ ਭੈਣ ਹੈ।', 'ਇਹ ਮੇਰੀ ਭੈਣ ਹੈ।', 'ਇਹ ਮੇਰਾ ਭਰਾ ਹੈ।', 'ਇਹ ਮੇਰੀ ਮਾਸੀ ਹੈ।'], answer: 1, explain: 'ਇਹ ਮੇਰੀ ਭੈਣ ਹੈ (ih me-ree bhain hai). ਭੈਣ is female, so use ਮੇਰੀ.' },
    { topic: 'sent', q: 'What does ਇਹ ਮੇਰੇ ਨਾਨਾ ਜੀ ਹਨ। mean?', options: ['This is my grandfather (mother\'s side).', 'This is my grandfather (father\'s side).', 'This is my uncle.', 'This is my father.'], answer: 0, explain: 'ih me-re naa-naa jee han = this is my grandfather (mum\'s father). ਮੇਰੇ … ਹਨ shows respect.' }
  ],

  match: [
    { title: 'Father\'s Side', pairs: [
      ['ਦਾਦਾ', 'Dad\'s father'], ['ਦਾਦੀ', 'Dad\'s mother'], ['ਤਾਇਆ', 'Dad\'s elder brother'],
      ['ਚਾਚਾ', 'Dad\'s younger brother'], ['ਭੂਆ', 'Dad\'s sister'], ['ਚਾਚੀ', 'Wife of dad\'s younger brother']
    ] },
    { title: 'Mother\'s Side', pairs: [
      ['ਨਾਨਾ', 'Mum\'s father'], ['ਨਾਨੀ', 'Mum\'s mother'], ['ਮਾਮਾ', 'Mum\'s brother'],
      ['ਮਾਮੀ', 'Wife of mum\'s brother'], ['ਮਾਸੀ', 'Mum\'s sister'], ['ਮਾਸੜ', 'Husband of mum\'s sister']
    ] },
    { title: 'At Home', pairs: [
      ['ਪੁੱਤਰ', 'Son'], ['ਧੀ', 'Daughter'], ['ਪਤੀ', 'Husband'],
      ['ਪਤਨੀ', 'Wife'], ['ਬੱਚਾ', 'Child'], ['ਰਿਸ਼ਤੇਦਾਰ', 'Relative']
    ] },
    { title: 'Say It Aloud', pairs: [
      ['ਮਾਤਾ ਜੀ', 'maa-taa jee'], ['ਪਿਤਾ ਜੀ', 'pi-taa jee'], ['ਭਰਾ', 'bha-raa'],
      ['ਭੈਣ', 'bhain'], ['ਤਾਇਆ', 'taa-i-aa'], ['ਭੂਆ', 'bhoo-aa']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b07',
  level: 'Basic',
  number: 7,
  title: 'Numbers & Colours · ਗਿਣਤੀ ਅਤੇ ਰੰਗ',
  icon: '🎨',

  topics: {
    ten: 'Numbers 1–10',
    teen: 'Numbers 11–20',
    big: 'Big Numbers',
    colour: 'Colours'
  },

  summary: [
    'ਗਿਣਤੀ (gin-tee) = counting, ਰੰਗ (rang) = colour.',
    'Punjabi has its own digits: ੧ ੨ ੩ ੪ ੫ ੬ ੭ ੮ ੯ ੦. They work just like 1–9 and 0, so ੧੫ = 15.',
    'Numbers 11–18 mostly end in -raan: ਗਿਆਰਾਂ (11), ਬਾਰਾਂ (12), ਤੇਰਾਂ (13) … ਅਠਾਰਾਂ (18). Then ਉੱਨੀ (19) and ਵੀਹ (20). Learn them like songs — they don\'t follow a neat rule.',
    'Big numbers: ਤੀਹ (30), ਚਾਲੀ (40), ਪੰਜਾਹ (50), ਸੌ (100), ਹਜ਼ਾਰ (1000).',
    'Colours ending in -aa change for female words: ਨੀਲਾ ਘਰ (blue house) but ਨੀਲੀ ਕਿਤਾਬ (blue book). Colours like ਲਾਲ and ਗੁਲਾਬੀ never change.'
  ],

  flashcards: [
    { topic: 'teen', front: 'ਗਿਆਰਾਂ', back: 'gi-aa-raan — eleven (11)\nNumeral: ੧੧' },
    { topic: 'teen', front: 'ਬਾਰਾਂ', back: 'baa-raan — twelve (12)\nNumeral: ੧੨' },
    { topic: 'teen', front: 'ਤੇਰਾਂ', back: 'te-raan — thirteen (13)\nNumeral: ੧੩' },
    { topic: 'teen', front: 'ਚੌਦਾਂ', back: 'chau-daan — fourteen (14)\nNumeral: ੧੪' },
    { topic: 'teen', front: 'ਪੰਦਰਾਂ', back: 'pan-da-raan — fifteen (15)\nNumeral: ੧੫' },
    { topic: 'teen', front: 'ਸੋਲਾਂ', back: 'so-laan — sixteen (16)\nNumeral: ੧੬' },
    { topic: 'teen', front: 'ਸਤਾਰਾਂ', back: 'sa-taa-raan — seventeen (17)\nNumeral: ੧੭' },
    { topic: 'teen', front: 'ਅਠਾਰਾਂ', back: 'a-thaa-raan — eighteen (18)\nNumeral: ੧੮' },
    { topic: 'teen', front: 'ਉੱਨੀ', back: 'un-nee — nineteen (19)\nNumeral: ੧੯' },
    { topic: 'teen', front: 'ਵੀਹ', back: 'veeh — twenty (20)\nNumeral: ੨੦' },
    { topic: 'big', front: 'ਤੀਹ', back: 'teeh — thirty (30)\nNumeral: ੩੦' },
    { topic: 'big', front: 'ਚਾਲੀ', back: 'chaa-lee — forty (40)\nNumeral: ੪੦' },
    { topic: 'big', front: 'ਪੰਜਾਹ', back: 'pan-jaah — fifty (50)\nNumeral: ੫੦' },
    { topic: 'big', front: 'ਸੌ', back: 'sau — hundred (100)\nNumeral: ੧੦੦' },
    { topic: 'big', front: 'ਹਜ਼ਾਰ', back: 'ha-zaar — thousand (1000)\nNumeral: ੧੦੦੦' },
    { topic: 'ten', front: 'ਇੱਕ, ਦੋ, ਤਿੰਨ, ਚਾਰ, ਪੰਜ', back: 'ikk, do, tinn, chaar, panj — 1 2 3 4 5\nNumerals: ੧ ੨ ੩ ੪ ੫' },
    { topic: 'ten', front: 'ਛੇ, ਸੱਤ, ਅੱਠ, ਨੌਂ, ਦਸ', back: 'chhe, satt, atth, naun, das — 6 7 8 9 10\nNumerals: ੬ ੭ ੮ ੯ ੧੦' },
    { topic: 'colour', front: 'ਗੁਲਾਬੀ', back: 'gu-laa-bee — pink\nFrom ਗੁਲਾਬ (gu-laab) = rose.' },
    { topic: 'colour', front: 'ਸੰਤਰੀ', back: 'san-ta-ree — orange (colour)\nFrom ਸੰਤਰਾ (san-ta-raa) = orange (fruit).' },
    { topic: 'colour', front: 'ਭੂਰਾ', back: 'bhoo-raa — brown' },
    { topic: 'colour', front: 'ਜਾਮਣੀ', back: 'jaa-ma-nee — purple\nThe colour of the ਜਾਮਣ (jaa-man) fruit.' },
    { topic: 'colour', front: 'ਸਲੇਟੀ', back: 'sa-le-tee — grey\nThe colour of slate (ਸਲੇਟ).' },
    { topic: 'colour', front: 'ਅਸਮਾਨੀ', back: 'as-maa-nee — sky blue\nFrom ਅਸਮਾਨ (as-maan) = sky.' },
    { topic: 'colour', front: 'ਰੰਗ', back: 'rang — colour\nਤੁਹਾਡਾ ਮਨਪਸੰਦ ਰੰਗ ਕਿਹੜਾ ਹੈ? (tu-haa-daa man-pa-sand rang kih-raa hai?) — What is your favourite colour?' },
    { topic: 'colour', front: 'ਨੀਲੀ ਕਿਤਾਬ', back: 'nee-lee ki-taab — blue book\nਕਿਤਾਬ is female, so ਨੀਲਾ becomes ਨੀਲੀ.' },
    { topic: 'colour', front: 'ਲਾਲ ਫੁੱਲ', back: 'laal phull — red flower\nਲਾਲ never changes its ending.' }
  ],

  quiz: [
    { topic: 'teen', q: 'ਬਾਰਾਂ is the number…', options: ['11', '12', '13', '20'], answer: 1, explain: 'ਬਾਰਾਂ (baa-raan) = 12 = ੧੨.' },
    { topic: 'teen', q: 'Which word means 15?', options: ['ਪੰਜ', 'ਪੰਜਾਹ', 'ਪੰਦਰਾਂ', 'ਤੇਰਾਂ'], answer: 2, explain: 'ਪੰਦਰਾਂ (pan-da-raan) = 15. ਪੰਜ = 5, ਪੰਜਾਹ = 50.' },
    { topic: 'teen', q: 'ਉੱਨੀ is the number…', options: ['9', '19', '90', '11'], answer: 1, explain: 'ਉੱਨੀ (un-nee) = 19 = ੧੯.' },
    { topic: 'teen', q: 'How do you say ਚੌਦਾਂ?', options: ['chau-daan', 'chaa-lee', 'chaar', 'cho-daa'], answer: 0, explain: 'ਚੌਦਾਂ (chau-daan) = 14.' },
    { topic: 'teen', q: 'Which word means 20?', options: ['ਤੀਹ', 'ਦਸ', 'ਦੋ', 'ਵੀਹ'], answer: 3, explain: 'ਵੀਹ (veeh) = 20. ਤੀਹ (teeh) = 30.' },
    { topic: 'teen', q: 'The Punjabi numeral ੧੮ is…', options: ['12', '15', '18', '81'], answer: 2, explain: '੧੮ = 18 = ਅਠਾਰਾਂ (a-thaa-raan).' },
    { topic: 'big', q: 'ਸੌ is the number…', options: ['100', '1000', '50', '7'], answer: 0, explain: 'ਸੌ (sau) = 100. ਸੱਤ (satt) = 7 — listen carefully!' },
    { topic: 'big', q: 'Which word means 1000?', options: ['ਸੌ', 'ਹਜ਼ਾਰ', 'ਚਾਲੀ', 'ਪੰਜਾਹ'], answer: 1, explain: 'ਹਜ਼ਾਰ (ha-zaar) = 1000.' },
    { topic: 'big', q: 'ਚਾਲੀ is the number…', options: ['4', '14', '30', '40'], answer: 3, explain: 'ਚਾਲੀ (chaa-lee) = 40. ਚਾਰ (chaar) = 4.' },
    { topic: 'ten', q: 'The Punjabi numeral ੯ is…', options: ['6', '9', '3', '1'], answer: 1, explain: '੯ = 9 = ਨੌਂ (naun).' },
    { topic: 'colour', q: 'What colour is ਗੁਲਾਬੀ?', options: ['Purple', 'Orange', 'Pink', 'Brown'], answer: 2, explain: 'ਗੁਲਾਬੀ (gu-laa-bee) = pink, like a rose (ਗੁਲਾਬ).' },
    { topic: 'colour', q: 'Which word means "grey"?', options: ['ਸਲੇਟੀ', 'ਭੂਰਾ', 'ਜਾਮਣੀ', 'ਸੰਤਰੀ'], answer: 0, explain: 'ਸਲੇਟੀ (sa-le-tee) = grey.' },
    { topic: 'colour', q: 'What colour is ਜਾਮਣੀ?', options: ['Sky blue', 'Grey', 'Brown', 'Purple'], answer: 3, explain: 'ਜਾਮਣੀ (jaa-ma-nee) = purple.' },
    { topic: 'colour', q: 'What does ਅਸਮਾਨੀ mean?', options: ['Dark blue', 'Sky blue', 'White', 'Green'], answer: 1, explain: 'ਅਸਮਾਨੀ (as-maa-nee) = sky blue, from ਅਸਮਾਨ = sky.' },
    { topic: 'colour', q: 'ਕਿਤਾਬ (book) is a female word. How do you say "blue book"?', options: ['ਨੀਲਾ ਕਿਤਾਬ', 'ਨੀਲੇ ਕਿਤਾਬ', 'ਨੀਲੀ ਕਿਤਾਬ', 'ਨੀਲ ਕਿਤਾਬ'], answer: 2, explain: 'ਨੀਲੀ ਕਿਤਾਬ (nee-lee ki-taab). Colours ending in -aa change to -ee for female words.' },
    { topic: 'colour', q: 'How do you say ਭੂਰਾ?', options: ['bhoo-aa', 'bha-raa', 'bhoo-raa', 'hoo-raa'], answer: 2, explain: 'ਭੂਰਾ (bhoo-raa) = brown. Careful: ਭਰਾ (bha-raa) = brother!' }
  ],

  match: [
    { title: 'Numbers 11–20', pairs: [
      ['ਗਿਆਰਾਂ', '11'], ['ਤੇਰਾਂ', '13'], ['ਸੋਲਾਂ', '16'], ['ਸਤਾਰਾਂ', '17'], ['ਉੱਨੀ', '19'], ['ਵੀਹ', '20']
    ] },
    { title: 'Big Numbers', pairs: [
      ['ਦਸ', '10'], ['ਤੀਹ', '30'], ['ਚਾਲੀ', '40'], ['ਪੰਜਾਹ', '50'], ['ਸੌ', '100'], ['ਹਜ਼ਾਰ', '1000']
    ] },
    { title: 'Punjabi Digits', pairs: [
      ['੩', '3'], ['੬', '6'], ['੮', '8'], ['੧੨', '12'], ['੧੪', '14'], ['੨੦', '20']
    ] },
    { title: 'Colours', pairs: [
      ['ਗੁਲਾਬੀ', 'Pink'], ['ਸੰਤਰੀ', 'Orange'], ['ਭੂਰਾ', 'Brown'], ['ਜਾਮਣੀ', 'Purple'], ['ਸਲੇਟੀ', 'Grey'], ['ਅਸਮਾਨੀ', 'Sky blue']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b08',
  level: 'Basic',
  number: 8,
  title: 'My Body · ਸਰੀਰ',
  icon: '🧍',

  topics: {
    face: 'Head and Face',
    body: 'Arms, Legs and Body',
    sent: 'Body Sentences'
  },

  summary: [
    'ਸਰੀਰ (sa-reer) = body. Tap 🔊 on each word and point to that part of your body as you say it.',
    'Head and face: ਸਿਰ (sir) head, ਵਾਲ (vaal) hair, ਮੱਥਾ (mat-thaa) forehead, ਅੱਖ (akkh) eye, ਕੰਨ (kann) ear, ਨੱਕ (nakk) nose, ਮੂੰਹ (moonh) mouth.',
    'Arms and legs: ਬਾਂਹ (baanh) arm, ਹੱਥ (hatth) hand, ਉਂਗਲ (un-gal) finger, ਲੱਤ (latt) leg, ਗੋਡਾ (go-daa) knee, ਪੈਰ (pair) foot.',
    'Many body words have ੱ (addak): ਅੱਖ, ਨੱਕ, ਹੱਥ, ਲੱਤ, ਪਿੱਠ. Say the doubled sound strongly: hatth, pitth.',
    'Two eyes: ਅੱਖ → ਅੱਖਾਂ (akkhaan). Words like ਕੰਨ, ਦੰਦ, ਹੱਥ, ਪੈਰ stay the same for "two".',
    'If something hurts: ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ। (me-re sir vich dard hai) = I have a headache. Swap ਸਿਰ for any body part!'
  ],

  flashcards: [
    // head and face
    { topic: 'face', front: 'ਸਰੀਰ', back: 'sa-reer — body' },
    { topic: 'face', front: 'ਸਿਰ', back: 'sir — head' },
    { topic: 'face', front: 'ਵਾਲ', back: 'vaal — hair\nਮੇਰੇ ਵਾਲ ਕਾਲੇ ਹਨ। (me-re vaal kaa-le han) — My hair is black.' },
    { topic: 'face', front: 'ਮੱਥਾ', back: 'mat-thaa — forehead' },
    { topic: 'face', front: 'ਚਿਹਰਾ', back: 'chih-raa — face' },
    { topic: 'face', front: 'ਅੱਖ', back: 'akkh — eye\nTwo eyes: ਅੱਖਾਂ (akkhaan)' },
    { topic: 'face', front: 'ਕੰਨ', back: 'kann — ear' },
    { topic: 'face', front: 'ਨੱਕ', back: 'nakk — nose' },
    { topic: 'face', front: 'ਮੂੰਹ', back: 'moonh — mouth' },
    { topic: 'face', front: 'ਦੰਦ', back: 'dand — tooth / teeth' },
    { topic: 'face', front: 'ਜੀਭ', back: 'jeebh — tongue' },
    { topic: 'face', front: 'ਬੁੱਲ੍ਹ', back: 'bullh — lip / lips\nThe small ੍ਹ under ਲ adds a breathy "h" to the ਲ.' },
    { topic: 'face', front: 'ਗਰਦਨ', back: 'gar-dan — neck\nAnother word: ਧੌਣ (dhaun) — neck' },
    // arms, legs, body
    { topic: 'body', front: 'ਮੋਢਾ', back: 'mo-dhaa — shoulder' },
    { topic: 'body', front: 'ਬਾਂਹ', back: 'baanh — arm' },
    { topic: 'body', front: 'ਹੱਥ', back: 'hatth — hand' },
    { topic: 'body', front: 'ਉਂਗਲ', back: 'un-gal — finger' },
    { topic: 'body', front: 'ਪੇਟ', back: 'pet — stomach / tummy' },
    { topic: 'body', front: 'ਪਿੱਠ', back: 'pitth — back (of the body)' },
    { topic: 'body', front: 'ਲੱਤ', back: 'latt — leg' },
    { topic: 'body', front: 'ਗੋਡਾ', back: 'go-daa — knee' },
    { topic: 'body', front: 'ਪੈਰ', back: 'pair — foot' },
    { topic: 'body', front: 'ਦਿਲ', back: 'dil — heart' },
    // sentences
    { topic: 'sent', front: 'ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ।', back: 'me-re sir vich dard hai — I have a headache.\n(word by word: my head in pain is)\nਦਰਦ (dard) = pain' },
    { topic: 'sent', front: 'ਮੇਰੇ ਪੇਟ ਵਿੱਚ ਦਰਦ ਹੈ।', back: 'me-re pet vich dard hai — I have a stomach ache.' },
    { topic: 'sent', front: 'ਹੱਥ ਧੋਵੋ।', back: 'hatth dho-vo — Wash your hands.' },
    { topic: 'sent', front: 'ਮੇਰੀਆਂ ਦੋ ਅੱਖਾਂ ਹਨ।', back: 'me-ree-aan do akkhaan han — I have two eyes.\nਅੱਖ is feminine, so "my" becomes ਮੇਰੀਆਂ.' }
  ],

  quiz: [
    { topic: 'face', q: 'What does ਸਿਰ mean?', options: ['Head', 'Hair', 'Hand', 'Heart'], answer: 0, explain: 'ਸਿਰ (sir) = head. ਵਾਲ (vaal) = hair.' },
    { topic: 'face', q: 'What does ਦੰਦ mean?', options: ['Tongue', 'Lips', 'Teeth', 'Neck'], answer: 2, explain: 'ਦੰਦ (dand) = tooth / teeth. ਜੀਭ (jeebh) = tongue.' },
    { topic: 'face', q: 'Which word means "nose"?', options: ['ਕੰਨ', 'ਨੱਕ', 'ਮੂੰਹ', 'ਅੱਖ'], answer: 1, explain: 'ਨੱਕ (nakk) = nose.' },
    { topic: 'face', q: 'How do you say ਜੀਭ?', options: ['jibh', 'jeeb', 'jeebh', 'jaibh'], answer: 2, explain: 'ਜੀਭ = jeebh (tongue). ੀ is a long "ee", and ਭ has a puff of air: bh.' },
    { topic: 'face', q: 'What does ਮੱਥਾ mean?', options: ['Cheek', 'Forehead', 'Chin', 'Face'], answer: 1, explain: 'ਮੱਥਾ (mat-thaa) = forehead.' },
    { topic: 'face', q: 'ਗਰਦਨ and ਧੌਣ both mean…', options: ['Shoulder', 'Back', 'Knee', 'Neck'], answer: 3, explain: 'ਗਰਦਨ (gar-dan) and ਧੌਣ (dhaun) both mean neck.' },
    { topic: 'body', q: 'What does ਗੋਡਾ mean?', options: ['Knee', 'Foot', 'Leg', 'Finger'], answer: 0, explain: 'ਗੋਡਾ (go-daa) = knee.' },
    { topic: 'body', q: 'Which word means "finger"?', options: ['ਹੱਥ', 'ਬਾਂਹ', 'ਉਂਗਲ', 'ਮੋਢਾ'], answer: 2, explain: 'ਉਂਗਲ (un-gal) = finger.' },
    { topic: 'body', q: 'What does ਪਿੱਠ mean?', options: ['Stomach', 'Back', 'Chest', 'Arm'], answer: 1, explain: 'ਪਿੱਠ (pitth) = back. ਪੇਟ (pet) = stomach.' },
    { topic: 'body', q: 'How do you say ਬਾਂਹ?', options: ['baanh', 'banh', 'baah', 'bonh'], answer: 0, explain: 'ਬਾਂਹ = baanh (arm). ਾ is a long "aa" and ਂ adds a soft "n".' },
    { topic: 'body', q: 'Which word means "heart"?', options: ['ਦਿਲ', 'ਦੰਦ', 'ਪੇਟ', 'ਪੈਰ'], answer: 0, explain: 'ਦਿਲ (dil) = heart.' },
    { topic: 'body', q: 'What does ਮੋਢਾ mean?', options: ['Elbow', 'Knee', 'Neck', 'Shoulder'], answer: 3, explain: 'ਮੋਢਾ (mo-dhaa) = shoulder.' },
    { topic: 'sent', q: 'What does ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ। mean?', options: ['My head is big.', 'I have a headache.', 'I wash my hair.', 'My head is cold.'], answer: 1, explain: 'ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ। (me-re sir vich dard hai) = I have a headache. ਦਰਦ = pain.' },
    { topic: 'sent', q: 'What does ਹੱਥ ਧੋਵੋ। mean?', options: ['Clap your hands.', 'Raise your hand.', 'Wash your hands.', 'Show your hands.'], answer: 2, explain: 'ਹੱਥ ਧੋਵੋ। (hatth dho-vo) = Wash your hands.' },
    { topic: 'sent', q: 'How do you say "I have a stomach ache"?', options: ['ਮੇਰੇ ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੈ।', 'ਮੇਰੇ ਪੈਰ ਵਿੱਚ ਦਰਦ ਹੈ।', 'ਮੇਰੇ ਦੰਦ ਵਿੱਚ ਦਰਦ ਹੈ।', 'ਮੇਰੇ ਪੇਟ ਵਿੱਚ ਦਰਦ ਹੈ।'], answer: 3, explain: 'ਮੇਰੇ ਪੇਟ ਵਿੱਚ ਦਰਦ ਹੈ। (me-re pet vich dard hai). ਪੇਟ (pet) = stomach.' }
  ],

  match: [
    { title: 'My Face', pairs: [
      ['ਵਾਲ', 'Hair'], ['ਮੱਥਾ', 'Forehead'], ['ਅੱਖ', 'Eye'], ['ਕੰਨ', 'Ear'], ['ਬੁੱਲ੍ਹ', 'Lips'], ['ਜੀਭ', 'Tongue']
    ] },
    { title: 'Arms and Legs', pairs: [
      ['ਮੋਢਾ', 'Shoulder'], ['ਬਾਂਹ', 'Arm'], ['ਉਂਗਲ', 'Finger'], ['ਲੱਤ', 'Leg'], ['ਗੋਡਾ', 'Knee'], ['ਪੈਰ', 'Foot']
    ] },
    { title: 'Say It Right', pairs: [
      ['ਸਿਰ', 'sir'], ['ਨੱਕ', 'nakk'], ['ਮੂੰਹ', 'moonh'], ['ਦੰਦ', 'dand'], ['ਪਿੱਠ', 'pitth'], ['ਦਿਲ', 'dil']
    ] },
    { title: 'Body Mix', pairs: [
      ['ਸਰੀਰ', 'Body'], ['ਚਿਹਰਾ', 'Face'], ['ਗਰਦਨ', 'Neck'], ['ਪੇਟ', 'Stomach'], ['ਹੱਥ', 'Hand'], ['ਦਰਦ', 'Pain']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b09',
  level: 'Basic',
  number: 9,
  title: 'Food & Drinks · ਖਾਣਾ-ਪੀਣਾ',
  icon: '🍛',

  topics: {
    meal: 'Meals and Drinks',
    fruit: 'Fruits and Vegetables',
    taste: 'Tastes',
    sent: 'Food Sentences'
  },

  summary: [
    'ਖਾਣਾ (khaa-naa) = food / to eat. ਪੀਣਾ (pee-naa) = to drink. ਖਾਣਾ-ਪੀਣਾ = food and drink.',
    'A Punjabi meal: ਰੋਟੀ (ro-tee), ਦਾਲ (daal), ਚੌਲ (chaul) rice, ਸਬਜ਼ੀ (sab-zee) cooked vegetables, ਦਹੀਂ (da-heen) yoghurt.',
    'Drinks: ਪਾਣੀ (paa-nee) water, ਦੁੱਧ (duddh) milk, ਚਾਹ (chaah) tea, ਲੱਸੀ (las-see) lassi.',
    'Tastes: ਮਿੱਠਾ (mit-thaa) sweet, ਖੱਟਾ (khat-taa) sour, ਨਮਕੀਨ (nam-keen) salty, ਕੌੜਾ (kau-raa) bitter.',
    'Taste words change with gender: ਮਿੱਠਾ ਅੰਬ (sweet mango) but ਮਿੱਠੀ ਚਾਹ (sweet tea), because ਚਾਹ is feminine.',
    'Hungry and thirsty: ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ। (I am hungry), ਮੈਨੂੰ ਪਿਆਸ ਲੱਗੀ ਹੈ। (I am thirsty).',
    'As a girl you say ਮੈਂ ਖਾਂਦੀ ਹਾਂ (main khaan-dee haan) = I eat; a boy says ਮੈਂ ਖਾਂਦਾ ਹਾਂ.'
  ],

  flashcards: [
    // meals and drinks
    { topic: 'meal', front: 'ਖਾਣਾ', back: 'khaa-naa — food / to eat' },
    { topic: 'meal', front: 'ਦਾਲ', back: 'daal — lentils (dal)' },
    { topic: 'meal', front: 'ਚੌਲ', back: 'chaul — rice' },
    { topic: 'meal', front: 'ਸਬਜ਼ੀ', back: 'sab-zee — vegetable / cooked vegetable dish' },
    { topic: 'meal', front: 'ਦਹੀਂ', back: 'da-heen — yoghurt / curd' },
    { topic: 'meal', front: 'ਲੱਸੀ', back: 'las-see — lassi (yoghurt drink)' },
    { topic: 'meal', front: 'ਚਾਹ', back: 'chaah — tea' },
    { topic: 'meal', front: 'ਖੰਡ', back: 'khand — sugar' },
    { topic: 'meal', front: 'ਲੂਣ', back: 'loon — salt\n(ਨਮਕ, na-mak, also means salt)' },
    { topic: 'meal', front: 'ਮੱਖਣ', back: 'makkh-an — butter' },
    // fruits and vegetables
    { topic: 'fruit', front: 'ਸੇਬ', back: 'seb — apple' },
    { topic: 'fruit', front: 'ਕੇਲਾ', back: 'ke-laa — banana' },
    { topic: 'fruit', front: 'ਅੰਬ', back: 'amb — mango' },
    { topic: 'fruit', front: 'ਸੰਤਰਾ', back: 'san-traa — orange (fruit)' },
    { topic: 'fruit', front: 'ਅੰਗੂਰ', back: 'an-goor — grapes' },
    { topic: 'fruit', front: 'ਆਲੂ', back: 'aa-loo — potato' },
    { topic: 'fruit', front: 'ਪਿਆਜ਼', back: 'pi-aaz — onion' },
    { topic: 'fruit', front: 'ਟਮਾਟਰ', back: 'ta-maa-tar — tomato' },
    { topic: 'fruit', front: 'ਗਾਜਰ', back: 'gaa-jar — carrot' },
    // tastes
    { topic: 'taste', front: 'ਮਿੱਠਾ', back: 'mit-thaa — sweet\nWith a feminine word: ਮਿੱਠੀ (mit-thee) — ਮਿੱਠੀ ਲੱਸੀ, sweet lassi' },
    { topic: 'taste', front: 'ਖੱਟਾ', back: 'khat-taa — sour' },
    { topic: 'taste', front: 'ਨਮਕੀਨ', back: 'nam-keen — salty' },
    { topic: 'taste', front: 'ਕੌੜਾ', back: 'kau-raa — bitter' },
    // sentences
    { topic: 'sent', front: 'ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ।', back: 'mai-noon bhukkh lag-gee hai — I am hungry.\nਭੁੱਖ (bhukkh) = hunger' },
    { topic: 'sent', front: 'ਮੈਨੂੰ ਪਿਆਸ ਲੱਗੀ ਹੈ।', back: 'mai-noon pi-aas lag-gee hai — I am thirsty.\nਪਿਆਸ (pi-aas) = thirst' },
    { topic: 'sent', front: 'ਖਾਣਾ ਸੁਆਦ ਹੈ।', back: 'khaa-naa su-aad hai — The food is tasty.' }
  ],

  quiz: [
    { topic: 'meal', q: 'What does ਚੌਲ mean?', options: ['Bread', 'Rice', 'Lentils', 'Tea'], answer: 1, explain: 'ਚੌਲ (chaul) = rice.' },
    { topic: 'meal', q: 'Which word means "tea"?', options: ['ਚਾਹ', 'ਲੱਸੀ', 'ਦੁੱਧ', 'ਪਾਣੀ'], answer: 0, explain: 'ਚਾਹ (chaah) = tea.' },
    { topic: 'meal', q: 'What does ਦਹੀਂ mean?', options: ['Butter', 'Milk', 'Yoghurt', 'Sugar'], answer: 2, explain: 'ਦਹੀਂ (da-heen) = yoghurt / curd.' },
    { topic: 'meal', q: 'What does ਲੂਣ mean?', options: ['Sugar', 'Butter', 'Rice', 'Salt'], answer: 3, explain: 'ਲੂਣ (loon) = salt. ਖੰਡ (khand) = sugar.' },
    { topic: 'meal', q: 'How do you say ਸਬਜ਼ੀ?', options: ['sab-jee', 'sab-zee', 'sab-zi', 'sub-zai'], answer: 1, explain: 'ਸਬਜ਼ੀ = sab-zee (vegetable dish). ਜ਼ with a dot is "z".' },
    { topic: 'fruit', q: 'What does ਅੰਬ mean?', options: ['Apple', 'Orange', 'Mango', 'Grapes'], answer: 2, explain: 'ਅੰਬ (amb) = mango.' },
    { topic: 'fruit', q: 'Which word means "banana"?', options: ['ਸੇਬ', 'ਕੇਲਾ', 'ਸੰਤਰਾ', 'ਅੰਗੂਰ'], answer: 1, explain: 'ਕੇਲਾ (ke-laa) = banana.' },
    { topic: 'fruit', q: 'What does ਪਿਆਜ਼ mean?', options: ['Onion', 'Potato', 'Carrot', 'Tomato'], answer: 0, explain: 'ਪਿਆਜ਼ (pi-aaz) = onion.' },
    { topic: 'fruit', q: 'Which word means "carrot"?', options: ['ਆਲੂ', 'ਟਮਾਟਰ', 'ਪਿਆਜ਼', 'ਗਾਜਰ'], answer: 3, explain: 'ਗਾਜਰ (gaa-jar) = carrot.' },
    { topic: 'taste', q: 'A lemon tastes… which word?', options: ['ਮਿੱਠਾ', 'ਖੱਟਾ', 'ਕੌੜਾ', 'ਨਮਕੀਨ'], answer: 1, explain: 'ਖੱਟਾ (khat-taa) = sour.' },
    { topic: 'taste', q: 'What does ਕੌੜਾ mean?', options: ['Sweet', 'Salty', 'Bitter', 'Sour'], answer: 2, explain: 'ਕੌੜਾ (kau-raa) = bitter.' },
    { topic: 'taste', q: 'ਚਾਹ is feminine. "Sweet tea" is…', options: ['ਮਿੱਠਾ ਚਾਹ', 'ਮਿੱਠੇ ਚਾਹ', 'ਮਿੱਠੀ ਚਾਹ', 'ਮਿੱਠੀਆਂ ਚਾਹ'], answer: 2, explain: 'ਮਿੱਠੀ ਚਾਹ (mit-thee chaah) = sweet tea. With a feminine word, ਮਿੱਠਾ becomes ਮਿੱਠੀ.' },
    { topic: 'sent', q: 'What does ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ। mean?', options: ['I am thirsty.', 'I am full.', 'I am tired.', 'I am hungry.'], answer: 3, explain: 'ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ। (mai-noon bhukkh lag-gee hai) = I am hungry.' },
    { topic: 'sent', q: 'What does ਮੈਨੂੰ ਪਿਆਸ ਲੱਗੀ ਹੈ। mean?', options: ['I am thirsty.', 'I am hungry.', 'I like water.', 'I am cold.'], answer: 0, explain: 'ਮੈਨੂੰ ਪਿਆਸ ਲੱਗੀ ਹੈ। (mai-noon pi-aas lag-gee hai) = I am thirsty.' },
    { topic: 'sent', q: 'What does ਖਾਣਾ ਸੁਆਦ ਹੈ। mean?', options: ['The food is cold.', 'The food is ready.', 'The food is tasty.', 'The food is spicy.'], answer: 2, explain: 'ਖਾਣਾ ਸੁਆਦ ਹੈ। (khaa-naa su-aad hai) = The food is tasty.' },
    { topic: 'sent', q: 'A girl says "I eat roti". Which is right?', options: ['ਮੈਂ ਰੋਟੀ ਖਾਂਦਾ ਹਾਂ।', 'ਮੈਂ ਰੋਟੀ ਖਾਂਦੀ ਹਾਂ।', 'ਮੈਂ ਰੋਟੀ ਖਾਂਦੇ ਹਾਂ।', 'ਮੈਂ ਰੋਟੀ ਖਾਂਦੀਆਂ ਹਾਂ।'], answer: 1, explain: 'ਮੈਂ ਰੋਟੀ ਖਾਂਦੀ ਹਾਂ। (main ro-tee khaan-dee haan) = I eat roti. Girls use ਖਾਂਦੀ.' }
  ],

  match: [
    { title: 'Mealtime', pairs: [
      ['ਦਾਲ', 'Lentils'], ['ਚੌਲ', 'Rice'], ['ਸਬਜ਼ੀ', 'Vegetable dish'], ['ਦਹੀਂ', 'Yoghurt'], ['ਮੱਖਣ', 'Butter'], ['ਖੰਡ', 'Sugar']
    ] },
    { title: 'Fruits and Tea', pairs: [
      ['ਸੇਬ', 'Apple'], ['ਕੇਲਾ', 'Banana'], ['ਅੰਬ', 'Mango'], ['ਸੰਤਰਾ', 'Orange'], ['ਅੰਗੂਰ', 'Grapes'], ['ਚਾਹ', 'Tea']
    ] },
    { title: 'Vegetables and More', pairs: [
      ['ਆਲੂ', 'Potato'], ['ਪਿਆਜ਼', 'Onion'], ['ਟਮਾਟਰ', 'Tomato'], ['ਗਾਜਰ', 'Carrot'], ['ਲੂਣ', 'Salt'], ['ਲੱਸੀ', 'Lassi']
    ] },
    { title: 'Tastes and Feelings', pairs: [
      ['ਮਿੱਠਾ', 'Sweet'], ['ਖੱਟਾ', 'Sour'], ['ਨਮਕੀਨ', 'Salty'], ['ਕੌੜਾ', 'Bitter'], ['ਭੁੱਖ', 'Hunger'], ['ਪਿਆਸ', 'Thirst']
    ] }
  ],

  balance: [],
  written: []
});

SWG.addChapter('punjabi', {
  id: 'pa-b10',
  level: 'Basic',
  number: 10,
  title: 'Home & School · ਘਰ ਅਤੇ ਸਕੂਲ',
  icon: '🏫',

  topics: {
    home: 'At Home',
    school: 'At School',
    sent: 'Classroom Sentences'
  },

  summary: [
    'ਘਰ (ghar) = home, ਸਕੂਲ (sa-kool) = school. ਅਤੇ (a-te) = and.',
    'At home: ਕਮਰਾ (kam-raa) room, ਰਸੋਈ (ra-so-ee) kitchen, ਦਰਵਾਜ਼ਾ (dar-vaa-zaa) door, ਖਿੜਕੀ (khir-kee) window.',
    'Furniture: ਕੁਰਸੀ (kur-see) chair, ਮੇਜ਼ (mez) table, ਮੰਜਾ (man-jaa) cot, ਬਿਸਤਰਾ (bis-traa) bed, ਪੱਖਾ (pakh-khaa) fan.',
    'At school: ਜਮਾਤ (ja-maat) class, ਅਧਿਆਪਕ (a-dhi-aa-pak) teacher, ਕਾਪੀ (kaa-pee) notebook, ਬਸਤਾ (bas-taa) school bag.',
    'Boy or girl: ਵਿਦਿਆਰਥੀ (vi-di-aar-thee) = male student, ਵਿਦਿਆਰਥਣ (vi-di-aar-than) = female student. You are a ਵਿਦਿਆਰਥਣ!',
    'Useful in class: ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦੀ ਹਾਂ? = May I come in? (a boy says ਸਕਦਾ).'
  ],

  flashcards: [
    // home
    { topic: 'home', front: 'ਕਮਰਾ', back: 'kam-raa — room' },
    { topic: 'home', front: 'ਰਸੋਈ', back: 'ra-so-ee — kitchen' },
    { topic: 'home', front: 'ਦਰਵਾਜ਼ਾ', back: 'dar-vaa-zaa — door' },
    { topic: 'home', front: 'ਖਿੜਕੀ', back: 'khir-kee — window' },
    { topic: 'home', front: 'ਮੰਜਾ', back: 'man-jaa — cot (a traditional bed)' },
    { topic: 'home', front: 'ਬਿਸਤਰਾ', back: 'bis-traa — bed / bedding' },
    { topic: 'home', front: 'ਕੁਰਸੀ', back: 'kur-see — chair' },
    { topic: 'home', front: 'ਮੇਜ਼', back: 'mez — table' },
    { topic: 'home', front: 'ਪੱਖਾ', back: 'pakh-khaa — fan' },
    { topic: 'home', front: 'ਛੱਤ', back: 'chhatt — roof / ceiling' },
    // school
    { topic: 'school', front: 'ਜਮਾਤ', back: 'ja-maat — class / classroom' },
    { topic: 'school', front: 'ਅਧਿਆਪਕਾ', back: 'a-dhi-aa-pa-kaa — teacher (woman)\nA man teacher is ਅਧਿਆਪਕ (a-dhi-aa-pak).' },
    { topic: 'school', front: 'ਵਿਦਿਆਰਥੀ', back: 'vi-di-aar-thee — student (boy)' },
    { topic: 'school', front: 'ਵਿਦਿਆਰਥਣ', back: 'vi-di-aar-than — student (girl)' },
    { topic: 'school', front: 'ਕਾਪੀ', back: 'kaa-pee — notebook' },
    { topic: 'school', front: 'ਪੈਨਸਿਲ', back: 'pain-sil — pencil' },
    { topic: 'school', front: 'ਬਸਤਾ', back: 'bas-taa — school bag' },
    { topic: 'school', front: 'ਬਲੈਕਬੋਰਡ', back: 'blaik-bord — blackboard' },
    { topic: 'school', front: 'ਛੁੱਟੀ', back: 'chhut-tee — holiday / day off\nਅੱਜ ਛੁੱਟੀ ਹੈ। (ajj chhut-tee hai) — Today is a holiday.' },
    { topic: 'school', front: 'ਪ੍ਰੀਖਿਆ', back: 'pree-khi-aa — exam\nAnother word: ਇਮਤਿਹਾਨ (im-ti-haan) — exam' },
    { topic: 'school', front: 'ਸਵਾਲ', back: 'sa-vaal — question' },
    { topic: 'school', front: 'ਜਵਾਬ', back: 'ja-vaab — answer' },
    // sentences
    { topic: 'sent', front: 'ਮੈਂ ਸਕੂਲ ਜਾਂਦੀ ਹਾਂ।', back: 'main sa-kool jaan-dee haan — I go to school.\n(a girl says ਜਾਂਦੀ; a boy says ਜਾਂਦਾ)' },
    { topic: 'sent', front: 'ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦੀ ਹਾਂ?', back: 'kee main an-dar aa sak-dee haan? — May I come in?' },
    { topic: 'sent', front: 'ਆਪਣੀ ਕਿਤਾਬ ਖੋਲ੍ਹੋ।', back: 'aap-nee ki-taab kholh-o — Open your book.' },
    { topic: 'sent', front: 'ਬੈਠ ਜਾਓ।', back: 'baith jaa-o — Sit down.' }
  ],

  quiz: [
    { topic: 'home', q: 'What does ਰਸੋਈ mean?', options: ['Bedroom', 'Kitchen', 'Roof', 'Door'], answer: 1, explain: 'ਰਸੋਈ (ra-so-ee) = kitchen.' },
    { topic: 'home', q: 'Which word means "window"?', options: ['ਦਰਵਾਜ਼ਾ', 'ਕਮਰਾ', 'ਖਿੜਕੀ', 'ਛੱਤ'], answer: 2, explain: 'ਖਿੜਕੀ (khir-kee) = window. ਦਰਵਾਜ਼ਾ (dar-vaa-zaa) = door.' },
    { topic: 'home', q: 'What does ਕੁਰਸੀ mean?', options: ['Chair', 'Table', 'Bed', 'Fan'], answer: 0, explain: 'ਕੁਰਸੀ (kur-see) = chair.' },
    { topic: 'home', q: 'How do you say ਪੱਖਾ?', options: ['pa-khaa', 'paa-khaa', 'pakh-khaa', 'pan-khaa'], answer: 2, explain: 'ਪੱਖਾ = pakh-khaa (fan). The ੱ doubles the "kh" sound.' },
    { topic: 'home', q: 'What does ਮੇਜ਼ mean?', options: ['Door', 'Room', 'Window', 'Table'], answer: 3, explain: 'ਮੇਜ਼ (mez) = table.' },
    { topic: 'school', q: 'What does ਬਸਤਾ mean?', options: ['Notebook', 'School bag', 'Pencil', 'Blackboard'], answer: 1, explain: 'ਬਸਤਾ (bas-taa) = school bag.' },
    { topic: 'school', q: 'Which word means "notebook"?', options: ['ਕਾਪੀ', 'ਕਿਤਾਬ', 'ਪੈਨਸਿਲ', 'ਬਸਤਾ'], answer: 0, explain: 'ਕਾਪੀ (kaa-pee) = notebook. ਕਿਤਾਬ (ki-taab) = book.' },
    { topic: 'school', q: 'You are a girl student. Which word is you?', options: ['ਵਿਦਿਆਰਥੀ', 'ਅਧਿਆਪਕ', 'ਅਧਿਆਪਕਾ', 'ਵਿਦਿਆਰਥਣ'], answer: 3, explain: 'ਵਿਦਿਆਰਥਣ (vi-di-aar-than) = girl student. ਵਿਦਿਆਰਥੀ (vi-di-aar-thee) = boy student.' },
    { topic: 'school', q: 'What does ਜਮਾਤ mean?', options: ['Class', 'Exam', 'Holiday', 'Answer'], answer: 0, explain: 'ਜਮਾਤ (ja-maat) = class / classroom.' },
    { topic: 'school', q: 'ਪ੍ਰੀਖਿਆ and ਇਮਤਿਹਾਨ both mean…', options: ['Homework', 'Holiday', 'Exam', 'Question'], answer: 2, explain: 'ਪ੍ਰੀਖਿਆ (pree-khi-aa) and ਇਮਤਿਹਾਨ (im-ti-haan) both mean exam.' },
    { topic: 'school', q: 'What does ਸਵਾਲ mean?', options: ['Answer', 'Question', 'Lesson', 'Story'], answer: 1, explain: 'ਸਵਾਲ (sa-vaal) = question. ਜਵਾਬ (ja-vaab) = answer.' },
    { topic: 'sent', q: 'What does ਅੱਜ ਛੁੱਟੀ ਹੈ। mean?', options: ['Today is an exam.', 'Today is a holiday.', 'School is closed tomorrow.', 'Today is Monday.'], answer: 1, explain: 'ਅੱਜ ਛੁੱਟੀ ਹੈ। (ajj chhut-tee hai) = Today is a holiday. ਅੱਜ = today.' },
    { topic: 'sent', q: 'What does ਬੈਠ ਜਾਓ। mean?', options: ['Stand up.', 'Come in.', 'Be quiet.', 'Sit down.'], answer: 3, explain: 'ਬੈਠ ਜਾਓ। (baith jaa-o) = Sit down.' },
    { topic: 'sent', q: 'A girl asks "May I come in?". Which is right?', options: ['ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦਾ ਹਾਂ?', 'ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦੀ ਹਾਂ?', 'ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦੇ ਹਾਂ?', 'ਕੀ ਮੈਂ ਬਾਹਰ ਜਾ ਸਕਦੀ ਹਾਂ?'], answer: 1, explain: 'ਕੀ ਮੈਂ ਅੰਦਰ ਆ ਸਕਦੀ ਹਾਂ? (kee main an-dar aa sak-dee haan?) = May I come in? Girls use ਸਕਦੀ.' },
    { topic: 'sent', q: 'What does ਆਪਣੀ ਕਿਤਾਬ ਖੋਲ੍ਹੋ। mean?', options: ['Open your book.', 'Close your book.', 'Read your book.', 'Bring your book.'], answer: 0, explain: 'ਆਪਣੀ ਕਿਤਾਬ ਖੋਲ੍ਹੋ। (aap-nee ki-taab kholh-o) = Open your book.' }
  ],

  match: [
    { title: 'Around the House', pairs: [
      ['ਕਮਰਾ', 'Room'], ['ਰਸੋਈ', 'Kitchen'], ['ਦਰਵਾਜ਼ਾ', 'Door'], ['ਖਿੜਕੀ', 'Window'], ['ਛੱਤ', 'Roof'], ['ਪੱਖਾ', 'Fan']
    ] },
    { title: 'Home Words', pairs: [
      ['ਕੁਰਸੀ', 'Chair'], ['ਮੇਜ਼', 'Table'], ['ਮੰਜਾ', 'Cot'], ['ਬਿਸਤਰਾ', 'Bedding'], ['ਘਰ', 'Home'], ['ਸਕੂਲ', 'School']
    ] },
    { title: 'School Things', pairs: [
      ['ਬਸਤਾ', 'School bag'], ['ਕਾਪੀ', 'Notebook'], ['ਕਿਤਾਬ', 'Book'], ['ਪੈਨਸਿਲ', 'Pencil'], ['ਸਵਾਲ', 'Question'], ['ਜਵਾਬ', 'Answer']
    ] },
    { title: 'People and Days', pairs: [
      ['ਅਧਿਆਪਕ', 'Teacher (man)'], ['ਅਧਿਆਪਕਾ', 'Teacher (woman)'], ['ਵਿਦਿਆਰਥੀ', 'Student (boy)'], ['ਵਿਦਿਆਰਥਣ', 'Student (girl)'], ['ਛੁੱਟੀ', 'Holiday'], ['ਪ੍ਰੀਖਿਆ', 'Exam']
    ] }
  ],

  balance: [],
  written: []
});
