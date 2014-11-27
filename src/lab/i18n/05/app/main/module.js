define(function(require){
  'use strict';

  var angular = require('angular');


  // angular module definition
  return angular.module(
    'main',
    [
      require('i18n/package').name,
      require('home/package').name,
      require('about/package').name
    ]
  );

});
