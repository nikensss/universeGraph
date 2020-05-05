let DRAW_EDGES = true;
let DRAW_TIPS = true;

class Connection {
  constructor(a, b, color) {
    if (!a || !b) {
      throw new Error('Insufficient arguments: start and end needed!');
    }
    this.start = a;
    this.end = b;
    this.arrowSize = 8;
    this.color = color || [0, 0, 0];
  }

  draw() {
    this.drawArrow();
  }

  drawArrow() {
    if (DRAW_EDGES) this.drawEdge();
    if (DRAW_TIPS) this.drawTip();
  }

  randomizeColor() {
    this.color = [random(255), random(255), random(255)];
  }

  drawEdge() {
    push();
    stroke(this.color);
    strokeWeight(1);
    noFill();
    //fill(this.color);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    pop();
  }

  drawTip() {
    push();
    const angle = atan2(this.start.y - this.end.y, this.start.x - this.end.x); //gets the angle of the line
    translate(this.end.x, this.end.y); //translates to the destination vertex
    rotate(angle + HALF_PI); //rotates the arrow point
    translate(0, -this.arrowSize);
    fill(this.color);
    triangle(-this.arrowSize / 2, 0, 0, this.arrowSize, this.arrowSize / 2, 0); //draws the arrow point as a triangle
    pop();
  }
}
