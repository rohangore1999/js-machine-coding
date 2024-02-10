import React from "react";

// Components
import Tabs from "./components/Tabs";

const App = () => {
  const tabsData = [
    { title: "Tab 1", content: "This is the content for Tab 1." },
    {
      title: "Tab 2",
      content: <p>This is a paragraph inside JSX for Tab 2.</p>,
    },
    { title: "Tab 3", content: "Content for Tab 3 goes here." },
  ];

  return <Tabs tabsData={tabsData} />;
};

export default App;
