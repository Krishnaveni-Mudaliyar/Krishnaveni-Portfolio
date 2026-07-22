import { qsa } from '../core/dom.js';

export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
            bar.style.transform = `scaleX(${bar.dataset.width})`;
          });
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  qsa('.reveal').forEach((elm) => observer.observe(elm));
}
