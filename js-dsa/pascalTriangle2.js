const rowIndex = 3;
// Output: [1,3,3,1]

const getRow = function (rowIndex) {
  let res = [];

  for (let i = 0; i <= rowIndex; i++) {
    res.push(Array(i + 1));
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }

  return res[rowIndex];
};

getRow(rowIndex);
