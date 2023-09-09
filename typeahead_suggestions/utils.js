import { FRUITS } from "./data";

export const getSuggestion = (keyword) => {
  const result = FRUITS.filter(
    (fruit) =>
      fruit.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );

  return Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let clearTimeoutCtx;

  return function () {
    const self = this;
    const args = arguments;

    clearTimeout(clearTimeoutCtx);

    clearTimeoutCtx = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
};
