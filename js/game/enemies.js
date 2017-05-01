// Spawn Enemies

/* * PREFIXES * 
	1. RG_ == Rendering in Game
	2. u_ == unit arg
*/

var spawnBox = document.getElementById('cell-202');

// Pop defines the number of units sent
var pop = 10;
// SpawnCollection holds unites created
var spawnCollection = [];
// Universal Tick
var counter = 0;


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

	var u_limit = spawnCollection.length;
}

// Spawns enemies
function spawn(pos) {

	var renderedUnits = [];

	for (var s = 0; s < spawnCollection.length; s++) {
		var RG_enemy = document.createElement('div');
		RG_enemy.className = 'enemy-unit unit-speed';
		spawnBox.appendChild(RG_enemy);

		renderedUnits.push(RG_enemy);

		// pos(RG_enemy);
	}

	var c = 0;
	var i = setInterval(function(){
	    renderedUnits[c].style.left = gb_width - 15 + 'px';
	    c++;
	    if(c === 10) {
	        clearInterval(i);
	    }
	}, 1500);

}
spawn(unitPos);

// Get units position
function unitPos(unit) {
	setInterval(function() {
		var u_top = unit.offsetTop;
		var u_left = unit.offsetLeft;
	},1000);
}









