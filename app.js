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
    

  context.beginPath();
  context.strokeStyle = 'purple';
  context.arc(x, y, 100, 0, 2 * Math.PI);
  context.stroke();
};

drawn();
