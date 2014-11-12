define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$ocLazyLoadProvider'];

  function configure($stateProvider, $ocLazyLoadProvider) {

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
      files: ['store/require.load'] // load require AMD
    })
    .then(function() { // After load
      console.log('store module loaded');
      $state.go('store');
    });
  }

});
