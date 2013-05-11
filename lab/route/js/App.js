angular.module('App', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: HomeCtrl, templateUrl:'tpl/home.html'})
      .when('/about', {controller: AboutCtrl, templateUrl:'tpl/about.html'})
  });

function HomeCtrl($scope) {
  $scope.pageName = 'Home Page';
}

function AboutCtrl($scope) {
  $scope.pageName = 'About Page';
}