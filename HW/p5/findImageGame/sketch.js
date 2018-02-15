
var targetPosX = [0,200,400];

var targetPosY = [0,200];

var imageSize = 200;

function setup(){
  createCanvas (600,400);
  console.log("First position in tergetPosX; " +targetPosX[0]);
  console.log("First position in tergetPosX; " +targetPosX[2]);


}



function draw(){
  rect(targetPosX [0], targetPosY[0], imageSize, imageSize)
  rect(targetPosX [1], targetPosY[0], imageSize, imageSize)
  rect(targetPosX [2], targetPosY[0], imageSize, imageSize)


}
