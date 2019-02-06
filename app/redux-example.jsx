var redux = require('redux');

console.log('Starting Redux example');

// Name reducer and action generators
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

// This is an action generator, which simplifies each action dispatches.
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // In ES6 the "name" statement is identical to "name: name"
  }
};

// Hobbies reducer and action generators
// ----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
   switch (action.type) {
     case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
   }
 };

 var addHobby = (hobby) => {
   return {
     type: 'ADD_HOBBY',
     hobby
   }
 };

 var removeHobby = (id) => {
   return {
     type: 'REMOVE_HOBBY',
     id
   }
 };

 // Movies reducer and action generators
 // ----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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

store.dispatch(changeName('Chris'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Giselle'));

store.dispatch(addMovie('Bird Box', 'Suspense'));
store.dispatch(addMovie('Blue is the Warmest Colour', 'Romance'));
store.dispatch(removeMovie(1));
