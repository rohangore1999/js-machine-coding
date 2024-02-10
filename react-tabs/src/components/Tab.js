import React from "react";

const Tab = ({ title, content }) => {
  return (
    <div>
      <div>{title}</div>
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        <div>JSX: {content}</div>
      )}
    </div>
  );
};

export default Tab;
