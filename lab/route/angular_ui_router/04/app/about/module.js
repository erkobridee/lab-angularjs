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


  // module definition
  return ng.module(
    // module name
    'about',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );


});
