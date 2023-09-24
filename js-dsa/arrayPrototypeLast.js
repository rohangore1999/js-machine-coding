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
