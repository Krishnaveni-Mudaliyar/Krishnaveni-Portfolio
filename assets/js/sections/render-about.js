import { qs } from '../core/dom.js';

export function renderAbout(profile) {
  // profile.about entries intentionally contain trusted inline HTML (<strong> tags)
  // authored in the data file, not user input — safe to inject directly.
  qs('#aboutText').innerHTML = profile.about.map((p) => `<p>${p}</p>`).join('');

  qs('#aboutStats').innerHTML = profile.stats
    .map((s) => `
      <div class="stat-item">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`)
    .join('');
}
