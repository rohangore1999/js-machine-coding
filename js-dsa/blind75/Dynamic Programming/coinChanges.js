let coins = [1, 2, 5],
  amount = 11;

var coinChange = function (coins, amount) {
  let dp = Array.from({ length: coins.length }, () =>
    Array(amount + 1).fill(-1)
  );

  const recurr = (idx, amount) => {
    // base case
    if (idx === 0) {
      if (amount % coins[idx] === 0) {
        return amount / coins[idx];
      } else {
        return Infinity;
      }
    }

    if (dp[idx][amount] !== -1) return dp[idx][amount];

    // pick and not pick
    let pick = Infinity;
    if (coins[idx] <= amount) {
      pick = 1 + recurr(idx, amount - coins[idx]);
    }

    let notPick = 0 + recurr(idx - 1, amount);

    return (dp[idx][amount] = Math.min(pick, notPick));
  };

  let ans = recurr(coins.length - 1, amount);
  if (ans === Infinity) return -1;

  return ans;
};

console.log(coinChange(coins, amount));
