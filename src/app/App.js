import React from 'react';
import TodoContextProvider from '../contexts/TodoContext'
import TaskList from '../Components/TaskList'
import TaskForm from '../Components/TaskForm'
import Header from '../Components/Header'

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <TaskForm />
      <TaskList />
    </TodoContextProvider>
  );
}

export default App;
