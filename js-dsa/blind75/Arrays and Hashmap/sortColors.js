let nums = [1,2,0];

const sortColors = function (nums) {
  let l = 0,
    r = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i > r) return nums;

    if (nums[i] === 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l++;
    } else if (nums[i] === 2) {
      [nums[r], nums[i]] = [nums[i], nums[r]];
      r--;
    }
  }

  return nums;
};

console.log(sortColors(nums));
