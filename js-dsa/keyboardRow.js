/*
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
*/

// const findWords = function (words) {
//   fRow = "qwertyuiop".split("");
//   sRow = "asdfghjkl".split("");
//   tRow = "zxcvbnm".split("");

//   const output = [];

//   for (let i of words) {
//     let temp = i;
//     let skip1 = false;
//     let skip2 = false;
//     let skip3 = false;

//     for (let j of i.split("")) {
//       if (fRow.includes(j.toLowerCase())) {
//         skip2 = true;
//         skip3 = true;
//       } else if (sRow.includes(j.toLowerCase())) {
//         skip1 = true;
//         skip3 = true;
//       } else if (tRow.includes(j.toLowerCase())) {
//         skip1 = true;
//         skip2 = true;
//       }
//     }

//     if (!skip1 || !skip2 || !skip3) {
//       output.push(temp);
//     }
//   }

//   return output;
// };

var findWords = function(words) {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};


const res = findWords(["Hello","Alaska","Dad","Peace"]);

console.log(res);
