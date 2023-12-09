function memoize(expensiveFn) {
  //Implement this
  let cache = {};

  return function (year, fn) {
    // console.log({ cache });
    if (year in cache) {
      fn(cache[year]);
    } else {
      expensiveFn(year, (r) => {
        cache[year] = r;

        fn(cache[year]);
      });
    }
  };
}

function expensiveFn(year, callbackFn) {
  // in expensiveFn's callback we are passing "movies list in " + year"
  setTimeout(() => callbackFn("movies list in " + year), 30);
}

const memoizedExpensiveFn = memoize(expensiveFn);

let t1 = performance.now();
memoizedExpensiveFn(2010, (result) => {
  let t2 = performance.now();
  console.log(`Response received: ${result} in ${t2 - t1}ms`);
});
// output: Response received: "movies list in 2010" in 30ms

setTimeout(() => {
  t1 = performance.now();
  memoizedExpensiveFn(2011, (result) => {
    let t2 = performance.now();
    console.log(`Response received: ${result} in ${t2 - t1}ms`);
  });
}, 100);
// output: Response received: "movies list in 2011" in 30ms

setTimeout(() => {
  t1 = performance.now();
  memoizedExpensiveFn(2010, (result) => {
    let t2 = performance.now();
    console.log(`Response received: ${result} in ${t2 - t1}ms`);
  });
}, 100);
// output: Response received: "movies list in 2010" in 0ms
