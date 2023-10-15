// Execute async task/functions in parallel
// after all the promises get resolve/reject, execute callback function


// We have to implement a function named executeParallel in JavaScript that takes an array of async tasks (promises) and a callback function as input, 
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

const asyncParallel = (tasks, cb) => {
  let ress = [];
  let errs = [];

  let completed = 0;

  tasks.map((task) =>
    task
      .then((val) => {
        console.log({ val });
        ress.push(val);
      })
      .catch((err) => {
        console.log({ err });
        errs.push(err);
      })
      .finally(() => {
        console.log({ completed });
        completed++;

        if (completed >= tasks.length) {
          cb(errs, ress);
        }
      })
  );
};

asyncParallel(tasks, (err, res) => {
  console.log({ err, res });
});
