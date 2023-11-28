let nums = [2, 3, 2];

const houseRobI = () => {
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

const houseRobI_Tab = (nums) => {
  let dp = Array(nums.length).fill(-1);

  //base case
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // pick
    let pick = nums[i];
    if (i > 1) {
      pick += dp[i - 2];
    }

    // not pick
    let notPick = 0 + dp[i - 1];

    dp[i] = Math.max(pick, notPick);
  }

  console.log({ dp });
  return dp[nums.length - 1];
};

const houseRobI_Space_OPT = (nums) => {
  let prev = nums[0],
    prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    // pick
    let pick = nums[i];
    if (i > 1) {
      pick += prev2;
    }

    // not pick
    let notPick = 0 + prev;

    curri = Math.max(pick, notPick);

    prev2 = prev;
    prev = curri;
  }

  return prev;
};

var rob = function (nums) {
  let temp1 = [],
    temp2 = [];

  // if one element
  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.length - 1) {
      temp1.push(nums[i]);
    }
    if (i !== 0) {
      temp2.push(nums[i]);
    }
  }

  return Math.max(houseRobI_Space_OPT(temp1), houseRobI_Space_OPT(temp2));
};

console.log(rob(nums));
