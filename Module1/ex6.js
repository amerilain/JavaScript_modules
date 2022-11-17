'use strict';
const confirmation = confirm('Should I calculate the square root?');
  if (confirmation === true) {
    const num = parseInt(prompt('enter a number to be squared: '));
    if (0 > num) {
      document.querySelector('#target').innerHTML = "The square root of a negative number is not defined";
    } else {
      const square = Math.sqrt(num);
      document.querySelector('#target').innerHTML = `The square root is ` + square;
    }

  } else {
    document.querySelector('#target').innerHTML = 'The square root is not calculated.';
  }