
function setup() {
  createCanvas(400,400);
  Box=createSprite(249,389,29,19)
}

function draw() 
{
  background(30);
drawSprites()
if(keyIsDown(RIGHT_ARROW)) {Box.x=Box.x+1}
}




