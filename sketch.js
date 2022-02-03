const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var wall1, wall2, wall3, wall4;
var ball;
var btn1, btn2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall1 = new Wall(200,390,400,20);
  wall2 = new Wall(390,200,20,400);
  wall3 = new Wall(10,200,20,400);
  wall4 = new Wall(200,10,400,20);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();

  ellipse(ball.position.x,ball.position.y,20);
}


function verticalForce() {
  
}

function horizontalForce() {
  
}

