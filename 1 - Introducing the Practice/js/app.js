const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

// Keep track of the number or guess attempts

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');

} while (parseInt(guess) !== randomNumber);

main.innerHTML = `<h1>You guessed it right! The number is ${randomNumber}.</h1>`

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number