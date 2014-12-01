define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');

  // angular module definition
  return angular.module(
    // module name
    'useCases',

    // module dependencies
    [
      'ui.router',

      require('./crud/package').name,
      require('./dashboard/package').name
    ]
  );

});
