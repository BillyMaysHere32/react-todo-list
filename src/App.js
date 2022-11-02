import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
// uuid library to provide random ids
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      // add new todos to prev and spread over array
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  return (
    <div>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick= {handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
