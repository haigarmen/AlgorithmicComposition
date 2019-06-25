
function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    var heightSpacing = windowHeight/10;
    var widthSpacing = windowWidth/20;
    strokeWeight(30);
    strokeCap(SQUARE);

// diagonal lines
    for(i=0; i < 7; i++) {
        line(width/2-80 - 150*i, -0, width/2 - 10, height/12 + 160*i );
    }

    noStroke()
    rect(width/2 - 25, -60, width - 30, height/2)
    stroke(0)

// horizontal lines
    for(i=0; i < 6; i++) {
        line(width/2, i * heightSpacing, width, i * heightSpacing);
    }
// vertical lines
    for(i=0; i < 10; i++) {
        line((width/2 + 10) + (i * widthSpacing), height/2, (width/2 + 10) + (i * widthSpacing), height);
    }


}
