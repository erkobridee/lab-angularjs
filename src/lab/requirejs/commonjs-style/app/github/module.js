define(function(require) {
  'use strict';

  var angular = require('angular');

  require('angularRoute');
  require('angularResource');

  // angular module definition
  return angular.module(
    // module name
    'github',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]

  );

});
