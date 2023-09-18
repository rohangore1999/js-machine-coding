var createCounter = function (init) {
  let resetValue = init;

  return (obj = {
    increment: () => {
      return (init += 1);
    },
    decrement: () => {
      return (init -= 1);
    },
    reset: () => {
        // while reseting we should also reset init
      init = resetValue;
      return init;
    },
  });
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
