
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,100);
	bob2 = new Bob(600,500,100);
	bob3 = new Bob(800,500,100);
	bob4 = new Bob(1000,500,100);
	bob5 = new Bob(1200,500,100);
	
	roof1 = new Ground(400,25,1600,50);
	roof2 = new Ground(600,25,1600,50);
	roof3 = new Ground(800,25,1900,50);
	roof4 = new Ground(1000,25,1600,50);
	roof5 = new Ground(1200,25,1600,50);

	rope1 = new Rope(roof1.body,bob1.body);
	rope2 = new Rope(roof2.body,bob2.body);
	rope3 = new Rope(roof3.body,bob3.body);
	rope4 = new Rope(roof4.body,bob4.body);
	rope5 = new Rope(roof5.body,bob5.body);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-9,y:-9})
	}
	
	


