
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1, plane, stone1, rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    plane = createSprite(600,620,1200,30);

	engine = Engine.create();
	world = engine.world;

	
	hammer1 = new Hammer(500,500,50,100)
	stone1 = new Stone(400,500,50,50)
	rubber1 = new Rubber(300,500,40,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  hammer1.display();
  stone1.display();
  rubber1.display();
  
  //drawSprites();
 
}



