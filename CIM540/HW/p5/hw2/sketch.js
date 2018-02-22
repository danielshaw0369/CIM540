var hotSexyGreen = 'rgba(0,255,0, 0.25)';
var orangeXStart = 30;
var sideYStart = 220;
var canvasSize = 300;
var bottomYStart = 20;

function setup() {
  createCanvas (canvasSize, canvasSize);
  background ('black'); // put setup code here
}

function draw() {
  fill ('orange')
  rect(orangeXStart, sideYStart, 117.5, 55, 0, 0, 20,0);

  fill ('orange')
  rect(orangeXStart, bottomYStart, 55, 200);

  fill(hotSexyGreen);
  rect(147.5, sideYStart, 117.5, 55, 0, 0, 0,20);

  fill(hotSexyGreen);
  rect(210, bottomYStart, 55, 200);   
}
