(function(){
  'use strict';
  var toggle=document.querySelector('.menu-toggle');
  var menu=document.getElementById('mobile-menu');
  var mobileLinks=menu?menu.querySelectorAll('a[href^="#"]'):[];
  var lastFocus=null;
  function openMenu(){
    if(!toggle||!menu)return;
    lastFocus=document.activeElement;
    menu.hidden=false;
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Закрыть меню');
    document.body.style.overflow='hidden';
  }
  function closeMenu(returnFocus){
    if(!toggle||!menu)return;
    menu.hidden=true;
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Открыть меню');
    document.body.style.overflow='';
    if(returnFocus && lastFocus && typeof lastFocus.focus==='function')lastFocus.focus();
  }
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      toggle.getAttribute('aria-expanded')==='true'?closeMenu(true):openMenu();
    });
    Array.prototype.forEach.call(mobileLinks,function(link){link.addEventListener('click',function(){closeMenu(false);});});
    document.addEventListener('click',function(e){
      if(menu.hidden)return;
      if(!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu(true);
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&!menu.hidden)closeMenu(true);
    });
    window.addEventListener('resize',function(){if(window.innerWidth>=700&&!menu.hidden)closeMenu(false);});
    window.addEventListener('orientationchange',function(){if(window.innerWidth>=700&&!menu.hidden)closeMenu(false);});
  }
  var waLinks=document.querySelectorAll('[data-wa-link]');
  var readyText='Здравствуйте! Хочу записаться на визит';
  Array.prototype.forEach.call(waLinks,function(link){
    var encoded=encodeURIComponent(readyText);
    link.href='https://wa.me/77071112233?text='+encoded;
  });
})();
