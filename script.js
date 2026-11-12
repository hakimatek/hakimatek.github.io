// Theme toggle
(function(){const r=document.documentElement;try{const t=localStorage.getItem('theme');if(t)r.dataset.theme=t}catch(e){}
  document.getElementById('theme').onclick=()=>{r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',r.dataset.theme)}catch(e){}};})();
// Nav turns solid after the hero
(function(){const n=document.querySelector('.nav'),h=document.getElementById('top');
  const f=()=>n.classList.toggle('solid',h.getBoundingClientRect().bottom<80);f();addEventListener('scroll',f,{passive:true});})();
// Scroll-spy
(function(){const l=[...document.querySelectorAll('#links a')];
  const io=new IntersectionObserver(e=>e.forEach(i=>{if(i.isIntersecting)l.forEach(a=>a.classList.toggle('active',a.hash==='#'+i.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
  l.forEach(a=>{const s=document.querySelector(a.hash);s&&io.observe(s)});})();
// Publication filters
document.getElementById('chips').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#chips button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('#pubs li').forEach(li=>li.hidden=b.dataset.f!=='all'&&!li.dataset.t.includes(b.dataset.f));};
// Copy email
const cp=document.getElementById('copy');cp.onclick=()=>{navigator.clipboard.writeText(cp.dataset.email).then(()=>{cp.textContent='Copied ✓';setTimeout(()=>cp.textContent='Copy email',1800)})};
document.getElementById('y').textContent=new Date().getFullYear();
