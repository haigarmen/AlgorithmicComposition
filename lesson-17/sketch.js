function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    smooth();
}

function draw(){
    noFill();
    strokeWeight(.25);
    stroke(255, 100);

    for (i = 0;i < 200; i+=8) {
      ellipse(100 + i*4, 100 + i*5, 100+i*4, 100-i);
      // ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
    }
}
