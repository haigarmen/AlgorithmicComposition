var speed = 10;
var circleX = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(193,255,62);
}

function draw() {
    background('#1BB1F5');
    ellipse(circleX,50, 50, 50);
    circleX = circleX + speed;
}
