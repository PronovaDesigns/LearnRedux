var redux = require('redux');

console.log('Starting Redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = {stateDefault}, action) => {

  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        // ...state is all of the existing state variables and the following argument(s) override the specific existing state variable.
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
  // Type is the name of the action.
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Feed the dog.'
};

store.dispatch(action);

console.log('searchText should be Feed the dog', store.getState());
