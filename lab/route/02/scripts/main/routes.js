angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

function($routeProvider) {

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
      );

}]);