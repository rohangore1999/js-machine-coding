const isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome(" "));
