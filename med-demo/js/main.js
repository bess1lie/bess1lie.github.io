(function(){
  var button=document.querySelector('.menu-toggle');
  var menu=document.querySelector('#site-menu');
  if(!button||!menu)return;
  var links=menu.querySelectorAll('a');
  function closeMenu(){
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Открыть меню');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
  function openMenu(){
    button.setAttribute('aria-expanded','true');
    button.setAttribute('aria-label','Закрыть меню');
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
  }
  button.addEventListener('click',function(){
    button.getAttribute('aria-expanded')==='true'?closeMenu():openMenu();
  });
  links.forEach(function(link){link.addEventListener('click',closeMenu)});
  document.addEventListener('click',function(event){
    if(!menu.classList.contains('is-open'))return;
    if(!menu.contains(event.target)&&!button.contains(event.target)){
      closeMenu();
    }
  });
  document.addEventListener('keydown',function(event){
    if(event.key==='Escape'&&menu.classList.contains('is-open')){
      closeMenu();
      button.focus();
    }
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>=780)closeMenu();
  });
  window.addEventListener('orientationchange',function(){
    if(window.innerWidth>=780)closeMenu();
  });
})();
