const nums = [-1, 0, 1, 2, -1, -4];

// Brute Force: O(n^3)
const threeSum = function (nums) {
  let res = {};
  let temp = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          temp.push(nums[i]);
          temp.push(nums[j]);
          temp.push(nums[k]);

          temp = temp.sort((a, b) => a - b);

          if (!res[temp.toString()]) {
            res[temp] = temp;
          }

          temp = [];
        }
      }
    }
  }

  return Object.values(res);
};

// console.log(threeSum(nums));

// --------------------------------------------------

// Optimal Soln: O(n^2)
const threeSum_opt = function (nums) {
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
 
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let target = nums[i] + nums[left] + nums[right];

      if (target < 0) {
        left++;
      } else if (target > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left += 1;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return res;
};

console.log(threeSum_opt(nums));
