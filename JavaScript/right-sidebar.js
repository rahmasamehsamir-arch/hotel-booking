// Array of image URLs for the slider
var images = [
  "images/f.jpg",
  "images/g.jpg",
  "images/h.jpg"
];

var currentIndex = 0;

var sliderImg = document.getElementById("slider-img");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

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
