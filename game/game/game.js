var i = 0
var ballx = 450;
var bally = 450;
var ballSize = 150;
var score =0;
var gameState= "begin";

function setup() {
  noCursor()
  createCanvas(600, 600);
  textAlign(CENTER);
  textFont(myFont)
  textSize(25);

} // end setup

function preload() {
  myFont = loadFont('https://pnwin.github.io/game/pixel.otf');
  img =   loadImage('https://pnwin.github.io/game/images/pokeball.png');
  img2 =  loadImage('https://pnwin.github.io/game/images/forest.jpg');
  img3 =  loadImage('https://pnwin.github.io/game/images/litwick.png');
  img4 =  loadImage('https://pnwin.github.io/game/images/ditto.png');
  img5 =  loadImage('https://pnwin.github.io/game/images/gengar.png');
  img6 =  loadImage('https://pnwin.github.io/game/images/textbox.png')
  img7 =  loadImage('https://pnwin.github.io/game/images/kanto.jpg')
  img8 =  loadImage('https://pnwin.github.io/game/images/victory.png')
  img9 =  loadImage('https://pnwin.github.io/game/images/togetic.png')
  img10 = loadImage('https://pnwin.github.io/game/images/win.png')
  img11 = loadImage('https://pnwin.github.io/game/images/poke1.gif')
  img12 = loadImage('https://pnwin.github.io/game/images/poke2.gif')
  img13 = loadImage('https://pnwin.github.io/game/images/poke3.gif')
  img14 = loadImage('https://pnwin.github.io/game/images/poke4.gif')
  img15 = loadImage('https://pnwin.github.io/game/images/pika.png')
  img16 = loadImage('https://pnwin.github.io/game/images/start.png')

}

function draw() 
{
  
if(gameState =="begin"){
  background(img16);
  beginGame();
}
  
if(gameState =="L1"){
  background(img2);
  levelOne();
}
if(gameState =="L2"){
    background(img2);
  levelTwo();
}
if(gameState =="L3"){
    background(img7);
  levelThree();
}
  if(gameState =="L4"){
    background(img10);
  levelFour();
}
if(gameState =="Win"){
    background(img8);
  win();
} 
  text(("Score: " + score), width/2, 40);
} // end of draw

function beginGame()

{
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
  noStroke()
 
  fill(150,240,255)
  rect(155,300,300,200)
  fill(0)
  text("click anywhere to begin", width/2, height-210 )
} // end of beginGame

function levelOne(){
  fill(255)
  image(img3, ballx, bally, ballSize, ballSize+90); //pokemon
  rect(205,10,190,70) // score window
  image(img6,200,10, 200, 70) // score png
  rect(205,520,190,70) // level textbox window
  image(img6,200,520, 200, 70) // level textbox png
  fill(0)
  text("Level 1", width/2, height-35); 
  
  var distToBall= dist(ballx+60, bally+60, mouseX, mouseY); //mouse touch ball
  if (distToBall <ballSize/2){
    ballx = random(width); //ball location x
    bally= random(height); //ball location y
    
    
    score= score +1;
    
  }
  if(score>=5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }

  image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
  
} // end level one

function levelTwo(){
  image(img4, ballx+5, bally+1, ballSize, ballSize+6); //pokemon
  fill(255)
  rect(205,10,190,70) // score window
  image(img6,200,10, 200, 70) // score png
  
  rect(205,520,190,70) // level textbox window
  image(img6,200,520, 200, 70) // level textbox png
  fill(0)
  text("Level 2", width/2, height-35);
  var distToBall= dist(ballx+50, bally+50, mouseX, mouseY);
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

  image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
} // end level two

function levelThree(){
  image(img5, ballx, bally, ballSize, ballSize+20); //pokemon 
  fill(255)
  rect(205,10,190,70) // score window
  image(img6,200,10, 200, 70) // score png
   
  rect(205,520,190,70) // level textbox window
  image(img6,200,520, 200, 70) // level textbox png
  fill(0)
  text("Level 3", width/2, height-35);
  var distToBall= dist(ballx+50, bally+40, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>30){
// level 4
   gameState = "L4";
   
 }
  
//  
image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
} // end level three

function levelFour(){
  image(img15, ballx, bally, ballSize, ballSize+5); //pokemon 
  fill(255)
  rect(205,10,190,70) // score window
  image(img6,200,10, 200, 70) // score png
   
  rect(205,520,190,70) // level textbox window
  image(img6,200,520, 200, 70) // level textbox png
  fill(0)
  text("Level 4", width/2, height-35);
  var distToBall= dist(ballx+50, bally+40, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>50){
// level 5
   gameState = "Win";
   
 }
  
//  
image(img, mouseX-25, mouseY-25, 50, 50) //pokeball cursor
} // end level four

function win(){
  text("You've Caught Them All!", width/2, height-20);
} // end win
