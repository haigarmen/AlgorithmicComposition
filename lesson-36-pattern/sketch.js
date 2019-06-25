// Radial Pattern Basic

let k = 5 / 9.0;
let scaleIt = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(20);
    colorMode(HSB);
    strokeWeight(0.2);
    smooth();
}

function draw() {
    translate(width / 2, height / 2);
    //scale(width/2, height/2);
    let t = frameCount / 10.0;

    console.log(frameCount);

    let x = cos(k * t) * sin(t) * scaleIt;
    let y = cos(k * t) * cos(t) * scaleIt;
    stroke(255);
    line(0, 0, random(x, x+10), random(y, y+10));
}
