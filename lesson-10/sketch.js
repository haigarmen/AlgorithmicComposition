var speed = 10;
var circleX;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(193,255,62);
    circleX = 0;
}

function draw() {
    background('#1BB1F5');
    ellipse(circleX,50, 50, 50);
    circleX = circleX + speed;

    if(circleX >= width) {
        circleX = width;
        speed = -speed;
    } else if (circleX <= 0) {
        circleX = 0;
        speed = -speed;
    }
}
