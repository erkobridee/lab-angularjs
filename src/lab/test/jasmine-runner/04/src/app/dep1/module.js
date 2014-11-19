define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');

  // angular module definition
  return angular.module(
    // module name
    'dep1',

    // module dependencies
    [
      'ngRoute'
    ]
  );

});
