class Vector {
  constructor(x, y, size) {
    this.origin = createVector(x, y);
    this.vector = createVector(10, 0);
    this.size = size;
  }

  update(charges) {
    this.vector.set(0, 0);
    this.distance = 0;

    for (const charge of charges) {
      let r = p5.Vector.sub(charge.pos, this.origin);
      let field = r.copy().setMag(charge.q / r.magSq()).mult(-1);
      this.vector.add(field);

      if (r.mag() > this.distance) {
        this.distance = r.mag();
      }
    }
  }

  draw() {
    push();
    translate(this.origin.x, this.origin.y);

    let t = constrain(this.distance / 300, 0, 1);

    let c;
    let color1 = color(191, 102, 94);
    let color2 = color(4, 191, 157);
    let color3 = color(84, 112, 168);

    if (t < 0.5) {
      c = lerpColor(color1, color2, t * 2); 
    } else {
      c = lerpColor(color2, color3, (t - 0.5) * 2);
    }
    stroke(c);

    let dir = this.vector.copy().setMag(this.size * 3);
    line(0, 0, dir.x, dir.y);

    let arrowSize = this.size;
    let angle = dir.heading();

    push();
    translate(dir.x, dir.y);
    rotate(angle);
    line(-arrowSize, arrowSize/2, 0, 0);
    line(-arrowSize, -arrowSize/2, 0, 0);
    pop();
    pop();
  }
}

