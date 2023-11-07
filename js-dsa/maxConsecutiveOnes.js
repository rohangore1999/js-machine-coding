// https://leetcode.com/problems/max-consecutive-ones/description/
const nums = [1, 1, 0, 1, 1, 1];

// Slding window
// const len=nums.length
// let left=0, right=0, max=0
// while(right<len){

//     if(nums[right]==1){
//         max=Math.max(right-left+1, max)
//         right++

//     }
//     else if(nums[right]!=1) {
//         right++
//         left = right
//     }

// }
// return(max)

// Using kadane's algo
const findMaxConsecutiveOnes = function (nums) {
  let sum = 0,
    maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    maxSum = Math.max(sum, maxSum);

    if (nums[i] === 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(findMaxConsecutiveOnes(nums));
