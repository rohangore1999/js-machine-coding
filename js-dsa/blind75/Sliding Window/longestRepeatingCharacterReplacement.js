let s = "ABAA",
  k = 0;

const characterReplacement = function (s, k) {
  let count = {};
  let res = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    // incr the count
    count[s[r]] = (count[s[r]] || 0) + 1;

    console.log({ count });

    //check for valid window
    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s[l]] -= 1;
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};

console.log(characterReplacement(s, k));
