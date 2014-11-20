define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',
      'ui.router',

      require('app/home/package').name,
      require('app/about/package').name,
      require('app/dep1/package').name
    ]
  );

});
