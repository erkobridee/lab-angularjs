define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularResource');


  // angular module definition
  return angular.module(
    // module name
    'cep',

    // module dependencies
    [
      'ngRoute',
      'ngResource'
    ]
  );

});
