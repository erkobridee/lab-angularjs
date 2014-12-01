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
            templateUrl   : 'app/core/page/templates/layout.html'
            // controller    : 'HomeCtrl',
            // controllerAs  : 'home'
          },
          'header@home': {
            templateUrl   : 'app/core/home/templates/header.html'
          },
          'content@home': {
            templateUrl   : 'app/core/home/templates/content.html',
            controller    : 'HomeCtrl',
            controllerAs  : 'home'
          }
        }
      });

  }

});
