// here the draw loop only will run once
// refresh browser window to get new result

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}
function draw() {
    // choose a random background color
    background(random(255), random(255), random(255));
    line(random(width),random(width),random(width),random(width));
}
