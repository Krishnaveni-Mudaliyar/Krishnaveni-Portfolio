# Project Structure

```
Developer-Portfolio/
│
├── index.html                  # Static shell — empty containers, no inline content
├── package.json
├── README.md
├── PROJECT_STRUCTURE.md        # (this file)
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── base/                # variables.css, reset.css, typography.css
│   │   ├── layout/               # nav.css, section.css
│   │   ├── components/           # cursor.css, buttons.css, tags.css, cards.css
│   │   ├── sections/              # one file per page section (hero.css, about.css, ...)
│   │   ├── themes/                # theme architecture notes (values live in base/variables.css)
│   │   └── main.css               # imports everything above, in cascade order
│   │
│   ├── js/
│   │   ├── core/                  # dom.js, utils.js — no dependencies on anything else
│   │   ├── services/              # data-loader.js (fetch+cache JSON), theme.js
│   │   ├── components/            # cursor.js, nav.js — reusable interactive widgets
│   │   ├── sections/               # render-*.js — one renderer per section, pure DOM writers
│   │   ├── animations/             # reveal.js — scroll-triggered reveal + skill bar fill
│   │   └── main.js                 # bootstraps: load data → render all → wire up interactivity
│   │
│   ├── data/                     # *** all editable content lives here as JSON ***
│   │   ├── profile.json
│   │   ├── experience.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── education.json
│   │   ├── certifications.json
│   │   ├── achievements.json     # interests grid
│   │   ├── blogs.json            # 30-day BC learning series posts
│   │   ├── testimonials.json     # empty placeholder — same shape as JSON Testimonial Widget project
│   │   └── socials.json
│   │
│   ├── images/                   # favicon.svg, any future photos/screenshots
│   ├── documents/                # resume PDF goes here
│   ├── fonts/                    # (unused — fonts loaded from Google Fonts CDN; add local files here if you self-host)
│   └── libraries/                # (unused — no third-party JS libraries are used)
│
├── components/                   # reserved for future shared HTML fragments (e.g. multi-page nav/footer)
├── pages/                        # reserved for future additional pages (e.g. standalone project case-study pages)
├── public/                       # reserved for static files that must be served at a fixed root path
├── blogs/                        # reserved for future full blog posts in Markdown (currently sourced from LinkedIn)
├── docs/                         # supplementary docs (roadmap notes, etc.)
├── screenshots/                  # reserved for README/demo screenshots
├── scripts/                      # build-css.sh — production CSS concatenation
├── tests/                        # reserved — no automated tests yet (static content site)
└── .github/                      # reserved for CI workflows (e.g. Lighthouse CI, link checking)
```

## Data flow

```
assets/data/*.json
        │
        ▼  (fetch, cached in-memory)
assets/js/services/data-loader.js
        │
        ▼
assets/js/main.js  ──►  assets/js/sections/render-*.js  ──►  writes into index.html's empty <div id="...">
        │
        ▼
assets/js/components/{nav,cursor}.js + animations/reveal.js  (interactivity, runs after render)
```

## Why some folders are empty

`components/`, `pages/`, `public/`, `blogs/`, `tests/`, `.github/` are scaffolded per the original architecture brief but intentionally left empty rather than filled with placeholder files — this is a single-page site today, so a multi-page component/page system and a test suite would be speculative. They're there so the project can grow into them without a restructure.
