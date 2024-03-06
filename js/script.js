const images = [
  'images/01.jpg',
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/p1.jpg',
  'images/p2.jpg',
  'images/p3.jpg',
  'images/8.jpg',
  'images/7.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/16.jpg',
  'images/18.jpg',
  'images/20.jpg',
  'images/22.jpg',
  'images/23.jpg',
  'images/24.jpg',
  'images/25.jpg',
  'images/26.jpg',
  'images/27.jpg',
  'images/28.jpg',
  'images/p4.jpg',
  'images/p5.jpg',
  'images/p6.jpg'
];

let currentImages = 0;
const imagesPerPage = images.length; // Number of images to load per page

function showImages(startIndex, endIndex) {
  const imageContainer = document.getElementById('gallery-container');
  // Clear existing images
  imageContainer.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = images[i % images.length];
    imgElement.alt = 'Artwork ' + (i + 1);
    imgElement.classList.add('gallery-image');
    imageContainer.appendChild(imgElement);
  }
}

function loadMoreImages() {
  const startIndex = currentImages;
  const endIndex = startIndex + imagesPerPage;

  if (startIndex < images.length) {
    showImages(startIndex, endIndex);
    currentImages = endIndex;
  }
}

function showGallery() {
  const galleryContainer = document.getElementById('overlay');
  const galleryContent = document.getElementById('gallery-container');

  // Clear existing images
  galleryContent.innerHTML = '';

  // Load initial images
  showImages(currentImages, currentImages + imagesPerPage);

  // Display the overlay by changing the display property
  galleryContainer.style.display = 'flex'; // or 'block' depending on the desired layout
}

// Call showGallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.getElementById('overlay');
  galleryContainer.style.display = 'none'; // Ensure it's initially hidden
});

function closeGallery() {
  const galleryContainer = document.getElementById('overlay');

  // Reset current images when closing the gallery
  document.getElementById('gallery-container').innerHTML = '';
  currentImages = 0;

  // Hide the overlay by changing the display property
  galleryContainer.style.display = 'none';
}

// Toggle gallery visibility
function toggleGallery() {
  const galleryContainer = document.getElementById('overlay');
  if (galleryContainer.style.display === 'flex' || galleryContainer.style.display === 'block') {
    closeGallery();
  } else {
    showGallery();
  }
}
