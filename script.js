(function(){
  var d=document, root=d.documentElement; root.classList.add('js');

  /* Vérification d'âge */
  var gate=d.getElementById('agegate'), ok=false;
  try{ ok = localStorage.getItem('center_18')==='1'; }catch(e){}
  if(!ok){ gate.hidden=false; d.body.style.overflow='hidden'; var y=d.getElementById('ag-yes'); if(y) y.focus(); }
  d.getElementById('ag-yes').addEventListener('click',function(){
    try{ localStorage.setItem('center_18','1'); }catch(e){}
    gate.hidden=true; d.body.style.overflow='';
  });

  /* Menu mobile */
  var b=d.querySelector('.burger'), nav=d.getElementById('menu');
  b.addEventListener('click',function(){
    var o=nav.classList.toggle('open'); b.setAttribute('aria-expanded',o);
  });
  nav.addEventListener('click',function(e){ if(e.target.tagName==='A'){ nav.classList.remove('open'); b.setAttribute('aria-expanded','false'); }});

  /* Onglets de la carte */
  var tabs=[].slice.call(d.querySelectorAll('[role="tab"]'));
  function show(t){
    tabs.forEach(function(x){
      var on = x===t; x.setAttribute('aria-selected',on);
      d.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){ show(t); });
    t.addEventListener('keydown',function(e){
      var n = e.key==='ArrowRight'?i+1 : e.key==='ArrowLeft'?i-1 : null;
      if(n===null) return; n=(n+tabs.length)%tabs.length; tabs[n].focus(); show(tabs[n]); e.preventDefault();
    });
  });

  /* Apparition au scroll */
  var els=[].slice.call(d.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
    },{threshold:.12});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
})();
