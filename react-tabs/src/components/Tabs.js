import React, { useState } from "react";

// Component
import Tab from "./Tab";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div>
        {tabsData.map((data, idx) => (
          <>
            <button
              className={activeTab === idx ? "active" : ""}
              onClick={() => setActiveTab(idx)}
            >
              {data.title}
            </button>
          </>
        ))}
      </div>

      <Tab
        title={tabsData[activeTab].title}
        content={tabsData[activeTab].content}
      />
    </>
  );
};

export default Tabs;
