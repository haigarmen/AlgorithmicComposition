// Radial Pattern 1 with Sound

var frames = 240;
var num = 40; // try numbers up to 40
var theta = 0;
var wave;
var frequency;
var playing;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    wave = new p5.Oscillator();
    wave.setType('sine');
    wave1 = new p5.Oscillator();
    wave1.setType('sine');
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 50);
    translate(width / 2, height / 2);
    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = width * .15;
        x = map(sin(theta), -1, 1, sz, width * .2);

        // change the frequency of synth
        console.log(offSet);
        // wave.freq(x/.5);

        translate(x, 0);
        push();
        rotate(theta);
        // ellipse(0, 0, sz, sz * 2);
        // ellipse(0, 0, sz * .7, sz * 2 * .7);
        if (i % 2 == 0) {
            ellipse(0, 0, sz, sz * 2);
        } else {
            ellipse(0, 0, sz * .7, sz * 2 * .7);
        }
        pop();
        pop();
        wave1.freq(offSet*100);

    }
    theta += TWO_PI / frames;
}

function togglePlay() {
	if (!playing) {
        loop();
		// wave.start();
		wave.amp(1, .25);
        wave1.start();
		wave1.amp(1, .25);
		// second number fades in the amplitude by the duration specified
		playing = true;
        console.log("Start Loop");
	} else {
        noLoop();
		wave.amp(0, .25);
        wave1.amp(0, .25);
		playing = false;
        console.log("Stop Loop");

	}
}

function mousePressed() {
    togglePlay();
}
