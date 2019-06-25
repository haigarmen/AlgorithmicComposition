var circleCount = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    smooth();
    fill(150, 50);
    strokeWeight(1);
}

function draw(){

}

function mouseReleased() {
  drawCircles();
}

function drawCircles() {
  for (i=0; i<circleCount; i++) {
    var x = random(width);
    var y = random(height);
    var radius = random(100) + 10;
    noStroke();
    ellipse(x, y, radius*2, radius*2);
    stroke(0, 150);
    ellipse(x, y, 10, 10);
  }
}
