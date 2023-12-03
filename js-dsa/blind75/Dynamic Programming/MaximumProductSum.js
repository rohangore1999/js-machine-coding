function maxProductSubArray(arr) {
  let n = arr.length; // size of array.

  let pre = 1,
    suff = 1;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre *= arr[i];
    suff *= arr[n - i - 1];
    ans = Math.max(ans, Math.max(pre, suff));
  }

  console.log({ pre, suff });
  return ans;
}

let arr = [-2, 3, -4, -1];
console.log(maxProductSubArray(arr));
