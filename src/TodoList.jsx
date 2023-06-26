import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setTodos([...todos, { text: inputValue, checked: false }]); // Step 1: Add checked property
    setInputValue('');
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={todo.checked ? { textDecoration: 'line-through' } : {}} // Step 3: Apply line-through style
          >
            <input
              type="checkbox"
              checked={todo.checked} // Step 2: Add checkbox and checked property
              onChange={() => {
                const newTodos = [...todos];
                newTodos[index].checked = !newTodos[index].checked;
                setTodos(newTodos);
              }}
            />
            {todo.text}{' '}
            <div><button onClick={() => handleTodoDelete(index)}>Delete</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
