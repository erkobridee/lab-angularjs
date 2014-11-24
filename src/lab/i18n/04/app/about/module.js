define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');


  // angular module definition
  return angular.module(
    'about',
    [
      'ngRoute',
      require('i18n/package').name
    ]
  );

});
