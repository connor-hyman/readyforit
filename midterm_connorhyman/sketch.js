var mappy = {
    x: 0,
    y: 350,
    size: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};
var liftoff = 350;
var opac = 0;
var speed = 10;

var button1 = {
    x:0,
    y:580,
    size:100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

var launch1 = 630;
var opac1 = 0;
var speed1 = 10;

var button2 = {
    x:0,
    y:580,
    size:100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

var launch2 = 630;
var opac2 = 0;
var speed2 = 14;

var button3 = {
    x:0,
    y:580,
    size:100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

var launch3 = 630;
var opac3 = 0;
var speed3 = 7;

var button4 = {
    x:0,
    y:580,
    size:100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

var launch4 = 630;
var opac4 = 0;
var speed4 = 12;

var button5 = {
    x:0,
    y:580,
    size:100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

var launch5 = 630;
var opac5 = 0;
var speed5 = 8.5;

var bass;
var guitar;
var snare;
var tamb;
var ding;

function preload(){
    bass = loadSound("bass.wav");
    guitar = loadSound("guitar.mp3");
    snare = loadSound("Snare.mp3");
    tamb = loadSound("Tamborine.mp3");
    ding = loadSound("FX.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    
    
    button1.x = (width/2)-220;
    button2.x = (width/2)-110;
    button3.x = (width/2);
    button4.x = (width/2)+110;
    button5.x = (width/2)+220;
    
    mappy.x = width/2
    mappy.top = mappy.y;
    mappy.bottom = mappy.y + mappy.size;
    mappy.left = mappy.x;
    mappy.right = mappy.x + mappy.size;
    
    
//    background/preemptive code
    background(255, 173, 0);
    
    noStroke();
    fill(40);
    rectMode(CENTER);
    rect(width/2,height/2,660,700);
    
    stroke(150);
    strokeWeight(5);
    line((width/2)-220, 0, (width/2)-220, height-100);
    line((width/2)-110, 0, (width/2)-110, height-100);
    line((width/2)-0, 0, (width/2)-0, height-100);
    line((width/2)+110, 0, (width/2)+110, height-100);
    line((width/2)+220, 0, (width/2)+220, height-100);
    
    noStroke();
    fill(180);
    rect(width/2,(height)-70,590,120,20,20,20,20)
    
    //    button animations
    noStroke();
    opac1 = map(launch1,0,255,-200,630);
    fill(0,250,100,opac1);
    ellipse(button1.x,launch1,button1.size,button1.size);
    if(launch1 > 20){
        launch1 = launch1 - speed1;
    }
    
    opac2 = map(launch2,0,255,-200,630);
    fill(240,80,80,opac2);
    ellipse(button2.x,launch2,button2.size,button2.size);
    if(launch2 > 20){
        launch2 = launch2 - speed2;
    }
    
    opac3 = map(launch3,0,255,-200,630);
    fill(253, 245, 45,opac3);
    ellipse(button3.x,launch3,button3.size,button3.size);
    if(launch3 > 20){
        launch3 = launch3 - speed3;
    }
    
    opac4 = map(launch4,0,255,-200,630);
    fill(70, 130, 215,opac4);
    ellipse(button4.x,launch4,button4.size,button4.size);
    if(launch4 > 20){
        launch4 = launch4 - speed4;
    }
    
    opac5 = map(launch5,0,255,-200,630);
    fill(253, 185, 30,opac5);
    ellipse(button5.x,launch5,button5.size,button5.size);
    if(launch5 > 20){
        launch5 = launch5 - speed5;
    }
  
//    forefront
    
    stroke(210);
    strokeWeight(5);
    fill(0,220,40);
    ellipse((width/2)-220,630,100,100);
    fill(220,40,40);
    ellipse((width/2)-110,630,100,100);
    fill(253, 215, 45);
    ellipse(width/2,630,100,100);
    fill(20, 80, 215);
    ellipse((width/2)+110,630,100,100);
    fill(253, 115, 30);
    ellipse((width/2)+220,630,100,100);
    
    noFill();
    noStroke();
    rect((width/2)-275,630,100,100);
    rect((width/2)-140,630,100,100);
    rect((width/2),630,100,100);
    rect((width/2)+140,630,100,100);
    rect((width/2)+275,630,100,100);
    
//    button animations
    noStroke();
    opac1 = map(launch1,0,255,-200,630);
    fill(0,250,100,opac1);
    ellipse(button1.x,launch1,button1.size,button1.size);
    if(launch1 > 20){
        launch1 = launch1 - speed1;
    }
    
    opac2 = map(launch2,0,255,-200,630);
    fill(240,80,80,opac2);
    ellipse(button2.x,launch2,button2.size,button2.size);
    if(launch2 > 20){
        launch2 = launch2 - speed2;
    }
    
    opac3 = map(launch3,0,255,-200,630);
    fill(253, 245, 45,opac3);
    ellipse(button3.x,launch3,button3.size,button3.size);
    if(launch3 > 20){
        launch3 = launch3 - speed3;
    }
    
    opac4 = map(launch4,0,255,-200,630);
    fill(70, 130, 215,opac4);
    ellipse(button4.x,launch4,button4.size,button4.size);
    if(launch4 > 20){
        launch4 = launch4 - speed4;
    }
    
    opac5 = map(launch5,0,255,-200,630);
    fill(253, 185, 30,opac5);
    ellipse(button5.x,launch5,button5.size,button5.size);
    if(launch5 > 20){
        launch5 = launch5 - speed5;
    }
    
    
textSize(120);
textAlign(CENTER,CENTER);
fill(40);
rotate(PI/2);
text("SHRED!", 300, -180);
    
    
}

function mousePressed(){
    
    button1.x = (width/2) - 270;
    button1.top = button1.y;
    button1.bottom = button1.y + button1.size;
    button1.left = button1.x;
    button1.right = button1.x + button1.size;
    
    if(mouseX < button1.right && mouseX > button1.left && mouseY > button1.top && mouseY < button1.bottom){
        launch1 = 630;
        opac1 = 255;
        bass.play();
        }
    
    button2.x = (width/2) - 155;
    button2.top = button2.y;
    button2.bottom = button2.y + button2.size;
    button2.left = button2.x;
    button2.right = button2.x + button2.size;
    
    if(mouseX < button2.right && mouseX > button2.left && mouseY > button2.top && mouseY < button2.bottom){
        launch2 = 630;
        opac2 = 255;
        guitar.play()
        }
    
    button3.x = (width/2) -55;
    button3.top = button3.y;
    button3.bottom = button3.y + button3.size;
    button3.left = button3.x;
    button3.right = button3.x + button3.size;
    
    if(mouseX < button3.right && mouseX > button3.left && mouseY > button3.top && mouseY < button3.bottom){
        launch3 = 630;
        opac3 = 255;
        snare.play();
        }
    
    button4.x = (width/2) +60;
    button4.top = button4.y;
    button4.bottom = button4.y + button4.size;
    button4.left = button4.x;
    button4.right = button4.x + button4.size;
    
    if(mouseX < button4.right && mouseX > button4.left && mouseY > button4.top && mouseY < button4.bottom){
        launch4 = 630;
        opac4 = 255;
        tamb.play();
        }
    
    button5.x = (width/2) +170;
    button5.top = button5.y;
    button5.bottom = button5.y + button5.size;
    button5.left = button5.x;
    button5.right = button5.x + button5.size;
    
    if(mouseX < button5.right && mouseX > button5.left && mouseY > button5.top && mouseY < button5.bottom){
        launch5 = 630;
        opac5 = 255;
        ding.play();
        }
    
    
}