var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 todo components for each tot item', () => {
    var todos = [
      {
        id: 1,
        text: 'Task 1'
      },
      {
        id: 2,
        text: 'Task2'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosCmponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosCmponents.length === todos.length);
  });
});
