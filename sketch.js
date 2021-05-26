var player;
var score = 0 , highscore = 0;
var gameState, START, PLAY, END;
var redBlocksGroup, greenBlocksGroup,blueBlocksGroup, purpleBlocksGroup;

function setup() {
  createCanvas(500, 500);

  START = 0;
  PLAY = 1;
  END = 2;
  gameState = START;

  player = createSprite(width / 2, height - 100, 40, 40);
  player.shapeColor = "white";

  redBlocksGroup = new Group();
  greenBlocksGroup = new Group();
  blueBlocksGroup = new Group();
  purpleBlocksGroup = new Group();

   startButton = createButton("START");
   startButton.position(width / 2 - 25, height / 2);
   startButton.mousePressed(()=>{
     gameState = PLAY;
     startButton.hide();
    })
   
   resetButton = createButton("RESET");
   resetButton.position(width / 2 - 25, 10);
   resetButton.hide();
 
  
}



function draw() {
  background(0);

  
  if (gameState === PLAY) {
    play();
    scoreChanging();
  }

  if(player.isTouching(redBlocksGroup) || player.isTouching(purpleBlocksGroup)){
    gameState = END;
  }

  if (gameState === END) {
    resetButton.show();
    resetButton.mousePressed(reset);
    
  }

  console.log(gameState);
  drawSprites();

  textScores();

}
