let arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;

const numOfSubarrays = function (arr, k, threshold) {
  let res = 0,
    l = 0,
    currSum = 0;

  for (let r = 0; r < arr.length; r++) {
    currSum += arr[r];

    if (r - l + 1 > k) {
      currSum -= arr[l];
      l++;
    }

    if (r - l + 1 === k) {
      let avg = currSum / k;
      if (avg >= threshold) {
        res += 1;
      }
    }
  }

  return res;
};

console.log(numOfSubarrays(arr, k, threshold));
