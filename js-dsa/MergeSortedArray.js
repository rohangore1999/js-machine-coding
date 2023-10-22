// https://leetcode.com/problems/merge-sorted-array/description/
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

const merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    console.log({ i, j });
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);

  return nums1;
};

console.log(merge(nums1, m, nums2, n));
