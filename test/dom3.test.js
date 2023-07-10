import React from 'react';
import {findDOMNode} from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';

describe('DOM Rendering', function() {
  it('Add an new Todo item, when click the new todo button', function() {
    const app = TestUtils.renderIntoDocument(<App/>);
    const appDOM = findDOMNode(app);
    let todoItemsLength = appDOM.querySelectorAll('.todo-text').length;
    let addInput = appDOM.querySelector('input');
    addInput.value = 'Todo four';
    let addButton = appDOM.querySelector('.add-todo button');
    TestUtils.Simulate.click(addButton);
    expect(appDOM.querySelectorAll('.todo-text').length).toEqual(todoItemsLength + 1);
  });
});

