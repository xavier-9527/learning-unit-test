import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from '../app/components/App';

describe('Testing Library React Shallow', function() {
  it('App\'s title should be Todos', function() {
    const { getByRole } = render(<App/>);
    expect(getByRole('heading').textContent).toEqual('Todos');
  });
});

describe('Testing Library React Render', function() {
  it('Todo item should not have todo-done class', function() {
    const { container } = render(<App/>);
    expect(container.querySelectorAll('.todo-done').length).toEqual(0);
  });
});

describe('Testing Library React Mount', function() {
  it('Delete Todo', function() {
    const { container } = render(<App/>);
    const todoLength = container.getElementsByTagName('li').length;
    fireEvent.click(container.querySelectorAll('button.delete')[0]);
    expect(container.getElementsByTagName('li').length).toEqual(todoLength - 1);
  });

  it('Turning a Todo item into Done', function() {
    const { container } = render(<App/>);
    const todoItem = container.querySelector('.todo-text');
    // expect(todoItem.className.includes('todo-done')).toEqual(false);
    fireEvent.click(todoItem);
    expect(todoItem.className.includes('todo-done')).toEqual(true);
  });

  it('Add a new Todo', function() {
    const { container } = render(<App/>);
    const todoLength = container.querySelectorAll('li').length;
    const addInput = container.getElementsByTagName('input')[0];
    addInput.value = 'Todo Four';
    const addButton = container.querySelector('.add-button');
    fireEvent.click(addButton);
    expect(container.querySelectorAll('li').length).toEqual(todoLength + 1);
  });
});