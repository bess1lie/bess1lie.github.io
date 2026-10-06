(() => {
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  let lastFocus = null;

  function closeMenu() {
    if (!toggle || !menu || toggle.getAttribute('aria-expanded') !== 'true') return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Открыть меню');
    menu.hidden = true;
    body.classList.remove('menu-open');
    if (lastFocus) lastFocus.focus();
  }
  function openMenu() {
    lastFocus = document.activeElement;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Закрыть меню');
    body.classList.add('menu-open');
    const first = menu.querySelector('a');
    if (first) first.focus();
  }
  if (toggle && menu) {
    toggle.addEventListener('click', () => toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu());
    menu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('click', e => {
      if (toggle.getAttribute('aria-expanded') === 'true' && !menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); }, {passive:true});
  }

  const tabs = [...document.querySelectorAll('.day-tab')];
  const panels = [...document.querySelectorAll('.schedule-panel')];
  tabs.forEach((tab, i) => tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    panels.forEach(p => { p.hidden = true; p.classList.remove('is-active'); });
    tab.classList.add('is-active'); tab.setAttribute('aria-selected','true');
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) { panel.hidden = false; panel.classList.add('is-active'); }
  }));
  tabs.forEach((tab, i) => tab.addEventListener('keydown', e => {
    const keys = ['ArrowLeft','ArrowRight'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus(); tabs[next].click();
  }));
})();
