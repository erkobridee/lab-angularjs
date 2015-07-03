(function() {
  'use strict';

  angular
    .module('app')
    .config(configureStates);

    //--- https://github.com/angular-ui/ui-router/wiki

    configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configureStates($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .when('', '/') // default
        .otherwise("/404"); // For any unmatched url, redirect to /404


      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/home/template.html'
        })
        .state('about', {
          url: '/about',
          controller: 'AboutCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/about/template.html'
        })
        .state('404', {
          url: '/404',
          templateUrl: 'app/main/404.html'
        });

    }

})();
