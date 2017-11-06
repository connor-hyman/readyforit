var counter = 0;
var opac = 100;

function setup(){
    createCanvas(1000,700);
    rectMode(CENTER);
}

function draw(){
    
    noStroke();
    background(0);
    
    var dilate = map(mouseX,0,width,150,30, true); 
    var dilate2 = map(mouseX,0,width,0,70, true);
    
    push();
        fill(10,40,160);
        stroke(0);
        strokeWeight(10);
        ellipse(width/2,height/2,750,450);
        translate(0,0);
        rotate(radians(counter));
        fill(255);
        ellipse(width/2,475,200,100);
        line((width/2)-70,435,(width/2)-70,520);
        line((width/2)-25,435,(width/2)-25,520);
        line((width/2)+70,435,(width/2)+70,520);
        line((width/2)+25,435,(width/2)+25,520);
    pop();
    
    
        counter += 50;
    
    
    opac = map(mouseX,0,width,255,0);
    fill(0,opac);
    rectMode(CENTER);
    rect(width/2,height/2,1000,700);
    
    
    fill(255);
    noStroke();
    ellipse((width/2)-250,height/2,400,175);
    ellipse((width/2)+250,height/2,400,175);
    
    fill(180,50,10);
    noStroke();
    ellipse((width/2)-250,height/2,160,160);
    ellipse((width/2)+250,height/2,160,160);
    
    fill(0);
    noStroke();
    ellipse((width/2)-250,height/2,dilate,dilate);
    ellipse((width/2)+250,height/2,dilate,dilate);
    
    fill(255);
    noStroke();
    ellipse((width/2)+270,(height/2)-50,dilate2,dilate2);
    ellipse((width/2)-270,(height/2)-50,dilate2,dilate2);
    
    stroke(255);
    strokeWeight(7);
    line(200,100,800,100);
    line(720,60,800,100);
}