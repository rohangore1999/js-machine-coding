// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
const nums1 = [2, 1];
const nums2 = [1, 2];

const intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      if (res.includes(nums1[i])) res.push(nums1[i]);
      i++;
      j++;
    }
  }

  return res;
};

console.log(intersection(nums1, nums2));
