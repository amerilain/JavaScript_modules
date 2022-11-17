'use strict';
const num = prompt("Enter a number:");
const target = document.querySelector("#target");
let prime = true;
for (let i=2; i < num; i++){
  if (num % i === 0){
    prime = false;
    break;
  }
}

if (prime){
  target.innerHTML = `${num} is a prime number`;
} else {
  target.innerHTML = `${num} is not a prime number`;
}