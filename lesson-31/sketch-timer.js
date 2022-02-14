// Creating Sound on MousePosition and visualize

var synth;
var sloop;
var freq = 1000;
var velocity = 0.7;
var lastX, lastY;
var interval;

function setup() {
    createCanvas(windowWidth, windowHeight - 100);
    textAlign(CENTER, CENTER);
    colorMode(HSB, 255);
    synth = new p5.PolySynth();
    lastX = width / 2;
    lastY = height / 2;
}

function draw() {
    background(245);
    var hue = map(freq, 400, 2000, 0, 255);
    var diameter = map(velocity, 0.1, 1, height / 20, height / 2);
    noStroke();
    fill(hue, 255, 255);
    ellipse(lastX, lastY, diameter, diameter);

    fill(30);
    text("Pitch (Hz): " + freq.toFixed(2) + ", Velocity: " + velocity.toFixed(2), width / 2, height - height / 10);
}

function touchStarted() {
    lastX = mouseX;
    lastY = mouseY;
    freq = map(lastX, 0, width, 400, 2000); //random(50, 70);
    velocity = map(height - lastY, 0, height, 0.1, 1); //random(0.5, 1);
    // check to see if AudioContext is running
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }

    // Play synth
    // synth.noteAttack(freq, velocity, 0);
    // start Synth timer
    interval = setInterval(makeNote,800);
}

function makeNote() {
    // note = random(['E4', 'G4', 'A4', 'B4', 'D4']);
    // synth.play(note, 0.3, 0, 0.1);
    synth.noteAttack(freq, velocity, 0);
    // print(frameCount);

    text(freq, width/2, height/2);
}

function touchEnded() {
    // Stop synth
    synth.noteRelease(freq, 0);
}
