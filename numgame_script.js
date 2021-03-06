// Jakob Nordhagen
// This file implements the functionality of the number guessing game.
// Adapted from MDN docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let insultStrings = ['wow dummy', 'simply awful', '... smh', 'jeez, Harold', 'I\'d say ur doing well but I\'d be lying',
'whoa look at this prodigy someone alert the media', 'you have brought disappointment to your family', 'imagine being this dumb',
'have you tried not being terrible? might help', 'lol try harder', 'quick tip: jk you\'re beyond help'];

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'You guessed it! Here, have some meaningless internet validation!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!! You Died';
        setGameOver();
    } else {
        lastResult.style.backgroundColor = 'red';
        lastResult.textContent = 'Wrong! ' + insultStrings[Math.floor(Math.random() * insultStrings.length)];
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your last guess was TOO LOW';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Your last guess was TOO HIGH';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
