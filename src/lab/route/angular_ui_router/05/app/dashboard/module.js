define(function(require) {

  var angular = require('angular');
  require('angularResource');
  require('angular_ui_router');
  require('holder');


  return angular.module(
    // module name
    'dashboard',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );

});
