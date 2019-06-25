// initial position for our circle
var circleX = 300;
var circleY = 20;
// how much to move the circle on each frame
var speedX = 10;
var speedY = -10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(193,255,62);
    circleX = 0;
}

function draw() {
    background('#1BB1F5');
    ellipse(circleX,circleY, 50, 50);
    circleX = circleX + speedX;
    circleY = circleY + speedY;

    // is the circle too far right?
    if(circleX > width) {
      circleX = width;
      speedX = -speedX;
      print("too far right");
    }
    // is the circle too far up?
    if(circleY > height) {
      circleY = height;
      speedY = -speedY;
      print("too far up");
    }
  // is the circle too far to the left?
    if(circleX < 0) {
      circleX = 0;
      speedX = -speedX;
      print("too far left");
    }
    // is the circle too low?
    if(circleY < 0) {
      circleY = 0;
      speedY = -speedY;
      print("too low");
    }
}
