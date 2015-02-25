define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //--- https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = [ '$stateProvider' ];

  function configureStates( $stateProvider ) {

    $stateProvider
      .state('page', {
        url: '/page',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html',
            controller    : 'PageCtrl',
            controllerAs  : 'page'
          },
          'header@page': {
            templateUrl   : 'app/page/templates/header.html'
          },
          'content@page': {
            templateUrl   : 'app/page/templates/content.html'
          }
        }
      });

  }

});
