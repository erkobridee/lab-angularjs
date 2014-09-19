define(function(require) {
  'use strict';

  var angular = require('angular');

  // require('../moduleA/require.load');
  // require('../home/require.load');
  // require('../about/require.load');
  // require('../github/require.load');
  // require('../pageWithoutController/require.load');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      // 'moduleA',
      // 'home',
      // 'about',
      // 'github',
      // 'pageWithoutController'
      require('../moduleA/require.load').name,
      require('../home/require.load').name,
      require('../about/require.load').name,
      require('../github/require.load').name,
      require('../pageWithoutController/require.load').name
    ]

  );

});
