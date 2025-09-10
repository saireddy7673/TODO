import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/todos');
      const data = await response.json();
      setTodos(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running on port 8080.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTodo,
          completed: false
        })
      });

      if (response.ok) {
        setNewTodo('');
        fetchTodos(); // Refresh the list
        setError('');
      } else {
        throw new Error('Failed to add todo');
      }
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <div className="todo-container">
        <h1>TODO App</h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
            disabled={loading}
            className="todo-input"
          />
          <button type="submit" disabled={loading || !newTodo.trim()} className="add-button">
            {loading ? 'Adding...' : 'Add Todo'}
          </button>
        </form>

        <div className="todos-section">
          <h2>Your Todos ({todos.length})</h2>
          {loading && <p>Loading...</p>}
          {todos.length === 0 && !loading ? (
            <p className="no-todos">No todos yet. Add one above!</p>
          ) : (
            <ul className="todos-list">
              {todos.map((todo, index) => (
                <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <span className="todo-title">{todo.title}</span>
                  <span className="todo-status">
                    {todo.completed ? '✅ Completed' : '⏳ Pending'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="refresh-section">
          <button onClick={fetchTodos} disabled={loading} className="refresh-button">
            {loading ? 'Refreshing...' : 'Refresh Todos'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
