Object.deepCopy = function (obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitives and null as-is
  }

  let copy;

  // Handle arrays
  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = Object.deepCopy(obj[i]);
    }
    return copy;
  }

  // Handle objects
  copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = Object.deepCopy(obj[key]);
    }
  }

  return copy;
};

// Example usage
const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: [45, 78],
};

const copiedJson = Object.deepCopy(json);
let temp = { ...json };
console.log(copiedJson === json); // false (deep copy)
console.log(temp == json); // false (shallow copy)
