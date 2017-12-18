// get DOM elements
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider')
const slide1 = document.querySelector('.slide1')
const slide2 = document.querySelector('.slide2')

// event listeners
startBtn.addEventListener('click', (e) =>{
  homePage.style.opacity = 0
  // wait for transition end before setting display none
  homePage.addEventListener("transitionend", function(event) {
  homePage.style.display = 'none'
})
})
mainSlider.addEventListener('click', (e) =>{
  console.log('click');
})

//handle the animation of the slides
window.addEventListener('keypress', (e) =>{
  console.log(slide1);
    slide2.classList.toggle("animate")
})
