// player sprite
var player;
//bg sprite
var bg1;
var bg2;
var bgs;
// collection of hazards per lane 1,2,3
var hazard1;
// lane 1,3
var hazard2;
//universal gravity/other attributes
var GRAVITY = 1;
var DANGER = 7.5; 
// non-hazardous objects the player interacts with
var leftSide;
var platform;
var platform2;
var platform3;
//  460,
var enemyHeights = [507,  607];
var enemyHeights2 = [407 ,507, 607];
//game over/on parameter
var gameOver = false;
//control over how often enemies spawn/track time since last spawn
var spawnDelay = 1300;
var spawnDelay1 = 3000;
var spawnTime;
//switch lane parameter
var hop = 100;
var canHopDown = true;
var canHopUp = true;
//score counters
var ending = 0;
var score = 0;

function setup() {
  createCanvas(1080,720);
    var back1 = loadImage("assets/brakefastbackground_blur_01.png");
    var back2 = loadImage("assets/brakefastbackground_blur_02.png");
    bg1 = createSprite(width/2,height/2);
    bg1.addImage(back1);
    bg2 = createSprite(1630,height/2);
    bg2.addImage(back2);
    bgs = new Group();
    platform = createSprite(540, 780, 1080, 130);
    platform.shapeColor = color(22,150,87,0);
    platform.setCollider("rectangle",0,0,1080,130);
    platform2 = createSprite(540, 660, 1080, 100);
    platform2.shapeColor = color(150,46,60,0);
    platform2.setCollider("rectangle",0,0,1080,100);
    platform3 = createSprite(540, 550, 1080, 100);
    platform3.shapeColor = color(18,70,150,0);
    platform3.setCollider("rectangle",0,0,1080,100);
    player = createSprite(135,200);
    var playMove = player.addAnimation("run","assets/Julien_Frame_001.png", "assets/Julien_Frame_007.png");
    hazard1 = new Group();
    hazard2 = new Group();
    hazard3 = new Group();
    leftSide = createSprite(0, height/2, 10, height);
    leftSide.shapeColor = color(22,150,87,0);
    spawnTime = millis();
    player.setCollider("rectangle",65,70,800,800);
    player.scale = 0.125;
    
}

function draw() {
  background(130,40,255);
    bg1.velocity.x = -DANGER;
    bg2.velocity.x = -DANGER;
    if(bg1.position.x < -540){
        bg1.position.x = 1630;
    }
    if(bg2.position.x < -540){
        bg2.position.x = 1630;
    }
    
    fill(22,150,87,0);
    noStroke();
    rect(0,(height/2)+30,1080,100);
    
    if(gameOver){
        background(0,0,0);
        rect(width,height);
        fill(255);
        textAlign(CENTER);
        textSize(32)
		text("WIPE OUT", width/2, (height/2)-80);
        text("Your score: " + endingScore, width/2, (height/2)+80);
        text("Command + R to try again?", width/2, (height/2)+120);
    } else {
        player.debug = true;
        DANGER = 7.5
        
    player.velocity.x = 0;
    player.velocity.y += GRAVITY;
    
    if(player.collide(platform3)){
        player.velocity.y = 0
        canJump = true;
        canHopUp = false;
        canHopDown = true;
        //change animation here once complete
    }
        
        
    if(player.collide(platform2)){
        player.velocity.y = 0
        canJump = true;
        canHopUp = true;
        canHopDown = true;
    }
        
    if(player.collide(platform)){
        player.velocity.y = 0
        canJump = true;
        canHopUp = true;
        canHopDown = false;
    }
        
    if(keyWentDown("w")){
        if(canHopUp){
        player.position.y += -hop;
        canJump = false;
        }
    }
        
    if(keyWentDown("s")){
        if(canHopDown){
        player.position.y += hop;
        canJump = false;
        }
    }
        
//    Enemy spawns    
    if(millis() > spawnTime + spawnDelay1){
        var booth = loadImage("assets/Phone.png");
        var newGuy = createSprite(width, 390, 500,500);
        newGuy.setCollider("rectangle",0,-20,200,380);
        newGuy.addImage(booth);
        newGuy.scale = 0.4;
        newGuy.debug = true;
        newGuy.velocity.x = -DANGER;
        hazard1.add(newGuy);
            var newerGuy = createSprite(width, random(enemyHeights), 500,500);
            var biking = loadAnimation("assets/Biker_001.png", "assets/Biker_004.png");
            newerGuy.setCollider("rectangle",-45,60,200,200);
            newerGuy.scale = 0.43;
            newerGuy.addAnimation("cycle", biking);
            newerGuy.debug = true;
            newerGuy.velocity.x = -(DANGER+8.5);
            hazard2.add(newerGuy);
                var newestGuy = createSprite(width, random(enemyHeights2), 500,500);
                var biking = loadAnimation("assets/Pidgeon_001.png", "assets/Pidgeon_009.png");
                newestGuy.setCollider("rectangle",0,30,300,200);
                newestGuy.scale = 0.25;
                newestGuy.addAnimation("cycle", biking);
                newestGuy.debug = true;
                newestGuy.velocity.x = -(DANGER+5);
                hazard3.add(newestGuy);
        spawnTime = millis(); 
    }
        

    player.overlap(hazard1, hitObstacle);
    player.overlap(hazard2, hitObstacle);
    player.overlap(hazard3, hitObstacle);

    leftSide.overlap(hazard1, deleteObstacle);
    leftSide.overlap(hazard2, deleteObstacle);
    leftSide.overlap(hazard3, deleteObstacle);
    
    if(millis() > 30000){
        DANGER = 12;
        
    }
        
    if(millis() > 60000){
        DANGER = 15;
    }
        
    if(millis() > 120000){
        DANGER = 23;
    }
  
  drawSprites();
    
    score = millis()/10;
    endingScore = int(score);
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("Press S to move down, Press W to move up. Good Luck!", width/2, 120);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Press S to move down, Press W to move up. Good Luck!", (width/2)-2, 118);
    fill(0);
    textAlign(LEFT);
    textSize(30);
    text("Score: " + endingScore, 20, 40);
    fill(255);
    textAlign(LEFT);
    textSize(30);
    text("Score: " + endingScore, 18, 38);
    }
}

function hitObstacle(collider1, collider2) {
	// game over!
	gameOver = true;
}

function deleteObstacle(col1, col2) {
	col2.remove();
}

function mousePressed() {
    gameOver = false;
}
