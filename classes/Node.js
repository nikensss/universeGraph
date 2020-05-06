class Node {
  constructor(x, y, color = [0, 0, 0]) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.connections = [];
  }

  draw() {
    push();
    stroke('white');
    strokeWeight(1);
    fill(this.color);
    circle(this.x, this.y, 5);
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
