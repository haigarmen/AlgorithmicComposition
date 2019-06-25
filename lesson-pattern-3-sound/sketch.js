// Radial Pattern 3 with Sound

var frames = 300
var num = 50; // try numbers up to 50
let theta = 0;
let isLooping;
let d = 100;
var wave;
var playing;
var frequency;
var newNote=0;
var newFreq=0;
var timing= 500;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke(255);
    noStroke();
    fill(255);
    wave = new p5.Oscillator();
    wave.setType('sine');
    setTimeout(makeNote(newNote), timing);
}

function draw() {
    blendMode(BLEND);
    background(0);
    blendMode(SCREEN);
    for (j=0; j < 3; j++) {
      if (j==0) fill(255, 0, 0);
      if (j==1) fill(0, 255, 0);
      if (j==2) fill(0, 0, 255);
      for (i=0; i < num; i++) {
        angle = TWO_PI/num*i;
        x = width/2 + j*5 + cos(angle)*d;
        y = height/2 + sin(angle)*d;
        push();
        translate(x, y);
        rotate(theta+angle);

        d2 = d * 5;
        arc(0, 0, d2, d2, 0, radians(5));
        // make sound
        let newNote = int(map(theta,500,700,50,70));
        let newFreq = midiToFreq(newNote);
        pop();
      }
    }
    theta += TWO_PI/frames;
}

function togglePlay() {
	if (!playing) {
        loop();
		wave.start();
		wave.amp(1, .125);
		playing = true;
        console.log("Start Loop");
	} else {
        // noLoop();
		wave.amp(0, .125);
        // wave2.amp(0, .25);
		playing = false;
        console.log("Stop Loop");
	}
}

function mousePressed() {
    togglePlay();
}

function makeNote(newFreq) {
    togglePlay();
    console.log(newFreq);
    wave.freq();
    setTimeout(makeNote, timing);
}
