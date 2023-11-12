let s = [0, 0, 1],
  k = 1;
// 4

const longRepChr = (s, k) => {
  let l = 0,
    r = 0,
    maxCnt = 0,
    map = {};

  for (let r = 0; r < s.length; r++) {
    if (s[r] in map) {
      map[s[r]] += 1;
    } else {
      map[s[r]] = 1;
    }

    while (r - l + 1 - Object.values(map).sort((a, b) => b - a)[0] > k) {
      map[s[l]] -= 1;
      l += 1;
    }

    maxCnt = Math.max(maxCnt, r - l + 1);
  }
  console.log({ map });
  return maxCnt;
};

console.log(longRepChr(s, k));
