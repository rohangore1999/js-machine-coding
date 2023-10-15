const nums = [1, 2, 3, 4];

const containsDuplicate = function (nums) {
  let res = {};

  for (let i of nums) {
    res[i] = res[i] + 1 || 1;

    if (res[i] > 1) return true;
  }

  return false;
};

console.log(containsDuplicate(nums));
