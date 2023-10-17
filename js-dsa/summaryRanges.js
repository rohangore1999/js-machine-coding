// NEED TO CORRECT IT !!

const nums = [0, 1, 2, 4, 5, 7];

const summaryRanges = function (nums) {
  let idx = 0;
  output = [];

  while (idx < nums.length) {
    let beg, last;

    beg = nums[idx];

    while (idx + 1 < nums.length && nums[idx + 1] === nums[idx] + 1) {
      idx++;
    }

    last = nums[idx];

    if (beg === last) {
      output.push(beg + "");
    } else {
      output.push(beg + "->" + last);
    }

    idx++;
  }

  return output;
};

console.log(summaryRanges_opt(nums));
