(function () {
  const btn = document.getElementById('loginButton');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.add('pressed');
      setTimeout(() => btn.classList.remove('pressed'), 150);
    });
  }

  // Optional: toggle password visibility effect on icon click
  const eye = document.querySelector('.icon-eye');
  if (eye) {
    eye.style.cursor = 'pointer';
    let masked = true;
    eye.addEventListener('click', () => {
      masked = !masked;
      // Visual pulse on click
      eye.style.transform = 'translate(-50%, -50%) scale(0.95)';
      setTimeout(() => (eye.style.transform = ''), 120);
      // No real input here (design is static), so we just toggle a body class for demonstration
      document.body.classList.toggle('pw-visible', !masked);
    });
  }

  // Prevent double-tap zoom on iOS when pressing button
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) event.preventDefault();
    lastTouchEnd = now;
  }, false);
})();
