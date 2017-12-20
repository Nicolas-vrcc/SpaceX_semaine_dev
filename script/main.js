// get DOM elements
const allImg = document.querySelectorAll('img');
const homePage = document.querySelector('.home')
const startBtn = homePage.querySelector('.startbtn')
const mainSlider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const slideButtons = document.querySelectorAll('.circle')
const rocketTop = document.querySelector('.rockettop');
const rocketBottom = document.querySelector('.rocketbottom')
const rocketInside = document.querySelector('.rocketthrough');
const slide3 = document.querySelector('.slide3')
const scrollDownText = slide3.querySelector('.scroll-down-container')
const rocketPicture = slide3.querySelector('.bfr')
const rocketLeg1 = slide3.querySelector('.leg1')
const rocketLeg2 = slide3.querySelector('.leg2')
const textMissions = slide3.querySelectorAll('.text-missions')
const textMissions2 = slide3.querySelectorAll('.text-missions2')

// disable image dragging
allImg.forEach((img) =>{
  img.ondragstart = function() { return false }
})

// handle the cool cursor
const $cursor = document.querySelector('.cursor')
let radius = 40
let speedX = 4
let speedY = 4
const event = 0

document.addEventListener('mousemove', (event) =>
{
    const mouse = {x: event.clientX, y:event.clientY}

    speedX += (mouse.x - speedX) * 0.35
    speedY += (mouse.y - speedY) * 0.35

    $cursor.style.top = speedY - 15 + 'px'
    $cursor.style.left = speedX - 15 + 'px'

    if (mouse.x > 300 && mouse.x < 1000)
    {
        $cursor.classList.add('mousedown')
    }
    else
    {
        $cursor.classList.remove('mousedown')
    }
    // $cursor.classList.add('mousemove')
    // setTimeout(() => {
    //     $cursor.classList.remove('mousemove')
    // }, 1000)

})
$cursor.style.top = event.clientY + 20 + 'px'
$cursor.style.left = event.clientX + 20 + 'px'


document.addEventListener('mousedown', (event) =>
{
    const mouse = {x: event.clientX, y:event.clientY}
    if ($cursor.classList.contains('mousedown'))
    {
        $cursor.classList.add('click')
        setTimeout(() => {
        $cursor.classList.remove('click')
        }, 400)
    }
    else
    {
        $cursor.classList.add('click2')
        setTimeout(() => {
        $cursor.classList.remove('click2')
        }, 400)
    }
})

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
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active')
      slideButtons[i].classList.remove('clickedbtn')
      slides[i].style.display = 'none'
      // add active class the slides depending on the corresponding dot clicked
      if (slides[i].classList.contains(e.target.dataset.ref)) {
        slides[i].style.display = 'block'
        slides[i].classList.add('active')
        slideButtons[i].classList.add('clickedbtn')
      }
    }
  })
})

const dragElement = (elmnt) => {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown
}

const dragMouseDown = (e) => {
    e = e || window.event;
    // get the mouse cursor position at startup:
    // pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
let animationOn = true
const elementDrag = (e) => {
    e = e || window.event;
    // calculate the new cursor position:
    // pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    if(rocketBottom.offsetTop - pos2 > 250 && rocketBottom.offsetTop - pos2 < 380 && animationOn){
    rocketBottom.style.top = (rocketBottom.offsetTop - pos2) + "px";
    // rocketBottom.style.left = (rocketBottom.offsetLeft - pos1) + "px";
    }
    if(rocketBottom.offsetTop - pos2 < 250){
      rocketInside.style.opacity = 0.8
      rocketBottom.style.opacity = 0.3
      rocketTop.style.opacity = 0.8
      animationOn = false
    }
  }

const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  dragElement(rocketBottom)
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
