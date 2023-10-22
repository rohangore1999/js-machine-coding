// https://leetcode.com/problems/plus-one/description/
const digits = [1, 9];

// const plusOne = function (digits) {
//   let strDig = "";
//   let result = [];

//   for (let i of digits) {
//     strDig += i;
//   }

//   const bigIntValue = BigInt(strDig);
//   const res = bigIntValue + 1n;
//   console.log({res})
//   console.log(res.split(""))
//   //   const strDigArr = (BigInt(strDig) + 1n).toString().split("");

//   for (let i of strDigArr) {
//     result.push(BigInt(i));
//   }

//   console.log(result);
// };

const plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

console.log(plusOne(digits));
