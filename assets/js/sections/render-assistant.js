import { qs } from '../core/dom.js';

export function renderAssistant() {
  const container = qs('#assistantContent');
  if (!container) return;

  const prompts = [
    'What Business Central work has she done?',
    'What AL development experience does she have?',
    'How would she fit an ERP or technical consultant role?'
  ];

  const cards = prompts
    .map((prompt) => `
      <div class="assistant-card">
        <p>“${prompt}”</p>
        <span>Suggested answer: Business Central delivery, AL extensions, reporting workflows, and cross-functional consulting experience.</span>
      </div>
    `)
    .join('');

  container.innerHTML = cards;
}
