/* Name: Kavina Mansukhani
   Email: Prototyping with Code
   Lab: #3
   Assignment: #3
   Title: "Basking in Purple"
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250, 227, 246); 

  let centerX = width / 2;
  let centerY = height / 2;
  let s = min(width, height) * 0.5; 
  
  //Background Circle 
  noStroke();
  fill(173, 216, 230); 
  ellipse(centerX, centerY, s * 1.5);

  //Hair - Back Layer 
  fill(120, 70, 50);
  beginShape();

for (let a = 0; a < TWO_PI; a += 0.2) {
  let r = s * 0.5 + cos(a * 10) * 10;  
  let x = centerX + cos(a) * r * 1.2;
  let y = centerY + sin(a) * r * 1.2;

  vertex(x, y);
}

endShape(CLOSE);
  

  //Face
  fill(210, 160, 120);
  rectMode(CENTER);
  ellipse(centerX, centerY + s * 0.1, s * 0.5, s * 0.6, s * 0.2);
  
  //Hair bangs
  fill(120, 70, 50);
  ellipse(centerX - 50 , centerY - 40, s * 0.3, s * 0.3, s * 0.2);
  ellipse(centerX + 50 , centerY - 40, s * 0.3, s * 0.3, s * 0.2);
  ellipse(centerX , centerY - 40, s * 0.3, s * 0.3, s * 0.2);


  // Cheeks
  fill(255, 180, 180, 150); 
  ellipse(centerX - s * 0.15, centerY + s * 0.15, s * 0.1);
  ellipse(centerX + s * 0.15, centerY + s * 0.15, s * 0.1);
  
  // Eyes 
  noFill();
  stroke(120, 70, 50);
  strokeWeight(6);
  arc(centerX - s * 0.12, centerY + s * 0.1, s * 0.08, s * 0.05, PI, TWO_PI);
  arc(centerX + s * 0.12, centerY + s * 0.1, s * 0.08, s * 0.05, PI, TWO_PI);

  //Square Glasses 
  stroke(40);
  strokeWeight(4);
  rect(centerX - s * 0.14, centerY + s * 0.1, s * 0.18, s * 0.15, 5); 
  rect(centerX + s * 0.14, centerY + s * 0.1, s * 0.18, s * 0.15, 5);
  line(centerX - s * 0.05, centerY + s * 0.1, centerX + s * 0.05, centerY + s * 0.1); 

  // Mouth 
  stroke(201, 54, 81);
  strokeWeight(6);
  bezier(centerX - 10, centerY + s * 0.22, 
         centerX - 5, centerY + s * 0.25, 
         centerX + 5, centerY + s * 0.25, 
         centerX + 10, centerY + s * 0.22);

  //Shirt 
  noStroke();
  fill(200, 180, 220); 
  rect(centerX, centerY + s * 0.6, s * 0.5, s * 0.4, s * 0.2);
  //Buttons 
  fill(255);
  ellipse(centerX, centerY + s * 0.55, 8);
  ellipse(centerX, centerY + s * 0.65, 8);

  fill(100, 100, 150);
  textAlign(RIGHT);
  textSize(16);
  text("Kavina", width - 20, height - 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}