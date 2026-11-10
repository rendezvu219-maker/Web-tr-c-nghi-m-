import { defineMorphIcon } from 'https://esm.sh/morphicons@2.0.2/element';

defineMorphIcon();

const menuPath = 'M4 6h16M4 12h16M4 18h16';
const closePath = 'M6 6l12 12M18 6L6 18';
const button = document.querySelector('#nav-toggle');
const nav = document.querySelector('#main-nav');

if (button && nav) {
  const icon = button.querySelector('morph-icon');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    button.setAttribute('aria-label', open ? 'Mở menu' : 'Đóng menu');
    nav.classList.toggle('is-open', !open);
    icon?.setAttribute('icon', open ? menuPath : closePath);
  });
  nav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Mở menu');
    nav.classList.remove('is-open');
    icon?.setAttribute('icon', menuPath);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') button.click();
  });
}
