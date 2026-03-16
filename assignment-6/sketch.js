/*
Class: ARTG 2262
Name: Kavina Mansukhani
Email: mansukhani.k@northeastern.edu
Assignment: 6 - Drawing App

Instructions:
- Drag mouse to draw
- Press 1-5 to change color
- Press R for a rainbow brush and N for regular brush
- UP / DOWN arrows change brush size
- Press X to clear screen
- Press S to save drawing
*/

let brushSize = 6;
let r = 255;
let g = 182;
let b = 193;
let rainbow = false;
let hue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeCap(ROUND);
}

function draw() {

 if (mouseIsPressed) {

    // rainbow brush
    if (rainbow) {
      colorMode(HSB);
      stroke(hue, 80, 100);
      hue += 1;

      if (hue > 360) {
        hue = 0;
      }

      colorMode(RGB);
    } 
    
    // normal color
    else {
      stroke(r, g, b);
    }

    strokeWeight(brushSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // instructions
  noStroke();
  fill(80);
  textSize(12);
  text("Draw with mouse | 1-5 pastel colors | R rainbow | N normal | ↑ ↓ size | X clear | S save", 10, height - 10);
}

function keyPressed() {
  
  // rainbow brush
  if (key === 'r' || key === 'R') {
  rainbow = true;
}

// normal brush
if (key === 'n' || key === 'N') {
  rainbow = false;
}

  //colors keys
  if (key === '1') { r = 255; g = 182; b = 193; } // pastel pink
  if (key === '2') { r = 216; g = 191; b = 216; } // pastel purple
  if (key === '3') { r = 173; g = 216; b = 230; } // pastel blue
  if (key === '4') { r = 170; g = 240; b = 209; } // pastel mint
  if (key === '5') { r = 255; g = 239; b = 170; } // pastel yellow

  // brush size
  if (keyCode === UP_ARROW) {
    brushSize += 2;
  }

  if (keyCode === DOWN_ARROW) {
    brushSize = max(1, brushSize - 2);
  }

  // clear screen
  if (key === 'x' || key === 'X') {
    background(255);
  }

  // save drawing
  if (key === 's' || key === 'S') {
    saveCanvas("pastel_drawing", "png");
  }
}