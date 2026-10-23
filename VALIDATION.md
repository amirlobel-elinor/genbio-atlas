# Validation record

Gen Bio Atlas 1.4.3 · restored B. atlas branding and optional suggestion box.

## Automated checks

Run `npm test` in the source project. These are JavaScript/data and DOM-stub state checks, not a real browser rendering pass.

- All 1,966 glossary terms and stable IDs retained; 56 chapters, 1,120 multiple-choice questions, 560 true/false questions, 56 written connection prompts, and 168 concept sets. All 168 earlier MC and 224 earlier TF records are retained with their IDs and content.
- Generated data bundle matches JSON source data exactly.
- Practice directory covers all 56 chapters, with valid HTTPS provider URLs, an exact Campbell chapter page, and OpenStax review/application sets.
- All 56 chapters × nine existing activity views render without missing content; the new Lists & Sets module is also checked in every chapter.
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

## Lists & Sets checks

- All 56 chapters include three curated sets: 168 sets, 608 members, and 27 sets with a required sequence. Each set includes original explanations, distractor feedback, and reference links (130 unique URLs).
- Every set renders its activity menu, Learn, Build the Set, and Recall & Explain; ordered sets also render Put in Order.
- Learn reveals deliberately. Build requires all members and no distractors; repeated submission cannot change a graded round.
- Recall supports every count from one to the complete set, including “any three.” Member order does not affect recall credit. Duplicate names and aliases count once, including after manual synonym checks.
- Known names and aliases match after safe normalization. Scientific distinctions such as 2n−1 versus 2n+1, and C₃ versus C₄, remain distinct.
- Explanations are never automatically marked correct. Nonblank original reasoning can be self-assessed against the model answer after identifying the member. Blank answers and duplicate members cannot earn credit through manual mapping.
- Sequencing is available only for ordered sets, starts shuffled, and grades positions. Cycle prompts specify their starting point.
- Written answers are escaped for HTML display. Empty data falls back safely. List rounds do not modify existing glossary mastery or persistent progress.
- Content review checked distinctions in the two requested examples: Hardy–Weinberg conditions and changes to DNA versus consequences for proteins. Coding insertions/deletions shift the frame when their length is not divisible by three. The sets also received editorial review for scope, misleading distractors, and premature answer disclosure.

## Build Practice Test checks

- The menu opens the builder without requiring a current chapter. Users select distinct chapters and exact multiple-choice, true/false, and list-question counts; zero omits a type.
- Every selected chapter appears at least once overall. Allocation is as even as the available pools permit. Tests cover single types, mixed types, constrained uneven pools, all 56 chapters, and all 1,848 question records at once (including lists).
- Within capacity, requested counts are exact. Oversized requests cap each type independently at its available pool and start the test; requested settings are preserved, actual counts and adjustments are displayed, and external-practice links are available during setup and score review. All questions come from selected chapters and no identity repeats. Invalid counts, empty selection, insufficient available totals, and infeasible coverage are rejected with an explanation.
- Question choices shuffle without changing the correct answer. Model answers and explanatory keys stay hidden until submission. Tests cover correct, incorrect, and blank automatic responses, repeat submissions, and protected active rounds.
- List scoring keeps recognized names, self-confirmed equivalent wording, and self-checked explanations separate from the automatic score. Duplicate members, blank answers, repeated unknown prose, and invalid mappings cannot add credit.
- The external resource panel follows the selected chapters, opens safe new-tab links, and appears during setup and score review. It and the adjustment notice’s resource shortcut are absent throughout active tests, including incomplete-submit confirmation and cancellation. Submitting restores the panel. The responsive CSS stacks it below setup/results at narrow widths and gives active tests one full content column.
- Written responses are escaped. Leaving an unfinished test requests confirmation; cancellation preserves the test. Builder activity does not modify glossary mastery or persistent progress.
- The 560 true/false items have unique IDs, reference links, Boolean keys, and explanatory corrections. There are ten per chapter, five true and five false. The 1,120 multiple-choice items have valid keys and distinct options. Each chapter retains two public adaptations and one original case, with seventeen new original questions carrying topic tags and reading references. Automated checks validate structure and coverage; they do not establish scientific correctness or an exhaustive textbook inventory.

## Chapter Practice & Apply checks

- Each chapter uses the same MC and TF banks as the builder. The setup offers MC, TF, or mixed rounds and 5, 10, or all available questions.
- Randomized rounds stay within the selected chapter, contain unique IDs, and preserve correct-answer identities while shuffling choices. Mixed rounds include both types when both are available and the round permits it.
- Explanations and keys are hidden until an answer is selected. False is treated as a valid TF response. Repeated clicks do not double-score, and completion offers an answer review and another round.
- Original learning references and existing OpenStax adaptation credits appear with feedback. Persistent question history continues to use existing IDs, including TF review and retry.

## Preview interaction regression checks

Count regressions parse controls from the rendered setup form, select chapters 17 and 23, and request 30 MC, 10 TF, and 5 lists. They cover ordinary input, committed change without input, and current field values with no event before Build is clicked. All paths must render 45 questions, including five list-entry cards. With one chapter the same request must yield 20 MC, 10 TF, and 3 lists. Tests also cover keyboard/form submission, rebuild settings, invalid visible counts, and resource visibility before/during/after submission.

The earlier builder tests called build functions or dispatched form submission directly, so they missed a button that depended on native form submission. New tests extract the actual rendered button attributes and dispatch click alone, without a submit event. They also disable native confirmation dialogs and check in-app submit/discard confirmation, cancellation, and continuation to the selected page. These are interaction-model checks, not a claim of testing the live ChatGPT preview in a real browser.

## Resource checks

The practice directory contains 170 links (148 unique URLs). The research pass retrieved all 56 exact Pearson Campbell 12th-edition chapter pages and all 47 OpenStax review and 47 critical-thinking pages. This establishes retrievability and page identity at the time of checking, not authenticated access or interactive exam behavior. External pages can change.

Pearson pages provide chapter questions and solutions; some features may require an account. OpenStax numbering differs, so links are explicitly topic-matched. Partial alignment is called out, including Campbell chapter 25. These links are not represented as timed or automatically scored tests.

## Distribution checks

The standalone build embeds CSS, data, and all four application scripts. The flat upload package puts index.html, icons, manifest, and documentation at one level. Internal code and data require no external asset folder; home-screen icon metadata uses the companion root files. The full source package includes editable JSON and repeatable checks.

## Limits

A browser executable was not available in the preparation environment. Desktop/mobile layout, touch interactions, and screen-reader behavior have not been browser-tested here. The source includes responsive styling, focus management, and reduced-motion support, but complete the browser checklist in PUBLISHING.md before sharing the site.

The concept sets are curated core coverage, not a verified inventory of every list in Campbell or a course-specific exam checklist. New questions were authored and checked with AI assistance; they have not been independently certified by a biology instructor or the textbook publisher. The glossary and previously existing question bank did not receive a new complete subject-matter review in this update. Chapter term assignments remain suggested topic groupings, not certified publisher key-term lists. The bank now has twenty MC, ten TF, and three concept-set questions per chapter. These are selected practice materials, not an exhaustive exam bank. The external directory is retained from the preceding update and was not revalidated in this feature update.

## Restored branding and suggestions

The eight icon/logo assets match the earlier B. atlas version. Learning JSON and content IDs are unchanged. The suggestion box has a category and text field, a prefilled mailto draft, and a clipboard fallback. Drafts are not automatically sent or stored. Opening it pauses Match and Gravity until explicitly resumed. A browser is unavailable in this environment, so visual layout, OS mail-app launching, and actual email delivery remain manual checks.
