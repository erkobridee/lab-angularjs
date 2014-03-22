angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

function($routeProvider) {

    $routeProvider
      .when(
        '/',
        {
          controller: 'HomeCtrl',
          templateUrl:'templates/home.html'
        }
      )
      .when(
        '/users',
        {
          controller: 'UserCtrl',
          templateUrl: 'templates/users.list.html'
        }
      )
      .when(
        '/github',
        {
          controller: 'GitHubUserCtrl',
          templateUrl: 'templates/github.html'
        }
      )
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl:'templates/about.html'
        }
      );

}]);
