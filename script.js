'use strict';
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  random_number = Math.floor(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  console.log(random_number);
});

let random_number = Math.floor(Math.random() * 20 + 1);
let score = 20,
  highScore = 0;
console.log(random_number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector(
    '.message'
  ).textContent = `The new number is👋 : ${guess}`;

  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🚫';
  } else if (guess === random_number && score > 0) {
    document.querySelector(
      '.message'
    ).textContent = `Woaahhh!! Right Number! 😱 
    Your Score is: ${score}`;
    document.querySelector('.number').textContent = random_number;
    document.body.style.backgroundColor = 'green';
    if (highScore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== random_number) {
    document.querySelector('.message').textContent =
      guess > random_number ? 'Try Something Lower' : 'Try Something Higher';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = `You lost! 
      Your Score is: ${score}`;
    document.body.style.backgroundColor = 'red';
    document.querySelector('.score').textContent = score--;
  }
});
