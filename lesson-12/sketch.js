var song;

function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(51);
    slider = createSlider(0,1,0.5,0.01);
    button = createButton("Play");
    button.mousePressed(togglePlay);
	// song.loop();
}

function togglePlay() {
    if (!song.isPlaying()){
        song.play();
        button.html("Pause");
    } else {
        song.stop();
        button.html("Play");
    }
}

function draw(){
    // background(0);
    song.setVolume(slider.value());
}
