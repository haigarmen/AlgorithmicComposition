//This example uses a simple class with 4 arguments
var pulse=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  //fill array
  for(var i=0;i<5;i++){ //loop 5 times
    //put an object in the array for each loop
    var d=random(100,200);
    pulse[i] = new Pulser(width/2, height/2, d,d);

  }
  noStroke();
}

function draw() {
  background(255);
  for(var i=0;i<pulse.length;i++){ //loop 5 times
    pulse[i].display(); //run the display function of the object
    pulse[i].move();
  }
}

//ADD an object to the array when mouse is clicked
function mousePressed(){
  var d=random(100,200);
  pulse.push(new Pulser(width/2, height/2, d,d));
  console.log("pushing");
}

//class in p5js
class Pulser {
    //The constructor (note no variable declarations above the constructor)
    constructor(x, y, w, h) { //pulser has 4 arguments
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
