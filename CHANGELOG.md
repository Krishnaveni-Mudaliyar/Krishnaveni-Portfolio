# Changelog

All notable changes to this project are documented here.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [1.0.0] — 2026-07-22

### Changed
- Rebuilt from a single 712-line `portfolio.html` file into a modular architecture:
  content moved to `assets/data/*.json`, styles split into `assets/css/{base,layout,components,sections}`,
  behavior split into `assets/js/{core,services,components,sections,animations}`.
- Education section updated: MCA now shows as completed (CGPA 8.16/10) instead of "Result Awaited".

### Added
- Dark/light theme toggle (`assets/js/services/theme.js`), respecting OS preference and remembering choice.
- Mobile hamburger navigation menu (previous version overflowed on small viewports).
- `prefers-reduced-motion` support; custom cursor auto-disables on touch/coarse-pointer devices.
- Visible focus states (`:focus-visible`) and a skip-to-content link for keyboard/screen-reader users.
- SEO meta tags (description, Open Graph, canonical) and a `Person` JSON-LD block.
- `scripts/build-css.sh` to concatenate modular CSS for production (avoids `@import` waterfall).

### Unchanged (content preserved as-is)
- All copy, project descriptions, blog post list (30 entries), certifications, and visual identity
  (Cormorant Garamond / DM Mono, cream/gold palette, custom cursor, scroll-reveal animations).

### Not implemented (see README "Known gaps")
- Testimonials (no real content exists yet).
- GitHub stats, Power BI dashboard embed, search/filter, PWA/offline support — deferred, not stubbed.
- Four project case studies referenced in the original brief (Medilux, Fixed Asset Transfer Enhancement,
  Business Central Reports, Vendor Performance Tracker) — not invented; add when real write-ups exist.
