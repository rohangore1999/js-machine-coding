import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [minutes, setMinutes] = useState(5);
  const [error, setError] = useState(null);

  console.log({ states });

  return (
    <div style={{ display: "flex" }}>
      <span onClick={() => setMinutes(minutes - 1)}>-</span>
      {minutes}
      <span onClick={() => setMinutes(minutes + 1)}>+</span>
    </div>
  );
};

// ------------------------------------------------------------------
// keeping track of states and calls to useState
const states = [];
let calls = -1;

// custome useState
function useState(defaultValue) {
  const callId = ++calls;
  console.log({ callId });

  if (states[callId]) return states[callId];

  const setDefaultValue = (newValue) => {
    // we assign something
    states[callId][0] = newValue;

    // React re-render the page
    rerenderHook();
  };

  const tuple = [defaultValue, setDefaultValue];

  // keeping track
  states[callId] = tuple;

  return tuple;
}

function rerenderHook() {
  calls = -1; // reset call ID for every re-render
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<App />);
}

rerenderHook();

export default App;
