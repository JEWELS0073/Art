const images = [
  'images/wolves.jpg',
  'images/15 - 1.jpg',
  'images/26776_1189811639946_7788507_n.jpg',
  'images/207362_1024120897781_7122112_n.jpg',
  'images/215497_1024120857780_7602971_n.jpg',
  'images/217257_1024120937782_5962979_n.jpg',
  'images/10014998_10201803371120477_1695897803920315718_n.jpg',
  'images/lightsV1.jpg',
  'images/20231224_230608.jpg',
  'images/20231226_213110.jpg',
  'images/20231228_000857.jpg',
  'images/20240101_125600.jpg',
  'images/20240101_125642.jpg',
  'images/moonRise.jpg',
  'images/sunnyMountains.jpg',
  'images/cliffTree.jpg'
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
