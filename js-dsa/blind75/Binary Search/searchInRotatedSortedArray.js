const nums = [5, 1, 3],
  target = 3;

const search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] >= nums[l]) {
      // mid is in left sorted portion
      if (nums[m] >= target && nums[l] <= target) {
        // search in left side
        r = m - 1;
      } else {
        // search in right side
        l = m + 1;
      } 
    } else {
      // mid is in right sorted portion
      if (nums[r] >= target && nums[m] <= target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};

console.log(search(nums, target));
