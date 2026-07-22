import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderAnalytics(data) {
  const container = qs('#analyticsPanel');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="analytics-card reveal">
      <p class="hub-card-eyebrow">Dynamic analytics ready</p>
      <h3>${escapeHTML(data.provider || 'Analytics provider')}</h3>
      <p>${escapeHTML(data.notes || 'Analytics can be wired in once a backend is connected.')}</p>
      <div class="analytics-features">
        ${data.features.map((feature) => `<span class="business-central-pill">${escapeHTML(feature)}</span>`).join('')}
      </div>
    </div>
  `;
}
