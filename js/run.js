
function runGame() {

	state = 'running';

	// Init functions * * * * * *

	this.launchGame = function() {
		playG.launchGame();
	}

	// Action Functions * * * * * * *

	this.onQuit = function() {
		message = 'Thanks for playing!, Play Again?';
		message_box.innerHTML = message;

		console.log('run game envoked');
	}

	this.toStartMenu = function () {
		state = 'start'
	}

}

runG = new runGame();