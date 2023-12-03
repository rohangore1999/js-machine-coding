// input
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
// //output
// {
//   name: "Akshay",
//   address_primary_house: "146",
//   address_primary_street_main: "88",
//   address_primary_street_cross: "3rd cross",
// }

const flattenObject = (obj, prefix = "") => {
  let result = {};

  for (let key in obj) {
    let newKey = `${prefix}${key}`;

    if (typeof obj[key] === "object") {
      result = { ...result, ...flattenObject(obj[key], newKey + "_") };
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
};

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

var flattenedUser = flattenObject(user);

console.log(flattenedUser);
