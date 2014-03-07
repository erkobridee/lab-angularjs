define(
// require.js dependency injection
[
  'angular',
  
  '../moduleA/require.load',
  '../home/require.load',
  '../about/require.load',
  '../github/require.load',
  '../pageWithoutController/require.load'

],

// require.js module scope
function(ng) {
  'use strict';


  var module = ng.module(
    // module name
    'main', 

    // module dependencies
    [
      'moduleA',
      'home',
      'about',
      'github',
      'pageWithoutController'
    ]

  );

  return module;


});