// https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fn = function (n) {
//   return String(n > 5);
// };

Array.prototype.groupBy = function (fn) {
  let result = {};

  for (let arr of this) {
    const fnRes = fn(arr);

    result[fnRes] = [...(result[fnRes] || []), arr];
  }

  console.log(result);
};

[1, 2, 3].groupBy(String);
