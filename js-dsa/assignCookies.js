// https://leetcode.com/problems/assign-cookies/description/
let g = [10, 9, 8, 7],
  s = [5, 6, 7, 8];

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    cnt = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      cnt++;
    }

    j++;
  }
  return cnt;
};

console.log(findContentChildren(g, s));
