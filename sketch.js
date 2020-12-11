var paperball;
var ground;
var db1 , db2 , db3, db4sprite, db4img, test;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	db4img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paperball = new paper(200,500,30,30);

    ground = new Ground(400,700,800,10);
  
	db1 = new sidepart(600,645,10,100);
	db2 = new sidepart(500,645,10,100);
	db3 = new sidepart(550,690,100,10);
	db4sprite = createSprite(550,660,50,50);
	db4sprite.addImage(db4img);
	db4sprite.scale = 0.5;

	Engine.run(engine);
  
}

function draw() {
    Engine.update(engine);
rectMode(CENTER);
  background(255);

  db1.display();
  db2.display();
  db3.display();

  paperball.display();
  ground.display();
  keyPresssed();
  drawSprites();
}

function keyPresssed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1,y:-3.5});
	}

	if(keyCode === DOWN_ARROW){
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0.2,y:5});
	}
}