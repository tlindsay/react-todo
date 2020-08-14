import React from 'react';

const TodoItem = ({ text, del }) => (
  <li style={{
      borderBottom: '1px dotted #efefef',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1em'
    }}
  >
    {text}
    <button onClick={del}>×</button>
  </li>
);

export default TodoItem;
