define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

  function configureStates($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      modules: [
        module.name,
        require('app/home/package').name
      ],
      jsLoader: require,
      debug: false
    });

    $urlRouterProvider
      .when('', '/') // default
      .otherwise("/404"); // For any unmatched url, redirect to /404


    $stateProvider

      .state('page', {
        url: '/page',
        views: {
          'master': {
            templateUrl: 'app/main/templates/page_layout.html'
          },
          'header@page': {
            templateUrl: 'app/main/templates/page_header.html'
          },
          'content@page': {
            templateUrl: 'app/main/templates/page_content.html'
          }
        }
      })

      .state('404', {
        url: '/404',
        views: {
          'master': {
            templateUrl: 'app/main/templates/page_layout.html'
          },
          'header@404': {
            templateUrl: 'app/main/templates/404_header.html'
          },
          'content@404': {
            templateUrl: 'app/main/templates/404_content.html'
          }
        }
      });

  }

});
