// https://leetcode.com/problems/third-maximum-number/description/
const nums = [1, 2, 2, 5, 3, 5];

const thirdMax = function (nums) {
  // Initialise with lowest negative number
  let fMax = -Number.MAX_SAFE_INTEGER,
    sMax = -Number.MAX_SAFE_INTEGER,
    tMax = -Number.MAX_SAFE_INTEGER;

  for (i of nums) {
    if (i > fMax) {
      tMax = sMax;
      sMax = fMax;
      fMax = i;
    } else if (i > sMax && i !== fMax) {
      tMax = sMax;
      sMax = i;
    } else if (i > tMax && i !== sMax && i !== fMax) {
      tMax = i;
    }
  }

  if (tMax === -Number.MAX_SAFE_INTEGER) {
    return fMax;
  }

  return tMax;
};

console.log(thirdMax(nums));
