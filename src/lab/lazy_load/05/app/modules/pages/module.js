define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'pages',

    // module dependencies
    [
      'ui.router',

      require('./about/package').name,
      require('./aloha/package').name,
      require('./help/package').name
    ]
  );

});
