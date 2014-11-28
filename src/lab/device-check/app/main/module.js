define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',

      require('app/device/check/package').name
    ]
  );

});
