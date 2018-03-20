var question = ["Is Iceland covard in ice"]
var imageBase = "frame_000";
var images = 24;

var options = []
var answers = ["false","atlantic"]
var step = 0;

function setup() {

    createCanvas(400, 400);
    console.log(options[0][1]);


}



function draw() {
    background(255);
    text(quaestions[currentQuestion], 20,100)

    for(var i = 0; i<options[currentQuestion].length;i++){
      console.log(options[currentQuestion][i]);
        text(options[currentQuestion][i], 10 + (100 i),200);

    }




  )
