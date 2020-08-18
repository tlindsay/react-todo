import React from 'react';
import { v4 as uuid } from 'uuid';
import create from 'zustand';
import Badge from './components/Badge.js';
import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import './App.css';

const useStore = create(set => ({
  todos: [{ id: uuid(), text: 'Finish Todo App' }],
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, { id: uuid(), text: newTodo }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((td) => td.id !== id) }))
}));

const App = () => {
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);
  const removeTodo = useStore(state => state.removeTodo);
  return (
    <div className="app">
      <h1 className="header">Todo List <Badge number={todos.length} /></h1>
      <TodoList className="todo-list" todos={todos} removeTodo={removeTodo} />
      <TodoInput className="todo-input" addTodo={addTodo} />
    </div>
  );
};

export default App;
