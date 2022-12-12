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

    const container = document.getElementById('show');
    const h2 = document.createElement('h2');
    h2.innerHTML = APIdata[0]['show']['name'];
    container.appendChild(h2);

    const image = document.createElement('img');
    image.src = APIdata[0]['show']['image']['medium'];
    image.alt = APIdata[0]['show']['name'];
    container.appendChild(image);

    const description = document.createElement('p');
    description.innerHTML = APIdata[0]['show']['summary'];
    container.appendChild(description);

    const link = document.createElement('a');
    link.href = APIdata[0]['show']['url'];
    link.target = '_blank';
    link.innerHTML = APIdata[0]['show']['url'];
    container.appendChild(link);

  } catch (error) {
    console.log('error', error);
  }
});