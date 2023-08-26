import React, { useState, useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const prevValue = usePrevious(currentValue);

  return (
    <div>
      <p>Current Value: </p>
      {currentValue}

      <p>Previous Value: </p>
      {prevValue}

      <div>
        <button onClick={() => setCurrentValue(currentValue + 1)}>
          Click me!
        </button>
      </div>
    </div>
  );
};

export default App;
