let lightA = false;
let lightB = false;
let lightC = false;

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(128);
  stroke("black");
 
  let shapeAX = 200;
  let shapeBX = 400;
  let shapeCX = 600;
  let shapeDX = 800;
  let shapeY = 150;
  let shapeSize = 150

  //Square A
  if(shapeAX <= mouseX && mouseX <= shapeAX + shapeSize 
      && shapeY <= mouseY && mouseY <= shapeY + shapeSize){
    lightA = true;
  } 
  if(lightA == true) {
    fill("red");
  }
  else{
    fill("white");
  }
  square(shapeAX, shapeY, shapeSize);


  //Square B
  if(shapeBX <= mouseX && mouseX <= shapeBX + shapeSize 
    && shapeY <= mouseY && mouseY <= shapeY + shapeSize && (lightA == true) ){
      lightB = true;
    }
  if(lightB == true) {
    fill("green");
  }
  else{
    fill("white");
  }
  square(shapeBX, shapeY, shapeSize);


  //Square C
  if( shapeCX <= mouseX && mouseX <= shapeCX + shapeSize 
    && shapeY <= mouseY && mouseY <= shapeY + shapeSize 
    && (lightA == true) && (lightB == true)){
      lightC = true;
    }
  if(lightC == true) {
    fill("blue");
  }
  else{
    fill("white");
  }
  square(shapeCX, shapeY, shapeSize);


  //Square D
  fill("white");
  if(shapeDX <= mouseX && mouseX <= shapeDX + shapeSize 
    && shapeY <= mouseY && mouseY <= shapeY + shapeSize 
    && (lightA == true) && (lightB == true) && (lightC ==true)){
    lightA = false;
    lightB = false;
    lightC = false;
  }
  square(shapeDX, shapeY, shapeSize);

  
}