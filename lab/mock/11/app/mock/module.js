define(
// require.js dependency injection
[
  'angular',
  'angularMocksBackend'
], 

// require.js module scope
function(ng) {
  'use strict';

  
  console.log('angular');
  console.log(ng);
  console.log('angular mock module');
  console.log(ng.mock);
  

  var module = ng.module(
    // module name
    'mock',

    // module dependencies
    [
      'ngMockBackend'
    ]
  );

  return module;

});