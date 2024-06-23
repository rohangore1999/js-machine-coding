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
