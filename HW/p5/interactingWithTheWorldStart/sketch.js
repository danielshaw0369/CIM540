var centerX = 250;
var centerY = 250;
var carnival;
var party;
var bgImage;
var carnivalButton;
var partyButton;
var showhide;
var hiding = false;

function preload() {
  carnival = loadImage("assets/carnival.jpg");
party = loadImage("assets/party.jpg");
}

function setup() {
    createCanvas(500, 500);
bgImage = carnival;
carnivalButton = createButton ("Going to Carnival");
partyButton = createButton ("Going to Party");
carnivalButton.mousePressed(function() {
bgImage = carnival;
});
partyButton.mousePressed(function() {
  bgImage = party;
});
showhide = createButton ("Show Hide Clown");
showhide.position(250,10);
showhide.mousePressed(function(){
    if (hiding == false){
        hiding = true;
      }else{
          hiding = false;
          }
        });

}

function draw() {
  background(255);

  image(bgImage, 0, 0);
if(hiding == false){
  fill(255, 255, 255);

  strokeWeight(1);
  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX, centerY, 100, 100, 0, PI);
}
  strokeWeight(30);
  arc(centerX, centerY, 100, 100, PI, TWO_PI);

}
