import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Badge from './components/Badge.js';
import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([{ id: uuid(), text: 'Finish Todo App' }]);
  const addTodo = (newTodo) => setTodos([...todos, { id: uuid(), text: newTodo }]);
  const removeTodo = (id) => setTodos(todos.filter((td) => td.id !== id));
  return (
    <div className="app">
      <h1 className="header">Todo List <Badge number={todos.length} /></h1>
      <TodoList className="todo-list" todos={todos} removeTodo={removeTodo} />
      <TodoInput className="todo-input" addTodo={addTodo} />
    </div>
  );
};

export default App;
