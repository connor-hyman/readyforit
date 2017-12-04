var superFont;
var drops = [];
var count = 1;
var img;
var img2;

function preload(){
    img = loadImage("illustration-01.png");
    img2 = loadImage("illustration-02.png");
    superFont = loadFont("VollkornSC-Regular.ttf");
}

function setup() {
    createCanvas(1280, 723);
    textFont(superFont);
    for(var i = 0; i < 500; i++){
        drops[i] = new Rain();
    }
}

function draw(){
    background(255);
    if(count === 1){Start();}
    if(count === 2){Helpless();}
    if(count === 3){Devil();}
    if(count === 4){Pissed();}
    if(count === 5){Inspo();}
    if(count === 6){Process();}
    if(count === 7){Finale();}
}

function Start() {
    background(246, 253, 71);
    
    fill(0);
    noStroke();
    rectMode(CENTER);
    rect(width/2,height/2,250,400,80,80,40,40);
    ellipse(width/2,(height/2)+400,width,800);
    textSize(40);
    textAlign(CENTER);
    text("For a time, I always looked down upon myself, and always felt like I wasn’t doing enough.",width/2,100,800,200);
    
    fill(255);
    ellipse((width/2)-55,height/2,50,50);
    ellipse((width/2)+55,height/2,50,50);
    
    noStroke();
    fill(255); 
    rect(width/2,500,90,100,80,80,40,40);
    rect(width/2,600,100,150,40,40,40,40);
    rect(width/2,660,300,40,40,40,40,40);
    rect((width/2)-130,640,40,80,40,40,40,40);
    rect((width/2)+130,640,40,80,40,40,40,40);
    fill(0);
    ellipse((width/2)-20,500,20,20);
    ellipse((width/2)+20,500,20,20);
    stroke(0);
    fill(255);
    ellipse((width/2)+55,640,50,50);
    ellipse((width/2)-55,640,50,50);
    
    triangle(1100,580,1100,680,1200,630);
    fill(0);
    textSize(25);
    textAlign(CENTER);
    text("CLICK",1142,715,800,200);
}

function Helpless(){
    background(255,100,80);
//      BIGMAN
    fill(0);
    noStroke();
    ellipse((width/2)-640,(height/2)+400,width,800);
        push();
        translate(-130,700);
        rotate(PI*-2.2);
        fill(0);
        ellipse((width/2)+150,100,700,150);
        pop();
    rect((width/2)-410,300,250,400,80,80,40,40);
    fill(255);
    ellipse((width/2)-450,300,50,50);
    ellipse((width/2)-330,300,50,50);
//    littleguy
    fill(0);
    ellipse((width/2)+350,(height/2)-40,40,40);
    ellipse((width/2)+375,(height/2)+20,30,30);
    ellipse((width/2)+325,(height/2)+20,30,30);
    rectMode(CENTER);
    rect((width/2)+350,height/2,40,60,40,40,40,40);
    rect((width/2)+360,(height/2)+40,20,60,40,40,40,40);
    rect((width/2)+340,(height/2)+40,20,60,40,40,40,40);
    rect((width/2)+335,(height/2)+65,30,20,40,40,40,40);
    rect((width/2)+365,(height/2)+65,30,20,40,40,40,40);
    fill(255);
    ellipse((width/2)+335,308,10,10);
    ellipse((width/2)+355,308,10,10);
//    ARMS
    
    fill(0);
    ellipse((width/2)+350,600,300,100);
    for (var i = 0; i < drops.length; i++){
        drops[i].move();
        drops[i].display();
    }
    fill(0);
    ellipse((width/2)+350,100,300,100);
    ellipse((width/2)-140,600,700,150);
    
    fill(255);
    textSize(30);
    textAlign(LEFT);
    text("I felt helpless, and trapped. As if everything I did was useless, futile, and pointless.",(width/2)-300,650,650,200);   
}
    
function Rain() {
    this.x = random(((width/2)+350)-150,((width/2)+350)+150);
    this.y = random(200,400);
    this.display = function() {
        noStroke();
        fill(255);
        rect(this.x,this.y,1,10);
    }
    this.move = function() {
        this.y = this.y + random(-100,100);
    }
}

