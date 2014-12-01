define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'core.menu',

    // module dependencies
    [
      'ui.router'
    ]
  );

});
