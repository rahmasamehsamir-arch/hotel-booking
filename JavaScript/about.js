var progressSection = document.getElementById('progressSection')
var progressBars = document.querySelectorAll('.progress-bar')
var isAnimated = false

window.addEventListener('scroll', function () {
  var sectionPosition = progressSection.getBoundingClientRect().top
  var screenPosition = window.innerHeight

  if (sectionPosition < screenPosition && !isAnimated) {
    progressBars[0].style.width = '45%'
    progressBars[1].style.width = '75%'

    isAnimated = true 
  }
})














var sliderTrack = document.getElementById("slider-track");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

var isTransitioning = false;

if (nextBtn && prevBtn && sliderTrack) {
  
  nextBtn.addEventListener("click", function () {
    if (isTransitioning) return;
    isTransitioning = true;

    sliderTrack.style.transition = "transform 0.5s ease-in-out";
    sliderTrack.style.transform = "translateX(-100%)";

    setTimeout(function () {
      sliderTrack.style.transition = "none";
      sliderTrack.appendChild(sliderTrack.firstElementChild);
      sliderTrack.style.transform = "translateX(0)";
      isTransitioning = false;
    }, 500);
  });

  prevBtn.addEventListener("click", function () {
    if (isTransitioning) return;
    isTransitioning = true;

    sliderTrack.style.transition = "none";
    sliderTrack.insertBefore(sliderTrack.lastElementChild, sliderTrack.firstElementChild);
    sliderTrack.style.transform = "translateX(-100%)";

    sliderTrack.offsetHeight;

    sliderTrack.style.transition = "transform 0.5s ease-in-out";
    sliderTrack.style.transform = "translateX(0)";

    setTimeout(function () {
      isTransitioning = false;
    }, 500);
  });
}




var counters = document.querySelectorAll(".counter");

counters.forEach(function (element) {
  var target = parseInt(element.getAttribute("data-target"));
  var current = 0;

  var timer = setInterval(function () {
    current++;
    element.innerText = current;

    if (current >= target) {
      clearInterval(timer);
    }
  }, 100);
});

