let mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;

const matrixReshape = function (mat, r, c) {
  const row = mat.length;
  const col = mat[0].length;

  if (r * c !== row * col) {
    return mat;
  }

  let res_mat = new Array(r).fill(0).map(() => new Array(c).fill(0));

  let output_row = 0,
    output_col = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res_mat[output_row][output_col] = mat[i][j];
      output_col++;

      if (output_col === c) {
        output_col = 0;
        output_row++;
      }
    }
  }

  return res_mat;
};

console.log(matrixReshape(mat, r, c));
