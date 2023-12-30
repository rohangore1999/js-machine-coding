const target = 11,
  nums = [1, 2, 3, 4, 5];

const minSubArrayLen = function (target, nums) {
  let l = 0,
    r = 0;
  let curSum = 0;
  let maxLen = Infinity;

  while (r < nums.length) {
    curSum += nums[r];

    while (curSum >= target) {
      maxLen = Math.min(maxLen, r - l + 1);

      curSum -= nums[l];
      l++;
    }

    r++;
  }

  return maxLen === Infinity ? 0 : maxLen;
};

console.log(minSubArrayLen(target, nums));
