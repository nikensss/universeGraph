let steven;

function setup() {
  pixelDensity(1);
  const canvas = createCanvas(windowWidth * 0.85, windowHeight);
  canvas.parent('canvas');
  steven = new Wolfram(width, height);
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

  $('#fundamental-physics').on('submit', (e) => e.preventDefault());
  $('#submit-fundamental-physics').click((e) => {
    steven.fundamentalLoop(+$('#amount-iterations').val());
    draw();
    updateTotalDots();
  });

  $('#clear').click(() => restartGraph());

  $('#draw-edges').change(function () {
    DRAW_EDGES = this.checked;
    draw();
  });
  $('#draw-tips').change(function () {
    DRAW_TIPS = this.checked;
    draw();
  });
}

function updateTotalDots() {
  $('#total-dots').text(steven.dots.length);
}

function draw() {
  background(180, 180, 180);
  steven.dots.forEach((d) => d.draw());
}

function restartGraph() {
  background(180, 180, 180);
  steven.restart();
  updateTotalDots();
  draw();
}

function keyPressed() {
  switch (keyCode) {
    case 67:
      restartGraph();
      break;
    case 82:
      $('#submit-fundamental-physics').click();
      break;
  }
}
