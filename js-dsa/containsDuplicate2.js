const nums = [1, 2, 3, 1];
const k = 3;

const containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
  }

  return false;
};

// console.log(containsNearbyDuplicate(nums, k));

const containsNearbyDuplicate_optimal = (nums, k) => {
  let map = {};

  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;

    console.log({ map });
  }
  return false;
};

console.log(containsNearbyDuplicate_optimal(nums, k));
