
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2,

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
        ground =new Ground(width/2,670,width,20);
  right = new Ground(600,1100,20,120);
  left = new Ground(1100,600,20,120);
	
	  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
	
ground.show();
left.show();
right.show();
  
  drawSprites();
}
}

function keyPressed(){
	
if (keyCode===UP_ARROW	){
	 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.5});
}
}

