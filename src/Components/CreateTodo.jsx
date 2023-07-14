import React, { useState } from 'react';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Logic to create a new todo
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false
    };
    addTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;