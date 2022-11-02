import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([])
  
  return (
    <div>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
