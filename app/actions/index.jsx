var axios = require('axios');

// In ES6 we can place export before each variable that might need to be used in another file.
// Rather than using module.exports methodology
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

 export var addHobby = (hobby) => {
   return {
     type: 'ADD_HOBBY',
     hobby
   }
 };

 export var removeHobby = (id) => {
   return {
     type: 'REMOVE_HOBBY',
     id
   }
 };

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var baseURL = 'http://maps.google.com?q='

      dispatch(completeLocationFetch(baseURL + loc));
    });
  };
};
