//Projeto 20 
//Aluno:Matheus Henrique de Lisboa Ferreira
//Data:23/03/2022
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground, circle, quad, ret;

function preload(){
	
}

function setup() {
	createCanvas(700, 600);
	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos Aqui.
	Engine.run(engine);

	var ground_options = {
    	isStatic : true
  	}

	var circle_options = {
    	restitution : 0.5,
		friction:0.02,
    	frictionAir : 0.0
  	}

	var quad_options = {
    	restitution : 0.7,
		friction:0.01,
    	frictionAir : 0.1
  	}

	var ret_options = {
    	restitution : 0.01,
		friction:1,
    	frictionAir : 0.3
  	}

	ret = Bodies.rectangle(350,50,10,10,ret_options);
  	World.add(world,ret);

	quad = Bodies.rectangle(110,50,10,10,quad_options);
  	World.add(world,quad);

	circle = Bodies.circle(200,10,10,circle_options);
  	World.add(world,circle);

	ground = Bodies.rectangle(350,590,650,20,ground_options);
	World.add(world,ground);
	  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background (51);
	Engine.update(engine);
 	rect(ground.position.x,ground.position.y,700,1);
	ellipse(circle.position.x,circle.position.y,50);
 	rect(ret.position.x,ret.position.y,100,40);
	rect(quad.position.x,quad.position.y,50,50);
  	drawSprites();
  
}