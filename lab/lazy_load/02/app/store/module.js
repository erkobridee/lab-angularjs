define(function(require) {
  'use strict';

  var angular = require('angular');
  require('uiRouter');
  require('ocLazyLoad');

  // angumar module definition
  return angular.module(
    // module name
    'store',

    // module dependencies
    [
      'ui.router',

      { // lazy load by ocLazyLoad
        name: 'cart',
        files: ['cart/package'] // load require AMD
      }
    ]
  );

});
