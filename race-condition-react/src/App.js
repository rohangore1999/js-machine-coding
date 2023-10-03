import React, { useState, useEffect } from "react";

const getRandomTime = () => Math.floor(Math.random() * 3000);

function getRandomData(data) {
  return new Promise((res, rej) => {
    const time = getRandomTime();
    setTimeout(() => {
      res(data);
    }, time);
  });
}

export default App = () => {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  useEffect(() => {
    let flag = true;
    getRandomData(searchText).then((val) => {
      if (flag) {
        setResult(val);
      }
    });

    return () => {
      flag = false;
    };
  }, [searchText]);

  return (
    <div className="App">
      <input
        name="search"
        placeholder="search"
        value={searchText}
        onChange={onChange}
      />
      <div>{result}</div>
    </div>
  );
};
