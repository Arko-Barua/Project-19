var climber, climberImage;
var rock, rockImage;
var score = 0;
var PLAY, END;
var gameState = PLAY;
var mountain, mountainImage;

function preload(){
climberImage = loadImage("minerImage.png");
rockImage = loadImage("rockImage.png");
mountainImage = loadImage("mountainImage.png");
}

function setup(){
createCanvas(600,600);
mountain = createSprite(310,200);
mountain.addImage(mountainImage);
mountain.scale = 1.3;
mountain.velocityY = 5;
climber = createSprite(300,570,30,30);
climber.addImage(climberImage);
climber.scale = 0.1;
 }
        
function draw(){
background("white");
Obstacles ();
if (keyDown ("up")) {
climber.velocityY = -6; 
}
else if (keyWentUp ("up")) {
climber.velocityY = 0;
}
if (keyDown("down")) {
climber.velocityY = 6;
}
else if (keyWentUp ("down")) {
climber.velocityY = 0;
}
if (keyDown ("left")) {
climber.velocityX = -6;
    }
else if (keyWentUp ("left")) {
climber.velocityX = 0;
}
if (keyDown ("right")) {
climber.velocityX = 6;
 }
else if (keyWentUp ("right")) {
climber.velocityX = 0;
}
if(mountain.y < 0) {
mountain.y = mountain,y/2;
}

drawSprites ();
}

function Obstacles () {
if (frameCount%70 === 0) {
rock = createSprite(600,Math.round(random(20,580)),30,30);
rock.addImage(rockImage);
rock.velocityX = -7;
rock.lifetime = 300;
rock.scale = 0.3;
}
}

