
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
  car1=loadImage("car1.png")
  car2=loadImage("car2.png")
  car3=loadImage("car3.png")
  car4=loadImage("car4.png")
  car5=loadImage("car5.png")
  bluebird=loadImage("bluebird.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,height,800,20);
   

   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

    ground.display();
    
   spawncars()
  drawSprites();
 
}
function spawncars(){
  if(frameCount%100==0){
    var car=createSprite(50,height-30,30,30)
    var rand=Math.round(random(1,5))
    switch(rand){
      case 1:
        car.addImage(car1)
        car.scale=0.5
        break;
        case 2:
        car.addImage(car2)
        car.scale=0.05
        break;
        case 3:
        car.addImage(car3)
        car.scale=0.05
        break;
        case 4:
        car.addImage(car4)
        car.scale=0.05
        break;
        case 5:
        car.addImage(car5)
        car.scale=0.5
        break;
    }
    car.velocityX=4
    car.lifetime=800
   
  }
}
/*function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed()
{
if (keyCode==32){
    sling.attach(stone.body)
}
}*/


