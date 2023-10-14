const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = function (nums) {
  let res = {};

  sortedNums = nums.sort((a, b) => b - a);

  for (let i = 0; i <= Math.floor(sortedNums.length / 2); i++) {
    res[sortedNums[i]] = res[sortedNums[i]] + 1 || 1;
  }

  for (let i in res) {
    if (res[i] > Math.floor(sortedNums.length / 2)) {
      return i;
    }
  }
};

console.log(majorityElement(nums));

const majorityElement_optimal = function (nums) {
  let major = nums[0];
  let cnt = 1;

  for (let i of nums) {
    if (cnt === 0) {
      major = nums[i];
      cnt = 1;
    } else if (major === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  return major;
};

console.log(majorityElement_optimal(nums));