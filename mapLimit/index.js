// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function. The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

// [1, 2, 3, 4, 5]
// [[1, 2], [3, 4], [5]] of limit = 2
// inputs in a single batch can be processed concurrently / parallely -> async in parallel
// each batch will be processed sequentially -> async in sequence

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

const chop = (arr, limit) => {
  let res = [];

  for (let i = 0; i < arr.length; i = i + limit) {
    res.push(arr.slice(i, i + limit));
  }

  return res;
};

// Function to be implemented
function mapLimit(inputs, limit, iterateeFn, callback) {
  let chopped = chop(inputs, limit);
  let results = [];
  let finalRes;

  finalRes = chopped.map((batch) => {
    console.log({ batch });

    return new Promise((res, rej) => {
      let temp = [];
      batch.forEach((ele) => {
        console.log({ ele });

        iterateeFn(ele, (result) => {
          console.log({ result });
          temp.push(result);

          if (temp.length === batch.length) {
            res(results.push(...temp));

            console.log({ results });
          }
        });
      });
    });
  });

  console.log({ finalRes });

  finalRes.then(callback(results));
}

//example:
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});

const arr = [1, 2, 3, 4, 5],
  limit = 3;
