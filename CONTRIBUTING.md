# Contributing

This is a personal portfolio, but the guidelines below keep it maintainable if you (or a future collaborator) come back to it later.

## Ground rules
- **Content changes → JSON only.** Don't hand-edit `index.html` or the `render-*.js` files just to update text; edit the matching file in `assets/data/`.
- **One responsibility per file.** A new CSS rule belongs in the file matching its section/component, not bolted onto whatever file is open.
- **No inline styles or scripts** in `index.html` beyond the two small bootstrap snippets already there (theme pre-paint, JSON-LD).
- **Keep it dependency-free.** This project's whole point is plain HTML/CSS/JS with no build step required to run. Don't add npm packages that are needed at runtime — dev-only tooling (linters, a bundler for the optional production build) is fine.

## Adding a new project
Add an object to `assets/data/projects.json` following the existing shape (`slug`, `icon`, `name`, `githubUrl`, `stack`, `description`, `features`). Set `"flagship": true` on at most one project to feature it full-width.

## Adding a new section
1. Add a data file in `assets/data/`.
2. Add a CSS file in `assets/css/sections/` and import it from `assets/css/main.css`.
3. Add a renderer in `assets/js/sections/render-<name>.js` that only writes into pre-existing container IDs.
4. Add the empty container(s) to `index.html`.
5. Call the loader + renderer from `assets/js/main.js`.

## Before committing
- Run `bash scripts/build-css.sh` if you're testing the production stylesheet path.
- Open the page via a local server (`npx serve .`) and check the browser console for errors — `fetch()` for JSON silently fails if opened as a `file://` URL.
- Check both light and dark themes, and a mobile viewport (nav becomes a hamburger menu below 900px).
