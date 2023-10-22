// https://leetcode.com/problems/move-zeroes/description/
const nums = [0, 0, 1];

const moveZeroes = function (nums) {
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log({ i });
    if (nums[i] === 0) {
      nums.splice(i, 1);
      cnt++;
      i--; // imp: to restart i
    }
  }

  for (let i = 0; i < cnt; i++) {
    nums.push(0);
  }

  console.log(nums);
};

moveZeroes(nums);
