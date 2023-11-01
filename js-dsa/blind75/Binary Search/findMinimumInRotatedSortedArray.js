const nums = [3, 4, 5, 1, 2];

const findMin = function (nums) {
  let res = nums[0],
    l = 0,
    r = nums.length - 1;

  while (l <= r) {
    //checking if array is sorted
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);

      return res;
    }

    let m = Math.floor((l + r) / 2);
    res = Math.min(res, nums[m]);

    //checking if we are at right portion
    if (nums[m] >= nums[l]) {
      // means we are at left portion[left portion is > right portion in ROTATED SORTED ARRAY]
      // so search in right
      l = m + 1;
    } else {
      // means we are at right portion, so need to go left most element of right portion
      r = m - 1;
    }
  }

  return res;
};

console.log(findMin(nums));
