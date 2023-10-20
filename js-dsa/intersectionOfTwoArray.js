const nums1 = [2, 1];
const nums2 = [1, 2];

const intersection = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < nums1.length) {
    if (nums1[i] === nums2[j] && !res.includes(nums1[i])) {
      res.push(nums1[i]);
      i++;
      j = 0;
    } else if (j === nums2.length - 1) {
      i++;
      j = 0;
    } else j++;
  }

  return res;
};

const intersection_otp = function (nums1, nums2) {
  let s1 = new Set(nums1);

  return [...new Set(nums2.filter((n) => s1.has(n)))];
};

console.log(intersection(nums1, nums2));
