const upSound = new Audio('./assets/up.m4a');
const downSound = new Audio('./assets/down.m4a');
const rightSound = new Audio('./assets/right.m4a');
const leftSound = new Audio('./assets/left.m4a');
let oldX = 0;
let oldY = 0;
let clicked = false;
function buttonClicked() {
  clicked = true;
  buttonElement = document.getElementById('button');
  buttonElement.parentNode.removeChild(buttonElement);
}
let rL = gL = bL = 0;
let rR = gR = bR = 255;
function mouseMoveMethod(e) {
  if(clicked){
    const { pageX, pageY } = e;
    const changeInX = pageX - oldX;
    const changeInY = pageY - oldY;
    const xDirection = changeInX > 0 ? 'right' : 'left';
    const yDirection = changeInY > 0 ? 'down' : 'up';
    const overallDirection = Math.abs(changeInX) > Math.abs(changeInY) ? xDirection : yDirection;
    let soundToPlay;
    switch(overallDirection) {
      case 'right':
        soundToPlay = rightSound;
        rL += 1;
        rR -= 1;
        break;
      case 'left':
        soundToPlay = leftSound;
        gL += 1;
        gR -= 1;
        break;
      case 'up':
        soundToPlay = upSound;
        bL += 1;
        bR -= 1;
        break;
      case 'down':
        soundToPlay = downSound;
        rL += 1;
        rR -= 1;
        gL += 1;
        gR -= 1;
        bL -= 1;
        bR += 1;
        break;
      default:
        return null;
    }
    if (rL > 255) {
      rL -= 255;
    }
    if (gL > 255) {
      gL -= 255;
    }
    if (bL > 255) {
      bL -= 255;
    }
    if (rR > 255) {
      rR -= 255;
    }
    if (gR > 255) {
      gR -= 255;
    }
    if (bR > 255) {
      bR -= 255;
    }
    if (rL < 0) {
      rL += 255;
    }
    if (gL < 0) {
      gL += 255;
    }
    if (bL < 0) {
      bL += 255;
    }
    if (rR < 0) {
      rR += 255;
    }
    if (gR < 0) {
      gR += 255;
    }
    if (bR < 0) {
      bR += 255;
    }
    let colorLeft = `rgb(${rL}, ${gL}, ${bL})`;
    const left = document.getElementById('left');
    left.style.backgroundColor = colorLeft;
    let colorRight = `rgb(${rR}, ${gR}, ${bR})`;
    const right = document.getElementById('right');
    right.style.backgroundColor = colorRight;
    oldX = pageX;
    oldY = pageY;
    soundToPlay.play();
  }
}

document.addEventListener('mousemove', mouseMoveMethod);
