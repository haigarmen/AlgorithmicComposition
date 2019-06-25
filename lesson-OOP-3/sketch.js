//a simple class with objects stored in an array


var circle; //all variables are var even for an object
var circle2; //declare a second pulse object

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  circle = new Circle(width/2, height/2, 250, 250); //initialize the object
  circle2 = new Circle(random(width), random(height), 100, 100); //initialize the object
  noStroke();
}

function draw() {
  background(255);
  circle.display(); //run the display function of the object
  circle.move();
  circle2.display();//run the display function of the object
  circle2.move();
}

//class in p5js

class Circle {

    //The constructor (note no variable declarations above the constructor)
    constructor(x, y, w, h) { //Circle has 4 arguments
    this.x = x; //this refers to the variables in the class. Need to use this in front of all variables.
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "red";
    this.n=random(2);//generate a random starting noise variable;
    this.p=0; //position variable
    this.inc=0.005; //noise variable increment
  }

   //Functions
  display() {
    fill(255, 0, 0,100);
    ellipse(this.x, this.y, this.w, this.h);
 	this.w += random(-1, 1);
   	this.h += random(-1, 1);

  }

  move() {
   this.p=noise(this.n);
   this.x=map(this.p,0,1,0,width);
   this.n=this.n+this.inc;
  }
}
