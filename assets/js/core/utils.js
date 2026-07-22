/**
 * Escapes plain text for safe HTML insertion.
 * NOTE: fields that are allowed to contain intentional inline HTML
 * (e.g. profile.about's <strong> tags) should NOT be passed through this.
 */
export function escapeHTML(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
