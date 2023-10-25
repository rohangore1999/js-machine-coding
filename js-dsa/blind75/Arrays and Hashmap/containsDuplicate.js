// https://leetcode.com/problems/contains-duplicate/description/
const nums = [1, 2, 3, 4];

const containsDuplicate = function (nums) {
  let res = {};

  for (let i of nums) {
    res[i] = res[i] + 1 || 1;

    if (res[i] > 1) return true;
  }

  return false;
};

console.log(containsDuplicate(nums));

// Using Hash Map
var containsDuplicate_MAP = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;

    map.set(nums[i], true);
  }

  return false;
};
