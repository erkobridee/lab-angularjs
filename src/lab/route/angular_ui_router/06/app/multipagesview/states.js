define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //--- https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

    $stateProvider
      .state('multipagesview', {
        url: '/multipagesview',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html',
            controller    : 'MultiPagesViewCtrl',
            controllerAs  : 'multipagesview'
          },
          'header@multipagesview': {
            templateUrl   : 'app/multipagesview/templates/header.html'
          },
          'content@multipagesview': {
            templateUrl   : 'app/multipagesview/templates/content.html' //,
            // controller    : 'MultiPagesViewCtrl',
            // controllerAs  : 'multipagesview'
          }
        },
        resolve: {
          MultiPagesList: ['MultiPagesService', function(multipages) {
            return multipages.list();
          }]
        }
      });

  }

});
