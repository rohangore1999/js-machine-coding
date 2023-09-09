import React from "react";

// Components
import Todo from "./Todo";

const TodoList = ({
  todos,
  handleTodoComplete,
  handleTodoDelete,
  handleUpdateText,
}) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          handleTodoComplete={handleTodoComplete}
          handleTodoDelete={handleTodoDelete}
          handleUpdateText={handleUpdateText}
        />
      ))}
    </>
  );
};

export default TodoList;
