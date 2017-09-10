var x;
var i;
var a;
var b;
var c;

function setup() {
  createCanvas(750, 540);
}

function draw() {
    background(182, 14, 156);
    
    for (x = 5; x <= width; x = x+30){
        for(i = 5; i <=height; i+=30){
    noStroke();
    fill(235, 17, 68);
    ellipse(x+10,i+10,30,30);
        }
    }
    
    for(a = 5; a <= width; a +=10 ){
        noStroke();
        fill(12, 159, 148);
        rect(a+5,0,2,height);
    }
    
    for (b = 5;b <= width; b +=85){
        for(c = 5; c <=height; c += 95){
        noFill();
        stroke(222, 249, 18);
        rect(b,c,80,80);
        }
    }
          
}