const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];

const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

const join = function (arr1, arr2) {
  //   ############################################################
  // **********************  1st Approach **********************

  //   let result = {};

  //   arr1.forEach((item) => {
  //     result[item.id] = item;
  //   });

  //   arr2.forEach((item) => {
  //     // if key already present
  //     if (result[item.id]) {
  //       Object.keys(item).forEach((key) => {
  //         result[item.id][key] = item[key];
  //       });
  //     } else {
  //       result[item.id] = item;
  //     }
  //   });

  //   console.log({ result });

  //   console.log(Object.values(result));

  //   ############################################################
  // **********************  2nd Approach **********************
  const combinedArray = arr1.concat(arr2);

  let mergedArray = {};

  combinedArray.forEach((item) => {
    if (!mergedArray[item.id]) {
      mergedArray[item.id] = item;
    } else {
      mergedArray[item.id] = { ...mergedArray[item.id], ...item };
    }
  });

  const result = Object.values(mergedArray).sort((a, b) => a - b);

  console.log({ result });
};

join(arr1, arr2);
