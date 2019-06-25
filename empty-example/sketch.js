function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//    background(0);
    strokeWeight(random(5));
    stroke(0,random(200,255),0);
    line(width/2,height/2,random(width),random(width));
}
