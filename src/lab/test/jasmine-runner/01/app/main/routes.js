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
          templateUrl:'home/tpl.html'
        }
      )
      .when(
        '/about',
        {
          controller: 'AboutCtrl',
          templateUrl:'about/tpl.html'
        }
      )
      .when(
        '/dep1',
        {
          controller: 'Dep1Ctrl',
          templateUrl: 'modules/dep1/tpl.html'
        }
      )
      .otherwise({
        redirectTo:'/'
      });

}]);
