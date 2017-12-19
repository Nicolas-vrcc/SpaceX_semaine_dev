// get DOM elements
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const slideButtons = document.querySelectorAll('.circle')
<<<<<<< HEAD
const slide3 = document.querySelector('.slide3')
const scrollDownText = slide3.querySelector('.scroll-down-container')
const rocketPicture = slide3.querySelector('.bfr')
=======
>>>>>>> parent of e89867e... add animation


// event listeners
startBtn.addEventListener('click', (e) =>{
  homePage.style.opacity = 0
  // wait for transition end before setting display none
  homePage.addEventListener("transitionend", function(event) {
  homePage.style.display = 'none'
})
})

var homepageup = false
window.addEventListener('scroll', (e) =>{
  console.log(e);
  if(!homepageup){
    homePage.classList.add('homepagegone')
  homepageup = true
}
})
//handle the animation of the slides
slideButtons.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    // remove active from each slide
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active')
    }
    // add active class the slides depending on the corresponding dot clicked
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
<<<<<<< HEAD

// make rocket land on scroll on slide3
let rocketpos = 0
window.addEventListener('scroll', (e) => {
  console.log(e);
  if(slide3.classList.contains('active')){
    scrollDownText.style.display = 'none'
    rocketPicture.style.transform = `translateY(${rocketpos}px)`
    rocketpos += 10
  }
})
=======
>>>>>>> parent of e89867e... add animation
