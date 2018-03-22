const imageTemplate = "assets/frame_000";
var frames = 25;
const postfix = ".png";
var images = [];
var currentImage = 1;
var brokeback = "assets/Cliff.jpg";
var mountain = {};

function preload(){
  for (var i = 1; i < frames; i++) {
    var imageWhatever = imageTemplate + i + postfix;
    images[i] = loadImage(imageWhatever);
  }
  mountain = loadImage(brokeback);
  console.log(mountain);
}

function setup() {
  createCanvas(1280, 480);
  var startAnimation = createButton("next image");
  startAnimation.position(1280/2, 615);
  startAnimation.mousePressed(function(){
    if (currentImage === 24)
      currentImage = 0;

    currentImage = currentImage + 1;
    draw();
  });
  draw();
  noLoop();
}

function draw() {
  clear();
  background(mountain);
  console.log(currentImage);
  var next = images[currentImage];
  image(next, 0, 0, next.width, next.height);
}
