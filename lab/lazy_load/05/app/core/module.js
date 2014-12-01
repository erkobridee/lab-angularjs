define(function(require) {
  'use strict';

  var angular = require('angular');

  // angular module definition
  return angular.module(
    // module name
    'core',

    // module dependencies
    [
      require('app/core/lazy/load/package').name,
      require('app/core/home/package').name,
      require('app/core/page/package').name,
      require('app/core/404/package').name,
      require('app/core/menu/package').name
    ]
  );

});
