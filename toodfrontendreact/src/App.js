import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://localhost:8080/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map( todo => {
          <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
      
    </div>
  );
}

export default App;
