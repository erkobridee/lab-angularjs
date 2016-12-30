define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configure($stateProvider, $urlRouterProvider, $locationProvider) {

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
            templateUrl: 'app/main/templates/404.html'
          }
        }

      });

  }

});
