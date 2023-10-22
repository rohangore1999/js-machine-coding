const arr = [2, 3, 1, 4];
let i = 0;
let j = 1;
let newArray = [];

const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};
  
const sortArray = (arr) => {
  if (isSorted(arr)) {
    newArray = arr;

    return;
  } else if (arr[i] < arr[j]) {
    i++;
    j++;

    sortArray(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;

    sortArray(arr);
  }

  return newArray;
};

const res = sortArray(arr);
console.log({ res });
