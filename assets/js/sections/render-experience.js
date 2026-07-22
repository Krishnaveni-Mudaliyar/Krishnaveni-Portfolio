import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderExperience(experience) {
  qs('#expList').innerHTML = experience
    .map((job) => `
      <div class="exp-item reveal">
        <div class="exp-meta">
          <div class="exp-period">${escapeHTML(job.period)}</div>
          <div class="exp-company">${escapeHTML(job.company)}</div>
          ${job.companyBadge ? `<span class="exp-company-badge">${escapeHTML(job.companyBadge)}</span>` : ''}
        </div>
        <div class="exp-body">
          <h3 class="exp-role">${escapeHTML(job.role)}</h3>
          <p class="exp-desc">${escapeHTML(job.description)}</p>
          <div class="exp-tags">
            ${job.tags.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join('')}
          </div>
        </div>
      </div>`)
    .join('');
}
