let angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
  colorMode(HSB); // Run once and stop
}

function draw() {
  background(0);
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (i = 0; i < data.length; i++) {
    var color = map(i, 0, data.length, 0, 255);
    fill(color,150,255);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(data[i]));
    lastAngle += radians(data[i]);
  }
}
