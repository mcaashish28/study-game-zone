# Study Game Zone

A phone-friendly study game (PWA) for CBSE Class 10. Each chapter gets five game modes:

| Mode | What it does |
|---|---|
| 🃏 Flashcards | Flip cards; cards marked "Still learning" come back sooner |
| ⚡ Quiz Battle | 10 timed MCQs with combos; wrong questions come back first next time |
| 🧩 Match Up | Tap-to-match pairs |
| ⚖️ Balance Lab | Balance chemical equations with live atom counts (chemistry chapters) |
| ✍️ Answer Writing | Board-style questions, key-point checklist and model answer |

Progress (XP, levels, streaks, badges, weak topics) is saved on the device. Open **🏆 My Progress** for the parent view.

## Feedback

- After every game she can tap a quick rating (😍 🙂 😐 😕 😫).
- **💬 Tell Papa what you think** on the home screen: pick a part of the app, write a comment, and send it on WhatsApp.
- **🏆 My Progress → For parents** shows all ratings and comments, with a button to send a full progress report on WhatsApp.
- Keep a record in [FEEDBACK.md](FEEDBACK.md) of what she asked for and what was changed.

## Run it on your computer

```sh
cd ASK_StudyWithGame
python3 -m http.server 8080
```

Open http://localhost:8080 in Chrome.

## Live app

**https://mcaashish28.github.io/study-game-zone/** (hosted free on GitHub Pages from the `main` branch)

On the phone: open the link in Chrome → ⋮ menu → **Install and create shortcut** (older Chrome: **Add to Home screen**) → **Install**.

## Publish changes

```sh
git add -A
git commit -m "Add Science chapter 2"
git push
```

GitHub Pages updates the live app about a minute after the push. The phone picks up the new version the next time she opens the app while online. Bump `VERSION` in `sw.js` whenever files change.

## Add a new chapter

1. Copy `content/science/ch01-chemical-reactions.js` to a new file, e.g. `content/science/ch02-acids-bases-salts.js`, and replace the content (`id` must be unique, e.g. `sci-ch02`). Leave `balance: []` empty for chapters without equations.
2. Add a `<script>` line for it in `index.html` (below chapter 1).
3. Add the file to `FILES` in `sw.js` and bump `VERSION` (e.g. `swg-v2`) so phones pick up the update.

Other subjects (`math`, `punjabi`) already exist in `content/registry.js`; use `SWG.addChapter('math', {...})`.

**Important:** when editing a chapter, add new cards/questions at the **end** of each list — saved progress is linked to item positions.
