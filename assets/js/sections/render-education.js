import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderEducation(education, certifications) {
  qs('#eduGrid').innerHTML = education
    .map((e) => `
      <div class="edu-card card-outline card-accent-left">
        <div class="edu-period">${escapeHTML(e.period)}</div>
        <h3 class="edu-degree">${escapeHTML(e.degree)}</h3>
        <p class="edu-school">${escapeHTML(e.school)}</p>
        <p class="edu-detail">${escapeHTML(e.detail)}</p>
      </div>`)
    .join('');

  qs('#certGrid').innerHTML = certifications
    .map((c) => `
      <div class="cert-card card-outline card-accent-left">
        <div class="cert-issuer">${escapeHTML(c.issuer)}</div>
        <div class="cert-name">${escapeHTML(c.name)}</div>
        <div class="cert-date">${escapeHTML(c.date)}</div>
      </div>`)
    .join('');
}
