const Action = ({ type, handleClick }) => {
  return (
    <div
      style={{
        padding: "5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {type}
    </div>
  );
};

export default Action;
