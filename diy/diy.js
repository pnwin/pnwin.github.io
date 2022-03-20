var img;
var initials ='pn'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;
function preload() {
  img = loadImage('https://pnwin.github.io/diy/images/bigpc.png');
  img2 = loadImage('https://pnwin.github.io/diy/images/Mouse.png');
  img3 = loadImage('https://pnwin.github.io/diy/images/Deskpad.png');
  img4 = loadImage('https://pnwin.github.io/diy/images/Keyboard.png');
  img5 = loadImage('https://pnwin.github.io/diy/images/Monitor.png');
  img6 = loadImage('https://pnwin.github.io/diy/images/Monitorstand.png');
  img7 = loadImage('https://pnwin.github.io/diy/images/Mouse.png');
  img8 = loadImage('https://pnwin.github.io/diy/images/Desk.jpeg');
  img9 =  loadImage('https://pnwin.github.io/diy/images/Smallpc.png');
  img10 = loadImage('https://pnwin.github.io/diy/images/Ultra%20wide.png');
  img11 = loadImage('https://pnwin.github.io/diy/images/Vertical%20monitor.png');
  img12 =  loadImage('https://pnwin.github.io/diy/images/Wireless%20mouse.png')
  img13 =  loadImage('https://pnwin.github.io/diy/images/Towerspeakers.png')
  img14 =  loadImage('https://pnwin.github.io/diy/images/Bar.png')
  img15 = loadImage('https://pnwin.github.io/diy/images/Plant.png')
}

function setup() {
createCanvas(600, 600);  // canvas size
background(143,143,143)
}

var x = 1;
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


  //Core Peripherals
  
    //Desk+Reset Setup
  if (toolChoice == '1' ) {  
    image(img8, 0, 0,600,600);

 
    //Desk Pad
    } else if (toolChoice == '2') {  
    image(img3, mouseX-295, mouseY-290,600,600);  
      
    
   //Keyboard
 } else if (toolChoice == '3' ) {  
    image(img4, mouseX-300, mouseY-300,600,600);
    

    //Mouse
  } else if (toolChoice == '4') {  
    image(img2, mouseX-298, mouseY-290,600,600);}   

    
    //Wireless Mouse
  if (toolChoice == '5' ) {  
    image(img12, mouseX-298, mouseY-290,600,600); }  
 
    
    //Monitor
  if (toolChoice == '6' ) {  
    image(img5, mouseX-300, mouseY-300,600,600); }  

    
    //Vertical Monitor
  if (toolChoice == '7' ) {  
    image(img11, mouseX-300, mouseY-300,600,600); }  

    
    //Ultrawide Monitor
  if (toolChoice == '8' ) {  
    image(img10, mouseX-300, mouseY-270,600,600) }  
 
    
    //Monitor Stand
  if (toolChoice == '9' ) {  
    image(img6, mouseX-295, mouseY-330,600,600);  } 
  
    
    //Big PC
  if (toolChoice == '0' ) {  
    image(img, mouseX-300, mouseY-380,600,600); }  
  
    
    //Small PC
  if (toolChoice == '-' ) {  
    image(img9, mouseX-300, mouseY-340,600,600); } 
  
  //Stereo Speakers
  if (toolChoice == 'o' ) {  
    image(img13, mouseX-295, mouseY-290,600,600); } 
  
  //Bar Speakers
  if (toolChoice == 'i' ) {  
    image(img14, mouseX-295, mouseY-300,600,600); } 
  
   //Plant
  if (toolChoice == 'u' ) {  
    image(img15, mouseX-295, mouseY-300,600,600); } 
  
  
  //Brushes
 
   //Eraser
  noStroke()
  if (toolChoice == 'e' ) { 
    fill(143,143,143)
    ellipse(mouseX,mouseY,20,20)} 
  
  //LED Light Strip
  if (toolChoice == 't' ) { 
   noFill()
    stroke(220,220,255)
    strokeWeight(15)
    drawingContext.shadowBlur=32;
    drawingContext.shadowColor = color(150,220,255);
   line(mouseX,mouseY,mouseX,pmouseY)
    blendMode(BLEND)
  }
  
//Scene Coloring

  //Blue
   if (toolChoice == 'j' ) { 
  fill(150,220,255,50)
  rect(0,0,1000,1000)
      blendMode(BURN) 
}

  //White
   if (toolChoice == 'k' ) { 
  fill(255,255,255,20)
  rect(0,0,1000,1000)
      blendMode(DODGE) 
}
     
     
  //Purple
   if (toolChoice == 'l' ) { 
  fill(180,50,255,20)
  rect(0,0,1000,1000)
      blendMode(BURN) 
}
     
   //Red
   if (toolChoice == 'b' ) { 
  fill(255,0,0,30)
  rect(0,0,1000,1000)
   blendMode(BURN)}
  
       
   //Green
   if (toolChoice == 'b' ) { 
  fill(10,255,100,70)
  rect(0,0,1000,1000)
   blendMode(MULTIPLY) 
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
