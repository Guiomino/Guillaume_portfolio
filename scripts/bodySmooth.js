let canvas;
let c;
const circleCount = window.innerWidth / 9;
const mouse = { x: null, y: null };
const maxRadius = window.innerWidth / 6;

const Color = {
  vector: ["#3cf4fd", "#e1ee6f", "#be79df"],
  getRandom: function() {
    return Color.vector[Math.floor(Math.random() * Color.vector.length)];
  },
};

class Circle {
  constructor(
    r_min = randomNumber(maxRadius * 0.9, 20),
    x = randomNumber(canvas.width, r_min),
    y = randomNumber(canvas.height, r_min),
    dx = randomNumber(1, -2, [0]),
    dy = randomNumber(1, -1, [0]),
    color = Color.getRandom()
  ) {
    this.r = r_min;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.draw();
  }

  side() {
    return {
      right: this.x + this.r,
      left: this.x - this.r,
      bottom: this.y + this.r,
      top: this.y - this.r,
    };
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  run() {
    // detect collision
    if (this.side().right > canvas.width || this.side().left < 0) this.dx *= -1;
    if (this.side().bottom > canvas.height || this.side().top < 0) this.dy *= -1;

    // increase size
    if (
      (mouse.x != mouse.y) != 0 &&
      this.side().left - mouse.x < 50 &&
      mouse.x - this.side().right < 50 &&
      this.side().top - mouse.y < 50 &&
      mouse.y - this.side().bottom < 50 &&
      this.r < maxRadius
    )
      this.r += 3;
    else if (this.r > this.r_min) this.r -= 1;

    // change position
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let circles = [];

function init() {
  // setting up canvas
  document.body.innerHTML = "<canvas id='canvas'></canvas>";
  canvas = document.getElementById("canvas");
  c = canvas.getContext("2d");
  resetCanvas();
  animation();

  // adding circles
  for (let i = circleCount; i > 0; i--) {
    circles.push(new Circle());
  }
}

function animation() {
  // clear canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // animation
  circles.forEach((circle) => circle.run());

  // callback
  requestAnimationFrame(animation);
}

// utility functions
function resetCanvas() {
  c.canvas.width = window.innerWidth;
  c.canvas.height = window.innerHeight;
}

function randomNumber(max = 1, min = 0, forbidden = []) {
  let res;

  do {
    res = Math.floor(min + Math.random() * (max - min));
  } while (forbidden.some((num) => num == res));

  return res;
}

// event handlers
window.addEventListener("load", init);
window.addEventListener("resize", resetCanvas);
window.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  //   console.log(mouse);
});
