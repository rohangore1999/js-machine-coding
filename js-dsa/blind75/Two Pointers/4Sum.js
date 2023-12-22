let nums = [-2, -1, -1, 1, 1, 2, 2],
  target = 0;

const fourSum = function (nums, target) {
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1,
        right = nums.length - 1;

      while (left < right) {
        let sumtarget = nums[i] + nums[j] + nums[left] + nums[right];

        if (sumtarget < target) {
          left++;
        } else if (sumtarget > target) {
          right--;
        } else if (sumtarget === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left += 1;

          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        }
      }
    }
  }

  return res;
};

console.log(fourSum(nums, target));
