console.log("Yang is the best")

//Grab the canvas as a DOM element
var c = document.getElementById('one');
var ctx = c.getContext('2d');
//First Shape
ctx.fillStyle = "purple";
ctx.fillRect(100,100,100,100);
ctx.clearRect(120,120,60,60);
ctx.strokeStyle = "purple";
ctx.strokeRect(80,80,140,140);
//Second Shape
var c2 = document.getElementById('two');
var ctx2 = c2.getContext('2d');

ctx2.fillStyle = "tomato";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(150,0,150,150);
ctx2.clearRect(0,150,150,150);

var c3 = document.getElementById('three');
var ctx3 = c3.getContext('2d');

ctx3.fillStyle = "darkblue";
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(20,160,120,120);
ctx3.clearRect(160,160,120,120);


//Custom shapes
var c4 = document.getElementById('four');
var ctx4 = c4.getContext('2d');

ctx4.fillStyle = "peru";
ctx4.strokeStyle = "red";
ctx4.beginPath();
ctx4.moveTo(80,0);
ctx4.lineTo(160,100);
ctx4.lineTo(80,200);
ctx4.lineTo(0,100);
ctx4.closePath();
ctx4.stroke();
ctx4.fill();

//another shape
var c5 = document.getElementById('five');
var ctx5 = c5.getContext('2d');

ctx5.fillStyle = "peru";
ctx5.strokeStyle = "tomato";

ctx5.beginPath();
ctx5.moveTo(0,0);
ctx5.lineTo(300,300);
ctx5.lineTo(300,0);
ctx5.lineTo(0,300);
ctx5.closePath();
ctx5.stroke();
ctx5.fill();





// 