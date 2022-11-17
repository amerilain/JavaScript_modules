'use strict';

function rollDice(dice) {
  let total = 0;
  for (let i = 0; i < dice; i++) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    total += diceRoll;
  }
  return total;
}

const dice = parseInt(prompt('How many dice would you like to roll? '));
const resultSum = rollDice(dice);
document.querySelector('#target').innerHTML = 'The result is ' + resultSum;