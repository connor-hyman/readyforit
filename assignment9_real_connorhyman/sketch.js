var order = ["Normal","Water","Fire","Electric"];

var red1 = [246,108,255,146];
var green1 = [158,192,54,205];
var blue1 = [153,224,28,41];

var red2 = [228,30,216,220];
var green2 = [95,157,25,114];
var blue2 = [88,205,0,9];

var tick = 0;

function setup(){
    createCanvas(1080, 720);
}

function draw (){
    background(255, 202, 40);
    
    fill(0);
    textSize(30);
    text("Click on Kirby to change his color!",317,100);
    
    fill(red1[tick],green1[tick],blue1[tick]);
    textSize(38);
    textAlign(RIGHT);
    text(order[tick],770,180);
    
    noStroke();
    textAlign(LEFT);
    
//    feet    
    
    fill(red2[tick], green2[tick], blue2[tick]);
    ellipse(420,490,180,90);
    ellipse(650,490,180,90);
    
//    body
    
    fill(red1[tick], green1[tick], blue1[tick]);
    ellipse(width/2,height/2,300,300);
    ellipse(390,height/2,140,100);
    ellipse(690,height/2,140,100);
    
//    eyes
    
    fill(0);
    ellipse(500,310,40,95);
    ellipse(580,310,40,95);
    
    fill(255);
    ellipse(500,290,20,40);
    ellipse(580,290,20,40);
    
    fill(40,40,200);
    ellipse(500,340,20,30);
    ellipse(580,340,20,30);
    
//    mouth
    
    fill(111, 32, 28);
    rectMode(CENTER);
    rect(width/2,405,70,40,5,5,80,80);
    
    fill(228, 95, 88);
    rect(width/2,411,60,20,5,5,80,80);
    
//    cheeks
    
    fill(red2[tick], green2[tick], blue2[tick]);
    ellipse(455,370,50,35);
    ellipse(625,370,50,35);
    
}

function mousePressed() {
    
    tick = tick + 1;
    
    if(tick == order.length){
        tick = 0;
    }
}

