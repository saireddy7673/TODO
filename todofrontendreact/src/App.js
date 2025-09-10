import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  // Fetch todos from backend on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    
    try {
      const response = await axios.get('http://localhost:8080/todos');
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } 
  };

  const addTodo = async () => {
    if (input.trim()) {
      try {
        const newTodo = {
          title: input,  // Match backend field name
          completed: false
        };
        await axios.post('http://localhost:8080/todos', newTodo);
        setInput('');
        fetchTodos();  // Refresh the list
        setError(null);
      } catch (err) {
        setError('Failed to add todo');
        console.error(err);
      }
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} >Add Todo
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
