let nums = [2, 1, 4, 9];

const rob = function (nums) {
  let dp = Array(nums.length).fill(-1);

  const recurRob = (idx) => {
    // base cases
    if (idx === 0) return nums[idx];

    if (idx < 0) return 0;

    // checking if we have already computed
    if (dp[idx] !== -1) return dp[idx];

    // pick
    let pick = nums[idx] + recurRob(idx - 2);

    // not pick
    let notPick = 0 + recurRob(idx - 1);

    return (dp[idx] = Math.max(pick, notPick));
  };

  return recurRob(nums.length - 1);
};

const rob_Tabulation = function (nums) {
  // init dp
  let dp = Array(nums.length).fill(0);

  // base case
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let take = nums[i];
    if (i > 1) {
      take += dp[i - 2];
    }

    let notTake = 0 + dp[i - 1];

    dp[i] = Math.max(take, notTake);
  }

  return dp[nums.length - 1];
};

const rob_Tabulation_Space_OPT = function (nums) {
  // base case
  let prev = nums[0];
  let prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    let take = nums[i];
    if (i > 1) {
      take += prev2;
    }

    let notTake = 0 + prev;

    curri = Math.max(take, notTake);

    prev2 = prev;
    prev = curri;
  }

  return prev;
};

console.log(rob_Tabulation_Space_OPT(nums));
