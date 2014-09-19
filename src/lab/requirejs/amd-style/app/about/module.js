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

  // module definition
  return ng.module(
    // module name
    'about',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]
  );


});
