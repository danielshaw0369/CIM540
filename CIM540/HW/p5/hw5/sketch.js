var song;
var slider;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('assets/dubstep.mp3');

}

function setup() {
  createCanvas(200,200);
  slider = createSlider(0, 1, 0.5, 0.01);
  song.play();

}

function draw() {
  background(0);

  song.setVolume(slider.value());

}
