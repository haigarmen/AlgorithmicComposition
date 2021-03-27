var mic;
var button;
var smoothMicLevel=0;

function setup() {
	createCanvas(windowWidth, windowHeight-100);
    background(0);
	button = createButton("Listen");
    button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
    mic.start();

}

function draw(){
	background(255);
    micLevel = mic.getLevel();

	console.log(micLevel);

	//Lerp smooths out jumpy values
	smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
	noStroke();
	fill(255,0,0);
	ellipse(width/2, height/2, 800, 4000*smoothMicLevel);
	fill(255);
	ellipse(width/2, height/2, 300, 1000*smoothMicLevel);}

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
