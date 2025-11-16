(function () {
  const screen = document.getElementById('screen-search-38-1186');

  // Clear chip on click
  const chip = screen.querySelector('.chip-x');
  if (chip) {
    chip.addEventListener('click', () => {
      const placeholder = screen.querySelector('.search-placeholder');
      if (placeholder) placeholder.textContent = '';
      console.log('Search cleared');
    });
  }

  // Back button click
  const back = screen.querySelector('.back-arrow');
  if (back) {
    back.addEventListener('click', () => {
      console.log('Back pressed');
      history.back?.();
    });
  }

  // Log tag taps
  screen.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const txt = tag.querySelector('.tag-text')?.textContent?.trim();
      console.log('Tag clicked:', txt);
    });
  });

  // Restaurant rows logging
  screen.querySelectorAll('.rest-row').forEach((row, idx) => {
    row.addEventListener('click', () => console.log('Restaurant row', idx + 1));
  });
})();
