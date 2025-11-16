(function () {
  const mute = document.getElementById('btn-mute');
  const speaker = document.getElementById('btn-speaker');
  const endBtn = document.getElementById('btn-end');

  function togglePressed(btn) {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
  }

  mute?.addEventListener('click', () => togglePressed(mute));
  speaker?.addEventListener('click', () => togglePressed(speaker));
  endBtn?.addEventListener('click', () => {
    // Simple feedback for demo
    endBtn.classList.add('ending');
    alert('Call ended');
  });
})();
