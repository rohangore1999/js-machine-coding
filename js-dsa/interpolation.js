let s = "My name is {{name}} and I'm from {{city}}.";
let data = { name: "Rohan", city: "New York" };

const stringInterpolation = (s, data) => {
  let res = s.split(" ");

  for (let i = 0; i < res.length; i++) {
    if (res[i].includes("{{")) {
      let key = res[i].replace(/[^a-z]/gi, "");

      res[i] = data[key];
    }
  }

  return res.join(" ");
};

console.log(stringInterpolation(s, data));

function replacePlaceholders(input, data) {
  // Iterate over each key in the data object
  Object.keys(data).forEach((key) => {
    const placeholder = `{{${key}}}`;
    const value = data[key];

    input = input.split(placeholder).join(value);
  });

  return input;
}

let output = replacePlaceholders(s, data);
console.log(output);
