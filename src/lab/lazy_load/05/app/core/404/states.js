define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  // https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('404', {
        url: '/404',
        views: {
          'master': {
            templateUrl: 'app/core/page/templates/layout.html'
          },
          'header@404': {
            templateUrl: 'app/core/404/templates/header.html'
          },
          'content@404': {
            templateUrl: 'app/core/404/templates/content.html'
          }
        }
      });

  }

});
