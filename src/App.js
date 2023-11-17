import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();
const addTodo = () => {
  const newTodo = todoInputRef.current.value;
  if (newTodo.trim() !== '') {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoInputRef.current.value = '';
  }
};

const removeTodo = (index) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
};
  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-container">
        <input type="text" ref={todoInputRef} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
