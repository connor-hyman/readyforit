var value = 1;

function setup(){
    createCanvas(768,512);
    rectMode(CENTER);
}

function draw() {
    
    if(value == 1){  
    background(122, 0, 216);
        
  noStroke()
  fill(225,50,90);
  ellipse(width/2, height/2, 400, 230);
        
  stroke(0);
  strokeWeight(4);
  fill(225,50,90);
  ellipse(260, height/2, 80, 80);
  ellipse(510, height/2, 80, 80);
        
  fill(0);
  ellipse(260, height/2, 30, 30);
  ellipse(510, height/2, 30, 30);
  
  noStroke();
  fill(225,50,90);
  ellipse(275, height/2, 15, 15);
  ellipse(525, height/2, 15, 15);
        
  fill(0);        
  ellipse(width/2,height/2,80,20);
        
  fill(255);
  ellipse(width/2,(height/2)-4,60,7);
        
  fill(225,50,90);      
  rect(320, (height/2)+90,10,200);
        
  fill(225,50,90);      
  rect(450, (height/2)+90,10,200);
        
  fill(225,50,90);      
  rect(300, (height/2)+200,50,30);
        
  fill(225,50,90);      
  rect(470, (height/2)+200,50,30);
}
    else if(value == 2){
    noStroke()
    background(25, 155, 155);
    
    fill(225,225,0);
    rect(width/2, height/2, 300, 300);
        
    fill(225,225,0);
    rect(width/2, 142, 600, 75);
        
    fill(225,225,0);
    rect(120, 265, 170, 320);
    
    fill(225,225,0);
    rect(195, 355, 60, 60);
        
    fill(225,225,0);
    rect(175, 425, 60, 60);
        
    fill(225,225,0);
    rect(65, 425, 60, 60);
        
    fill(225,225,0);
    rect(650, 265, 170, 320);
        
    fill(225,225,0);
    rect(575, 355, 60, 60);
        
    fill(225,225,0);
    rect(705, 425, 60, 60);
        
    fill(225,225,0);
    rect(595, 425, 60, 60);
        
    fill(225,225,0);
    rect(305, 415, 30, 160);
        
    fill(225,225,0);
    rect(460, 415, 30, 160);
        
    fill(225,225,0);
    rect(460, 480, 90, 30);
        
    fill(225,225,0);
    rect(305, 480, 90, 30);
        
    fill(0);
    rect(384, 190, 271, 60);
        
    fill(0);
    ellipse(324, 220, 90, 60);
        
    fill(0);
    ellipse(444, 220, 90, 60);
        
    fill(225,225,0);
    rect(325, 230, 20, 20);
        
    fill(0);
    rect(325, 226, 12, 12);
        
    fill(225,225,0);
    rect(444, 230, 20, 20);
        
    fill(0);
    rect(444, 226, 12, 12);
        
    fill(0);
    rect(384, 320, 220, 90);
        
    fill(255);
    rect(298, 300, 40, 40);
        
    fill(255);
    rect(342, 300, 40, 40);
        
    fill(255);
    rect(426, 300, 40, 40);
        
    fill(255);
    rect(470, 300, 40, 40);
      
        
    fill(255);
    rect(300, 343, 42, 35);
        
    fill(255);
    rect(342, 343, 35, 35);
        
    fill(255);
    rect(384, 343, 41, 35);
        
    fill(255);
    rect(427, 343, 35, 35);
        
    fill(255);
    rect(470, 343, 42, 35);
    }
    else if (value == 3){
    noStroke()
    background(205, 235, 0);
    
    fill(255,100,0);
    rect(width/2,height/2,200,400,80,80,40,40);
    
    fill(255,100,0);
    ellipse(250,190,300,300);
        
    fill(255,100,0);
    ellipse(510,190,300,300);
        
    fill(255,100,0);
    ellipse(width/2,70,230,230);
        
    fill(0);
    ellipse(520,190,180,180);
        
    fill(0);
    ellipse(250,190,180,180);
        
    fill(0);
    ellipse(width/2,70,130,130);
        
    fill(255,100,0);
    ellipse(520,190,90,90);
        
    fill(255,100,0);
    ellipse(250,190,90,90);
        
    fill(255,100,0);
    ellipse(width/2,70,65,65);
        
    fill(255,100,0);
    ellipse(520,190,90,90);
        
    fill(255,100,0);
    ellipse(250,190,90,90);
        
    fill(255,100,0);
    ellipse(width/2,70,65,65);
        
    fill(255)
    triangle(212,213,287,213,250,145);
    
    
    fill(0)
    triangle(229,182,270,182,250,213);
        
    fill(255)
    triangle(482,165,557,165,520,235);
    
    
    fill(0)
    triangle(502,203,538,203,520,165);
        
    fill(255);
    triangle((width/2)-10,70,(width/2)+10,70,width/2, 37);
        
    fill(255);
    triangle((width/2)-10,70,(width/2)+10,70,width/2, 102);
        
    fill(0);
    ellipse(width/2,70,18,18);
        
    fill(0);
    rect(width/2,320,45,200,0,0,15,15);
        
    fill(255,30,40);
    rect(width/2,360,18,100,15,15,0,0);
        
    fill(255);
    rect(width/2,408,38,15,0,0,40,40);
        
    fill(255);
    rect(width/2,235,38,15);
        
    fill(255,100,0);
    rect(200,405,230,50,20,0,0,0);
        
    fill(255,100,0);
    rect(565,405,230,50,0,20,0,0);
        
    fill(255,100,0);
    rect(110,445,50,80);
        
    fill(255,100,0);
    rect(655,445,50,80);
        
    fill(255,100,0);
    rect(95,475,80,50,20,0,0,0);
        
    fill(255,100,0);
    rect(670,475,80,50,0,20,0,0);
           
    }
    else{
        value = 1;
    }
}
function mousePressed() {
  value = value +1;
}