/**
 * promisePool func defination
 * 1. accept array of functions
 * 2. no. of promise to be executed at same time.
 */

const promisePool = function (functions, n) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let inProgress = 0;

    function callback() {
      // Base case
      if (i === functions.length && inProgress === 0) {
        // i is out of bond and no promise is inProgress, so resolve it
        resolve();
      }

      // i is in bound and inProgress is within limit, then we can execute more
      while (i < functions.length && inProgress < n) {
        // executing that function and incrementing i
        functions[i++]().then(() => {
          inProgress--; // after resolving, decrement inProgress

          callback(); // call recursively
        });

        // increase inProgress
        inProgress++;
      }
    }

    callback();
  });
};

// Start time
const startTime = performance.now();

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(() => {
  // End time
  const endTime = performance.now();
  const totalTime = endTime - startTime;
  console.log(`Total execution time: ${totalTime}ms`); // should be approximately 900ms
});
