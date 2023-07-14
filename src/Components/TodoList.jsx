import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, markComplete, deleteTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
