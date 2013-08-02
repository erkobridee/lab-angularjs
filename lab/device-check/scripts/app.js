angular.module('App', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.CheckDevice, templateUrl:'views/checkdevice.html'})
      .when('/mobile', {controller: ctrl.Mobile, templateUrl:'views/mobile.html'})
      .when('/tablet', {controller: ctrl.Tablet, templateUrl:'views/tablet.html'})
      .when('/desktop', {controller: ctrl.Desktop, templateUrl:'views/desktop.html'});
  });
