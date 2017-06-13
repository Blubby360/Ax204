console.log('hi my name is Tom and i am better than u at everything :)')

var game= new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png',32,48);
	game.load.spritesheet('baddie', 'assets/baddie.png',32,32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'sky');

	//Making group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//ground
	var ground = platforms.create(0,game.height-50,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;


	//ledges
	var ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;

	//player
	player = game.add.sprite(32, game.world.height-220,'dude');
	//player animations using the spritesheet
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	//apply physics to my dude
	game.physics.arcade.enable(player);

	//player physics property - slight bounce, gravity, collision, stay on screen
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//enemies
	enemy1 = game.add.sprite(760, 20, 'baddie');
		//enemy animations
		enemy1.animations.add('left',[0,1], 10, true);
		enemy1.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy1);
		//enemy phsical properties
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie');
		//enemy animations
		enemy2.animations.add('left',[0,1], 10, true);
		enemy2.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy2);
		//enemy phsical properties
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(200, 20, 'baddie');
		//enemy animations
		enemy3.animations.add('left',[0,1], 10, true);
		enemy3.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy3);
		//enemy phsical properties
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

	//create keyboard entry
	cursors = game.input.keyboard.createCursorKeys();

	//create stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//create 12 evenly spaced stars
	for (var i =0; i<12; i++){
		//create a star insie the stars group
		var star = stars.create(i*70, 0, 'star');
		//lets give it gravity 
		star.body.gravity.y = 200;
		//give a slight bounce
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	} 

	//setting style for text
	var style = {font: "bold 32px Arial", fill: "#fff", boundsAlignH:"center", bounceAlignV:"middle"}
	scorelabel = game.add.text(-60, 0, "Your score is: ", style)
	scoretext = game.add.text(70, 0, score, style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0,5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0,5)',2);
	//set text bounds 
	scorelabel.setTextBounds(0, 520, 800, 100);
	scoretext.setTextBounds(0, 520, 800, 100);
	//setup lives text
	lifelabel = game.add.text(-300, 0, "Lives: ", style)
	lifetext = game.add.text(-240, 0, life, style);
	lifelabel.setShadow(3,3,'rgba(0,0,0,0,5)',2);
	lifetext.setShadow(3,3,'rgba(0,0,0,0,5)',2);
	//set text bounds 
	lifelabel.setTextBounds(0, 520, 800, 100);
	lifetext.setTextBounds(0, 0, 800, 100);

}

function update(){
	//setup collisions playe with platform
	game.physics.arcade.collide(player, platforms);
	//collide enemies with platforms 
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(enemy3, platforms);

	//reset player velocity if no events 
	player.body.velocity.x = 0;

	//left arrow key is pressed 
	if(cursors.left.isDown) {
		//move left 
		player.body.velocity.x = -150;
		//play animation 
		player.animations.play('left');
	} else if(cursors.right.isDown) {
		//move left 
		player.body.velocity.x = 150;
		//play animation 
		player.animations.play('right');
	} else{
		//stand still 
		player.animations.stop();
		player.frame = 4;
	}	

	//  Allow the player to jump if they are touching the ground.
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

	//Enemy AI
	if (enemy1.x > 759) {
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -120;
	} else if (enemy1.x < 405) {
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 120;
	}

	if (enemy1.x > 200) {
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -80;
	} else if (enemy1.x < 21) {
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 80;
	}

	if (enemy1.x > 759) {
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -150;
	} else if (enemy1.x < 201) {
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 150;
	}

	//collide with stars
	game.physics.arcade.collide(stars, platforms);
	//calls collectStar func when overlap
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	//stars collide with platforms 
	game.physics.arcade.collide(stars, platforms);
	// player triggers loseLife when contact with enemies
	game.physics.arcade.overlap(player, enemy1, loseLife, null, this);
	game.physics.arcade.overlap(player, enemy2, loseLifeLeft, null, this);
	game.physics.arcade.overlap(player, enemy3, loseLife, null, this);

}

function collectStar (player, star) {
	//removes the star from the screen 
	star.kill();
	//updating score variable 
	score = score + 1;
	//reflecting the text 
	scoretext.setText(score);

	// creating a new star
	star = stars.create(Math.floor(Math.random() * 750), 0, 'star'); 
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.7 + Math.random() * 0.2;
}

//defining LoseLife
function loseLife (player, enemy) {
	enemy.kill();
	life = life -1;
	lifetext.setText(life);
	enemy.reset(760, 20)
}

function loseLifeLeft (player, enemy) {
	enemy.kill();
	life = life -1;
	lifetext.setText(life);
	enemy.reset(10, 20)
}






