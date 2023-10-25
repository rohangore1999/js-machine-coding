let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Brute force
// const isValidAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const res = {};

//   for (let str of str1) {
//     if (res[str]) {
//       res[str] += 1;
//     } else {
//       res[str] = 1;
//     }
//   }

//   for (let str of str2) {
//     if (res[str]) {
//       res[str] -= 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// const groupAnagrams = function (strs) {
//   let i = 0,
//     j = 1;

//   let res = [];

//   let temp_res = [];

//   while (i < strs.length && j < strs.length) {
//     if (isValidAnagram(strs[i], strs[j])) {
//       if (!temp_res.length) {
//         temp_res.push(strs[i]);
//       }
//       temp_res.push(strs[j]);

//       j++;
//     } else if (j === strs.length - 1) {
//       res.push(temp_res);

//       for (let str_del = 0; str_del < strs.length; str_del++) {
//         if (temp_res.includes(strs[str_del])) {
//           strs.splice(str_del, 1);
//           str_del--;
//         }
//       }

//       temp_res = [];

//       i = 0;
//       j = 1;
//     } else {
//       j++;
//     }
//   }

//   res.push(strs);

//   return res;
// };

const groupAnagrams = (strs) => {
  let mapping = {};

  for (let word of strs) {
    const anagramStr = word.split("").sort().join("");

    mapping[anagramStr]
      ? mapping[anagramStr].push(word)
      : (mapping[anagramStr] = [word]);

    console.log({ word });
    console.log({ mapping });
  }

  return Object.values(mapping);
};

groupAnagrams(strs);
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
