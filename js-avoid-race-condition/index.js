const url = "https://api.chucknorris.io/jokes/random";
const displayJoke = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

btn.addEventListener("click", getRandomJoke);

let latestReq = 0;
function getRandomJoke() {
  // if user click multiple time then latestReq > currentReq and in last call of fun it will be in sync.
  latestReq++;
  const currentReq = latestReq;

  fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
      if (currentReq === latestReq) {
        displayJoke.innerHTML = jsonData.value;
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}
