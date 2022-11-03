import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
// uuid library to provide random ids

const localStorageKey = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // call effect to load todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedTodos) setTodos(storedTodos);
  }, [])
  // empty array makes effect run once when component mounts

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])
  // anytime todos changes, useEffect is triggered

  function toggleTodo(id) {
    // copy of todos list so we dont change current todolist
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      // add new todos to prev and spread over array
      return [...prevTodos, { id: (todos.length + 1), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  )
}

export default App;
