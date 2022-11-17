'use strict';
const name = prompt('What is your name? ');
const rndInt = Math.floor(Math.random() * 4) + 1;
if (rndInt === 1) {
  document.querySelector('#target').innerHTML = name +
      ', You are in Gryffindor';
} else if (rndInt === 2) {
  document.querySelector('#target').innerHTML = name +
      ', You are in Slytherin';
} else if (rndInt === 3) {
  document.querySelector('#target').innerHTML = name +
      ', You are in Hufflepuff';
} else {
  document.querySelector('#target').innerHTML = name +
      ', You are in Ravenclaw';
}