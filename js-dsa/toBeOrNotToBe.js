var expect = function (val) {
  return (obj = {
    toBe: (innerVal) => {
      if (val === innerVal) {
        return true;
      }
      throw new Error("Not equal");
    },
    notToBe: (innerVal) => {
      if (val !== innerVal) {
        return true;
      }
      throw new Error("Not equal");
    },
  });
};

try {
  const res = expect(5).toBe(6);
  console.log(res);
} catch (error) {
  console.log(error);
}
