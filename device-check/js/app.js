angular.module('App', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.CheckDevice, templateUrl:'tpl/checkdevice.html'})
      .when('/mobile', {controller: ctrl.Mobile, templateUrl:'tpl/mobile.html'})
      .when('/tablet', {controller: ctrl.Tablet, templateUrl:'tpl/tablet.html'})
      .when('/desktop', {controller: ctrl.Desktop, templateUrl:'tpl/desktop.html'})
  });
