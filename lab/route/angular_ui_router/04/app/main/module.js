define(
// require.js dependency injection
[
  'angular',
  'angularResource',

  'angular_ui_router',

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
      'ngResource',

      'ui.router',

      'about',
      'home'
    ]
  );


});
