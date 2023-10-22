// https://leetcode.com/problems/missing-number/description/
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= sortedNums.length; i++) {
    if (i !== sortedNums[i]) return i;
  }
};

console.log(missingNumber(nums));

const missingNumber_optimal = function (nums) {
  let res = 0;

  for (let i = 0; i <= nums.length; i++) {
    res = i ^ nums[i] ^ res;
  }

  return res;
};

console.log(missingNumber_optimal(nums));
