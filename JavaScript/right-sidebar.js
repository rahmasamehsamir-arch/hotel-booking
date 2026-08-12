// Array of image URLs for the slider
const images = [
  "images/g.jpg",
  "images/h.jpg"
];

let currentIndex = 0;

const sliderImg = document.getElementById("slider-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Previous button 

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImg.src = images[currentIndex];
});

// Next button 

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImg.src = images[currentIndex];
});
