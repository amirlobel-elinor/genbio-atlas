# Publishing gen bio atlas

This package publishes a browser-based app through GitHub Pages. It is not an Apple App Store or Google Play submission. The app is static HTML, CSS, and JavaScript: it needs no server, database, API key, or build service to run.

## 1. Check the extracted folder

Unzip `gen-bio-atlas-github.zip`. Inside the `gen-bio-atlas` folder you should see:

- `index.html` — the website entry point.
- `assets/` — interface code, styling, icon, and the ready-to-use data bundle.
- `data/` — editable glossary, chapter, question, and connection data.
- `scripts/`, `tests/`, and `package.json` — optional local development and checks.
- `.github/workflows/check.yml` — automated repository checks.
- `.nojekyll` and `.gitignore` — hosting and repository housekeeping.
- README, publishing instructions, attribution, license, privacy, and validation files.

Dot-prefixed files may be hidden in Finder. On a Mac, Command–Shift–Period shows them. No original recording, textbook screenshot, or transcribed Pearson definition is included.

## 2. Try the app locally

Double-click `index.html` without moving it away from `assets/`. If your browser restricts storage for local files, use a local server instead:

1. Install Node.js 20 or newer from https://nodejs.org/ if you do not already have it.
2. Open Terminal, type `cd `, drag the extracted `gen-bio-atlas` folder into the Terminal window, and press Return.
3. Run:

```sh
npm test
npm start
```

4. Open `http://localhost:8080` in a browser. Stop the server with Control–C when finished.

No `npm install` step is required. The provided browser bundle has already been generated. Node is only needed for the optional local server, rebuilding data, and running tests.

## 3. Create the GitHub repository

1. Sign in at https://github.com/ and create a new repository.
2. Name it `gen-bio-atlas` and choose **Public** for the usual GitHub Free Pages setup.
3. Leave GitHub's README, license, and gitignore initialization options unchecked because the package already supplies these files.
4. Create the repository.

The repository and published website are public. Upload only the provided project contents. Keep personal progress backups, course-restricted files, and the original glossary recordings outside the repository.

## 4. Upload the project

### Browser upload

Use the new repository's **uploading an existing file** link, or **Add file → Upload files** if the repository already has a commit. Drag the contents of the extracted project folder into the upload area. Include `assets/` and `data/` with their contents; do not upload only `index.html` or the ZIP.

Commit with a message such as `Add gen bio atlas`. Confirm the repository's root shows `index.html`, `assets`, and `data` together. If you see only a containing `gen-bio-atlas` folder, the files are one level too deep.

If the browser uploader omits hidden files, add `.nojekyll`, `.gitignore`, and `.github/workflows/check.yml` individually using **Add file → Create new file**, copying their exact contents from the package. The `.nojekyll` file is intentionally empty. The check workflow is useful for future edits; it is not the deployment workflow.

### Terminal alternative

From the extracted project directory, run the following, replacing `YOUR-USERNAME` with your actual account name. Use these commands with the new empty repository created above:

```sh
git init
git add .
git commit -m "Add gen bio atlas"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gen-bio-atlas.git
git push -u origin main
```

Authenticate using your configured GitHub browser, credential manager, SSH setup, or token flow. Never put a token into the app's source files. An existing repository with its own history should be cloned and updated instead of overwritten.

## 5. Enable GitHub Pages

Open **Settings → Pages** in the repository. Under **Build and deployment**:

1. Set **Source** to **Deploy from a branch**.
2. Select branch **main** and folder **/(root)**.
3. Click **Save**.

The provided workflow checks the project; it does not require choosing GitHub Actions as the publishing source. Wait for the Pages deployment to finish and open the site URL shown by GitHub, normally:

```text
https://YOUR-USERNAME.github.io/gen-bio-atlas/
```

Use HTTPS and leave **Enforce HTTPS** enabled when available. Confirm the **Actions** tab shows successful checks and a successful Pages deployment. If your organization restricts Pages, an administrator may need to enable it.

## 6. Check the published site

Before sharing the URL, use the live website on both a desktop browser and a phone:

- It opens on **Choose a chapter**, without opening chapter 1 automatically.
- Search finds chapters, and optional unit filters narrow the list.
- Chapter cards open the correct chapter and its learning activities.
- Flashcards start hidden; reveal and self-rating work.
- Matching and typed recall accept correct responses and respond to mistakes.
- Concept questions give explanatory feedback; connections require a written attempt.
- Practice questions display source credits, with scores and answer explanations after submission.
- Glossary search finds terms such as `intron`, `chlorophyll a`, and `zygote`.
- Saved terms and chapter notes persist after a reload, even though chapter selection resets.
- Exported progress imports successfully into a separate browser profile.
- Keyboard navigation, visible focus, Escape to close the glossary, and phone scrolling work comfortably.

