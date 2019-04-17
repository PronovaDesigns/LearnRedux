var redux = require('redux');

console.log('Starting Redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New State', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url +'" target="_blank">View Your Location</a>'
  }
});
// unsubscribe(); // Used for debugging

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

// Create action dispatch before writing corresponding reducer code.
// You will have a more concrete idea of the data you're dealing with and how you want to adjust it.

store.dispatch(actions.changeName('Chris'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Giselle'));

store.dispatch(actions.addMovie('Bird Box', 'Suspense'));
store.dispatch(actions.addMovie('Blue is the Warmest Colour', 'Romance'));
store.dispatch(actions.removeMovie(1));
