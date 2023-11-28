let str = ["neet", "code"];

function encode(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res += str[i].length + "#" + str[i]; // 4#neet4#code
  }

  return res;
}

console.log(encode(str));

function decode(str) {
  let res = [],
    i = 0;

  while (i < str.length) {
    j = i;

    while (str[j] !== "#") {
      j++;
    }

    let length = Number(str.slice(i, j));

    res.push(str.slice(j + 1, j + 1 + length));

    i = j + 1 + length;
  }

  return res;
}

let d_str = "4#neet4#code";

console.log(decode(d_str));
