//  json-
// const json = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: [45, 78],
//   z: true,
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

// -----------------------------------------------------------------------

const organisation = {
  abcd: {
    name: "1",
    salary: 1,
  },
  development: [
    {
      name: "2",
      salary: 2,
    },
    {
      name: "3",
      salary: 3,
    },
  ],
  finance: {
    abcde: {
      name: "4",
      salary: 4,
    },
    fghi: [
      {
        name: "5",
        salary: 5,
      },
      {
        name: "6",
        salary: 6,
      },
    ],
  },
};

const calculateTotalSalary = (organisation) => {
  let totalSalary = 0;

  const recurr = (obj) => {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        let arrObj = { ...obj[key] };

        recurr(arrObj);
      } else if (typeof obj[key] === "object") {
        if ("salary" in obj[key]) {
          totalSalary += obj[key].salary;
        } else {
          for (let innerKey in obj[key]) {
            let tempObj = obj[key][innerKey];

            recurr([tempObj]);
          }
        }
      }
    }
  };

  recurr(organisation);

  return totalSalary;
};

console.log(calculateTotalSalary(organisation));

// ----------------------------------------------------------------------------------

const obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const deepFilter = (inputObject, callbackFilterFn) => {
  const recur = (obj) => {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        // todo
      } else if (typeof obj[key] === "object") {
        recur(obj[key]);

        if (Object.keys(obj[key]).length === 0) {
          // delete obj
          delete obj[key];
        }
      } else if (!callbackFilterFn(obj[key])) {
        console.log(obj[key]);
        delete obj[key];
      }
    }
  };
  recur(inputObject);

  return inputObject;
};

const filter = (n) => n >= 0;

console.log(deepFilter(obj, filter));
// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }

// ------------------------------------------------------------------

let input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
    F: (a, b, c) => a + b + c,
    G: {
      H: (a, b, c) => a + b + c,
      I: (a, b, c) => a + b + c,
    },
  },
};

const compute = (input, a, b, c) => {
  const output = {};

  for (let key in input) {
    if (typeof input[key] === "object") {
      output[key] = compute(input[key], a, b, c);
    } else {
      output[key] = input[key](a, b, c);
    }
  }

  return output;
};

console.log(compute(input, 1, 1, 1));
