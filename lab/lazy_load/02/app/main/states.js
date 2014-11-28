define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$ocLazyLoadProvider'];

  function configureStates($stateProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
        loadedModules: [module.name],
        asyncLoader: require
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
    return $ocLazyLoad.load({
      name: 'store',
      files: ['store/package'] // load require AMD
    })
    .then(function() { // After load
      console.log('store module loaded');
      $state.go('store');
    });
  }

});
