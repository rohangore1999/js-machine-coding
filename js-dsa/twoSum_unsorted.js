let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
  const value = {};

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];

    if (rem in value) {
      return [i, value[rem]];
    } else {
      value[nums[i]] = i;
    }
  }
};

const res = twoSum(nums, target);
console.log(res);
