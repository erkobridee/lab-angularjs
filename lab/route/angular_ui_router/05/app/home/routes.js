define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'master': {
              //controller: 'HomeCtrl',
              templateUrl: 'app/main/templates/page_layout.html'
            },
            'header@home': {
              templateUrl: 'app/home/templates/header.html'
            },
            'content@home': {
              controller: 'HomeCtrl',
              templateUrl: 'app/home/templates/content.html'
            }
          }
        });

  }]);

});
