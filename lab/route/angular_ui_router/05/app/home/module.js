define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('angular_ui_router');

  // angular module definition
  return angular.module(
    // module name
    'home',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );

});
