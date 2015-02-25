define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //--- https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = [ '$stateProvider' ];

  function configureStates( $stateProvider ) {

    $stateProvider
      .state('form', {
        url: '/form',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html',
            controller    : 'FormCtrl',
            controllerAs  : 'form'
          },
          'header@form': {
            templateUrl   : 'app/form/templates/header.html'
          },
          'content@form': {
            templateUrl   : 'app/form/templates/content.html'
          }
        }
      });

  }

});
