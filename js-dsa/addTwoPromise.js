var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);

  return value1 + value2;
};

(async () => {
  const res = await addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(5), 6000))
  );
  console.log(res);
})();
