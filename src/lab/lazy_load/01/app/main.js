(function() {
  'use strict';


  angular
    .module('main', ['ui.router', 'oc.lazyLoad'])
    .config(configure)
    .controller('AppCtrl', AppCtrl);


  //---

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {
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

  //---

  AppCtrl.$inject = ['$state'];

  function AppCtrl($state) {
    var vm = this;

    vm.click = function () {
        $state.go('store');
    };
  }

})();
