angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

function($routeProvider) {

    $routeProvider
      .when(
        '/',
        {
          controller: 'HomeCtrl',
          templateUrl:'app/home/tpl.html'
        }
      )
      .when(
        '/users',
        {
          controller: 'UserCtrl',
          templateUrl: 'app/users/tpl.html'
        }
      )
      .when(
        '/github/users',
        {
          controller: 'GitHubUserCtrl',
          templateUrl: 'app/github/users/tpl.html'
        }
      )
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl:'app/about/tpl.html'
        }
      );

}]);
