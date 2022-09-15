"use strict";

const num = Math.ceil(Math.random() * 10);
console.log(num);

let ans = prompt("Guess a number between 1 and 10:");
let attempt = 1;

const guessNum = () => {
  if (num === +ans) {
    const gameWin = alert(`Congrats! You won the game. Attempts ${attempt}`);
  } else if (num !== +ans && attempt <= 2) {
    let tryAgain = prompt("Wrong answer! Please try again.");
    ans = tryAgain;
    attempt++;
    guessNum();
  } else if (attempt > 2) {
    const gamOver = alert(
      `Sorry you failed to guess the number in three attemps. The number was ${num}`
    );
  }
};

guessNum();
