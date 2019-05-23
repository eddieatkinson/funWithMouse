const upSound = new Audio('./assets/up.m4a');
const downSound = new Audio('./assets/down.m4a');
const rightSound = new Audio('./assets/right.m4a');
const leftSound = new Audio('./assets/left.m4a');
let oldX = 0;
let oldY = 0;
let clicked = false;
function buttonClicked() {
  console.log('Clicked!');
  clicked = true;
}
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
        break;
      case 'left':
        soundToPlay = leftSound;
        break;
      case 'up':
        soundToPlay = upSound;
        break;
      case 'down':
        soundToPlay = downSound;
        break;
      default:
        return null;
    }
    const element = document.getElementById('direction');
    element.innerHTML = overallDirection;
    oldX = pageX;
    oldY = pageY;
    soundToPlay.play();
  }
}

document.addEventListener('mousemove', mouseMoveMethod);
