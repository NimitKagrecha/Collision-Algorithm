var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,800);
movingRect=createSprite(400, 200, 80, 50);
movingRect.shapeColor="blue";
movingRect.debug="true";
fixedRect=createSprite(400, 400, 50, 80);
fixedRect.shapeColor="blue";
fixedRect.debug="true";
}

function draw() {
background(0);  
  
movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x <movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y <movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2 ) {
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

drawSprites();
}