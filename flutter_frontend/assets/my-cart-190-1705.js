(function(){
  const screen = document.getElementById('screen-190-1705');
  if(!screen) return;

  // Quantity interactions for both items (purely UI demo; exact IDs not in YAML so select by structure)
  function setupQty(container){
    if(!container) return;
    const minus = container.querySelector('.qty-circle.minus');
    const plus = container.querySelector('.qty-circle.plus');
    const countEl = container.querySelector('.qty-count');
    const getVal = ()=> parseInt(countEl.textContent.trim(),10)||0;
    const setVal = v => { countEl.textContent = String(v); };
    if(minus) minus.addEventListener('click', ()=> setVal(Math.max(0, getVal()-1)));
    if(plus) plus.addEventListener('click', ()=> setVal(getVal()+1));
  }

  document.querySelectorAll('.qty').forEach(setupQty);

  // Remove pills
  document.querySelectorAll('#food01-190-1722 .remove-pill, #food02-190-1706 img[alt="Remove circle"]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const card = el.closest('[id^="food"]');
      if(card){ card.style.display='none'; }
    });
  });

  // CTA
  const cta = document.getElementById('place-order-btn');
  if(cta){
    cta.addEventListener('click', ()=> {
      alert('Place ORder clicked');
    });
  }
})();
