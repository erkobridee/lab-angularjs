define(function(require) {
  'use strict';

  var angular = require('angular');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      require('../moduleA/require.load').name,
      require('../home/require.load').name,
      require('../about/require.load').name,
      require('../github/require.load').name,
      require('../pageWithoutController/require.load').name
    ]

  );

});
