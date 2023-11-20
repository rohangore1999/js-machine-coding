const subsets = (nums) => {
  let res = [];
  let subset = [];

  const dfs = (i) => {
    if (i >= nums.length) {
      res.push(subset.slice());

      return;
    }

    // take nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // not take nums[i]
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  return res;
};

console.log(subsets([1, 2, 3]));
