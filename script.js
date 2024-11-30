const body = document.body;
const background = document.querySelector('.background');
const snakeTrail = [];
const trailLength = 20; // Number of dots in the trail

// Generate moving glowing balls
function generateBalls(count) {
  for (let i = 0; i < count; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${Math.random() * window.innerWidth}px`;
    ball.style.top = `${Math.random() * window.innerHeight}px`;
    ball.style.animationDuration = `${Math.random() * 15 + 5}s`; // Vary duration
    background.appendChild(ball);
  }
}

// Create snake trail dots
function createDot(x, y) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  body.appendChild(dot);
  snakeTrail.push(dot);

  // Remove dots when exceeding trail length
  if (snakeTrail.length > trailLength) {
    const oldDot = snakeTrail.shift();
    oldDot.remove();
  }
}

// Listen for mousemove events
document.addEventListener('mousemove', (e) => {
  createDot(e.pageX, e.pageY);
});

// Generate 10 glowing balls
generateBalls(10);
