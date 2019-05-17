console.log('CONNECTED!');
const upSound = new Audio('./assets/up.m4a');
let oldX = 0;
let oldY = 0;
function mouseMoveMethod(e) {
  const { pageX, pageY } = e;
  const changeInX = pageX - oldX;
  const changeInY = pageY - oldY;
  const xDirection = changeInX > 0 ? 'right' : 'left';
  const yDirection = changeInY > 0 ? 'down' : 'up';
  const overallDirection = Math.abs(changeInX) > Math.abs(changeInY) ? xDirection : yDirection;
  const element = document.getElementById('direction');
  element.innerHTML = overallDirection;
  oldX = pageX;
  oldY = pageY;
  upSound.play();
}
document.addEventListener('mousemove', mouseMoveMethod)