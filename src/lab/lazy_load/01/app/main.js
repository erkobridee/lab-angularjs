(function() {
  'use strict';

  angular
    .module('main', ['ui.router', 'oc.lazyLoad'])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('store', {
          templateUrl: 'app/store/store.html',
          controller: 'StoreCtrl as store',
          resolve: {
            store: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'store',
                  files: ['app/store/store.js']
                }
              );
            }
          }
        });

    }])

    .controller('AppCtrl', ['$state', function ($state) {
        var app = this;
        app.click = function () {
            $state.go('store');
        };
    }]);

})();
