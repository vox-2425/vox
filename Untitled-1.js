// JavaScript to handle background slideshow

const images = [
    '../images/"C:\Users\Omkar\Desktop\offroaders\images\Screenshot_2024-04-25-11-38-01-51_1c337646f29875672b5a61192b9010f9.jpg',
    '../images/image2.jpg',
    '../images/image3.jpg',
    '../images/image4.jpg',
    '../images/image5.jpg'
];

let currentIndex = 0;
const bodyElement = document.querySelector('body');

function changeBackground() {
    bodyElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
}

// Start slideshow immediately and change every 5 seconds
setInterval(changeBackground, 5000); // 5000 milliseconds = 5 seconds

// Initial background setup
changeBackground();
