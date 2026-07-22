import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderHero(profile) {
  qs('#heroBgText').textContent = profile.firstName;
  qs('#heroEyebrow').textContent = profile.eyebrow;
  qs('#heroName').innerHTML = `${escapeHTML(profile.firstName)}<br><em>${escapeHTML(profile.lastName)}</em>`;
  qs('#heroTagline').textContent = profile.tagline;

  const badgesEl = qs('#heroBadges');
  badgesEl.innerHTML = profile.badges
    .map((b) => `<span class="hero-badge">${escapeHTML(b)}</span>`)
    .join('');

  qs('#heroResumeLink').setAttribute('href', profile.resumeFile);
}
