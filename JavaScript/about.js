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
