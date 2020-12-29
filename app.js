let getJokeButton = document.getElementById('get-joke-button');
let result = document.getElementById('result');

const getJoke = async () => {
  const url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

  const response = await fetch(url);
  const data = await response.json();

  result.innerHTML = data.joke;
};

getJokeButton.onclick = getJoke;
