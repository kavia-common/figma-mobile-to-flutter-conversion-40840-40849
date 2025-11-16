(function(){
  const back = document.querySelector('.back-btn');
  if(back){
    back.addEventListener('click', () => {
      // Try to navigate back if possible
      if (history.length > 1) history.back();
    });
  }

  const call = document.querySelector('.btn.call');
  if(call){
    call.addEventListener('click', () => {
      console.log('Calling courier…');
      alert('Calling courier…');
    });
  }

  const chat = document.querySelector('.btn.chat');
  if(chat){
    chat.addEventListener('click', () => {
      console.log('Opening chat…');
      alert('Opening chat…');
    });
  }
})();
