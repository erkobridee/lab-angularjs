define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('ocLazyLoad');

  // angular module definition
  return angular.module(
    // module name
    'lazyLoad',

    // module dependencies
    [
      'ui.router',

      'oc.lazyLoad'
    ]
  );

});
