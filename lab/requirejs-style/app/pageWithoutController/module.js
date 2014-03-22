define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource'
],

// require.js module scope
function(ng) {
  'use strict';

  // module definition
  return ng.module(
    // module name
    'pageWithoutController',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]
  );


});
