var subsetsWithDup = function (nums) {
  let res = [],
    temp = [],
    idx = 0;
  let numsSet = nums;

  const recurSubsetWithDup = (idx, temp, res) => {
    if (idx >= numsSet.length) {
      res.push(temp.slice());

      return;
    }

    temp.push(numsSet[idx]);
    recurSubsetWithDup(idx + 1, temp, res);

    temp.pop();
    recurSubsetWithDup(idx + 1, temp, res);
  };

  recurSubsetWithDup(idx, temp, res);

  console.log(...res);
  let r = new Set(...res);
  console.log({ r });
};

console.log(subsetsWithDup([1, 2, 2]));
