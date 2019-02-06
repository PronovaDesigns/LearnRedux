var redux = require('redux');

console.log('Starting Redux example');

// Reducer requires default state and to return state. Responsible for computing new versions of our state.
var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'}; // ES5 way of creating default state.

   switch (action.type) {
     case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
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
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Chris'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Giselle'
});

console.log('Name should be Chris', store.getState());
