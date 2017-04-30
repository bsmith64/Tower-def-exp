
function game() {

	state = 'game running';

	// Init functions * * * * * *

	this.launchGame = function() {
		console.log('the game is running');
	}

	// Functions





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

playG = new game();