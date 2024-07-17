const deepEqual = (o1, o2) => {
  // null check as typeof null is object
  if (o1 === null || o2 === null) {
    return o1 === o2;
  }

  // check for both objs
  if (typeof o1 !== typeof o2) {
    return false;
  }

  // check for primitive
  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  // check of an Array
  if (Array.isArray(o1) || Array.isArray(o2)) {
    // if any one is Array we need to fall in this IF block

    // 1: [undefined] {'a':1} // give true, so convert to string and compare
    if (String(o1) !== String(o2)) {
      // check for [] and {}
      return false;
    }

    // 2. Both are [] and []; looping over array ele.
    for (let i = 0; i < o1.length; i++) {
      if (!deepEqual(o1[i], o2[i])) {
        // recursively calling with element
        return false;
      }
    }
  } else {
    // Check of Objects

    // 1. Checking for keys
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }

    // 2. Iterate over object as both have same length of keys
    for (let key in o1) {
      if (!deepEqual(o1[key], o2[key])) {
        return false;
      }
    }
  }

  return true;
};

const deepEquals = (valueOne, valueTwo) => {
  // 1) Checking for primitive data types
  if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
    // not an array and objs
    //checking for number
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne !== "string";
    const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo !== "string";

    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo; // for Strings
  }

  // If both the types are different: eg number and Obj etc.
  if (typeof valueOne !== typeof valueTwo) return false;

  // If Null: as typeof null is an object
  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;

  // To check the reference of the values
  if (valueOne === valueTwo) return true;

  // 2) Checking for Object(array and {})
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    // checking the length of an array
    if (valueOne.length !== valueTwo.length) return false;

    // iterate over it
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }

    return true;
  }

  // If one is {} and other is []
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  // Both are Objects
  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  // checking for length
  if (valueOneKeys.length !== valueTwoKeys.length) return false;

  // checking deepEquals for keys
  if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

  // As keys inside an object may not be in same order so can't directly so the Object.entries check
  for (let i = 0; i < valueOneKeys.length; i++) {
    const key = valueOneKeys[i];
    const valueOneValues = valueOneKeys[key];
    const valueTwoValues = valueTwoKeys[key];

    if (!deepEquals(valueOneValues, valueTwoValues)) return false;
  }

  return true;
};

console.log(deepEquals(1, 1));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals([], []));
console.log(deepEquals({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 2 } }));
const array = new Array(100000).fill(1);
console.log(deepEquals(array, array));

console.log("\nFalse: \n");

console.log(deepEquals(1, ""));
console.log(deepEquals(NaN, "NaN"));
console.log(deepEquals([], "[]"));
console.log(deepEquals({ a: 1, obj: { b: 2 } }, {}));
console.log(deepEquals({ a: undefined, b: 2 }, { b: 2, c: 3 }));
