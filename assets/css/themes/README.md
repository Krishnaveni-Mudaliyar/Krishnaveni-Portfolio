Theme values (light/dark) are defined together as CSS custom properties in
`../base/variables.css` using `:root[data-theme="light"]` and
`:root[data-theme="dark"]` selectors, so every other stylesheet only ever
references a token (e.g. `var(--ink)`) and never hardcodes a color. This
folder is kept for future theme variants (e.g. a high-contrast theme) —
add a new `:root[data-theme="..."]` block in variables.css and a matching
option in `assets/js/services/theme.js`.
