'use strict';


function rollDice(dice) {
  let total = 0;
  for (let i = 0; i < dice; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    total += diceRoll;
  }
  return total;
}


const dice = parseInt(prompt('How many dice would you like to roll? '));
const eyes = parseInt(prompt('How many eyes would you like to have? '));

let count = 0;
for (let i = 0; i < 10000; i++) {
  if (rollDice(dice) === eyes) {
    count++;
    console.log(count);
  }
}
const prob = (count / 10000) * 100;

document.querySelector('#target').innerHTML =
    'The probability to get sum ' + eyes + ' with ' + dice + ' dice is ' + prob;