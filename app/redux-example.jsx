var redux = require('redux');

console.log('Starting Redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

// Reducer requires default state and to return state. Responsible for computing new versions of our state.
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'}; // ES5 way of creating default state.

   switch (action.type) {
     case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            // Sets the current nextHobbyId as the Id variable and then adds 1 to that global nextHobbyId variable.
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      }
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

  console.log('New State', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

// Create action dispatch before writing corresponding reducer code.
// You will have a more concrete idea of the data you're dealing with and how you want to change it.
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Chris'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Giselle'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Bird Box',
  genre: 'Suspense'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Blue is the Warmest Colour',
  genre: 'Romance'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
