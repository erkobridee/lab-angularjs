angular.module('app').config(

  // dependencies injection
  ['$routeProvider',

function($routeProvider) {

    $routeProvider
      .when(
        '/', 
        {
          controller: 'HomeCtrl',
          templateUrl:'home/tpl.html'}
      )
      .when(
        '/about', 
        {
          controller: 'AboutCtrl',
          templateUrl:'about/tpl.html'
        }
      )
      .when(
        '/dep', 
        {
          controller: 'DependencyCtrl',
          templateUrl: 'depModule/tpl.html'
        }
      )
      .otherwise({
        redirectTo:'/'
      });

}]);