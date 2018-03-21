const imageTemplate = "assets/frame_000";
var frames = 24;
const postfix = ".png"
var images = [];
var currentImage = 1;
var brokeback = "assets/Cliff.jpg";
var mountain = {};

function nextImage(imageFilename){
  console.log(imageFilename);
  image(imageFilename, 2, 50);
}

function preload(){
  for (var i = 1; i < frames; i++) {
    var imageWhatever = imageTemplate + i + postfix;
    console.log(imageWhatever);
    images[i] = imageWhatever;
  }
}

function setup() {
  var startAnimation = createButton("next image");
  startAnimation.position(width/2, 300);
  startAnimation.mousePressed(function(){
    if (currentImage === 24)
      currentImage = 1;

    var next = loadImage(images[currentImage]);
    image(next, next.width, next.height);
    currentImage = currentImage + 1;
  });
  mountain = loadImage(brokeback);
  console.log(mountain);
  createCanvas('2560, 1140');
}

function draw() {
    background(mountain);
}
