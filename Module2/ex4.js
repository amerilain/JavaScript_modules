"use strict";

let number = parseInt(prompt('Enter a number, 0 to quit.'));
let numbers = [];
while(number !== 0){
  numbers.push(number)
  number = parseInt(prompt('Enter a number, 0 to quit.'))
  }

numbers.sort(function(a, b) {
  return a - b;
});

numbers.reverse()
console.log(numbers)