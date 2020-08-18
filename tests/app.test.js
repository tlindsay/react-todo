import React from 'react';
import App from '../src/App.js';
import { cleanup, fireEvent, render } from '@testing-library/react';

test('Can add and remove todos', () => {
  let { container } = render(<App />);
  let todos = container.querySelectorAll('li');
  let input = container.querySelector('input');
  let form = container.querySelector('form');

  expect(todos.length).toBe(1);

  fireEvent.change(input, { target: { value: 'foo bar baz' } });
  fireEvent.submit(form);

  todos = container.querySelectorAll('li');
  expect(todos.length).toBe(2);

  let deleteButton = container.querySelector('button');
  fireEvent.click(deleteButton);

  todos = container.querySelectorAll('li');
  expect(todos.length).toBe(1);
});
