define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  // https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('page', {
        url: '/page',
        views: {
          'master': {
            templateUrl: 'app/core/page/templates/layout.html'
          },
          'header@page': {
            templateUrl: 'app/core/page/templates/header.html'
          },
          'content@page': {
            templateUrl: 'app/core/page/templates/content.html'
          }
        }
      });

  }

});
