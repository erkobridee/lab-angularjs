define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');
  require('bootstrap');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',

      'ui.router',

      require('app/about/package').name,
      require('app/home/package').name,
      require('app/dashboard/package').name
    ]
  );

});
