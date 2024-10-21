// JavaScript to animate images moving left to right

const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function slideImages() {
    // Reset the transform property of all images
    images.forEach((img, index) => {
        img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });

    // Move to the next image after 3 seconds
    currentIndex = (currentIndex + 1) % images.length;
}

// Start the animation with a 3-second interval
setInterval(slideImages, 3000);

// Initial setup
slideImages();
