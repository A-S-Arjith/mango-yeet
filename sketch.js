
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,70,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1000,200,30);
	mango6=new mango(1200,150,30);

	stoneObj=new stone(240,420,20)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingShot=new SlingShot(stoneObj.body,{x:240,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingShot.display();

  groundObject.display();
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
}
function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function returns(){
	if(keyCode === 32){
	Matter.Body.setPosition(stoneObj.body,{x:240,y:420})
	launcherObject.attach(stoneObj.body);
	slingShot.attach();
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango,false);
	}
}