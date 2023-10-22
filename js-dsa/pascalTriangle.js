// https://leetcode.com/problems/pascals-triangle/description/
const numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const generate = (numRows) => {
  const res = [];

  for (let i = 0; i < numRows; i++) {
    res.push(Array(i + 1));

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === 1) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }

  return res;
};
