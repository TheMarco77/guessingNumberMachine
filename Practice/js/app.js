// some consts and let 
const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

//get random number function 

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

// do {} while 

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');

} while (parseInt(guess) !== randomNumber);

main.innerHTML = `<h1>You guessed it right! The number is ${randomNumber}.</h1>`