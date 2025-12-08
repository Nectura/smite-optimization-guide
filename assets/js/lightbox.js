  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  const images = document.querySelectorAll('.settings-images img, .additional-images img');

  images.forEach(img => {
    img.onclick = function() {
      modal.classList.add('active');
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    }
  });

  modal.onclick = function() {
    modal.classList.remove('active');
  }

  document.onkeydown = function(e) {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
    }
  }