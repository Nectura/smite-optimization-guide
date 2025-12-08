// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Add click event to all images
document.querySelectorAll('.settings-images img, .additional-images img').forEach(img => {
  img.addEventListener('click', function() {
    lightbox.classList.add('active');
    lightboxImg.src = this.src;
    lightboxImg.alt = this.alt;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close lightbox when clicking the X or anywhere on the overlay
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});