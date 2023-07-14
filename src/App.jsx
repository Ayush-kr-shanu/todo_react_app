import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './Components/TodoList';
import CreateTodo from './Components/CreateTodo';
import todosData from './Components/TodoData';

const App = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const markComplete = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TodoList todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />} />
          <Route path="/create" element={<CreateTodo addTodo={addTodo} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
