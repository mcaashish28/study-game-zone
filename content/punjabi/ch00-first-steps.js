// Punjabi — Demo chapter: First Steps (for a beginner who cannot read Gurmukhi yet).
// Every Punjabi word gets a 🔊 button automatically. Write each answer as:
// how it sounds (English letters) — meaning.
// Sound spelling: aa as in "car", ee as in "see", oo as in "food", ai as in "bat", au as in "saw".
SWG.addChapter('punjabi', {
  id: 'pa-ch00',
  number: 0,
  title: 'First Steps (Demo)',
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
    { topic: 'greet', front: 'ਮਾਫ਼ ਕਰਨਾ', back: 'maaf kar-naa — Sorry / Excuse me' },
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
      ['ਨਹੀਂ', 'No'], ['ਮਾਫ਼ ਕਰਨਾ', 'Sorry'], ['ਜੀ ਆਇਆਂ ਨੂੰ', 'Welcome']
    ] }
  ],

  balance: [],
  written: []
});
