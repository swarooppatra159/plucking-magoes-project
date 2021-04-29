const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render = Matter.Render;
var ground;
var stone;
var boy;
var launchingForce=100;
function preload(){
  boy=loadImage("images/boy.png");
  tree=loadImage("images/tree.png");
  }
function setup() {
	createCanvas(1300, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,680,1300,25);
	stone = new Stone(270,530,25,25);
	//tree = new Tree(1000,500,300,400);
	mango1= new Mango(900,400,25);
	mango2= new Mango(950,400,25);
	mango3= new Mango(960,350,25);
	mango4= new Mango(1000,450,25);
	mango5= new Mango(1000,500,25);
	mango6= new Mango(900,500,25);
	mango7= new Mango(930,450,25);
	mango8= new Mango(1000,500,25);
	mango9= new Mango(1100,450,25);
	mango10= new Mango(1110,500,25);
	mango11= new Mango(1140,450,25);
	mango12= new Mango(1030,400,25);
	mango13= new Mango(1000,350,25);
	launcher=new Launcher(stone.body,{x:270,y:525})
	
		
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  
  //Engine.update(engine);

  image(boy, 212,450,250,300);
  image(tree ,850,300,300,400);
  ground.display();
  stone.display();
  // tree.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   mango12.display();
   mango13.display();
   launcher.display();
   detectollision(stone,mango1);
   detectollision(stone,mango2);
   detectollision(stone,mango3);
   detectollision(stone,mango4);
   detectollision(stone,mango5);
   detectollision(stone,mango6);
   detectollision(stone,mango7);
   detectollision(stone,mango8);
   detectollision(stone,mango9);
   detectollision(stone,mango10);
   detectollision(stone,mango11);
   detectollision(stone,mango12);


}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
   
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:240, y:525}) 
	  launcher.attach(stone.body);
	}
  }
  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


