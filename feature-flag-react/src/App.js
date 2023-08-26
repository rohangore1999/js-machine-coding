import React, { useContext } from "react";

// Context
import { FeatureContext, FeatureProvider } from "./contexts/featureProvider";

// Component
const FeatureLayout = ({ value, children }) => {
  const { featureFlagData } = useContext(FeatureContext);

  console.log(featureFlagData);
  console.log(value);

  return featureFlagData[value] ? children : null;
};

// Component
const ExampleComponent = () => {
  return (
    <>
      <FeatureLayout value="isGpay">Pay via GOOGLE PAY</FeatureLayout>
      <FeatureLayout value="isApplePay">Pay via APPLE PAY</FeatureLayout>
    </>
  );
};

const App = () => {
  return (
    <FeatureProvider>
      <ExampleComponent />
    </FeatureProvider>
  );
};

export default App;
