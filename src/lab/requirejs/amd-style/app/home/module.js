define(
// require.js dependecy injection
[
  'angular',
  'angularRoute',
  'angularResource'
],

//require.js module scope
function(angular) {
  'use strict';


  // module definition
  return angular.module(
    // module name
    'home',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]
  );


});
