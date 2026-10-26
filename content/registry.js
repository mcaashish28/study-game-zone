// Subject list. Each chapter file calls SWG.addChapter(subjectId, chapter).
window.SWG = window.SWG || {};

SWG.subjects = [
  { id: 'science', name: 'Science', icon: '🧪', color: '#22d3ee', chapters: [] },
  { id: 'math', name: 'Maths', icon: '📐', color: '#a78bfa', chapters: [] },
  { id: 'punjabi', name: 'Punjabi ਪੰਜਾਬੀ', icon: '📖', color: '#f59e0b', chapters: [] }
];

// Item ids are assigned by position, so always ADD new items at the END of a list
// (otherwise saved progress gets attached to the wrong item).
SWG.addChapter = function (subjectId, ch) {
  const subject = SWG.subjects.find(s => s.id === subjectId);
  ch.subject = subjectId;
  ch.flashcards.forEach((c, i) => { c.id = ch.id + ':f' + i; });
  ch.quiz.forEach((q, i) => { q.id = ch.id + ':q' + i; });
  ch.balance.forEach((b, i) => { b.id = ch.id + ':b' + i; });
  ch.written.forEach((w, i) => { w.id = ch.id + ':w' + i; });
  subject.chapters.push(ch);
};
