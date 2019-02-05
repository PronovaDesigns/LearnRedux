var redux = require('redux');

console.log('Starting Redux example');

// Pure function
function add (a, b) {
  return a + b
}

// Always returns the same result given the the same input.
// There are no side effects -- Doesn't use global variables or change variables outside of the function.
// They cannot use asynchronous programming techniques -- No Promises or Callbacks

// Examples of non-pure functions
var a = 3;
function add(b) {
  return a + b;
}

var result;
function add (a, b) {
  result = a + b;
  return result;
}

function add (a, b) {
  return a + b + new Date.getSeconds();
}

// How to correctly make changes while maintaining the purity of the function.
function changeProp(obj) {

  return {
    ...obj,
    name: 'Giselle'
  };

  // obj.name = 'Giselle';
  // return obj;
}

var res = changeProp ({
  name: 'Chris',
  age: 30
});

console.log(res);
