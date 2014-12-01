define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularTranslate');


  // angular module definition
  return angular.module(
    'about',
    [
      'ngRoute',
      'pascalprecht.translate'
    ]
  );

});
