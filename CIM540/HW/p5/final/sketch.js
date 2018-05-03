var images = [];
var wordprocessor = "assets/wp.jpg";
var wp = {};
const playwrite = `
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain has born and I will give| you a complete
account of the system, and expound the actual teachings
of the great explorer of the truth, the |master-builder of human happiness. No one rejects,
dislikes, or avoids pleasure itself, because it is pleasure, but because| those who do not know
how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again |
is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
but because occasionally |circumstances occur in which toil and pain can procure him
some great pleasure.........|
To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage|
from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
no annoying |consequences, or one who avoids a pain that produces no resultant pleasure?||Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt |
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco|
laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in|
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint |
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.|
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque |
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto|
beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut|
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.|
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,|
sed quia non numquam eius modi|
tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,|
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi|
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil|
 molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?|
But I must explain to you how all this mistaken idea of denouncing pleasure and praisin pain|
was born and I will give you a complete account of the system, and expound the actual teachin|
of the great explorer of the truth, the master-builder of human happiness. No one rejects,|
dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know|
how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again|
is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,|
but because occasionally circumstances occur in which toil and pain can procure him some great|
pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except|
to obtain some advantage from it? But who has any right to find fault with a man who chooses to|
enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no|
resultant pleasText that displays when keys are pressed|
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut|
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris|
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate|
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non|
proident, sunt in culpa qui officia deserunt mollit anim id est laborum|
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,|
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae|
dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut |
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque |
porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed |
quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.|
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, |
nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea|
voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo|
voluptas nulla pariatur?|`.split('');
const keypressJump = 3;
let currentPosition = 0;
let keySound;
let returnSound;


function writeKeys(){
    var things = "";
    for (i = 0; i < keypressJump; i++) {
        var next = playwrite[currentPosition++];
        if (currentPosition >= playwrite.length)
          currentPosition = 0;

        var playTap = Math.floor(Math.random() * 10) % 5 === 0;

        if (next === "|"){
          //returnSound.play();
          things+="<br />";
        }
        else {
          if(playTap)
            keySound.play();
          things+= next;
        }
    }
    $('#screenwrite').append(things);
}

///////drop this into the start click event
document.addEventListener("keydown", function(event) {
  writeKeys(keypressJump);
});

function preload(){
  wp = loadImage(wordprocessor);
  keySound = loadSound('assets/key.mp3');
  returnSound = loadSound('assets/return.mp3');
}

function setup() {
  createCanvas(1280, 800);

}

function draw() {
  clear();
  background(wp);
}
