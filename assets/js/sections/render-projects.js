import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderProjects(projects) {
  // Flagship project(s) first, preserving original relative order otherwise
  const sorted = [...projects].sort((a, b) => (b.flagship === true) - (a.flagship === true));

  qs('#projectsGrid').innerHTML = sorted
    .map((p) => `
      <div class="project-card card-outline card-accent-top reveal${p.flagship ? ' flagship' : ''}">
        <div class="project-card-header">
          <div class="project-icon">${p.icon}</div>
          <div class="project-stack">
            ${p.stack.map((s) => `<span class="project-stack-badge">${escapeHTML(s)}</span>`).join('')}
          </div>
        </div>
        <h3 class="project-name">
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link">${escapeHTML(p.name)} ↗</a>
        </h3>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <div class="project-features">
          ${p.features.map((f) => `<div class="project-feature">${escapeHTML(f)}</div>`).join('')}
        </div>
      </div>`)
    .join('');
}
