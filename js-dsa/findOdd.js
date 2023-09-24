const arr = [1, 2, 3, 4, 5, 6];

const findOdd = (arr) => {
  const result = [];

  const helperRecursion = (arr) => {
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }

    helperRecursion(arr.slice(1));
  };

  helperRecursion(arr);

  return result;
};

const res = findOdd(arr);
console.log({ res });
