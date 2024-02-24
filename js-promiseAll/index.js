// polyfill for promise.all

const slowPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(7);
  }, 10000);
});

const promises = [
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5),
  Promise.resolve(6),
  slowPromise,
];

// output: [2,3,4,5,6]

const promiseAll = (promises) => {
  let output = [];
  let settledPromiseCtr = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((value) => {
          console.log({ output });
          output[idx] = value;
          settledPromiseCtr++;

          if (settledPromiseCtr === promises.length) {
            resolve(output);
          }
        })
        .catch(reject);
    });
  });
};

promiseAll(promises).then((res) => console.log(res));
