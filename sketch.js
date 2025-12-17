let flowers = []; 
let font;
let level=0;

function preload() {
  font = loadFont('Helvetica-Bold.ttf');
}


function setup() {
  createCanvas(1920,1080);
  flowerPower(); 
}

function draw() {

  textFont(font);

  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  background(255);
  
  if(level==0){
  if(frameCount%20==0&&flowers.length<150)
    {
      
  let flower = createFlower();
  flowers.push(flower);
    }
  
  updateAndDrawFlowers();
  
  textSize(80);
    fill(50);
    text("Do you support sexual freedom?", width/2, height/2-100);

    fill(70, 130, 230, 200);
    rect(width/2-400, height/2+200, 460, 140, 20);
    rect(width/2+400, height/2+200, 680, 140, 20);
    fill(50);
    text("support", width/2-400, height/2+185);
    text("Strongly support", width/2+400, height/2+185);
  }else
    {
      textSize(80);
       text("Thank you for your support !", width/2, height/2-100);
    }
}

function mousePressed() {
  level=1;
}

function updateAndDrawFlowers() {
  for (let flower of flowers) {
    drawFlower(flower); 
  }
}

function flowerPower(){
  for(let i = 0; i < 20; i+=1){
    let flower1 = createFlower(); 
    flowers.push(flower1);
  }
}

function createFlower() {
  let flower = {
    xpos: random(0,width),
    ypos: random(0,height),
    talpha: random(120,180),
    lifespan: 0,
    scl: random(0.6,1.3)
  };
  
  return flower;
}

function drawFlower(flower) {
  //textSize(15*scale);
    flower.lifespan+=0.05*(flower.talpha-flower.lifespan);
    noStroke();
    fill(230, flower.lifespan);
    rect(flower.xpos, flower.ypos,240*flower.scl,60*flower.scl,20);
    fill(0, flower.lifespan);
    textSize(15*flower.scl);
    text("ssssssssssssss",flower.xpos, flower.ypos);
  
}