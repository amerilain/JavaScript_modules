"use strict";

let number = parseInt(prompt("Enter a number. Then same number to quit"));
const numbers = [];

while(!numbers.includes(number)){
  numbers.push(number)
  number = parseInt(prompt("Enter a number. Then same number to quit"))
}
alert("Number has already been entered.")
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers)