function setup() {
  // put setup code here
}

function draw() {
    // lines that begin with two slashes are comments for yourself
   // point() draws a pixel on the display

   point(50,50);
   point(51,50);
   point(52,50);
   point(53,50);
   point(54,50);
   point(55,50);

   // the first number is the X value (distance from the left border)
   // the second number is the Y value (distance from the top border)

   // line() draws a line on the display
stroke(0);
   line(0,10,100,10);
   line(0,20,100,20);
   line(0,30,100,30);

   // line(random(100),random(100),random(100),random(100));
}
