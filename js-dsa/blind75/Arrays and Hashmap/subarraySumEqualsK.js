let nums = [1, 2, 3],
  k = 3;

const subArray = (nums, k) => {
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        cnt++;
      }
    }
  }

  return cnt;
};

console.log(subArray(nums, k));
