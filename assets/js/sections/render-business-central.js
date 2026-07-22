import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderBusinessCentral(data) {
  const container = qs('#businessCentralGrid');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="business-central-card reveal">
      <p class="hub-card-eyebrow">Business Central focus</p>
      <h3>${escapeHTML(data.headline)}</h3>
      <p>${escapeHTML(data.summary)}</p>
      <div class="business-central-focus-list">
        ${data.focusAreas.map((item) => `<span class="business-central-pill">${escapeHTML(item)}</span>`).join('')}
      </div>
    </div>
    <div class="business-central-card reveal">
      <p class="hub-card-eyebrow">Highlights</p>
      <ul class="hub-list">
        ${data.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
      </ul>
    </div>
    <div class="business-central-card business-central-card-wide reveal">
      <p class="hub-card-eyebrow">Recruiter metrics</p>
      <div class="business-central-metrics">
        ${data.metrics.map((metric) => `
          <div class="business-central-metric">
            <strong>${escapeHTML(metric.value)}</strong>
            <span>${escapeHTML(metric.label)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
