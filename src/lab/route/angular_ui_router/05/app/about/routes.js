define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('about', {
          url: '/about',
          views: {
            'master': {
              controller: 'AboutCtrl',
              templateUrl: 'app/main/templates/page_layout.html'
            },
            'header@about': {
              templateUrl: 'app/about/templates/header.html'
            },
            'content@about': {
              //controller: 'AboutCtrl',
              templateUrl: 'app/about/templates/content.html'
            }
          }
        });

  }]);

});
