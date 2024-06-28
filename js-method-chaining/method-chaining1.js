// Using obj

const calculator = {
  total: 0,
  add: function (num) {
    this.total += num;

    return this;
  },
  subtract: function (num) {
    this.total -= num;

    return this;
  },
  divide: function (num) {
    this.total /= num;

    return this;
  },
  multiply: function (num) {
    this.total *= num;

    return this;
  },
};

// Direct accessing the methods
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total); //20

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

// Creating a new instance of the calculator
let myCal = calculator1();
myCal.add(10).subtract(2).divide(2).multiply(5);
console.log(myCal.total());

// --------------------------------------------------------------------------------

// Using Class

class Calculator {
  constructor() {
    this.sum = 0;
  }
}

Calculator.prototype.add = function (num) {
  console.log("this add ", this);
  this.sum += num;

  return this;
};

Calculator.prototype.subtract = function (num) {
  console.log("this sub ", this);
  this.sum -= num;

  return this;
};

let cal = new Calculator();
console.log(cal.add(20).subtract(10));
