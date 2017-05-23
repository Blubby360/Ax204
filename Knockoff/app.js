console.log('Hi My name is tom and im better than you at everything. Solve this riddle at urlysuckatlife@gmail.com');

var canvas;
var ctx;
//Starting position and radius for player AKA lonely circle
var x = 300;
var y = 300;
var r = 20;
//Keep track of speed in x and y directions
var mx = 0;
var my = 0;
// Positions of SadPellet and LonelyGhost
var circleX;
var circleY;
var ghostX;
var ghostY;
var ghostWidth = 50;
var ghostHeight = 50;
// Boolean to keep track of whether Donald Trump is angry or collided with CringeyFace
var circleCollision = false;
var ghostCollision = false;
// Width and height of the FaceOff plus keeping score
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;
var gameover = false;

// Wiping clean the canvas
function clear() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
}

// Initialise our animation / game
function init(){
  // set up our canvas
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // put fruits in random positions
  circleX = Math.floor(Math.random() * 550);
  circleY = Math.floor(Math.random() * 550);
  ghostX = Math.floor(Math.random() * 550);
  ghostY = Math.floor(Math.random() * 550);
  // wait for a keybord input
  window.onkeydown = keydownControl;
  // redraw the canvas every 10ms
  return setInterval(draw, 10);
}

// Draw function to show what to draw every few milliseconds
function draw() {
  clear();
  if (gameover != true){
  drawPacman();
  drawCircle();
  drawGhost();
  // tells our sprite to bounce off the walls and go in the opposite direction
  if (x + mx > WIDTH - r || x + mx < 0 + r){
    mx = -mx
  } else if (y + my > WIDTH - r || y + my < 0 + r) {
    my = -my
  }
  // moves our sprite
  x += mx;  //means the same as x = x + mx
  y += my;

  followPacman();
  // check for a collision
  collisionCheck();
  collisionHandle();
  }
  if (gameover == true){
    ctx.font = "40px Impact";
    ctx.fillText("GAME OVER",200,300)
  }
}

// Checks for whether there is a collision
function collisionCheck() {
	// Accounting for collision from the top left and the bottom right
	if( (x >= ghostX) && (x <= ghostX + ghostWidth) && (y >= ghostY) && (y <= ghostY + ghostHeight) ) {
		ghostCollision = true;
	} else {
		ghostCollision = false;
	}

	if( (x >= circleX) && (x <= circleX + 50) && (y >= circleY) && (y <= circleY + 50) ) {
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

// What happens if there is a collision
function collisionHandle() {
	// If there is a collision, resets position of fruit and changes the score
	if (ghostCollision == true) {
  		gameover = true;
	}

	if (circleCollision == true) {
		circleX = Math.floor(Math.random() * 550);
  		circleY = Math.floor(Math.random() * 550);
  		score += 1;
  		document.getElementById("score").innerHTML = score;
	}
}

// Keyboard control func

function keydownControl(e) {
	if(e.keyCode == 37) {
		mx = -4;
		my = 0;
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	} 
}

function drawPacman() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  var pacman = new Image();
  pacman.src = "download-1.png"
  ctx.drawImage(pacman, x, y, r, r);
}

function drawCircle() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  var circle = new Image();
  circle.src = "download.png"
  ctx.drawImage(circle, circleX, circleY, 50, 50);
}

function drawGhost() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  var ghost = new Image();
  ghost.src = "download-2.png"
  ctx.drawImage(ghost, ghostX, ghostY, ghostWidth, ghostHeight);
}


function followPacman() {
  if(ghostX < x){
      ghostX += 1;
    }
  if(ghostX > x){
      ghostX -= 1;
    }
  if(ghostY < y){
      ghostY += 1;
    }
  if(ghostY > y){
      ghostY -= 1;
  }  

}

init();










//
