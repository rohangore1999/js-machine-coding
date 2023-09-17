import React, { useState } from "react";

// Hooks
import { usePrevious } from "./hooks/usePrevious";

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
        <button onClick={() => setCurrentValue((prevVal) => prevVal + 1)}>
          Click me!
        </button>
      </div>
    </div>
  );
};

export default App;
