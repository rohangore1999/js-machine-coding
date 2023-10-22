// https://leetcode.com/problems/max-consecutive-ones/description/
const nums = [1, 1, 0, 1, 1, 1];

// const findMaxConsecutiveOnes = function (nums) {
//   let i = 0,
//     j = 0,
//     cnt = 0,
//     maxCnt = 0;

//   while (j < nums.length) {
//     if (nums[j] === 1) {
//       cnt++;
//       j++;
//     } else {
//       if (cnt > maxCnt) {
//         maxCnt = cnt;
//       }
//       cnt = 0;
//       i = j + 1;
//       j++;
//     }
//   }

//   if (cnt > maxCnt) {
//     maxCnt = cnt;
//   }

//   return maxCnt;
// };

// Using kadane's algo
const findMaxConsecutiveOnes = function (nums) {
  let sum = 0,
    maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    maxSum = Math.max(sum, maxSum);

    if (nums[i] === 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(findMaxConsecutiveOnes(nums));
