define(
// require.js dependency injection
[
  'angular',
  'angularRoute',
  'angularResource',

  '../about/require.load',
  '../home/require.load',

  '../users/require.load',
  '../github/require.load'

], 

// require.js module scope
function(ng) {
  'use strict';

  var module = ng.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',
      'ngResource',

      'about',
      'home',

      'users',
      'github'
    ]
  );

  return module;

});