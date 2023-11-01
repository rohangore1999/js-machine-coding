let s = "()[]{}";

const isValid = function (s) {
  let stack = [];
  let poped;

  if (s.length === 1) return false;

  for (let i of s) {
    if (i === "(" || i === "[" || i === "{") {
      stack.push(i);
    } else {
      if (stack.lenght === 0) return false;

      poped = stack.pop();

      if (i === ")" && poped !== "(") return false;
      if (i === "]" && poped !== "[") return false;
      if (i === "}" && poped !== "{") return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

console.log(isValid(s));
