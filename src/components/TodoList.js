import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, removeTodo }) => {
  if (todos.length) {
    return (
      <ul style={{ border: '1px dotted #1f253d', marginBottom: '1em', padding: 0 }}>
        {
          todos.map((todo) =>
            <TodoItem
              key={todo.id}
              text={todo.text}
              del={() => removeTodo(todo.id)}
            />
          )
        }
      </ul>
    );
  }

  return <div style={{ marginBottom: '1em', padding: '1em' }}>No Todos</div>;
};

export default TodoList;
