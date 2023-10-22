// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
const nums = [4, 3, 2, 7, 8, 2, 3, 1];

// const findDisappearedNumbers = function (nums) {
//   const res = [];

//   let sortedNums = nums.sort((a, b) => a - b);
//   console.log({ sortedNums });

//   for (let i = 1; i <= nums.length; i++) {
//     if (!sortedNums.includes(i)) {
//       res.push(i);
//     }
//   }

//   console.log({ res });
// };

const findDisappearedNumbers = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let idx = num - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};

console.log(findDisappearedNumbers(nums));
