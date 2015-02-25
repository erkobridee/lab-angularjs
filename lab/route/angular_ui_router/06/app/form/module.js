define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'form',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );

});
