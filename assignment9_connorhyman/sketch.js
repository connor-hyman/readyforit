
var circ1 = 0;
var circ2 = 0;
var circ3 = 0;
var circ4 = 0;
var speed = 10;
var rectX = 0;
var rectY = 0;
var rectSizeX = 400;
var rectSizeY = 200;
var superFont;

function preload(){
    superFont = loadFont("Changa-ExtraBold.ttf")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    circ2 = circ2 + height;
    rectX = rectX + width/2;
    rectY = rectY + height/2;
    textFont(superFont);
    textSize(80);
}

function draw(){
    background(0);
    display();
    activate();   
}

function display(){
    noStroke();
    fill(252, 189, 10);
    ellipse(40, circ1, 75, 75);
    
    ellipse(40, circ2, 75, 75);
    
    ellipse(width-40, circ1, 75,75);
    
    ellipse(width-40, circ2, 75,75);
    
    fill(252, 189, 10);
    noStroke();
    textAlign(CENTER);
    rectMode(CENTER);
    textSize(80);
    text("SMILE MORE!",width/2,height/2,500,200);
    textSize(20);
    text("(now with custom functions!)",width/2,(height/2)+100,500,200);
    
    noFill();
    stroke(252, 189, 10);
    strokeWeight(20);
    arc(width-140, height/2, 280, 500, 1.6, 4.7);
    arc(140, height/2, 280, 500, 4.8, 1.5);
    
}

function activate (){
    if(circ1 > height || circ1 < 0){
        speed = speed * -1;
    }
    
    circ1 = circ1 + speed;
    circ2 = circ2 - speed;
    
}