let numbers = [2,7,11,15], target = 9

var twoSum = function (numbers, target) {
  let res = {};

  for (let i = 0; i < numbers.length; i++) {
    let rem = target - numbers[i];

    if (rem in res) {
      return [res[rem], i + 1];
    }

    res[numbers[i]] = i + 1;
  }
};

console.log(twoSum(numbers, target));
