var redux = require('redux');


var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducers = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
};