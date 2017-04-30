// Spawn Enemies

/* * PREFIXES * 
	1. RG_ == Rendering in Game
*/

var spawnBox = document.getElementById('unit-spawn');

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
for (var s = 0; s < spawnCollection.length; s++) {
	var RG_enemy = document.createElement('div');
	RG_enemy.className = 'enemy-unit';

	spawnBox.appendChild(RG_enemy);
}
