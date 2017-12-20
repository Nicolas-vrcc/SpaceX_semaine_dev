const dragElementslide = (elmnt) => {
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

  dragElementslide2(rocketBottom)
