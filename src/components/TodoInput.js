import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const submit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form action="" onSubmit={submit}>
      <input required value={text} onChange={(e) => setText(e.target.value)} />
      <input style={{ marginLeft: '1em' }}type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoInput;
