function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    smooth();
    noStroke();
    noLoop();
}

function draw(){
    var x = 0;
    while (x < width) {
      var y = 0;
      while (y < height) {
        fill(random(180,255),random(80,100),random(80,100));
        rect(x, y, 60, 60);
        y = y + 62;
      }
      x = x + 62;
    }
}
