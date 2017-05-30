var expect = require('expect');

var TodoAPI = require('TodoAPI');

beforeEach(() => {
  localStorage.removeItem('todos');
});

describe('TodoAPI', () => {
  it('shoud exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
          id: 23,
          text: 'test all files',
          completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      
      expect(actualTodos).toEqual(todos);
    });

    it('shouod not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad local storage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in locastorage', () => {
      var todos = [{
          id: 23,
          text: 'test all files',
          completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);

    });
  });
});
