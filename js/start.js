

function startGame() {

	state = 'start';

	// Init functions * * * * * *
	this.onStart = function() {
		message = 'Welcome to The Game';
		message_box.innerHTML = message;

		console.log('start envoked');
	}

	// Action Functions * * * * * * *

	this.launchApp = function () {
		message = 'Lets Begin!';
		message_box.innerHTML = message;

		// Start the Game

		runG.launchGame();
	}

}

startG = new startGame();