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


      $stateProvider.state('store', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl as store',
        resolve: {
          store: resolveStore
        }
      });

  }

  //---

  resolveStore.$inject = ['$ocLazyLoad'];

  function resolveStore($ocLazyLoad) {
    return $ocLazyLoad.load({
      name: 'store',
      files: ['app/store/store.js']
    });
  }

});
