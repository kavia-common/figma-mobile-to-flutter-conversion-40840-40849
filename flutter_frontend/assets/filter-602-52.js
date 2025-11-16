(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Toggle chips (single-select per row for offers first row & delivery time, multi-select for offers long?)
  const groupOffers = $('.group-offers');
  const offerRowChips = ['.chip-delivery', '.chip-pickup', '.chip-offer'];
  offerRowChips.forEach(sel=>{
    const el = $(sel, groupOffers);
    el.addEventListener('click', ()=>{
      offerRowChips.forEach(s=>$(s, groupOffers).classList.remove('chip-active'));
      el.classList.add('chip-active');
    });
  });
  // Long chip is independent toggle
  const onlineChip = $('.chip-online', groupOffers);
  onlineChip.addEventListener('click', ()=> onlineChip.classList.toggle('chip-active'));

  // Delivery time (single select)
  const deliveryGroup = $('.group-delivery-time');
  const deliveryChips = ['.chip-1015','.chip-20','.chip-30'];
  deliveryChips.forEach(sel=>{
    const el = $(sel, deliveryGroup);
    el.addEventListener('click', ()=>{
      deliveryChips.forEach(s=>$(s, deliveryGroup).classList.remove('chip-active'));
      el.classList.add('chip-active');
    });
  });

  // Pricing (single select)
  const pricingGroup = $('.group-pricing');
  const pills = ['.pill-1','.pill-2','.pill-3'];
  pills.forEach(sel=>{
    const el = $(sel, pricingGroup);
    el.addEventListener('click', ()=>{
      pills.forEach(s=>{
        const p = $(s, pricingGroup);
        p.classList.remove('pill-selected');
      });
      el.classList.add('pill-selected');
    });
  });

  // Rating (single select)
  const ratingGroup = $('.group-rating');
  const stars = ['.star-01','.star-02','.star-03','.star-04','.star-05'];
  stars.forEach(sel=>{
    const el = $(sel, ratingGroup);
    el.addEventListener('click', ()=>{
      stars.forEach(s=>{
        const st = $(s, ratingGroup);
        st.classList.remove('active');
        const icon = st.querySelector('.star-icon, .star-icon-filled');
        if(icon){ icon.className = 'star-icon'; }
      });
      el.classList.add('active');
      const filled = el.querySelector('.star-icon, .star-icon-filled');
      if(filled){ filled.className = 'star-icon-filled'; }
    });
  });

  // Close button
  const closeBtn = $('.btn-close');
  closeBtn.addEventListener('click', ()=>{
    $('.filter-modal').style.display = 'none';
  });

  // CTA button demo
  const cta = $('.cta-filter');
  cta.addEventListener('click', ()=>{
    // Collect selection values and log (for demo)
    const offerSelected = offerRowChips.find(s=>$(s, groupOffers).classList.contains('chip-active'));
    const deliverySelected = deliveryChips.find(s=>$(s, deliveryGroup).classList.contains('chip-active'));
    const online = onlineChip.classList.contains('chip-active');
    const pricing = pills.find(s=>$(s, pricingGroup).classList.contains('pill-selected'));
    const rating = stars.findIndex(s=>$(s, ratingGroup).classList.contains('active')) + 1;

    const result = {
      offer: offerSelected ? $(offerSelected, groupOffers).textContent.trim() : null,
      onlinePayment: online,
      deliveryTime: deliverySelected ? $(deliverySelected, deliveryGroup).textContent.trim() : null,
      pricing: pricing ? $(pricing, pricingGroup).textContent.trim() : null,
      rating: rating || null
    };
    console.log('Filter applied:', result);
    // Mimic applying and close
    alert('Filter applied');
  });
})();
