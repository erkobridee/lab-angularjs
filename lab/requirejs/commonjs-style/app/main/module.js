define(function(require) {
  'use strict';

  var angular = require('angular');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      require('../moduleA/package').name,
      require('../home/package').name,
      require('../about/package').name,
      require('../github/package').name,
      require('../pageWithoutController/package').name
    ]

  );

});
