var mic;
var button;
var smoothMicLevel=0;

function preload() {
  canImage = loadImage('../images/cola_can.svg');
}

function setup() {
	createCanvas(windowWidth, windowHeight-100);
    background(0);
	button = createButton("Listen");
    button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
    mic.start();
	// image(canImage, 0, 0);
}

function draw(){
	background(255);
    micLevel = mic.getLevel();

	// console.log(micLevel);

	//Lerp smooths out jumpy values
	smoothMicLevel = lerp(smoothMicLevel, micLevel,0.4);
	noStroke();
	fill(255,0,0);
	imageMode(CENTER);
	// ellipse(width/2, height/2, 300, 2000*smoothMicLevel);
	image(canImage, width/2, height/2,2000*smoothMicLevel, 2000*smoothMicLevel);
}

function toggleListen() {
	if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
		text('listening to audio', width/2, height/2);
		button.html("Stop");
	} else {
        text('click Play button to start', width/2, height/2);

        button.html("Listen");
    }
}
