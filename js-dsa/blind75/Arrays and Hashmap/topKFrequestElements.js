let nums = [1, 1, 1, 2, 2, 3];
k = 2;

const topKFrequent = function (nums, k) {
  let res = {};
  let res_arr = [];

  for (let i of nums) {
    if (res[i]) {
      res[i] += 1;
    } else {
      res[i] = 1;
    }
  }

  const array = Object.entries(res).sort((a, b) => {
    return a[1] - b[1];
  });

  while (res_arr.length !== k) {
    let curr = array.pop();
    res_arr.push(curr[0]);
  }

  return res_arr;
};

console.log(topKFrequent(nums, k));
