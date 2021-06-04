var starImg,bgImg;
var star, starBody;
var fairyimg   
var fairy,fairybody ; 
var sound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
fairyimg = loadAnimation("images/fairyimg1.png","images/fairyimg2.png");
sound = loadSound("sound/music.mp3");
}

function setup() {
	createCanvas(800, 550);

	//write code to play fairyVoice sound
sound.play();
 //create fairy sprite and add animation for fairy
fairy = createSprite(130,320);
fairy.addAnimation("flyingfairy",fairyimg);
fairy.scale=0.25;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStattic(starBody,true);
 }

  drawSprites();
}
 

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);	 
	}
if(star.y> 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,false);
}
	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW){
        fairy.x=fairy.x+30;
		}
	  
	if (keyCode === LEFT_ARROW){
        fairy.x=fairy.x-30;
		}
	
}


