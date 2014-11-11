define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          'master': {
            controller: 'AboutCtrl as about',
            templateUrl: 'app/main/templates/page_layout.html'
          },
          'header@about': {
            templateUrl: 'app/about/templates/header.html'
          },
          'content@about': {
            //controller: 'AboutCtrl as about',
            templateUrl: 'app/about/templates/content.html'
          }
        }
      });

  }

});
