(() => {
  const body = document.body;
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  let returnFocus = null;

  function closeMenu() {
    if (!menu || !menuButton || menuButton.getAttribute('aria-expanded') !== 'true') return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
    menu.hidden = true;
    body.classList.remove('menu-open');
    window.removeEventListener('keydown', onKeydown);
    document.removeEventListener('pointerdown', onOutside);
    if (returnFocus) returnFocus.focus({ preventScroll: true });
    returnFocus = null;
  }

  function onKeydown(event) {
    if (event.key === 'Escape') closeMenu();
  }

  function onOutside(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  }

  function openMenu() {
    if (!menu || !menuButton) return;
    returnFocus = menuButton;
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Закрыть меню');
    body.classList.add('menu-open');
    window.addEventListener('keydown', onKeydown);
    document.addEventListener('pointerdown', onOutside);
    const firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      menuButton.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      closeMenu();
      window.setTimeout(() => menuButton.focus({ preventScroll: true }), 0);
    }));
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 768px)').matches && menuButton.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  const waText = 'Здравствуйте! Хочу записаться на пробный урок.';
  document.querySelectorAll('[data-wa]').forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('text', waText);
    link.href = url.toString();
  });
})();
