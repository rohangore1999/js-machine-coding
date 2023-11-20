// ref - https://www.youtube.com/watch?v=YK78FU5Ffjw
let nums = [1, 2, 3];

var permute = function (nums) {
  let res = [],
    freq = Array.from(nums.length).fill(false),
    temp = [];

  const recurPermute = (nums, res, freq, temp) => {
    // base case
    if (temp.length === nums.length) {
      res.push(temp.slice());

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!freq[i]) {
        freq[i] = true;
        temp.push(nums[i]);

        //recursive call
        recurPermute(nums, res, freq, temp);
        temp.pop();
        freq[i] = false;
      }
    }
  };

  recurPermute(nums, res, freq, temp);

  return res;
};

console.log(permute(nums));
