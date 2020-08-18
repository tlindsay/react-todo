import React from 'react';

const TodoItem = ({ text, del }) => (
  <li style={{
      borderBottom: '1px dotted #1f253d',
      display: 'flex',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      padding: '1em'
    }}
  >
    {text}
    <button onClick={del}>×</button>
  </li>
);

export default TodoItem;
