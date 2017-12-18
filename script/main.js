// get DOM elements
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const slideButtons = document.querySelectorAll('.circle')


// event listeners
startBtn.addEventListener('click', (e) =>{
  homePage.style.opacity = 0
  // wait for transition end before setting display none
  homePage.addEventListener("transitionend", function(event) {
  homePage.style.display = 'none'
})
})
// mainSlider.addEventListener('click', (e) =>{
//   console.log('click');
// })

//handle the animation of the slides
slideButtons.forEach((button) =>{
  console.log(button);
  button.addEventListener('click',(e) =>{
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active')
    }
    console.log(e.target.dataset.ref)
    if(slides[0].classList.contains(e.target.dataset.ref)){
      slides[0].classList.add('active')
    }
    if(slides[1].classList.contains(e.target.dataset.ref)){
      slides[1].classList.add('active')
    }
    if(slides[2].classList.contains(e.target.dataset.ref)){
      slides[2].classList.add('active')
    }
    if(slides[3].classList.contains(e.target.dataset.ref)){
      slides[3].classList.add('active')
    }
  })
})
