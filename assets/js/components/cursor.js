import { qsa } from '../core/dom.js';

export function initCursor() {
  // Skip entirely on touch/coarse-pointer devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.body.classList.add('has-fine-pointer');
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Re-bind hover targets whenever called (safe to call after dynamic render)
  bindHoverTargets(ring);
}

export function bindHoverTargets(ring) {
  ring = ring || document.getElementById('cursorRing');
  if (!ring) return;
  qsa('a, button, .interest-item, .edu-card, .cert-card, .project-card, .blog-row').forEach((elm) => {
    elm.addEventListener('mouseenter', () => {
      ring.style.width = '60px'; ring.style.height = '60px'; ring.style.opacity = '.8';
    });
    elm.addEventListener('mouseleave', () => {
      ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '.5';
    });
  });
}
