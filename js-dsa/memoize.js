function memoize(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const res = fn.apply(this, args);
    cache[key] = res;

    console.log(cache);

    return res;
  };
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1

// const args = [ 2, 3 ]
// const cache = { '2,3': 5 }

// console.log(args in cache)
