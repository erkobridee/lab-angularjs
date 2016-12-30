define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configureStates($stateProvider, $urlRouterProvider, $locationProvider) {

    // remove the ! added by angular v1.6.1
    $locationProvider.hashPrefix('');

    $urlRouterProvider
      .when('', '/') // default
      .otherwise("/404"); // For any unmatched url, redirect to /404


    $stateProvider

      .state('404', {
        url: '/404',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html'
          },
          'header@404': {
            templateUrl   : 'app/main/templates/404_header.html'
          },
          'content@404': {
            templateUrl   : 'app/main/templates/404_content.html'
          }
        }
      });

  }

});
