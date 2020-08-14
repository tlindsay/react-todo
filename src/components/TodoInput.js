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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoInput;
