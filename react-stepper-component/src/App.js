import React from "react";

// Components
import Stepper from "./components/Stepper";

const Example1 = ({ onPrev, onNext }) => {
  return (
    <div>
      <>Content from Component 1</>

      <div className="btn-wrapper">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
const Example2 = ({ onPrev, onNext }) => {
  return (
    <div>
      <>Content from Component 2</>

      <div className="btn-wrapper">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
const Example3 = ({ onPrev, onNext }) => {
  return (
    <div>
      <>Content from Component 3</>

      <div className="btn-wrapper">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
const Example4 = ({ onPrev, onNext }) => {
  return (
    <div>
      <>Content from Component 4</>

      <div className="btn-wrapper">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Stepper list={[<Example1 />, <Example2 />, <Example3 />, <Example4 />]} />
  );
};

export default App;
