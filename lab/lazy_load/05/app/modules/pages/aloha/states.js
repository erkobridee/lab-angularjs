define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('aloha', {
        url: '/aloha',
        views: {
          'master': {
            templateUrl   : 'app/core/page/templates/layout.html',
            controller    : 'AlohaCtrl',
            controllerAs  : 'aloha'
          },
          'header@aloha': {
            templateUrl: 'app/modules/pages/aloha/templates/header.html'
          },
          'content@aloha': {
            templateUrl   : 'app/modules/pages/aloha/templates/content.html' //,
            // controller    : 'AlohaCtrl',
            // controllerAs  : 'aloha'
          }
        }
      });

  }

});
