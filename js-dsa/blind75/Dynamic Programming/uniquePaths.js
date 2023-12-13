const uniquePaths_SpaceOpt = function (m, n) {
  let prev = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let cur = Array(n).fill(0);

    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        cur[j] = 1;
      } else {
        // Other Case
        let up = 0;
        let left = 0;
        if (i > 0) up = prev[j];
        if (j > 0) left = cur[j - 1];

        cur[j] = up + left; // sum of all unique path
      }
    }

    prev = cur;
  }

  return prev[n - 1];
};

console.log(uniquePaths_SpaceOpt(3, 7));

/**
const uniquePaths_Tabulation = function (m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(1));

  // Base Case
  dp[0][0] = 1;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // Other Case
      let up = dp[i - 1][j];
      let left = dp[i][j - 1];

      dp[i][j] = up + left; // sum of all unique path
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths_Tabulation(3, 7));
*/

/** 
  const uniquePaths = function (m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(-1));

  const recur = (i, j) => {
    // Base Case
    if (i === 0 && j === 0) return 1;

    if (i < 0 || j < 0) return 0; // out of bound

    // Other Case
    let up = recur(i - 1, j);
    let left = recur(i, j - 1);

    return (dp[i][j] = up + left); // sum of all unique path
  };

  return recur(m - 1, n - 1);
};

console.log(uniquePaths(3, 7));
 */
