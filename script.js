let button = document.getElementById("button");

// button.addEventListener("click", (e) => {
fetch("https://animechan.vercel.app/api/random", {})
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
    if (data) {
    }
  });
