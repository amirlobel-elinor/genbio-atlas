# gen bio atlas

A quiet, chapter-first general biology study app. Choose a chapter, choose an activity, and start learning.

The app includes 56 chapter study spaces, 1,966 glossary terms with newly written explanations, vocabulary games, concept cases, written connections, and sourced practice questions. It follows the general chapter structure of Campbell Biology, 12th edition, as an independent companion.

## Open it

Open `index.html` in a modern browser, keeping `assets/` beside it. No account, API key, paid service, or installation is required. A local web server provides more consistent browser storage behavior:

```sh
npm start
```

Then visit `http://localhost:8080`. This optional command needs Node.js 20 or newer. There are **no npm dependencies**, so `npm install` is unnecessary.

## Publish it with GitHub Pages

1. Extract the ZIP. Create a **public** GitHub repository named `gen-bio-atlas`.
2. Add the **contents** of this project folder to the repository. `index.html` must appear at the repository's top level, next to `assets/` and `data/`. Uploading the ZIP itself will not publish the app.
3. Commit the files to `main`.
4. Open repository **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/(root)**, and save.
5. After GitHub's deployment finishes, use the URL shown in Pages settings, normally `https://YOUR-USERNAME.github.io/gen-bio-atlas/`.

See [PUBLISHING.md](PUBLISHING.md) for full upload instructions, local checks, updates, backup migration, troubleshooting, and a release checklist. The included workflow runs code/content checks; publication uses the branch setting above.

## Learning modes

- **Flashcards:** recall, reveal, and schedule another review.
- **Match the meaning:** connect four terms to their definitions.
- **Name that concept:** type the term before seeing the answer.
- **Concept lab:** reason through an application question with explanatory feedback.
- **Connect the ideas:** write a causal explanation and compare it with a checklist.
- **Practice test:** answer first; receive a score and explanations after submission. Mix chapters for longer tests.

The home screen contains a searchable chapter picker. The glossary is always accessible. Notes, saved terms, review history, and resources are on secondary pages. A new visit never automatically opens chapter 1.

## Coverage and sources

The glossary retains all 1,966 terms recovered from the supplied glossary materials. **Definitions are newly written gen bio atlas explanations, not Pearson's glossary text.** The source recordings, textbook images, and earlier transcriptions are excluded from this repository.

Chapter links are suggested topic assignments and are editable locally. They are not an independently verified list of every key term printed in each textbook chapter. Some terms belong to multiple chapters. Concise explanations may omit textbook examples or secondary meanings; scientific and classroom review is encouraged.

The question bank is a starter set: **two adapted public OpenStax questions and one original application case per chapter**, plus one written connection prompt. It is not a complete exam bank or a reproduction of publisher test materials. Resource links are bookmarks; the app does not automatically ingest websites, Quizlet sets, or videos.

## Progress and privacy

Study progress, notes, bookmarks, resource links, and personal glossary edits stay in the browser's local storage. There is no account or synchronization service. Use **Notebook → Export progress** before moving between devices, browser profiles, local files, or website addresses. Importing a backup replaces that browser's current record after confirmation. See [PRIVACY.md](PRIVACY.md).

## Editing and checks

Edit the human-readable JSON in `data/`, then regenerate the browser bundle and run checks:

```sh
npm run build
npm test
```

Commit the edited JSON **and** `assets/data.js`. Edit interface code in `assets/app.js`, styling in `assets/styles.css`, and the shell in `index.html`. Keep glossary and question IDs stable to preserve saved progress.

For a single-file copy containing all app assets and data:

```sh
npm run standalone
```

The result is `dist/Gen_Bio_Atlas.html`. External resource links still require internet access. The hosted site does not include a service worker or guarantee offline availability.

## Licenses

Code and interface assets: [MIT](LICENSE). Newly written study content: [CC BY 4.0](CONTENT_LICENSE.md). OpenStax-derived questions: **CC BY-NC-SA 4.0**, with detailed credits in [ATTRIBUTION.md](ATTRIBUTION.md) and alongside questions in the app.

The bundled OpenStax material limits its reuse to noncommercial purposes and requires share-alike licensing of adaptations. Do not assume the MIT code license grants commercial rights to that material. This project is not affiliated with or endorsed by Pearson, Campbell Biology's authors, or OpenStax.
