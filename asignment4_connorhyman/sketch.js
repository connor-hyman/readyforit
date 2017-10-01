var circX;
var circY;
var circDiameter = 540;
var circRadius = circDiameter/2;
var d;
var Rvalue = 40;
var Gvalue = 130;
var Bvalue = 220;
var img;
var img2;
var mightyFont;

function preload(){
    img = loadImage("mightymorphin.jpg");
    img2 = loadImage("megazord.jpg");
    mightyFont = loadFont("BowlbyOneSC-Regular.ttf")
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
    circX = width/2;
    circY = height/2;
    textFont(mightyFont);
    textSize(40);
}

function draw(){
    background(Rvalue, Gvalue, Bvalue);
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    
//    megazord
    if(d < circRadius){
        Rvalue = 207;
        Gvalue = 165;
        Bvalue = 10;
        imageMode(CENTER);
        image(img2, width/2, height/2, 679, 844);
        fill(244, 201, 42);
        text("MEGAZORD!!!",332,150,300,200);
        
//      zords
   }else{
       Rvalue = 40;
       Gvalue = 130;
       Bvalue = 220;
       imageMode(CENTER);
       image(img, width/2, height/2, 785, 546);
       fill(255);
       text("Alright guys, let's bring it together...",30,750,900,150);
    }
    
}
