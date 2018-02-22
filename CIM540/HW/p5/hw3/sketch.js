var hotSexyGreen = 'rgb(0,80,48)';
var hotSexyOrange = 'rgb(244, 115, 33)';
var orangeXStart = 30;
var sideYStart = 220;
var canvasSize = 300;
var bottomYStart = 20;

var umImage;
var showUm = false;
var umButton;
var umHideButton;

function preload() {
  umImage = loadImage("assets/um.png");
}

function setup() {
  createCanvas (canvasSize, canvasSize);

  background ('black');
  umButton = createButton ("Show UM!");
  umButton.position(175,425);

  umHideButton = createButton("Hide UM!");
  umHideButton.position(75, 425);

  umButton.mousePressed(function() {
    console.log("sick guitar solo");
    showUm = true;
  });

  umHideButton.mousePressed(function(){
    console.log("melee melee melee WWWARREEAAARRRHHHH");
    showUm = false;
  });
}

function draw() {
  if (showUm === true){
    clear();
    image(umImage, 2, 50);
  } else {
    background ('black');
    fill (hotSexyOrange)
    rect(orangeXStart, sideYStart, 117.5, 55, 0, 0, 0, 0);

    fill (hotSexyOrange)
    rect(orangeXStart, bottomYStart, 55, 200);

    fill(hotSexyGreen);
    rect(147.5, sideYStart, 117.5, 55, 0, 0, 0, 0);

    fill(hotSexyGreen);
    rect(210, bottomYStart, 55, 200);
  }

}
