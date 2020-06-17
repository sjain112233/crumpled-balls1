var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{

}

function setup() {
	createCanvas(1600,700);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    //Create a Ground
	ground = new Ground(width/2,670,width,20);

	dustbin=new Dustbin(1200,650);

	ball=new Ball(200,450,40);

	Engine.run(engine);
  }


function draw() {
   background(0);
	ball.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}



