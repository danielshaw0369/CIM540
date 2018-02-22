
var targetPosX = [0,200,400,600];

var targetPosY = [0,200];

var imageSize = 200;

var pics = [];

var outputText = " Find the Soccer Ball";

var currentBox = 0;

var startGame;

var sg = false;

function preload(){
  pics[0] = loadImage("assets/Football.png")
  pics[1] = loadImage("assets/basketball.png")
  pics[2] = loadImage("assets/soccer.png")
}

function setup(){
  createCanvas (600,400);
  console.log("First position in tergetPosX; " +targetPosX[0]);
  console.log("First position in tergetPosX; " +targetPosX[2]);
  startGame = createButton("Click to start!");
  startGame.position(widt/2,300);
  startGame.mousePressed(function(){
    sg = true;


  })

}



function draw(){

if(sg == true){
  fill(0);
  rect(targetPosX [0], targetPosY[0], imageSize, imageSize)
  rect(targetPosX [1], targetPosY[0], imageSize, imageSize)
  rect(targetPosX [2], targetPosY[0], imageSize, imageSize)

  if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY >= targetPosY[0] && mouseY <
  targetPosY[1]){
    console.log("box 1");
    image(pics[0], targetPosX[0], targetPosY[0]);
    currentBox = 1;
    if(currentBox == 3){
      console.log("You won");
      outputText = "You Won"
    }else if{(currentBox == 1 || currentBox == 2){
      console.log("You lose");
      outputText = "You lose"
}
}
    if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[0] && mouseY <
    targetPosY[1]){
      console.log("box 1");
      image(pics[1], targetPosX[1], targetPosY[0]);
      currentBox = 2;
    }
      if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[0] && mouseY <
      targetPosY[1]){
      console.log("box 1");
      image(pics[2], targetPosX[2], targetPosY[0]);
      currentBox = 3;

  }

  text(outputText, 50,250);
}
