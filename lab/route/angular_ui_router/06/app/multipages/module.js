define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('angularLocalForage');

  // angular module definition
  return angular.module(
    // module name
    'multipages',

    // module dependencies
    [
      'ui.router',

      'LocalForageModule',

      // TODO: review
    ]
  );

});
