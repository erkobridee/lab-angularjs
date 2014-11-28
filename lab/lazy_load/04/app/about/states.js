define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html',
            controller    : 'AboutCtrl',
            controllerAs  : 'about'
          },
          'header@about': {
            templateUrl: 'app/about/templates/header.html'
          },
          'content@about': {
            templateUrl   : 'app/about/templates/content.html' //,
            // controller    : 'AboutCtrl',
            // controllerAs  : 'about'
          }
        }
      });

  }

});
