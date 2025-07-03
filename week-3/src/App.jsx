import React from 'react';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

const App = () => {

  return (
    <>
      <TodoProvider>
        <h1>Todo List</h1>
        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App
