let eyeHeight = 50;
let counter = 0;
let eyesClosed = false;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
  noStroke();
}

function draw() {
  background(150,220,255);

  translate(60,10)
  // Blue Shadow
  //Back Hair
  fill(130,200,235);
  arc(360, 280, 200, 250, 180, 0);
    stroke(200,150,20)

  //back hair shape
  noStroke()
  fill(130,200,235)
  arc(305,230,100,100,150,330)  //1
  arc(310,207,100,105,150,330)  //2
  arc(335,195,120,100,150,330)  //3
  arc(385,195,120,100,210,40)   //4
  arc(410,220,100,100,210,40)   //5
  arc(410,245,100,100,210,40)   //6

    rectMode(CENTER); //greyshirt
  fill(130,200,235);  //shirtfill
  rect(360, 515, 205, 200, 20); //shirtelements
  ellipse(400, 452, 15, 15);
  ellipse(320, 452, 15, 15);
  rect(400, 480, 8, 65, 200);
  rect(320, 480, 8, 65, 300);
     ellipse(191,525,70,200)
    ellipse(446,518,70,200)
  
  fill(130,200,235)
  stroke(130,200,235)
  strokeJoin(ROUND)
  rect(360,510,60,200)
  noStroke()

  
   //Ears
  fill(130,200,235)
  arc(270, 288, 0, 60, 0,280);
  ellipse(450, 288, 40, 60); 
    //ear shade
      fill(130,200,235); 
      arc(270, 285, 40, 40, 0,280);
      
  
  //neck
   fill(130,200,235); //neckcolor
  rect(360, 400, 50, 55, 20); //neck shape
  fill(130,200,235); //neck shade
  rect(360, 380, 55, 55, 20); //neck shade shape

  
  //Face 
  noStroke(0)
  fill(130,200,235);
  ellipse(360, 280, 200, 220);  

  //Background Lighting
noStroke()
  fill(255,255,255,50)
ellipse(20,20,600,600)
    fill(255,255,255,50)



  
  //Meeeeeeeeeee
  //back hair shape
  noStroke()
  fill(150,96,0)
  arc(205,210,100,100,150,330)  //1
  arc(210,187,100,105,150,330)  //2
  arc(235,175,120,100,150,330)  //3
  arc(285,175,120,100,210,40)   //4
  arc(310,190,100,100,210,40)   //5
  arc(315,210,100,100,210,40)   //6

//body
  stroke(150,150,150)
  strokeJoin(ROUND)
  fill(150,150,150)
  rect(260,500,150,200) //body
    //Arms
    ellipse(184,500,70,200)
    ellipse(335,500,70,200)
 
 
  //Body Shading
  noStroke()
    fill(140,140,140)
  rect(260,500,150,150)
   ellipse(191,525,70,200)
    ellipse(328,524,70,200)
    //Arm Lines
  strokeJoin(ROUND)
    fill(0,0,0,50)
    ellipse(190,555,4,200)
    ellipse(330,555,4,200)
      //Shirt Wrikles
        //Left Wrinkles
        noStroke()
        fill(0,0,0,20)
        beginShape()
        vertex(170,600)
        vertex(180,480)
        vertex(190,450)
        vertex(200,480)
        vertex(210,600)
        vertex(190,600)
        endShape()
          //Right Wrinkles
          noStroke()
          fill(0,0,0,20)
          beginShape()
          vertex(350,600)
          vertex(340,480)
          vertex(330,450)
          vertex(320,480)
          vertex(310,600)
          vertex(330,600)
          endShape()
  
  //Necklace
  fill(190,190,190)
  ellipse(260,400,56,50)
   fill(255)
  ellipse(260,400,56,45)
  fill(155,155,155)
  ellipse(260,400,49,40) 
  fill(130,130,130)
  ellipse(260,400,49,25)
  
  

  
   //Ears
  fill(247, 228, 212)
  arc(168, 268, 40, 60, 0,280);
  ellipse(352, 268, 40, 60); 
    //ear shade
      fill(255, 0, 0, 25); 
      arc(173, 265, 40, 40, 0,280);
      ellipse(347, 265, 40, 40);
  
  //neck
   fill(247, 228, 212); //neckcolor
  rect(260, 380, 50, 55, 20); //neck shape
  fill(255,150,150,50); //neck shade
  rect(260, 350, 55, 55, 20); //neck shade shape

  
  //Face 
  noStroke(0)
  fill(247, 228, 212);
  ellipse(260, 260, 195, 220);
  
 //Brows
 noStroke
      //brows weight
      fill(10,0,0,200)
      arc(235, 230, 90, 10, 180,315);
      arc(285, 230, 90, 10, 220,0);
      //brows shading
       fill(40,0,0,20)
      arc(235, 235, 90, 15, 180,315);
      arc(285, 235, 90, 15, 220,0);
  
 
  //Eye blinking animation
  counter = counter + deltaTime;

  if (eyesClosed && counter > 200) {
   
    eyeHeight = 50;
    eyesClosed = false;

    counter = 0;

  } else if (counter > 2000) {

    eyeHeight = 2;
    eyesClosed = true;

    counter = 0;
  }

  
  // left eye
  fill(0);
  arc(213,275,30,eyeHeight,180,0);


  // right eye
  fill(0);
  arc(308, 275,30,eyeHeight,180,0);

  //nose
  fill(255,0,0,25)
  arc(260, 305, 20, 10, 0, 180); //boop
  fill(255,255,255,100)
  ellipse(255,297,10,10)

  //Eye Glares
  fill(255);
  ellipse(309,258,10,10);
  ellipse(214,258,10,10);
  ellipse(300,270,5,5);  //right glare
  ellipse(204,270,5,5); //left glare
  
  //Mouth
  fill(255,0,0,60)
  arc(260, 325, 55, 55, 0, 180);
  //Teeth
  fill(255);
  strokeWeight(2);
  arc(260, 325, 50, 15, 0, 180);

  
//Glasses
  stroke(150,150,150,255)
  fill(255,255,255,120);
  //rightlens
  arc(310,260,70,85, 0, 180); 
  stroke(0,0,0,255)
  arc(310,260,70,50, 180, 0);
  fill(255,255,255,120);
  stroke(150,150,150,255)
  //leftlens
  arc(210,260,70,85, 0, 180); 
  stroke(0,0,0,255)
  arc(210,260,70,50, 180, 0)
    noStroke()
     //Lens Glares
      fill(255)
      ellipse(330,250,15,10)
      ellipse(230,250,15,10)
      //Nose Bridge Frames
      fill(0)
      rect(260,253,32,2);

  //Front Hairline
  fill(150,96,0)
rect(260,170,158,20);
  rect(260,150,85,20);

  fill(150,96,0,90)
  arc(180,210,40,100,120,285) //left fade
  arc(341,210,40,100,250,60) //right fade
  fill(30,0,0,30)
  arc(226,180,62,30,180,0); //left part
  arc(226,180,62,15,180,0); //left part2
  arc(290,180,65,30,180,0); //right part
  arc(290,180,65,15,180,0); //right part2
  
   

  
//Baby Hairs
  fill(150,96,0,255);
 stroke(150, 96, 0,200);
  strokeWeight(4);
    //Right Strands
    arc(301, 200, 10, 80, 260,60); //strand1
    strokeWeight(4)
    arc(340, 215, 10, 100, 265,70); //strand2
    strokeWeight(3)
    arc(325, 200, 15, 90, 265,60); //strand3
    strokeWeight(4)
    arc(320, 208, 15, 80, 265,60); //strand4
    strokeWeight(2)
    arc(310, 205, 10, 100, 265,70); //strand5
    //Left Strands
    strokeWeight(2) 
    arc(190, 190, 10, 80, 90,300); //strand1
    strokeWeight(1)
    arc(183, 194, 7, 80, 90,300); //strand2
 
  //Earrings
  fill(255)
  stroke(150,150,150)
  strokeWeight(1)
  ellipse(159,292,8,8) //Left Earring
  ellipse(360,292,8,8)
  
//Foreground Glare
  fill(255)
  noStroke()
  ellipse(-20,20,50,30)
}
