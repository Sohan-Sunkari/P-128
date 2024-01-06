var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

// Posenet model
var poseNet;

var Song1 = 'Travis Scott - I KNOW ？ (Official Audio).mp3';
var Song2 = 'Travis Scott - My Eyes (Best Part Extended) (320 kbps).mp3';

var capture;

var musicFile1, musicFile2;

function preload() {
  musicFile1 = loadSound(Song1);
  musicFile2 = loadSound(Song2);
}

function setup() {
    var canvas = createCanvas(640, 480);
  
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
  
    capture = createCapture(VIDEO);
    capture.hide();

    // Initialize posenet model with capture
    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Model Loaded!');
}

function gotPoses(poses) {
    if (poses.length > 0) {
        leftWristX = poses[0].pose.keypoints[9].position.x;
        leftWristY = poses[0].pose.keypoints[9].position.y;
        rightWristX = poses[0].pose.keypoints[10].position.x;
        rightWristY = poses[0].pose.keypoints[10].position.y;
    }
}

function draw() {
    image(capture, 0, 0, width, height);
}