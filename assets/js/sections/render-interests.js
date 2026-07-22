import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderInterests(interests) {
  qs('#interestsGrid').innerHTML = interests
    .map((i) => `
      <div class="interest-item">
        <div class="interest-icon">${i.icon}</div>
        <div class="interest-name">${escapeHTML(i.name)}</div>
        <div class="interest-desc">${escapeHTML(i.desc)}</div>
      </div>`)
    .join('');
}
