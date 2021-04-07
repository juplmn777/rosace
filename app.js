const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let turn = 0;

//canvas center:
context.translate(innerWidth / 2, innerHeight / 2);

const drawn = () => {
  requestAnimationFrame(drawn);

  context.beginPath();
  context.strokeStyle = 'purple';
  context.arc(x, y, 100, 0, 2 * Math.PI);
  context.stroke();

  context.rotate((Math.PI / 180) * 30);
  turn += 30;

  if (turn > 7200) {
    return;
  }
  //end of complete turn
  if (turn % 360 === 0) {
    x += 10;
    y += 10;
  }
};

drawn();
