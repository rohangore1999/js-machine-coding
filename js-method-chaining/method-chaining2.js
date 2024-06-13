const calculator1 = function () {
  sum = 0;

  return {
    add: function (num) {
      sum += num;

      console.log(this);

      return this;
    },
    subtract: function (num) {
      sum -= num;

      console.log(this);

      return this;
    },
    divide: function (num) {
      sum /= num;

      console.log(this);

      return this;
    },
    multiply: function (num) {
      sum *= num;

      console.log(this);

      return this;
    },
    total: () => console.log(sum),
  };
};

calculator1().add(10).subtract(2).divide(2).multiply(5).total();
