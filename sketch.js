let javier;

function setup() {
  pixelDensity(1);
  const canvas = createCanvas(windowWidth * 0.85, windowHeight);
  canvas.parent('canvas');
  javier = new Santaolalla(width, height);
  background(180, 180, 180);

  htmlInit();
  noLoop();
  draw();
}

function initialGraphState() {
  const a = new Dot(width / 3, height / 2);
  const b = new Dot((2 * width) / 3, height / 3);
  const c = new Dot((2 * width) / 3, (2 * height) / 3);
  dots = [a, b, c];
  c.connect(a);
  c.connect(b);
}

function htmlInit() {
  updateTotalDots();

  const formFundamentalPhysics = document.getElementById('fundamental-physics');
  formFundamentalPhysics.addEventListener('submit', (e) => e.preventDefault());
  const fundamentalLoops = document.getElementById('amount-iterations');
  const submitFundamentalPhysics = document.getElementById('submit-fundamental-physics');
  submitFundamentalPhysics.addEventListener('click', (e) => {
    javier.fundamentalLoop(fundamentalLoops.value);
    draw();
    updateTotalDots();
  });

  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => restartGraph());
}

function updateTotalDots() {
  const totalDots = document.getElementById('total-dots');
  totalDots.innerText = javier.dots.length;
}

function draw() {
  background(180, 180, 180);
  javier.dots.forEach((d) => d.draw());
}

function restartGraph() {
  background(180, 180, 180);
  javier.restart();
  updateTotalDots();
  draw();
}

function keyPressed() {
  switch (keyCode) {
    case 67:
      restartGraph();
      break;
    case 82:
      document.getElementById('submit-fundamental-physics').click();
      break;
  }
}
