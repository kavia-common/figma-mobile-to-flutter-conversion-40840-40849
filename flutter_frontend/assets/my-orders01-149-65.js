(function(){
  function onClick(e){
    var action = e.currentTarget.getAttribute('data-action');
    if(action === 'track'){
      console.log('Track Order clicked');
    } else if(action === 'cancel'){
      console.log('Cancel clicked');
    }
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.btn').forEach(function(btn){
      btn.addEventListener('click', onClick);
    });
  });
})();
