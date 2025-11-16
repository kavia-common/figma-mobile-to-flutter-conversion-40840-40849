(function(){
  // Attach click handlers to rows for demo logging and easy binding
  function q(sel, root=document){ return root.querySelector(sel); }
  function qa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  qa('.row').forEach((row)=>{
    row.style.cursor = 'pointer';
    row.addEventListener('click', ()=>{
      const label = row.querySelector('.row-text') ? row.querySelector('.row-text').textContent.trim() : '(unknown)';
      console.log('[Menu 38:0] Click:', label);
    });
  });

  // Top bar actions
  const back = q('.back');
  if(back){
    back.style.cursor='pointer';
    back.addEventListener('click', ()=>console.log('[Menu 38:0] Back pressed'));
  }
  const more = q('.more');
  if(more){
    more.style.cursor='pointer';
    more.addEventListener('click', ()=>console.log('[Menu 38:0] More pressed'));
  }
})();
