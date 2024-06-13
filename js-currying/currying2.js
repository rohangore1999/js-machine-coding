//Returns and stores the inner function.
const curry = () => {
  let sum = 0;

  return function (args) {
    if (args) {
      return (sum += args);
    } else {
      return sum;
    }
  };
};

let sum = curry();
console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12
