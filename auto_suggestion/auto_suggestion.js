// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];

  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function () {
  const input = document.getElementById("search");
  const suggestionArea = document.getElementById("suggestion-area");

  const onFocus = () => {
    suggestionArea.style.display = "block";
  };

  const onBlur = (e) => {
    if (e.target === input || e.target === suggestionArea) return;

    suggestionArea.style.display = "none";
  };

  const onChange = (e) => {
    const { value } = e.target;
    processData(value);
  };

  const handleClick = (e) => {
    const text = e.target.innerText;

    if (e.target.suggestionArea) return;

    input.value = e.target.innerText;

    input.focus();
  };

  const processData = async (value) => {
    suggestionArea.innerHTML = "";
    if (!value) {
      // clear all the list if the value is empty
      return;
    }

    // as function can fail randomly
    try {
      const response = await getSuggestions(value);
      console.log({ response });

      if (response.length > 0) {
        const list = document.createElement("ul");

        response.forEach((ele) => {
          const listItems = document.createElement("li");
          listItems.style.cursor = "pointer";
          listItems.innerText = ele;
          list.appendChild(listItems);
        });

        suggestionArea.innerHTML = "";
        suggestionArea.appendChild(list);
      }
    } catch (error) {
      console.error("Error while fetching...");
    }
  };

  input.addEventListener("focus", onFocus);
  window.addEventListener("click", onBlur);
  input.addEventListener("keyup", onChange);
  suggestionArea.addEventListener("click", handleClick, true); // by passing true will capture any of the event
})();
