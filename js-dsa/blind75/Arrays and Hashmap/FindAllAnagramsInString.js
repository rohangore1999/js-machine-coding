let s = "abab",
  p = "ab";

const findAnagrams = function (s, p) {
  // maintain hashmap for PCount
  let pCount = {};

  for (let i = 0; i < p.length; i++) {
    pCount[p[i]] = 1 + (pCount[p[i]] || 0);
  }

  let l = 0;
  let sCount = {};
  let res = [];

  for (let r = 0; r < s.length; r++) {
    sCount[s[r]] = 1 + (sCount[s[r]] || 0);

    // if Out of Bond
    if (r - l + 1 > p.length) {
      sCount[s[l]] -= 1;

      if (sCount[s[l]] === 0) {
        delete sCount[s[l]];
      }

      l += 1;
    }

    if (
      Object.keys(pCount).every(
        (key) => sCount.hasOwnProperty(key) && pCount[key] === sCount[key]
      )
    ) {
      res.push(l);
    }
  }

  return res;
};

console.log(findAnagrams(s, p));
