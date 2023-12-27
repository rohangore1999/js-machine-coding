const s = "axc",
  t = "ahbgdc";

const isSubsequence = function (text1, text2) {
  let dp = Array.from({ length: text1.length }, () =>
    Array(text2.length).fill(-1)
  );

  const recurr = (idx1, idx2) => {
    // Base case
    if (idx1 < 0 || idx2 < 0) return 0;

    if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];

    // Matches or not Matches
    if (text1[idx1] === text2[idx2]) {
      return (dp[idx1][idx2] = 1 + recurr(idx1 - 1, idx2 - 1));
    }

    return (dp[idx1][idx2] =
      0 + Math.max(recurr(idx1 - 1, idx2), recurr(idx1, idx2 - 1)));
  };

  let res = recurr(text1.length - 1, text2.length - 1);

  return res === text1.length;
};

console.log(isSubsequence(s, t));
