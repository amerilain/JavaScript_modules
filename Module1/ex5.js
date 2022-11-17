'use strict';
function leapYear(year) {
  if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
    document.querySelector('#target').innerHTML = year + ', is a leap year';
  } else {
    document.querySelector('#target').innerHTML = year +
        ' is not a leap year';
  }
}

const year = prompt('Enter a year: ');
leapYear(year);