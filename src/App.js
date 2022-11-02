import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
// uuid library to provide random ids
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // call effect to load todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, [])
  // empty array makes effect run once when component mounts

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])
  // anytime todos changes, useEffect is triggered

  

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
