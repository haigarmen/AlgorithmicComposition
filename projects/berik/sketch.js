var amplitude;

var frames = 100
var num = 50
var playing;
var mic;
var smoothMicLevel = 0;



var theta = 0.0001;

var c = ['white']

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
    

    slider = createSlider(0,1,0.5,0.1);
    mic = new p5.AudioIn()
    mic.start();
}

function draw() {
    line(windowWidth, windowHeight)

    background('black');

    stroke(random(c));
    translate(width / 2, height / 2);
    micLevel = mic.getLevel() * 10000;
    multiplier = slider.value()
    micLevel = micLevel* multiplier
    console.log(micLevel)
    
    ellipse(0, 0, 200, 200);


    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = 200;
        x = map(sin(theta), -1, 1, sz, width * 0.2);
        translate(x, 90);
        push();
        line(height / 2, width / 2)
        rotate(theta);


        if (i % 2 == 0) {
            fill(100, 0.000001);
            rect(micLevel, micLevel, sz, sz * 1);

        } else {
            stroke('#42d6f7')
            line(699, 1000, -100, -9000)
        }


        pop();
        pop();
    }
    theta += TWO_PI / frames;
}


function toggleListen() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
        text('listening to audio', width / 2, height / 2);
        button.html("Stop");
    } else {
        text('click Play button to start', width / 2, height / 2);

        button.html("Listen");
    }
}

function mousePressed() {
    toggleListen()
    mic.stop()
}



// var frames = 200
// var num = 40; // try numbers up to 40
// let theta = 0;
// let isLooping;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);
// }

// function draw() {
//     background(20);
//     fill(255, 30);
//     stroke(255, 50);
//     translate(width / 2, height / 2);
//     for (i = 0; i < num; i++) {
//         push();
//         let offSet = TWO_PI / num * i;
//         rotate(offSet);
//         sz = map(sin(theta), -1, 1, width*.15, width*.2);
//         x = map(sin(theta), -1, 1, sz, width * .2);
//         translate(x, 0);
//         push();
//         rotate(theta);
//         stroke(random(0),random(255),random(),);

//         if (i%2==0) {
//           ellipse(0, 0, sz, sz*2);
//           px = cos(theta)*sz/2;
//           py = sin(theta)*sz;
//           sz2 = 20;
//           strokeWeight(2);
//           ellipse(px, py, sz2, sz2);
//           strokeWeight(1);
//         } else {
//             fill(255,20);
//             noStroke();
//             stroke(random(0),random(0),random(255))
//             rect(0, 0, sz*.7, sz*2*.7);
//             px = cos(theta+PI)*sz*.35;
//             py = sin(theta+PI)*sz*.7;
//             sz2 = 5;
//             fill(255);
//             ellipse(px, py, sz2, sz2);
//             noFill();
//         }
//         pop();
//         pop();
//     }
//     theta += TWO_PI / frames;
// }   

// function togglePlay() {
//     if (isLooping === false) {
//         loop();
//         isLooping=true;
//         console.log("Start Loop");
//     } else {
//         noLoop();
//         isLooping=false;
//         console.log("Stop Loop");
//     }
// }

// function mousePressed() {
//     togglePlay();
// }










// var song;
// var button;
// var amplitude;

// function preload() {
//     song = loadSound("../audio/myBeat.mp3");
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight - 100);
//     background(51);
//     slider = createSlider(0, 1, 0.5, 0.01);
//     button = createButton("Play");
//     button.mousePressed(togglePlay);
//     // song.loop();
//     amplitude = new p5.Amplitude();
// }

// function togglePlay() {
//     if (!song.isPlaying()) {
//         song.loop();
//         button.html("Pause");
//     } else {
//         song.stop();
//         button.html("Play");
//     }
// }

// function draw() {
//     background(0);
//     song.setVolume(slider.value());

//     var vol = amplitude.getLevel();
//     var micLevel = map(vol, 0, 1, 10, height);
//     fill(255, 0, 255, 200);
//     ellipse(width / 2, height / 2, micLevel, micLevel);
// }