const imageTemplate = "assets/frame_000";
var frames = 25;
const postfix = ".png";
var images = [];
var currentImage = 1;
var brokeback = "assets/Cliff.jpg";
var mountain = {};

const framesPerSec = 4;
var nowPlaying = false;
var startedAt = Date.now();

function preload(){
  for (var i = 1; i < frames; i++) {
    var imageWhatever = imageTemplate + i + postfix;
    images[i] = loadImage(imageWhatever);
  }
  mountain = loadImage(brokeback);
  console.log(mountain);

    createCanvas(1280, 480);
    var backAnimation = createButton("Previous Image");
    backAnimation.position(980/2, 615);
    backAnimation.mousePressed(function(){
      if (currentImage === 24) {
        currentImage = 0;
      } else if(currentImage > 1) {
        currentImage = currentImage - 1;
      }
      draw();
    });
    draw();
    noLoop();
  }


function setup() {
  createCanvas(1280, 480);
  var startAnimation = createButton("Next Image");
  startAnimation.position(1400/2, 615);
  startAnimation.mousePressed(function(){
    if (currentImage === 24)
      currentImage = 0;

    currentImage = currentImage + 1;
    draw();
  });
  var playPause = createButton("Play");
  playPause.position(1280/2, 615);
  playPause.mousePressed(function () {
    nowPlaying = !nowPlaying;
    playPause.html(nowPlaying ? "Pause" : "Play");
    startedAt = Date.now();
  });
  setInterval(function () {
    if (nowPlaying) {
      var secs = floor((Date.now() - startedAt) / (1 / framesPerSec * 1000));
      currentImage = secs % frames;
      draw();
    }
  }, 5);
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
