define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('help', {
        url: '/help',
        views: {
          'master': {
            templateUrl   : 'app/core/page/templates/layout.html',
            controller    : 'HelpCtrl',
            controllerAs  : 'help'
          },
          'header@help': {
            templateUrl: 'app/modules/pages/help/templates/header.html'
          },
          'content@help': {
            templateUrl   : 'app/modules/pages/help/templates/content.html' //,
            // controller    : 'HelpCtrl',
            // controllerAs  : 'help'
          }
        }
      });

  }

});
