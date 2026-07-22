import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderProjects(projects) {
  const searchInput = qs('#projectSearch');
  const categoryFilter = qs('#projectCategoryFilter');
  const container = qs('#projectsGrid');

  if (!container) return;

  const sorted = [...projects].sort((a, b) => (b.flagship === true) - (a.flagship === true));
  const categories = ['all', ...new Set(sorted.map((project) => project.category).filter(Boolean))];

  if (categoryFilter) {
    categoryFilter.innerHTML = categories
      .map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category === 'all' ? 'All' : category)}</option>`)
      .join('');
  }

  function renderFilteredProjects() {
    const searchValue = (searchInput?.value || '').trim().toLowerCase();
    const selectedCategory = categoryFilter?.value || 'all';

    const filtered = sorted.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const searchableText = [project.name, project.description, project.category, ...(project.tags || []), ...(project.stack || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesSearch = searchableText.includes(searchValue);
      return matchesCategory && matchesSearch;
    });

    container.innerHTML = filtered
      .map((p) => `
        <div class="project-card card-outline card-accent-top reveal${p.flagship ? ' flagship' : ''}">
          <div class="project-card-header">
            <div class="project-icon">${p.icon}</div>
            <div class="project-stack">
              ${(p.stack || []).map((s) => `<span class="project-stack-badge">${escapeHTML(s)}</span>`).join('')}
            </div>
          </div>
          <h3 class="project-name">
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link">${escapeHTML(p.name)} ↗</a>
          </h3>
          <p class="project-desc">${escapeHTML(p.description)}</p>
          ${p.businessImpact ? `<p class="project-impact">${escapeHTML(p.businessImpact)}</p>` : ''}
          ${p.modules ? `<div class="project-meta">
            <span>${escapeHTML(p.industry || 'Business solution')}</span>
            <span>${p.tables ? `${p.tables} tables` : ''}</span>
            <span>${p.pages ? `${p.pages} pages` : ''}</span>
            <span>${p.reports ? `${p.reports} reports` : ''}</span>
          </div>` : ''}
          ${p.modules ? `<div class="project-modules">
            ${p.modules.map((module) => `<span class="project-module">${escapeHTML(module)}</span>`).join('')}
          </div>` : ''}
          <div class="project-features">
            ${(p.features || []).map((f) => `<div class="project-feature">${escapeHTML(f)}</div>`).join('')}
          </div>
        </div>`)
      .join('');
  }

  searchInput?.addEventListener('input', renderFilteredProjects);
  categoryFilter?.addEventListener('change', renderFilteredProjects);
  renderFilteredProjects();
}
