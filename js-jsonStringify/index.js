// Clone of JSON.stringify()

/**
 * String
 * 'a' -> "a"
 *
 * Array
 * ['a'] -> "["a"]"
 *
 * Object
 * {'a': 123} -> "{"a": 123}"
 */

const jsonStringify = (obj) => {
  // null and undefined check
  if (obj === null || obj === undefined) {
    return String(obj);
  }

  // Array
  /**
   * String([1,2,3]) -> '1,2,3' // invalid
   * JSON.stringify([1,2,3]) -> '[1,2,3]' // expected
   */

  if (Array.isArray(obj)) {
    let values = obj.map((el) => jsonStringify(el)); // ['1', '2', '3']
    console.log({ values });

    // converting to string
    return `[${values.join(",")}]`; // '[1, 2, 3]'
  }

  // Object
  /**
   * JSON.stringify({'a':123}) -> '{"a":123}'
   */
  if (typeof obj === "object") {
    let keys = Object.keys(obj);
    let keyValues = keys.map((key) => `"${key}":${jsonStringify(obj[key])}`); // ["a":'123', "b":'456'] 
    console.log({keyValues})

    // converting to string
    return `{${keyValues.join(",")}}`;
  }

  // String
  if (typeof obj === "string") {
    // 'a' -> "a"
    return `"${String(obj)}"`;
  }

  return String(obj); // boolean or number
};
