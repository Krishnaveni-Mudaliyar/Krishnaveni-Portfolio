import { qs } from '../core/dom.js';

export function renderContact(socials, profile) {
  qs('#contactEmail').setAttribute('href', `mailto:${socials.email}`);
  qs('#contactEmail .contact-link-value').textContent = socials.email;

  qs('#contactLinkedin').setAttribute('href', socials.linkedin.url);
  qs('#contactLinkedin .contact-link-value').textContent = socials.linkedin.label;

  qs('#contactGithub').setAttribute('href', socials.github.url);
  qs('#contactGithub .contact-link-value').textContent = socials.github.label;

  qs('#contactResume').setAttribute('href', socials.resume.file);
  qs('#contactResume .contact-link-value').textContent = socials.resume.label;

  qs('#footerSig').textContent = profile.footerSignature;
}
