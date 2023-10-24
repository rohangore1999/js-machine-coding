let s = "rat",
  t = "car";

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj_S = {};

  // creating obj of s
  for (let i of s) {
    if (obj_S[i]) {
      obj_S[i] += 1;
    } else {
      obj_S[i] = 1;
    }
  }

  for (let j of t) {
    if (obj_S[j]) {
      obj_S[j] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram(s, t));
