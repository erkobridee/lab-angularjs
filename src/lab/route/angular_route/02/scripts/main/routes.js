angular.module('app').config(

  // dependencies injection
  ['$routeProvider', '$locationProvider',

function($routeProvider, $locationProvider) {

    // remove the ! added by angular v1.6.1
    $locationProvider.hashPrefix('');

    $routeProvider
      .when(
        '/',
        {
          controller: 'HomeCtrl',
          templateUrl:'views/home.html'
        }
      )
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl:'views/about.html'
        }
      )
      .when(
        '/404',
        {
          templateUrl: 'views/404.html'
        }
      )
      .otherwise({ redirectTo: '/404' });

}]);
