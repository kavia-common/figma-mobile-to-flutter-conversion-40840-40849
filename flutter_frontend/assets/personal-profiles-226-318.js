(function(){
  const backBtn = document.getElementById('back-226-359');
  const editBtn = document.getElementById('edit-226-363');

  if(backBtn){
    backBtn.addEventListener('click', ()=>{
      // Basic back behavior; falls back to hash if history not available
      if(window.history.length > 1){
        window.history.back();
      }else{
        // no-op or navigate to root
        window.location.href = '#';
      }
    });
  }

  if(editBtn){
    editBtn.addEventListener('click', ()=>{
      // Placeholder: emit a custom event for host app
      const evt = new CustomEvent('edit-personal-info', {detail:{screenId:'226:318'}});
      window.dispatchEvent(evt);
      // Visual tap feedback
      editBtn.style.opacity = '0.7';
      setTimeout(()=>{ editBtn.style.opacity='1'; }, 120);
    });
  }
})();
