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
