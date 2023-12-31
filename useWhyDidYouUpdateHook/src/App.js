import React, { useState } from "react";
import useWhyDidYouUpdate from "./hooks/useWhyDidYouUpdate";

const Example = (props) => {
  useWhyDidYouUpdate("Example", props);

  return <div>{props.count}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Example count={count} />

      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

export default App;
