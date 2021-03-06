

console.log('game starting...');

//identify all buttons to assign game functionality
var buttons = document.getElementsByClassName("button");

//for flagging whether the game has already been won, and trigger for a draw
var alreadyCalled = false;
var drawCount = 0; //ticking up to 9 will signify a draw

//advanced section
var player1wins = 0;
var player2wins = 0;


//NOTE: I played around with this forever knowing the logic and code was correct
//but with zero results. This is because I put the script section in the html above
//the place where the button html elements are generated. PAY ATTENTION in future...

for (const button of buttons) {

	button.addEventListener('click', function(event) {

 	var position = button.id;

 	//this while statement ensures moves can't be changed
 	while (button.innerHTML !== 'X' && button.innerHTML !== 'O' && gameover === false) {

	 	//player1 logic
	 	if (position > 0 && position <= 3 && player1 === true) {
	 		board[0][position - 1] = 'X';
	 		button.innerHTML = 'X';
	 	} else if (position > 3 && position <= 6 && player1 === true) {
	 		board[1][position - 4] = 'X';
	 		button.innerHTML = 'X';
	 	} else if (position > 6 && position <= 9 && player1 === true) {
	 		board[2][position - 7] = 'X';
	 		button.innerHTML = 'X';
	 	}

	 	//player2 logic
	 	else if (position > 0 && position <= 3 && player1 === false) {
	 		board[0][position - 1] = 'O';
	 		button.innerHTML = 'O';
	 	} else if (position > 3 && position <= 6 && player1 === false) {
	 		board[1][position - 4] = 'O';
	 		button.innerHTML = 'O';
	 	} else if (position > 6 && position <= 9 && player1 === false) {
	 		board[2][position - 7] = 'O';
	 		button.innerHTML = 'O';
	 	}

	 	drawCount++;
	 	playerSwitch();
	 	checkWin();
	 	checkDraw();
}

	 setTimeout(function() {
	  	if (gameover && !alreadyCalled) {
	 		alert('Gameover man, it\'s game over!!');
	 		alreadyCalled = true;
	 	}
	 }, 10);
	 //...so page can render properly before alert
  });
};

//GAME
var gameover = false;
var player1 = true;

//generate board
var board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
			];

//for restarting game
document.getElementById('newGame').addEventListener('click', function() {
	
	board = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
			];

	//iterate over buttons to reset all input

	for (const button of buttons) {
		button.innerHTML = '';
	}

	gameover = false
	alreadyCalled = false;
	drawCount = 0;

	console.log('player1wins: ', player1wins);
	console.log('player2wins: ', player2wins);


});

function logWinner() {
	if (player1 === false) {
		player1wins++;
	} if (player1 === true) {
		player2wins++;
	}
}

//gamewin check functions
function checkRowWin() {
	for (var i = 0; i < board.length; i++) {
		if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && (board[i][0] === 'X' || board[i][0] === 'O')) {
			gameover = true;

	 		//log which player won
	 		logWinner();

		}
	}
}

function checkDiagWin() {
	if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) ||
		(board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== null)) {
		gameover = true;

	 		//log which player won
	 		logWinner();
	}
}

function checkVertWin() {
	if ((board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== null) || 
		(board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] !== null) || 
		(board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] !== null)) {

		gameover = true;

	 		//log which player won
	 		logWinner();
	}
}


function checkWin() {
	checkRowWin();
	checkDiagWin();
	checkVertWin();
	setTimeout(function() {
	  	if (gameover && !alreadyCalled) {

	 		alert('Gameover man, it\'s game over!!');
	 		alreadyCalled = true;

	 	}
	 }, 15);
}

function checkDraw() {
	setTimeout(function() {
	  	if (drawCount === 9 && !alreadyCalled) {
	 		alert('It\'s a trap!! I mean, a draw!');
	 		alreadyCalled = true;
	 	}
	 }, 20);
}

function playerSwitch() {
	player1 = !player1;
}

//once a box is checked, cannot change
//while there is no win


//Player one marks an 'X'
	//check for win
//Player two marks an 'O'
	//check for win

//Display (after game implementation)

//Player 1 Box - potential X's remaining
	//win? lose?
//Player 2 Box - potential O's remaining
	//win? lose?


