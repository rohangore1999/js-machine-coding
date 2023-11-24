let s1 = "ab",
  s2 = "eidboaoo";

const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  // creating arrays
  let [s1Count, s2Count] = [Array(26).fill(0), Array(26).fill(0)];
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt() - "a".charCodeAt()] += 1;
    s2Count[s2[i].charCodeAt() - "a".charCodeAt()] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches += 1;
    } else {
      // do nothing
      matches += 0;
    }
  }

  // sliding window
  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;

    // adding from r
    let index = s2[r].charCodeAt() - "a".charCodeAt();
    s2Count[index] += 1;

    if (s1Count[index] === s2Count[index]) {
      matches += 1;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches -= 1;
    }

    // removing from l
    let index_l = s2[l].charCodeAt() - "a".charCodeAt();
    s2Count[index_l] -= 1;

    if (s1Count[index_l] === s2Count[index_l]) {
      matches += 1;
    } else if (s1Count[index_l] - 1 === s2Count[index_l]) {
      matches -= 1;
    }

    l += 1;
  }

  return matches === 26;
};

console.log(checkInclusion(s1, s2));
