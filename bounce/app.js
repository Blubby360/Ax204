console.log("ARHHGG");

var canvas
var ctx
//Variables to show coordinates
var x = 600;
var y = 300;
//Variable to show speed
var mx = 2;
var my = 4;
//Variables to track height and width of canvas
var width = 600;
var height = 300;

//Create entry point function
function init() {
	canvas = document.getElementById('stuff');
	ctx = canvas.getContext('2d');
	return setInterval(draw, 10);

}

function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "cyan";
	ctx.fill();

}

function clear(){
	// ctx.clearRect(0,0,width,height);
	ctx.fillStyle = "yellow";
	ctx.fillRect(0,0,width,height);
}

function draw(){
	clear();
	circle(x, y, 60);
	//move a ball i think :) i suck at math
	x += mx;
	y += my;
	//Make sure ball reverses direction when it reaches the edge
	if (x + mx > width || x + mx < 0) {
		mx = -mx
	}
	if (y + my > height || y + my < 0) {
		my = -my
	}
}


init();

//