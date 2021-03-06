// Sometimes you might want to execute code at a different interval than the draw loop. For example: our draw loop is creating a nice smooth animation but we want to have sound/notes played at a much slower pace and more like one every half second (500ms)
// we will use setInverval(function, amount of time) to achieve it.


var pickFrames;
var x = 0;
var isPlaying = false;
var interval;

let colourA = color(218, 165, 32);
let colourB = color(72, 61, 139);

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

    pickFrames = createP('Pick Frames');

    button = createButton('Play');
    button.mousePressed(togglePlay);
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 80);
    line(x, 0, x, height)
    x +=3;
    if (x > width) {
        x = 0;
    }
}

function togglePlay() {
    if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
        interval = setInterval(makeNote,200);
        text('playing audio', width/2, height/2);
		button.html("Stop");
        isPlaying = true;
	} else {
        getAudioContext().close();
        clearInterval(interval);
        text('click Play button to start', width/2, height/2);
        button.html("Play");
        isPlaying = false;
    }
}

function makeNote() {
    console.log(frameCount);
    pickFrames.html(frameCount);

    var synth = new p5.MonoSynth();

    synth.play('A4', 0.5, 0, 0.2);
}
