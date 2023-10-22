// https://leetcode.com/problems/array-partition/description/
const nums = [6, 2, 6, 5, 1, 2];

const arrayPairSum = (nums) => {
  let sum = 0;

  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i];
  }

  return sum;
};

console.log(arrayPairSum(nums));
