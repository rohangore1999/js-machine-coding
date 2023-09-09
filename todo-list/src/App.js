import React, { useRef, useState } from "react";

// Components
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleChange = (e) => {
    const { code } = e;

    if (code === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, isComplete: false, id: Date.now() },
      ]);

      inputRef.current.value = "";
    }
  };

  const handleTodoComplete = (id) => {
    const updateTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updateTodoList);
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateText = (id, updateText) => {
    const updateTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = updateText;
      }

      return todo;
    });

    setTodos(updateTodoList);
  };

  return (
    <div className="main">
      <input
        ref={inputRef}
        type="text"
        className="input-text"
        onKeyDown={handleChange}
      />

      <TodoList
        todos={todos}
        handleTodoComplete={handleTodoComplete}
        handleTodoDelete={handleTodoDelete}
        handleUpdateText={handleUpdateText}
      />
    </div>
  );
};

export default App;
