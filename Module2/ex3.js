"use strict";

let names = prompt('Enter the names of 6 dogs seperated by a comma').split(', ')
console.log(names)

const list = document.getElementById("names");

names.sort();
names.reverse()

for (let i = 0; i < names.length; ++i) {
  const li = document.createElement('li');
  li.innerText = names[i];
    list.appendChild(li);
    }