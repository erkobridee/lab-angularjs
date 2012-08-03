angular.module('App', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {controller: ctrl.CheckDeviceCtrl, templateUrl:'tpl/checkdevice.html'})
      .when('/mobile', {controller: ctrl.MobileCtrl, templateUrl:'tpl/mobile.html'})
      .when('/tablet', {controller: ctrl.TabletCtrl, templateUrl:'tpl/tablet.html'})
      .when('/desktop', {controller: ctrl.DesktopCtrl, templateUrl:'tpl/desktop.html'})
  });
