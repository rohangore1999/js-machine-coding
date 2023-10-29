let s = "abcabcbb";

const lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    d = {},
    maxLen = 0,
    len = 0;

  while (j < s.length) {
    if (!d[s[j]]) {
      d[s[j]] = 1;
    } else {
      len = j - i;
      maxLen = Math.max(len, maxLen);

      d = {};
      i = j;
    }

    j++;
  }

  len = j - i;
  maxLen = Math.max(len, maxLen);

  if (maxLen === 0) return s.length;
  return maxLen;
};

const lengthOfLongestSubstring_optmial = function (s) {
  let charSet = new Set();
  let l = 0,
    maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    // if duplicate
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l += 1;
    }

    charSet.add(s[r]);
    maxLen = Math.max(maxLen, r - l + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring_optmial(s));
