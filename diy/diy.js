var img;
var initials ='pn'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js 2
// you can link to an image on your github account
  img = loadImage('https://pnwin.github.io/diy/images/brush.png');
  img2 = loadImage('https://c.tenor.com/uj4Cnt7RVE0AAAAM/fatdog-dog.gif');
  img3 = loadImage('https://pnwin.github.io/diy/images/litwick.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(255);   // use our background screen color

}

var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function


  //Hotkey 1
  if (toolChoice == '1' ) {  
    stroke(150,220,255);
   
   strokeWeight(5)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Hotkey 2
    noStroke()
    fill(0,0,0,10)
 } else if (toolChoice == '2') {

    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
 strokeWeight(1);
 ellipse(mouseX, mouseY, pmouseX-200, pmouseY-26);

   

//Hotkey 3
 } else if (toolChoice == '3') {

    stroke(300, 100, 0, 80);
   strokeWeight(20)
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
 
//Hotkey 7 Toothbrush"
  } else if (toolChoice == '7') {
 fill(255);
    triangle(mouseX, mouseY, mouseX-20, mouseY-20,pmouseX+20,pmouseY-20);
  
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);

//img1 tool 
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    blendMode(DARKEST)
    image(img, mouseX-50, mouseY-50,50,50);
    
//img2 tool
     } else if (toolChoice == 'h' || toolChoice == 'H') { // h places the image we pre-loaded
    blendMoe(NORMAL)
    image(img2, mouseX, mouseY,200,200);

//img3 tool
     } else if (toolChoice == 'j' || toolChoice == 'J') { // j places the image we pre-loaded
    image(img3, mouseX, mouseY,100,100);
     } 
}

function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
