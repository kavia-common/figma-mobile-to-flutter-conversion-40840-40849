(function () {
  const btn = document.getElementById('btnAccess');

  function vibrate(ms) {
    if (navigator.vibrate) {
      navigator.vibrate(ms);
    }
  }

  function requestLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success() {
          // Provide a simple pressed feedback
          btn.classList.add('ok');
          setTimeout(() => btn.classList.remove('ok'), 500);
        },
        function error() {
          // no-op demo; could show message
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
      );
    }
  }

  if (btn) {
    btn.addEventListener('click', function () {
      vibrate(10);
      requestLocation();
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  }
})();
