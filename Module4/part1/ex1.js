'use strict';
document.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const input = document.querySelector('#query').value;

  try {
    const proxy = 'https://api.allorigins.win/get?url=';
    const search = 'https://api.tvmaze.com/search/shows?q=' + input;
    const url = proxy + encodeURIComponent(search);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Invalid input');
    const result = await response.json();
    const APIdata = JSON.parse(result.contents);
    console.log(APIdata);

  } catch (e) {
    console.log('error', e);
  }
});