'use strict';

const themeToggle = document.querySelector('#theme-toggle');
const greetingButton = document.querySelector('#greeting-button');
const interactionMessage = document.querySelector('#interaction-message');
const currentYear = document.querySelector('#current-year');

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.textContent = isLight ? 'Usar tema oscuro' : 'Usar tema claro';
  });
}

if (greetingButton && interactionMessage) {
  greetingButton.addEventListener('click', () => {
    interactionMessage.textContent = '¡Gracias por visitar mi primera página web!';
  });
}
