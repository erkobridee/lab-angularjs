define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');
  require('bootstrap');
  require('ocLazyLoad');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',

      'ui.router',

      'oc.lazyLoad',

      require('app/home/package').name
    ]
  );

});
