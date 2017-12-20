// get DOM elements
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const slideButtons = document.querySelectorAll('.circle')
const slide3 = document.querySelector('.slide3')
const scrollDownText = slide3.querySelector('.scroll-down-container')
const rocketPicture = slide3.querySelector('.bfr')
const rocketLeg1 = slide3.querySelector('.leg1')
const rocketLeg2 = slide3.querySelector('.leg2')
const textMissions = slide3.querySelectorAll('.text-missions')
const textMissions2 = slide3.querySelectorAll('.text-missions2')


// event listeners
startBtn.addEventListener('click', (e) => {
  homePage.style.opacity = 0
  // wait for transition end before setting display none
  homePage.addEventListener("transitionend", function (event) {
    homePage.style.display = 'none'
  })
})

// display and hide homepage on mousewheel up or down
window.addEventListener('mousewheel', (e) => {
  if (slides[0].classList.contains('active')) {
    if (e.wheelDeltaY < 0) {
      homePage.classList.add('homepagegone')
    }
    if (e.wheelDeltaY > 0) {
      homePage.classList.remove('homepagegone')
    }
  }
})

//handle the animation of the slides
slideButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // remove active from each slide
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active')
      slideButtons[i].classList.remove('clickedbtn')
    }
    // add active class the slides depending on the corresponding dot clicked
    if (slides[0].classList.contains(e.target.dataset.ref)) {
      slides[0].classList.add('active')
      slideButtons[0].classList.add('clickedbtn')
    }
    if (slides[1].classList.contains(e.target.dataset.ref)) {
      slides[1].classList.add('active')
      slideButtons[1].classList.add('clickedbtn')
    }
    if (slides[2].classList.contains(e.target.dataset.ref)) {
      slides[2].classList.add('active')
      slideButtons[2].classList.add('clickedbtn')
    }
    if (slides[3].classList.contains(e.target.dataset.ref)) {
      slides[3].classList.add('active')
      slideButtons[3].classList.add('clickedbtn')
    }
  })
})

// make rocket land on scroll on slide3
let rocketpos = 0
let legpos = 0
let rotateleg1 = -30
let rotateleg2 = 30
let textpos = 0
window.addEventListener('mousewheel', (e) => {
  if (slide3.classList.contains('active')) {
    if (rocketpos <= 0) {
      scrollDownText.style.opacity = '1'
    } else {
      scrollDownText.style.opacity = '0'
    }

    // Checking if the user scroll up or down
    if (e.wheelDelta >= 0) {
      if (rocketpos >= 0) {
        // Moving up the rocket position
        rocketpos -= 20
        legpos -= 20
        rocketPicture.style.transform = `translateY(${rocketpos}px)`
        // rectracting the legs with transform
        if (legpos >= 360 && legpos <= 380) {
          rotateleg1 -= 8
          rotateleg2 += 8
          legpos -= 22
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(${rotateleg1}deg) translateX(8px)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(${rotateleg2}deg) translateX(-8px)`
        } else if (legpos > 380) {
          rotateleg1 -= 10
          rotateleg2 += 10
          legpos -= 22
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(${rotateleg1}deg) translateX(15px)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(${rotateleg2}deg) translateX(-15px)`
        } else {
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(-30deg)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(30deg)`
        }
      }
      // Moving up the text
      for (const textMission of textMissions) {
        if (textpos >= 0) {
          textpos -= 20
          textMission.style.transform = `translateY(${textpos}px)`
          // Second text disappearing if the first is up
          if (textpos <= 220) {
            for(const textMission2 of textMissions2) {
              textMission2.style.opacity = '0'
            }
          }
        }
      }
    } else {
      if (rocketpos <= 390) {
        // Moving down the rocket position
        rocketpos += 20
        legpos += 20
        rocketPicture.style.transform = `translateY(${rocketpos}px)`
        // putting out the legs with transform
        if (legpos >= 360 && legpos <= 380) {
          rotateleg1 += 8
          rotateleg2 -= 8
          legpos += 22
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(${rotateleg1}deg) translateX(-8px)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(${rotateleg2}deg) translateX(8px)`
        } else if (legpos > 380) {
          rotateleg1 += 10
          rotateleg2 -= 10
          legpos += 22
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(${rotateleg1}deg) translateX(-15px)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(${rotateleg2}deg) translateX(15px)`
        } else {
          rocketLeg1.style.transform = `translateY(${legpos}px) rotate(-30deg)`
          rocketLeg2.style.transform = `translateY(${legpos}px) rotate(30deg)`
        }
      }
      // Moving down the text
      for (const textMission of textMissions) {
        console.log(textpos)
        if (textpos <= 300) {
          textpos += 20
          textMission.style.transform = `translateY(${textpos}px)`          
          // Second text appearing if the first is down
          if (textpos >= 220) {
            for(const textMission2 of textMissions2) {
              textMission2.style.opacity = '1'
            }
          }
        }
      }
    }
  }
})