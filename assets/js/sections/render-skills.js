import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderSkills(skillGroups) {
  qs('#skillsGrid').innerHTML = skillGroups
    .map((group) => `
      <div class="skill-category reveal">
        <div class="skill-cat-title">${escapeHTML(group.category)}</div>
        ${group.items.map((item) => `
          <div class="skill-item">
            <span class="skill-name">${escapeHTML(item.name)}</span>
            <div class="skill-bar"><div class="skill-fill" data-width="${item.level}"></div></div>
          </div>`).join('')}
      </div>`)
    .join('');
}
