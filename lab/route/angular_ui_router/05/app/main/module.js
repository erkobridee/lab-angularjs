define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('angular_ui_router');
  require('bootstrap');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',

      'ui.router',

      require('../about/require.load').name,
      require('../home/require.load').name,
      require('../dashboard/require.load').name
    ]
  );

});
