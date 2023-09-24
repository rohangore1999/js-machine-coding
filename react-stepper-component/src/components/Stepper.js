import React, { useState } from "react";

// Styles
import "./Stepper.css";

const Stepper = ({ list }) => {
  const stepDivs = [];
  const stepSize = list.length;

  const [currentStep, setCurrentStep] = useState(0);

  for (let i = 0; i < stepSize; i++) {
    stepDivs.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`step ${currentStep >= i ? "active" : ""}`}
      >
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (stepSize - 1)) * currentStep;

  //   const handleNext = () => {
  //     if (currentStep < stepSize - 1) {
  //       setCurrentStep(currentStep + 1);
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (currentStep > 0) {
  //       setCurrentStep(currentStep - 1);
  //     }
  //   };

  const onNext = () => {
    console.log(currentStep);
    if (currentStep < stepSize - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="step-container">
        <div className="steps-wrapper">{stepDivs}</div>

        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>

      {/* <div className="btn-wrapper">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div> */}

      <div className="content">
        {/* React.cloneElement will take an Obj (as list[currentStep] is as jsx obj) and extent the properties with onPrev and onNext to that JSX so that they can extract and use those props*/}
        {React.cloneElement(list[currentStep], { onPrev, onNext })}
      </div>
    </>
  );
};
export default Stepper;
