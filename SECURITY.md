# Security

This is a static portfolio site with no backend, no user accounts, and no data collection — the attack surface is intentionally small.

## Reporting a concern
If you find a security issue (e.g. an XSS vector in how JSON content is rendered), please email **krishnaveni.hireme@gmail.com** rather than opening a public issue.

## Notes for maintainers
- All dynamic content rendering goes through `assets/js/core/utils.js`'s `escapeHTML()` before insertion, **except** `profile.json`'s `about` field, which intentionally contains trusted inline `<strong>` markup authored directly in the data file (not user input). If `assets/data/*.json` ever accepts submissions from anyone other than you, escape that field too before rendering.
- No third-party scripts run on this site beyond the Google Fonts stylesheet — there is no analytics, tracking, or ad code.
- Dependencies: none at runtime. `package.json` only lists `serve` as a dev convenience via `npx`.
