// https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

const obj = [null, 0, 5, [0], [{ a: null, b: [false, 1] }]];

const compactObject = (obj) => {
  // it is not an array and object but null then return as it is
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // if Array
  if (Array.isArray(obj)) {
    const arrRes = [];

    for (let i of obj) {
      const res = compactObject(i);
      if (res) {
        arrRes.push(res);
      }
    }

    return arrRes;
  }

  // if Object
  const objRes = {};

  for (let i in obj) {
    const res = compactObject(obj[i]);
    if (res) {
      objRes[i] = res;
    }
  }

  return objRes;
};

console.log(compactObject(obj));

// //////////////////////---------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  const resovleArr = (arr) => {
//     const arrRes = [];

//     for (let i of arr) {
//       if (Array.isArray(i)) {
//         const res = resovleArr(i);
//         arrRes.push(res);
//       } else if (typeof i === "object" && i !== null && !Array.isArray(i)) {
//         const res = resovleObj(i);
//         arrRes.push(res);
//       } else if (!!i) {
//         arrRes.push(i);
//       }
//     }

//     return arrRes;
//   };

//   const resovleObj = (obj) => {
//     const objRes = {};

//     for (let i in obj) {
//       if (
//         typeof obj[i] === "object" &&
//         obj[i] !== null &&
//         !Array.isArray(obj[i])
//       ) {
//         const res = resovleObj(obj[i]);
//         objRes[i] = res;
//       } else if (Array.isArray(obj[i])) {
//         objRes[i] = resovleArr(obj[i]);
//       } else if (!!obj[i]) {
//         objRes[i] = obj[i];
//       }
//     }

//     return objRes;
//   };

//   var compactObject = function(obj) {
//       if (Array.isArray(obj)) {
//       return resovleArr(obj);
//     }

//     return resovleObj(obj);
//   };
