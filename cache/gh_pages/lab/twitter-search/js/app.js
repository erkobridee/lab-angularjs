angular.module('App', ['AppService'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.Search, templateUrl:'tpl/search.html'})
  });
