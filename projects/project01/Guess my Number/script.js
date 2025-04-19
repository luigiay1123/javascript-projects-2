'use strict';

const guessDisplay = document.querySelector('.guess');
const generateNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const styleBackgroundColor = function (element, color) {
  document.querySelector(element).style.backgroundColor = color;
};

const styleWidth = function (element, size) {
  document.querySelector(element).style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessDisplay.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    styleBackgroundColor('body', '#60b347');
    styleWidth('.number', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();
  displayMessage('Start guessing...');
  displayScore(score);
  guessDisplay.value = '';
  displayNumber('?');
  styleBackgroundColor('body', '#222');
  styleWidth('.number', '15rem');
});
