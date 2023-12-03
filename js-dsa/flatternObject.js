// // input
// var user = {
//   name: "Akshay",
//   address: {
//     primary: {
//       house: "146",
//       street: {
//         main: "88",
//         cross: "3rd cross",
//       },
//     },
//   },
// };
// //output
// {
//   name: "Akshay",
//   address_primary_house: "146",
//   address_primary_street_main: "88",
//   address_primary_street_cross: "3rd cross",
// }

var user = {
  name: "Akshay",
  address: {
    primary: {
      house: "146",
      street: {
        main: "88",
        cross: "3rd cross",
      },
    },
  },
};

const flattenObject = (obj) => {
  let result = {};
  let newKey = "";

  const recurr = (obj, keyName = "") => {
    for (let key in obj) {
      newKey = keyName + key;

      if (typeof obj[key] === "object") {
        newKey += "_";

        recurr(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    }

    return result;
  };

  return recurr(obj);
};

console.log(flattenObject(user));
