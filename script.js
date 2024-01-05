let currentSlide = 0;

function showSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide();
}

function showCarousel() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('hidden');
  showSlide();
}

function closeGallery() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
  currentSlide = 0; // Reset current slide when closing the gallery
  showSlide(); // Ensure the slides are reset to the initial state
}

document.addEventListener('DOMContentLoaded', function () {
  const showCarouselBtn = document.getElementById('showCarouselBtn');
  const closeGalleryBtn = document.getElementById('closeGalleryBtn');
  const overlay = document.getElementById('overlay');
  const slides = document.querySelectorAll('.carousel-slide');

  function checkAllSlidesLoaded() {
    const allLoaded = Array.from(slides).every((slide) => {
      const image = slide.querySelector('.carousel-image');
      return image.complete;
    });

    if (allLoaded) {
      console.log('All slides loaded');
      showSlide();
    }
  }

  slides.forEach(function (slide) {
    const image = slide.querySelector('.carousel-image');
    if (image.complete) {
      checkAllSlidesLoaded();
    } else {
      image.addEventListener('load', checkAllSlidesLoaded);
    }
  });

  showCarouselBtn.addEventListener('click', showCarousel);
  closeGalleryBtn.addEventListener('click', closeGallery);

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeGallery();
    }
  });
  
  // Hide the overlay initially
  overlay.classList.add('hidden');
});