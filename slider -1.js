const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;
let previousIndex = images.length - 1; // Start with the last image hidden

function slideImages() {
    // Remove active class from the current image
    images[previousIndex].classList.remove('active');
    images[previousIndex].classList.add('previous');

    // Set the current image as active
    images[currentIndex].classList.add('active');
    images[currentIndex].classList.remove('previous');

    // Update indexes for the next cycle
    previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
}

// Start the image slide every 3 seconds
setInterval(slideImages, 3000);

// Initial setup
slideImages();
