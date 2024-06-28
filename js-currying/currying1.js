const sum = (...args) => {
  let storageArgs = args;

  if (storageArgs.length === 4) {
    return storageArgs.reduce((acc, curr) => acc + curr, 0);
  }

  const temp = function (...args1) {
    storageArgs.push(...args1);

    if (storageArgs.length === 4) {
      return storageArgs.reduce((acc, curr) => acc + curr, 0);
    }

    return temp;
  };

  // if more that one call ()() - First time
  return temp;
};

// max args limit is 4
console.log(sum(1, 2, 3, 4));
console.log(sum(1)(2)(3)(4));
console.log(sum(1, 2)(3, 4));
console.log(sum(1, 2, 3)(4));
console.log(sum(1)(2, 3, 4));
