define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html' //,
            // controller    : 'HomeCtrl as home',
            // controllerAs  : 'home'
          },
          'header@home': {
            templateUrl   : 'app/home/templates/header.html'
          },
          'content@home': {
            templateUrl   : 'app/home/templates/content.html',
            controller    : 'HomeCtrl',
            controllerAs  : 'home'
          }
        }
      });

  }

});
