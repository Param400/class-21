var fixedrect,movingrect,gameObj1,gameObj2,gameObj3,gameObj4;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 80);
  movingrect=createSprite(400,800,80,30);
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
 // gameObj1=createSprite(100,100,50,50)
  //gameObj2=createSprite(200,100,50,50)
 // gameObj4=createSprite(400,100,50,50)
  //fixedrect.debug=true;
  movingrect.debug=true;
}


function draw() {
  background("black");  
 // movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;
  // if(isTouching(movingrect,gameObj2)){
  //   movingrect.shapeColor="green";
  //   gameObj1.shapeColor="green";
  // }else{
  //   movingrect.shapeColor="pink";
  //   gameObj1.shapeColor="pink";
  // }
  bounceoff(movingrect,fixedrect)
  drawSprites();
}
 function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2
    &&obj2.x-obj1.x<=obj1.width/2+obj2.width/2
    &&obj2.y-obj1.y<=obj1.height/2+obj2.height/2
    &&obj1.y-obj2.y<=obj1.height/2+obj2.height/2){
    return true;
  }
  else{
   return false;
  }
 }