(function(){
  var root=document.documentElement;
  var themeBtn=document.getElementById('theme');
  if(themeBtn){themeBtn.addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    var next=dark?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next)}catch(e){}
  });}
  var nav=document.getElementById('nav'),burger=document.getElementById('burger');
  if(burger&&nav){
    burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}});
  }
  // highlight current section in the nav
  var links={};[].forEach.call(document.querySelectorAll('.nav a'),function(a){links[a.getAttribute('href').slice(1)]=a});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){
      if(en.isIntersecting){for(var k in links)links[k].classList.remove('active');var a=links[en.target.id];if(a)a.classList.add('active')}
    })},{rootMargin:'-45% 0px -50% 0px'});
    [].forEach.call(document.querySelectorAll('main section[id]'),function(s){io.observe(s)});
  }
  // image lightbox
  var lb=document.getElementById('lightbox');
  if(lb){
    var big=lb.querySelector('img'),cap=lb.querySelector('p');
    [].forEach.call(document.querySelectorAll('img.zoom'),function(im){im.addEventListener('click',function(){
      big.src=im.src;big.alt=im.alt;cap.textContent=im.alt;lb.hidden=false})});
    lb.addEventListener('click',function(){lb.hidden=true});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
  }
})();
