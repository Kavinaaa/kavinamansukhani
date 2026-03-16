/*
ARTG-2262 + 2263
Name: Kavina Mansukhani
Assignment: Assignment[5] – Screensaver
Title: Golden Fireflies
*/


let fireflies = [];
let numFireflies;


function setup() {
  createCanvas(windowWidth, windowHeight);

  numFireflies = int(width / 5);
 
  for (let i = 0; i < numFireflies; i++) {
    fireflies.push({
      x: random(width),
      y: random(height),
      size: random(4, 8),
      speedX: random(-0.5, 1.0),
      speedY: random(-0.5, 1.0),
      glow: random(100, 255)
    });
  }
}

  
function draw() {
  drawBackground();
  drawFireflies();
  displayTime();
}

function drawBackground() {
  for (let y = 0; y < height; y++) {
    let c = 20 - (y / height) * 15; 
    stroke(0, c * 2, c * 4);
    line(0, y, width, y);
  }

  //creates a glowy blur for moon
  drawingContext.shadowBlur = 30;       
  drawingContext.shadowColor = 'white'
  
  //draws moon
  fill(150);      
  noStroke(); 
  circle((windowWidth / 5.5),(windowHeight / 7),100)
  
  //resets moon glow
  drawingContext.shadowBlur = 0;
  
  //lightest green
  noStroke();
  fill(20, 50, 20);       
  rect(0, height * 0.82, width, height * 0.18);

  //middle green
  fill(15, 45, 15);       
  rect(0, height * 0.87, width * 0.4, height * 0.13);
  rect(width * 0.55, height * 0.85, width * 0.45, height * 0.15);

  //darkest green
  fill(10, 35, 10);       
  rect(0, height * 0.92, width, height * 0.08)
}

function drawFireflies() {
  for (let i = 0; i < fireflies.length; i++) {
    let f = fireflies[i];

    f.x += f.speedX;
    f.y += f.speedY;

    f.y += sin(frameCount * 0.02 + i) * 0.3;

    if (f.x < 0) f.x = width;
    if (f.x > width) f.x = 0;
    if (f.y < 0) f.y = height;
    if (f.y > height) f.y = 0;

    //draws the fireflies glow
    noStroke();
    fill(255, 255, 100, f.glow);
    ellipse(f.x, f.y, f.size);

    //actual yellow of firefly
    fill(255, 255, 100, 40);
    ellipse(f.x, f.y, f.size * 3);
  }
}

function displayTime() {
  fill(255);
  textSize(width / 45);
  textAlign(RIGHT, BOTTOM);

  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let mo = month();
  let y = year();
  
  let monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

let monthName = monthNames[mo - 1];

  text(monthName + " " + nf(d,2) + ", " + nf(y,2) + " " + nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2), width - 20, height - 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
