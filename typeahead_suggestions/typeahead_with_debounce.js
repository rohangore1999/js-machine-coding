(() => {
  const input = document.getElementById("input-field");
  const suggestionBox = document.getElementById("suggestion-box");
  const FRUITS = ["Mango", "Muskmellon", "Apple", "Banana", "Grapes"];

  const getSuggestion = (key) => {
    return new Promise((res) =>
      setTimeout(
        () =>
          res(
            FRUITS.filter(
              (fruit) =>
                fruit.substring(0, key.length).toLowerCase() ===
                key.toLowerCase()
            )
          ),
        1000
      )
    );
  };

  const myDebounce = (fn, delay) => {
    let timer;

    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const pushToSuggestionBox = (result) => {
    const ulBlock = document.createElement("ul");

    result.forEach((element) => {
      const liBlock = document.createElement("li");
      liBlock.innerText = element;

      ulBlock.appendChild(liBlock);
    });

    suggestionBox.innerHTML = "";
    suggestionBox.appendChild(ulBlock);
  };

  const onchange = async (e) => {
    const { value } = e.target;

    if (!value) {
      suggestionBox.style.display = "none";

      return;
    }

    suggestionBox.style.display = "block";

    // api call
    const result = await getSuggestion(value);
    pushToSuggestionBox(result);
  };

  input.addEventListener("keyup", myDebounce(onchange, 500));
})();
