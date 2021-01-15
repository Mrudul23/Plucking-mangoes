const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage,boy,ground,rock,treeImage,tree;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,rope;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
	backgroundImg = loadImage("background.png");
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(200,300)
	boy.addImage(boyImage)
	boy.scale=1.3

	tree=createSprite(1100,220)
	tree.addImage(treeImage)
	tree.scale=0.3

	
	//Create the Bodies Here.
	rock = new stone(320,225,100);
	rope = new Rope(rock.body,{x:150 , y:210});
	m1 = new mango(1000,170,8);
	m2 = new mango(1050,140,10);
	m3 = new mango(1100,110,7);
	m4 = new mango(1050,80,9);
	m5 = new mango(1120,60,6);
	m6 = new mango(1230,160,10);
	m7 = new mango(1100,170,9)
	m7 = new mango(1100,170,9)
	m8 = new mango(1160,100,6)
	m9 = new mango(1200,120,7)
	m10 = new mango(1160,160,8)
	base = new Ground(650,430,1300,10);
	World.add(world,base);
	base2 =new Ground(975,380,1300,10);
    World.add(world,base2);
	Engine.run(engine);
	  
}

function draw() {
	
	if (keyDown("space")) {
		Matter.Body.setPosition(rock.body,{x:190,y:190})
		rope.attach();
	  }

    rectMode(CENTER);
	background(backgroundImg);
	
    push();
	rope.display();


	drawSprites()
    imageMode(CENTER);
   
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display()
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);
	collision(rock,m7);
	collision(rock,m8);
	collision(rock,m9);
	collision(rock,m10);

	strokeWeight(5);
	textSize(25)
	stroke(0);
	fill(255);
	text("Let us Pluck the Mangoes ! 😋", 35, 30);
	text("Press space to get another chance ", 35, 60);
	
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);

	}
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
}