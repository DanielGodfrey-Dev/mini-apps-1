

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