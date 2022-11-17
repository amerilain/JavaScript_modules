const startYear = parseInt(prompt('enter a starting year: '));
const endYear = parseInt((prompt('enter an ending year: ')));
const target = document.querySelector('#target');

for (let year = startYear; year <= endYear; year++){
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
    target.innerHTML += `<li>${year}</li>`;
    console.log(year)
  }
}
