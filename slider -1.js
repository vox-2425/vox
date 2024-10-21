const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function slideImages() {
    // Calculate how much to move the image container
    const imageWidth = images[0].clientWidth; // Get the width of one image
    const newTranslateX = -currentIndex * imageWidth;
    
    // Apply the transformation to move images
    imageContainer.style.transform = `translateX(${newTranslateX}px)`;
    
    // Move to the next image, looping back to the first image at the end
    currentIndex = (currentIndex + 1) % images.length;
}

// Slide images every 3 seconds
setInterval(slideImages, 3000);

// Initial setup to show the first image
slideImages();
