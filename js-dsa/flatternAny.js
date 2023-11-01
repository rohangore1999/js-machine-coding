//  json-
const json = {
  a: {
    b: {
      c: 1,
    },
  },
};

// output flat json-
// {"a.b.c": 1, "d.0": 45, "d.1": 78, "z": true}

let key = "";

const flatternJson = (json) => {
  let result = {};

  for (let i in json) {
    if (typeof json[i] === "object" && !Array.isArray(json[i])) {
      key += i;
      const res = flatternJson(json[i]);
      console.log({ res });
      result = { ...result, ...res };
    } else {
      key += i;
      result[key] = json[i];
      console.log({ result });
    }
  }
  return result;
};

// -------------------------------------------------------

//  json-
// const json = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// d: [45, 78],
// z: true
// };

// output flat json-
// {"a.b.c": 1, "d.0": 45, "d.1": 78, "z": true}

// const flatternJson = (json, parentKey = "") => {
//   let result = {};

//   for (let key in json) {
//     let newKey = parentKey ? `${parentKey}.${key}` : key;

//     if (typeof json[key] === "object" && !Array.isArray(json[key])) {
//       const res = flatternJson(json[key], newKey);

//       result = { ...result, ...res };
//     } else {
//       result[newKey] = json[key];
//     }
//   }

//   return result;
// };

console.log(flatternJson(json));
