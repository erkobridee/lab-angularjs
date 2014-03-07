define(
// require.js dependecy injection
[
 'angular',
 'angularRoute',
 'angularResource' 
],

//require.js module scope
function(ng) {
  'use strict';

  var module = ng.module(
    // module name
    'about', 

    // module dependencies
    [
      'ngRoute', 
      'ngResource'
    ]
  );

  return module;

});