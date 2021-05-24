var player;
var score = 0;
var gameState, START, PLAY, END;
var touches = 0;
var redBlocksGroup, greenBlocksGroup;

function setup() {
  createCanvas(500, 500);

  gameState = START;

  player = createSprite(width / 2, height - 100, 40, 40);
  player.shapeColor = "white";

  redBlocksGroup = new Group();
  greenBlocksGroup = new Group();

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

  if(score < 0){
    gameState = END;
  }

  if (gameState === END) {
   // resetButton.show();
    resetButton.mousePressed(reset);
    console.log("hello")
  }
  drawSprites();

  textScores();

  textSize(10);

}
