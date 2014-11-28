define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');

  console.log('app/home/module.js');

  // angular module definition
  return angular.module(
    // module name
    'home',

    // module dependencies
    [
      'ngResource',

      'ui.router'
    ]
  );

});
