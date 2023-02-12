import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a new todo"
        onChange={handleChange}
        value={value}
        autoFocus
        required
        className="todo-input"
      />

      <button type="submit" className="todo-btn">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
