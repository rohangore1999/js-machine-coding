import { createContext, useState } from "react";

export const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  // API data of Feature Flag
  const [featureFlagData, setfeatureFlagData] = useState({
    isGpay: true,
    isApplePay: false,
  });

  return (
    <FeatureContext.Provider value={{ featureFlagData }}>
      {children}
    </FeatureContext.Provider>
  );
};
