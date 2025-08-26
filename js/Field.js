let COLS, ROWS;
let SIZE = 30;
let arrowSize = 5;
let VECTORS = [];
let CHARGES = [];
let draggingCharge = null;

function setup() {
  const canvas = createCanvas(900, 900);
  canvas.parent('field-container');
  canvas.mousePressed(handleMousePressed);
  canvas.elt.oncontextmenu = () => false;
  canvas.elt.onmousedown = (e) => e.preventDefault();

  COLS = floor(width / SIZE);
  ROWS = floor(height / SIZE);

  for (let i = 0; i < COLS; i++) {
    VECTORS[i] = [];
    for (let j = 0; j < ROWS; j++) {
      let x = i * SIZE + SIZE / 2;
      let y = j * SIZE + SIZE / 2;
      VECTORS[i][j] = new Vector(x, y, arrowSize);
    }
  }

  CHARGES.push(new Charge(365, 425, -1, 40));
  CHARGES.push(new Charge(565, 425, 1, 40));

}

function draw() {
  background("#121212");

  for (const charge of CHARGES) {
    charge.draw();
  }

  for (const col of VECTORS) {
    for (const vector of col) {
      vector.update(CHARGES);
      vector.draw();
    }
  }

}

function handleMousePressed() {
  for (let i = CHARGES.length - 1; i >= 0; i--) {
    let charge = CHARGES[i];
    if (dist(mouseX, mouseY, charge.pos.x, charge.pos.y) < charge.r) {
      if (mouseButton === LEFT) {
        CHARGES.splice(i, 1);
      }
      return false;
    }
  }

  if (mouseButton === LEFT) {
    CHARGES.push(new Charge(mouseX, mouseY, 1, 40));
  } else if (mouseButton === RIGHT) {
    CHARGES.push(new Charge(mouseX, mouseY, -1, 40));
  }

  return false;
}