The included automated tests verify logic and content integrity. They are not a replacement for these browser checks. Browser layout testing could not be completed in the preparation environment because its browser download was blocked. See `VALIDATION.md` for the precise checks performed.

## 7. Bring over your existing progress

In the old app, open **My notebook → Export progress**. On the new website, open **Notebook → Import backup** and select that JSON file. Confirm replacement only after backing up any newer record already on the website.

The new app preserves the glossary IDs used by the earlier version. If both versions share an accessible browser origin, it can also read the older storage key. Export/import is the reliable method when moving from a downloaded HTML file to a hosted address.

A progress backup can include personal notes, links, and edited definitions. It remains a personal file and should not be added to the public repository. Local edits are not automatically published to other users.

## 8. Make updates

For interface-only changes, edit `index.html`, `assets/app.js`, or `assets/styles.css`. For learning content, edit the appropriate JSON under `data/`:

- `glossary.json`: stable ID, term, definition, suggested chapter numbers, provenance.
- `chapters.json`: chapter titles, units, learning goals, and OpenStax topic mapping.
- `questions.json`: question, choices, correct choice index, explanation, and source information.
- `bridges.json`: written connection prompts and self-assessment checkpoints.

Keep existing IDs stable. After content changes:

```sh
npm run build
npm test
```

Commit the JSON changes and regenerated `assets/data.js`. Push to `main`; Pages will redeploy. The validation script deliberately fails if the bundle no longer matches its source data. Its baseline counts also need intentional updates if you add or remove content.

For a more controlled update, create a branch and pull request, wait for checks, and review before merging into `main`. Branch-based Pages publication is not automatically blocked by a failing check, so do not assume the check workflow is a deployment gate.

To create an updated standalone file, run `npm run standalone`. The `dist/` output is excluded from git because it duplicates the source app.

## 9. Understand the content licenses

All 1,966 definitions in this package are newly drafted study explanations. The scientific term list is retained; the app does not describe its definitions as the official Campbell glossary. Retaining common scientific terms does not itself grant rights to copy protected textbook expression. Copyright can also protect an original compilation's selection or arrangement; the rewrite is not a legal guarantee about every possible use.

Keep `LICENSE`, `CONTENT_LICENSE.md`, and `ATTRIBUTION.md`. Code is MIT; newly written study content is CC BY 4.0; OpenStax-derived questions are CC BY-NC-SA 4.0. A paid, advertising-supported, or otherwise commercial distribution needs a separate assessment of the OpenStax material's permissions, or replacement with content licensed for that use. Public availability of Quizlet, YouTube, or publisher practice pages is not equivalent to a reuse license.

Retain credits beside adapted questions and mark later changes. Do not add Pearson glossary wording, textbook scans, paid test-bank items, or third-party images merely because they can be found online. Original material you create can be added directly; reuse of other material should follow its applicable license or permission.

## Troubleshooting

**404 at the website address:** Check Pages settings, the deployment status, and that `index.html` is at the selected root. Use the Pages URL, not the repository's `github.com` URL.

**Page has no styling or content:** Confirm `assets/` was uploaded and the browser console has no missing-file errors. Keep filename capitalization unchanged. All bundled paths are relative and support a repository subpath.

**Changes do not appear:** Confirm the latest deployment finished, then refresh with cache bypass. JSON edits require a rebuilt and committed `assets/data.js`.

**Progress seems missing:** Check the exact website address and browser profile. Local files, localhost, github.io, and a custom domain do not share the same storage. Restore an exported backup.

**No questions in a practice selection:** A “previously missed” set can be empty. Try public practice or broaden the chapter scope. The starter bank contains two sourced questions per chapter.

**Want a custom domain later:** Follow GitHub's domain verification and DNS instructions before switching. Export progress first because a new domain uses a different browser storage origin.

## Official references

Checked October 2026:

- GitHub Pages configuration: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages overview and public availability: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub custom-domain documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- OpenStax Biology 2e licensing and contributors: https://openstax.org/books/biology-2e/pages/preface
- U.S. Copyright Office, works not protected: https://www.copyright.gov/circs/circ33.pdf
