(function(){
  'use strict';
  var body=document.body;
  var toggle=document.querySelector('.menu-toggle');
  var menu=document.getElementById('site-menu');
  var header=document.querySelector('[data-header]');
  var focusReturn=null;
  function syncHeaderHeight(){ if(header) document.documentElement.style.setProperty('--header-h',header.getBoundingClientRect().height+'px'); }
  function setMenu(open){
    if(!toggle||!menu)return;
    toggle.setAttribute('aria-expanded',String(open));
    if(window.SiteI18n) window.SiteI18n.updateMenuLabel();
    menu.classList.toggle('is-open',open);
    body.classList.toggle('menu-open',open);
    if(open){focusReturn=document.activeElement;var first=menu.querySelector('a');if(first)first.focus();}
    else if(focusReturn&&typeof focusReturn.focus==='function')focusReturn.focus();
  }
  if(toggle){
    toggle.addEventListener('click',function(){setMenu(toggle.getAttribute('aria-expanded')!=='true');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')setMenu(false);});
    document.addEventListener('click',function(e){if(toggle.getAttribute('aria-expanded')!=='true')return;if(menu.contains(e.target)||toggle.contains(e.target)||e.target.closest('.lang-switch'))return;setMenu(false);});
    menu.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){setMenu(false);});});
    document.querySelectorAll('.lang-option').forEach(function(b){b.addEventListener('click',function(){if(toggle.getAttribute('aria-expanded')==='true')setMenu(false);});});
    function collapseWide(){if(window.matchMedia('(min-width: 700px)').matches&&toggle.getAttribute('aria-expanded')==='true')setMenu(false);}
    window.addEventListener('resize',function(){collapseWide();syncHeaderHeight();});
    window.addEventListener('orientationchange',function(){collapseWide();syncHeaderHeight();});
  }
  syncHeaderHeight();
  document.querySelectorAll('.media-frame img,.work-frame img').forEach(function(img){
    function loaded(){img.classList.add('is-loaded');}
    if(img.complete&&img.naturalWidth>0)loaded();
    img.addEventListener('load',loaded,{once:true});
  });
  document.addEventListener('site-language-change',syncHeaderHeight);
})();
