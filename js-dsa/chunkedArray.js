// https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
var chunk = function (arr, size) {
  //   let i = 0;
  //   let chunkedArrResult = [];

  //   while (i < arr.length) {
  //     let chunkedArr = [];

  //     for (var j = 0; j < size; j++) {
  //       if (i + j < arr.length) {
  //         chunkedArr.push(arr[i + j]);
  //       } else {
  //         break;
  //       }
  //     }

  //     chunkedArrResult.push(chunkedArr);

  //     if (i + j < arr.length) {
  //       i = i + j;
  //     } else {
  //       break;
  //     }
  //   }

  //   return chunkedArrResult;

  //  ****** ----------------------------- ******

  //  clean approach

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const res = arr.slice(i, i + size);
    console.log({ res });
    result.push(res);
  }

  return result;
};

const arr = [8, 5, 3, 2, 6];
const size = 2;

const result = chunk(arr, size);

console.log(result);
