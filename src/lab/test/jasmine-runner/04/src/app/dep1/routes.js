define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('dep1', {
        url: '/dep1',
        views: {
          'master': {
            templateUrl   : 'app/dep1/template.html',
            controller    : 'Dep1Ctrl',
            controllerAs  : 'vm'
          }
        }
      });

  }

});
