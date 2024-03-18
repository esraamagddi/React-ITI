import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, text });
    setEditable(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {editable ? (
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {editable ? (
          <button className="btn btn-dark btn-sm me-2" onClick={handleUpdate}>Save</button>
        ) : (
          <button className="btn btn-dark btn-sm me-2" onClick={() => setEditable(true)}>Edit</button>
        )}
        <button className="btn btn-dark btn-sm" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
