//  json-
// const json = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// };

// output flat json-
// {"a.b.c": 1, "d.0": 45, "d.1": 78, "z": true}

function flattenJson(json) {
  let res = {};

  const recurr = (obj, prefixKey = "") => {
    for (let key in obj) {
      let resKey = prefixKey ? prefixKey + "." + key : key;

      if (Array.isArray(obj[key])) {
        let arrObj = { ...obj[key] }; // [45, 78] => {0: 45, 1: 78}

        recurr(arrObj, resKey);
      } else if (typeof obj[key] === "object") {
        recurr(obj[key], resKey);
      } else {
        res[resKey] = obj[key];
      }
    }
  };

  recurr(json);

  return res;
}

const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: [45, 78],
  z: true,
};

const flattened = flattenJson(json);
console.log(flattened);
