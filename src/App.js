import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
