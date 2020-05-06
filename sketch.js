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
  const a = new Node(width / 3, height / 2);
  const b = new Node((2 * width) / 3, height / 3);
  const c = new Node((2 * width) / 3, (2 * height) / 3);
  dots = [a, b, c];
  c.connect(a);
  c.connect(b);
}

function htmlInit() {
  updateTotalNodes();

  $('#fundamental-physics').on('submit', (e) => e.preventDefault());
  $('#submit-fundamental-physics').click((e) => {
    steven.fundamentalLoop(+$('#amount-iterations').val());
    draw();
    updateTotalNodes();
  });

  $('#clear').click(() => restartGraph());

  $('#draw-edges').change(() => draw());
  $('#draw-tips').change(() => draw());
}

function updateTotalNodes() {
  $('#total-nodes').text(steven.dots.length);
}

function draw() {
  background(180, 180, 180);
  steven.dots.forEach((d) => d.draw());
}

function restartGraph() {
  background(180, 180, 180);
  steven.restart();
  updateTotalNodes();
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
