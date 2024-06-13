// Using obj

// const calculator = {
//   total: 0,
//   add: function (num) {
//     this.total += num;

//     return this;
//   },
//   subtract: function (num) {
//     this.total -= num;

//     return this;
//   },
//   divide: function (num) {
//     this.total /= num;

//     return this;
//   },
//   multiply: function (num) {
//     this.total *= num;

//     return this;
//   },
// };

// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total); //20

// --------------------------------------------------------------------------------

// Using Function
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
    total: () => sum,
  };
};

let myCal = calculator1();
myCal.add(10).subtract(2).divide(2).multiply(5);
console.log(myCal.total());
