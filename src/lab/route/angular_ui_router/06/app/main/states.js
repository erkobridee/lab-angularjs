define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

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
