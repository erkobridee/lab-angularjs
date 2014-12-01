define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('crud', {
        url: '/crud',
        views: {
          'master': {
            templateUrl   : 'app/core/page/templates/layout.html',
            controller    : 'CrudCtrl',
            controllerAs  : 'crud'
          },
          'header@crud': {
            templateUrl: 'app/modules/useCases/crud/templates/header.html'
          },
          'content@crud': {
            templateUrl   : 'app/modules/useCases/crud/templates/content.html' //,
            // controller    : 'CrudCtrl',
            // controllerAs  : 'crud'
          }
        }
      });

  }

});
