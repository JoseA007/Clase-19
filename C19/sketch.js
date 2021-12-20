var barandal, barandalIMG
var puerta, puertaIMG
var fantasma, fantasmaIMG
var fantasmaSA, fantasmaSAIMG
var spooky, spookywav
var torre, torreIMG

function preload(){
  barandalIMG = loadImage("climber.png")
  puertaIMG = loadImage("door.png")
  fantasmaIMG = loadImage("ghost-standing.png")
  fantasmaSAIMG = loadImage("ghost-jumping.png")
  spookywav = loadSound("spooky.wav")
  torreIMG = loadImage("tower.png")
}

function setup() {
  createCanvas(600, 600);
  
  torre = createSprite(300,300,20,20)
  torre.addImage("torre", torreIMG)
  torre.scale = 1
  torre.velocityY = 2
  
  fantasma = createSprite(300,300,20,20)
  fantasma.addImage("fantasma", fantasmaIMG)
  fantasma.scale = 0.4
  fantasma.velocityY = 2

  fantasma.addImage("fantasmaSaltando", fantasmaSAIMG)
  fantasma.scale = 0.4
}

function draw() {
  background(200);
  drawSprites();

  obstaculo();

  fantasma.debug = true

  /*if(fantasma.y > 600 || fantasma.y < 0){

  }*/

  if(torre.y > 600){
    torre.y = 300
  }

  if(keyDown("space")){
    fantasma.velocityY = -4
  }
  fantasma.velocityY += 1

  //fantasma.bounceOff(barandal)


  if(keyDown(RIGHT_ARROW)){
    fantasma.velocityY = 0;
    fantasma.velocityX = 4;
    }
    
    if(keyDown(LEFT_ARROW)){
    fantasma.velocityY = 0;
    fantasma.velocityX = -4;
    }

  if(keyWentUp(LEFT_ARROW)){
    fantasma.velocityX = 0;
    fantasma.velocityY = 0;
    }
      
  if(keyWentUp(RIGHT_ARROW)){
    fantasma.velocityX = 0;
    fantasma.velocityY = 0;
    }  
}

function obstaculo(){
  if(frameCount% 80 === 0){
    puerta = createSprite(300,0,20,20)
    puerta.addImage("Puerta", puertaIMG)
    barandal = createSprite(300,50,20,20)
    barandal.addImage("barandal", barandalIMG)
    puerta.velocityY = (4+2*frameCount/1000);
    barandal.velocityY = (4+2*frameCount/1000);
    puerta.x = Math.round(random(120, 480));
    puerta.depth = fantasma.depth;
    fantasma.depth += 1;
    barandal.x = puerta.x
    puerta.lifetime = 170;
  }
}