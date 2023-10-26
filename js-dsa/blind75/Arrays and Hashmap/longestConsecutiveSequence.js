let nums = [100, 4, 200, 1, 3, 2];

const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let maxCnt = 1;

  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    if (nums.includes(nums[i] + 1)) {
      let no = nums[i];

      while (nums.includes(no)) {
        cnt++;
        no++;
      }

      if (cnt > maxCnt) {
        maxCnt = cnt;
      }
    }
  }

  return maxCnt;
};
// console.log(longestConsecutive(nums));

const longestConsecutive_optimal = function (nums) {
  const numsSet = new Set(nums);
  let longLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let len = 0;

      while (numsSet.has(nums[i] + len)) {
        len++;
      }

      longLen = Math.max(len, longLen);
    }
  }

  return longLen;
};

console.log(longestConsecutive_optimal(nums));
