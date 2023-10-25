let nums = [1, 2, 3, 4];

// const productExceptSelf = function (nums) {
//   let resObj = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let res = 1;

//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       } else {
//         res = res * nums[j];
//       }
//     }

//     resObj.set(nums[i], res);
//   }

//   return Array.from(resObj.values());
// };

// Optimise: O(n)
// const productExceptSelf = function (nums) {
//   const prefix = new Array(nums.length).fill(1);
//   const postfix = new Array(nums.length).fill(1);

//   const res = [];

//   // calculate prefix - O(n)
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       prefix[i] = nums[i];
//     } else {
//       prefix[i] = nums[i] * prefix[i - 1];
//     }
//   }

//   // calculate postfix
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i === nums.length - 1) {
//       postfix[i] = nums[i];
//     } else {
//       postfix[i] = nums[i] * postfix[i + 1];
//     }
//   }

//   // prep for output array - we ignore this res O(n) space
//   for (let i = 0; i < nums.length; i++) {
//     const pLeft = i === 0 ? 1 : prefix[i - 1];
//     const pRight = i === nums.length - 1 ? 1 : postfix[i + 1];

//     res[i] = pLeft * pRight;
//   }

//   return res;
// };

// Optimise: O(1) space as resultant space ignoring
var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
};

console.log(productExceptSelf(nums));
