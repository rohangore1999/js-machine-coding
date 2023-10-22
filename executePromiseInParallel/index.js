// Execute async task/functions in parallel
// after all the promises get resolve/reject, execute callback function

// We have to implement a function named asyncParallel in JavaScript that takes an array of async tasks (promises) and a callback function as input,
// executes all the promises in parallel, and then after each promise is settled invokes the callback function with the result.

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return new Promise((res, rej) =>
    setTimeout(() => {
      if (value < 5) {
        rej("Error");
      } else {
        res(value * 1000);
      }
    }, value * 1000)
  );
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

const asyncParallel = async (tasks, cb) => {
  let ress = [];
  let errs = [];

  let completed = 0;

  // map will directly keep on executing
  tasks.map((task) => {
    console.log({ task });
    return task
      .then((val) => {
        console.log("after then");
        console.log({ val });
        ress.push(val);
      }).then(()=>{console.log("then 2")})
      .catch((err) => {
        console.log("after catch");
        console.log({ err });
        errs.push(err);
      })
      .finally(() => {
        console.log("after finally");
        console.log({ task });
        // you're not currently waiting for the
        // array of Promises to resolve before calling cb(errs, ress).

        completed++;

        if (completed >= tasks.length) {
          console.log({ completed });
          cb(errs, ress);
        }
      });
  });
  console.log({ tasks });
};

asyncParallel(tasks, (err, res) => {
  console.log({ err, res });
});
