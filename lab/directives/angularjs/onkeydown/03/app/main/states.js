(function() {
  'use strict';

  angular
    .module('app')
    .config(configureStates);

    //--- https://github.com/angular-ui/ui-router/wiki

    configureStates.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function configureStates($stateProvider, $urlRouterProvider, $locationProvider) {

      // remove the ! added by angular v1.6.1
      $locationProvider.hashPrefix('');

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
