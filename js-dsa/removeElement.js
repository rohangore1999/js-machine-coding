// https://leetcode.com/problems/remove-element/description/
const nums = [3, 3];
const val = 3;

const removeElement = function (nums, val) {
  const occur = nums.filter((num) => num === val);

  for (let i = 0; i < occur.length; i++) {
    let indexOfVal;

    indexOfVal = nums.indexOf(val);
    console.log({ indexOfVal });

    if (indexOfVal === -1) return nums;

    nums.splice(indexOfVal, 1);
    console.log({ nums });
  }

  return nums.length;
};

console.log(removeElement(nums, val));

// Approach putting all nums which are !== val to left [two pointer approach]
// var removeElement = function(nums, val) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         if (nums[left] === val) {
//             nums[left] = nums[right];
//             right--;
//         }
//         else {
//             left++;
//         }
//     }

//     return left;
// };
