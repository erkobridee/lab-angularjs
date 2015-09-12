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
    'pageWithoutController',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]
  );


});
