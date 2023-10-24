let arr = ["a", "b", "c"];
let temp = ["b", "c"];

for (let a of temp) {
  arr.splice(a, 1);
}

console.log({ arr });
