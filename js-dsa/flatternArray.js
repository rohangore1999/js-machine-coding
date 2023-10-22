// https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

const n = 1;

const flatternArray = (arr, n) => {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i) && n !== 0) {
      const res = flatternArray(i, n - 1);

      result.push(...res);
    } else {
      result.push(i);
    }
  }

  return result;
};

console.log(flatternArray(array, n));
