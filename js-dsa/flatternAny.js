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

// let key = "";

// const flatternJson = (json) => {
//   let result = {};

//   for (let i in json) {
//     if (typeof json[i] === "object" && !Array.isArray(json[i])) {
//       key += i;
//       const res = flatternJson(json[i]);
//       console.log({ res });
//       result = { ...result, ...res };
//     } else {
//       key += i;
//       result[key] = json[i];
//       console.log({ result });
//     }
//   }
//   return result;
// };

// -------------------------------------------------------

// function flattenJson(json, parentKey = '') {
//   let result = {};

//   for (let key in json) {
//     let newKey = parentKey ? `${parentKey}.${key}` : key;

//     if (typeof json[key] === 'object' && !Array.isArray(json[key])) {
//       const res = flattenJson(json[key], newKey);

//       result = { ...result, ...res };
//     } else {
//       result[newKey] = json[key];
//     }
//   }

//   return result;
// }

// -------------------------------------------------------

function flattenJson(json) {
  let result = {};

  function recurse(current, parentKey = "") {
    for (let key in current) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof current[key] === "object" && !Array.isArray(current[key])) {
        recurse(current[key], newKey);
      } else if (Array.isArray(current[key])) {
        for (let i = 0; i < current[key].length; i++) {
          recurse({ [i]: current[key][i] }, `${newKey}`);
        }
      } else {
        result[newKey] = current[key];
      }
    }
  }

  recurse(json);

  return result;
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
