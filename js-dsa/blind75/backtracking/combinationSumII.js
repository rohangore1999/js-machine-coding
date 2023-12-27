let candidates = [1,1,1],
  target = 2;

// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];

// [
//   [1, 2, 5],
//   [1, 7],
//   [1, 6, 1],
//   [2, 6],
//   [2, 1, 5],
//   [7, 1],
// ];

const combinationSum2 = function (candidates, target) {
  let res = [],
    total = 0,
    temp = [],
    idx = 0;

  candidates.sort();

  const recurComSum2 = (idx, total, res) => {
    if (total === target) {
      res.push(temp.slice());
      return;
    }
    if (idx >= candidates.length || total > target) return;

    temp.push(candidates[idx]);
    recurComSum2(idx + 1, total + candidates[idx], res);
    temp.pop();

    while (
      idx + 1 < candidates.length &&
      candidates[idx] === candidates[idx + 1]
    ) {
      idx++;
    }
    recurComSum2(idx + 1, total, res);
  };

  recurComSum2(idx, total, res);

  return res;
};

console.log(combinationSum2(candidates, target));
