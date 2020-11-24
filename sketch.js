var gameState=assault;
var assault;
var submachine;
var shotgun;
var sniper;
var wall1,thickness;
var wall2,wall3,wall4;
var speed,weight;
var medium;
var mini;
var heavy;
var pellet;

function setup() {
  createCanvas(1600,800);

wall1=createSprite(1550,100,10,80)
wall1.shapeColor=color(80,80,80)

wall2=createSprite(1550,300,10,80)
wall2.shapeColor=color(80,80,80)

wall3=createSprite(1550,500,10,80)
wall3.shapeColor=color(80,80,80)

wall4=createSprite(1550,700,10,80)
wall4.shapeColor=color(80,80,80)

medium=createSprite(40,100,50,10)
mini=createSprite(40,300,35,10)
heavy-createSprite(50,500,60,10)
pellet=createSprite(50,700,50,20) 
}

function draw() {
  background(251,255,216);  
  for(var i=200;i<800;i=i+200){
    part=createSprite(800,i,1600,4)
    part.shapeColor=(rgb(6,28,21))
  }  
  if(gameState===assault){
    thickness=random(22,83)
    speed=random(223,321)
    weight=random(32,50)

  }
  if(gameState===submachine){
    thickness=random(22,83)
    speed=random(223,321)
    weight=random(32,50)
  }
  if(gameState===sniper){
    thickness=random(22,83)
    speed=random(223,321)
    weight=random(32,50)
  }
  if(gameState===shotgun){
    thickness=random(22,83)
    speed=random(223,321)
    weight=random(32,50)
  }
  drawSprites();
}