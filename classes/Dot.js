class Dot {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color || [0, 0, 0];
    this.connections = [];
  }

  draw() {
    push();
    stroke(this.color);
    strokeWeight(1);
    point(this.x, this.y);
    pop();
    this.connections.forEach((c) => c.draw());
  }

  connect(dot) {
    //if the connection already exists, return
    if (this.connections.some((c) => c.start === this && c.end === dot)) return;

    //if the connection is backwards, return
    if (dot.connections.some((c) => c.start === dot && c.end === end)) return;

    this.connections.push(new Connection(this, dot));
  }
}
