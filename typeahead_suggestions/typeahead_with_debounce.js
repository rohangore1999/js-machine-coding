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

  const myThrottling = (fn, delay) => {
    let flag = true;

    return function (...args) {
      if (flag) {
        flag = false;
        fn.apply(this, args);
      }
   
      setTimeout(() => {
        flag = true;
      }, delay);
    };
  };

  const pushToSuggestionBox = (result = []) => {
    const ulBlock = document.createElement("ul");

    result.forEach((element) => {
      const liBlock = document.createElement("li");
      liBlock.innerText = element;
      liBlock.style.cursor = "pointer";

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

  const handleClick = (e) => {
    const text = e.target.innerText;
    console.log(text);

    input.value = text;
  };

  const onBlur = (e) => {
    if (e.target.input || e.target.suggestionBox) {
      return;
    }

    suggestionBox.style.display = "none";
  };

  input.addEventListener("keyup", myDebounce(onchange, 500));
  window.addEventListener("click", onBlur);
  suggestionBox.addEventListener("click", handleClick);
})();
