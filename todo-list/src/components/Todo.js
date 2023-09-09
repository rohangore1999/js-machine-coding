import React, { useState } from "react";

// Styles
import "../index.css";

const Todo = ({
  todo,
  handleTodoComplete,
  handleTodoDelete,
  handleUpdateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  return (
    <div className="todo-container">
      <div
        className={`checked ${todo.isComplete && "strike"}`}
        onClick={() => handleTodoComplete(todo.id)}
      >
        {todo.isComplete && <span>&#10003;</span>}
      </div>

      <div
        className={`todo-text ${todo.isComplete && "strike"}`}
        onDoubleClick={() => setEdit(true)}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              handleUpdateText(todo.id, editText);
            }}
          />
        ) : (
          todo.text
        )}
      </div>

      <div className="cross" onClick={() => handleTodoDelete(todo.id)}>
        &#10060;
      </div>
    </div>
  );
};

export default Todo;
