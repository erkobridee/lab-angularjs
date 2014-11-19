define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

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
