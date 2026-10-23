# Publish or update Gen Bio Atlas

Use **gen-bio-atlas-study-games.zip** for the easiest GitHub upload. It contains a ready-built app with all files at the top level; no folders need to be uploaded. You do not need Node.js, an API key, a database, or a build service for this package.

## Update your existing site

1. In your current app, open **Notebook → Export progress** as a backup. Keep this personal JSON file off GitHub.
2. Extract `gen-bio-atlas-study-games.zip`. Open the extracted folder and select its files. Do **not** upload the ZIP itself or an enclosing folder.
3. Open your repository: https://github.com/amirlobel-elinor/genbio-atlas . Go to **Code → Add file → Upload files**.
4. Drag all the extracted files into the upload area. The file list must show **index.html** at the repository root, not inside another folder. Keep its name exactly `index.html`, not `index(1).html` or `Gen_Bio_Atlas.html`.
5. Commit the update to the branch used for Pages, normally **main**. Existing files with the same names are replaced. Older `assets/` folders may remain; the new standalone `index.html` does not depend on them.
6. In **Settings → Pages**, keep **Deploy from a branch → main → /(root)**. You only need to change this if your site is currently configured differently. GitHub documents these settings at https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site .
7. Wait for the Pages deployment in the **Actions** tab to finish. Open the website URL shown under Pages, expected to be https://amirlobel-elinor.github.io/genbio-atlas/ . This package has not been uploaded to your repository automatically.
8. Refresh with cache bypass: **Command–Shift–R** on Mac or **Control–Shift–R** on Windows/Linux. Confirm the logo reads **B. atlas** and the browser title reads **Gen Bio Atlas**, then check that the main menu includes **Build Practice Test** and its setup page includes an external practice resources panel.

If you are creating a new site, make a repository first, upload the extracted files at its root, then enable Pages with the settings above. The URL will use your account and repository name.

## What is in the upload package?

- **index.html** — the complete app, including styling, all game code, all 1,966 glossary terms, questions, chapter links, and the practice test builder.
- **manifest.webmanifest**, **favicon.png**, **apple-touch-icon.png**, **icon-192.png**, **icon-512.png**, and **icon.svg** — app name and browser/home-screen icons.
- **wordmark.svg**, **title-logo.svg**, **app-cover.png** — the Gen Bio Atlas identity assets.
- **LICENSE**, **CONTENT_LICENSE.md**, **ATTRIBUTION.md** — the applicable code and learning-content credits and licenses.
- **UPLOAD_INSTRUCTIONS.txt**, **PUBLISHING.md**, **VALIDATION.md**, **LISTS_COVERAGE.md** — instructions, validation notes, and the chapter set inventory.

All these files are at the ZIP root. There are no nested asset folders. The app name is **Gen Bio Atlas**; the browser and home-screen title are **Gen Bio Atlas**, with the italic **B. atlas** logo and **B.a** icon.

## Check it before sharing

- Open Suggestion box from the menu footer or phone footer. Confirm an empty message is rejected; type a suggestion, open the draft, and check the destination is amirlobe@usc.edu. Check Copy message and Escape/close. Email delivery itself requires the student to press Send in their email app.

- Open **Build Practice Test** from the menu. Select chapters 17 and 23, then request 30 multiple-choice, 10 true/false, and 5 list questions. All 45 questions should appear, including five writable list questions. Try zero for a question type and fewer total questions than selected chapters. Select one chapter and request 30 MC, 10 TF, and 5 lists: the test should start with 20 MC, 10 TF, and 3 lists and explain the adjustment.
- Submit a mixed test and review the automatic score separately from list-name and explanation self-checks. More practice online must be absent while answering, including while a submission confirmation is open, and return with the score review. Opening a resource in a new tab must keep the review intact. On your phone, the panel appears below setup or results.
- A fresh visit asks you to choose a chapter; it never defaults to chapter 1.
- Every chapter opens a study-set page with six activity tiles and a Lists & Sets module.
- Open Lists & Sets and try Learn, Build the Set, and Recall & Explain. Ordered sets also offer Put in Order. Try the five Hardy–Weinberg conditions in chapter 23 and nucleotide changes in chapter 17.
- In Recall & Explain, duplicate members count only once. Explanations require a separate, honest self-check against the model answer.
- Try both **Term first** and **Definition first** in Flashcards, Learn, Match, Recall Rally, and Gravity. Switching direction restarts the current round.
- Learn brings missed terms back. Recall Rally lets you self-check written definitions instead of requiring exact wording.
- Match and Gravity can be paused, and both have untimed options. Check the chosen pace on your phone.
- Practice & Apply shows explanations after answering. Chapter practice links open the appropriate external page in a new tab. Pearson may require an account for some features; OpenStax links use different chapter numbers and are matched by topic.
- Search the glossary for `intron`, `chlorophyll a`, and `zygote`. All 1,966 entries remain available.
- Confirm notes and saved terms persist after reloading. Test a progress backup in a separate browser profile if you are moving devices.
- Check keyboard navigation, visible focus, closing the glossary with Escape, and phone scrolling.

