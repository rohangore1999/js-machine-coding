import React, { Children } from "react";

const CustomSwitch = ({ children, value }) => {
  const cases = [];
  const defaultCases = [];

  // Mapping over childrens
  Children.forEach(children, (e) => {
    if (e.type.name === "DefaultCase") {
      defaultCases.push(e);
    }

    if (e.type.name === "CustomCase") {
      // check if value contains function
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e);
        }
      }

      if (e.props.value === value) {
        cases.push(e);
      }
    }
  });

  console.log({ cases });

  console.log({ defaultCases });

  if (cases.length > 0) {
    return cases;
  }
  return defaultCases;
};

const CustomCase = ({ children }) => {
  return <>{children}</>;
};

const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

const App = () => {
  return (
    <CustomSwitch value="20">
      <CustomCase value={(e) => e > 10}>
        <div>Hello 20</div>
      </CustomCase>

      <CustomCase value="20">Hello 20</CustomCase>

      <CustomCase value="30">Hello 30</CustomCase>

      <CustomCase value="10">
        <div>Hello 10</div>
      </CustomCase>

      <DefaultCase>Hello 40</DefaultCase>
    </CustomSwitch>
  );
};

export default App;
