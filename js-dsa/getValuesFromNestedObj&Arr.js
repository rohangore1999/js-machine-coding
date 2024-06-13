let obj = [{ a: 1, b: { c: [2, { d: 3 }] } }, [4, 5], "6", "7"];

// [1, 2, 3, 4, 5, "6", "7"];

const getValues = (obj) => {
  let res = [];

  const recurr = (obj) => {
    if (Array.isArray(obj)) {
      for (let i of obj) {
        recurr(i);
      }
    } else if (typeof obj === "object") {
      for (let key in obj) {
        recurr(obj[key]);
      }
    } else {
      res.push(obj);
    }
  };

  recurr(obj);

  return res;
};

console.log(getValues(obj));
