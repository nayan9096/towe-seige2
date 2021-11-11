const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,Ground;
var Stand1,stand2;
var slingshot;
var polygonImage;
var block;

function preload()
{
	polygonImage=loadImage("polygon.png");
 
}

function setup() {
	
  engine = Engine.create();
	world = engine.world;
createCanvas(1200,700)
	Ground= new ground(600,700,1000,20);
  
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
 slingshot = new Slingshot(this.polygon,{x:100,y:200});

 


 Ground1=new ground(400,260,280,10);
 Ground2=new ground(700,200,200,10);
 

  //level1
  
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

  //level2
  
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  block22 = new Block(340,235,30,40)

  //level3
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);

  //level4
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);

  //level5
  block21 = new Block(385,115,30,40);

  //set2
 block1 = new Block(640,175,30,40);
 block2 = new Block(670,175,30,40);
 block3 = new Block(700,175,30,40);
 block4 = new Block(730,175,30,40);
 block5 = new Block(760,175,30,40);

//level2
block6 = new Block(670,135,30,40);
block7 = new Block(700,135,30,40);
block8 = new Block(730,135,30,40);

//level3
block9 = new Block(700,95,30,40);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
  Ground.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  
  

//level2
  stroke(15);
  fill("lightblue")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block22.display();

  //level3
  stroke(15);
  fill("white")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  //level4
  stroke(15);
  fill("green")
  block19.display();
  block20.display();

  //level5
  stroke(15);
  fill("blue")
  block21.display();

 Ground1.display();

   //set2
  stroke(15);
  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
Ground2.display();
  
  

  drawSprites()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32)
  slingshot.attach(polygon);
}