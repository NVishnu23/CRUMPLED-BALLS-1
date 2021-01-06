const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Log1;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(width/2, height-35, width,10);
	ground.shapeColor = color("yellow");

	log1 = new Log(550,610,13,70);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  log1.display();
  


  drawSprites();
 
}



