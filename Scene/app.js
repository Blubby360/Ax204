console.log("Tom is the best")

var c = document.getElementById('scene1');
var ctx = c.getContext('2d');

//Sky and land
ctx.fillStyle = "cyan";
ctx.fillRect(0,0,800,500);
ctx.fillStyle = "green";
ctx.fillRect(0,350,800,150)
//Sun
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'yellow';
ctx.beginPath();
//.arc(x of center, y of center, radius, 0, 6.28)
ctx.arc(150,150,60,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fill();
//Path / Road
ctx.fillStyle = "grey";
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.moveTo(350,350);
ctx.lineTo(400,350);
ctx.lineTo(420,500);
ctx.lineTo(330,500);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.lineTo(375,350);
ctx.lineTo(375,500);
ctx.stroke();

var mario = new Image();
var dog = new Image();
var cat = new Image();
cat.src = "cat.png";
dog.src = "Dog.png";
mario.src = "mario.png";

cat.onload = function(){
	ctx.drawImage(cat,50,300,100,100)
}

dog.onload = function(){
	ctx.drawImage(dog,150,300,100,140)
}

mario.onload = function(){
	ctx.drawImage(mario,350,300,170,200)
}
























//