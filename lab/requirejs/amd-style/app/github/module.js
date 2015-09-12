define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource'
],

// require.js module scope
function(angular) {
  'use strict';


  // module definition
  return angular.module(
    // module name
    'github',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]

  );


});
