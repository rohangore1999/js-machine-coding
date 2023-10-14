const nums = [4, 1, 2, 1, 2];

const singleNumber = function (nums) {
  const res = {};

  for (let i of nums) {
    res[i] = res[i] + 1 || 1;

    if (res[i] === 1) return i;
  }
};

console.log(singleNumber(nums));

const singleNumber_optimal = function (nums) {
  let res = 0;

  for (let i of nums) {
    res = res ^ i;
  }

  return res
};

console.log(singleNumber_optimal(nums));
