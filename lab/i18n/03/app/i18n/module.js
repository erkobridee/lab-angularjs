define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularTranslate');


  // angular module definition
  return angular.module(
    'translate',
    [
      'pascalprecht.translate'
    ]
  );

});
