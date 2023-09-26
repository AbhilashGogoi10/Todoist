import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSumbit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Write todo"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
