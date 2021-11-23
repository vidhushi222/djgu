leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
song="";
song1=""
leftWrist_score=0;
leftWristy_number=0;
function preload(){
song=loadSound("music.mp3");
song1=loadSound("music.mp3");
}

function draw(){
image(video,0,0,600,500);
if(leftWrist_score >0.2){
circle(leftWristx,leftWristy,20);
leftWristy_number=floor(Number(leftWristy));
volume=leftWristy_number/500;
document.getElementById("volume").innerHTML="volume: "+volume;
song.setVolume(volume);
}}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist_score=results[0].pose.keypoints[9].leftWrist_score;
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y
    }
}


function modelloaded(){
    console.log("poseNet is initialized");
}