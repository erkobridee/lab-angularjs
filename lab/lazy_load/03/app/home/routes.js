define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'master': {
            //controller: 'HomeCtrl as home',
            templateUrl: 'app/main/templates/page_layout.html'
          },
          'header@home': {
            templateUrl: 'app/home/templates/header.html'
          },
          'content@home': {
            controller: 'HomeCtrl as home',
            templateUrl: 'app/home/templates/content.html'
          }
        }
      });

  }

});
