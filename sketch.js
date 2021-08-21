
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftSide, rightSide;

var ball;

function setup() {
	createCanvas(1275, 570);

	var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, 570, width, 20);
	leftSide = new Ground(800, 430, 20, 190);
	rightSide = new Ground(1000, 430, 20, 190);

	//Create the Bodies Here.

	fill("white");
	ball = Bodies.circle(260, 100, 20, ballOptions);

	World.add(world, ball);

	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20)
 
  ground.display();
  leftSide.display();
  rightSide.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-73});
  
	}
}