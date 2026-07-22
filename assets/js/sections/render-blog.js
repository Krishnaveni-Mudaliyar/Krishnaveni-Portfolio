import { qs } from '../core/dom.js';
import { escapeHTML } from '../core/utils.js';

export function renderBlog(posts) {
  qs('#blogList').innerHTML = posts
    .map((post) => `
      <a href="${post.url}" target="_blank" rel="noopener" class="blog-row">
        <span class="blog-day">${escapeHTML(post.day)}</span>
        <span class="blog-row-body">
          <span class="blog-row-title">${escapeHTML(post.title)}</span>
          <span class="blog-row-excerpt">${escapeHTML(post.excerpt)}</span>
        </span>
        <span class="blog-row-arrow">→</span>
      </a>`)
    .join('');
}
