const upSound = new Audio('./assets/up.m4a');
const downSound = new Audio('./assets/down.m4a');
const rightSound = new Audio('./assets/right.m4a');
const leftSound = new Audio('./assets/left.m4a');
let oldX = 0;
let oldY = 0;
let clicked = false;
function buttonClicked() {
  clicked = true;
}
let r = g = b = 0;
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
        r += 1;
        break;
      case 'left':
        soundToPlay = leftSound;
        g += 1;
        break;
      case 'up':
        soundToPlay = upSound;
        b += 1;
        break;
      case 'down':
        soundToPlay = downSound;
        r += 1;
        g += 1;
        b -= 1;
        break;
      default:
        return null;
    }
    if (r > 255) {
      r -= 255;
    }
    if (g > 255) {
      g -= 255;
    }
    if (b > 255) {
      b -= 255;
    }
    let color = `rgb(${r}, ${g}, ${b})`;
    const body = document.getElementById('body');
    body.style.backgroundColor = color;
    oldX = pageX;
    oldY = pageY;
    soundToPlay.play();
  }
}

document.addEventListener('mousemove', mouseMoveMethod);
