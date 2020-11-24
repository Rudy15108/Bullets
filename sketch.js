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
var object1,object2;

function setup() {
  createCanvas(1600,800);
var thickness=random(22,83)
wall1=createSprite(1550,100,thickness,80)
wall1.shapeColor=color(80,80,80)

var thickness=random(22,83)
wall2=createSprite(1550,300,thickness,80)
wall2.shapeColor=color(80,80,80)

var thickness=random(22,83)
wall3=createSprite(1550,500,thickness,80)
wall3.shapeColor=color(80,80,80)

var thickness=random(22,83)
wall4=createSprite(1550,700,thickness,80)
wall4.shapeColor=color(80,80,80)

medium=createSprite(40,100,50,10)
medium.shapeColor=color(255,81,81)

mini=createSprite(40,300,35,10)
mini.shapeColor=color(255,81,81)

heavy=createSprite(50,500,60,10)
heavy.shapeColor=color(255,81,81)

pellet=createSprite(50,700,50,20) 
pellet.shapeColor=color(255,81,81)
}

function draw() {
  background(251,255,216);  
  for(var i=200;i<800;i=i+200){
    part=createSprite(800,i,1600,4)
    part.shapeColor=(rgb(6,28,21))
  }  
  if(gameState===assault){
    speed=random(32,50)
    weight=random(223,321)
    
    medium.velocityX=speed;

    if(isTouching(medium,wall1)){
      medium.velocityX=0

      var damage=0.5*speed*weight*weight/
      (wall1.width*wall1.width*wall1.width)

      if(damage>10){
        wall1.shapeColor=color(255,0,0)
      }

      if(damage<10){
        wall1.shapeColor=color(0,255,0)
      }
    }

    gameState=submachine
  }
  if(gameState===submachine){
    speed=random(32,50)
    weight=random(223,321)

    mini.velocityX=speed;

    if(isTouching(mini,wall2)){
      mini.velocityX=0

      var damage=0.5*speed*weight*weight/
      (wall2.width*wall2.width*wall2.width)

      if(damage>10){
        wall2.shapeColor=color(255,0,0)
      }

      if(damage<10){
        wall2.shapeColor=color(0,255,0)
      }
    }
    gameState=sniper;
  }
  if(gameState===sniper){
    speed=random(32,50)
    weight=random(223,321)

    heavy.velocityX=speed;

    if(isTouching(heavy,wall3)){
      heavy.velocityX=0

      var damage=0.5*speed*weight*weight/
      (wall3.width*wall3.width*wall3.width)

      if(damage>10){
        wall3.shapeColor=color(255,0,0)
      }

      if(damage<10){
        wall3.shapeColor=color(0,255,0)
      }
    }
    gameState=shotgun
  }
  if(gameState===shotgun){
    speed=random(32,50)
    weight=random(223,321)

    pellet.velocityX=speed;

    if(isTouching(pellet,wall4)){
      pellet.velocityX=0

      var damage=0.5*speed*weight*weight/
      (wall4.width*wall4.width*wall4.width)

      if(damage>10){
        wall4.shapeColor=color(255,0,0)
      }

      if(damage<10){
        wall4.shapeColor=color(0,255,0)
      }
    }
  }
  drawSprites();
}

function isTouching(object1,object2){ 
  object1RightEdge=object1.x+object1.width;
    object2LeftEdge=object2.x
  if (object1RightEdge>=object2LeftEdge) {    
    return true; 
  }
    return false;
  }