// get DOM elements
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider');

// event listeners
startBtn.addEventListener('click', (e) =>{
  homePage.style.opacity = 0
})
mainSlider.addEventListener('click', (e) =>{
  console.log('click');
})
