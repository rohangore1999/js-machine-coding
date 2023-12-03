let s = "babad";

var longestPalindrome = function (s) {
  let res = "",
    resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // for odd length
    let l = i,
      r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // its a palindrom
      if (r - l + 1 > resLen) {
        // checking if the current string is longer that prev
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }

      // expand l and r
      l -= 1;
      r += 1;
    }

    // for even length
    l = i, r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // its a palindrom
      if (r - l + 1 > resLen) {
        // checking if the current string is longer that prev
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }

      // expand l and r
      l -= 1;
      r += 1;
    }
  }

  return res;
};

console.log(longestPalindrome(s));
