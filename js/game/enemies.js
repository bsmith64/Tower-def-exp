// Spawn Enemies

/* * PREFIXES * 
	1. RG_ == Rendering in Game
*/

var spawnBox = document.getElementById('cell-202');

// Pop defines the number of units sent
var pop = 10;
// SpawnCollection holds unites created
var spawnCollection = [];

// Basic Unit build object
function enemy(level, hp, speed) {
	this.level = level;
	this.hp = hp;
	this.speed = speed;
}

//Add unit to spawnCollection
for (var i = 0; i < pop; i++) {
	//Gen Units
	spawnCollection[i] = new enemy(1,100,5);
}

// Spawns enemies
function spawn(runUnit, pos) {
	for (var s = 0; s < spawnCollection.length; s++) {
		var RG_enemy = document.createElement('div');
		RG_enemy.className = 'enemy-unit unit-speed';
		spawnBox.appendChild(RG_enemy);

		runUnit(RG_enemy);
		// pos(RG_enemy);
	}
}
spawn(sendUnit, unitPos);

// Moves the Unit via CSS
function sendUnit(unit) {
	for (var a = 0; a < spawnCollection.length; a++) {
		setTimeout(function() {
			unit.style.left = "100px";
		}, 200);
	}
}

// Get units position
function unitPos(unit) {
	setInterval(function() {
		var u_top = unit.offsetTop;
		var u_left = unit.offsetLeft;
	},1000);
}

// work in progress
var counter = 0;
function calc() {
	var limit = 10;

	if (counter <= limit) {
		counter += 1;
	} else {
		counter == limit;
	}
	console.log('Count: ' + counter);
}

setInterval(function() {
	calc();
},500);





