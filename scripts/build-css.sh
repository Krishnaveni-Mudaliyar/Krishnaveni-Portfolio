#!/usr/bin/env bash
# Concatenates the modular CSS into a single production file so the browser
# doesn't have to make a waterfall of @import requests on first load.
# Usage: bash scripts/build-css.sh
set -e
cd "$(dirname "$0")/.."
OUT="assets/css/dist.css"
FILES=(
  assets/css/base/variables.css
  assets/css/base/reset.css
  assets/css/base/typography.css
  assets/css/layout/nav.css
  assets/css/layout/section.css
  assets/css/components/cursor.css
  assets/css/components/buttons.css
  assets/css/components/tags.css
  assets/css/components/cards.css
  assets/css/sections/hero.css
  assets/css/sections/about.css
  assets/css/sections/experience.css
  assets/css/sections/skills.css
  assets/css/sections/projects.css
  assets/css/sections/education.css
  assets/css/sections/interests.css
  assets/css/sections/blog.css
  assets/css/sections/contact.css
)
> "$OUT"
for f in "${FILES[@]}"; do
  echo "/* ---- $f ---- */" >> "$OUT"
  cat "$f" >> "$OUT"
  echo "" >> "$OUT"
done
echo "Built $OUT ($(wc -l < "$OUT") lines). Point index.html at this file instead of main.css for production."
