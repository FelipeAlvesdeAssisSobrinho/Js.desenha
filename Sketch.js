function setup() {
  createCanvas(600, 600);
   background("white");
}


function draw() {
  
  stroke ("black");
  fill ("white");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 32, 32, 32);
  }
}
