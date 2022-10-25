let button = document.getElementById("button");
let animequote = document.getElementById("anime-text");
let animecharacter = document.getElementById("anime-character");
let anime = document.getElementById("anime");

// button.addEventListener("click", (e) => {
fetch("https://animechan.vercel.app/api/random", {})
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
    if (data) {
      animequote.innerHTML = data["quote"];
      animecharacter.innerHTML = data["character"];
      anime.innerHTML = data["anime"];
    }
  });
