define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

      $stateProvider.state('store', {
        templateUrl: 'app/store/template.html',
        controller: 'StoreCtrl as store'
      });

  }

});
