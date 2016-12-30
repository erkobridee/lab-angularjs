define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureRoutes);

  //---

  // https://code.angularjs.org/1.6.1/docs/api/ngRoute

  configureRoutes.$inject = ['$routeProvider', '$locationProvider'];

  function configureRoutes($routeProvider, $locationProvider) {

    // remove the ! added by angular v1.6.1
    $locationProvider.hashPrefix('');

    $routeProvider
      .when(
        '/',
        {
          templateUrl   : 'app/main/templates/home.html',
          controller    : 'HomeCtrl',
          controllerAs  : 'vm'
        }
      )
      .when(
        '/404',
        {
          templateUrl   : 'app/main/templates/404.html'
        }
      )
      .otherwise({ redirectTo: '/404' });

  }

});
