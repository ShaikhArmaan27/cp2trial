
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var paperObject
var dustbinimg,paperimg

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
  
  paperObject = new Paper(50,50,20,10)
  line1 = new Dustbin(680,370,100,30)
  line2 = new Dustbin(640,330,40,100)
  line3 = new Dustbin(750,330,40,100)
  ground1 = new Ground(450,390,900,20)
  dustbinimg = new Dustbin(680,330,40,100)
}


function draw() {
  background(0);

  paperObject.display()
  //line2.display()
  //line3.display()
  line1.display()
  ground1.display()
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:18,y:-15});
  
  }
  
}

 