define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('uiRouter');
  require('bootstrap');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',

      'ui.router',

      require('app/multipages/package').name,
      require('app/multipagesview/package').name,

      require('app/about/package').name,
      require('app/page/package').name,
      require('app/form/package').name,
      require('app/home/package').name
    ]
  );

});
