define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$ocLazyLoadProvider'];

  function configureStates($stateProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
        modules: [module.name],
        jsLoader: require,
        debug: false
      });

      $stateProvider.state('lazy_store', {
        resolve: {
          store: resolveStore
        }
      });

  }

  //---

  resolveStore.$inject = ['$ocLazyLoad', '$state'];

  function resolveStore($ocLazyLoad, $state) {
    return $ocLazyLoad.load('store/package')
    .then(function() { // After load
      console.log('store module loaded');
      $state.go('store');
    });
  }

});
