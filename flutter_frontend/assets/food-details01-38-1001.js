(function(){
  const qtyWrap = document.querySelector('.qty-wrapper');
  const minus = qtyWrap?.querySelector('.minus');
  const plus = qtyWrap?.querySelector('.plus');
  const number = qtyWrap?.querySelector('.qty-number');
  const btn = document.getElementById('add-to-cart-btn');

  function getVal(){ return parseInt(number.textContent.trim(),10) || 1; }
  function setVal(v){ number.textContent = String(Math.max(1, Math.min(99, v))); }

  minus?.addEventListener('click', ()=> setVal(getVal()-1));
  plus?.addEventListener('click', ()=> setVal(getVal()+1));
  btn?.addEventListener('click', ()=> {
    const qty = getVal();
    console.log('Add to cart clicked', {qty});
    btn.classList.add('pressed');
    setTimeout(()=>btn.classList.remove('pressed'), 160);
  });
})();
