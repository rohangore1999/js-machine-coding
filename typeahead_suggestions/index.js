const FRUITS = ["Apple", "AA","Mango", "Banana", "Orange"];

const getSuggestion = (keyword) => {
  const result = FRUITS.filter(
    (fruit) =>
      fruit.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

const inputBox = document.getElementById("input");
const suggestionBox = document.getElementById("suggestion-box");

const renderDropItems = (list = []) => {
  const suggestionFragment = document.createDocumentFragment();

  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    suggestionFragment.appendChild(el);
  });

  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggestionFragment);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestion(keyword);

  if (result.length) {
    suggestionBox.classList.add("suggestion-visible");
    renderDropItems(result);
  }
};

const handleInput = (event) => {
  const { value } = event.target;

  if (value) {
    handleSearch(value);
  }
};

(() => {
  inputBox.addEventListener("input", handleInput);
})();
