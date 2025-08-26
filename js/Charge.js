class Charge {
  constructor(x, y, q, r) {
    this.pos = createVector(x, y);
    this.q = q;
    this.r = r;
  }
  
  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    textSize(this.r*2);

    if (this.q > 0) {
      fill(0, 0, 255);
      ellipse(0, 0, this.r * 2);
      fill(255);
      textAlign(CENTER, CENTER);
      text('+', 0, 0);
    } else if (this.q < 0) {
      fill(219, 83, 46);
      ellipse(0, 0, this.r * 2);
      fill(255);
      textAlign(CENTER, CENTER);
      text('-', 0, 0);
    }

    pop();
  }
}
