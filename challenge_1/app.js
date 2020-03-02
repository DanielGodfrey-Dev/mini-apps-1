

console.log('we are here');

//click handler for boxes (add X/ add O, etc.)

//identify all buttons
var buttons = document.getElementsByClassName("button");

//NOTE: I played around with this forever knowing the logic and code was correct
//but with zero results. This is because I put the script section in the html above
//the place where the button html elements are generated. PAY ATTENTION in future...

for (const button of buttons) {
//iterates through buttons and signs event listener to each
console.log(button);
  button.addEventListener('click', function(event) {
    console.log('click!');
    button.innerHTML = 'X';
  });

};

//GAME

//once a box is checked, cannot change

//while there are moves left and no win..
//Player one marks an 'X'
	//check for win
//Player two marks an 'O'
	//check for win

//Display (after game implementation)

//Player 1 Box - potential X's remaining
	//win? lose?
//Player 2 Box - potential O's remaining
	//win? lose?

