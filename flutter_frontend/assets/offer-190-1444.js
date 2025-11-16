(function(){
  const card = document.querySelector('.offer-card');
  const overlay = document.querySelector('.overlay-bg');
  const closeBtn = document.querySelector('.close-btn');
  const cta = document.querySelector('.cta');

  function hideOffer(){
    if(card) card.style.display = 'none';
    if(overlay) overlay.style.display = 'none';
  }

  if(closeBtn) closeBtn.addEventListener('click', hideOffer);
  if(cta) cta.addEventListener('click', hideOffer);
})();
