# Validation record

Prepared October 21, 2026.

## Passed

- JavaScript syntax checks for the website and both scripts embedded in the standalone copy.
- Reproducible data bundling: the committed browser data exactly matches the source JSON.
- 1,966 unique glossary IDs, all definitions present, valid chapter assignments, and original-explanation provenance.
- Exact retention of the 1,966 recovered term labels and IDs from the previous app; no complete old definition retained verbatim.
- 56 chapter spaces, each with vocabulary, two sourced practice questions, one original concept case, and one connection prompt.
- All 56 chapters × six activity views render under the DOM-stub logic harness.
- Fresh launch selects no chapter; guarded chapter navigation cannot silently select chapter 1.
- Home and review pages contain no dashboard statistics grid.
- Flashcard reveal, review scheduling, and protection against repeated same-day inflation.
- Correct and incorrect written recall, matching completion, and shuffled-choice grading.
- Duplicate-answer protection and test scoring with saved history.
- Attribution displayed beside sourced questions before submission; answer explanations withheld until grading.
- Glossary lookup including tail entries, exact-match search priority, and scientific symbols.
- Backup validation, including the no-chapter-selected state, and record round-trip checks.
- Standalone file embeds all runtime assets and has no remaining local asset references.

Run the repeatable automated checks with `npm test`. Source-comparison checks used preparation-only materials that are intentionally not shipped in the public repository.

## Limits

These checks validate data structure and app behavior using a stub DOM. They do **not** establish cross-browser layout, touch behavior, screen-reader compatibility, or full visual quality. Chromium was unavailable and its download was blocked in the preparation environment. Complete the desktop and phone checklist in PUBLISHING.md before sharing the published URL.

The study definitions and questions have not undergone a complete independent subject-matter review. Chapter term assignments are suggested study groupings, not certified publisher key-term lists. The sourced question bank is intentionally limited to two items per chapter, with optional original concept cases and cross-chapter tests.
