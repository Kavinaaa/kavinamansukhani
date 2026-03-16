/*
ARTG-2262 + 2263
Name: Kavina Mansukhani
Assignment: Assignment[4] – Decorative Pattern
Title: Pastel Quilt
*/

function setup() {
  createCanvas(1240, 1240);
}

function draw() {
  background(30);
  noStroke();
  
  
  let size = 128; // size of each square tile

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      
      
      if ((x + y) % (size * 2) === 0) {
        drawTileOne(x, y, size);
      } else {
        drawTileTwo(x, y, size);
      }

    }
  }

}

function drawTileOne(x, y, s) {
  fill(250, 218, 221);//light pink
  square(x, y, s);

  fill(230, 230, 250);//light purple
  circle(x + s/2, y + s/2, s/2);
}

// ----- TILE STYLE 2 -----
function drawTileTwo(x, y, s) {
  fill(231, 254, 270);//light blue
  square(x, y, s);

  fill(255, 255, 191);//light yellow
  circle(x + s/2, y + s/2, s/3);
}


function keyPressed() {
if (key == 'S' || key == 's') {
saveCanvas("assignment[4]_pattern_Mansukhani_Kavina");
}
}