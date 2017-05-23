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
// Positions of DT and CringeyFace
var goodX;
var goodY;
var badX;
var badY;
var faceWidth = 50;
var faceHeight = 50;
// Boolean to keep track of whether Donald Trump is angry or collided with CringeyFace
var goodCollision = false;
var badCollision = false;
// Width and height of the FaceOff plus keeping score
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

// Draw a circle function
function circle(x, y, r){
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 6.28);
  ctx.closePath();
  ctx.fillStyle = "tomato";
  ctx.fill();
}

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
  goodX = Math.floor(Math.random() * 550);
  goodY = Math.floor(Math.random() * 550);
  badX = Math.floor(Math.random() * 550);
  badY = Math.floor(Math.random() * 550);
  // wait for a keybord input
  window.onkeydown = keydownControl;
  // redraw the canvas every 10ms
  return setInterval(draw, 10);
}

// Draw function to show what to draw every few milliseconds
function draw() {
  clear();
  circle(x, y, r);
  drawGood();
  drawBad();
	// tells our sprite to bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - r || x + mx < 0 + r){
		mx = -mx
	} else if (y + my > WIDTH - r || y + my < 0 + r) {
		my = -my
	}
	// moves our sprite
	x += mx;  //means the same as x = x + mx
	y += my;
  // check for a collision
  collisionCheck();
  collisionHandle();
}

// Checks for whether there is a collision
function collisionCheck() {
	// Accounting for collision from the top left and the bottom right
	if( (x >= badX) && (x <= badX + faceWidth) && (y >= badY) && (y <= badY + faceHeight) ) {
		badCollision = true;
	} else {
		badCollision = false;
	}

	if( (x >= goodX) && (x <= goodX + faceWidth) && (y >= goodY) && (y <= goodY + faceHeight) ) {
		goodCollision = true;
	} else {
		goodCollision = false;
	}
}

// What happens if there is a collision
function collisionHandle() {
	// If there is a collision, resets position of fruit and changes the score
	if (badCollision == true) {
		badX = Math.floor(Math.random() * 550);
  		badY = Math.floor(Math.random() * 550);
  		score -= 1;
  		document.getElementById("score").innerHTML = score;
	}
	if (goodCollision == true) {
		goodX = Math.floor(Math.random() * 550);
  		goodY = Math.floor(Math.random() * 550);
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

function drawGood() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  var good = new Image();
  good.src = "CringeyFace.png"
  ctx.drawImage(good, goodX, goodY, 50, 50);
}

function drawBad() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  var bad = new Image();
  bad.src = "badhairdude.png"
  ctx.drawImage(bad, badX, badY, 50, 50);
}

init();










//


