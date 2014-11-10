define(
// require.js dependency injection
[
  'angular',
  'angularResource',
  'angular_ui_router'
],

// require.js module scope
function(ng) {
  'use strict';


  var module = ng.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',
      'ui.router'
    ]
  );

  return module;


});
