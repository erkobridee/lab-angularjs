define(function(require){
  'use strict';

  var angular = require('angular');
  require('angularTranslate');


  // angular module definition
  return angular.module(
    'main',
    [
      'pascalprecht.translate',
      require('home/package').name,
      require('about/package').name
    ]
  );

});
