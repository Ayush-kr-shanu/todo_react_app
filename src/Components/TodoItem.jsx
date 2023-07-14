import React from 'react';

const TodoItem = ({ todo, markComplete, deleteTodo }) => {
  const handleComplete = () => {
    markComplete(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleComplete}>
        {todo.completed ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
