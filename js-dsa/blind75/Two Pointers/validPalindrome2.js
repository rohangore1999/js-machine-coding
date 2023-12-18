let s = "acccc";

const validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      let [skipL, skipR] = [s.slice(l + 1, r + 1), s.slice(l, r)];

      console.log({ skipL, skipR });

      return (
        skipL === skipL.split("").reverse().join("") ||
        skipR === skipR.split("").reverse().join("")
      );
    }

    l++;
    r--;
  }
  return true;
};

console.log(validPalindrome(s));
