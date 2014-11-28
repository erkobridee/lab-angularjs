define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureRoutes);

  //---

  // https://code.angularjs.org/1.3.3/docs/api/ngRoute

  configureRoutes.$inject = ['$routeProvider'];

  function configureRoutes($routeProvider) {

    $routeProvider
      .when(
        '/device/check',
        {
          templateUrl   : 'app/device/check/templates/check.html',
          controller    : 'DeviceCheckCtrl',
          controllerAs  : 'vm'
        }
      )
      .when(
        '/device/desktop',
        {
          templateUrl   : 'app/device/check/templates/desktop.html',
          controller    : 'DeviceCheckDesktopCtrl',
          controllerAs  : 'vm'
        }
      )
      .when(
        '/device/mobile',
        {
          templateUrl   : 'app/device/check/templates/mobile.html',
          controller    : 'DeviceCheckMobileCtrl',
          controllerAs  : 'vm'
        }
      )
      .when(
        '/device/tablet',
        {
          templateUrl   : 'app/device/check/templates/tablet.html',
          controller    : 'DeviceCheckTabletCtrl',
          controllerAs  : 'vm'
        }
      );

  }

});
