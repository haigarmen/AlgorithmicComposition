// drawing lines from the center of the canvas
// why does the X and Y of second point need to be between 0 and width

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // this makes the background black
}
function draw() {
    stroke(0, 0, random(255)); // R, G, B
    // start lines in the middle of the screen (width/2, height/2)
    line(width/2, height/2, random(width), random(height));
}
