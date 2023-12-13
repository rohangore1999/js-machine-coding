let text1 = "abcde",
  text2 = "ace";

const lcs_tabulation = (text1, text2) => {
  let dp = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1).fill(0)
  );

  for (let idx1 = 0; idx1 < text1.length; idx1++) {
    for (let idx2 = 0; idx2 < text2.length; idx2++) {
      //base case i==0 || j==0; return 0
      dp[0][idx2] = 0;
      dp[idx1][0] = 0;
    }
  }

  for (let idx1 = 1; idx1 <= text1.length; idx1++) {
    for (let idx2 = 1; idx2 <= text2.length; idx2++) {
      // Matches or not Matches
      if (text1[idx1 - 1] === text2[idx2 - 1]) {
        dp[idx1][idx2] = 1 + dp[idx1 - 1][idx2 - 1];
      } else {
        dp[idx1][idx2] = 0 + Math.max(dp[idx1 - 1][idx2], dp[idx1][idx2 - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

console.log(lcs_tabulation(text1, text2));

// const lcs = (text1, text2) => {
//   let dp = Array.from({ length: text1.length }, () =>
//     Array(text2.length).fill(-1)
//   );

//   const recurr = (idx1, idx2) => {
//     // Base case
//     if (idx1 < 0 || idx2 < 0) return 0;

//     if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];

//     // Matches or not Matches
//     if (text1[idx1] === text2[idx2]) {
//       return (dp[idx1][idx2] = 1 + recurr(idx1 - 1, idx2 - 1));
//     }

//     return (dp[idx1][idx2] =
//       0 + Math.max(recurr(idx1 - 1, idx2), recurr(idx1, idx2 - 1)));
//   };

//   return recurr(text1.length - 1, text2.length - 1);
// };

// console.log(lcs(text1, text2));
