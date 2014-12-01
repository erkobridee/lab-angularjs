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
            templateUrl   : 'app/core/page/templates/layout.html',
            controller    : 'AboutCtrl',
            controllerAs  : 'about'
          },
          'header@about': {
            templateUrl: 'app/modules/pages/about/templates/header.html'
          },
          'content@about': {
            templateUrl   : 'app/modules/pages/about/templates/content.html' //,
            // controller    : 'AboutCtrl',
            // controllerAs  : 'about'
          }
        }
      });

  }

});
