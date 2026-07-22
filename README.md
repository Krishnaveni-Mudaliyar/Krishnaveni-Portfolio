# Krishnaveni Mudaliyar — Portfolio

A modular, JSON-driven personal portfolio site built with plain HTML5, CSS3, and vanilla JavaScript (ES modules) — no framework, no build step required to run it.

**Live areas:** Hero · About · Work Experience · Skills · Featured Projects · Education & Certifications · Interests · Blog · Contact

## Why this architecture

All personal content (profile, experience, skills, projects, education, certifications, interests, blog posts, social links) lives in `assets/data/*.json`. The HTML is a static shell of empty containers with IDs; `assets/js/main.js` fetches the JSON and hands it to one renderer per section. **To update content, edit a JSON file — never touch HTML or JS.**

CSS is split by responsibility (`base/`, `layout/`, `components/`, `sections/`) and wired together through `assets/css/main.css`. JS is split the same way (`core/`, `services/`, `components/`, `sections/`, `animations/`) and wired through `assets/js/main.js`.

## Running locally

No build tool is required. Because the page loads JSON via `fetch()`, it must be served over HTTP (not opened as a `file://` URL):

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL.

## Editing content

| To change...            | Edit...                                  |
|--------------------------|-------------------------------------------|
| Name, tagline, about text, stats | `assets/data/profile.json` |
| Job history               | `assets/data/experience.json` |
| Skills & proficiency bars | `assets/data/skills.json` |
| Projects                  | `assets/data/projects.json` (set `"flagship": true` on one project to feature it) |
| Degrees                   | `assets/data/education.json` |
| Certifications            | `assets/data/certifications.json` |
| Interests grid            | `assets/data/achievements.json` |
| Blog / learning-series posts | `assets/data/blogs.json` |
| Email / LinkedIn / GitHub / resume link | `assets/data/socials.json` |

Resume PDF goes in `assets/documents/` — the filename must match `resumeFile` in `profile.json` and `resume.file` in `socials.json`.

## Dark / light mode

Handled entirely with CSS custom properties in `assets/css/base/variables.css` (`:root[data-theme="light"]` / `:root[data-theme="dark"]`) and `assets/js/services/theme.js`. Respects the visitor's OS preference on first visit, remembers their choice afterward, and applies before first paint to avoid a flash.

## Production build

`assets/css/main.css` uses `@import` for readability during development, which costs a request waterfall in production. Run:

```bash
npm run build:css
```

This concatenates all modules into `assets/css/dist.css`. Point `index.html`'s stylesheet `<link>` at `assets/css/dist.css` before deploying if you want to avoid the import waterfall (optional — the site works correctly either way, this is purely a performance tweak).

## Deploying

Static site, no server-side code — deploy the whole folder to **Netlify** or **GitHub Pages** as-is. No environment variables, no build command required unless you choose to run `build:css`.

## Project structure

See [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) for the full folder map and what belongs where.

## Known gaps / next steps

- `assets/data/testimonials.json` is empty — populate once you have real client/colleague quotes.
- Four "future features" from the original brief (GitHub stats, Power BI dashboard embed, search/filter, PWA/offline support) are intentionally **not** implemented — this is placeholder-free, working code only. See `docs/ROADMAP.md` for notes if you want to pick these up later.
- The original expanded project brief referenced four additional case studies (Medilux, Fixed Asset Transfer Enhancement, Business Central Reports, Vendor Performance Tracker) that don't exist in the source content — they were intentionally **not invented**. Add them to `projects.json` once you have real write-ups.
