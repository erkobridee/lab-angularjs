define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularTranslate');
  require('angularTranslateLoaderPartial');


  // angular module definition
  return angular.module(
    'translate',
    [
      'pascalprecht.translate'
    ]
  );

});
