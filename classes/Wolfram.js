class Wolfram {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.dots = this.getInitialState();
  }

  restart() {
    this.dots = this.getInitialState();
  }

  getInitialState() {
    const a = new Node(random(this.w), random(this.h));
    const b = new Node(random(this.w), random(this.h));
    const c = new Node(random(this.w), random(this.h));
    c.connect(a);
    c.connect(b);

    return [a, b, c];
  }

  fundamentalLoop(iterations) {
    for (let i = 0; i < iterations; i++) {
      let color = [random(255), random(255), random(255)];
      for (const dot of this.dots) {
        let connections = [...dot.connections];
        if (connections.length < 2) continue;

        for (let j = 0; j < connections.length - 1; j++) {
          let a = connections[j];
          for (let k = j + 1; k < connections.length; k++) {
            let b = connections[k];
            if (a.start === b.start && a.end !== b.end) {
              this.interpolate(a, b, color);
            }
          }
        }
      }
    }
    // draw();
    // updateTotalDots();
  }

  interpolate(a, b, color) {
    //a = {x,y}
    //b = {x,z}
    //{{x,y},{x,z}} = {{x, z}, {x, w}, {y, w}, {z, w}}
    const x = a.start;
    const y = a.end;
    const z = b.end;
    const w = new Node(random(width), random(height), color);
    this.dots.push(w);
    a.end = w;
    a.color = color;
    x.connections.push(new Connection(y, w, color));
    x.connections.push(new Connection(z, w, color));
  }
}
