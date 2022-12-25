'use strict';
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// add functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1- generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //   2- displaying the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //   check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});
// holding the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    //1- store current score to active player's socre
    scores[activePlayer] += currentScore;
    //   scores[0] = scores[0] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2- check if player's score >=100
    if (scores[activePlayer] >= 20) {
      // finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      //3- switch to the next player
      switchPlayer();
    }
  }
});

// RESETTING THE GAME
btnNew.addEventListener('click', function () {
  console.log('called');
});
