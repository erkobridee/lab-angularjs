define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {

      $stateProvider.state('store', {
        templateUrl: 'app/store/template.html',
        controller: 'StoreCtrl as store'
      });

  }

});
