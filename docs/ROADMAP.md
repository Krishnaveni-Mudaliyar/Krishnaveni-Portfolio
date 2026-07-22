# Roadmap (deferred features)

These were listed in the original design brief as "future features — prepare structure only." They are **not** implemented, not stubbed with placeholder UI, and not wired into `main.js`. Notes below are for when you're ready to build them for real.

- **GitHub statistics / contribution graph** — GitHub's REST API is public and unauthenticated for read access to public repos; a small `services/github.js` fetching `https://api.github.com/users/Krishnaveni-Mudaliyar` and repo stats would slot into the existing `services/` pattern.
- **Power BI dashboard embed** — needs a published/embeddable Power BI report URL; would live in a new `sections/render-dashboard.js` behind an iframe.
- **Search / filters** (e.g. filtering blog posts or projects by tag) — straightforward client-side filtering over the existing `blogs.json`/`projects.json` arrays, no backend needed.
- **Multi-language** — would need a `assets/data/i18n/` folder per locale and a small string-lookup service; every render function would need a `t(key)` pass.
- **PWA / offline support** — add a `manifest.json` and a service worker caching `assets/data/*.json` and the CSS/JS bundle; meaningful mainly if this becomes a bookmarked/installed app rather than a browsed portfolio.
- **Visitor analytics** — if added, use a privacy-respecting, cookie-free option (e.g. Plausible or GoatCounter) and disclose it in `SECURITY.md` and a footer note.
