define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource',

  '../about/require.load',
  '../home/require.load'
],

// require.js module scope
function(ng) {
  'use strict';


  // module definition
  return ng.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',
      'ngResource',

      'about',
      'home'
    ]
  );


});
