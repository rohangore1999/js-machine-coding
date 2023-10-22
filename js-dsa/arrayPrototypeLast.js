// https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript
Array.prototype.last = function () {
  if (!this.slice(-1).length) {
    console.log(-1);

    return;
  }

  const [res] = this.slice(-1);

  console.log(res);
};

const arr = [null, {}, 3];
arr.last(); // 3
