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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);
// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Feed the dog.'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cook the chicken.'
});
