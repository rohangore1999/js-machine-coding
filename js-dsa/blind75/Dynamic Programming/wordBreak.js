var wordBreak = function (s, wordDict) {
  let dp = Array(s.length + 1).fill(false);

  // Base case - last idx is always true
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      let slice = s.slice(i, i + word.length);
      console.log({ i, word });
      console.log("slice >>> ", slice);

      if (i + word.length <= s.length && slice === word) {
        dp[i] = dp[i + word.length];
      }

      // if any of the idx is true skip that.
      if (dp[i]) {
        break;
      }
    }
  }
  console.log({ dp });
  return dp[0];
};

let s = "leetcode",
  wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict));
