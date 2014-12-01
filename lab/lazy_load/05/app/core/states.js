define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  // https://github.com/angular-ui/ui-router/wiki

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureStates($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('', '/') // default
      .otherwise("/404"); // For any unmatched url, redirect to /404

  }

});
