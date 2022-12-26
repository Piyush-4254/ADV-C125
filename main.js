noseX=0;
noseY=0;
leftwristX =0;
rightwristX =0;
difference=0;

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(600,110);

    video = createCapture(VIDEO);
    video.size(550,500);

     poseNet = ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotposes);
}

function draw()
{
    background("gray");
    document.getElementById("square_sides").innerHTML = "Width and Height of the square will be  "+difference + "px";
     fill("blue");
     stroke("blue");
     square(noseX,noseY,difference);

}

function modelLoaded()
{
    console.log("poseNet is initialized");

}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x= "+ noseX);
    console.log("nose y= "+ noseY);


    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    console.log("rightwristX = "+rightwristX);
    console.log("leftwristX = "+leftwristX);
difference = floor(leftwristX-rightwristX);
console.log("difference = "+difference);
}
}