Automated checks cover data integrity and game behavior. A real desktop/mobile browser layout pass was not available in the preparation environment; the exact checks and limitations are recorded in `VALIDATION.md`.

## Your existing progress

The update keeps the original glossary and question IDs and uses the same browser storage key. On the same website address and browser profile, saved notes, bookmarks, edits, and spaced-review records are retained. A new visit still clears the selected chapter so you can choose where to study.

Downloaded HTML files, localhost, a GitHub Pages address, and a custom domain can have different browser storage. If progress does not appear after moving, use **Notebook → Import backup**. Import replaces the current browser record after confirmation, so export a current backup first if needed.

Build Practice Test answers and reviews are session-based and are cleared by reloading. Game rounds and scores are also session-based. Recognition games do not mark terms as mastered in the spaced-recall record. No account or synchronization service is used.

## Edit the source later

The separate `gen-bio-atlas-github.zip` is the editable source project. Its `index.html` needs the accompanying `assets/` folder. Do not upload only that source HTML over the standalone deployment.

With Node.js 20 or newer, open the extracted source project and run:

```sh
npm start
```

Visit http://localhost:8080 . No `npm install` is needed. Edit `assets/app.js` for navigation and chapter pages, `assets/study.js` for vocabulary modes, `assets/lists.js` for list practice, `assets/test-builder.js` for mixed-chapter tests, and the CSS files for styling. The JSON files in `data/` hold glossary, chapters, questions, connections, practice links, and concept sets (`data/lists.json`), and true/false items (`data/true-false.json`). Keep existing content IDs stable.

After editing:

```sh
npm run build
npm test
npm run package
```

The upload-ready files are in `dist/site/`, already flat with the correct `index.html` name and icons. Upload those files at the repository root. A single-file copy is also written to `dist/Gen_Bio_Atlas.html`. For a source-based deployment, upload the complete source directory contents and keep `assets/` intact. The optional CI workflow in the source package runs checks; it does not block branch-based Pages deployment by itself.

## Troubleshooting

**Question counts are lower than requested:** The builder caps each type at the number available for your selected chapters. Each chapter has 20 MC, 10 TF, and 3 list prompts. The adjustment notice shows the actual counts; More practice online returns after submission for additional question collections.

**List questions did not appear:** Use version 1.4.1 or later. Build now reads the visible count fields directly, including changes that did not send an input event. With chapters 17 and 23 selected, 30 MC + 10 TF + 5 lists produces 45 questions. Lists are shuffled among the other questions and reported in the count summary.

**Build my test did nothing inside a preview:** Use this 1.3.1 or later copy. The button now acts directly on click instead of depending on native form submission, which embedded previews may block. Submission and discard confirmations appear inside the app. Open the updated HTML preview; if you also publish on GitHub, replace the site files with this package.

**I see code or a file listing:** Open the Pages website address, not the GitHub repository file view. Make sure the entry file is named `index.html` at the configured root.

**The old design remains:** Confirm the upload replaced the root `index.html`, check that the latest Pages deployment succeeded, then refresh with cache bypass. A saved home-screen shortcut can also need closing and reopening.

**No styling or game buttons work:** Use the `index.html` from the flat study-games ZIP. It contains the entire app. If using the editable source version, all files under `assets/` are required.

**An external practice link changes:** Open another linked set for that chapter. The directory was checked on October 23, 2026, but external sites can change. You can bookmark an alternative from **Resources → Your chapter links**.

**I want offline or an app-store release:** This package is a browser app for GitHub Pages. Its manifest supplies home-screen metadata, but no service worker or guaranteed offline cache is included. It is not an Apple App Store or Google Play submission.

## Credits and licenses

Keep the supplied license and attribution files. Code is MIT; original study explanations and prompts use CC BY 4.0; existing OpenStax question adaptations use CC BY-NC-SA 4.0. The MIT code license does not change the restrictions on learning content. External Pearson and OpenStax resources are linked, not copied into the new practice directory. The glossary explanations are independent Gen Bio Atlas wording, not the official Campbell glossary text.

## Suggestion box

The menu footer (page footer on phones) opens a compact feedback form. Open email draft prepares an email to amirlobe@usc.edu; students review and send it in their email app. Copy message is a fallback if a mail app is unavailable or an embedded preview blocks mailto links. No email service setup or backend is required. Suggestions are not automatically sent.
