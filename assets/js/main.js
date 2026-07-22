import { loadAll } from './services/data-loader.js';
import { initTheme } from './services/theme.js';
import { initCursor, bindHoverTargets } from './components/cursor.js';
import { initNav } from './components/nav.js';
import { initReveal } from './animations/reveal.js';

import { renderHero } from './sections/render-hero.js';
import { renderAbout } from './sections/render-about.js';
import { renderExperience } from './sections/render-experience.js';
import { renderSkills } from './sections/render-skills.js';
import { renderProjects } from './sections/render-projects.js';
import { renderEducation } from './sections/render-education.js';
import { renderInterests } from './sections/render-interests.js';
import { renderBlog } from './sections/render-blog.js';
import { renderContact } from './sections/render-contact.js';

async function init() {
  // Theme should apply before first paint of content to avoid a flash;
  // it's already applied synchronously via the inline snippet in <head>,
  // this just wires up the toggle button.
  initTheme();

  const data = await loadAll([
    'profile', 'experience', 'skills', 'projects',
    'education', 'certifications', 'achievements', 'blogs', 'socials'
  ]);

  renderHero(data.profile);
  renderAbout(data.profile);
  renderExperience(data.experience);
  renderSkills(data.skills);
  renderProjects(data.projects);
  renderEducation(data.education, data.certifications);
  renderInterests(data.achievements);
  renderBlog(data.blogs);
  renderContact(data.socials, data.profile);

  // Interactivity that depends on rendered DOM
  initNav();
  initReveal();
  initCursor();
  bindHoverTargets();
}

init().catch((err) => {
  console.error('Portfolio failed to initialize:', err);
  const main = document.querySelector('main') || document.body;
  const notice = document.createElement('p');
  notice.style.cssText = 'padding:40px 60px;font-family:monospace;color:#b04a3c;';
  notice.textContent = 'Something went wrong loading this page\u2019s content. Please refresh, or check the console for details.';
  main.prepend(notice);
});
