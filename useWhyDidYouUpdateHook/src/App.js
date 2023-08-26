import React, { useState, useEffect, useRef } from "react";
import useWhyDidYouUpdate from "./hooks/useWhyDidYouUpdate";

const Example = (props) => {
  useWhyDidYouUpdate("Example", props);

  return <div>{props.count}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Example fn={() => {}} />

      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

export default App;
