// https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
const arr = [5, 4, 1, 2, 3];
const fn = (x) => x;

// const sortBy = function (arr, fn) {
//   const unSortedList = [];
//   const result = [];

//   for (let i of arr) {
//     unSortedList.push(fn(i));
//   }

//   sortedArr = bubbleSort(unSortedList);

//   for (let i of arr) {
//     const temp = fn(i);

//     const idx = sortedArr.indexOf(temp);

//     result[idx] = i;
//   }

//   return result;
// };

const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x));
