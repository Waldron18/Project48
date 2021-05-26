
function spawnRed() {
    var redBlocks = createSprite(random(20, 480), random(1, 100), 30, 30);
    redBlocks.shapeColor = "red";
    redBlocks.velocityY = 10;
    redBlocksGroup.add(redBlocks);
 }


function spawnGreen() {
    var greenBlocks = createSprite(random(20, 480), random(1, 100), 30, 30);
    greenBlocks.shapeColor = "green";
    greenBlocks.velocityY = 10;
    greenBlocksGroup.add(greenBlocks);
}


function spawnPurple() {
  var purpleBlocks = createSprite(random(20, 480), random(1, 100), 30, 30);
  purpleBlocks.shapeColor = "purple";
  purpleBlocks.velocityY = 10;
  purpleBlocksGroup.add(purpleBlocks);
}


function spawnBlue() {
  var blueBlocks = createSprite(random(20, 480), random(1, 100), 30, 30);
  blueBlocks.shapeColor = "blue";
  blueBlocks.velocityY = 10;
  blueBlocksGroup.add(blueBlocks);
}

function movement() {

    if (keyDown(LEFT_ARROW)) {
        player.velocityX = -9;
    } else if (keyDown(RIGHT_ARROW)) {
        player.velocityX = 9;
    } else {
        player.velocityX = 0;
    }
}

function spawning(){
    var rand = Math.round(Math.random(1, 4));

    if (frameCount % 100 === 0) {
      if (rand === 0) {
        spawnRed();
      }
      else if (rand === 1) {
        spawnGreen();
      }
      else if (rand === 2) {
        spawnPurple();
      }
      else if (rand === 3){
        spawnBlue();
      }
    }
}

function scoreChanging(){
 
  if(redBlocksGroup.isTouching(player)){
    score -= 1
    redBlocksGroup.destroyEach();
  }

  if(purpleBlocksGroup.isTouching(player)){
    score -= 2
    purpleBlocksGroup.destroyEach();
  }

  if(greenBlocksGroup.isTouching(player)){
    score += 1
    greenBlocksGroup.destroyEach();
  }
  
  if(blueBlocksGroup.isTouching(player)){
    score += 2
    blueBlocksGroup.destroyEach();
  }
  
}

function textScores(){
    
  textSize(10);
  fill("white");
  text("Score: " + score,10,20);
  text("High Score: "+ highscore,10,30);
}

function play(){
  movement();

  spawning();
}

function reset(){
  gameState = PLAY;
  redBlocksGroup.destroyEach();
  greenBlocksGroup.destroyEach();
  player.velocityX = 0;
  if(highScore < score){
    highScore = score;
  }
}


function adaptivity(){
  if(score%10 === 0){
    redBlocks.velocityY += 4;
    greenBlocksGroup.velocityY += 4;
  }
}
