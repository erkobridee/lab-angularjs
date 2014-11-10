angular.module('app').config(

// dependencies injection
['$routeProvider',

function($routeProvider) {

    $routeProvider
      .when('/', {controller: 'ctrl.CheckDevice', templateUrl:'views/checkdevice.html'})
      .when('/mobile', {controller: 'ctrl.Mobile', templateUrl:'views/mobile.html'})
      .when('/tablet', {controller: 'ctrl.Tablet', templateUrl:'views/tablet.html'})
      .when('/desktop', {controller: 'ctrl.Desktop', templateUrl:'views/desktop.html'});

}]);