function Devil(){
    background(40, 34, 139);
    
    fill(0);
    noStroke();
    ellipse((width/2)-250,(height/2)-50,200,200);
    rectMode(CENTER);
    rect((width/2)-250,(height/2)+300,250,500,40,40,80,80);
    fill(255);
    ellipse((width/2)-250,(height/2)-50,50,50);
    ellipse((width/2)-150,(height/2)-50,50,50);
    
    fill(205,55,80);
    rect((width/2)+250,(height/2)-50,200,200,0,0,40,40);
    rect((width/2)+250,(height/2)+310,250,500);
    triangle((width/2)+250,(height/2)-100,(width/2)+270,(height/2)-100,(width/2)+260,(height/2)-300,);
    triangle((width/2)+310,(height/2)-100,(width/2)+330,(height/2)-100,(width/2)+320,(height/2)-300,);
    fill(255);
    ellipse((width/2)+250,(height/2)-70,100,30);
    ellipse((width/2)+130,(height/2)-70,100,30);
    fill(205,55,80);
    ellipse((width/2)+220,(height/2)-70,20,20);
    ellipse((width/2)+110,(height/2)-70,20,20);
    fill(0);
    ellipse((width/2)+220,(height/2)-70,5,10);
    ellipse((width/2)+110,(height/2)-70,5,10);
    ellipse((width/2)+190,(height/2)-30,10,10);
    ellipse((width/2)+170,(height/2)-30,10,10);
    fill(167, 210, 233);
    rect(width/2,height,20,1080);
    
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text("Since I saw myself as so horrid, I isolated myself. I figured nobody else would want to be around me either.",(width/2),120,500,200);
    
}

function Pissed(){
    background(247, 170, 30);
    fill(18, 33, 111)
    rect(320,362,width/2,height);
    noStroke();
    fill(0);
        push();
        rectMode(CENTER);
        rect((width/2)/2,(height/2)+300,250,500,40,40,80,80)
        fill(255);
        textSize(40);
        textAlign(CENTER);
        text("And then...",((width/2)/2),200,500,200);
        fill(18, 33, 111);
        text("...I got pissed.",((width/2)+330),200,500,200);
        pop();
    
    push();
    ellipse((width/2)/2,(height/2)-30,200,200);
    fill(255);
    ellipse(((width/2)/2)-45,(height/2)-10,40,40);
    ellipse(((width/2)/2)+45,(height/2)-10,40,40);
    ellipse((width/2)/2,(height/2)+30,30,30);
    fill(0);
    ellipse(((width/2)/2)-45,(height/2)-20,40,40);
    ellipse(((width/2)/2)+45,(height/2)-20,40,40);
    ellipse((width/2)/2,(height/2)+40,30,30);
    
    fill(18, 33, 111);
    rect((width/2)+325,(height/2)+280,250,500,40,40,80,80)
    ellipse((width/2)+325,(height/2)-60,200,200);
    fill(255);
    triangle(890,300,950,300,890,260);
    triangle(980,300,1040,300,1040,260);
    pop();
}

function Inspo(){
    background(130,30,30);
    imageMode(CENTER);
    image(img, width/2, height/2, 1280, 723);
    fill(244, 233, 44);
    textSize(40);
    textAlign(LEFT);
    text("I wasn't pissed at myself, rather the fact that I felt this way for so long. So I set out to do something about it.",(width/2)+300,500,600,400);
}

function Process(){
    background(195, 232, 29);
    imageMode(CENTER);
    image(img2, (width/2)-50, height/2, 1280, 723);
    fill(0);
    textSize(30);
    textAlign(LEFT);
    text("I started running.",280,300,300,300);
    text("I started making the stuff I wanted to make.",1120,240,300,300);
    text("I forced myself to socialize and talk to people, uncomfortable as it was.",180,522,300,300);
    text("Eventually, I began to see myself for what I really am:",1120,522,300,300);
}

function Finale(){
    background(255, 210, 0);
    push();
    fill(167, 210, 233,190);
    strokeWeight(8);
    stroke(167, 210, 233);
    rect(width/2,height/2,780,680);
    pop();
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("Brilliant.",width/2,220,300,300);
    fill(23,115,226);
    ellipse(width/2,height/2,400,400);
    rect(width/2,770,500,400,80,80,80,80);
    fill(255);
    ellipse((width/2)-80,height/2,60,60);
    ellipse((width/2)+80,height/2,60,60);
    arc(width/2,(height/2)+100,200,150,2*PI,PI);
}

function mousePressed(){
    count++;
    if(count > 7){
        count = 1;
    }
}