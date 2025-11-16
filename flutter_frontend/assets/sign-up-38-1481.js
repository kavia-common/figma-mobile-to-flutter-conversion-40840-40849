(function(){
  // Toggle dots to plain text on click (visual only; static content)
  document.querySelectorAll('.field-group .eye-off').forEach(function(icon){
    icon.addEventListener('click', function(){
      var textEl = this.parentElement.querySelector('.input-text');
      if(!textEl) return;
      var isDots = textEl.classList.contains('dots');
      if(isDots) {
        textEl.classList.remove('dots');
        // reveal placeholder value as sample
        if (textEl.closest('.retype-group')) textEl.textContent = 'password';
        else textEl.textContent = 'password';
      } else {
        textEl.classList.add('dots');
        textEl.textContent = '**********';
      }
    });
  });

  // Back button behavior: history back if possible
  var backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function(){
      if (window.history.length > 1) window.history.back();
    });
  }
})();
