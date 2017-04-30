

function endGame() {

	state = 'main_menu';

	// Init functions * * * * * *
	this.onQuit = function() {
		message = 'Thanks for playing!, Play Again?';
		message_box.innerHTML = message;

		console.log('quit envoked');
	}

	// Action Functions * * * * * * *

	this.toStartMenu = function () {
		state = 'start'
	}

}

endG = new endGame();