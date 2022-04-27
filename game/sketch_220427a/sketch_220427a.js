var ballx = 500;
var bally = 500;
var ballSize = 90;
var score =0;
var gameState= "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(25);
  stroke(1)
  textFont('myFont')

} // end setup

function preload() {
  myFont = loadFont('pixel.otf');
  img = loadImage('https://pnwin.github.io/game/images/pokeball.png');
  img2 = loadImage('https://pnwin.github.io/game/images/forest.jpg');
  img3 = loadImage('https://pnwin.github.io/game/images/litwick.png');
  img4 = loadImage('https://pnwin.github.io/game/images/ditto.png');
  img5 = loadImage('https://pnwin.github.io/game/images/gengar.png');
  img6 = loadImage('https://pnwin.github.io/game/images/textbox.png')
}

function draw() {
  background(img2)
  noCursor()
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  fill(0)
  text(("Score: " + score), width/2, 55);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  fill(255)
  rect(205,10,190,70)
  image(img6,200,10, 200, 70) //textbox png

  var distToBall= dist(ballx, bally, mouseX, mouseY); //mouse touch ball
  if (distToBall <ballSize/2){
    ballx = random(width); //ball location x
    bally= random(height); //ball location y
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
 
  image(img3, ballx, bally, ballSize, ballSize+40); //pokemon
  image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
  
} // end level one

function levelTwo(){
  background(img2);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  
  image(img4, ballx+5, bally+1, ballSize, ballSize+6); //pokemon
  image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
} // end level two

function levelThree(){
    background(img2);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx+5, bally+1, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
//  

  image(img5, ballx, bally, ballSize, ballSize+20); //pokemon
  image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
} // end level thre
