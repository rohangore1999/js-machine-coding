import React from "react";

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      aria-label={label}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
};

export default Cell;
