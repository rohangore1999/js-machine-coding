const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// Optimal Soln: TC: O(n)
// Take a way: How to shift pointers
const maxArea = function (height) {
  let l = 0,
    r = height.length - 1;
  let area = 0,
    maxArea = 0;

  while (l < r) {
    // area = width * length(min: because water should not spill)
    area = (r - l) * Math.min(height[r], height[l]);

    maxArea = Math.max(area, maxArea);

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxArea;
};

console.log(maxArea(height));
