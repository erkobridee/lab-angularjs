angular.module('app').config(

  // dependencies injection
  ['$stateProvider', '$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise("/404");

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      });

}]);
