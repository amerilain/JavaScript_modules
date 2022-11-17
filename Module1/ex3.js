'use strict';
  const int1 = parseInt(prompt('enter a number: '));
  const int2 = parseInt(prompt('enter a number: '));
  const int3 = parseInt(prompt('enter a number: '));

  let sum = int1 + int2 + int3;
  let product = int1 * int2 * int3;
  let average = sum / 3;

  document.querySelector('#target').innerHTML = 'sum =' + " " + sum;
  document.querySelector('#target1').innerHTML = 'product =' + " " + product;
  document.querySelector('#target2').innerHTML = 'average =' + " " + average;