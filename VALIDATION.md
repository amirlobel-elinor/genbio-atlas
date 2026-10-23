# Validation record

Prepared October 23, 2026 · Gen Bio Atlas 1.1.0.

## Automated checks

Run `npm test` in the source project. These are JavaScript/data and DOM-stub state checks, not a real browser rendering pass.

- All 1,966 glossary terms and stable IDs retained; 56 chapters, 168 questions, 56 written connection prompts.
- Generated data bundle matches JSON source data exactly.
- Practice directory covers all 56 chapters, with valid HTTPS provider URLs, an exact Campbell chapter page, and OpenStax review/application sets.
- All 56 chapters × nine activity views render without missing content.
- All 56 chapters × five vocabulary modes × both prompt directions render successfully.
- Fresh visits ask for a chapter; previous notes, bookmarks, term edits, spaced-review records, and question history survive the upgrade.
- Flashcards start hidden, accept explicit recall ratings, and do not inflate mastery on repeated same-day reviews.
- Recall Rally grades normalized term answers, records misses, and requires explicit self-assessment for prose definitions. Blank answers cannot earn recall credit.
- Learn repeats missed terms, resets partial streaks after a miss, requires two consecutive successes per term, and ends long unsuccessful sessions honestly without claiming mastery.
- Match rejects input before starting, handles mistakes and completed pairs, keeps time across pause/resume, and supports untimed rounds.
- Gravity checks displayed answer identity, pauses for correction, requeues missed concepts, expires each prompt only once, preserves chances while paused, ends after three misses or ten catches, supports keyboard answers, and offers untimed/stationary play.
- Leaving a game clears its timer. Backgrounding or opening the glossary pauses timed play; closing the glossary waits for explicit resume.
- Direction and term-set changes deliberately start a fresh round.
- Recognition game results do not advance spaced-recall mastery.
- Empty and one-term personal sets are handled without false success or missing-data crashes.
- Shuffled application answers, duplicate-answer protection, optional in-app quiz submission/history, and source attribution remain working.
- Glossary search, retained scientific symbols, and old/new backup validation are checked.

## Resource checks

The practice directory contains 170 links (148 unique URLs). The research pass retrieved all 56 exact Pearson Campbell 12th-edition chapter pages and all 47 OpenStax review and 47 critical-thinking pages. This establishes retrievability and page identity at the time of checking, not authenticated access or interactive exam behavior. External pages can change.

Pearson pages provide chapter questions and solutions; some features may require an account. OpenStax numbering differs, so links are explicitly topic-matched. Partial alignment is called out, including Campbell chapter 25. These links are not represented as timed or automatically scored tests.

## Distribution checks

The standalone build embeds CSS, data, and both application scripts. The flat upload package puts index.html, icons, manifest, and documentation at one level. Internal code and data require no external asset folder; home-screen icon metadata uses the companion root files. The full source package includes editable JSON and repeatable checks.

## Limits

A browser executable was not available in the preparation environment. Desktop/mobile layout, touch interactions, and screen-reader behavior have not been browser-tested here. The source includes responsive styling, focus management, and reduced-motion support, but complete the browser checklist in PUBLISHING.md before sharing the site.

The glossary and question bank did not receive a new complete biology subject-matter review in this interface update. Chapter term assignments remain suggested topic groupings, not certified publisher key-term lists. The in-app question bank remains deliberately small (three questions per chapter); external sets are now the main destination for further practice.
