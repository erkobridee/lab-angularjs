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
        '/cep',
        {
          templateUrl   : 'app/cep/template.html',
          controller    : 'CepCtrl',
          controllerAs  : 'vm'
        }
      );

  }

});
