(function(){
  'use strict';
  var body=document.body;
  var menuButton=document.querySelector('.menu-toggle');
  var menu=document.getElementById('mobile-menu');
  if(!menuButton||!menu)return;

  var links=menu.querySelectorAll('a');
  var scrollLockClass='menu-open';
  var closeMenu=function(restoreFocus){
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Открыть меню');
    menu.hidden=true;
    body.classList.remove(scrollLockClass);
    if(restoreFocus)menuButton.focus();
  };
  var openMenu=function(){
    menu.hidden=false;
    menuButton.setAttribute('aria-expanded','true');
    menuButton.setAttribute('aria-label','Закрыть меню');
    body.classList.add(scrollLockClass);
  };
  menuButton.addEventListener('click',function(){
    if(menu.hidden)openMenu();else closeMenu(false);
  });
  links.forEach(function(link){
    link.addEventListener('click',function(){closeMenu(false);});
  });
  document.addEventListener('click',function(event){
    if(menu.hidden)return;
    if(!menu.contains(event.target)&&!menuButton.contains(event.target))closeMenu(false);
  });
  document.addEventListener('keydown',function(event){
    if(event.key==='Escape'&&!menu.hidden)closeMenu(true);
  });
  window.addEventListener('orientationchange',function(){
    if(!menu.hidden)closeMenu(false);
  });
  window.addEventListener('resize',function(){
    if(window.matchMedia('(min-width:900px)').matches&&!menu.hidden)closeMenu(false);
  });

  var defaultBooking='Здравствуйте! Хочу забронировать столик в СРЕЗ. Дата: __, время: __, гостей: __.';
  document.querySelectorAll('[data-wa-link]').forEach(function(link){
    var number=link.getAttribute('data-wa-number')||'';
    var text=link.getAttribute('data-wa-text')||'';
    if(number&&/^[0-9]{5,}$/.test(number)){
      var message=(text&&text.length)?text:defaultBooking;
      link.href='https://wa.me/'+number+'?text='+encodeURIComponent(message);
    }
  });
})();
