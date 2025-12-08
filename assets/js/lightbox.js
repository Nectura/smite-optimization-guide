document.addEventListener('DOMContentLoaded', function() {
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = '<img src="" alt="">';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');

  // Add click handlers to all images
  document.querySelectorAll('.settings-images img, .additional-images img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add('show');
    });
  });

  // Close on click anywhere
  modal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('show');
  });
});