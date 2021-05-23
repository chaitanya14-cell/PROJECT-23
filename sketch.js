var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft,boxRight,boxBottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxLeft = createSprite(width/2-100,610,20,100)
	boxLeft.shapeColor = "red";
	boxLeftBody = Bodies.rectangle(width/2-80,610,20,100,{isStatic:true})
	World.add(world,boxLeftBody)

	boxRight = createSprite(width/2+100,610,20,100)
	boxRight.shapeColor = "red";
	boxRightBody = Bodies.rectangle(width/2+80,610,20,100,{isStatic:true})
	World.add(world,boxRightBody) 

	boxBottom = createSprite(width/2,650,200,20)
	boxBottom.shapeColor = "red";
	boxBottomBody = Bodies.rectangle(width/2,635,200,20,{isStatic:true})
	World.add(world,boxBottomBody)


	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



