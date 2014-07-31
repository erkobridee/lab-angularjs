define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource',

  'app/home/require.load',
  'app/about/require.load',
  'app/dep1/require.load'
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

      'home',
      'about',
      'dep1'
    ]
  );

});
