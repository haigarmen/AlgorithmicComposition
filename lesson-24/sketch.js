function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#86a9e0');
    smooth();
    noStroke();
    noLoop();
}

function draw(){
    var x = 0;
    while (x < width) {
      var y = 0;
      while (y < height) {
          if (random(100) < 1 ) {
              fill(255, 0, 0, random(80));
              rect(x+20, y+20, 40, 40);
            } else {
              // but usually pick a random gray color
              fill(random(150, 255), random(80));
              ellipse(x+20, y+20, random(40), random(40));
            }
        y = y + 20;
      }
      x = x + 20;
    }
}
