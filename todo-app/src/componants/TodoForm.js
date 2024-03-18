import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({ text: value, id: Date.now(), completed: false });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBInput
        label='Add new todo'
        type='text'
        id='todoInput'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MDBBtn type="submit" className="btn btn-dark mt-3">Add Todo</MDBBtn>
    </form>
  );
}

export default TodoForm;
