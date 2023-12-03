let array = [{ id: "1" }, { id: "1" }, { id: "2" }];

const fn = function (item) {
  return item.id;
};

// { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }

const group = (array, fn) => {
  let result = {};

  for (let arr of array) {
    const fnRes = fn(arr);

    if (!result[fnRes]) {
      result[fnRes] = [];
    }

    result[fnRes].push(arr);
  }

  return result;
};

console.log(group(array, fn));
