let nums = [2, 7, 9, 3, 1];

const houseRobber = (nums) => {
  let dp = Array(nums.length).fill(-1);

  const recurr = (idx) => {
    // Base case
    if (idx === 0) {
      return nums[idx];
    }
    if (idx < 0) {
      return 0;
    }

    if (dp[idx] !== -1) {
      return dp[idx];
    }

    // Pick and not pick
    let notPick = 0 + recurr(idx - 1);

    let pick = nums[idx];
    if (idx > 1) {
      pick += recurr(idx - 2);
    }

    return (dp[idx] = Math.max(pick, notPick));
  };

  return recurr(nums.length - 1);
};

const houseRobber_tabulation = (nums) => {
  let dp = Array(nums.length).fill(-1);

  // base case
  dp[0] = nums[0];

  // others
  for (let idx = 1; idx < nums.length; idx++) {
    // Pick and not pick
    let notPick = 0 + dp[idx - 1];

    let pick = nums[idx];
    if (idx > 1) {
      pick += dp[idx - 2];
    }

    dp[idx] = Math.max(pick, notPick);
  }

  return dp[nums.length - 1];
};

const houseRobber_space = (nums) => {
  let prev1, prev2;

  prev2 = 0; // idx = -1
  prev1 = nums[0]; // idx = 0

  for (let idx = 1; idx < nums.length; idx++) {
    // Pick and not pick
    let notPick = 0 + prev1;

    let pick = nums[idx];
    if (idx > 1) {
      pick += prev2;
    }

    curr = Math.max(pick, notPick);

    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};

console.log(houseRobber_space(nums));
